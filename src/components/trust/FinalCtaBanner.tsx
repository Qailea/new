import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ShieldCheck, PhoneCall, Send, FileText, Users, ArrowRight, MessageSquare } from 'lucide-react';

interface FinalCtaBannerProps {
  onNavigateTab?: (tab: string) => void;
}

export const FinalCtaBanner: React.FC<FinalCtaBannerProps> = ({ onNavigateTab }) => {
  const { language } = useLanguage();

  const getT = (en: string, km: string, zh: string) => {
    if (language === 'km') return km;
    if (language === 'zh') return zh;
    return en;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white relative overflow-hidden" id="final-cta">
      {/* Decorative Background Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-900/90 text-blue-200 border border-blue-700/80 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          {getT('Ready to Secure Your Premises?', 'តើលោកអ្នកត្រៀមខ្លួនការពារអាជីវកម្មហើយឬនៅ?', '准备为您的资产筑牢安全屏障了吗？')}
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight leading-tight max-w-4xl mx-auto">
          {getT(
            "Let's Protect Your Business, Property & Reputation Together",
            'រួមគ្នាការពារអាជីវកម្ម ទ្រព្យសម្បត្តិ និងកិត្យានុភាពរបស់លោកអ្នក',
            '携手 K.N.S.K 安保，共同守护您的商业、资产与品牌声誉'
          )}
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed">
          {getT(
            'Partner with Cambodia’s premier licensed security provider. Dedicated guards, 25 provinces, 24/7 radio dispatch, and rapid emergency patrol response.',
            'សហការជាមួយក្រុមហ៊ុនសន្តិសុខទទួលបានអាជ្ញាប័ណ្ណផ្លូវការ។ មានភ្នាក់ងារប្រកបដោយវិជ្ជាជីវៈ គ្របដណ្តប់ ២៥ ខេត្ត និងក្រុមល្បាតអន្តរាគមន៍រហ័ស។',
            '与柬埔寨内政部特许安保服务商合作。专业在册队员、25省调度中心、24/7中控指挥及快速机动巡逻响应。'
          )}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={() => onNavigateTab && onNavigateTab('services')}
            className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-xl hover:shadow-2xl transition duration-200 flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            {getT('Request Proposal / Quote', 'ស្នើសុំការពិគ្រោះតម្លៃ', '获取官方定制报价')}
          </button>

          <a
            href="https://t.me/KNSK_security"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm rounded-xl border border-slate-700 transition duration-200 flex items-center gap-2"
          >
            <Send className="w-4 h-4 text-sky-400" />
            {getT('Telegram (@KNSK_security)', 'Telegram ផ្លូវការ (@KNSK_security)', 'Telegram (@KNSK_security)')}
          </a>

          <a
            href="https://wa.me/855964838666?s=t"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm rounded-xl border border-slate-700 transition duration-200 flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            {getT('WhatsApp (+855 96 483 8666)', 'WhatsApp ផ្លូវការ', '官方 WhatsApp')}
          </a>

          <button
            onClick={() => onNavigateTab && onNavigateTab('careers')}
            className="px-6 py-3.5 bg-slate-900/90 hover:bg-slate-900 text-slate-300 font-bold text-sm rounded-xl border border-slate-800 transition duration-200 flex items-center gap-2"
          >
            <Users className="w-4 h-4 text-amber-400" />
            {getT('Join Our Guard Team', 'ចុះឈ្មោះធ្វើជាសន្តិសុខ', '加入 K.N.S.K 团队')}
          </button>
        </div>

        {/* Emergency Hotline Bar */}
        <div className="pt-8 border-t border-slate-800/80 max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-mono text-slate-400">
          <PhoneCall className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span>24/7 Hotlines:</span>
          <div className="flex flex-wrap items-center gap-2 text-white font-bold">
            <a href="tel:0964838666" className="hover:text-emerald-400 transition">096 483 8666</a>
            <span className="text-slate-600">/</span>
            <a href="tel:093878666" className="hover:text-emerald-400 transition">093 878 666</a>
            <span className="text-slate-600">/</span>
            <a href="tel:060878666" className="hover:text-emerald-400 transition">060 878 666</a>
          </div>
        </div>

      </div>
    </section>
  );
};
