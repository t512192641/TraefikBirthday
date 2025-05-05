import React from 'react';
import { Link } from 'react-router-dom';
import worksData from '../../content/works.json'; // Import the JSON data

// Define the Work interface
interface Work {
  id: number;
  title: string;
  description: string;
  icon: string; // Or React.ReactNode if using icon components
  link: string;
}

// Type assertion for the imported data
const works: Work[] = worksData;

function WorksPage() {
  return (
    <div className="bg-white text-gray-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">我的作品</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map(work => (
            <div 
              key={work.id}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="text-4xl mb-4">{work.icon}</div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{work.title}</h2>
              <p className="text-gray-600 mb-4 flex-grow">{work.description}</p>
              <Link 
                to={work.link}
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center mt-auto self-start"
              >
                查看详情 →
              </Link>
            </div>
          ))}
        </div>
        {works.length === 0 && (
          <p className="text-gray-600">暂无作品展示。</p>
        )}
      </div>
    </div>
  );
}

export default WorksPage; 