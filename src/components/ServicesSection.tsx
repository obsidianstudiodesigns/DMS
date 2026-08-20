import React, { useState } from 'react';
import { SERVICES_DATA, COMPANY_DETAILS } from '../data/dmsData';
import { ServiceItem } from '../types';
import { 
  Home, 
  Building2, 
  Droplet, 
  Sparkles, 
  ShieldCheck, 
  Paintbrush, 
  CheckCircle2, 
  ArrowRight,
  Phone,
  MessageSquare,
  Shield,
  Clock,
  Layers,
  ChevronRight
} from 'lucide-react';
import waterproofingImg from '../assets/images/waterproofing_coating_1787217810677.jpg';

const iconMap: Record<string, React.ElementType> = {
  Home,
  Building2,
  Droplet,
  Sparkles,
  ShieldCheck,
  Paintbrush
};

interface ServicesSectionProps {
  onSelectServiceForQuote?: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(SERVICES_DATA[0]);

  return (
    <section id="services" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Complete Guttering &amp; Waterproofing Solutions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From precision on-site seamless roll-forming to heavy industrial downpipes and leak-free roof waterproofing, DMS delivers the highest standard of structural water protection.
          </p>
        </div>

        {/* Services Grid (6 Core Offerings) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {SERVICES_DATA.map((service) => {
            const IconComponent = iconMap[service.iconName] || ShieldCheck;
            const isSelected = selectedService?.id === service.id;

            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`cursor-pointer rounded-2xl p-6 sm:p-7 transition-all duration-300 relative flex flex-col justify-between border ${
                  isSelected 
                    ? 'bg-gradient-to-b from-blue-950 to-slate-900 text-white shadow-xl ring-2 ring-red-500 scale-[1.02]' 
                    : 'bg-slate-50 hover:bg-white text-slate-900 border-slate-200 hover:border-blue-300 hover:shadow-lg'
                }`}
              >
                {/* Badge if available */}
                {service.badge && (
                  <div className={`absolute top-4 right-4 text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    isSelected 
                      ? 'bg-red-600 text-white' 
                      : 'bg-red-100 text-red-700 border border-red-200'
                  }`}>
                    {service.badge}
                  </div>
                )}

                <div>
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    isSelected 
                      ? 'bg-red-600 text-white shadow-md' 
                      : 'bg-blue-900 text-white'
                  }`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & Short Description */}
                  <h3 className={`text-xl font-bold mb-2.5 tracking-tight ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm mb-5 leading-relaxed ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                    {service.shortDesc}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isSelected ? 'text-red-400' : 'text-red-600'}`} />
                        <span className={isSelected ? 'text-slate-200 font-medium' : 'text-slate-700 font-medium'}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Card Action */}
                <div className={`pt-4 border-t flex items-center justify-between text-xs font-bold ${
                  isSelected ? 'border-slate-800 text-red-400' : 'border-slate-200 text-blue-900'
                }`}>
                  <span>{isSelected ? 'Viewing Details Below' : 'Click To View Full Specs'}</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Service Detailed Deep-Dive Section */}
        {selectedService && (
          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Comprehensive Details */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase tracking-wider mb-4">
                  <span>Selected Service Spotlight</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-tight">
                  {selectedService.title}
                </h3>
                
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {selectedService.fullDesc}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                  {selectedService.specs.map((spec, i) => (
                    <div key={i} className="text-xs">
                      <span className="text-slate-400 block font-medium">{spec.label}</span>
                      <span className="text-white font-bold text-sm">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <div className="space-y-2 mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Key Performance Advantages:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedService.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={`https://wa.me/${COMPANY_DETAILS.phoneInternational.replace('+', '')}?text=${encodeURIComponent(`Hi Brian, I am interested in getting a quote for: ${selectedService.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-md transition-all glow-red"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire via WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${COMPANY_DETAILS.phoneFormatted.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold text-sm transition-all"
                  >
                    <Phone className="w-4 h-4 text-red-400" />
                    <span>Call Brian: {COMPANY_DETAILS.phoneFormatted}</span>
                  </a>

                  {onSelectServiceForQuote && (
                    <button
                      onClick={() => onSelectServiceForQuote(selectedService.id)}
                      className="px-4 py-3 rounded-xl bg-blue-600/30 hover:bg-blue-600/50 text-blue-200 border border-blue-400/30 font-semibold text-xs transition-all"
                    >
                      Use in Quote Calculator
                    </button>
                  )}
                </div>
              </div>

              {/* Right Column: Visual Card / Warranty Badge */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                {/* Visual Image */}
                <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl relative aspect-video sm:aspect-[4/3]">
                  <img
                    src={waterproofingImg}
                    alt="DMS Waterproofing and Gutter Installation"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs text-white">
                    <span className="font-bold text-red-400 block">DMS Craftsmanship Standard</span>
                    <span>100% SABS compliant marine-grade materials</span>
                  </div>
                </div>

                {/* Warranty & Ideal For box */}
                <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-red-600/20 text-red-400">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">DMS Quality Guarantee</span>
                      <span className="font-bold text-sm text-white">{selectedService.warranty}</span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-300 pt-3 border-t border-slate-800">
                    <strong className="text-slate-200">Recommended For:</strong> {selectedService.idealFor}
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
