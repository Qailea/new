import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ShieldCheck, PhoneCall, Send, MessageCircle, ArrowRight, FileCheck } from 'lucide-react';

interface ServicesCtaBannerProps {
  setActiveTab: (tab: string) => void;
  onOpenEmergency: () => void;
}

export const ServicesCtaBanner: React.FC<ServicesCtaBannerProps> = ({ setActiveTab, onOpenEmergency }) => {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(220,38,38,0.15),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 text-center sm:text-left">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-950/80 text-red-300 font-bold text-xs uppercase tracking-widest rounded-full border border-red-800">
              <ShieldCheck className="w-4 h-4 text-red-400" />
              <span>Immediate Security Guard Deployment</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-serif leading-tight">
              {language === 'km' ? 'ត្រូវការសេវាកម្មសន្តិសុខអាជីពសម្រាប់អាជីវកម្មរបស់អ្នក?' : language === 'zh' ? '您的企业需要专业且可靠的安保守护吗？' : 'Need Professional Security for Your Business?'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {language === 'km'
                ? 'ទាក់ទងមកកាន់ K.N.S.K Security ឥឡូវនេះ ដើម្បីទទួលបានការពិគ្រោះយោបល់ និងការចុះវាយតម្លៃទីតាំងដោយឥតគិតថ្លៃ ១០០%។'
                : language === 'zh'
                ? '立即联系 K.N.S.K 安防顾问，获取100%免费上门勘测、风险评估及定制化安保报价方案。'
                : 'Contact K.N.S.K Security now for a 100% free on-site risk assessment and official competitive proposal.'}
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 shrink-0">
            <button
              onClick={() => setActiveTab('quotation')}
              className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest rounded-lg shadow-xl shadow-red-900/40 transition flex items-center gap-2"
            >
              <FileCheck className="w-4 h-4" />
              <span>Request Official Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:0964838666"
              className="px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg transition flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>096 483 8666</span>
            </a>

            <a
              href="https://t.me/KNSK_security"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Telegram (@KNSK_security)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
