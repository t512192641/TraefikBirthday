import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Article {
  title: string;
  date: string;
  summary: string;
  slug: string;
  pinned: boolean;
}

export const Blog = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // 这里应该从后端API获取文章列表
    // 暂时使用模拟数据
    const mockArticles: Article[] = [
      {
        title: '欢迎来到我的AI冲浪录',
        date: '2024-03-25',
        summary: '这是一篇介绍网站的欢迎文章',
        slug: 'welcome',
        pinned: true
      }
    ];
    setArticles(mockArticles);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">博客文章</h1>
      
      {/* 置顶文章 */}
      {articles.filter(article => article.pinned).map(article => (
        <div
          key={article.slug}
          className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200"
        >
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">
                <Link
                  to={`/blog/${article.slug}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {article.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{article.date}</p>
              <p className="text-gray-700">{article.summary}</p>
            </div>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded">
              置顶
            </span>
          </div>
        </div>
      ))}

      {/* 普通文章 */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.filter(article => !article.pinned).map(article => (
          <div
            key={article.slug}
            className="p-6 bg-white rounded-lg border hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">
              <Link
                to={`/blog/${article.slug}`}
                className="text-gray-900 hover:text-blue-600"
              >
                {article.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">{article.date}</p>
            <p className="text-gray-700">{article.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}; 