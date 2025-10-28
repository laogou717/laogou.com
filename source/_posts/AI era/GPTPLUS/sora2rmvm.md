---
title: Sora2 如何下载无水印的视频？
cover: https://image.laogou717.com/file/image/blog/2024/PmOX0CTC.jpg
categories: AI纪元
tags:
  - Sora
  - 抓包技术
  - iOS工具
date: 2025-10-03 19:30:00
keywords:
  - Sora视频下载
  - 无水印视频
  - iOS抓包
  - Reqable教程
  - Azure SAS Token
  - 视频水印去除
  - Sora技术分析
  - 移动端抓包
  - HTTPS抓包
  - 视频URL获取
description: 深度解析Sora视频水印机制，揭秘App端无水印与Web端有水印的技术原理。详细教程：使用Reqable等iOS抓包工具，轻松获取Sora无水印视频下载链接。
ai_text: 通过技术分析发现Sora会生成带水印和无水印两个版本，结合iOS抓包工具Reqable，可以轻松获取无水印视频下载链接。本文提供完整的技术原理解析和实操教程。
---
## Sora核心发现
> 今天生成Sora视频下载时，发现了一个有趣的细节——为什么App内播放视频没有水印，而Web分享的却带了水印？又该如何去除水印呢?

通过抓包分析，发现了两个不同的视频URL：

**App端（无水印）：**

```
/videos/00000/src.mp4
```

**Web端（有水印）：**

```
/videos/00000_wm/src.mp4
```

注意那个 `_wm` 后缀吗？没错，水印就在这里！

### 预生成双版本策略

其实，OpenAI在视频生成时会创建**两个版本**：

* 一个是原始的无水印版本
* 另一个是带有品牌水印的版本

这两个版本会分别存储在Azure Blob Storage的不同路径下。

### SAS Token签名机制

每个URL中都包含了Azure的共享访问签名（SAS Token）：

```
?st=2025-10-03T04:44:38Z      # 开始时间
&se=2025-10-09T05:44:38Z      # 7天有效期
&sig=4GjrmVJR9k8s...          # 数字签名
```

**关键发现**：签名是绑定完整路径的！

当我尝试把 `00000_wm` 改成 `00000`，想要获取无水印版本时，Azure返回了错误：

```xml
<Code>AuthenticationFailed</Code>
<Message>Signature did not match</Message>
```

错误信息暴露了"String to sign"的内容，它包含了完整路径：

```
/blob/.../videos/00000/src.mp4
```

也就是说，**你无法通过修改URL绕过水印**，因为路径的变化会导致签名验证失败。

## 解决办法

好，废话说得够多了，接下来是最简单的解决方案——

首先，你需要一台iOS设备，因为只有在App中才能看到无水印的视频，而在网页中，无论什么时候显示的都是带水印的视频。

### 步骤：

#### 1. **安装抓包工具**

