# 产品需求文档 PRD：AI 视频创作引擎（Buzzy.now 竞品分析与产品设计）

## 一、项目概述

### 1.1 项目背景
本文档基于对标网站 buzzy.now（Buzzy AI - Pro Video Engine for Everyone）的完整分析，形成产品需求文档，并指导使用 Next.js（App Router）+ SSR 技术开发一个功能与形态相似的 AI 视频创作平台。整体视觉采用经典电影工具配色体系：深灰主色 + 金黄点缀，营造专业影视制作工具的质感。

### 1.2 产品定位
一句话定位：面向所有人的专业级 AI 视频引擎，扮演"你的 AI 导演"。

产品将主流顶级视频/图像生成模型聚合于一体，并叠加影视级创作工具（分镜、运镜、打光），让普通用户也能产出电影质感的短片、动画、MV 与讲解视频。

### 1.3 目标用户
- 独立影视创作者、短片导演
- 内容创作者、自媒体、短视频作者
- 动画师、概念设计师
- 音乐视频（MV）与知识科普讲解视频制作者
- 广告与品牌营销团队

---

## 二、竞品分析（Buzzy.now）

### 2.1 核心价值主张
- 标题："Meet Your AI Director"（认识你的 AI 导演）
- 副标题："Pro Video Engine for Everyone"（人人可用的专业视频引擎）
- 核心卖点：多模型聚合 + 影视级创作控制 + 一站式故事叙事工作流

### 2.2 模型矩阵（多模型聚合能力）
Buzzy 聚合了当前主流的视频/图像生成模型，用户可自由切换：

| 模型 | 能力描述 |
| --- | --- |
| 2.5 Model | 4K 画质、30 秒片段、50 个素材 |
| Seedance 2.0 | 动作驱动的视频创作 |
| Google Omni | 电影级视频生成 |
| Kling | 高保真物理模拟 |
| Runway | 新一代创意视频工具 |
| Nano Banana 2 | 轻量级视频合成 |
| Veo 3.1 | 谷歌高级视频生成 |
| GPT Image 2 | 照片级图像生成 |
| Hailuo | 快速且富有表现力的视频草稿 |
| Wan | 开源顶尖视频模型 |
| Pixverse | 风格化与动态视频生成 |

### 2.3 内容形态分类
- AI Film（AI 电影短片）：Backroom、The Last Key、Before Rome Sunset、Pink Lemon、Beyond the Moment、The Essence of Chairs 等作品
- Animations（动画）：Neomorph 等
- MV & Explainer（音乐视频与讲解）：Rap/BeatMaster、Dance/BioLearn、Geosmin Facts/SciShow 等

### 2.4 创意工具（Creative Agent for storytelling）
- Storyboard Creator（分镜脚本生成器）：生成详细分镜，跨场景保持角色、物体、地点等要素一致性。
- Multi-angle Camera Control（多角度运镜控制）：拖动立方体即可精确控制镜头运动，定制镜头质感。
- Relighting in Real Time（实时重打光）：重新定位主光增强深度与真实感，调整整体亮度与色温，并可开启轮廓光实现干净的主体分离。

---

## 三、网站结构

### 3.1 站点地图（Site Map）
```
首页 (/)
├── 顶部导航 Header
│   ├── Logo
│   ├── 产品 Product（下拉：模型矩阵 / 创意工具）
│   ├── 作品展示 Showcase
│   ├── 定价 Pricing
│   ├── 资源 Resources（FAQ / 博客）
│   ├── 登录 Sign In
│   └── 立即创作 Start Creating（主 CTA）
│
├── Hero 区（Meet Your AI Director）
├── 模型矩阵区（Create with the latest model）
├── 作品展示区（Showcase：AI Film / Animations / MV & Explainer）
├── 创意工具区（Creative Agent for storytelling）
│   ├── Storyboard Creator
│   ├── Multi-angle Camera Control
│   └── Relighting in Real Time
├── 工作流程区（How it works）
├── 定价区（Pricing）
├── 常见问题 FAQ
├── 结尾行动号召 CTA
└── 页脚 Footer
    ├── 产品链接
    ├── 资源链接
    ├── 公司信息
    └── 社交媒体 / 版权
```

