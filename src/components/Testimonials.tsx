import React from 'react';
import { TESTIMONIALS } from '../data/dmsData';
import { Star, ShieldCheck, Quote, CheckCircle2, MessageSquare } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
            <span>Verified Customer Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Trusted by Homeowners &amp; Commercial Clients
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Read what property owners have to say about Brian and the DMS team's precision on-site installations and leak-free guarantees.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{review.name}</h4>
                  <span className="text-xs text-slate-500">{review.location}</span>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Verified Project</span>
                  </span>
                  <span className="block text-[10px] text-slate-400 mt-0.5">{review.projectType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="bg-gradient-to-r from-blue-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-1">
              Ready to experience zero-leak seamless aluminium gutters?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Join hundreds of protected properties across South Africa.
            </p>
          </div>
          <a
            href="https://wa.me/27605220139?text=Hi%20Brian%2C%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20my%20property."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all glow-red"
          >
            Request Free Assessment Now
          </a>
        </div>

      </div>
    </section>
  );
};
