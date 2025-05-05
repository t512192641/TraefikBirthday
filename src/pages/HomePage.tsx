import React from 'react';
import MatrixRain from '../components/MatrixRain';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="min-h-screen bg-black text-[#00ff00] relative">
      <MatrixRain />
      
      <main className="relative z-10 flex items-center justify-center min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 matrix-text">
            不知的AI冲浪录
          </h1>
          <p className="text-xl mb-12 matrix-text">
            探索数字世界的边界，记录AI与人类共同进化的轨迹
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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