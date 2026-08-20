import React, { useState, useEffect } from 'react';
import { DMSLogo } from './DMSLogo';
import { COMPANY_DETAILS } from '../data/dmsData';
import { 
  Phone, 
  MessageSquare, 
  Menu, 
  X, 
  Calculator, 
  ChevronRight
} from 'lucide-react';

interface NavbarProps {
  onOpenCalculator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCalculator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Why Seamless', href: '#why-seamless' },
    { name: 'Work Done', href: '#gallery' },
    { name: 'Quote Calculator', href: '#calculator' },
    { name: 'About DMS', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/80 py-2.5' 
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="focus:outline-none"
            >
              <DMSLogo size="md" />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-900 hover:bg-slate-100/70 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Header Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#calculator"
                onClick={(e) => {
                  if (onOpenCalculator) {
                    e.preventDefault();
                    onOpenCalculator();
                  } else {
                    handleNavClick(e, '#calculator');
                  }
                }}
                className="hidden md:flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-950 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-3 py-2 rounded-lg transition-all"
              >
                <Calculator className="w-4 h-4 text-blue-800" />
                <span>Instant Quote</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_DETAILS.phoneInternational.replace('+', '')}?text=${encodeURIComponent('Hi Brian, I would like a quote for DMS Seamless Aluminium Gutters and Waterproofing.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all glow-red"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Brian</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={`tel:${COMPANY_DETAILS.phoneFormatted.replace(/\s+/g, '')}`}
                className="p-2 rounded-lg bg-red-50 text-red-600 sm:hidden"
                aria-label="Call Brian"
              >
                <Phone className="w-5 h-5" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-blue-900"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY_DETAILS.phoneFormatted.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 w-full py-3 bg-blue-950 text-white font-bold rounded-lg"
            >
              <Phone className="w-4 h-4 text-red-400" />
              <span>Call Brian: {COMPANY_DETAILS.phoneFormatted}</span>
            </a>

            <a
              href={`https://wa.me/${COMPANY_DETAILS.phoneInternational.replace('+', '')}?text=${encodeURIComponent('Hi Brian, I would like a quote for DMS Seamless Aluminium Gutters and Waterproofing.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-red-600 text-white font-bold rounded-lg shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Brian for Free Quote</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
