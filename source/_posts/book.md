---
title: Bookmarklet小书签
cover: https://img.laogou717.com/file/d74f8b7408a7f97da1be6.jpg
categories: 浏览器怎么用
date: 2024/05/14 15:30:00
main_color: '#da4150'
tags:
  - Bookmarklet
  - 浏览器小书签
  - Google
ai_text: 正在撰写..
---
# 下载使用浏览器 Bookmarklet（小书签）

## 下载bookmarklet code:6666


- [下载源码](https://pan.baidu.com/s/1olHsMYzcOtGCYiY6nUs6eQ?pwd=6666)


>
>是一种特殊的书签，其链接不是指向一个URL，而是包含了JavaScript命令。本质上它是一个存储在浏览器书签栏中的小型JavaScript程序，可以让用户在任何网页上快速执行特定的任务，比如格式化页面布局、提取信息、或是与特定服务进行交互等。如果利用得当可以替代掉一些常用的扩展插件。
>
## 如何创建和使用 Bookmarklet
### 创建步骤：

编写用于实现特定功能的**JavaScript代码。**
将**JavaScript代码**进行URL编码，并以`javascript:`开头形成一个链接。
将这个链接拖动到浏览器的书签栏，或右键书签栏选择“添加页面”来保存这个链接。
#### 1.示例代码：
假设我们要创建一个 **Bookmarklet** ，用来隐藏网页上的所有图片，以下是相应的**JavaScript代码：**
```javscript
javascript:(function() {
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
})();
```
#### 2.添加书签🔖
1. 开启你的网络浏览器（如Chrome、Firefox等）。拖动后面这个[示例文字](https://ceshi.ceshi)到书签栏
2. 右键我们添加到这个书签,点击修改,删除掉URL里的内容并把我们复制的 **javascript代码** 粘贴上去
3. 随便找个有图片的网站,点击一下这个书签,我们就可以看到所有图片都被隐藏了  

![演示图片](https://cdn.jsdelivr.net/gh/JonasTech0/Jonas-imgs-240211/2024-02-11-WebDesktop/img%E6%B6%88%E5%A4%B1.gif)

## 定制专属的Bookmarklet🔖
> 
>下面我将开始介绍如何使用 Bookmarklet 来实现一些常见的功能，我们将借助自己的大脑和生成式AI来做到这一点。同时在文章末尾我将给各位打包上百个书签,方便大家体验。
>
### B站视频封面
每次发布视频之前我都想知道它的封面最终展现是什么样子的，但我没有找到一个好的工具，这时候我们就可以让AI来帮我们生成一个Boookmarklet来实现封面预览。
1. 首先我们在控制台找到想要放置封面**位置的网页代码**,复制下来

![](https://img.laogou717.com/file/0dc92d26ed6cdb321485b.png)

2. 接下来我们把复制的代码发送给AI,然后描述一下我们的要求,然后生成一个Bookmarklet

![](https://img.laogou717.com/file/d9e492b0e4334d1f6f2ad.png)

3. 然后我们按照之前的步骤,点击一下这个书签,粘贴上我们的封面就可以在这里进行预览了

![](https://img.laogou717.com/file/fd9d9874e3685cb679e9c.png)
![](https://img.laogou717.com/file/8e7b834dfe6bf60f3255f.png)

### 待续...


# 小书签引用
[奶酪书签](https://www.runningcheese.com/bookmarklets)
