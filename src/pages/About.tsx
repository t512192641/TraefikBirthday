import React from 'react';

const About = () => {
  return (
    <div className="bg-white text-gray-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">关于我</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-6">
            欢迎来到我的个人网站！我是一名对AI技术充满热情的探索者。
            在这个快速发展的AI时代，我希望通过这个网站记录我的学习心得和技术实践，
            同时分享一些有趣的AI工具和应用。
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">为什么是"AI冲浪录"？</h2>
          <p className="mb-6">
            就像冲浪者在海浪中寻找完美的浪点一样，我们也在AI的浪潮中寻找机会和方向。
            这个网站将记录我在这个过程中的所见所思，希望能够帮助更多对AI感兴趣的朋友。
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">我的专注领域</h2>
          <ul className="list-disc list-inside mb-6 space-y-2 pl-5 text-gray-700">
            <li>大语言模型应用开发</li>
            <li>AI辅助编程工具</li>
            <li>AI图像处理技术</li>
            <li>AI教育与普及</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">联系我</h2>
          <p className="mb-6">
            如果你对AI技术同样感兴趣，或者对我的文章和项目有任何想法，
            欢迎通过页面底部的社交媒体链接与我联系。让我们一起在AI的浪潮中探索！
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 