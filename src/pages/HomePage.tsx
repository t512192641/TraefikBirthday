import React from 'react';
import MatrixRain from '../components/MatrixRain';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="min-h-screen bg-black text-[#00ff00] relative overflow-hidden">
      <MatrixRain />
      
      <main className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-20 md:px-0">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 matrix-text">
            不知的AI冲浪录
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-green-300 matrix-text">
            一个热衷于探索AI技术边界的开发者，用代码点亮创意，构建智能应用。
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-12">
            <Link
              to="/blog"
              className="matrix-button"
            >
              探索内容
            </Link>
            <Link
              to="/works"
              className="matrix-button"
            >
              查看作品
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage; 