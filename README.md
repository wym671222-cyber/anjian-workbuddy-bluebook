<p align="center">
  <img src="./docs/plans/design-concepts/home-hero.png" alt="安居建业 WorkBuddy 蓝皮书：首页视觉基准" width="100%">
</p>

<h1 align="center">安居建业 WorkBuddy 蓝皮书</h1>

<p align="center"><strong>从第一项真实工作，到可复用的 AI 工作系统</strong></p>

<p align="center">
  公司内部试用 · <a href="./docs/reading-guide.md">阅读指南</a> ·
  <a href="./docs/community/contributing.md">共创案例规范</a> ·
  <a href="./LICENSE">MIT License</a>
</p>

> 第一篇保留基础教程，第二至第四篇将以安居建业真实、脱敏、可复现的工作材料逐章筛选和共创。

## 本地阅读

当前版本不部署到公网。网站保留完整侧边栏、全文搜索、章节目录、深色模式、流程图和移动端适配，仅供本地或经批准的内部环境使用。

## 你会在这里看到什么

| 部分 | 内容 |
| --- | --- |
| 第一篇 · 使用手册 | 下载、安装、界面、第一个任务、Skill、连接器、API 和自动化 |
| 第二篇 · 安居建业实战 | 逐章筛选并改写为公司真实工作案例 |
| 第三篇 · 进阶系统 | 用公司案例打造 Skill、多 Agent 与可靠自动化 |
| 第四篇 · 岗位落地 | 结合公司材料形成岗位路线和核心业务工作流 |
| 附录 | 常用指令模板与场景速查表 |

## 推荐阅读方式

- **第一次使用**：从[第 1 章](./docs/bluebook/第一篇%20使用手册：先把%20WorkBuddy%20用起来/第%201%20章%20初识%20WorkBuddy/index.md)开始，按顺序完成第一篇。
- **已经有具体任务**：直接进入第二篇对应案例，跑通后再阅读第三篇。
- **准备团队落地**：重点阅读第三、四篇，并记录权限边界、验收标准和失败回退。

更完整的路线见[如何阅读这本蓝皮书](./docs/reading-guide.md)。

## 本地阅读与开发

需要 Node.js 20～24，推荐 Node.js 22。

```bash
npm install
npm run dev
```

本地构建：

```bash
npm run docs:build
npm run docs:preview
```

## 内部共创

案例提交前必须脱敏并确认材料权限。共创内容包括：

- 错别字、失效链接和过时信息修正。
- 可复现的真实工作案例。
- Skill、连接器、API 和自动化实践。
- 岗位路线图与行业工作流。
- 网站导航、搜索、样式和无障碍体验改进。

请先阅读[安居建业 WorkBuddy 共创案例规范](./docs/community/contributing.md)。第二至第四篇在用户确认章节方向前，不批量删除、改名或改写。

## 目录结构

```text
anjian-workbuddy-bluebook
├─ docs/
│  ├─ .vitepress/       # 网站配置与主题
│  ├─ bluebook/         # 蓝皮书正文、图片、视频
│  ├─ community/        # 共创说明
│  └─ index.md          # 网站首页
├─ scripts/             # 内容同步工具
├─ CONTRIBUTING.md
├─ README.md
└─ LICENSE
```

## 声明

本项目是安居建业内部试用读本，不构成 WorkBuddy 官方说明。涉及产品功能、界面、价格、可用范围和安全策略等时效性信息时，请以 WorkBuddy 官方渠道为准；涉及公司流程和权限时，以公司正式制度为准。


## 开源协议

本项目采用 [MIT License](./LICENSE) 开源。你可以自由使用、复制、修改和分发本项目，但需要保留原始版权声明和许可证文本。
