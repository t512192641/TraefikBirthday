# 不知的AI冲浪录 - 项目说明

本文档旨在说明 "不知的AI冲浪录" 项目的目标、技术栈、结构和使用方法。

## 项目概述

本项目是一个基于 Vite、React 和 TypeScript 构建的前端应用，使用了 Tailwind CSS 进行样式设计。目前，它呈现为一个具有"黑客帝国"视觉风格的单页面网站。

**当前页面内容:**
- 网站标题: 不知的AI冲浪录
- 背景效果: 矩阵数字雨 (`MatrixRain` 组件)
- 导航栏: 包含"首页"、"博客"、"作品"、"关于"链接
- 主体内容: 网站介绍和三个操作按钮（探索内容、查看作品、阅读博客）

## 技术栈

- **构建工具**: Vite
- **核心框架**: React 18
- **编程语言**: TypeScript
- **CSS 框架**: Tailwind CSS
- **图标库**: Lucide React
- **代码检查**: ESLint
- **数据分析**: Google Analytics

## 项目结构

- `index.html`: 应用的 HTML 入口文件。
- `src/main.tsx`: React 应用的入口脚本，负责渲染根组件。
- `src/App.tsx`: 应用的主组件，定义了当前的页面布局和内容。
- `src/index.css`: 全局 CSS 文件，包含 Tailwind CSS 指令和自定义样式。
- `src/components/`: 存放 React 组件的目录。
    - `MatrixRain.tsx`: 当前在 `App.tsx` 中使用的背景效果组件。
    - **未使用的组件**: `Cta.tsx`, `Features.tsx`, `Footer.tsx`, `Hero.tsx`, `Navbar.tsx`, `Pricing.tsx`, `Testimonials.tsx` (这些组件存在于项目中，但目前未在 `App.tsx` 中引用)。
- `package.json`: 定义项目依赖和脚本。
- `vite.config.ts`: Vite 配置文件。
- `tailwind.config.js`: Tailwind CSS 配置文件。
- `tsconfig.json`: TypeScript 配置文件。

## 可用脚本

在项目目录中，你可以运行以下命令：

- `npm run dev` 或 `yarn dev`:
  启动开发服务器，通常在 `http://localhost:5173` (或其他端口) 可访问。

- `npm run build` 或 `yarn build`:
  构建用于生产环境的应用到 `dist` 目录。

- `npm run lint` 或 `yarn lint`:
  使用 ESLint 检查代码规范。

- `npm run preview` 或 `yarn preview`:
  在本地预览生产构建的版本。

## 如何添加/编辑内容

### 添加新页面

1. 在 `src/pages` 目录下创建新的页面组件。
2. 在 `App.tsx` 中添加对应的路由。
3. **重要**: 确保在页面的 HTML 模板中包含 Google Analytics 代码：
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-BPB90QN0NN"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());

     gtag('config', 'G-BPB90QN0NN');
   </script>
   ```
   - GA 代码必须紧跟在 `<head>` 标签之后
   - 每个页面只能包含一个 GA 代码
   - 所有页面都必须包含此代码

### 添加新文章

1. 在 `content/articles` 目录下创建新的 `.md` 文件。
2. 文件开头需要包含以下格式的信息：
   ```markdown
   ---
   title: "文章标题"
   date: "YYYY-MM-DD"
   summary: "文章摘要"
   pinned: false  # 如果要置顶文章，改为 true
   ---

   这里开始写文章正文...
   ```
3. 如果文章包含图片：
   - 将图片文件放在 `content/images` 目录下
   - 在文章中使用相对路径引用图片：`![图片描述](../images/图片文件名.jpg)`

### 添加新作品

1. 打开 `src/config/works.ts` 文件
2. 在 `works` 数组中添加新的作品信息：
   ```typescript
   {
     icon: Settings,  // 从 lucide-react 导入的图标
     name: '作品名称',
     description: '作品描述',
     link: '/works/your-work' // 或外部链接
   }
   ```

### 修改联系方式

1. 打开 `src/config/contact.ts` 文件
2. 修改相应的联系方式信息：
   ```typescript
   {
     email: '你的邮箱',
     twitter: '你的推特链接',
     xiaohongshu: '你的小红书链接',
     wechat: {
       qrcode: '/images/你的二维码图片.png',
       name: '你的公众号名称'
     }
   }
   ```
3. 如果要添加微信公众号二维码，将图片文件放在 `content/images` 目录下

## 未使用组件说明

项目中包含了一些预置的组件，可以根据需要启用：

1. **Cta.tsx (Call to Action)**
   - 用途：创建醒目的行动号召区域
   - 需要提供：按钮文本、链接、背景样式等

2. **Features.tsx**
   - 用途：展示产品/网站特性
   - 需要提供：特性列表，每个特性的标题、描述和图标

3. **Hero.tsx**
   - 用途：创建引人注目的页面顶部区域
   - 需要提供：主标题、副标题、背景图片等

4. **Pricing.tsx**
   - 用途：展示产品定价方案
   - 需要提供：不同套餐的名称、价格、特性列表等

5. **Testimonials.tsx**
   - 用途：展示用户评价/推荐
   - 需要提供：评价内容、用户名称、头像等

这些组件都在 `src/components/` 目录下。要使用它们，需要：
1. 导入相应的组件
2. 提供必要的属性（props）
3. 将组件添加到适当的页面位置

## 新页面检查清单

在添加新页面时，请确保完成以下检查项：

1. [ ] 页面组件是否放在正确的目录（`src/pages`）
2. [ ] 路由是否已在 `App.tsx` 中正确配置
3. [ ] Google Analytics 代码是否已正确添加
   - [ ] 代码是否紧跟在 `<head>` 标签之后
   - [ ] 是否只包含一个 GA 代码
   - [ ] GA ID 是否正确（G-BPB90QN0NN）
4. [ ] 页面标题是否已设置
5. [ ] Meta 标签是否已正确配置
6. [ ] 响应式布局是否正常工作

## 后续更新

本文档将随着项目的开发进度持续更新，记录新增功能、架构变更和使用说明。 