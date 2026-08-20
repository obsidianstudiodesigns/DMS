import React from 'react';
import { COMPANY_DETAILS } from '../data/dmsData';
import { Phone, MessageSquare } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${COMPANY_DETAILS.phoneInternational.replace('+', '')}?text=${encodeURIComponent('Hi Brian, I would like a quote for DMS Seamless Aluminium Gutters and Waterproofing.')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Brian"
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all glow-emerald group relative"
      >
        <MessageSquare className="w-7 h-7" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
          WhatsApp Brian Now
        </span>
      </a>

      {/* Call Floating Button */}
      <a
        href={`tel:${COMPANY_DETAILS.phoneFormatted.replace(/\s+/g, '')}`}
        aria-label="Call Brian"
        className="w-14 h-14 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all glow-red group relative"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
          Call: {COMPANY_DETAILS.phoneFormatted}
        </span>
      </a>
    </div>
  );
};
