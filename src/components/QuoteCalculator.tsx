import React, { useState } from 'react';
import { COMPANY_DETAILS } from '../data/dmsData';
import { 
  Calculator, 
  MessageSquare, 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  ArrowRight,
  Info,
  Calendar
} from 'lucide-react';

export const QuoteCalculator: React.FC = () => {
  const [gutterLength, setGutterLength] = useState<number>(35);
  const [downpipesCount, setDownpipesCount] = useState<number>(4);
  const [storeyType, setStoreyType] = useState<'single' | 'double' | 'commercial'>('single');
  const [gutterType, setGutterType] = useState<'domestic_125' | 'industrial_150'>('domestic_125');
  const [includeCleaning, setIncludeCleaning] = useState<boolean>(false);
  const [includeWaterproofing, setIncludeWaterproofing] = useState<boolean>(false);
  const [includeFascia, setIncludeFascia] = useState<boolean>(false);

  // Form states for booking inspection
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerSuburb, setCustomerSuburb] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Approximate SA Guttering calculations (ZAR)
  const baseRatePerMeter = gutterType === 'domestic_125' ? 240 : 340;
  const downpipeRate = storeyType === 'single' ? 650 : storeyType === 'double' ? 980 : 1350;
  const heightMultiplier = storeyType === 'single' ? 1.0 : storeyType === 'double' ? 1.2 : 1.35;

  const gutterSubtotal = (gutterLength * baseRatePerMeter) * heightMultiplier;
  const downpipeSubtotal = downpipesCount * downpipeRate;
  const cleaningAddon = includeCleaning ? Math.max(1500, gutterLength * 55) : 0;
  const waterproofingAddon = includeWaterproofing ? 3200 : 0;
  const fasciaAddon = includeFascia ? gutterLength * 85 : 0;

  const calculatedTotal = Math.round(gutterSubtotal + downpipeSubtotal + cleaningAddon + waterproofingAddon + fasciaAddon);
  const estimatedMin = Math.round(calculatedTotal * 0.9);
  const estimatedMax = Math.round(calculatedTotal * 1.15);

  const formattedWhatsAppText = `Hi Brian, I used the DMS Quote Estimator on your website. Here are my project details:
- Gutter Length: ${gutterLength} meters
- Profile: ${gutterType === 'domestic_125' ? '125mm Domestic Ogee' : '150mm Industrial'}
- Downpipes: ${downpipesCount} units
- Building: ${storeyType === 'single' ? 'Single Storey' : storeyType === 'double' ? 'Double Storey' : 'Commercial / Multi-level'}
- High-Pressure Cleaning: ${includeCleaning ? 'Yes' : 'No'}
- Waterproofing: ${includeWaterproofing ? 'Yes' : 'No'}
- Fascia Treatment: ${includeFascia ? 'Yes' : 'No'}
- Estimated Range: R${estimatedMin.toLocaleString()} - R${estimatedMax.toLocaleString()}

Please confirm when you can conduct a free on-site measurement!`;

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerPhone) return;
    setSubmitted(true);
  };

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimation Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Instant Gutter &amp; Waterproofing Estimator
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Customize your roof perimeter and requirements below for an instant approximate price range. Send it straight to Brian on WhatsApp for an on-site confirmation.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-xl backdrop-blur-md">
            
            {/* Gutter Length Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label className="font-bold text-sm text-slate-200">
                  Total Gutter Length (Perimeter):
                </label>
                <span className="text-lg font-black text-red-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-700">
                  {gutterLength} Meters
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="120"
                step="2"
                value={gutterLength}
                onChange={(e) => setGutterLength(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-red-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1.5">
                <span>10m (Small Cottage / Extension)</span>
                <span>40m (Average Home)</span>
                <span>120m+ (Large Estate / Factory)</span>
              </div>
            </div>

            {/* Downpipes Quantity Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label className="font-bold text-sm text-slate-200">
                  Number of Downpipes Required:
                </label>
                <span className="text-lg font-black text-red-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-700">
                  {downpipesCount} Downpipes
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                step="1"
                value={downpipesCount}
                onChange={(e) => setDownpipesCount(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-red-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1.5">
                <span>1 - 2 (Simple Run)</span>
                <span>4 (Standard 4-Corner Home)</span>
                <span>8 - 12 (Multi-rooflines)</span>
              </div>
            </div>

            {/* Profile Selection */}
            <div className="mb-8">
              <label className="font-bold text-sm text-slate-200 block mb-3">
                Gutter Profile &amp; Capacity:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setGutterType('domestic_125')}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    gutterType === 'domestic_125'
                      ? 'border-red-500 bg-slate-900 ring-2 ring-red-500/40 text-white'
                      : 'border-slate-700 bg-slate-800/60 text-slate-300 hover:bg-slate-700/60'
                  }`}
                >
                  <span className="font-bold text-sm block mb-1">125mm Domestic Ogee</span>
                  <span className="text-xs text-slate-400">Perfect for standard residential homes &amp; townhouses.</span>
                </button>

                <button
                  type="button"
                  onClick={() => setGutterType('industrial_150')}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    gutterType === 'industrial_150'
                      ? 'border-red-500 bg-slate-900 ring-2 ring-red-500/40 text-white'
                      : 'border-slate-700 bg-slate-800/60 text-slate-300 hover:bg-slate-700/60'
                  }`}
                >
                  <span className="font-bold text-sm block mb-1">150mm Industrial High-Flow</span>
                  <span className="text-xs text-slate-400">Large roof catchments, warehouses &amp; luxury estates.</span>
                </button>
              </div>
            </div>

            {/* Storey Type Selection */}
            <div className="mb-8">
              <label className="font-bold text-sm text-slate-200 block mb-3">
                Building Storey / Elevation:
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { id: 'single', label: 'Single Storey' },
                  { id: 'double', label: 'Double Storey' },
                  { id: 'commercial', label: 'Multi / Industrial' },
                ].map((st) => (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setStoreyType(st.id as any)}
                    className={`py-3 px-2 sm:px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all text-center ${
                      storeyType === st.id
                        ? 'border-red-500 bg-red-600/20 text-white ring-1 ring-red-500'
                        : 'border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Add-on Services */}
            <div>
              <label className="font-bold text-sm text-slate-200 block mb-3">
                Optional Value Add-on Services:
              </label>
              <div className="space-y-2.5">
                <label className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-700/80 cursor-pointer hover:bg-slate-900">
                  <input
                    type="checkbox"
                    checked={includeCleaning}
                    onChange={(e) => setIncludeCleaning(e.target.checked)}
                    className="w-4 h-4 rounded text-red-600 focus:ring-red-500 bg-slate-800 border-slate-600"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-white block">High-Pressure Roof &amp; Valley Wash</span>
                    <span className="text-slate-400">Clears moss, lichen, silt, and blocked downpipes.</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-700/80 cursor-pointer hover:bg-slate-900">
                  <input
                    type="checkbox"
                    checked={includeWaterproofing}
                    onChange={(e) => setIncludeWaterproofing(e.target.checked)}
                    className="w-4 h-4 rounded text-red-600 focus:ring-red-500 bg-slate-800 border-slate-600"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-white block">Parapet Wall &amp; Valley Waterproofing</span>
                    <span className="text-slate-400">Fiber-reinforced liquid rubber membrane seal.</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-700/80 cursor-pointer hover:bg-slate-900">
                  <input
                    type="checkbox"
                    checked={includeFascia}
                    onChange={(e) => setIncludeFascia(e.target.checked)}
                    className="w-4 h-4 rounded text-red-600 focus:ring-red-500 bg-slate-800 border-slate-600"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-white block">Fascia &amp; Barge Board Protective Seal</span>
                    <span className="text-slate-400">Sealing and priming timber/Nutec boards before installation.</span>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Results & Dispatch Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Estimate Summary Box */}
            <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 rounded-3xl p-6 sm:p-8 border-2 border-red-500/50 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

              <span className="text-xs font-bold uppercase tracking-wider text-red-400 block mb-1">
                Estimated Price Range (ZAR)
              </span>

              {/* Price Numbers */}
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
                R{estimatedMin.toLocaleString()} – R{estimatedMax.toLocaleString()}
              </div>

              <p className="text-xs text-slate-300 mb-6">
                * Includes on-site roll-formed seamless aluminium, internal concealed hangers, installation &amp; 10-Year Factory Material &amp; 2-Year Workmanship Warranty.
              </p>

              {/* Summary Items */}
              <div className="space-y-2 pb-6 border-b border-slate-800 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Gutter Length ({gutterType === 'domestic_125' ? '125mm' : '150mm'}):</span>
                  <span className="font-bold text-white">{gutterLength}m</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Fluted Downpipes:</span>
                  <span className="font-bold text-white">{downpipesCount} units</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Building Elevation:</span>
                  <span className="font-bold text-white capitalize">{storeyType}</span>
                </div>
                {includeCleaning && (
                  <div className="flex justify-between text-slate-300">
                    <span>High-Pressure Wash:</span>
                    <span className="font-bold text-emerald-400">Included</span>
                  </div>
                )}
                {includeWaterproofing && (
                  <div className="flex justify-between text-slate-300">
                    <span>Waterproofing Seal:</span>
                    <span className="font-bold text-emerald-400">Included</span>
                  </div>
                )}
                {includeFascia && (
                  <div className="flex justify-between text-slate-300">
                    <span>Fascia Treatment:</span>
                    <span className="font-bold text-emerald-400">Included</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-6 space-y-3">
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.phoneInternational.replace('+', '')}?text=${encodeURIComponent(formattedWhatsAppText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl text-sm shadow-lg shadow-red-600/30 transition-all glow-red text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Estimate to Brian (WhatsApp)</span>
                </a>

                <a
                  href={`tel:${COMPANY_DETAILS.phoneFormatted.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold rounded-xl text-xs transition-all text-center"
                >
                  <Phone className="w-4 h-4 text-red-400" />
                  <span>Call Brian: {COMPANY_DETAILS.phoneFormatted}</span>
                </a>
              </div>
            </div>

            {/* Quick Free Inspection Request Form */}
            <div className="bg-slate-800/90 rounded-3xl p-6 sm:p-7 border border-slate-700 shadow-xl">
              <h3 className="font-bold text-base text-white mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-red-400" />
                <span>Book Free On-Site Measurement</span>
              </h3>
              <p className="text-xs text-slate-300 mb-4">
                Brian will visit your property, bring physical color samples, and provide a binding written quotation.
              </p>

              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500 text-emerald-200 text-xs">
                  <div className="flex items-center gap-2 font-bold mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Booking Request Received!</span>
                  </div>
                  <span>Brian will call you at {customerPhone} shortly to confirm a convenient inspection time.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmitBooking} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name (e.g. Johan)"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Contact Number (e.g. 082 123 4567)"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Property Suburb / Area (e.g. Durbanville)"
                      value={customerSuburb}
                      onChange={(e) => setCustomerSuburb(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Request Free On-Site Visit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
