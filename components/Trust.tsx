import React from 'react';
import { TRUSTED_BRANDS } from '../constants';

const Trust: React.FC = () => {
  // Triple the brands to ensure the scrolling content is wider than any typical screen
  const displayBrands = [...TRUSTED_BRANDS, ...TRUSTED_BRANDS, ...TRUSTED_BRANDS];

  return (
    <section className="py-20 bg-luxury-dark border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="font-serif text-2xl md:text-3xl text-gray-400">Trusted by 100+ Brands Worldwide</h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-luxury-dark to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-luxury-dark to-transparent z-10"></div>
        
        <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
          <div className="flex items-center gap-12 px-12">
            {displayBrands.map((brand, index) => (
              <div key={`brand-1-${index}`} className="text-3xl font-serif font-bold text-gray-700 hover:text-gold-500 transition-colors duration-300 cursor-default select-none whitespace-nowrap">
                {brand}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-12 px-12">
            {displayBrands.map((brand, index) => (
              <div key={`brand-2-${index}`} className="text-3xl font-serif font-bold text-gray-700 hover:text-gold-500 transition-colors duration-300 cursor-default select-none whitespace-nowrap">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;