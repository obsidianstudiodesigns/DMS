import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyAluminium } from './components/WhyAluminium';
import { GallerySection } from './components/GallerySection';
import { QuoteCalculator } from './components/QuoteCalculator';
import { AboutSection } from './components/AboutSection';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export function App() {
  const scrollToCalculator = () => {
    const calc = document.querySelector('#calculator');
    if (calc) {
      const navOffset = 90;
      const elementPosition = calc.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-red-600 selection:text-white">
      {/* Top Fixed Navigation */}
      <Navbar onOpenCalculator={scrollToCalculator} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onOpenCalculator={scrollToCalculator} />
        <ServicesSection />
        <WhyAluminium />
        <GallerySection />
        <QuoteCalculator />
        <AboutSection />
        <Testimonials />
        <FaqSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Instant WhatsApp & Call Actions */}
      <FloatingActions />
    </div>
  );
}

export default App;
