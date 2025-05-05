import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MatrixRain from '../components/MatrixRain';

export const Home = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <MatrixRain />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center z-10 p-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            不知的AI冲浪录
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            在AI的浪潮中探索无限可能
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              探索内容
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/works"
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
            >
              查看作品
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}; 