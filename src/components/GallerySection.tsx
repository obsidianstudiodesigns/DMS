import React, { useState } from 'react';
import { GALLERY_ITEMS, COMPANY_DETAILS } from '../data/dmsData';
import { GalleryItem } from '../types';
import { 
  Images, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Maximize2,
  MessageSquare
} from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'downpipes', label: 'Downpipes' },
    { id: 'waterproofing', label: 'Waterproofing' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex(item => item.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    setSelectedItem(GALLERY_ITEMS[nextIndex]);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex(item => item.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setSelectedItem(GALLERY_ITEMS[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 border border-red-200 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Images className="w-3.5 h-3.5" />
            <span>On-Site Work Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Recent Work Done
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Click any photograph to view high-resolution details.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
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

        {/* Pure Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-400 transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={`DMS Work Done Photo ${item.id}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-blue-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/95 text-slate-900 p-3 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <Maximize2 className="w-5 h-5 text-red-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal (Images Focused) */}
        {selectedItem && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedItem(null)}
          >
            <div 
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-12 right-0 sm:top-4 sm:right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-red-600 text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Container with Prev/Next Navigation */}
              <div className="relative w-full max-h-[80vh] flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl bg-black">
                <img
                  src={selectedItem.imageUrl}
                  alt={`Work Done Photo ${selectedItem.id}`}
                  className="max-w-full max-h-[75vh] w-auto h-auto object-contain select-none"
                  referrerPolicy="no-referrer"
                />

                {/* Left Arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/85 text-white transition-all shadow-lg hover:scale-110"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/85 text-white transition-all shadow-lg hover:scale-110"
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Lightbox Footer Actions */}
              <div className="mt-4 flex items-center justify-between w-full px-2 text-white">
                <span className="text-xs sm:text-sm text-slate-300 font-medium">
                  Image {selectedItem.id} of {GALLERY_ITEMS.length}
                </span>

                <a
                  href={`https://wa.me/${COMPANY_DETAILS.phoneInternational.replace('+', '')}?text=${encodeURIComponent(`Hi Brian, I am viewing photo #${selectedItem.id} on your website. I would like to get a quote for my property.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-xs shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Brian for this</span>
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
