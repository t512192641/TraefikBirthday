import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Buffer } from 'buffer'; // Needed for gray-matter
import matter from 'gray-matter';

interface PostData {
  title: string;
  date: string;
  summary?: string;
  slug: string;
  content: string;
  pinned?: boolean;
}

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Ensure Buffer is available globally for gray-matter if not already
    if (typeof window !== 'undefined' && typeof (window as any).Buffer === 'undefined') {
      (window as any).Buffer = Buffer;
    }

    const fetchPostContent = async () => {
      if (!slug) return;
      try {
        // Dynamically import the markdown file based on the slug
        const module = await import(/* @vite-ignore */ `/content/blog/${slug}.md?raw`);
        const rawContent = module.default as string;
        const { data, content: mdContent } = matter(rawContent);
        
        setPost({
          title: data.title || 'Untitled Post',
          date: data.date || new Date().toISOString().split('T')[0],
          summary: data.summary || '',
          slug: slug, // slug from param
          content: mdContent,
          pinned: data.pinned || false,
        });
      } catch (e) {
        console.error('Error fetching post content:', e);
        setError('Failed to load the blog post. It might not exist or there was a network issue.');
      }
    };

    fetchPostContent();
  }, [slug]);

  if (error) {
    return <div className="container mx-auto px-4 py-8 text-red-500">Error: {error}</div>;
  }

  if (!post) {
    return <div className="container mx-auto px-4 py-8">Loading post...</div>;
  }

  return (
    <div className="bg-white text-gray-900 py-8">
      <div className="container mx-auto px-4">
        <article className="prose lg:prose-xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-2 text-lg text-gray-500">
              Published on {new Date(post.date).toLocaleDateString()}
            </p>
          </header>
          
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]} 
            components={{
              code({ node, inline, className, children, ...props }: any) { // Use any for props to bypass strict type checking for now
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={okaidia} 
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              }
            }}
          >
            {post.content} 
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
};

export default BlogPostPage; 