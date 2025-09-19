---
title: Hexo + Solitude 主题实战：谷歌 AdSense 配置与审核经验（实战版）
cover: https://image.laogou717.com/file/image/blog/note/MeaY0KQr.jpg
categories: 搭建网站
date: 2025/09/20 01:27:00
author: 老狗
tags:
  - Google AdSense
  - 站点变现
  - 审核指南
a i_text: 梳理本站通过 AdSense 审核的完整过程：从仓库配置、合规页面、广告位布局到本地/线上验证，附可复用配置清单。
---

> 这是一篇“能直接照着做”的实战总结。本站已完成 Google AdSense 审核并成功投放，下面把我们从 0 到 1 的配置、优化与排错经验系统记录，方便以后复审或给朋友复用。

## 一、结果先说：我们当前的广告策略

- 仅启用一个侧边栏信息流广告，降低密度，避免“广告过多”印象。
- 关闭自动广告与页面级广告，完全手动控制位置与样式，避免布局抖动。
- 保证合规页面齐全（隐私政策、关于页等）并在页脚和导航可直达。
- ads.txt 已在根目录准备，发布后可通过 https://www.laogou717.com/ads.txt 访问。
- 所有变更都通过本地预览验证，再上线发布，确保无脚本报错与版式异常。

## 二、站点与主题环境

- 框架与版本：Hexo 7.x + 主题 Solitude
- 仓库地址结构：
  - 站点配置：`/_config.yml`
  - 主题配置：`/_config.solitude.yml`
  - 隐私政策：`/source/privacy/index.md`
  - ads.txt：`/source/ads.txt`
  - 主题广告注入：`/themes/solitude/layout/includes/body/gadsense.pug`

## 三、我们实际使用的主题配置（可直接参考）

在 <code>/_config.solitude.yml</code> 中开启 AdSense，并仅保留侧边栏卡片广告：

⚠️ 注意：下面的 client 与 slot 必须替换为你自己的 ID，否则不会产生收益。

```yaml
# Google Adsense
google_adsense:
  enable: true
  auto_ads: false
  enable_page_level_ads: false
  aside_card: true
  post_card: false
  post_content: false
  variants:
    ads:
      style: "display:block"
      format: "fluid"
      layout_key: "-5x+cm-c-84+ne"
      slot: 2805175086
  js: https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js
  client: ca-pub-7233788645476299
  slot: 2805175086
```

为了让侧栏广告位稳定、可预期，我们把它加入首页侧栏的非吸顶列表中：

```yaml
aside:
  home:
    noSticky: "about,calendar,schedule,ads"
    Sticky: "allInfo"
```

> 这样做的好处是广告总在侧栏固定区域，避免因位置不稳定被误判为“干扰内容/布局波动”。

## 四、ads.txt 与合规页

- 文件位置：<code>/source/ads.txt</code>（部署后会在站点根目录生成）。
- 内容示例（以本站 Publisher ID 为例）：

```
google.com, pub-7233788645476299, DIRECT, f08c47fec0942fa0
```

- 隐私政策路径：`/source/privacy/index.md`（已明确 Cookie 与广告用途、个性化设置指引）。

小贴士：
- ads.txt 不是强制，但强烈建议添加；它有助于识别伪造库存、争取更多广告主预算 <mcreference link="https://support.google.com/adsense/answer/12171612?hl=en" index="3">3</mcreference>
- 修改 ads.txt 后通常需要等待一段时间（几天，低流量站点可能更久）才会在 AdSense 后台反映更新，可耐心观察 <mcreference link="https://support.google.com/adsense/answer/12171612?hl=en" index="3">3</mcreference> <mcreference link="https://support.google.com/adsense/answer/12171244?hl=zh-Hans" index="5">5</mcreference>
- 确认 ads.txt 可被成功检索：robots.txt 未禁止、返回 HTTP 200、根域/带 www 的重定向设置正确、HTTP 与 HTTPS 均可访问 <mcreference link="https://support.google.com/adsense/answer/7679060?hl=zh-Hant" index="4">4</mcreference>
- 常见误区：把 ads.txt 放在 <code>/source/_posts/</code> 下，生成后不会出现在站点根目录，AdSense 无法识别。请放在 <code>/source/</code> 目录下。

### 【重要】EEA/UK/瑞士：CMP（同意管理平台）要求

