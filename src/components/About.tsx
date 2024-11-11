import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80"
              alt="Michele Lonergan"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif text-gray-900 mb-6">Meet Michele Lonergan</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over a decade of experience in therapeutic practice, I am dedicated to helping
              individuals navigate life's challenges and discover their inner strength. My approach
              combines traditional therapy methods with innovative coaching techniques to provide
              a holistic healing experience.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At The Inside Story Coaching Services, we believe that everyone has the capacity
              for growth and transformation. My role is to provide you with the tools, support,
              and guidance needed to achieve your personal goals and find lasting peace.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-rose-50 p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-rose-600">10+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-rose-600">500+</h3>
                <p className="text-gray-600">Clients Helped</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;