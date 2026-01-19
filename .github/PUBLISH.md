# 发布指南

## 设置 npm token

1. 登录 npm 账号
2. 访问 https://www.npmjs.com/settings/YOUR_USERNAME/tokens
3. 创建新的 Access Token（选择 "Automation" 类型）
4. 在 GitHub 仓库设置中添加 Secret：
   - 进入 Settings > Secrets and variables > Actions
   - 点击 "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: 粘贴刚才创建的 token

## 发布方式

### 方式一：通过 Git Tag 发布（推荐）

1. 更新 `package.json` 中的版本号
2. 提交更改：
   ```bash
   git add package.json
   git commit -m "chore: bump version to x.x.x"
   ```
3. 创建并推送 tag：
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```
4. GitHub Actions 会自动检测 tag 并发布到 npm

### 方式二：手动触发发布

1. 在 GitHub 仓库页面，进入 Actions
2. 选择 "Publish to npm" workflow
3. 点击 "Run workflow"
4. 选择版本类型（patch/minor/major）
5. 点击 "Run workflow" 按钮
6. Workflow 会自动：
   - 运行测试
   - 构建项目
   - 更新版本号
   - 创建 git tag
   - 发布到 npm

## 版本号规则

- **patch**: 1.0.0 -> 1.0.1 (bug 修复)
- **minor**: 1.0.0 -> 1.1.0 (新功能，向后兼容)
- **major**: 1.0.0 -> 2.0.0 (重大变更，不向后兼容)

## 注意事项

- 确保所有测试通过后再发布
- 发布前检查 `package.json` 中的版本号是否正确
- 发布后检查 npm 上的包是否正确发布
