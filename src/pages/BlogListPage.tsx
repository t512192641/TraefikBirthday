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
        
        const loadedPosts = Object.entries(modules).map(([path, rawContent]) => {
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
        });

        loadedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setPosts(loadedPosts);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      }
    };

    loadPosts();
  }, []);

  const pinnedPost = posts.find(post => post.pinned);
  // Ensure regularPosts filters out the same pinned post object
  const regularPosts = posts.filter(post => post !== pinnedPost);

  return (
    <div className="bg-white text-gray-900 py-8"> {/* Removed min-h */}
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">博客文章</h1>
        
        {/* 置顶文章 */} 
        {pinnedPost && (
          <article className="mb-12 p-6 bg-blue-50 rounded-lg border border-blue-200 shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-2xl font-semibold">
                <Link
                  to={`/blog/${pinnedPost.slug}`}
                  className="text-blue-700 hover:text-blue-900 transition-colors"
                >
                  {pinnedPost.title}
                </Link>
              </h2>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                置顶
              </span>
            </div>
            <time className="text-sm text-gray-500 mb-3 block">
              {pinnedPost.date}
            </time>
            <p className="text-gray-700 mb-4 line-clamp-3">
              {pinnedPost.summary}
            </p>
            <Link
              to={`/blog/${pinnedPost.slug}`}
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            >
              阅读全文 →
            </Link>
          </article>
        )}

        {/* 文章列表 */} 
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {regularPosts.map(post => (
            <article 
              key={post.slug} /* Use slug as key */
              className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
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