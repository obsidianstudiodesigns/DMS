import React from 'react';
import { COMPARISON_DATA, COMPANY_DETAILS } from '../data/dmsData';
import { 
  XCircle, 
  CheckCircle2
} from 'lucide-react';

export const WhyAluminium: React.FC = () => {
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
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
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

      </div>
    </section>
  );
};
