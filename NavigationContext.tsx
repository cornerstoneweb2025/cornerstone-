import React, { createContext, useContext, useState, ReactNode } from 'react';

type Page = 'home' | 'service-details';

interface NavigationContextType {
  currentPage: Page;
  currentServiceId: string | null;
  navigateToHome: (targetId?: string) => void;
  navigateToService: (id: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentServiceId, setCurrentServiceId] = useState<string | null>(null);

  const navigateToHome = (targetId?: string) => {
    setCurrentPage('home');
    setCurrentServiceId(null);
    if (targetId) {
      // Small delay to allow mounting
      setTimeout(() => {
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  const navigateToService = (id: string) => {
    setCurrentServiceId(id);
    setCurrentPage('service-details');
    window.scrollTo(0, 0);
  };

  return (
    <NavigationContext.Provider value={{ currentPage, currentServiceId, navigateToHome, navigateToService }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) throw new Error('useNavigation must be used within NavigationProvider');
  return context;
};