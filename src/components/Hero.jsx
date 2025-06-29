import honeyBg from '../assets/main.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${honeyBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Pure. Natural.
            <br />
            <span className="text-amber-300">Ethiopian</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-amber-100 font-medium mb-8">
            NIB Organic Honey
          </p>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Experience the authentic taste of Ethiopia's finest organic honey, 
            sustainably sourced from the highlands of our ancient homeland.
          </p>
        </div>
      </div>

      {/* Decorative honey drip animation */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-100 to-transparent opacity-20"></div>
    </section>
  );
};

export default Hero;
