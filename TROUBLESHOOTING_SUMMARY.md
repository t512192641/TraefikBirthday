# 项目开发与部署问题排查总结

本文档记录了从项目初始化到最终将 Vite + React + TypeScript 个人网站部署到 Cloudflare Pages 期间遇到的主要问题及其解决过程。

## 一、项目初始化与结构定义

- **目标:** 创建一个个人网站，用于展示文章、项目/工具和联系信息。
- **技术栈:** Vite + React + TypeScript。
- **页面规划:**
    - 首页 (Home): Matrix 雨效果背景。
    - 博客 (Blog): 展示 Markdown 文章列表。
    - 作品 (Works): 展示个人项目/工具。
    - 关于 (About): 联系方式。
- **核心组件:** `Navbar`, `Footer`, `MatrixRain` (首页背景)。
- **配置:** 使用单独的配置文件管理联系信息和项目列表。
- **文档:** 创建 `readme.md` 记录项目目标、结构和使用方法。

## 二、开发过程中的问题与解决

### 1. 组件导入/导出不一致

- **现象:** 尝试在 `App.tsx` 中导入 `Navbar` 或 `Footer` 时出现错误。
- **原因:** 组件内部使用了默认导出 (`export default`)，但在导入时尝试了命名导入 (`import { Navbar }`)。
- **解决方案:** 统一导入方式，使用 `import Navbar from './components/Navbar';`。

### 2. 页面白屏 (组件命名错误)

- **现象:** 页面渲染空白。
- **原因:** `MatrixRain` 组件文件名是 `MatrixRain.tsx`，但在代码中错误地写成了 `MatrixRains` 进行导入和使用。
- **解决方案:** 将代码中所有 `MatrixRains` 的引用更正为 `MatrixRain`。

### 3. 导航栏设计调整

- **现象:** 导航栏包含冗余或未实现的链接 ("Resources" 下拉菜单, "Login"/"Signup" 按钮)。
- **原因:** 早期模板遗留或设计变更。
- **解决方案:** 修改 `Navbar` 组件，移除不需要的菜单项和按钮，使导航更简洁，符合实际功能。

## 三、Cloudflare Pages 部署问题与解决

### 1. 初始部署：白屏与 MIME 类型错误

- **现象:** 网站部署后显示白屏，浏览器控制台报错 `Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/octet-stream"`。
- **原因:** Cloudflare Pages 未能正确识别 `.js` 模块文件的 MIME 类型。
- **尝试方案:**
    - 添加 `_headers` 文件指定 MIME 类型。
    - 添加 `_routes.json` 文件配置 SPA 路由。
    - 添加 `_worker.js` 文件尝试强制设置 MIME 类型。

### 2. 问题二：Error 1000 (DNS points to prohibited IP)

- **现象:** 在添加上述配置文件后，访问网站出现 Cloudflare Error 1000。
- **原因:** 在 Cloudflare DNS 设置中，指向 Cloudflare Pages 项目 (`*.pages.dev`) 的 CNAME 记录的"代理状态 (Proxy status)"被错误地设置为"已代理 (Proxied)"（橙色云朵）。Cloudflare Pages 要求此设置为"仅限 DNS"。
- **解决方案:** 登录 Cloudflare 控制面板，将相关 CNAME 记录的代理状态修改为"仅限 DNS (DNS only)"（灰色云朵）。

### 3. 问题三：Error 1019 (Compute server error)

- **现象:** 解决 Error 1000 后，访问网站出现 Cloudflare Error 1019。
- **原因:** 添加的 `_worker.js` 脚本在 Cloudflare 边缘计算环境中执行出错。
- **解决方案:** 从项目中移除 `_worker.js` 文件并重新部署。

### 4. 问题反复：再次出现 MIME 类型错误

- **现象:** 移除 `_worker.js` 后，网站再次白屏，并重现最初的 MIME 类型错误。
- **原因:** 检查 Cloudflare 部署日志发现关键信息：`"No build command specified. Skipping build step."` Cloudflare Pages 配置中缺少构建命令和正确的输出目录设置。导致未执行 `npm run build`，部署的是源代码而非 `dist` 目录，配置文件未生效。
- **最终解决方案:**
    1.  登录 Cloudflare 控制面板。
    2.  进入 Pages 项目的"设置" -> "构建与部署"。
    3.  将"构建命令 (Build command)"设置为 `npm run build`。
    4.  将"构建输出目录 (Build output directory)"设置为 `dist` (或 `/dist`)。
    5.  保存设置并触发新的部署。

## 四、最终结论与关键点

成功部署 Vite/React 项目到 Cloudflare Pages 需要注意以下几点：

1.  **本地开发:** 确保组件导入导出一致，命名准确。
2.  **DNS 配置 (自定义域名):** 指向 `*.pages.dev` 的 CNAME 记录必须设置为"仅限 DNS (DNS only)"。
3.  **Cloudflare 构建配置:** 必须在 Pages 设置中正确指定"构建命令"（如 `npm run build`）和"构建输出目录"（如 `dist`）。
4.  **部署配置文件:** `_headers` 和 `_routes.json` 等文件需要放置在 Cloudflare Pages 实际部署的"构建输出目录"中才能生效。`_headers` 对于解决 MIME 类型问题通常是必要的。`_worker.js` 使用需谨慎，可能引入计算错误。 