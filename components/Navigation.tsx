import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useNavigation } from '../NavigationContext';
import { useTheme } from '../ThemeContext';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navigateToHome, currentPage } = useNavigation();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      navigateToHome(href);
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || currentPage !== 'home' ? 'bg-white/90 dark:bg-luxury-black/90 backdrop-blur-md py-4 border-b border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); navigateToHome(); }}
          className="flex items-center gap-3 z-50 group"
        >
          {/* Minimal Logo: Gold Diamond */}
          <div className="w-2.5 h-2.5 bg-gold-500 rotate-45 transform origin-center group-hover:scale-125 transition-transform duration-300"></div>
          
          <span className="font-serif text-xl font-bold text-gray-900 dark:text-white tracking-tight">
            CORNERSTONE <span className="text-gold-500">WEB</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button 
              key={item.label} 
              onClick={() => handleNavClick(item.href)}
              className="text-sm uppercase tracking-widest text-gray-600 dark:text-gray-300 hover:text-gold-500 dark:hover:text-gold-400 transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-gold-500 dark:hover:text-gold-400 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button 
            onClick={() => handleNavClick('#contact')}
            className={`px-6 py-2 border ${isScrolled || currentPage !== 'home' ? 'border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white dark:hover:text-luxury-black' : 'border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-luxury-black'} transition-all duration-300 text-sm font-semibold uppercase tracking-wider`}
          >
            Inquire
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
            <button 
                onClick={toggleTheme}
                className="text-gray-900 dark:text-white z-50"
            >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
            className="text-gray-900 dark:text-white z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
            {mobileMenuOpen ? <X /> : <Menu />}
            </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white dark:bg-luxury-black flex flex-col items-center justify-center gap-8 transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {NAV_ITEMS.map((item) => (
            <button 
              key={item.label} 
              onClick={() => handleNavClick(item.href)}
              className="font-serif text-3xl text-gray-900 dark:text-white hover:text-gold-500 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button 
             onClick={() => handleNavClick('#contact')}
             className="px-8 py-3 bg-gold-500 text-white dark:text-luxury-black font-bold uppercase tracking-wider mt-4"
          >
            Start Project
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;