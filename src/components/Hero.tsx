import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-70 filter blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-indigo-100 rounded-full opacity-70 filter blur-3xl"></div>
        <div className="absolute -bottom-20 right-1/3 w-70 h-70 bg-purple-100 rounded-full opacity-70 filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                Launching Soon
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Build beautiful websites <span className="text-blue-600">faster</span> than ever
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              A revolutionary platform that combines AI, design, and code to help you create stunning websites in minutes, not months.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="px-8 py-4 rounded-lg bg-blue-600 text-white text-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center group"
              >
                Get Started 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#"
                className="px-8 py-4 rounded-lg border border-gray-300 text-gray-700 text-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                See Demo
              </a>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-600"></div>
                  </div>
                ))}
              </div>
              <p className="ml-4 text-sm text-gray-600">
                <span className="font-medium text-gray-900">2,000+</span> happy users and counting
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="w-full aspect-video bg-gray-900 rounded-xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-600 opacity-10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-md bg-white shadow-lg w-4/5 h-4/5">
                    <div className="h-6 bg-gray-100 flex items-center px-4 border-b">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="h-4 bg-gray-200 rounded mb-3 w-1/2"></div>
                      <div className="h-3 bg-gray-200 rounded mb-3 w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded mb-3 w-5/6"></div>
                      <div className="h-3 bg-gray-200 rounded mb-3 w-4/5"></div>
                      <div className="h-10 bg-blue-100 rounded-md mb-3 w-1/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;