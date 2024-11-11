import React from 'react';
import { Heart, Brain, Users, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Brain className="h-8 w-8 text-rose-600" />,
      title: "Individual Therapy",
      description: "One-on-one sessions focused on personal growth and healing through evidence-based therapeutic approaches."
    },
    {
      icon: <Users className="h-8 w-8 text-rose-600" />,
      title: "Couples Counseling",
      description: "Build stronger relationships through improved communication and understanding."
    },
    {
      icon: <Heart className="h-8 w-8 text-rose-600" />,
      title: "Trauma Recovery",
      description: "Specialized support for healing from past trauma using gentle, effective techniques."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-rose-600" />,
      title: "Life Coaching",
      description: "Guidance and support to help you achieve your personal and professional goals."
    }
  ];

  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">Services Offered</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive therapeutic services tailored to your unique needs and goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;