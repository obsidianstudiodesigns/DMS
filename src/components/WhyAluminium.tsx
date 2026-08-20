import React, { useState } from 'react';
import { COMPARISON_DATA, COLOR_SWATCHES, COMPANY_DETAILS } from '../data/dmsData';
import { ColorSwatch } from '../types';
import { 
  ShieldCheck, 
  XCircle, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Palette, 
  Flame, 
  SunMedium,
  Droplets,
  Award
} from 'lucide-react';

export const WhyAluminium: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<ColorSwatch>(COLOR_SWATCHES[0]);

  return (
    <section id="why-seamless" className="py-20 lg:py-28 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Why Continuous Aluminium Outperforms Old Gutters
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Traditional sectional gutters joined every 2 meters are doomed to leak. Here is why DMS Seamless Roll-Formed Aluminium is the benchmark for South African properties.
          </p>
        </div>

        {/* Comparison Matrix */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden mb-20">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-900 text-white">
                  <th className="py-5 px-6 font-bold text-sm sm:text-base w-1/4">
                    Performance Metric
                  </th>
                  <th className="py-5 px-6 font-bold text-sm sm:text-base bg-blue-950 border-x-2 border-red-500 w-1/3 text-white">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                      <span>DMS Seamless Aluminium</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 font-semibold text-xs sm:text-sm text-slate-300 w-1/5">
                    Traditional PVC Plastic
                  </th>
                  <th className="py-5 px-6 font-semibold text-xs sm:text-sm text-slate-300 w-1/5">
                    Galvanized Steel
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr 
                    key={idx} 
                    className={idx % 2 === 0 ? 'bg-white hover:bg-slate-50' : 'bg-slate-50/50 hover:bg-slate-50'}
                  >
                    <td className="py-4 px-6 font-bold text-slate-900 flex items-center gap-2">
                      <span>{row.feature}</span>
                    </td>
                    <td className="py-4 px-6 font-bold text-blue-950 bg-blue-50/70 border-x-2 border-red-500/80">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{row.dmsAluminium}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>{row.pvcGutters}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>{row.galvanizedSteel}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-slate-900 text-white p-4 px-6 text-xs flex flex-wrap justify-between items-center gap-4">
            <span className="text-slate-300">
              * Extruded on-site with zero joints. Backed by our <strong className="text-white font-semibold">15-Year DMS Material Guarantee</strong>.
            </span>
            <a
              href={`tel:${COMPANY_DETAILS.phoneFormatted.replace(/\s+/g, '')}`}
              className="text-red-400 font-bold hover:text-red-300 flex items-center gap-1"
            >
              Ask Brian for advice: {COMPANY_DETAILS.phoneFormatted}
            </a>
          </div>
        </div>

        {/* Architectural Powder-Coated Color Swatch Selector */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Swatch Selector */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase tracking-wider mb-4">
                <Palette className="w-3.5 h-3.5" />
                <span>UV-Resistant Architectural Finishes</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
                Factory Baked Powder-Coat Color Palette
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Choose from our popular UV-stabilized architectural colors designed to match modern roof tiles, facebrick, aluminium window frames, and exterior wall paint.
              </p>

              {/* Color Pills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {COLOR_SWATCHES.map((swatch) => {
                  const isSelected = selectedColor.id === swatch.id;
                  return (
                    <button
                      key={swatch.id}
                      onClick={() => setSelectedColor(swatch)}
                      className={`text-left p-3 rounded-xl border transition-all flex flex-col justify-between ${
                        isSelected 
                          ? 'border-red-500 bg-slate-800 ring-2 ring-red-500/50 shadow-md' 
                          : 'border-slate-700 bg-slate-900/80 hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span 
                          className="w-5 h-5 rounded-full border border-white/20 shadow-inner flex-shrink-0"
                          style={{ backgroundColor: swatch.hex }}
                        />
                        {swatch.popular && (
                          <span className="text-[9px] font-extrabold bg-red-600 text-white px-1.5 py-0.2 rounded uppercase">
                            Top
                          </span>
                        )}
                      </div>
                      <div>
                        <span className="font-bold text-xs block text-white">{swatch.name}</span>
                        <span className="text-[10px] text-slate-400">{swatch.ralCode}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Color Description Box */}
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
                <strong className="text-white block mb-1">
                  Selected Finish: {selectedColor.name} ({selectedColor.ralCode})
                </strong>
                <span>{selectedColor.description}</span>
              </div>
            </div>

            {/* Right: Live Interactive Gutter Profile Visualization */}
            <div className="lg:col-span-6">
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Interactive Gutter Profile Render
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: selectedColor.hex }}></span>
                    <span className="text-xs font-bold text-white">{selectedColor.name}</span>
                  </div>
                </div>

                {/* Visual Architectural Eaves Diagram with chosen color */}
                <div className="relative h-64 sm:h-72 rounded-xl bg-gradient-to-b from-sky-900/30 to-slate-900/80 border border-slate-800/80 flex flex-col justify-end p-4 overflow-hidden">
                  {/* Roof representation */}
                  <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-r from-amber-900/40 via-red-950/50 to-amber-900/40 border-b-4 border-slate-800 transform -skew-y-2 origin-top-left flex items-center justify-center">
                    <span className="text-xs font-semibold text-slate-400">Roof Tile Eaves Line</span>
                  </div>

                  {/* Fascia Board with Chosen Gutter Color */}
                  <div className="relative z-10 mb-8">
                    <div className="text-[10px] text-slate-400 font-bold mb-1 uppercase tracking-wider flex items-center gap-1">
                      <span>125mm Seamless Ogee Profile</span>
                      <span className="text-red-400">(Zero Joint Extrusion)</span>
                    </div>

                    {/* Gutter Cross-section bar */}
                    <div 
                      className="h-9 w-full rounded-md shadow-2xl transition-all duration-500 flex items-center justify-between px-3 border border-white/20"
                      style={{ 
                        backgroundColor: selectedColor.hex,
                        color: selectedColor.id === 'white' ? '#1e293b' : '#ffffff'
                      }}
                    >
                      <span className="text-xs font-extrabold tracking-wider">DMS SEAMLESS ALUMINIUM</span>
                      <span className="text-[10px] opacity-80">15-YR WARRANTY</span>
                    </div>
                  </div>

                  {/* Downpipe run */}
                  <div className="relative z-10 flex justify-end pr-12">
                    <div className="flex flex-col items-center">
                      <div 
                        className="w-5 h-24 rounded-b-sm transition-all duration-500 shadow-xl border-x border-white/20 flex items-end justify-center pb-1"
                        style={{ backgroundColor: selectedColor.hex }}
                      >
                        <div className="w-3 h-2 bg-slate-950/40 rounded-sm"></div>
                      </div>
                      <span className="text-[9px] text-slate-400 font-medium mt-1">Fluted Downpipe</span>
                    </div>
                  </div>

                  {/* Ambient Lighting Tag */}
                  <div className="absolute bottom-2 left-3 text-[10px] text-slate-400">
                    * Baked-on polyester powder coat tested against 2000+ hrs salt spray.
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Want a sample on-site?</span>
                  <a
                    href={`https://wa.me/${COMPANY_DETAILS.phoneInternational.replace('+', '')}?text=${encodeURIComponent(`Hi Brian, can you bring a sample of the ${selectedColor.name} aluminium gutter for my quote?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 font-bold hover:text-red-300"
                  >
                    Request Color Sample on WhatsApp →
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
