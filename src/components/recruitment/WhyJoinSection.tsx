import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { WHY_JOIN_REASONS } from '../../data/recruitmentData';
import { Shield, CheckCircle2, Coins, TrendingUp, GraduationCap, Award, Users, MapPin, Sparkles } from 'lucide-react';

export const WhyJoinSection: React.FC = () => {
  const { language } = useLanguage();

  const getIcon = (name: string) => {
    switch (name) {
      case 'Shield': return <Shield className="w-6 h-6 text-blue-900" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-emerald-600" />;
      case 'Coins': return <Coins className="w-6 h-6 text-amber-600" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-indigo-600" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-cyan-600" />;
      case 'Award': return <Award className="w-6 h-6 text-purple-600" />;
      case 'Users': return <Users className="w-6 h-6 text-rose-600" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-red-600" />;
      default: return <Sparkles className="w-6 h-6 text-blue-900" />;
    }
  };

  const sectionHeader = {
    en: {
      tag: 'Employer Excellence',
      title: 'Why Join K.N.S.K Security?',
      subtitle: 'We invest in our people, providing stability, professional dignity, and genuine opportunities to rise.'
    },
    km: {
      tag: 'ឧត្តមភាពនិយោជក',
      title: 'ហេតុអ្វីត្រូវចូលរួមជាមួយ K.N.S.K?',
      subtitle: 'យើងវិនិយោគលើធនធានមនុស្សរបស់យើង ដោយផ្តល់នូវស្ថិរភាព កិត្តិយសការងារ និងឱកាសពិតប្រាកដក្នុងការឡើងតំណែង។'
    },
    zh: {
      tag: '雇主卓越品牌',
      title: '为什么选择加入 K.N.S.K 安保公司？',
      subtitle: '我们全心倾注于每一位员工，提供坚实的职业保障、尊严感与广阔的上升空间。'
    }
  };

  const h = sectionHeader[language as keyof typeof sectionHeader] || sectionHeader.en;

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-900 border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            {h.tag}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-serif text-slate-900 tracking-tight">
            {h.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {h.subtitle}
          </p>
        </div>

        {/* 8 Modern Animated Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_JOIN_REASONS.map((item) => {
            const title = language === 'km' ? item.titleKm : language === 'zh' ? item.titleZh : item.titleEn;
            const desc = language === 'km' ? item.descKm : language === 'zh' ? item.descZh : item.descEn;

            return (
              <div
                key={item.id}
                className="group relative bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center group-hover:scale-110 transition duration-300">
                    {getIcon(item.iconName)}
                  </div>

                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900 font-serif leading-snug group-hover:text-blue-900 transition">
                    {title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-blue-900">
                  <span>K.N.S.K Standard</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-900 opacity-60 group-hover:opacity-100 group-hover:scale-150 transition" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
