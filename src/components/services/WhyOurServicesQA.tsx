import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  ShieldCheck,
  UserCheck,
  Award,
  Clock,
  Zap,
  Headphones,
  RotateCcw,
  FileCheck2,
  PhoneCall,
  Flame,
  CheckCircle2,
  Building2
} from 'lucide-react';

export const WhyOurServicesQA: React.FC = () => {
  const { language } = useLanguage();

  const whyChooseFeatures = [
    {
      titleEn: 'MOI Vetted Personnel',
      titleKm: 'បុគ្គលិកពិនិត្យប្រវត្តិរូបពីក្រសួង',
      titleZh: '内政部审查背景政审',
      descEn: '100% of guards undergo background checks with National Police database before site assignment.',
      icon: UserCheck,
      color: 'text-blue-600 bg-blue-50 border-blue-200'
    },
    {
      titleEn: 'Experienced Supervisors',
      titleKm: 'ប្រធានក្រុមមានបទពិសោធន៍ខ្ពស់',
      titleZh: '资深督导现场巡查',
      descEn: 'Former military and police officers leading day and night site inspections across Cambodia.',
      icon: Award,
      color: 'text-amber-600 bg-amber-50 border-amber-200'
    },
    {
      titleEn: '24/7 Operations Command',
      titleKm: 'មជ្ឈមណ្ឌលបញ្ជាការ ២៤/៧',
      titleZh: '24小时中控调度指挥',
      descEn: 'Central dispatch room tracking walkie-talkie logs and attendance in real time.',
      icon: Clock,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200'
    },
    {
      titleEn: 'Rapid Patrol Dispatch',
      titleKm: 'ក្បួនល្បាតអន្តរាគមន៍លឿន',
      titleZh: '4x4巡逻车快速支援',
      descEn: '4x4 Ford Ranger fleet on standby in Phnom Penh, Sihanoukville, and provincial hubs.',
      icon: Zap,
      color: 'text-red-600 bg-red-50 border-red-200'
    },
    {
      titleEn: 'Flexible Deployment',
      titleKm: 'ការផ្លាស់ប្តូរបត់បែន',
      titleZh: '灵活人员编制调整',
      descEn: 'Easily scale guard headcount up or down with 48 hours notice as your business grows.',
      icon: RotateCcw,
      color: 'text-purple-600 bg-purple-50 border-purple-200'
    },
    {
      titleEn: 'Dedicated Client Support',
      titleKm: 'សេវាថែទាំអតិថិជន ២៤/៧',
      titleZh: '专属客服与多语沟通',
      descEn: 'Khmer, English, and Chinese speaking account managers assigned to every contract.',
      icon: Headphones,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200'
    }
  ];

  const qaPillars = [
    {
      titleEn: 'Daily Supervisor Spot Checks',
      titleKm: 'ការត្រួតពិនិត្យប្រធានក្រុមប្រចាំថ្ងៃ',
      titleZh: '每日不定期抽查',
      descEn: 'Mobile supervisors conduct random inspections twice during day shifts and twice during night shifts to audit alertness, uniform neatness, and logbooks.'
    },
    {
      titleEn: 'Structured Guard Rotation',
      titleKm: 'ការផ្លាស់ប្តូរវេនផ្លូវការ',
      titleZh: '科学轮岗排班',
      descEn: 'Guards are rotated strictly every 12 hours to prevent physical fatigue and maintain peak mental alertness during night watches.'
    },
    {
      titleEn: 'Direct Police Speed Dial',
      titleKm: 'ការភ្ជាប់ទំនាក់ទំនងជាមួយនគរបាល',
      titleZh: '直通警局绿色通道',
      descEn: 'Direct speed-dial hotlines to Provincial Police Commission and Ministry of Interior Emergency Units for instant backup.'
    },
    {
      titleEn: 'Monthly Security Audit Reports',
      titleKm: 'របាយការណ៍សន្តិសុខប្រចាំខែ',
      titleZh: '月度安全隐患总结',
      descEn: 'Clients receive monthly written PDF reports highlighting perimeter vulnerabilities, visitor statistics, and guard wand scan logs.'
    },
    {
      titleEn: 'Weekly Academy Refresher Training',
      titleKm: 'ការបណ្តុះបណ្តាលឡើងវិញប្រចាំសប្តាហ៍',
      titleZh: '每周回炉技能复训',
      descEn: 'Guards participate in weekly K.N.S.K Academy refreshers covering fire safety, CPR first aid, de-escalation, and customer service.'
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Why Choose Our Services Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-950 font-bold text-xs uppercase tracking-widest rounded-full border border-blue-200">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-900" />
              <span>Enterprise Excellence Standards</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-serif">
              {language === 'km' ? 'ហេតុអ្វីបានជាជ្រើសរើសសេវាកម្មសន្តិសុខ K.N.S.K?' : language === 'zh' ? '为什么选择 K.N.S.K 官方安保服务？' : 'Why Choose K.N.S.K Security Services?'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              {language === 'km'
                ? 'យើងខ្ញុំផ្តល់ជូននូវស្តង់ដារសន្តិសុខកម្រិតសហគ្រាស ដោយផ្តោតលើភាពស្មោះត្រង់ វិន័យ និងការការពារយ៉ាងម៉ត់ចត់។'
                : language === 'zh'
                ? '我们结合严密的内部管控、权威内政部政审与全天候督导，为客户筑起无懈可击的安全防线。'
                : 'Combining strict police background checks, experienced supervisors, and professional management protocols.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div key={idx} className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-3 hover:border-blue-400 transition">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${feat.color}`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 font-serif">
                    {language === 'km' ? feat.titleKm : language === 'zh' ? feat.titleZh : feat.titleEn}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{feat.descEn}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quality Assurance Pillars Section */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 border border-slate-800 space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="space-y-2">
              <span className="text-xs font-extrabold text-blue-400 uppercase tracking-widest">Quality Assurance Framework</span>
              <h3 className="text-2xl font-extrabold text-white font-serif">
                {language === 'km' ? 'ប្រព័ន្ធធានាគុណភាព និងការត្រួតពិនិត្យ 24/7' : language === 'zh' ? 'K.N.S.K 质量控制与24/7督导体系' : 'K.N.S.K Quality Assurance & 24/7 Supervision'}
              </h3>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-2 text-xs text-emerald-400 font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Professional Audited Operations</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
            {qaPillars.map((pillar, idx) => (
              <div
                key={idx}
                className={`p-5 bg-slate-950 rounded-xl border border-slate-800 space-y-2 ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-center gap-2 font-bold text-blue-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-sm">{language === 'km' ? pillar.titleKm : language === 'zh' ? pillar.titleZh : pillar.titleEn}</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{pillar.descEn}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
