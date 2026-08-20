import React from 'react';
import { SERVICES_DATA, COMPANY_DETAILS } from '../data/dmsData';
import { 
  Home, 
  Building2, 
  Droplet, 
  Sparkles, 
  ShieldCheck, 
  Paintbrush, 
  CheckCircle2, 
  MessageSquare
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Home,
  Building2,
  Droplet,
  Sparkles,
  ShieldCheck,
  Paintbrush
};

export const ServicesSection: React.FC = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => {
            const IconComponent = iconMap[service.iconName] || ShieldCheck;

            return (
              <div
                key={service.id}
                className="rounded-2xl p-6 sm:p-7 transition-all duration-300 relative flex flex-col justify-between border bg-slate-50 hover:bg-white text-slate-900 border-slate-200 hover:border-blue-300 hover:shadow-lg"
              >
                {/* Badge if available */}
                {service.badge && (
                  <div className="absolute top-4 right-4 text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 border border-red-200">
                    {service.badge}
                  </div>
                )}

                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-blue-900 text-white shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold mb-2.5 tracking-tight text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-sm mb-5 leading-relaxed text-slate-600">
                    {service.shortDesc}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-600" />
                        <span className="text-slate-700 font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <a
                    href={`https://wa.me/${COMPANY_DETAILS.phoneInternational.replace('+', '')}?text=${encodeURIComponent(`Hi Brian, I would like to inquire about ${service.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire for Quote</span>
                  </a>
                  <span className="text-[11px] font-semibold text-slate-500">
                    {service.warranty}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
