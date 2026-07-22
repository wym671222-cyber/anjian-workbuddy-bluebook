# 贡献指南

感谢你愿意一起完善《WorkBuddy 实战蓝皮书》。我们希望每次贡献都能帮助读者更快完成一个真实任务，并留下可以验证、复用和迁移的方法。

## 贡献类型

- 修正错别字、失效链接、过时截图或不准确表述。
- 补充真实案例、失败排查和验收标准。
- 新增 Skill、连接器、API、自动化或多 Agent 实践。
- 增加岗位路线图和行业工作流。
- 改进网站体验、搜索、导航、响应式布局和无障碍。
- 提供英文翻译或其他语言版本。

## 内容原则

1. **可复现**：尽量写清环境、输入、步骤、交付物和预期结果。
2. **可验证**：说明怎样判断任务真的完成，而不是只描述过程。
3. **事实与经验分开**：产品事实附来源；个人经验说明适用范围。
4. **安全优先**：涉及文件写入、账号、密钥、发布或外部操作时说明权限与风险。
5. **尊重隐私和版权**：不要提交个人数据、访问凭据或无权公开的内容。

## 修改正文

每个页面位于 `docs/bluebook/` 的对应目录中：

- `index.md`：网站展示的正文。
- `assets/`：该页使用的图片、GIF、视频或附件。
- `source.md`、`source.xml`、`metadata.json`：本地同步产生的原始资料，默认不提交到 Git。

请优先修改 `index.md`。新增素材时使用有意义的文件名，并尽量压缩体积，但不要牺牲可读性。

## 本地验证

```bash
npm install
npm run docs:build
npm run docs:preview
```

提交前请确认：

- 构建成功。
- 新增或修改的内部链接可访问。
- 图片和视频能加载。
- 手机和桌面宽度下内容都可读。
- 没有提交密钥、个人信息或构建产物。

## 站点自动发布

`main` 分支每次更新后（包括 PR 合并），GitHub Actions 会自动校验并构建 VitePress，然后把静态产物同步到 `wym671222-cyber/anjian-workbuddy-bluebook-site` 的 `main` 分支。

源码仓库需要配置 Actions 密钥 `SITE_DEPLOY_TOKEN`：

- 使用 fine-grained personal access token，仅授权 `anjian-workbuddy-bluebook-site` 仓库。
- Repository permissions 只需 `Contents: Read and write`。
- 在源码仓库的 `Settings → Secrets and variables → Actions` 中保存，不得写入文件、PR 或日志。

如果内容没有变化，工作流会正常结束而不创建空提交。也可以在 Actions 页面手动触发 `Deploy published site` 重新发布。

## Pull Request

PR 描述请包含：

- 改了什么。
- 为什么需要修改。
- 如何验证。
- 是否涉及产品事实更新；如果涉及，请附来源和核对日期。

尽量让一个 PR 只解决一个主题，便于审阅和回退。
