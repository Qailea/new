import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import knskGuardsImg from '../../assets/images/KNSK_Guards.jpg';
import knskLogo from '../../assets/images/KNSK_Logo.jpg';
import { ShieldCheck, ArrowRight, PhoneCall, MessageSquare, ChevronRight, FileCheck, Clock, Award } from 'lucide-react';

interface ServicesHeroProps {
  setActiveTab: (tab: string) => void;
  onOpenEmergency: () => void;
}

export const ServicesHero: React.FC<ServicesHeroProps> = ({ setActiveTab, onOpenEmergency }) => {
  const { language } = useLanguage();

  // Inject Schema.org Service Markup for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SecurityService',
    'name': 'K.N.S.K Security Co., Ltd. Professional Guarding Services',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'K.N.S.K Security Co., Ltd.',
      'image': knskLogo,
      'telephone': '+855964838666',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Phnom Penh',
        'addressCountry': 'KH'
      }
    },
    'areaServed': 'Cambodia',
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Manned Guarding & VIP Escort Services',
      'itemListElement': [
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Direct Security Guard Services' } },
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'VIP Protection & Executive Escort' } },
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Factory & Industrial Security' } },
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Construction Site Security' } },
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Mobile Patrol Services' } }
      ]
    }
  };

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-800">
      {/* Schema.org Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={knskGuardsImg}
          alt="K.N.S.K Security Guards - Professional Guarding Services Cambodia"
          className="w-full h-full object-cover object-center opacity-30 scale-105 filter contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.25),transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-12 lg:pb-24 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <button onClick={() => setActiveTab('home')} className="hover:text-white transition">
            {language === 'km' ? 'ទំព័រដើម' : language === 'zh' ? '首页' : 'Home'}
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-blue-400 font-bold">
            {language === 'km' ? 'សេវាកម្មសន្តិសុខ' : language === 'zh' ? '安保服务' : 'Security Services'}
          </span>
        </nav>

        {/* Hero Badges & Trust Accents */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-bold uppercase tracking-wider">
          <span className="inline-flex items-center gap-1.5 bg-blue-900/80 text-blue-300 px-3 py-1 rounded-full border border-blue-700/80 shadow-inner">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            Ministry of Interior Authorized #KNSK-SEC-2015-089
          </span>
          <span className="inline-flex items-center gap-1.5 bg-emerald-950/80 text-emerald-400 px-3 py-1 rounded-full border border-emerald-800">
            <FileCheck className="w-4 h-4 text-emerald-400" />
            {language === 'km' ? 'សេវាកម្មសន្តិសុខស្តង់ដារវិជ្ជាជីវៈ' : language === 'zh' ? '专业标准安保服务' : 'Professional Security Standards'}
          </span>
          <span className="inline-flex items-center gap-1.5 bg-slate-900 text-slate-300 px-3 py-1 rounded-full border border-slate-700">
            <Clock className="w-4 h-4 text-red-400" />
            25 Provinces 24/7 Coverage
          </span>
        </div>

        {/* Hero Headline and Subtitle */}
        <div className="max-w-4xl space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-serif tracking-tight leading-tight">
            {language === 'km' ? (
              <>សេវាកម្មសន្តិសុខអាជីព <span className="text-blue-400">គ្រប់គ្របដណ្តប់គ្រប់វិស័យ</span></>
            ) : language === 'zh' ? (
              <>全方位专业安保服务 <span className="text-blue-400">覆盖柬埔寨各大行业</span></>
            ) : (
              <>Professional Security Services <span className="text-blue-400">for Every Industry</span></>
            )}
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-sans max-w-3xl">
            {language === 'km' ? (
              'ក្រុមហ៊ុន ខេ.អិន.អេស.ខេ ស៊ិចឃ្យូរីធី ខូ អិលធីឌី ផ្តល់ជូននូវដំណោះស្រាយសន្តិសុខប្រចាំការអាជីព សម្របតាមតម្រូវការអាជីវកម្ម ស្ថាប័នរដ្ឋ រោងចក្រ គ្រឹះស្ថានហិរញ្ញវត្ថុ និងសហគមន៍បុរីរស់នៅទូទាំងប្រទេសកម្ពុជា។'
            ) : language === 'zh' ? (
              'K.N.S.K Security 为柬埔寨全境的各类企业、政府机构、工业工厂、金融机构及高端住宅社区提供定制化的专业驻点安保与特保解决方案。'
            ) : (
              'K.N.S.K Security provides professional guarding solutions tailored to businesses, government organizations, factories, financial institutions and residential communities throughout Cambodia.'
            )}
          </p>
        </div>

        {/* Action Buttons & Hotline */}
        <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
          <button
            onClick={() => setActiveTab('quotation')}
            className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm uppercase tracking-widest rounded-lg shadow-xl shadow-red-900/30 transition-all hover:scale-102 flex items-center gap-2 group"
          >
            <span>{language === 'km' ? 'ស្នើរសុំសំណើប្រកួតប្រជែង' : language === 'zh' ? '立即获取报价方案' : 'Request Proposal'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => setActiveTab('about')}
            className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs sm:text-sm uppercase tracking-widest rounded-lg shadow-md transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-blue-400" />
            <span>{language === 'km' ? 'ពិគ្រោះយោបល់ជាមួយអ្នកជំនាញ' : language === 'zh' ? '与安防顾问沟通' : 'Talk with Consultant'}</span>
          </button>

          <button
            onClick={onOpenEmergency}
            className="px-5 py-3.5 bg-red-950/80 hover:bg-red-900 text-red-300 border border-red-800 font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-lg transition-all flex items-center gap-2 shadow"
          >
            <PhoneCall className="w-4 h-4 text-red-400 animate-pulse" />
            <span>{language === 'km' ? 'ខ្សែទូរស័ព្ទអាសន្ន ២៤/៧' : language === 'zh' ? '24/7 应急热线' : 'Emergency Hotline'}</span>
          </button>
        </div>

        {/* Hero Bottom Stats Bar */}
        <div className="pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-extrabold text-blue-400 font-serif">
              {language === 'km' ? 'កម្លាំងរឹងមាំ' : language === 'zh' ? '持证队员' : 'Vetted Team'}
            </div>
            <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
              {language === 'km' ? 'ភ្នាក់ងារសន្តិសុខផ្លូវការ' : language === 'zh' ? '在册专业安保' : 'Vetted Security Guards'}
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-serif">25 / 25</div>
            <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
              {language === 'km' ? 'ខេត្តក្រុងគ្របដណ្តប់' : language === 'zh' ? '全国25省覆盖' : 'Provinces Covered'}
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-extrabold text-amber-400 font-serif">
              {language === 'km' ? 'ទាន់ពេលវេលា' : language === 'zh' ? '快速出警' : 'Rapid Patrol'}
            </div>
            <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
              {language === 'km' ? 'ល្បឿនអន្តរាគមន៍បន្ទាន់' : language === 'zh' ? '应急机动响应' : 'Emergency Mobile Dispatch'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
