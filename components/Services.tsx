import React from 'react';
import { SERVICES } from '../constants';
import { useNavigation } from '../NavigationContext';

const Services: React.FC = () => {
  const { navigateToService } = useNavigation();

  return (
    <section id="services" className="py-24 bg-luxury-black relative px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
            <span className="text-gold-500 text-sm tracking-widest uppercase mb-2 block font-semibold">Our Expertise</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white font-bold">
            Comprehensive Digital <span className="text-gray-600">Solutions</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id}
              onClick={() => navigateToService(service.id)}
              className="group p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-gold-500/30 transition-all duration-500 relative overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-[64px] group-hover:bg-gold-500/20 transition-all duration-500"></div>
              
              <service.icon className="w-12 h-12 text-gold-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
              
              <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-8 flex items-center text-sm font-medium text-gray-500 group-hover:text-white transition-colors">
                <span className="uppercase tracking-wider">Learn More</span>
                <div className="w-8 h-[1px] bg-gray-700 ml-4 group-hover:w-16 group-hover:bg-gold-500 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;