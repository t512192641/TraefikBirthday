import React from 'react';
import { Zap, Lock, Paintbrush, Code, MoveRight, Bot, Globe, Smartphone } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: 'Lightning Fast',
    description:
      'Build and deploy websites in minutes instead of weeks with our optimized workflow and pre-built components.',
  },
  {
    icon: <Lock className="h-8 w-8 text-blue-600" />,
    title: 'Secure By Design',
    description:
      'Enterprise-grade security with automatic updates, vulnerability scanning, and best practices built-in.',
  },
  {
    icon: <Paintbrush className="h-8 w-8 text-blue-600" />,
    title: 'Beautiful Designs',
    description:
      'Professionally designed templates and components that make your brand shine with minimal effort.',
  },
  {
    icon: <Code className="h-8 w-8 text-blue-600" />,
    title: 'Developer Friendly',
    description:
      'Clean code that follows best practices and is easy to customize for developers who want to extend functionality.',
  },
  {
    icon: <Bot className="h-8 w-8 text-blue-600" />,
    title: 'AI-Powered Editing',
    description:
      'Let our AI assistant help you craft perfect copy, generate images, and suggest design improvements.',
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: 'Global CDN',
    description:
      'Lightning-fast page loads with our global content delivery network that puts your site closer to your users.',
  },
];

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}> = ({ icon, title, description, index }) => {
  return (
    <div 
      className="p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white group"
      style={{ 
        transitionDelay: `${index * 50}ms` 
      }}
    >
      <div className="mb-5">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 group-hover:translate-x-1 transition-transform">
        Learn more <MoveRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to build amazing websites
          </h2>
          <p className="text-xl text-gray-600">
            Our platform provides all the tools you need to create beautiful, high-performing websites without the complexity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-blue-600 text-white text-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Explore All Features <MoveRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;