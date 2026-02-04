import React from 'react';
import { SERVICES } from '../constants';
import { useNavigation } from '../NavigationContext';
import { Check, ArrowLeft, ArrowRight } from 'lucide-react';

interface ServicePageProps {
  serviceId: string;
}

const ServicePage: React.FC<ServicePageProps> = ({ serviceId }) => {
  const { navigateToHome } = useNavigation();
  const service = SERVICES.find(s => s.id === serviceId);

  if (!service) return <div>Service not found</div>;

  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-luxury-black animate-fade-in transition-colors duration-300">
      {/* Header / Breadcrumb */}
      <div className="container mx-auto px-6 mb-12">
        <button 
          onClick={() => navigateToHome('#services')}
          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gold-500 transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </button>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 mb-20">
        <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-6">
                 <div className="p-3 bg-gray-100 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10 text-gold-500">
                    <service.icon className="w-6 h-6" />
                 </div>
                 <span className="text-gold-500 tracking-widest uppercase text-sm font-semibold">Service Detail</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-gray-900 dark:text-white font-bold mb-8 leading-tight">
            {service.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl border-l-2 border-gold-500 pl-6">
            {service.description}
            </p>
        </div>
      </div>

      {/* Content Grid */}
      <section className="bg-gray-50 dark:bg-luxury-dark border-y border-gray-200 dark:border-white/5 py-20 transition-colors duration-300">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Description */}
                <div>
                    <h2 className="font-serif text-3xl text-gray-900 dark:text-white mb-8">About This Service</h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-8 text-lg mb-8">
                        {service.fullDescription}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 leading-7">
                        We work closely with our clients to ensure that every deliverable not only meets but exceeds expectations. Our approach is collaborative, transparent, and results-oriented.
                    </p>
                </div>

                {/* Features */}
                <div className="bg-white dark:bg-luxury-black p-8 md:p-12 border border-gray-200 dark:border-white/5 relative shadow-lg dark:shadow-none">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-[40px]"></div>
                    <h3 className="font-serif text-2xl text-gray-900 dark:text-white mb-8">What We Deliver</h3>
                    <ul className="space-y-6">
                        {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-4 group">
                                <div className="mt-1 min-w-[24px] w-6 h-6 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-600 dark:text-gold-500 border border-gold-500/20 group-hover:bg-gold-500 group-hover:text-white dark:group-hover:text-black transition-all">
                                    <Check className="w-3.5 h-3.5" />
                                </div>
                                <span className="text-gray-700 dark:text-gray-300 text-lg group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 container mx-auto px-6">
        <div className="bg-gradient-to-r from-gray-900 to-black dark:from-zinc-900 dark:to-luxury-black border border-gray-800 dark:border-white/10 p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            
            <div className="relative z-10">
                <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">Ready to elevate your {service.title.toLowerCase()}?</h2>
                <p className="text-gray-300 dark:text-gray-400 mb-10 max-w-xl mx-auto">Let's discuss how we can tailor our solutions to meet your specific business goals.</p>
                <button 
                    onClick={() => navigateToHome('#contact')}
                    className="inline-flex items-center gap-2 px-10 py-4 bg-gold-500 text-luxury-black font-bold uppercase tracking-wider hover:bg-gold-400 transition-colors"
                >
                    Start Project <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;