- 在向 EEA、英国、瑞士用户投放个性化广告时，必须使用经 Google 认证且集成 IAB TCF 的 CMP <mcreference link="https://support.google.com/adsense/answer/13554116?hl=en" index="1">1</mcreference>
- 关键时间点：2024-01-16（EEA/UK）、2024-07-31（瑞士）开始强制执行；未认证 CMP 的流量通常仅能获得非个性化或受限广告 <mcreference link="https://support.google.com/adsense/answer/13554116?hl=en" index="1">1</mcreference>
- 可在官方“认证 CMP 列表”中选择合适产品，或使用 Google 提供的 Privacy & messaging（其欧盟消息已通过认证） <mcreference link="https://support.google.com/adsense/answer/13554116?hl=en" index="1">1</mcreference>

- 修改 ads.txt 后通常需要等待一段时间（几天，低流量站点可能更久）才会在 AdSense 后台反映更新，可耐心观察。
- 常见误区：把 ads.txt 放在 <code>/source/_posts/</code> 下，生成后不会出现在站点根目录，AdSense 无法识别。请放在 <code>/source/</code> 目录下。

## 五、页面与布局的细节优化

- 只在侧栏投放信息流广告，主内容区不放广告，保证阅读体验。
- 保持广告容器有最小高度（由主题与样式控制），减少“首屏抖动”。
- 主题里已内置 AdSense 脚本注入与判空处理（`gadsense.pug`），加载失败时会隐藏占位，避免空白块影响观感。
- 站点隐私/关于/联系等页面均可从导航或侧栏到达，保证审核人员快速核查。

## 六、本地与线上验证流程

1) 本地预览：

```bash
hexo clean && hexo g && hexo s
```

- 打开 `http://localhost:4000/` 检查侧栏广告占位是否正常、无报错；
- 上线试时不要带 `data-adtest="on"` （否则无法计费），仅用于本地或专门测试页。

2) 线上观察：
- 首次通过后，广告位可能需要 24–48 小时逐步开始投放；
- Ads.txt 状态更新后，若站点状态为“就绪”且已完成广告代码设置，广告可能最多需要约 1 小时才开始出现 <mcreference link="https://support.google.com/adsense/answer/12171612?hl=en" index="3">3</mcreference>
- 若出现 403 或未授权，去 AdSense → “网站”里确认域名状态并申请复审（可在“网站”页点“检查更新”，再“请求复审”） <mcreference link="https://support.google.com/adsense/answer/12171612?hl=en" index="3">3</mcreference>
- 通过后建议把核心变更写入仓库日志，方便回溯。

## 七、排错备忘录（我们踩过的/见过的）

| 问题                                  | 可能原因                                                                                | 解决办法                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 广告位长期空白                        | 新号冷启动；访问的是本地环境；client/slot 配置错误；站点未授权；ads.txt 未生效          | 等待 24–48h；确认线上环境；核对 `client`/`slot` 与当前域名绑定；在 AdSense → 网站 中授权；确保 `https://你的域名/ads.txt` 可访问                                                                                                                                                                                          |
| ads.txt 读取异常                      | 文件放错目录（放进了 `_posts`）；存在 BOM/注释/多余空格；未成功发布到根目录；缓存未刷新 | 将文件放在 `/source/ads.txt`；按规范一行一条且无注释；发布后直接访问 `/ads.txt`；等待后台状态刷新                                                                                                                                                                                                                         |
| 已上传 ads.txt 但后台仍提示“需要创建” | 更新尚未被抓取；低流量站点更新延迟较长                                                  | 等待数日直至后台刷新；在 AdSense → 网站 中点击“检查更新”；必要时继续观察（低请求量最多可能需要一个月） <mcreference link="https://support.google.com/adsense/answer/12171244?hl=zh-Hans" index="5">5</mcreference> <mcreference link="https://support.google.com/adsense/answer/12171612?hl=en" index="3">3</mcreference> |
| 403/未授权                            | 当前域名未在 AdSense 后台“网站”里通过验证                                               | 在 AdSense → 网站 增加域名并发起复审，待通过后再观察投放                                                                                                                                                                                                                                                                  |
| 布局闪动/观感差                       | 开启自动广告/页面级广告导致布局波动；容器未设最小高度；首屏占位不稳定                   | 关闭自动广告与页面级广告；侧栏固定广告位；为容器写明最小高度并避免遮挡主内容                                                                                                                                                                                                                                              |

## 八、可复用清单（TL;DR）

- [x] `/_config.solitude.yml` 启用 AdSense：`enable: true`，仅保留 `aside_card: true`；
- [x] 关闭自动广告：`auto_ads: false`，`enable_page_level_ads: false`；
- [x] 配置 `client` 与稳定的 `slot`，并在 `variants` 中声明样式；
- [x] 侧栏广告位加入 `aside.home.noSticky`，固定位置；
- [x] `/source/ads.txt` 写入 `google.com, pub-你的ID, DIRECT, f08c47fec0942fa0`，发布后可访问；
- [x] `/privacy/` 明确 Cookie 与广告用途说明；
- [x] 本地 `hexo s` 自查无报错与版式异常；
- [x] 线上通过后，观察 24–48 小时投放情况，必要时在后台发起复审。

