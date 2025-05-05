import React from 'react';
import { ArrowRight } from 'lucide-react';

const Cta: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full opacity-10"></div>
        <div className="absolute bottom-0 left-20 w-40 h-40 bg-white rounded-full opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-10 md:mb-0 md:w-2/3">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              Ready to build your next amazing website?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl">
              Join thousands of satisfied customers who are creating beautiful, 
              high-performing websites in a fraction of the time.
            </p>
          </div>

          <div className="md:w-1/3 flex justify-center md:justify-end">
            <div className="bg-white p-1 rounded-lg shadow-lg">
              <a
                href="#"
                className="flex items-center justify-between px-6 py-4 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium text-lg group hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
              >
                <span>Get Started Now</span>
                <ArrowRight className="ml-4 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '2,000+', label: 'Websites Built' },
            { value: '99.9%', label: 'Uptime Guarantee' },
            { value: '24/7', label: 'Customer Support' },
            { value: '14-Day', label: 'Free Trial' },
          ].map((stat, index) => (
            <div key={index}>
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-blue-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cta;