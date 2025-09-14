# 个人博客（基于 Hexo Theme Solitude 定制）

本项目基于 Hexo 主题 Solitude 进行二次开发与定制，原始主题归属与开源地址见：https://github.com/everfu，当前项目仅用于个人博客。 

## 本次改动与新增内容摘要

- 修复首页 Mini（简讯）模块在部分情况下报错“Swiper is not defined”的问题：
  - 调整初始化时机，只有在 Swiper 已成功加载后才调用初始化逻辑，避免资源加载顺序导致的报错。
  - 相关调整位于主题的注入模板中（js-pjax 脚本区），对 `sco.initbbtalk()` 的调用增加了对 `window.Swiper` 的判断与延迟执行。
- 第三方统计按域名按需加载：
  - 在 `_config.solitude.yml` 通过自定义脚本注入 51LA 统计，限定仅在生产域名（如 `www.laogou717.com`）下加载，避免本地开发报错或污染统计数据。
  - 使用者可根据自身域名与统计 ID 替换对应配置。
- 站点基础内容完善：
  - 隐私政策页：`source/privacy/index.md` 已提供示例内容可直接使用或修改。
  - robots 与 sitemap：提供 `source/robots.txt` 并启用 `hexo-generator-sitemap` 生成 `sitemap.xml`，方便搜索引擎收录。
- 兼容性与构建流程：清理 Hexo 缓存并完善本地预览流程，确保主题模板变更能实时反映。

## 目录结构（节选）

- 站点根目录
  - `source/` 站点内容（文章、页面、资源）
    - `privacy/index.md` 隐私政策页面
    - `robots.txt` 站点 Robots 配置
  - `themes/solitude/` 主题目录
    - `layout/includes/inject/body.pug` 主题脚本注入与首页 Mini 初始化时机调整
    - `plugins.yml` 主题外部库配置（包含 Swiper 等）
    - `_config.yml` 主题配置
  - `_config.solitude.yml` 站点使用主题的覆盖配置（含自定义脚本注入与统计逻辑）
  - `package.json` 构建与开发脚本

## 开发与预览

- 环境要求
  - Node.js（建议使用长期支持版 LTS）
  - npm 或 yarn
  - Hexo CLI（全局安装可选）

- 安装依赖

```
npm install
```

- 本地预览（默认端口 4000，可自行加 `-- -p 4001` 指定端口）

```
npm run server
```

- 清理缓存

```
npm run clean
```

- 生成静态文件

```
npm run build
```

- 部署（如已配置 deployer）

```
npm run deploy
```

## 关键配置说明

- Swiper 按需初始化
  - 主题模板 `themes/solitude/layout/includes/inject/body.pug` 中对首页 Mini 的初始化逻辑进行了守护：检测到 `window.Swiper` 存在后再初始化，如未加载则挂载到 `window.load` 事件后执行，保证 DOM 与脚本顺序正确。
- 51LA 统计按域名加载
  - 在 `_config.solitude.yml` 中注入了仅在生产域名生效的脚本，形如：
    - 判断 `location.hostname === '你的生产域名'` 后才动态插入 51LA SDK，并在 `onload` 回调中进行 `LA.init`。
  - 如需更换：请将域名与 51LA 的 `id/ck` 替换为你的实际值；或删除该段注入脚本以完全关闭。
- Robots 与 Sitemap
  - `source/robots.txt` 可直接编辑自定义爬取策略。
  - `hexo-generator-sitemap` 已在 `package.json` 中声明，构建时自动生成 `sitemap.xml`。

## 注意事项

- 若你在本地开发遇到第三方统计脚本报错，可确认是否使用了“按域名加载”的注入策略，避免在非生产环境加载相关脚本。
- 首页 Mini 模块依赖 Swiper 相关资源，请确保 CDN 或本地资源路径可正常访问。
- 如需进一步自定义外部库（如切换 CDN、版本号），可在 `themes/solitude/plugins.yml` 中修改。

## 许可与鸣谢

- 原始主题 Solitude 的版权与许可信息以其仓库和许可证为准（详见 `themes/solitude/LICENSE`）。
- 本项目仅用于个人博客，感谢 Solitude 主题作者与所有相关开源依赖的贡献。