### 3.2 页面清单
| 页面 | 路径 | 说明 | 渲染方式 |
| --- | --- | --- | --- |
| 首页 | / | 完整落地页，包含全部核心板块 | SSR |
| 作品详情 | /showcase/[id] | 单个作品工作流展示 | SSR（可扩展） |
| 定价 | /pricing | 独立定价页 | SSR（可扩展） |

---

## 四、产品功能

### 4.1 功能模块清单
1. 多模型聚合与切换：统一入口调用多家视频/图像模型。
2. 文生视频 / 图生视频：输入文字或参考图生成视频。
3. 分镜脚本生成（Storyboard Creator）：自动拆解剧本为分镜，保持角色/道具/场景一致性。
4. 多角度运镜控制（Camera Control）：可视化控制镜头轨迹与运动。
5. 实时重打光（Relighting）：调整主光、色温、亮度、轮廓光。
6. 作品展示与工作流回放（Showcase / View workflow）。
7. 内容形态模板：AI Film、Animations、MV & Explainer。
8. 定价与订阅体系。

### 4.2 功能优先级（MoSCoW）
- Must（必须）：多模型展示、Hero 转化、创意工具介绍、作品展示、定价、FAQ。
- Should（应该）：作品详情页、运镜可视化交互演示。
- Could（可以）：用户登录、生成任务队列、社区分享。
- Won't（暂不）：真实模型推理后端（本次为落地页与前端形态复刻）。

---

## 五、主要界面

### 5.1 首页界面
- Hero：大标题 "Meet Your AI Director"，副标题、主 CTA，背景为电影胶片质感 + 金色高光。
- 模型矩阵：卡片网格，展示 11+ 模型名称与能力标签，支持高亮当前主推模型。
- 作品展示：分类标签（AI Film / Animations / MV & Explainer）+ 作品卡片（缩略图、标题、作者、View workflow）。
- 创意工具：三大工具左右图文交替布局，每个含标题、描述、Try it 按钮。
- 定价：三档套餐卡片对比。
- FAQ：折叠问答。
- Footer：多列链接 + 版权。

### 5.2 视觉设计规范（电影工具配色）
- 主背景：深灰（#141414 / #1A1A1A）
- 面板 / 卡片：稍浅灰（#222222 / #2A2A2A）
- 主强调色：金黄（#F5C518 类 IMDb 金 / #D4AF37 古典金）
- 文字：主文字 #F5F5F5，次要文字 #A8A8A8
- 分隔线：#333333
- 字体：无衬线（Inter / 系统字体），标题加粗、字距收紧
- 风格：胶片颗粒、金色描边、高对比、专业暗色影棚质感

---

## 六、关键词策略（SEO）

### 6.1 核心关键词（Core Keywords）
- AI 视频生成
- AI video generator
- AI 导演 / AI Director
- 专业视频引擎 / Pro video engine
- 文生视频 / text to video
- 图生视频 / image to video
- 电影级 AI 视频 / cinematic AI video
- AI 短片制作
- 多模型 AI 视频平台

### 6.2 长尾关键词（Long-tail Keywords）
- 如何用 AI 生成电影级短片
- AI 分镜脚本生成器在线
- AI 多角度运镜控制工具
- 实时重打光 AI 视频工具
- 一键生成 4K 30 秒 AI 视频
- Seedance / Kling / Runway / Veo 在线对比使用
- AI 音乐视频 MV 生成
- AI 科普讲解视频制作
- AI 动画短片生成平台
- 保持角色一致性的 AI 视频生成
- 面向创作者的 AI 影视工具
- 免费在线 AI 视频生成器

### 6.3 SEO Meta 建议
- Title：AI 视频创作引擎 - 人人可用的专业 AI 导演 | 多模型电影级视频生成
- Description：聚合 Seedance、Kling、Runway、Veo 等主流模型，提供分镜脚本、多角度运镜、实时打光等电影级创作工具，让每个人都能一键生成 4K 电影质感的 AI 短片、动画与 MV。
- Keywords：AI 视频生成, AI 导演, 文生视频, 图生视频, 电影级 AI 视频, 分镜脚本生成, AI 短片制作

