import React from 'react';
import knskLogo from '../../assets/images/KNSK_Logo.jpg';

interface CompanyLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtext?: boolean;
  variant?: 'light' | 'dark';
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  className = '',
  size = 'md',
  showSubtext = true,
  variant = 'light',
}) => {
  const sizeMap = {
    sm: { img: 'w-8 h-8', title: 'text-sm', sub: 'text-[9px]' },
    md: { img: 'w-9 h-9 sm:w-11 sm:h-11', title: 'text-sm sm:text-base md:text-lg', sub: 'text-[8.5px] sm:text-[10px]' },
    lg: { img: 'w-14 h-14', title: 'text-xl sm:text-2xl', sub: 'text-xs' },
    xl: { img: 'w-20 h-20', title: 'text-2xl sm:text-3xl', sub: 'text-sm' },
  };

  const currentSize = sizeMap[size];
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* Official K.N.S.K Round Badge Emblem Image */}
      <div className={`relative ${currentSize.img} rounded-full overflow-hidden shadow-md border-2 ${isDark ? 'border-blue-400' : 'border-blue-900'} group-hover:scale-105 transition-transform bg-white shrink-0`}>
        <img
          src={knskLogo}
          alt="K.N.S.K Security Emblem"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Corporate Title & Khmer Badge */}
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className={`font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-blue-950'} font-serif leading-none ${currentSize.title}`}>
            K.N.S.K SECURITY
          </span>
        </div>
        {showSubtext && (
          <p className={`font-bold ${isDark ? 'text-slate-300' : 'text-slate-600'} tracking-wider uppercase mt-0.5 leading-tight ${currentSize.sub}`}>
            ក្រុមហ៊ុនសន្តិសុខ ខេ.អិន.អេស.ខេ • CO., LTD.
          </p>
        )}
      </div>
    </div>
  );
};
