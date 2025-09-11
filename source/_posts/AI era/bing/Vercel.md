---
date: 2024-02-05T14:27:38.087Z
updated: 2024-02-12T07:40:58.624Z
title: 国内怎么部署go-proxy-bingai项目
categories: AI纪元
cover: https://image.laogou717.com/file/image/blog/1757588542557_image.png
color: '#4A10D1'
tags:
  - AI
  - Newbing镜像
  - Newbing
keywords: AI,vercel,无服务器部署Newbing,教程
---

## Vercel 部署

 - 文档作者：[Harry-zklcdc](https://github.com/Harry-zklcdc/go-proxy-bingai)

> 
>
> 在正式进行 Vercel 部署之前请先完成「[Cloudflare Worker 部署](https://github.com/Harry-zklcdc/go-proxy-bingai/wiki/Cloudflare-Worker-%E9%83%A8%E7%BD%B2)」, 并确保域名绑定至 Cloudflare
> Cloudflare Worker 部署方式无法使用 [BingAPI](https://github.com/Harry-zklcdc/go-proxy-bingai/wiki/BingAPI)

## 1. 注册账号

> 
>
> 如果你已经注册账号了，可以跳过此步骤，进入下一步骤

进入 [Vercel 官网](https://vercel.com/), 点击右上角的「Sign Up」按钮开始注册

![](https://cdn.jsdelivr.net/gh/laogou717/IMG/LAOGOU/image-20240130133646673.png)

点击「Hobby」, 并填入你的用户名，然后点击「Continue」

![](https://cdn.jsdelivr.net/gh/laogou717/IMG/LAOGOU/image-20240130133933476.png)

点击「Continue with Github」, 登录并绑定你的 Github 账号

![](https://cdn.jsdelivr.net/gh/laogou717/IMG/LAOGOU/image-20240130134004519.png)

进入此页面，代表注册完成 🎉！

![](https://cdn.jsdelivr.net/gh/laogou717/IMG/LAOGOU/image-20240130134401223.png)



## 2. 部署项目

进入 Github [项目地址](https://github.com/Harry-zklcdc/go-proxy-bingai), 点击「Fork 按钮」

![](https://cdn.jsdelivr.net/gh/laogou717/IMG/LAOGOU/image-20240130135009512.png)

然后点击「Create fork」按钮

![](https://cdn.jsdelivr.net/gh/laogou717/IMG/LAOGOU/image-20240130135046269.png)

等待 fork 完成后，回到 Vercel, 找到刚才 fork 的项目，点击「Import」按钮

![](https://cdn.jsdelivr.net/gh/laogou717/IMG/LAOGOU/image-20240130135340560.png)

在「Environment Variables」中填入`BYPASS_SERVER`, 即「人机验证服务地址」, 比如

```bash
https://zklcdc-pass.hf.space
```

效果如下，然后点击「Add」按钮

![](https://cdn.jsdelivr.net/gh/laogou717/IMG/LAOGOU/image-20240130140046871.png)

然后再点击「Deploy」按钮，等待部署完成，在此期间可以先完成接下来的操作



## 3. 绑定域名

{% note "info simple" %}

Vercel 提供的域名在中国大陆地区易遭受 DNS 污染导致无法访问，建议绑定域名
{% endnote %}

进入 Vercel 控制台，点击项目右上方三个点，进入「Settings」设置

![](https://cdn.jsdelivr.net/gh/laogou717/IMG/LAOGOU/image-20240130141843620.png)

然后点击「Domains」, 填入自己的域名，然后点击「Add」

![](https://cdn.jsdelivr.net/gh/laogou717/IMG/LAOGOU/image-20240130142142471.png)

然后到 Cloudflare 控制台中添加对应的域名解析，一共两次，一次是 TXT 解析，一次是 CNAME 解析

（具体添加解析方法请出门右拐隔壁百度 or Google）

{% note "info simple" %}

添加解析时，请把 Cloudflare 代理打开，如下图所示
{% endnote %}

![](https://cdn.jsdelivr.net/gh/laogou717/IMG/LAOGOU/image-20240130143004623.png)



## 4. 修改 Cloudflare Worker 路由

进入 Cloudflare Worker 控制台, 点击「触发器」, 然后点击「添加路由」

![](https://cdn.jsdelivr.net/gh/laogou717/IMG@main/LAOGOU/%E4%BF%AE%E6%94%B9%E8%B7%AF%E7%94%B11.png)

然后在路由中添加`刚才绑定的域名 + /sydney/*` 和 `刚才绑定的域名 + /designer/rtc/*`, 比如：

```
bingai-demo.zklcdc.xyz/sydney/*
bingai-demo.zklcdc.xyz/designer/rtc/*
```



然后区域选择你的域名, 最后点击「添加路由」

![](https://cdn.jsdelivr.net/gh/laogou717/IMG@main/LAOGOU/%E4%BF%AE%E6%94%B9%E8%B7%AF%E7%94%B12.png)

![](https://cdn.jsdelivr.net/gh/laogou717/IMG@main/LAOGOU/%E4%BF%AE%E6%94%B9%E8%B7%AF%E7%94%B13.png)

等待 Vercel 部署完成, 即可使用绑定的域名访问



## 5. 后续升级

在 Fork 的项目地址中，点击「Sync Fork」, 等待 Vercel 自动部署完成后即可

![](https://cdn.jsdelivr.net/gh/laogou717/IMG/LAOGOU/image-20240130144302921.png)