---

## 七、技术方案

### 7.1 技术栈
- 框架：Next.js（App Router）
- 渲染：SSR（服务端渲染，利于 SEO 与首屏性能）
- 样式：纯 CSS（CSS Modules / 全局样式），避免重型 UI 框架
- 语言：TypeScript
- 部署：静态导出 / Node 服务

### 7.2 目录结构（规划）
```
app/
├── layout.tsx        全局布局与 metadata
├── page.tsx          首页（SSR）
├── globals.css       全局样式与配色变量
components/
├── Header.tsx
├── Hero.tsx
├── ModelGrid.tsx
├── Showcase.tsx
├── CreativeTools.tsx
├── Workflow.tsx
├── Pricing.tsx
├── FAQ.tsx
├── CTA.tsx
└── Footer.tsx
```

### 7.3 非功能性需求
- 性能：首屏 SSR，图片懒加载，Lighthouse 性能 > 85。
- SEO：语义化标签、metadata、结构化数据。
- 响应式：适配桌面、平板、移动端。
- 可访问性：对比度符合 WCAG AA。

---

## 八、验收标准
1. 首页完整呈现 Hero、模型矩阵、作品展示、创意工具、定价、FAQ、Footer 全部板块。
2. 采用深灰 + 金黄配色，视觉专业统一。
3. 服务端渲染生效，metadata 正确，源码含关键词。
4. 响应式布局在移动端正常显示。
5. `next build` 无错误，本地可正常启动预览。

---

## 九、英文版本地化与品牌升级（v2 增补）

### 9.1 品牌与目标市场
- 品牌名称由 CINEFORGE 升级为 **BuzzyAI Video**，直接面向欧美（English-speaking）市场。
- 全站文案（导航、Hero、模型矩阵、作品、创意工具、工作流、定价、FAQ、CTA、Footer）统一翻译为英文。
- SEO metadata、OpenGraph、lang 属性统一为 `en`，核心关键词同步英文化（见第一章关键词表英文版）。

### 9.2 新增静态栏目（首页）
在首页原有板块基础上，面向欧美用户新增以下静态内容栏目：
- **Director Canvas 特色区**：介绍"导演画布"核心能力，配 69KB 循环 GIF 演示（public/director-canvas.gif），展示分镜生成、运镜控制、实时打光、生成预览的动态流程。
- **Use Cases（应用场景）**：分创作者、营销团队、教育机构、影视工作室四类静态卡片。
- **Model Partners（模型伙伴墙）**：以 logo 墙形式静态展示 Seedance、Kling、Runway、Veo 等合作模型。
- **Testimonials（用户评价）**：欧美用户视角的英文静态评语卡片。

### 9.3 产品落地页：Director Canvas（/director）
必须提供一个可交互的 Web UI 产品落地页，让用户"导演动画并生成视频"。
- 路由：`/director`，SSR 服务端渲染外层落地页 + 客户端交互组件 `DirectorCanvasApp`（'use client'）。
- 交互能力：
  - 脚本/提示词输入（Script / Prompt）。
  - 分镜面板（Storyboard）：可添加多个 Shot，每个 Shot 含画面描述、运镜方式、时长。
  - 运镜控制（Camera Move）：推/拉/摇/移/升/降等预设与强度滑块。
  - 打光控制（Lighting）：冷暖光、强度、色温滑块，实时影响预览。
  - 模型与比例选择（Model、Aspect Ratio、Duration）。
  - "Generate Video" 按钮：模拟生成过程并展示预览占位（前端演示态，可对接真实视频生成 API）。
- 视觉：继承深灰 + 金黄电影工具体系，激活态按钮用金黄实色背景；胶片颗粒背景、金色高光。
- 验收：页面 200 可访问，交互控件在 SSR HTML 中已渲染；`next build` 无错误。

### 9.4 演示素材
- `public/director-canvas.gif`：640px 宽、12fps、循环、96 色板、约 69KB，用于首页 Director Canvas 区与落地页顶部展示导演画布特色功能。
