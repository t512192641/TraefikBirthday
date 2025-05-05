import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="prose prose-lg mx-auto">
        <h1 className="text-3xl font-bold mb-4">文章标题</h1>
        <div className="text-gray-600 mb-8">发布于: 2024-03-21</div>
        {/* Markdown 内容将在这里渲染 */}
        <div className="markdown-content">
          这里将是文章的具体内容...
        </div>
      </article>
    </div>
  );
}

export default BlogPostPage; 