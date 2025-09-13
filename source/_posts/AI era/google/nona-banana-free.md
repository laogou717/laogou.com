---
title: "火爆全网的生图工具: “nano banana” 怎么无限使用?"
description: "Google「Nano-Banana」生图/修图模型一文速懂：能做什么、哪里用、怎么出3D手办?"
date: "2025-09-10"
cover: https://cdn.statically.io/gh/JonasTech0/Jonas-imgs-240211/main/imagesnanobanana.jpg
categories: AI纪元
color: "#201D24"
tags:
  - nanobanana
  - Gemini 2.0 Flash
  - 热门
ai_text: "Google「Nano-Banana」生图/修图模型一文速懂：能做什么、哪里用、怎么出3D手办?"
---

> **Nano-Banana** 火了半个多月了,但因为身体等多方面原因,没有出相关的视频和文章,今天一次补齐。看完你就能理论无限使用这个**非常nb**的生图模型。

![nano-banana](https://image.laogou717.com/file/image/blog/1757589619167_imagesPasted_image_20250910111310.png)

## 一、Nano-Banana 是什么？

Google 在 2025-08 的官方更新里推出 **Gemini 2.5 Flash Image**，并在多处材料中以「**nano-banana**」称呼该图像生成与编辑模型：支持**文生图**、**图+文编辑**、**多图融合/风格迁移**、**对话式局部修改**。  
![](https://image.laogou717.com/file/image/blog/1757589666488_imagesPasted_image_20250910111511.png)
- 发布与能力概览：Developers Blog；Gemini 产品博客（强调**人物/宠物一致性**、换装、融合、风格套用等场景）。

![](https://image.laogou717.com/file/image/blog/1757589711359_imagesPasted_image_20250910111342.png)

> **社区热度**：Google 高管对外披露，Nano-Banana 并入后为 Gemini App 带来 **1000 万+ 新用户**、**2 亿+ 次编辑**；“把人物/宠物做成 **3D 手办**”成为爆款玩法。  

![](https://image.laogou717.com/file/image/blog/1757589706423_imagesassets_task_01jq80j5v9ew9vjervtqcjjk51_img_0.webp)
![](https://image.laogou717.com/file/image/blog/1757589706806_imagesGemini_Generated_Image_gmzeqigmzeqigmze.png)



---

## 二、它强在哪里（核心优势）

- **连续编辑 & 角色一致性**：多轮修改后仍能保持**面部/造型**一致，避免“越改越不像”。
- **对话式控制**：直接用自然语言“**加/减物体、换材质/光影/姿势**”，也能利用模型的**世界知识**辅助生成与编辑。
- **多图到图（Blend）**：把多张输入**融合**成统一场景，或把 A 图**风格**迁到 B 图。
- **文本渲染可读**：中文/英文**标题与字形**更稳定，适合海报、UI 画面。
- **可追溯与合规**：默认嵌入 **SynthID** 数字水印（无感），利于平台标注“AI 生成”。

这里的重点就是第一个—— **角色一致性** ,如果是其它能力的话,我们熟知的GPT4o就能轻松做到,甚至速度更快,但一致性上目前为止**Nano-banana**仍然是独一档。                                                                                                                                              

---

## 三、哪里能用（官方/主流入口｜建议收藏）

- **Gemini 网页端**（直接体验）：[https://gemini.google.com](https://gemini.google.com)（选择 **2.5 Flash**，可上传参考图或直接写提示）
![](https://image.laogou717.com/file/image/blog/1757589745466_imagesPasted_image_20250910124535.png)

- **Google AI Studio**（Playground）：[https://aistudio.google.com](https://aistudio.google.com)（右上角选 **Gemini 2.5 Flash Image / Nano-Banana**；支持“一键生成 API 代码”）
![](https://image.laogou717.com/file/image/blog/1757589757489_imagesPasted_image_20250910124608.png)

- **Google AI实验室 无限使用**（Image generation with Gemini / **Nano-Banana**）：[https://labs.google/fx/zh/tools/whisk](https://labs.google/fx/zh/tools/whisk)

![](https://image.laogou717.com/file/image/blog/1757589773612_imagesPasted_image_20250910125059.png)

---

## 四、爆款玩法：把人/宠物“变成 3D 手办”

玩法思路：**上传人物/宠物清晰半身照 → 设定“1/7 比例手办 + 透明底座 + 包装盒 + 桌面场景 + 浅景深”**；Nano-Banana 在**面貌一致性**与**材质质感**上效果稳定。

**中文提示词（复制即用）**

```text
将我上传的照片转成 1/7 比例的「商业化实体手办」，写实风。
摆在电脑桌上，使用无文字的透明圆形亚克力底座。
请保证与原图的五官与发型一致；塑料材质要有哑光上色的笔触质感。
旁边放一个玩具包装盒，盒面参考我的照片做海报风（不要出现品牌商标）。
摄影级柔光，浅景深。
```

**英文提示词（社区口吻）**

```text
Create a 1/7-scale commercialized action figurine of the person in the reference photo.
Place it on a computer desk with a clear round acrylic base (no text or logos).
Keep facial identity consistent with the original photo.
Realistic plastic with matte paint strokes.
Add a toy box next to the monitor; the box art references the portrait without using trademarks.
Shallow depth of field, studio soft lighting.
```

**延伸风格关键字**（替换可得不同风格）： `Funko Pop / Nendoroid / Q-style / clay / LEGO / wool felt / diorama / resin kit / garage kit`

---

## 六、更多高讨论度提示词模板（复制即用）

**1) 海报**

```text
生成 1080×1350 竖版海报，主标题“周末市集”（简体中文目前可用性极差,可尝试英文提示词），
留副标题与二维码占位；暖色霓虹 + 柔光；干净留白
```

> 该模型对英文**文本可读性**做了优化，适合含英文标题的设计。

**2) 多图融合 + 风格迁移**

```text
把两张上传的人像融合成一张合影；保持两人面貌一致性；
整体套用 1980s 影楼风格，绒布幕背景与胶片颗粒。
```

![](https://image.laogou717.com/file/image/blog/1757589804450_imagesPasted_image_20250910125618.png)

**3) 以图改图（局部替换）**

```text
在保持人物五官不变的前提下，把 T 恤换成米色针织开衫；
加入窗边逆光与皮肤高光；不要改变发型。
```

![](https://image.laogou717.com/file/image/blog/1757589804531_imagesPasted_image_20250910125658.png)

---

## 七、注意事项（务必阅读）

- **版权/肖像/商标**：商用素材请确保你拥有对应授权；“BANDAI 风盒子”可作为**风格参照**，但不要直接使用他人的照片,当然我上面使用Sam的图片只是为了演示🐶。
- **水印标注**：Gemini 生成/编辑的图片会嵌入 **SynthID**；部分界面还会加**可见水印**。
- **可用性/网络**：国内网络不稳时建议优先使用 **AI Studio**（或切换网络/DNS）。

---

## 参考与延伸阅读

[https://developers.googleblog.com/en/introducing-gemini-2-5-flash-image/](https://developers.googleblog.com/en/introducing-gemini-2-5-flash-image/)

[https://aistudio.google.com/models/gemini-2-5-flash-image](https://aistudio.google.com/models/gemini-2-5-flash-image)

[https://ai.google.dev/gemini-api/docs/image-generation](https://ai.google.dev/gemini-api/docs/image-generation)

[https://gemini.google/overview/image-generation/](https://gemini.google/overview/image-generation/)