## 参考与延伸阅读

- Ads.txt 是 IAB 的合规倡议，格式示例与操作流程（英文原文）：
  - https://support.google.com/adsense/answer/12171612?hl=en
- 中文/日文帮助页也说明了“不是强制，但强烈建议使用”，以及状态更新可能需要几天时间：
  - https://support.google.com/adsense/answer/12171612
- GDPR/TCF 与 EEA/UK/瑞士 CMP 要求（官方说明）：
  - https://support.google.com/adsense/answer/13554116?hl=en
- AdSense 计划政策总览与展示位置要求：
  - https://support.google.com/adsense/answer/48182?hl=zh-Hans

## TL;DR 流程小抄

- 配置：主题 AdSense 开关 → 填写 client/slot → aside 固定位置
- 本地验证：`hexo s` 打开 `http://localhost:4000/`，查看无报错/占位正常
- 部署上线：`hexo g && hexo d`，确认 `https://你的域名/ads.txt` 可访问
- 等待投放：新站常见 24–48h；期间保持站点稳定与可访问
- 复核优化：观察填充率、页面体验与核心 Web 指标，必要时微调位置

## 收益相关的预期管理

- 单广告位（仅侧栏）
  - 优点：体验最干净、审核风险最低、对跳出/阅读影响小
  - 缺点：点击率与展示量有限，收入曲线较“稳但不高”
  - 适合：内容为王、希望轻广告/低侵扰的站点起步阶段
- 多广告位（正文内/底部/列表间）
  - 优点：曝光与点击更高、RPM 更容易提升
  - 缺点：版式压力大、容易被判“广告密度高/干扰内容”，影响体验
  - 适合：已稳定产出、内容排版可控且愿意投入调优
- 自动广告 vs 手动广告
  - 自动：快速覆盖、持续探索新位置，但可能引起布局波动
  - 手动：位置可控、可与设计深度融合，前期工作量更大
  - 建议：起步阶段以“手动 + 少量稳定位”为主，量起来后再小范围尝试自动广告

## 审核阶段的常见拒绝理由（自查清单）

- [ ] 内容不足或采集痕迹明显（每类至少 3 篇高质量原创/整合内容）
- [ ] 隐私政策缺失或内容不合规（需说明 Cookie/广告用途/个性化设置）
- [ ] 页面无法访问或加载异常（404/跳转/移动端样式错乱）
- [ ] 导航不清晰（无关于/联系/分类页，站内搜索缺失）
- [ ] 广告诱导点击/占位遮挡正文（避免弹窗、避免首屏抖动）

## 多语言/地区体验与现实情况

- 国内访问 AdSense 后台常需科学上网；建议在稳定网络环境下进行配置与调试
- 广告填充率与 eCPM 存在地区差异：海外（尤其北美/欧洲）通常高于国内流量
- 访问结构对收益影响很大：移动端高占比时，应关注侧栏位在移动端的可见性与折叠策略

## 后续优化方向（数据驱动）

- 做 A/B 测试：
  - 位置：仅侧栏 vs 正文末尾 vs 首页列表间隔卡片
  - 形式：信息流 vs 展示广告；不同尺寸与样式
  - 指标：RPM、CTR、跳出率、阅读完成度、CLS/FID 等
- 随着内容与流量增长：
  - 考虑启用“自动广告”（先在非核心页面试点）
  - 增加 1 个稳定的正文后广告位（保持密度不过载）
- 端侧优化：
  - 流量峰值在移动端时，评估“侧栏位在移动端的实际可见性”，必要时给移动端单独布局

## 案例对比：仅侧栏卡片 vs 自动广告

- 仅侧栏卡片（当前策略）：
  - 版面整洁、对阅读几乎零干扰；首屏稳定，CLS 风险低
  - 收益曲线更依赖“访问量”增长而非“点击率”
- 自动广告：
  - 能自动试探更高曝光的位置，但可能插入正文/首屏，带来排版抖动
  - 审核与长期体验风险相对更高，需严格控制展示密度与页面类型

> 本网站自从 **23年**开始，向网站内尝试添加广告,30天的广告收入为 **70$** 左右,但由于当时没有考虑到大陆地区收款等问题,最终决定去除广告,而如今想做一个实验,尝试除招行卡外其他银行卡的收款流程,故重新添加了卡片,并将其设置为仅在侧边栏中显示.