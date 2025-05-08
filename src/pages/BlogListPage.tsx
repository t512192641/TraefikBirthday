import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import matter from 'gray-matter';
import { Buffer } from 'buffer';

// Extend Window interface to include Buffer
declare global {
  interface Window {
    Buffer: typeof Buffer;
  }
}

// Polyfill Buffer for browser environment
if (typeof window !== 'undefined') {
  window.Buffer = Buffer;
}

// Define the Post interface
interface Post {
  // id: number; // ID might now come from slug or filename if not in frontmatter
  title: string;
  date: string;
  summary: string;
  slug: string;
  pinned: boolean;
  content?: string; // Keep content if needed
}

function BlogListPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const modules = import.meta.glob('../../content/blog/*.md', { 
          eager: true, 
          query: '?raw',
          import: 'default'
        });
        
        const posts = await Promise.all(
          Object.entries(modules).map(async ([path, rawContent]) => {
            const { data, content } = matter(rawContent as string);
            const slug = data.slug || path.split('/').pop()?.replace('.md', '');

            return {
              ...data,
              slug: slug,
              content: content,
              title: data.title || 'Untitled',
              date: data.date || 'No date',
              summary: data.summary || '',
              pinned: data.pinned || false,
            } as Post;
          })
        );

        // Sort posts: pinned first, then by date
        const sortedPosts = posts.sort((a, b) => {
          if (a.pinned && !b.pinned) {
            return -1;
          }
          if (!a.pinned && b.pinned) {
            return 1;
          }
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });

        setPosts(sortedPosts);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      }
    };

    loadPosts();
  }, []);

  return (
    <div className="bg-white text-gray-900 py-8"> {/* Removed min-h */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">博客文章</h1>
        <p className="text-center text-sm text-gray-500 mb-12">
          (未来将支持按分类与标签筛选文章，敬请期待！)
        </p>
        
        {/* 文章列表 - now maps directly over sorted 'posts' array */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => (
            <article 
              key={post.slug}
              className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <time className="text-sm text-gray-500 mb-3 block">
                  {post.date}
                </time>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.summary}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center text-sm"
                >
                  阅读全文 →
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        {posts.length === 0 && (
          <p className="text-gray-600">正在加载文章或暂无文章。</p>
        )}
      </div>
    </div>
  );
}

export default BlogListPage; 