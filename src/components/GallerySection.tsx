import React, { useState } from 'react';
import { GALLERY_ITEMS, COMPANY_DETAILS } from '../data/dmsData';
import { GalleryItem } from '../types';
import { 
  Images, 
  MapPin, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  X, 
  ChevronLeft, 
  ChevronRight,
  ExternalLink,
  MessageSquare,
  Phone,
  CheckCircle2,
  Maximize2
} from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Work (10 Projects)' },
    { id: 'residential', label: 'Residential Homes' },
    { id: 'commercial', label: 'Commercial & Estates' },
    { id: 'downpipes', label: 'Downpipe Engineering' },
    { id: 'waterproofing', label: 'Valleys & Waterproofing' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex(item => item.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    setSelectedItem(GALLERY_ITEMS[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex(item => item.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setSelectedItem(GALLERY_ITEMS[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 border border-red-200 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Images className="w-3.5 h-3.5" />
            <span>Proven On-Site Work Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Recent Work Done (Projects 1 – 10)
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Examine our actual installations across South Africa. From our custom mobile on-site extrusion bakkie to precision downpipes on facebrick and modern estates.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-blue-950 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid (10 Real Projects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer bg-slate-50 hover:bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                {/* Visual Representation & Overlay */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 via-blue-950 to-slate-900 group-hover:scale-105 transition-transform duration-500 p-6 text-center">
                  <div className="text-white">
                    <div className="w-12 h-12 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center mx-auto mb-3 text-red-400 font-black text-lg">
                      #{item.id}
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-red-400 block mb-1">
                      {item.categoryLabel}
                    </span>
                    <h4 className="text-base font-bold text-white line-clamp-2 px-2">
                      {item.title}
                    </h4>
                  </div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-bold border border-slate-700">
                  <MapPin className="w-3 h-3 text-red-400" />
                  <span>{item.location}</span>
                </div>

                {/* Click Zoom Indicator */}
                <div className="absolute inset-0 bg-blue-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white text-blue-950 font-bold text-xs px-3.5 py-2 rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5 text-red-600" />
                    <span>View Project Specs</span>
                  </div>
                </div>
              </div>

              {/* Card Meta Description */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-slate-700">Material: {item.material}</span>
                    <span className="px-2 py-0.5 rounded bg-slate-200/80 font-bold text-slate-800 text-[10px]">
                      {item.color}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-blue-900">
                  <span>Project Details &amp; Highlights</span>
                  <span className="text-red-600 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Interactive Lightbox / Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 relative max-h-[90vh] flex flex-col">
              
              {/* Modal Header */}
              <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-lg bg-red-600 text-white font-extrabold text-xs">
                    Work Done #{selectedItem.id}
                  </span>
                  <h3 className="font-bold text-base sm:text-lg text-white">
                    {selectedItem.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Left Column: Visual Showcase Box */}
                  <div className="bg-gradient-to-br from-blue-950 to-slate-900 text-white p-6 rounded-2xl flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-1">
                        {selectedItem.categoryLabel}
                      </span>
                      <h4 className="text-xl font-black mb-3">{selectedItem.title}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {selectedItem.description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-slate-800 text-xs">
                      <div className="flex items-center gap-2 text-slate-300">
                        <MapPin className="w-4 h-4 text-red-400" />
                        <span><strong>Location:</strong> {selectedItem.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <Layers className="w-4 h-4 text-red-400" />
                        <span><strong>Spec:</strong> {selectedItem.material}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <Sparkles className="w-4 h-4 text-red-400" />
                        <span><strong>Color:</strong> {selectedItem.color}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Engineering Highlights */}
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Key Technical Details:
                    </h5>
                    <ul className="space-y-2.5 mb-6">
                      {selectedItem.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 text-xs text-blue-950 mb-4">
                      <strong className="block mb-1">Need a similar setup on your property?</strong>
                      <span>Brian can measure and roll-form this exact profile directly on-site at your home or facility.</span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <a
                        href={`https://wa.me/${COMPANY_DETAILS.phoneInternational.replace('+', '')}?text=${encodeURIComponent(`Hi Brian, I am looking at Work Done #${selectedItem.id} (${selectedItem.title}) on your website. I would like a quote for a similar installation.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-xs shadow-md glow-red"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>WhatsApp Quote for this Setup</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer Navigation */}
              <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={handlePrev}
                  className="flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-blue-950 px-3 py-2 rounded-lg hover:bg-slate-200"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous Project</span>
                </button>
                <span className="text-xs text-slate-500 font-medium">
                  Project {selectedItem.id} of {GALLERY_ITEMS.length}
                </span>
                <button
                  onClick={handleNext}
                  className="flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-blue-950 px-3 py-2 rounded-lg hover:bg-slate-200"
                >
                  <span>Next Project</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
