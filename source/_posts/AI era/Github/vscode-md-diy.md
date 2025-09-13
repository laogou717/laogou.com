---
title: 效率！效率！！还是TM的效率！！！
description: 一旦尝试了Vscode自定义代码片段,你会发现以前写文章像是原始人一样!通过对Md文档的某些字段进行指定来快速调用,事半功倍!
date: 2024-09-27T00:00:00.000Z
cover: https://cdn.statically.io/gh/JonasTech0/2025-Archive-Photo-Records/main/main/images/blog%E5%8D%9A%E5%AE%A2%E5%B0%81%E9%9D%A2.jpg
tags:
  - AI
  - 开源项目
  - 效率
  - 写作
keywords:
  - AI
  - 开源项目
  - 效率
  - 写作
categories: AI纪元
color: '#0a0c1c'
updated: 2024-09-29T00:00:00.000Z
ai_text: Vscode 自定义代码提升 Markdown 写作效率。 案例展示 Vscode 自定义代码片段的便捷性。 介绍 Vscode 自定义代码配置方法及注意事项。
---

> 因博主在尝试自动化出现技术错误，而事前并未对图片数据进行备份，所以导致本篇博文中的演示图片全部丢失😮‍💨。

## Vscode自定义代码

> 我之所以更新慢的原因,跟这个静态博客脱不开关系,每次写Markdown格式的时候,我总想着加一些有趣的小标签进去,但是老记不住那么多语法,所以想了个办法来解决这个问题 。


利用Vscode的**代码自动补全功能**，自定义一些常用“代码”片段，然后一劳永逸。

### 优势

- [x] 高效
- [x] 方便
- [x] 容易上手
- 简单介绍
   以往如果我在 `MD文件` 中加入像 `文字块` 这样的内容时，我就需要去到主题的 `配置文档` 中查看它的语法，然后复制、修改参数，才能正常使用。每次写文章都要**东找西找**的，效率低只是一方面，主要是太麻烦，人都是有惰性的 
   而自从我设置了**自定义代码片段**后，我感觉前所未有的舒畅，仿佛天都比以前蓝了。（我猜的，好几天没见太阳了） 
    
### 案例展示
#### 折叠菜单
- 我举个几个简单的例子来说明
    假设我现在要在下方加入一个**折叠菜单**，通常情况下需要这么写：
{% tabs text %}

<!-- tab 代码 -->
```


{% fold 折叠菜单 %}

这是一个缩小的图片{% inline_img https://esimg.laogou717.com/i/2024/09/29/77c3uf.webp '' 60px %}

{% endfold %}



```
<!-- endtab -->

<!-- tab 演示 -->



{% fold 折叠菜单 %}

