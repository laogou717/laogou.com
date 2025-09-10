---
date: 2024-03-01T07:09:04.189Z
title: 国内访问Vercel上的域名?试试这个!
categories: 搭建网站
cover: https://img.laogou717.com/file/d87e97b8a1c36143257bc.jpg
main_color: '#000000'
tags:
  - Vercel
  - dns
  - 国内提速
ai_text: >-
  如果你在中国大陆，你可能会发现Vercel的标准域名服务受到限制。但别担心，有办法解决这个问题：调整A记录：将A记录的IP从76.76.21.21改成76.223.126.88，这样可以通过不同的网络路径绕过限制。
  更新CNAME记录：尽管Vercel说CNAME问题解决了，还是推荐你把CNAME记录从cname.vercel-dns.com改成cname-china.vercel-dns.com，这样可以确保访问，并增加冗余性。
  在域名注册商处添加记录：比如在Cloudflare，找到DNS管理界面，修改A记录和CNAME记录为上面提到的地址。
---


![国内访问不了Vercel上绑定的域名?试试这个吧!](https://raw.githubusercontent.com/laogou717/IMG/main/LAOGOU/997771ac87cfc28505595c6f00f539f7ce8feced-1200x675.jpg)
```
域名的可访问性对于保障信息流通至关重要。Vercel 面临的一个问题是，
由于中国大陆的特定网络政策，使得 vercel.com 和 vercel.app 域在中国大陆地区无法访问。
```

## 处理方案

### 调整 A 记录

- 请将您的 A 记录的 IP 地址从`76.76.21.21` 更改为顶级域DNS
```
76.223.126.88
```
- 这一更改是通过另一条网络路径来重定向流量，从而绕过现有的访问障碍。

### 更新 CNAME 记录

- 尽管Vercel在最新公告中宣告影响 CNAME 记录的问题已经得到解决，但还是仍然建议将 CNAME 记录从 `cname.vercel-dns.com`更改为二级域DNS
```
cname-china.vercel-dns.com
```

- 这一更改不仅确保了持续的访问能力，而且提供了额外的冗余性，增强了您的域名抵御未来可能出现中断的能力。

### 在域名注册商处添加记录

- 登录您的域名注册商管理控制台。以cloudflare举例


![cf主页](https://lgblog.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcl1ktc5x%2Fproduction%2F5cfe1fb3de8082b83245fb9258c91ef4042d5235-2712x1292.png&w=3840&q=75)

主页选中激活的域

- 找到更新 DNS 记录的部分。


![dns](https://lgblog.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcl1ktc5x%2Fproduction%2F0f83042881beed3694eec3283da0b97240e38b17-510x1060.png&w=1080&q=75)

左侧找到DNS服务

- 修改 A 记录，指向 `76.223.126.88`


![A记录](https://lgblog.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcl1ktc5x%2Fproduction%2F406eabf252419c67dcbbffbc85e3ea7744b2c920-2462x1128.png&w=3840&q=75)

A记录

- 将 CNAME 记录修改为 `cname-china.vercel-dns.com`


![二级域](https://lgblog.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcl1ktc5x%2Fproduction%2Ff9a9d2b7f63806c4f6f780f9696b4380157e0dfc-2462x1124.png&w=3840&q=75)

二级域

- 通过上述步骤，即使在中国大陆这样的特殊网络环境下，您的网站也能保持正常的访问和运行。建议您尽早完成这些更改，以确保服务不受影响😄。