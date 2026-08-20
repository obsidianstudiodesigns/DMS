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
    sm: 'h-10 w-10',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
    xl: 'h-24 w-24'
  };

  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Exact Official Vector Circular Badge Matching LOGO.jpg */}
      <div className={`relative aspect-square flex-shrink-0 ${sizeMap[size]}`}>
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-sm transition-transform duration-300 hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* White Circular Badge Base */}
          <circle cx="100" cy="100" r="95" fill="#FFFFFF" />

          {/* Outer Deep Navy Blue Ring */}
          <circle cx="100" cy="100" r="91" stroke="#15305B" strokeWidth="6" />

          {/* Inner Concentric Red Ring */}
          <circle cx="100" cy="100" r="84" stroke="#D32729" strokeWidth="2.5" />

          {/* Navy Blue Roof Gable with Upward Outward Gutter Wings */}
          <path
            d="M 32 76 L 50 96 L 100 36 L 150 96 L 168 76"
            stroke="#15305B"
            strokeWidth="13"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Red Stepped Pyramid Louver / Slat Grid inside Roof Apex */}
          <path d="M 91 52 L 109 52" stroke="#D32729" strokeWidth="3.5" strokeLinecap="butt" />
          <path d="M 83 60 L 117 60" stroke="#D32729" strokeWidth="3.5" strokeLinecap="butt" />
          <path d="M 75 68 L 125 68" stroke="#D32729" strokeWidth="3.5" strokeLinecap="butt" />
          <path d="M 67 76 L 133 76" stroke="#D32729" strokeWidth="3.5" strokeLinecap="butt" />

          {/* Bold Navy DMS Typography */}
          <text
            x="100"
            y="104"
            textAnchor="middle"
            fontFamily="Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            fontWeight="900"
            fontSize="28"
            fill="#15305B"
            letterSpacing="1"
          >
            DMS
          </text>

          {/* Red Subtitle Line 1: Seamless Aluminium Gutters */}
          <text
            x="100"
            y="122"
            textAnchor="middle"
            fontFamily="Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            fontWeight="700"
            fontSize="9"
            fill="#D32729"
            letterSpacing="0.2"
          >
            Seamless Aluminium Gutters
          </text>

          {/* Red Subtitle Line 2: & Waterproofing */}
          <text
            x="100"
            y="135"
            textAnchor="middle"
            fontFamily="Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            fontWeight="700"
            fontSize="9"
            fill="#D32729"
            letterSpacing="0.2"
          >
            &amp; Waterproofing
          </text>
        </svg>
      </div>

      {/* Brand Text Typography (PRO badge removed completely) */}
      {variant !== 'icon' && variant !== 'badge' && (
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className={`font-heading font-black tracking-tight text-xl sm:text-2xl leading-none ${
              isLight ? 'text-white' : 'text-slate-900'
            }`}>
              DMS
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
