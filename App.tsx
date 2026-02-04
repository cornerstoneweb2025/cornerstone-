import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServicePage from './components/ServicePage';
import Chatbot from './components/Chatbot';
import { NavigationProvider, useNavigation } from './NavigationContext';

function AppContent() {
  const { currentPage, currentServiceId } = useNavigation();

  return (
    <div className="bg-luxury-black min-h-screen text-gray-200 selection:bg-gold-500 selection:text-black">
      <Navigation />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Trust />
            <Services />
            <Reviews />
            <Contact />
          </>
        ) : (
          <ServicePage serviceId={currentServiceId!} />
        )}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}

export default App;