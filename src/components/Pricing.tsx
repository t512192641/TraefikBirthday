import React from 'react';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfect for individuals and small projects',
    features: [
      'Up to 5 websites',
      'Basic templates',
      'Standard support',
      '10GB storage',
      'Custom domain',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    price: 79,
    description: 'For growing businesses and teams',
    features: [
      'Unlimited websites',
      'Premium templates',
      'Priority support',
      '50GB storage',
      'Custom domains',
      'AI content generation',
      'Advanced analytics',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'For large organizations with advanced needs',
    features: [
      'Unlimited websites',
      'Custom design services',
      '24/7 dedicated support',
      'Unlimited storage',
      'Custom domains',
      'Advanced AI features',
      'White-label options',
      'SSO & team management',
      'SLA guarantees',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const PricingCard: React.FC<{
  name: string;
  price: number;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}> = ({ name, price, description, features, cta, popular }) => {
  return (
    <div className={`rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
      popular 
        ? 'border-2 border-blue-600 shadow-xl scale-105 z-10 bg-white' 
        : 'border border-gray-200 shadow-md bg-white'
    }`}>
      {popular && (
        <div className="bg-blue-600 text-white text-center py-2 font-medium">
          Most Popular
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="mb-6">
          <span className="text-5xl font-bold text-gray-900">${price}</span>
          <span className="text-gray-600 ml-2">/month</span>
        </div>
        <ul className="space-y-3 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <span className="flex-shrink-0 inline-flex mt-1">
                <Check className="h-5 w-5 text-green-500" />
              </span>
              <span className="ml-3 text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className={`block w-full py-3 px-4 rounded-lg text-center font-medium transition-colors ${
            popular
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          {cta}
        </a>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that's right for you and start building your website today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
            Compare all plan features →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;