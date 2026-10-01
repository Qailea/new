import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ShieldCheck, UserPlus, GraduationCap, Briefcase, ChevronRight, Award, CheckCircle2, PhoneCall, Send } from 'lucide-react';
import guardFormation from '../../assets/images/KNSK_Team.jpg';

interface CareersHeroProps {
  onApplyClick: () => void;
  onVacanciesClick: () => void;
  onProcessClick: () => void;
}

export const CareersHero: React.FC<CareersHeroProps> = ({
  onApplyClick,
  onVacanciesClick,
  onProcessClick
}) => {
  const { language } = useLanguage();

  const title = {
    en: "Join Cambodia's Professional Security Team",
    km: "ចូលរួមជាមួយក្រុមការងារសន្តិសុខអាជីពកម្ពុជា K.N.S.K",
    zh: "加入柬埔寨专业安保精英团队"
  };

  const subtitle = {
    en: "Become part of a trusted security company dedicated to protecting businesses, communities, and government organizations across Cambodia.",
    km: "ក្លាយជាផ្នែកមួយនៃក្រុមហ៊ុនសន្តិសុខដែលទទួលបានការទុកចិត្តខ្ពស់ ក្នុងការការពារអាជីវកម្ម សហគមន៍ និងស្ថាប័នរដ្ឋទូទាំងប្រទេសកម្ពុជា។",
    zh: "成为备受信赖的安保标杆企业一员，致力于保护全柬埔寨的企业、社区及政府机构安全。"
  };

  const getT = (obj: { en: string; km: string; zh: string }) => {
    if (language === 'km') return obj.km;
    if (language === 'zh') return obj.zh;
    return obj.en;
  };

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden py-16 lg:py-24 border-b border-slate-800">
      {/* Background Image Layer with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={guardFormation}
          alt="K.N.S.K Security Guard Officers Parade and Training"
          className="w-full h-full object-cover object-center opacity-25 scale-105 transform filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-blue-950/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Enterprise Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-500/40 text-blue-200 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>K.N.S.K Career & Recruitment Center</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-white tracking-tight leading-tight">
              {getT(title)}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              {getT(subtitle)}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onApplyClick}
                className="px-6 py-3.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-red-900/40 flex items-center gap-2.5 transition transform hover:-translate-y-0.5"
              >
                <UserPlus className="w-4 h-4 text-white" />
                <span>{language === 'km' ? 'ដាក់ពាក្យឥឡូវនេះ' : language === 'zh' ? '立即在线申请' : 'Apply Now'}</span>
              </button>

              <button
                onClick={onVacanciesClick}
                className="px-6 py-3.5 bg-blue-900/80 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-blue-500/50 backdrop-blur-md flex items-center gap-2.5 transition transform hover:-translate-y-0.5"
              >
                <Briefcase className="w-4 h-4 text-blue-300" />
                <span>{language === 'km' ? 'មើលមុខតំណែងទំនេរ' : language === 'zh' ? '查看最新空缺' : 'View Vacancies'}</span>
              </button>

              <button
                onClick={onProcessClick}
                className="px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-bold text-xs uppercase tracking-wider rounded-xl border border-slate-700 flex items-center gap-2.5 transition"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>{language === 'km' ? 'ដំណើរការជ្រើសរើស' : language === 'zh' ? '查看招聘流程' : 'Hiring Process'}</span>
              </button>
            </div>

            {/* Verified Quick Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{language === 'km' ? 'ប្រាក់ខែ & កម្ចី Wing Bank' : language === 'zh' ? 'Wing Bank 发薪与贷款' : 'Wing Bank Payroll & Loans'}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{language === 'km' ? 'ធានារ៉ាប់រងសម្រាប់បុគ្គលិក' : language === 'zh' ? '员工保险保障福利' : 'Employee Insurance Benefits'}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{language === 'km' ? 'ឱកាសឡើងតំណែង & កន្លែងស្នាក់នៅ' : language === 'zh' ? '晋升通道与宿舍保障' : 'Merit Growth & Housing'}</span>
              </div>
            </div>
          </div>

          {/* Right Floating Stats Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-900/80 text-blue-300 border border-blue-700 flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-bold text-sm text-white font-serif">K.N.S.K Employer Distinction</h2>
                    <p className="text-[11px] text-slate-400">MOI Licensed Official Employer</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-bold uppercase rounded">
                  Hiring Active
                </span>
              </div>

              {/* Key Employer Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800/80 space-y-1">
                  <div className="text-xl sm:text-2xl font-black text-white font-mono">
                    {language === 'km' ? 'កម្លាំងរឹងមាំ' : language === 'zh' ? '全员在册' : 'Vetted'}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    {language === 'km' ? 'ភ្នាក់ងារកំពុងបំពេញការងារ' : language === 'zh' ? '在岗特勤队员' : 'Active Duty Officers'}
                  </div>
                </div>

                <div className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800/80 space-y-1">
                  <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono">25</div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    {language === 'km' ? 'ខេត្ត-ក្រុងគ្របដណ្តប់' : language === 'zh' ? '全国覆盖省市' : 'Provincial Coverage'}
                  </div>
                </div>

                <div className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800/80 space-y-1">
                  <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">85%</div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    {language === 'km' ? 'ឡើងតំណែងពីផ្ទៃក្នុង' : language === 'zh' ? '内部提拔率' : 'Internal Promotion Rate'}
                  </div>
                </div>

                <div className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800/80 space-y-1">
                  <div className="text-xl sm:text-2xl font-black text-blue-400 font-mono">100%</div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    {language === 'km' ? 'បើកប្រាក់ខែទៀងទាត់' : language === 'zh' ? '准时薪资发放率' : 'On-Time Salary Record'}
                  </div>
                </div>
              </div>

              {/* Hotline Contact Banner */}
              <div className="p-4 bg-gradient-to-r from-blue-900/60 to-slate-950 rounded-xl border border-blue-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="space-y-1">
                  <div className="text-slate-300 font-semibold flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Direct Recruitment Hotline & Inquiries</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono font-bold text-xs sm:text-sm text-white">
                    <a href="tel:0964838666" className="hover:text-emerald-400 transition">096 483 8666</a>
                    <span className="text-slate-500">/</span>
                    <a href="tel:093878666" className="hover:text-emerald-400 transition">093 878 666</a>
                    <span className="text-slate-500">/</span>
                    <a href="tel:060878666" className="hover:text-emerald-400 transition">060 878 666</a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://t.me/KNSK_security"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-lg text-[11px] transition flex items-center gap-1"
                  >
                    <Send className="w-3 h-3" />
                    <span>Telegram</span>
                  </a>
                  <button
                    onClick={onApplyClick}
                    className="px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg text-[11px] uppercase transition flex items-center gap-1"
                  >
                    <span>Apply</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
