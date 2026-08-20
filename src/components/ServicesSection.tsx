import React from 'react';
import { SERVICES_DATA, COMPANY_DETAILS } from '../data/dmsData';
import { 
  CheckCircle2, 
  MessageSquare
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Without pill label) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Complete Guttering &amp; Waterproofing Solutions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From precision on-site seamless roll-forming to heavy industrial downpipes and leak-free roof waterproofing, DMS delivers the highest standard of structural water protection.
          </p>
        </div>

        {/* Services Grid (6 Core Offerings with 3D Photorealistic Images) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group rounded-3xl overflow-hidden transition-all duration-300 relative flex flex-col justify-between border bg-slate-50 hover:bg-white text-slate-900 border-slate-200 hover:border-red-300 hover:shadow-xl"
            >
              <div>
                {/* 3D Photorealistic Image Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  {service.imageUrl && (
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                  {/* Badge if available */}
                  {service.badge && (
                    <div className="absolute top-3 right-3 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-600 text-white shadow-md">
                      {service.badge}
                    </div>
                  )}
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-7">
                  {/* Title & Short Description */}
                  <h3 className="text-xl font-black mb-2.5 tracking-tight text-slate-900 group-hover:text-blue-950 transition-colors">
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
              </div>

              {/* Bottom Card Action */}
              <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-slate-200/80 flex items-center justify-between mt-auto bg-slate-100/50">
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
          ))}
        </div>

      </div>
    </section>
  );
};
