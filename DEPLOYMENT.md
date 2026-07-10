# Cloudflare Pages 部署

本站采用 VitePress 静态构建，并通过 Cloudflare Pages 的 GitHub 集成持续部署。

## Cloudflare Pages 设置

在 Cloudflare 控制台选择 **Workers & Pages → Create application → Pages → Import an existing Git repository**，授权并选择 `AlephMuYe/WorkBuddyGuide`。

使用以下配置：

| 配置项 | 值 |
| --- | --- |
| Project name | `workbuddy-guide` |
| Production branch | `main` |
| Framework preset | `VitePress`（也可选择 None） |
| Build command | `npm run docs:build` |
| Build output directory | `docs/.vitepress/dist` |
| Root directory | `/` |
| Node.js version | `22` |

仓库中的 `.nvmrc` 会声明 Node.js 22。依赖通过 `package-lock.json` 固定，Cloudflare 构建时应使用 `npm ci` 安装。

## 本地使用同一套构建

```bash
npm ci
npm run docs:build
npm run docs:preview
```

## 自动部署行为

- 推送到 `main`：发布生产版本。
- Pull Request 或其他分支：由 Cloudflare Pages 生成预览部署。
- 构建输出是纯静态文件，不需要数据库或服务端密钥。

## 自定义域名

首次部署成功后，可在 Pages 项目的 **Custom domains** 中添加域名。域名确定后，将环境变量 `VITEPRESS_SITE_URL` 设置为完整站点地址，并同步更新 README 中的在线阅读链接。
