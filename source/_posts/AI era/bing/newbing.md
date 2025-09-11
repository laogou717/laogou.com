---
title: 24年最佳国内Newbing镜像!秒过验证!
cover: https://image.laogou717.com/file/image/blog/1757589078879_image.png
categories: AI纪元
date: 2024-02-06T18:55:44.000Z
color: '#5B5B89'
tags:
  - AI
  - Newbing镜像
  - Newbing
keywords: AI,Newbing镜像,Newbing部署教程
ai_text: 此文档提供了详细的指南和资源，旨在帮助用户部署一个自动过验证、无需登录即可使用的代理服务，该服务支持 OpenAI API 格式调用，并且适用于国内用户。通过这项技术，用户可以无障碍访问一些可能因地区限制而无法直接访问的网络资源。
---
## 前言
  2024 年重大更新 100% 免登陆 自动过验证 国内可用  支持 Openai API 格式调用。
![功能演示](https://cdn.jsdelivr.net/gh/laogou717/IMG/LAOGOU/1-14/1.gif)

## ✍️作者的开源项目

https://github.com/Harry-zklcdc/go-proxy-bingai#教程十分重要 


<div class="terminal-loader" style="border: 0.1em solid #333; background-color: #1a1a1a; color: #0f0; font-family: 'Courier New', Courier, monospace; font-size: 1em; padding: 1.5em; width: 20em; margin: 100px auto; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); border-radius: 4px; position: relative; overflow: hidden; box-sizing: border-box;">
  <!-- ... other elements ... -->
  <div class="text" style="display: inline-block; white-space: nowrap; overflow: hidden; border-right: 0.2em solid green; animation: typeAndDelete 4s steps(30) infinite, blinkCursor 0.5s step-end infinite alternate; margin-top: 1.5em; max-width: 100%;">正在努力更新中...敬请期待...</div>
</div>

<style>
@keyframes blinkCursor {
  50% {
    border-right-color: transparent;
  }
}

@keyframes typeAndDelete {
  0%,
  10% {
    width: 0;
  }
  45%,
  55% {
    width: 100%;
  }
  90%,
  100% {
    width: 0;
  }
}
</style>

## 不想部署直接用下面的演示站点

1.https://laogou-go-proxy-bingai.hf.space

2.https://xx1.laogou666.com/

3.https://harry-zklcdc-go-proxy-bingai.hf.space

4.https://dongsiqie-bing.hf.space

5.https://dongsiqie-bingai.hf.space

6.https://bingai.zklcdc.xyz/

### 自己挑选<span style="text-decoration: underline wavy green;">你想要使用的平台</span>部署这个项目

- 抱脸部署：https://huggingface.co/spaces/Harry-zklcdc/go-proxy-bingai?duplicate=true&visibility=public
- 抱脸部署验证服务：https://huggingface.co/spaces/zklcdc/pass?duplicate=true&visibility=public
- 在 Replit 部署：https://replit.com/@sanwuchengqun/Go-Proxy-BingAi?v=1
- Vercel 部署：https://vercel.com/new/clone?repository-url=https://github.com/Harry-zklcdc/go-proxy-bingai
  - BYPASS_SERVER =验证服务地址
  - USER_KievRPSSecAuth=在 bing 官网控制台获取
      
- Zeabur 部署：https://zeabur.com/zh-CN

### **获取 Newbing 登陆 Cookie 脚本复制**

```plain
javascript: (function() {var value = document.cookie.split('; ').
find(row => row.startsWith('_U=')).split('=')[1];prompt
('Copy to clipboard: Ctrl+C, Enter', value);})();
```


### 演示站点：

- https://bingai.zklcdc.xyz


### 制作自己的代理

- 首先进入<span style="color: #3491f9; ">[Cloudflare 首页](https://dash.cloudflare.com)</span>点击左侧的**Workers&pages**
  ![Cloudflare 首页](https://cdn.jsdelivr.net/gh/laogou717/IMG/LAOGOU/Desktop/58456.png)

- 然后创建应用
  ![workers 页面](https://cdn.jsdelivr.net/gh/laogou717/IMG/LAOGOU/abnerworks.Typora/image-20240115060824815.png)

- 创建 workers
  ![确认创建页面](https://cdn.jsdelivr.net/gh/laogou717/IMG/LAOGOU/abnerworks.Typora/image-20240115061143596.png)

- 输入一个名字，然后点击<span style="color: #3491f9; ">蓝色</span>按钮创建

  ![](https://cdn.jsdelivr.net/gh/laogou717/IMG/LAOGOU/abnerworks.Typora/image-20240115061615200.png)

  - 点击编辑代码开始操作
    ![](https://cdn.jsdelivr.net/gh/laogou717/IMG/LAOGOU/abnerworks.Typora/image-20240115062044603-20240115103949217.png)

- 进入编辑页面后左侧点击页面图标，然后新建  ```bjs.js``` 和 ```index.html```文件，并把下面对应的<span style="color: #3d9983; ">代码复制粘贴</span>进对应的地方
  ![](https://cdn.jsdelivr.net/gh/laogou717/IMG/LAOGOU/abnerworks.Typora/image-20240115062455367.png)
  ![](https://cdn.jsdelivr.net/gh/laogou717/IMG/LAOGOU/abnerworks.Typora/image-20240115062607520.png)

- <span style="color: #ff8332; ">bjs.js 代码</span>

地址：https://github.com/Harry-zklcdc/go-proxy-bingai/blob/master/cloudflare/bjs.js


~~- <span style="color: #ff8332; ">index.html 代码</span>~~

~~地址：https://github.com/Harry-zklcdc/go-proxy-bingai/blob/master/cloudflare/index.html~~

作者说可以不用加<span style="text-decoration: underline wavy red;">index.html,</span>worker.js 会自动解析，所以请略过这一步

- 不要忘记把下面的替换掉原本的<span style="color: #ff8332; ">worker.js 代码</span>都完成后点击右上角的按钮 **保存并部署**

地址：https://github.com/Harry-zklcdc/go-proxy-bingai/blob/master/cloudflare/worker.js


![保存并部署](https://cdn.jsdelivr.net/gh/laogou717/IMG/LAOGOU/abnerworks.Typora/image-20240115072526716.png)

- 最后返回创建的应用，点击**触发器**添加一个域名并做好 DNS 解析，点击 添加域名

![绑定域名](https://cdn.jsdelivr.net/gh/laogou717/IMG/LAOGOU/abnerworks.Typora/image-20240115081709448.png)

更详细的内容可以 [点击这里](https://www.bilibili.com/video/BV1gK4y1c749/?spm_id_from=333.999.0.0)观看我的视频

如果是为了给 Vercel 做本站支持请添加路由，这段没写呢，去翻之前视频吧...

## 📎 参考文章

- [Harry-zklcdc 开源网站](https://github.com/Harry-zklcdc/go-proxy-bingai).