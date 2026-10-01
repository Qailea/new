import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CompanyIntroModal } from './CompanyIntroModal';
import knskGuardsImg from '../../assets/images/KNSK_Guards.jpg';
import knskLogo from '../../assets/images/KNSK_Logo.jpg';
import {
  ShieldCheck,
  PhoneCall,
  Calculator,
  Play,
  Briefcase,
  ArrowRight,
  Shield,
  Award
} from 'lucide-react';

interface HeroProps {
  setActiveTab: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ setActiveTab }) => {
  const { t } = useLanguage();
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Subtle interactive parallax effect on hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xRatio = (e.clientX - rect.left) / rect.width - 0.5;
    const yRatio = (e.clientY - rect.top) / rect.height - 0.5;
    // Smooth micro-translation within safe range (-10px to +10px)
    setMouseOffset({
      x: Math.round(-xRatio * 16),
      y: Math.round(-yRatio * 16),
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <>
      <section
        id="home-hero-section"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative min-h-[600px] md:min-h-[660px] lg:min-h-[720px] flex items-center overflow-hidden bg-slate-950 text-white border-b border-slate-800"
      >
        {/* ================================================================= */}
        {/* 1. REAL K.N.S.K GUARD PHOTOGRAPH BACKGROUND LAYER                */}
        {/* Crisp visibility of authentic guards with balanced scrim contrast */}
        {/* ================================================================= */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
          <img
            src={knskGuardsImg}
            alt="K.N.S.K Security Uniformed Guards - Authentic Protection Personnel"
            className="w-full h-full object-cover object-[68%_20%] sm:object-[70%_22%] md:object-[center_24%] lg:object-[center_22%] transition-transform duration-700 ease-out will-change-transform"
            style={{
              transform: `scale(${isHovered ? 1.03 : 1.01}) translate3d(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px, 0)`,
            }}
            referrerPolicy="no-referrer"
          />

          {/* Balanced Scrim Overlays - Keeps Guards Distinctly Visible While Preserving Text Readability */}
          {/* Horizontal Scrim: dark on left for text readability, clears up to reveal uniformed guards */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 sm:via-slate-950/65 md:via-slate-950/55 to-slate-950/20 lg:to-slate-950/15" />

          {/* Vertical Soft Scrim: seamless header and bottom border integration */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-transparent to-slate-950/85" />

          {/* Moderate Brand Tone Overlay */}
          <div className="absolute inset-0 bg-blue-950/20 mix-blend-multiply" />

          {/* Subtle Security Grid Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:28px_28px] opacity-10" />
        </div>

        {/* ================================================================= */}
        {/* 2. REAL K.N.S.K LOGO WATERMARK LAYER (Desktop / Tablet)           */}
        {/* 100% sharp and clear corner logo, hidden on mobile to avoid overlap */}
        {/* ================================================================= */}
        <div
          className="hidden md:block absolute md:right-12 lg:right-16 xl:right-24 md:top-14 lg:top-16 pointer-events-none select-none z-[1]"
          aria-hidden="true"
        >
          <div className="relative md:w-36 md:h-36 lg:w-44 lg:h-44 flex items-center justify-center rounded-full overflow-hidden border border-blue-400/40 bg-slate-950/60 shadow-xl">
            {/* Real K.N.S.K Logo - 100% Sharp, Clear & Crisp */}
            <img
              src={knskLogo}
              alt="K.N.S.K Security Emblem"
              className="w-full h-full object-cover rounded-full opacity-85 sm:opacity-90 lg:opacity-95 [image-rendering:-webkit-optimize-contrast] [image-rendering:crisp-edges]"
              referrerPolicy="no-referrer"
            />

            {/* Crisp Inner Circular Accent Rim */}
            <div className="absolute inset-0 rounded-full border border-blue-400/30 pointer-events-none" />
          </div>
        </div>

        {/* ================================================================= */}
        {/* 2. HERO CONTENT LAYER (Sharp, unblurred text and UI elements)     */}
        {/* ================================================================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 sm:pt-14 sm:pb-18 md:pt-18 md:pb-20 lg:pt-24 lg:pb-24 relative z-10 w-full">
          <div className="max-w-3xl lg:max-w-3xl space-y-6">
            
            {/* Official Ministry License Badge & Corporate Indicator */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 bg-blue-950/90 text-blue-200 border border-blue-600/50 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-xl sm:rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-lg max-w-full">
                <img
                  src={knskLogo}
                  alt="K.N.S.K Emblem"
                  className="w-4 h-4 rounded-full object-cover border border-blue-400 shrink-0"
                />
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="leading-tight">
                  <span className="inline">MINISTRY OF INTERIOR LICENSED</span>
                  <span className="mx-1.5 text-blue-400/80">•</span>
                  <span className="text-blue-300 font-mono">#KNSK-SEC-2015-089</span>
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse hidden sm:inline-block shrink-0" title="Active License Status" />
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 bg-slate-900/80 border border-slate-700/80 px-3 py-1.5 rounded-full text-xs text-slate-300 backdrop-blur-md">
                <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="font-semibold">Est. 2015 • Phnom Penh HQ</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-blue-400 font-sans">
                K.N.S.K Security Co., Ltd. • ក្រុមហ៊ុនសន្តិសុខ ខេ.អិន.អេស.ខេ
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.12] tracking-tight font-serif drop-shadow-md">
                {t('hero_headline_1')}{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-100 to-white">
                  {t('hero_headline_2')}
                </span>
              </h1>
            </div>

            {/* Khmer Slogan & Nationwide Coverage Banner */}
            <div className="p-4 sm:p-5 bg-slate-950/85 backdrop-blur-md border-l-4 border-red-600 rounded-r-xl border-y border-r border-slate-800/80 shadow-2xl space-y-2.5 max-w-2xl">
              <p className="text-sm sm:text-base font-serif italic text-slate-100 leading-relaxed">
                "{t('slogan_primary')}"
              </p>
              <div className="flex flex-wrap items-center gap-2.5 text-xs text-red-400 font-bold uppercase tracking-wider pt-1.5 border-t border-slate-800/70">
                <span>{t('slogan_sub')}</span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  {t('hero_coverage_banner')}
                </span>
              </div>
            </div>

            {/* Subtitle / Explanatory Text */}
            <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed max-w-2xl font-normal drop-shadow-sm">
              {t('hero_subtitle')}
            </p>

            {/* The 4 Action Buttons with Interactive Lift & Animations */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              {/* 1. Request Proposal */}
              <button
                id="hero-btn-proposal"
                onClick={() => setActiveTab('quotation')}
                className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-6 py-3.5 sm:py-4 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xl shadow-red-900/40 hover:shadow-red-700/50 transition-all duration-200 flex items-center gap-2.5 hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
              >
                <Calculator className="w-4 h-4" />
                <span>Request Proposal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              {/* 2. Contact Sales */}
              <button
                id="hero-btn-sales"
                onClick={() => {
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }}
                className="bg-blue-950/90 hover:bg-blue-900 text-white px-5 py-3.5 sm:py-4 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider border border-blue-500/50 hover:border-blue-400 backdrop-blur-sm shadow-lg hover:shadow-blue-950/60 transition-all duration-200 flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-blue-300" />
                <span>Contact Sales</span>
              </button>

              {/* 3. Recruit Guards */}
              <button
                id="hero-btn-recruitment"
                onClick={() => setActiveTab('recruitment')}
                className="bg-slate-900/90 hover:bg-slate-800 text-slate-200 px-5 py-3.5 sm:py-4 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider border border-slate-700 hover:border-slate-600 backdrop-blur-sm shadow-lg transition-all duration-200 flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Briefcase className="w-4 h-4 text-emerald-400" />
                <span>Recruit Guards</span>
              </button>

              {/* 4. Company Profile Video / Modal */}
              <button
                id="hero-btn-video"
                onClick={() => setVideoModalOpen(true)}
                className="bg-slate-950/80 hover:bg-slate-900 text-amber-300 hover:text-amber-200 px-5 py-3.5 sm:py-4 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider border border-amber-500/40 hover:border-amber-400 backdrop-blur-sm shadow-lg transition-all duration-200 flex items-center gap-2 group hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-amber-400 group-hover:scale-110 transition-transform duration-200" />
                <span>Company Profile</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Video / Corporate Presentation Modal */}
      <CompanyIntroModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        onNavigateQuote={() => setActiveTab('quotation')}
      />
    </>
  );
};
