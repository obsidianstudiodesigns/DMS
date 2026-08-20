import React from 'react';
import { DMSLogo } from './DMSLogo';
import { COMPANY_DETAILS, SERVICES_DATA } from '../data/dmsData';
import { Phone, Mail, ShieldCheck, ArrowUp, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand & Slogan */}
          <div className="space-y-4">
            <DMSLogo variant="light" size="md" />
            <p className="text-slate-400 leading-relaxed">
              Precision, Durability and Elegance in Every Gutter. Your premier partner for seamless roll-formed aluminium gutters, downpipes, high-pressure cleaning &amp; waterproofing across South Africa.
            </p>
            <div className="flex items-center gap-2 text-white font-bold">
              <ShieldCheck className="w-4 h-4 text-red-500" />
              <span>15-Year Material Warranty</span>
            </div>
          </div>

          {/* Services List */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-4 text-xs">
              Our Services
            </h4>
            <ul className="space-y-2">
              {SERVICES_DATA.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact & Dispatch */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-4 text-xs">
              Direct Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <span className="text-slate-500 block">Senior Technician:</span>
                <strong className="text-white">Brian</strong>
              </li>
              <li>
                <span className="text-slate-500 block">Phone &amp; WhatsApp:</span>
                <a href={`tel:${COMPANY_DETAILS.phoneFormatted.replace(/\s+/g, '')}`} className="text-red-400 font-bold hover:underline">
                  {COMPANY_DETAILS.phoneFormatted}
                </a>
              </li>
              <li>
                <span className="text-slate-500 block">Official Inquiries:</span>
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-slate-300 hover:underline">
                  {COMPANY_DETAILS.email}
                </a>
              </li>
              <li>
                <span className="text-slate-500 block">Operating Hours:</span>
                <span className="text-slate-300">{COMPANY_DETAILS.workingHours}</span>
              </li>
            </ul>
          </div>

          {/* Service Areas & Local SEO */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-4 text-xs">
              Areas Serviced
            </h4>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {COMPANY_DETAILS.serviceAreas.map((area, i) => (
                <span key={i} className="px-2 py-1 rounded bg-slate-900 text-slate-300 text-[11px]">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-slate-500">
              Mobile roll-forming machinery deployed directly to site.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved. SABS Compliant.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold transition-all"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
