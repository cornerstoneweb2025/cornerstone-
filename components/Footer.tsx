import React from 'react';
import { Instagram, Mail, ArrowUp } from 'lucide-react';
import { useNavigation } from '../NavigationContext';

const Footer: React.FC = () => {
  const { navigateToService, navigateToHome } = useNavigation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-luxury-black border-t border-gray-200 dark:border-white/10 pt-20 pb-10 px-6 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6 cursor-pointer group" onClick={() => navigateToHome()}>
                {/* Minimal Logo: Gold Diamond */}
                <div className="w-2.5 h-2.5 bg-gold-500 rotate-45 transform origin-center group-hover:scale-125 transition-transform duration-300"></div>
                <h2 className="font-serif text-3xl text-gray-900 dark:text-white font-bold">
                    CORNERSTONE <span className="text-gold-500">WEB</span>
                </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm mb-8">
              Building Digital Foundations That Scale. We partner with ambitious brands to create digital experiences that define the future.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/cornerstone__web" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-300 dark:border-white/20 flex items-center justify-center text-gray-900 dark:text-white hover:bg-gold-500 hover:border-gold-500 hover:text-white dark:hover:text-luxury-black transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:cornerstoneweb2025@gmail.com" className="w-10 h-10 border border-gray-300 dark:border-white/20 flex items-center justify-center text-gray-900 dark:text-white hover:bg-gold-500 hover:border-gold-500 hover:text-white dark:hover:text-luxury-black transition-all duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-serif font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
              <li onClick={() => navigateToService('web-dev')} className="hover:text-gold-500 dark:hover:text-gold-400 cursor-pointer transition-colors">Web Development</li>
              <li onClick={() => navigateToService('app-dev')} className="hover:text-gold-500 dark:hover:text-gold-400 cursor-pointer transition-colors">App Solutions</li>
              <li onClick={() => navigateToService('digital-marketing')} className="hover:text-gold-500 dark:hover:text-gold-400 cursor-pointer transition-colors">Digital Strategy</li>
              <li onClick={() => navigateToService('seo')} className="hover:text-gold-500 dark:hover:text-gold-400 cursor-pointer transition-colors">SEO Optimization</li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-serif font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
              <li>cornerstoneweb2025@gmail.com</li>
              <li>@cornerstone__web</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 dark:border-white/5 pt-10">
          <p className="text-gray-500 dark:text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Cornerstone Web. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gold-500 transition-colors"
          >
            <span className="text-sm uppercase tracking-wider">Back to Top</span>
            <div className="p-2 border border-gray-300 dark:border-white/10 group-hover:border-gold-500 rounded-full transition-colors">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;