首先，在你的iOS设备上打开**App Store**，下载并安装一个抓包工具。我推荐使用[Reqable](https://apps.apple.com/us/app/reqable/id6473166828)，这个工具支持HTTPS抓包，并且操作简单。其他类似的抓包工具也可以，功能也类似。
![Reqable](https://image.laogou717.com/file/sHCOS31B.jpeg)
#### 2. **安装证书**

* 打开Reqable后，有两种工作方式供大家选择,一种是与电脑端协同,另一种是在手机上完成,这里我选择在手机上完成(可以按需选择)
![工作模式](https://image.laogou717.com/file/ka0n1dwY.png)
* 你会看到一个证书安装页面。选择“安装根证书”。
![安装根证书](https://image.laogou717.com/file/c3zajJ3E.png)
![点击安装](https://image.laogou717.com/file/Ge9rHLHq.png)
* 这里选择第二种安装方式,点击图中黄色的下载字样,会自动跳转到浏览器下载
![下载](https://image.laogou717.com/file/a3FqK4lG.jpeg)
![允许](https://image.laogou717.com/file/GaXgFUQ9.png)
* 下载完成后，我们打开系统**设置**，你会看到一个提示：**已下载描述文件**。
![已下载描述文件](https://image.laogou717.com/file/V3haRZOl.jpeg)
![点击安装](https://image.laogou717.com/file/IlJJDyfa.png)
* 点击进入，找到“安装”按钮，按提示操作，确认安装该证书。
![安装](https://image.laogou717.com/file/hK1I4m7G.png)
![继续安装](https://image.laogou717.com/file/Jw4hI3WZ.png)
#### 3. **信任证书**

安装完证书后，我们需要在设备设置中信任它。按以下步骤操作：

* 打开设备设置，进入**通用** -> **关于本机** -> **证书信任设置**。
* 在“已安装的证书”列表中找到刚才安装的证书，打开并启用信任。
![关于本机](https://image.laogou717.com/file/w7NAU0bh.png)
![信任证书](https://image.laogou717.com/file/cne9fDix.png)
![完全信任](https://image.laogou717.com/file/PTMdcAJj.png)

#### 4. **加载视频**

* 打开Sora，浏览并加载你想要下载的无水印视频。无论你是选择自己已发布的视频，还是其他视频，确保视频已经在App内完整加载。
{% gallery %}
![我发布的视频](https://image.laogou717.com/file/LVv8T7KB.png)
![别人发布的视频](https://image.laogou717.com/file/Zsud3uQH.png)
{% endgallery %}

#### 5. **重启Reqable**

* 加载完视频后，重启Reqable，在主界面点击右下角的“飞机图标”，开启VPN功能。
![打开小飞机](https://image.laogou717.com/file/bReBTK1P.png)
* 重新打开Sora，浏览中的无水印视频就会触发Reqable的抓包。
* 浏览之后返回Relabel界面，你会看到所有的网络请求。仔细寻找视频请求URL，通常以 `/video/` 开头，包含视频文件的后缀名（如 `.mp4`）。
![查看请求](https://image.laogou717.com/file/bw0tl3AO.png)
* 点击视频请求，复制该链接
![复制链接](https://image.laogou717.com/file/8JoaoQ6z.png)

#### 6. **在浏览器中打开**

* 将复制的URL粘贴到浏览器中打开，网页上会显示无水印的视频。
* 现在，你就可以通过浏览器下载无水印的视频了！
{% video 'https://videos.openai.com/vg-assets/assets%2Ftask_01k6mqt2mse2g8b7dpdz1g6gg7%2Ftask_01k6mqt2mse2g8b7dpdz1g6gg7_genid_7a1b24f5-610b-4a9a-8509-c0a2236f9015_25_10_03_09_55_718767%2Fvideos%2F00000%2Fsrc.mp4?st=2025-10-03T09%3A20%3A23Z&se=2025-10-09T10%3A20%3A23Z&sks=b&skt=2025-10-03T09%3A20%3A23Z&ske=2025-10-09T10%3A20%3A23Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=oAhJJVyrq5GJ1bXPA6O1DP7QKxZkRJ66JI9MMGz0s0U%3D&az=oaivgprodscus' %}

---

#### 7. ***注意事项**
  
* 如果你本地网络不能直接访问Sora,而是通过梯子访问的话,那么开启Relabel小飞机后你的网络梯子可能会断掉，因为Reqable的VPN会拦截所有流量。
* 如果你强行在抓取时开启梯子，可能会导致抓包失败。
* 在加载时，Reqable会在后台记录所有网络请求，包括视频请求。
* 如果在Sora中不断打开多个视频，Reqable也会不断捕捉这些视频请求。只要你找到正确的视频链接，就能下载无水印版本。
* 如果关闭Reqable时忘记关闭VPN图标，可能会导致Sora无法正常访问，看到黑屏。
* 关闭VPN时一定要确保小飞机图标关闭，否则可能需要重启手机来恢复正常。

## 免责声明

**重要提醒：本文内容仅供技术学习和研究使用！**

- 🔬 **学习目的**：本教程旨在帮助读者理解网络抓包技术和视频流媒体的技术原理
- ⚖️ **合法使用**：请确保你有权限下载相关视频内容，遵守当地法律法规
- 🚫 **禁止滥用**：严禁将本技术用于侵犯版权、商业盗用或其他非法用途
- 📝 **版权尊重**：下载的视频内容应仅供个人学习使用，不得进行商业传播
- 🛡️ **风险自负**：使用本教程产生的任何法律风险由使用者自行承担

### 💬 技术交流

如果你在使用过程中遇到技术问题，欢迎在评论区讨论交流。让我们一起在合法合规的前提下，探索更多有趣的技术知识！



