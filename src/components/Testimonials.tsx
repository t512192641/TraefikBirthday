import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechCorp',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150',
    content:
      'This platform has completely transformed how we create and manage our company website. What used to take us weeks now takes just days, and the results look better than ever.',
    stars: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder & CEO',
    company: 'StartupVision',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150',
    content:
      'As a startup founder, I needed a solution that wouldn\'t break the bank but would still make us look professional. This platform delivered beyond expectations, and we\'ve seen our conversion rates double since launch.',
    stars: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Design Lead',
    company: 'CreativeWorks',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150',
    content:
      'The design quality and flexibility are unmatched. As a designer, I appreciate how I can easily customize everything while maintaining consistency across the entire site.',
    stars: 5,
  },
];

const TestimonialCard: React.FC<{
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  stars: number;
  index: number;
}> = ({ name, role, company, image, content, stars, index }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full transform hover:-translate-y-1 transition-all duration-300"
      style={{ 
        transitionDelay: `${index * 100}ms` 
      }}
    >
      <div className="p-6 flex-grow">
        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < stars ? 'text-yellow-500 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <p className="text-gray-700 mb-6 italic">&ldquo;{content}&rdquo;</p>
        <div className="flex items-center mt-auto">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={image}
            alt={name}
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
            <p className="text-gray-600 text-sm">
              {role}, {company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by thousands of customers
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it. Here's what our customers have to say about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to join our happy customers?</h3>
          <p className="text-lg text-gray-600 mb-6">
            Start your 14-day free trial today. No credit card required.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-blue-600 text-white text-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Get Started For Free
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;