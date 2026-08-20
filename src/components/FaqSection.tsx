import React, { useState } from 'react';
import { FAQS_DATA } from '../data/dmsData';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, Phone } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-100/60 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Everything you need to know about seamless aluminium gutter roll-forming, waterproofing methods, and on-site installations.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-12">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-50/80 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full ${isOpen ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-500'} flex-shrink-0 transition-transform`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="text-center p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-sm text-slate-900">Have a specific technical question about your roof?</h4>
            <p className="text-xs text-slate-500">Brian is happy to provide direct technical advice and inspect on site.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:0605220139"
              className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-all"
            >
              Call 060 522 0139
            </a>
            <a
              href="https://wa.me/27605220139?text=Hi%20Brian%2C%20I%20have%20a%20question%20about%20a%20gutter%20installation."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl transition-all glow-red"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
