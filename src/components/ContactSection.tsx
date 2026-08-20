import React, { useState } from 'react';
import { COMPANY_DETAILS } from '../data/dmsData';
import { Phone, Mail, MessageSquare, MapPin, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Seamless Aluminium Gutters',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Get Your Free On-Site Quote
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Reach out directly for fast, friendly advice, free roof measurements, and guaranteed workmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 text-white rounded-3xl p-8 shadow-xl border border-slate-800">
            <h3 className="text-2xl font-black mb-2">DMS Seamless Gutters</h3>
            <p className="text-xs text-red-400 font-bold uppercase tracking-wider mb-6">
              Precision, Durability &amp; Elegance
            </p>

            <div className="space-y-5 mb-8 text-sm">
              <a 
                href={`tel:${COMPANY_DETAILS.phoneFormatted.replace(/\s+/g, '')}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-red-500 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0 text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Direct Call (Brian)</span>
                  <span className="font-bold text-white text-base">{COMPANY_DETAILS.phoneFormatted}</span>
                </div>
              </a>

              <a 
                href={`https://wa.me/${COMPANY_DETAILS.phoneInternational.replace('+', '')}?text=${encodeURIComponent('Hi Brian, I would like to request a quote for seamless aluminium gutters & waterproofing.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center flex-shrink-0 text-white">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">WhatsApp Brian</span>
                  <span className="font-bold text-emerald-400 text-sm">Instant Response Available</span>
                </div>
              </a>

              <a 
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-400 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-900 flex items-center justify-center flex-shrink-0 text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Email Inquiries</span>
                  <span className="font-bold text-white text-sm">{COMPANY_DETAILS.email}</span>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 text-slate-300">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Operating Hours</span>
                  <span className="font-bold text-slate-200 text-xs">{COMPANY_DETAILS.workingHours}</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <strong className="text-white block mb-1">Service Coverage Areas:</strong>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {COMPANY_DETAILS.serviceAreas.map((area, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-slate-800 text-[11px] text-slate-300">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-md">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Send a Message / Quote Request</h3>
            <p className="text-xs text-slate-600 mb-6">Fill in your requirements and Brian will respond with an exact proposal.</p>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-300 rounded-2xl text-emerald-900 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="font-bold text-lg mb-1">Thank You! Your Request Has Been Sent</h4>
                <p className="text-xs text-emerald-700 mb-4">
                  Brian has received your inquiry and will contact you at {formData.phone} shortly.
                </p>
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.phoneInternational.replace('+', '')}?text=${encodeURIComponent(`Hi Brian, I submitted a quote request for ${formData.service} via your website form.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-xl font-bold text-xs shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Also Ping on WhatsApp</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Johan Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Contact Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 082 345 6789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Primary Service Needed</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
                    >
                      <option>Seamless Aluminium Gutters</option>
                      <option>Industrial Gutter Systems</option>
                      <option>Aluminium Downpipes &amp; Offsets</option>
                      <option>High Pressure Roof &amp; Gutter Cleaning</option>
                      <option>Waterproofing &amp; Parapet Sealing</option>
                      <option>Roof &amp; Wall Coatings</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Project Description / Suburb</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your property, approx length, existing leak issues, or location..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-red-600 hover:bg-red-500 text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 glow-red"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Quote Request to Brian</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
