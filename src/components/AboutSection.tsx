import React from 'react';
import { COMPANY_DETAILS } from '../data/dmsData';
import { DMSLogo } from './DMSLogo';
import { 
  ShieldCheck, 
  Truck, 
  Wrench, 
  Award, 
  CheckCircle2, 
  Phone, 
  MessageSquare,
  Sparkles,
  Layers,
  Flame,
  Droplets
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Standards */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 border border-red-200 text-xs font-extrabold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>About DMS Gutters &amp; Waterproofing</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-6">
              Precision Engineering, Driven by Master Craftsmanship
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
              At <strong className="text-slate-900 font-bold">DMS</strong>, we believe every property deserves uncompromising defense against rain, water pooling, and foundation erosion. Led by <strong className="text-slate-900 font-bold">Brian</strong>, our team brings mobile on-site manufacturing technology directly to your doorstep.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              Instead of transporting fragile pre-cut gutter pieces that require multiple leaky joins, we bring our specialized roll-forming factory mounted on our custom 4x4 mobile rig. We extrude unbroken, continuous lengths of marine-grade aluminium right alongside your roof eaves, guaranteeing a custom fit down to the exact millimeter.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-950 text-white flex-shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 mb-1">Mobile Extrusion Rig</h4>
                  <p className="text-xs text-slate-600">On-site continuous roll-forming ensures 0% seam leaks and rapid 1-2 day turnaround.</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-red-600 text-white flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 mb-1">15-Year Guarantee</h4>
                  <p className="text-xs text-slate-600">SABS compliant marine alloy 3003-H14 with baked-on UV polyester powder finish.</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-950 text-white flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 mb-1">Total Waterproofing</h4>
                  <p className="text-xs text-slate-600">Complete parapet wall, valley lining, chimney flashing, and roof deck sealing.</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-red-600 text-white flex-shrink-0">
                  <Droplets className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 mb-1">Rainwater Harvesting</h4>
                  <p className="text-xs text-slate-600">Inert, non-toxic powder coating safe for rainwater storage tanks and irrigation.</p>
                </div>
              </div>
            </div>

            {/* Direct Contact Brian Bar */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${COMPANY_DETAILS.phoneFormatted.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-950 hover:bg-slate-900 text-white font-bold text-sm shadow-md transition-all"
              >
                <Phone className="w-4 h-4 text-red-400" />
                <span>Speak to Brian: {COMPANY_DETAILS.phoneFormatted}</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_DETAILS.phoneInternational.replace('+', '')}?text=${encodeURIComponent('Hi Brian, I would like to consult with you about seamless gutters for my property.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-md transition-all glow-red"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Brian</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Trust Card & Badge */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-800 text-center relative overflow-hidden">
              
              <div className="mb-6 flex justify-center">
                <DMSLogo variant="badge" size="xl" className="mx-auto" />
              </div>

              <h3 className="text-xl sm:text-2xl font-black mb-2 tracking-tight">
                DMS Seamless Gutters &amp; Waterproofing
              </h3>

              <p className="text-xs text-red-400 font-bold uppercase tracking-widest mb-6">
                Your Shield Against Water Damage
              </p>

              <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 text-left space-y-3 mb-6 text-xs text-slate-300">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Head Technician:</span>
                  <span className="font-bold text-white">Brian</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Direct Contact:</span>
                  <span className="font-bold text-red-400">{COMPANY_DETAILS.phoneFormatted}</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Official Email:</span>
                  <span className="font-bold text-white">{COMPANY_DETAILS.email}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Coverage:</span>
                  <span className="font-bold text-emerald-400">Domestic &amp; Industrial RSA</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-400">
                Licensed, insured &amp; backed by strict South African roofing safety regulations.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
