import React from 'react';

interface DMSLogoProps {
  variant?: 'full' | 'icon' | 'badge' | 'light';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const DMSLogo: React.FC<DMSLogoProps> = ({
  variant = 'full',
  className = '',
  size = 'md'
}) => {
  const sizeMap = {
    sm: 'h-9',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-24'
  };

  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Vector Emblem matching LOGO.jpg */}
      <div className={`relative aspect-square flex-shrink-0 ${sizeMap[size]}`}>
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-sm transition-transform duration-300 hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Ring System */}
          <circle cx="100" cy="100" r="94" stroke="#163B82" strokeWidth="4" className="opacity-90" />
          <circle cx="100" cy="100" r="88" stroke="#DC2626" strokeWidth="2.5" className="opacity-85" />
          <circle cx="100" cy="100" r="84" fill={isLight ? '#0B1E48' : '#FFFFFF'} />

          {/* Roof Gable Apex */}
          <path
            d="M 46 88 L 100 36 L 154 88"
            stroke="#163B82"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Red Ventilation Slat Bars in Gable Roof */}
          <path d="M 90 48 L 110 48" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" />
          <path d="M 83 55 L 117 55" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" />
          <path d="M 76 62 L 124 62" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" />
          <path d="M 69 69 L 131 69" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" />
          <path d="M 62 76 L 138 76" stroke="#DC2626" strokeWidth="3.2" strokeLinecap="round" />

          {/* Bold DMS Text inside Emblem */}
          <text
            x="100"
            y="108"
            textAnchor="middle"
            fontFamily="Montserrat, sans-serif"
            fontWeight="900"
            fontSize="30"
            fill={isLight ? '#FFFFFF' : '#163B82'}
            letterSpacing="2"
          >
            DMS
          </text>

          {/* Gutter Shield Upward Wings / Chevron Base */}
          <path
            d="M 32 75 L 44 98 L 74 98"
            stroke="#163B82"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 168 75 L 156 98 L 126 98"
            stroke="#163B82"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Red Subtitle in Circle Badge */}
          <text
            x="100"
            y="126"
            textAnchor="middle"
            fontFamily="Montserrat, sans-serif"
            fontWeight="800"
            fontSize="8.5"
            fill="#DC2626"
            letterSpacing="0.5"
          >
            SEAMLESS ALUMINIUM GUTTERS
          </text>
          <text
            x="100"
            y="138"
            textAnchor="middle"
            fontFamily="Montserrat, sans-serif"
            fontWeight="800"
            fontSize="8.5"
            fill="#DC2626"
            letterSpacing="0.5"
          >
            &amp; WATERPROOFING
          </text>

          {/* Decorative water droplets accent */}
          <circle cx="100" cy="154" r="2.5" fill="#2563EB" />
          <circle cx="91" cy="155" r="1.5" fill="#38BDF8" />
          <circle cx="109" cy="155" r="1.5" fill="#38BDF8" />
        </svg>
      </div>

      {/* Brand Text Typography */}
      {variant !== 'icon' && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`font-heading font-black tracking-tight text-xl sm:text-2xl leading-none ${
              isLight ? 'text-white' : 'text-slate-900'
            }`}>
              DMS
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-red-600/10 text-red-600 font-bold uppercase tracking-wider border border-red-600/20">
              PRO
            </span>
          </div>
          <span className={`text-[11px] sm:text-xs font-bold tracking-tight leading-tight mt-0.5 ${
            isLight ? 'text-red-400' : 'text-red-600'
          }`}>
            Seamless Aluminium Gutters
          </span>
          <span className={`text-[10px] font-medium tracking-wide leading-none ${
            isLight ? 'text-slate-300' : 'text-slate-500'
          }`}>
            &amp; Waterproofing Solutions
          </span>
        </div>
      )}
    </div>
  );
};
