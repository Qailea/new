import React, { useState } from 'react';
import { Shield, Building, Video, Award, FileText, LucideIcon } from 'lucide-react';

interface CompanyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt: string;
  fallbackIcon?: 'shield' | 'building' | 'video' | 'award' | 'document';
  fallbackText?: string;
  containerClassName?: string;
}

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  building: Building,
  video: Video,
  award: Award,
  document: FileText,
};

export const CompanyImage: React.FC<CompanyImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackIcon = 'shield',
  fallbackText,
  containerClassName = 'relative w-full h-full overflow-hidden bg-slate-900',
  ...rest
}) => {
  const [hasError, setHasError] = useState(!src);
  const IconComponent = iconMap[fallbackIcon] || Shield;

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border border-slate-800 text-slate-400 ${containerClassName}`}
      >
        <div className="w-12 h-12 rounded-xl bg-blue-900/40 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-2">
          <IconComponent className="w-6 h-6" />
        </div>
        <p className="text-xs font-semibold text-slate-300 max-w-[200px] truncate">
          {fallbackText || alt}
        </p>
        <span className="text-[10px] uppercase font-bold tracking-widest text-blue-400/80 mt-1">
          K.N.S.K Security
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      referrerPolicy="no-referrer"
      {...rest}
    />
  );
};

export default CompanyImage;
