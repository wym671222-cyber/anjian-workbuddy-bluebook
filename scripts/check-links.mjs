import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const distRoot = join(root, "docs", ".vitepress", "dist");
const configuredBase = process.env.VITEPRESS_BASE || "/";
const normalizedBase = configuredBase === "/" ? "/" : `/${configuredBase.replace(/^\/+|\/+$/g, "")}/`;
const htmlFiles = [];
const errors = [];

function walk(directory) {
  for (const name of readdirSync(directory)) {
    const path = join(directory, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (extname(path) === ".html") htmlFiles.push(path);
  }
}

function pageRoute(path) {
  const outputPath = relative(distRoot, path).replaceAll("\\", "/");
  if (outputPath === "index.html") return normalizedBase;
  if (outputPath.endsWith("/index.html")) {
    return `${normalizedBase}${outputPath.slice(0, -"index.html".length)}`;
  }
  return `${normalizedBase}${outputPath.replace(/\.html$/, "")}`;
}

function outputCandidates(pathname) {
  let decoded;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    return [];
  }

  if (normalizedBase !== "/" && !decoded.startsWith(normalizedBase)) return [];
  const sitePath = normalizedBase === "/" ? decoded : `/${decoded.slice(normalizedBase.length)}`;
  const relativePath = sitePath.replace(/^\/+/, "");
  const direct = resolve(distRoot, relativePath);

  if (!direct.startsWith(distRoot)) return [];
  if (sitePath.endsWith("/")) return [join(direct, "index.html")];
  if (extname(direct)) return [direct];
  return [direct, `${direct}.html`, join(direct, "index.html")];
}

function readIds(path) {
  const html = readFileSync(path, "utf8");
  return new Set([...html.matchAll(/\sid=["']([^"']+)["']/g)].map((match) => match[1]));
}

if (!existsSync(distRoot)) {
  console.error("Link checks require a completed VitePress build.");
  process.exit(1);
}

walk(distRoot);

for (const htmlPath of htmlFiles) {
  const html = readFileSync(htmlPath, "utf8");
  const route = pageRoute(htmlPath);
  const references = [...html.matchAll(/\s(?:href|src)=["']([^"']+)["']/g)].map((match) => match[1]);

  for (const reference of references) {
    if (/^(?:https?:|mailto:|tel:|data:|javascript:|\/\/)/i.test(reference)) continue;

    let target;
    try {
      target = new URL(reference, `https://bluebook.local${route}`);
    } catch {
      errors.push(`${relative(root, htmlPath)}: invalid reference “${reference}”`);
      continue;
    }

    const candidates = outputCandidates(target.pathname);
    const targetPath = candidates.find((candidate) => existsSync(candidate));
    if (!targetPath) {
      errors.push(`${relative(root, htmlPath)}: missing target “${reference}”`);
      continue;
    }

    if (target.hash && extname(targetPath) === ".html") {
      const id = decodeURIComponent(target.hash.slice(1));
      if (id && !readIds(targetPath).has(id)) {
        errors.push(`${relative(root, htmlPath)}: missing anchor “${reference}”`);
      }
    }
  }
}

if (errors.length > 0) {
  console.error(`Link checks failed (${errors.length}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Link checks passed for ${htmlFiles.length} generated HTML files.`);
