import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CULTURE_VALUES } from '../../data/recruitmentData';
import { Briefcase, ShieldCheck, CheckSquare, Users, Heart, Eye, Sparkles, Compass } from 'lucide-react';

export const LifeAtKnskSection: React.FC = () => {
  const { language } = useLanguage();

  const getIcon = (name: string) => {
    switch (name) {
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-blue-900" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'CheckSquare': return <CheckSquare className="w-5 h-5 text-indigo-600" />;
      case 'Users': return <Users className="w-5 h-5 text-rose-600" />;
      case 'Heart': return <Heart className="w-5 h-5 text-red-600" />;
      case 'Eye': return <Eye className="w-5 h-5 text-purple-600" />;
      default: return <Sparkles className="w-5 h-5 text-amber-600" />;
    }
  };

  const getT = (en: string, km: string, zh: string) => {
    if (language === 'km') return km;
    if (language === 'zh') return zh;
    return en;
  };

  return (
    <section id="life" className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950 text-blue-300 border border-blue-800 rounded-full text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-blue-400" />
            {language === 'km' ? 'ជីវិតការងារ និងវប្បធម៌ក្រុមហ៊ុន' : language === 'zh' ? 'K.N.S.K 企业文化与价值观' : 'Life at K.N.S.K & Corporate Culture'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-serif text-white tracking-tight">
            {language === 'km' ? 'គុណតម្លៃគ្រឹះ ៧ យ៉ាង នៃគ្រួសារ K.N.S.K' : language === 'zh' ? '凝心聚力·恪守底线的7大核心价值观' : '7 Core Cultural Values of K.N.S.K Family'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {language === 'km' ? 'យើងរួបរួមគ្នាក្នុងស្មារតីសាមគ្គី វិន័យ និងការការពារសន្តិសុខជូនអតិថិជនដោយកិត្តិយស' : language === 'zh' ? '以铁的纪律、无私的奉献与高度的敬业精神，打造柬埔寨最受尊敬的安保力量' : 'Our culture unites officers around discipline, integrity, mutual respect, and client protection.'}
          </p>
        </div>

        {/* Culture Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CULTURE_VALUES.map((val) => {
            const title = getT(val.titleEn, val.titleKm, val.titleZh);
            const desc = getT(val.descEn, val.descKm, val.descZh);

            return (
              <div
                key={val.id}
                className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 space-y-3 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:scale-110 transition">
                    {getIcon(val.iconName)}
                  </div>

                  <h3 className="font-extrabold text-base text-white font-serif group-hover:text-blue-400 transition">
                    {title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  K.N.S.K Pillar
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
