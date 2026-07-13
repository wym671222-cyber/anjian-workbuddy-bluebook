import { defineConfig } from "vitepress";

import { bluebookSidebar } from "./sidebar";
import { configureMermaidMarkdown } from "./mermaid-markdown";
import { createPageDescription, createSeoHead } from "./seo";

const siteUrl = process.env.VITEPRESS_SITE_URL || "https://workbuddy-bluebook.internal";

export default defineConfig({
    lang: "zh-CN",
    title: "安居建业 WorkBuddy 蓝皮书",
    titleTemplate: ":title · 安居建业 WorkBuddy 蓝皮书",
    description: "从第一项真实工作，到可复用的 AI 工作系统：安居建业内部 WorkBuddy 实践读本。",
    cleanUrls: true,
    lastUpdated: true,
    srcExclude: ["**/source.md", "plans/**"],
    transformPageData: (pageData, { siteConfig }) => ({
      description: createPageDescription(siteConfig.srcDir, pageData),
    }),
    transformHead: (context) => createSeoHead(siteUrl, context),
    head: [
      ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
      ["meta", { name: "theme-color", content: "#e21b22" }],
      ["meta", { name: "robots", content: "noindex, nofollow" }],
      ["meta", { name: "author", content: "安居建业 WorkBuddy 蓝皮书共创组" }],
      [
        "meta",
        {
          name: "keywords",
          content:
            "安居建业,WorkBuddy,AI 工作系统,Skills,MCP,自动化,多智能体,内部培训",
        },
      ],
    ],
    markdown: {
      config: configureMermaidMarkdown,
      image: {
        lazyLoading: true,
      },
      theme: {
        light: "github-light",
        dark: "github-dark",
      },
    },
    themeConfig: {
      logo: { src: "/brand/anjian-logo.png", alt: "安居建业" },
      siteTitle: false,
      nav: [
        { text: "首页", link: "/" },
        { text: "开始阅读", link: "/bluebook/" },
        { text: "阅读指南", link: "/reading-guide" },
        { text: "共创案例", link: "/community/contributing" },
      ],
      sidebar: bluebookSidebar,
      search: {
        provider: "local",
      },
      outline: {
        level: [2, 3],
        label: "本页目录",
      },
      docFooter: {
        prev: "上一篇",
        next: "下一篇",
      },
      lastUpdated: {
        text: "最后更新",
        formatOptions: {
          dateStyle: "medium",
          timeStyle: "short",
        },
      },
      footer: {
        message:
          '内部试用 · 基于 <a href="https://github.com/AlephAITech/WorkBuddyGuide" target="_blank" rel="noreferrer">WorkBuddyGuide</a> 开源项目改编 · MIT License · Pixel icons by <a href="https://pixeliconlibrary.com/" target="_blank" rel="noreferrer">HackerNoon</a>',
        copyright: "Copyright © 2026 WorkBuddy Guide Contributors · 安居建业内部共创",
      },
    },
  });
