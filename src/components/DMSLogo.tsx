import React from 'react';
import officialLogoImg from '../assets/images/dms_official_logo_1787230080352.jpg';

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
    md: 'h-12 w-12 sm:h-14 sm:w-14',
    lg: 'h-16 w-16 sm:h-20 sm:w-20',
    xl: 'h-24 w-24 sm:h-28 sm:w-28'
  };

  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Exact Official Circular Logo Image */}
      <div className={`relative aspect-square flex-shrink-0 rounded-full overflow-hidden bg-white shadow-sm ring-1 ring-slate-200/80 transition-transform duration-300 hover:scale-105 ${sizeMap[size]}`}>
        <img
          src={officialLogoImg}
          alt="DMS Seamless Aluminium Gutters & Waterproofing"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
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
