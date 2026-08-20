import React from 'react';
import { COMPANY_DETAILS } from '../data/dmsData';
import { 
  ShieldCheck, 
  Phone, 
  MessageSquare, 
  Calculator, 
  CheckCircle2, 
  Sparkles, 
  Droplets,
  Layers,
  ArrowRight
} from 'lucide-react';
import heroBg from '../assets/images/hero_gutter_3d_bg_1787217786415.jpg';

interface HeroProps {
  onOpenCalculator?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCalculator }) => {
  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-16 lg:pt-40 lg:pb-24 flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* 3D Photorealistic Wallpaper Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="3D Photorealistic Modern Architecture with DMS Seamless Aluminium Gutters"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.62] contrast-[1.08]"
          referrerPolicy="no-referrer"
        />
        {/* Subtle Gradient Overlays for optimal readability and depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Main Slogan & Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
            Precision, Durability &amp; Elegance in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-amber-300">
              Every Gutter!
            </span>
          </h1>

          {/* Sub-slogan from Flyer */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xl sm:text-2xl font-bold text-red-400">
              Your shield against water damage.
            </span>
            <span className="text-2xl">💦</span>
          </div>

          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed font-normal">
            DMS extrudes continuous, zero-joint <strong className="text-white font-semibold">seamless aluminium gutters</strong> directly on your property to exact millimeter specifications. Combined with certified <strong className="text-white font-semibold">waterproofing &amp; high-pressure roof restoration</strong>, we protect your home for decades.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10">
            <a
              href={`https://wa.me/${COMPANY_DETAILS.phoneInternational.replace('+', '')}?text=${encodeURIComponent('Hi Brian, I saw your DMS website and would like to request a free quote for seamless aluminium gutters / waterproofing.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-base shadow-lg shadow-red-600/30 transition-all transform hover:-translate-y-0.5 glow-red text-center"
            >
              <MessageSquare className="w-5 h-5" />
              <span>WhatsApp Brian Now</span>
            </a>

            <a
              href={`tel:${COMPANY_DETAILS.phoneFormatted.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700 font-bold text-base backdrop-blur-md transition-all text-center"
            >
              <Phone className="w-5 h-5 text-red-500" />
              <span>Brian: {COMPANY_DETAILS.phoneFormatted}</span>
            </a>

            <a
              href="#calculator"
              onClick={(e) => {
                if (onOpenCalculator) {
                  e.preventDefault();
                  onOpenCalculator();
                }
              }}
              className="flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-blue-600/30 hover:bg-blue-600/50 text-blue-200 border border-blue-500/30 font-semibold text-sm backdrop-blur-md transition-all text-center"
            >
              <Calculator className="w-4 h-4 text-blue-400" />
              <span>Quote Calculator</span>
            </a>
          </div>

          {/* Quick Value Proof Bullets */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-slate-300 font-medium">100% Seamless Extrusion</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-slate-300 font-medium">15-Year Rust Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-slate-300 font-medium">Domestic &amp; Industrial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-slate-300 font-medium">Free On-Site Assessment</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Floating Feature Banner */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-r from-slate-900/90 via-blue-950/90 to-slate-900/90 border-t border-slate-800/80 py-3 hidden md:block backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white uppercase tracking-wider text-red-400">Services Included:</span>
            <span>Domestic &amp; Industrial Gutters</span>
            <span className="text-slate-600">•</span>
            <span>Aluminium Downpipes</span>
            <span className="text-slate-600">•</span>
            <span>High-Pressure Roof Cleaning</span>
            <span className="text-slate-600">•</span>
            <span>Waterproofing &amp; Roof Coatings</span>
          </div>
          <a href="#services" className="text-red-400 hover:text-red-300 font-bold flex items-center gap-1">
            Explore All <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
