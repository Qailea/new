import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { RECRUITMENT_STEPS } from '../../data/recruitmentData';
import { FileText, FileCheck2, Users, ShieldAlert, Activity, GraduationCap, Award, ChevronDown, Clock, CheckCircle } from 'lucide-react';

export const RecruitmentTimeline: React.FC = () => {
  const { language } = useLanguage();

  const getIcon = (name: string) => {
    switch (name) {
      case 'FileText': return <FileText className="w-5 h-5 text-blue-600" />;
      case 'FileCheck2': return <FileCheck2 className="w-5 h-5 text-indigo-600" />;
      case 'Users': return <Users className="w-5 h-5 text-purple-600" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-red-600" />;
      case 'Activity': return <Activity className="w-5 h-5 text-amber-600" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-emerald-600" />;
      case 'Award': return <Award className="w-5 h-5 text-blue-900" />;
      default: return <CheckCircle className="w-5 h-5 text-blue-900" />;
    }
  };

  const getT = (en: string, km: string, zh: string) => {
    if (language === 'km') return km;
    if (language === 'zh') return zh;
    return en;
  };

  return (
    <section id="process" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-900 border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            {language === 'km' ? 'ដំណើរការជ្រើសរើសបុគ្គលិក ៧ ជំហាន' : language === 'zh' ? '7步标准招聘考选流程' : '7-Step Recruitment Process'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-serif text-slate-900 tracking-tight">
            {language === 'km' ? 'ដំណើរការប្រកបដោយតម្លាភាព និងល្បឿនរហ័ស' : language === 'zh' ? '透明、严谨、高效的履职晋升通道' : 'Transparent, Fast-Track Hiring Workflow'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {language === 'km' ? 'ពីការដាក់ពាក្យរហូតដល់ចេញធ្វើការផ្លូវការ K.N.S.K ធានាតម្លាភាព និងការបណ្តុះបណ្តាលស្តង់ដារ' : language === 'zh' ? '从在线申请到正式发装上岗，K.N.S.K 保持极高的政治审查与考核标准' : 'From submission to official deployment, every candidate is evaluated with clarity, respect, and professional standards.'}
          </p>
        </div>

        {/* 7-Step Interactive Responsive Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Connecting Line for Mobile/Desktop */}
          <div className="absolute left-6 md:left-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-900 via-indigo-600 to-emerald-600 transform -translate-x-1/2 rounded-full hidden sm:block opacity-30" />

          <div className="space-y-8 relative">
            {RECRUITMENT_STEPS.map((step, idx) => {
              const title = getT(step.titleEn, step.titleKm, step.titleZh);
              const desc = getT(step.descEn, step.descKm, step.descZh);
              const duration = getT(step.durationEn, step.durationKm, step.durationZh);
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.stepNumber}
                  className={`flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 group`}
                >
                  {/* Content Card Side */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)] bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-blue-900 bg-blue-100 px-2.5 py-0.5 rounded-full border border-blue-200">
                        STEP 0{step.stepNumber}
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200/80">
                        {duration}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-base text-slate-900 font-serif leading-tight">
                      {title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {desc}
                    </p>
                  </div>

                  {/* Center Node / Number Badge */}
                  <div className="relative z-10 shrink-0 w-12 h-12 rounded-2xl bg-white border-2 border-blue-900 shadow-md flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-900 group-hover:text-white transition duration-300 mx-auto sm:mx-0">
                    {getIcon(step.iconName)}
                  </div>

                  {/* Empty Spacer Side for desktop grid balance */}
                  <div className="hidden sm:block w-[calc(50%-2.5rem)]" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
