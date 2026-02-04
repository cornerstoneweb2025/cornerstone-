import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-luxury-black text-gray-900 dark:text-white px-6 transition-colors duration-300">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[128px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-indigo-900/20 rounded-full blur-[128px] translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-normal md:leading-tight mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Building Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-400 dark:from-white dark:via-gray-200 dark:to-gray-500">Foundations</span> 
          <span className="text-gold-400">.</span>
        </h1>

        <p className="font-sans text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
          Web development, app solutions, and digital marketing for brands that demand excellence and scale without compromise.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <a 
            href="#contact"
            className="group relative px-8 py-4 bg-gold-500 text-white dark:text-luxury-black font-semibold text-lg overflow-hidden transition-all duration-300 hover:bg-gold-400 shadow-lg dark:shadow-none"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start a Project
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
          
          <a 
            href="#services"
            className="px-8 py-4 bg-transparent border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-white/5 transition-colors duration-300"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;