这是一个缩小的图片{% inline_img https://esimg.laogou717.com/i/2024/09/29/77c3uf.webp '' 60px %}

{% endfold %}



<!-- endtab -->

{% endtabs %}

    但使用自定义代码片段后，我只需要在文件中输入我自己设置的 **片段前缀**系统就会自动显示设定的代码：
    ![自定义代码片段1](https://esimg.laogou717.com/i/2024/09/29/8o3q1j.webp)

    然后按下键盘上的 {% keyboard TAB %} 或 {% keyboard Enter %}，就能直接调用配置的代码，并且光标自动定位到我设置的地方或自动选中某些文字。

    ![Vscode快捷输入](https://esimg.laogou717.com/i/2024/09/29/8oqgry.webp)
    

#### yaml头部元数据
相信各位使用静态博客的朋友都对下面这种`yaml`格式的**元数据**不陌生吧。
其中有些**字段**我们每次更新都需要进行配置，不然博客框架就无法正常生成**静态文件**。 
比如本篇文章的配置：

```
---
title: 效率！效率！！还是TM的效率！！！
description: 一旦尝试了Vscode自定义代码片段,你会发现以前写文章像是原始人一样!通过对Md文档的某些字段进行指定来快速调用,事半功倍!
date: 2024-09-27
cover: https://esimg.laogou717.com/i/2024/09/28/hxlmb.webp
tags: [AI,开源项目,效率,写作]
keywords: [AI,开源项目,效率,写作]
categories: AI纪元
main_color: #0a0c1c
updated: 2024-09-29
ai: 
- 
---

```

你会发现很多内容都是可以重复利用的。而不用每次都重新输入或复制粘贴。
为此，我在**自定义代码**中写了两个版本的元数据配置，一个用来发布 `AI纪元` 系列内容，另一个用来发布我的个人 `日记`。

{% tabs text %}
<!-- tab AI纪元 -->


{% fold 点击展开 %}

```
"AI纪元头部": {
		"prefix": "aitop",
		"body": [
			"---",
			"title: 【必需】文章标题",
			"description: 【可选】文章描述",
			"date: ${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DATE}",
			"cover: ${CLIPBOARD/(http)(:\\\\/\\\\/[^\\\\s)]+)/https$2/}",
			"tags: [AI,开源项目]",
			"keywords: ",
			"categories: AI纪元",
			"main_color: ",
			"---"
		],
		"description": "AI纪元专用代码"
```

{% endfold %}



- 说明
    - 通过`${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DATE}`自动获取发布当日的日期时间
    - 通过`$CLIPBOARD`自动获取**粘贴板**中的内容并填入封面字段中
    - 加入`${CLIPBOARD/(http)(:\\\\/\\\\/[^\\\\s)]+)/https$2/}`正则表达式把**http**处理为**https**
**这样我只需要输入“aitop”就可以直接生成带封面、日期的元数据** {% inline_img https://esimg.laogou717.com/i/2024/09/29/admmr0.webp '' 40px %}

<!-- endtab -->

<!-- tab 日记 -->



{% fold 点击展开 %}

```
"日记": {
		"prefix": "top",
		"body": [
			"---",
			"title: ${CURRENT_MONTH}月${CURRENT_DATE}日记",
			"date: ${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DATE}",
			"categories:  日记",
			"keywords: [神烦老狗,日记,生活感悟]",
			"description: ${CURRENT_YEAR}年${CURRENT_MONTH}月${CURRENT_DATE}日生活记录",
			"cover: https://esimg.laogou717.com/i/2024/09/26/r88udl.webp",
			"main_color: #000000",
			"---"
		],
		"description": "博客日记头部部分"
```

{% endfold %}



**这个没什么可说的，我的日记默认都是以日期开头，固定的封面。**

<!-- endtab -->

{% endtabs %}    

#### 文章更新日期
**我讨厌手动输入日期时间**，所以自定义了`updated: ${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DATE}`字段，这样当我去更改一些旧文时，直接在文章头部输入简写 {% keyboard U %}  {% keyboard D %} 并按下**回车**，就能自动填入当日的日期。

{% gallery true,,2 %}
![输入前缀使用1](https://esimg.laogou717.com/i/2024/09/29/amtsyz.webp)
![输入前缀使用2](https://esimg.laogou717.com/i/2024/09/29/amyjz1.webp)
{% endgallery %}

这样一些支持显示**文章更新时间**的博客主题就会出现这样的提示，非常人性化{% inline_img https://esimg.laogou717.com/i/2024/09/29/aut64s.webp '' 40px %}。
{% gallery true,,2 %}
![文章更新时间](https://esimg.laogou717.com/i/2024/09/29/aou71i.webp)
{% endgallery %}

## 配置方法
### VSCode 设置
- 基础设置
    首先需要在**vscode**中找到关于**自定义代码**的设置。你可以在窗口的左下角，点击设置按钮找到代码片段选项。
    {% gallery true,,1 %}
    ![vscode设置](https://esimg.laogou717.com/i/2024/09/29/bmsw6f.webp)
    {% endgallery %}

    点击后**Vscode**的搜索框会被唤醒。接着我们直接搜索**Markdown**，找到一个名为**markdown.json**的文件。

    {% gallery true,,2 %}
    ![vscode搜索框](https://esimg.laogou717.com/i/2024/09/29/boeisr.webp)
    ![搜索markdown.json](https://esimg.laogou717.com/i/2024/09/29/bp8wjv.webp)
    {% endgallery %}

    进入 `markdown.json` 文件后，即可开始编辑自定义代码片段。这个文件中的配置只在 Markdown 文件中生效，不会影响其他语言的输入。
    
> 如果想全局生效，可以选择 "New Global Snippets file"（创建全局代码片段）。

    
    以下是进入编辑器后的设置示例👇

    {% gallery true,,2 %}
    ![进入markdown.json](https://esimg.laogou717.com/i/2024/09/29/bxxmjr.webp)
    {% endgallery %}



{% fold 基本语法解释（非必读） %}

- 基本语法
VS Code 的自定义代码片段是通过 `.code-snippets` 文件编写的，可以存放在用户全局配置目录或特定项目中。基本语法如下：

```json
{
  "代码片段名称": {
    "prefix": "触发前缀",  // 输入的前缀，用于触发代码片段
    "body": [
      "代码的第一行",
      "代码的第二行，可以使用占位符：${1:默认值}",
      "多行内容可用数组表示，每行一个元素"
    ],
    "description": "对该代码片段的描述"
  }
}
```

- 语法说明
    - **prefix**: 用于触发代码片段的关键词，输入后会唤醒**代码自动补全**功能。
    - **body**: 代码片段的内容，支持多行和占位符。占位符可以使用 `${1:默认值}`，其中 `1` 是占位符的索引，`默认值` 是提示的默认内容。
    - **description**: 对代码片段的描述，解释其用途。

- 示例
创建一个简单的 HTML 模板：

```json
{
  "HTML模板": {
    "prefix": "html-template",
    "body": [
      "<!DOCTYPE html>",
      "<html lang=\"en\">",
      "<head>",
      "    <meta charset=\"UTF-8\">",
      "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
      "    <title>${1:Document}</title>",
      "</head>",
      "<body>",
      "    ${2:<!-- 内容放在这里 -->}",
      "</body>",
      "</html>"
    ],
    "description": "一个简单的 HTML 页面模板"
  }
}
```

- 示例解读
    - **prefix**: `html-template`，当输入这个前缀或简写时，VS Code 会提示插入该代码片段。
    - **body**: HTML 模板的内容，包含了占位符 `${1:Document}` 和 `${2:<!-- 内容放在这里 -->}`，用于快速修改标题和内容。
    - **description**: 简要说明了代码片段的用途，方便选择。

{% endfold %}


### 一键生成自定义代码
{% inline_img https://esimg.laogou717.com/i/2024/09/29/c7pke9.webp '' 40px %} <span style="font-size:200%;">如果</span>你并不想自己编写这破玩意儿，那么你可以试试我做的这个 <b>自定义代码生成器</b> 👇


![Vscode自定义代码工具](https://esimg.laogou717.com/i/2024/09/29/71tvti.webp)
 Vscode自定义代码片段
 在vscode配置常用的代码，并且提供唤醒前缀，只需输入一次。
 
- [mdcode](https://mdcode.laogou717.com) — Vscode自定义代码工具
  
  ![mdcode](https://esimg.laogou717.com/i/2024/09/29/71tvti.webp)


界面很干净简洁 <span style="font-size:80%;">（高情商）</span>,但到底怎么写下面的信息呢？
**如果你有这个问题，**不要怀疑，应该是我前面废话太多了，没讲清楚，我们**一步一步**来看。
<span style="font-color:black;">把需要<b>偷懒、重复</b>的内容填入下面的"内容区域"</span>
![Vscode自定义代码工具首页](https://esimg.laogou717.com/i/2024/09/29/cifqpq.webp)

比如我希望每篇博文下方我都加入一个 互联网要饭环节
那么我就在内容区输入我准备好的内容：“**V我50～啊～V我50～**”。
![V我50](https://esimg.laogou717.com/i/2024/09/29/dbxz7o.webp)


> 触发字段最好设置英文，要是你不怕输入的时候麻烦，硬用中文当前缀Vscode倒是也能支持。

- 生成配置
    输入完毕后，点击生成按钮会出现一个弹窗，直接点弹窗里的复制。然后粘贴到我们的`markdown.json`文件中去（大括号的中间）。
    然后按下`ctrl`+`s`保存文件。

{% gallery true,,2 %}
 ![生成V我50代码](https://esimg.laogou717.com/i/2024/09/29/djxtxp.webp)
 ![编辑markdown.json](https://esimg.laogou717.com/i/2024/09/29/dlg0w4.webp)
{% endgallery %}

接着随便创建一个`.md`文件，在其中输入：刚刚设置的“**触发前缀**”，看看是否会出现自动补全的提示。

{% gallery true,,2 %}
 ![vscode触发前缀](http://esimg.laogou717.com/i/2024/09/29/do0qke.webp)
{% endgallery %}
如果成功就**万事大吉🎉**，接下来你只需要寻按照自己需要添加，或者把你的需求告诉chatgpt，直接让它帮你写。
如果失败就**也没关系😄**，你只需要复制这段代码。
```
    "[markdown]": {
        "editor.quickSuggestions": {
            "comments": "on",
            "strings": "on",
            "other": "on"
        },
        "diffEditor.ignoreTrimWhitespace": true
    },

```
然后在重新点击左下角的设置按钮，点击**设置**，在设置页面的右上角打开配置文件，跟上面写自定义代码一样，直接**滑到底部**粘贴进大括号里保存就可以正常识别了。
{% gallery true,,2 %}
![vscode设置](https://esimg.laogou717.com/i/2024/09/29/dwzsz8.webp)
![vscode设置面板](https://esimg.laogou717.com/i/2024/09/29/dxwjqu.webp)
![vscode配置页面](https://esimg.laogou717.com/i/2024/09/29/e1rztu.webp)
![vscode配置页面2](https://esimg.laogou717.com/i/2024/09/29/e2dy9i.webp)
{% endgallery %}
## 尾声
### 元数据的配置
由于我们不是配置全局页面的代码补全，所以会导致你在`markdown.json`中配置的字段，在头部`---`的包围之中无法唤出自动补全。
  - 要么直接全局配置，要么就把头部的代码，全部放到`yaml.json`中配置。格式都是一样的。
  - {% gallery true,,2 %}
  ![yaml.json文件配置](https://esimg.laogou717.com/i/2024/09/29/ewgb35.webp)
  {% endgallery %}
