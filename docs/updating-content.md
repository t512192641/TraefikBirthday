## 更新博客文章

博客文章现在通过项目中的 Markdown 文件进行管理。

*   **文件位置**: `content/blog/` 目录。
*   **操作**:
    1.  要添加新文章，请在 `content/blog/` 目录下创建一个新的 `.md` 文件 (例如 `my-new-post.md`)。
    2.  在新文件的顶部，添加 "frontmatter" 部分，用 `---` 包裹起来。Frontmatter 需要包含以下键值对：
        *   `title`: '文章标题' (字符串)
        *   `date`: 'YYYY-MM-DD' (字符串)
        *   `summary`: '文章摘要信息' (字符串)
        *   `slug`: 'unique-url-slug' (字符串, 用于生成文章链接，必须唯一)
        *   `pinned`: `true` 或 `false` (布尔值, `true` 表示置顶)
    3.  在 frontmatter 的 `---` 分隔符下方，写入文章的主要内容 (使用 Markdown 语法)。
    4.  保存文件即可。网站会自动读取新文件并显示文章（可能需要刷新页面）。文章默认按日期降序排列。

*   **示例 (`content/blog/example-post.md`)**:
    ```markdown
    ---
    title: '示例文章'
    date: '2024-07-29'
    summary: '这是一篇演示如何添加文章的示例。'
    slug: 'example-post'
    pinned: false
    ---

    这是文章的正文内容，使用 Markdown 格式编写。
    
    ## 这是一个二级标题

    *   列表项一
    *   列表项二
    ```

## 更新作品

作品列表数据现在通过一个 JSON 文件进行管理。

*   **文件位置**: `content/works.json`
*   **操作**:
    1.  打开 `content/works.json` 文件。
    2.  该文件包含一个 JSON 数组 `[...]`，数组中的每个对象 `{...}` 代表一个作品。
    3.  要添加新作品，请在数组中添加一个新的对象，遵循现有格式。确保每个作品对象包含以下键值对：
        *   `id`: (数字, 必须唯一)
        *   `title`: "作品标题" (字符串)
        *   `description`: "作品描述" (字符串)
        *   `icon`: "图标" (字符串, 可以是 Emoji)
        *   `link`: "作品链接" (字符串, 可以是相对路径如 `/works/my-project/` 或外部 URL)
    4.  如果添加的是静态网页作品 (方法一): 确保对应的文件已放入 `public/works/your-project-folder/`，并在 `link` 中使用正确的相对路径。
    5.  编辑完成后，保存 `content/works.json` 文件。

完成文件修改后，保存文件，开发服务器通常会自动重新加载，您可以在浏览器中看到更新后的内容。 