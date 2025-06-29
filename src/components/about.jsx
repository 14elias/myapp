import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              About Us
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              NIB Organic Honey aims to produce organic honey using sustainable beekeeping practices, 
              honoring Ethiopia's rich heritage of traditional honey production.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our commitment to quality and sustainability ensures that every jar of honey we produce 
              maintains the pure, natural essence that has made Ethiopian honey renowned worldwide 
              for centuries.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
                <div className="text-gray-600">Organic</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/2878744/pexels-photo-2878744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Ethiopian honey production" 
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-6 rounded-lg shadow-xl">
              <div className="text-2xl font-bold">Premium</div>
              <div className="text-sm">Ethiopian Honey</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
