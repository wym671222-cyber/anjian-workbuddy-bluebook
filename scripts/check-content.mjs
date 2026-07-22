import { readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const docsRoot = join(root, "docs");
const publicExtensions = new Set([".md", ".vue", ".ts", ".mts"]);
const excludedSegments = [
  `${join("docs", "plans")}/`,
  `${join("docs", ".vitepress", "dist")}/`,
  `${join("docs", ".vitepress", "cache")}/`,
  "/assets/",
];

const forbiddenTerms = [
  "华彩",
  "赛普",
  "深业沙河",
  "安居建业 AI 协会周报",
  "安居建业AI协会周报",
  "安居建业 PPT 模板",
  "安居建业PPT模板",
  "AI 协会工作门户",
  "AI协会工作门户",
  "安居建业 AI 应用调查",
  "安居建业AI应用调查",
  "安居建业制度清单",
  "特殊不动产全链条服务体系",
];

const errors = [];
const publicFiles = [];

function walk(directory) {
  for (const name of readdirSync(directory)) {
    const path = join(directory, name);
    const workspacePath = relative(root, path);
    if (excludedSegments.some((segment) => workspacePath.includes(segment))) {
      continue;
    }
    if (statSync(path).isDirectory()) {
      walk(path);
    } else if (publicExtensions.has(extname(path))) {
      publicFiles.push(path);
    }
  }
}

walk(docsRoot);

for (const path of publicFiles) {
  const content = readFileSync(path, "utf8");
  const workspacePath = relative(root, path);

  for (const term of forbiddenTerms) {
    if (content.includes(term)) {
      errors.push(`${workspacePath}: contains forbidden public term “${term}”`);
    }
  }

  if (/\/Users\/[A-Za-z0-9._-]+\//.test(content) || /[A-Z]:\\Users\\/i.test(content)) {
    errors.push(`${workspacePath}: contains an absolute user path`);
  }

  if (/^(<<<<<<<|=======|>>>>>>>)/m.test(content)) {
    errors.push(`${workspacePath}: contains a merge-conflict marker`);
  }

  if (content.includes("待补充")) {
    errors.push(`${workspacePath}: still contains placeholder text “待补充”`);
  }

  const chapterMatch = workspacePath.match(/第 (1[1-9]|2[0-8]) 章[^/]*\/index\.md$/);
  if (chapterMatch) {
    const requiredPatterns = [
      [/# 第 /, "chapter title"],
      [/合成(?:示例|样例|场景|数据|选择示例)/, "synthetic example"],
      [/可复制|设计模板|任务模板|工作流模板|岗位任务卡/, "copyable template"],
      [/验收/, "acceptance criteria"],
      [/常见弯路/, "pitfall guidance"],
    ];
    for (const [pattern, label] of requiredPatterns) {
      if (!pattern.test(content)) {
        errors.push(`${workspacePath}: missing ${label}`);
      }
    }
  }
}

const homepagePath = join(docsRoot, ".vitepress", "theme", "components", "HomePage.vue");
const homepage = readFileSync(homepagePath, "utf8");
for (const [chapter, title] of [
  [18, "公文编制"],
  [19, "会议与待办"],
  [20, "制度与知识管理"],
  [21, "项目研判分析"],
]) {
  if (!homepage.includes(`第%20${chapter}%20章`) || !homepage.includes(`<strong>${title}</strong>`)) {
    errors.push(`HomePage.vue: missing chapter ${chapter} task card or title “${title}”`);
  }
}

if (errors.length > 0) {
  console.error(`Content checks failed (${errors.length}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Content checks passed for ${publicFiles.length} public source files.`);
