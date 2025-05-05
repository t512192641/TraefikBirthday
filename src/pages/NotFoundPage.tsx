import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">抱歉，您访问的页面不存在</p>
        <Link to="/" className="text-blue-600 hover:underline">
          返回首页
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage; 