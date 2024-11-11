import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-20">
      <div className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&q=80"
            alt="Peaceful therapy room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/40"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Begin Your Journey to Inner Peace
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            Professional therapy and coaching services to help you discover your authentic self
          </p>
          <a
            href="#contact"
            className="inline-block bg-rose-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-rose-700 transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;