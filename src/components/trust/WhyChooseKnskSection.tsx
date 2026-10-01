import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  UserCheck,
  ShieldCheck,
  Clock,
  Users2,
  Globe2,
  Smile,
  Zap,
  Briefcase
} from 'lucide-react';

export const WhyChooseKnskSection: React.FC = () => {
  const { language } = useLanguage();

  const cards = [
    {
      id: 'professional_guards',
      icon: UserCheck,
      color: 'bg-blue-100 text-blue-900',
      titleEn: 'Professional Guards',
      titleKm: 'ភ្នាក់ងារសន្តិសុខប្រកបដោយវិជ្ជាជីវៈ',
      titleZh: '专业正规安保人员',
      descEn: 'Rigorous National Police criminal screening, drug-free guarantee, and mandatory physical drill academy training.',
      descKm: 'ឆ្លងកាត់ការពិនិត្យប្រវត្តិរូបជាមួយនគរបាលជាតិ គ្មានសារធាតុញៀន និងហ្វឹកហាត់ក្បួនវិន័យយ៉ាងត្រឹមត្រូវ។',
      descZh: '全员经过国家警察局严密无犯罪审查与禁毒排查，并在警训基地完成封闭式训练。',
    },
    {
      id: 'operations_247',
      icon: Clock,
      color: 'bg-amber-100 text-amber-900',
      titleEn: '24/7 Operations',
      titleKm: 'ប្រតិបត្តិការ ២៤/៧',
      titleZh: '24小时不间断全天候运转',
      descEn: 'Round-the-clock radio command center monitoring with hourly roll-calls for 100% post alertness.',
      descKm: 'មជ្ឈមណ្ឌលបញ្ជាការទាក់ទងតាមវិទ្យុ ២៤ម៉ោង និងការឆែកវិទ្យុទាក់ទងរៀងរាល់ម៉ោង។',
      descZh: '中央指挥中心24小时无线电调度，每小时点名打卡，确保岗哨全天候保持高度警惕。',
    },
    {
      id: 'experienced_supervisors',
      icon: Users2,
      color: 'bg-purple-100 text-purple-900',
      titleEn: 'Experienced Supervisors',
      titleKm: 'ប្រធានមេការមានបទពិសោធន៍',
      titleZh: '经验丰富的巡逻督导团队',
      descEn: 'Unannounced day and night supervisor spot-checks in 4x4 pickup trucks to verify guard performance.',
      descKm: 'មេការជិះរថយន្ត 4x4 ចុះពិនិត្យគោលដៅទាំងយប់ទាំងថ្ងៃដោយមិនប្រាប់មុន ដើម្បីធានាគុណភាព។',
      descZh: '配备4x4皮卡巡逻车，昼夜突击查岗抽查，对在岗履职与仪容仪表进行全面督导。',
    },
    {
      id: 'nationwide_coverage',
      icon: Globe2,
      color: 'bg-sky-100 text-sky-900',
      titleEn: 'Nationwide Coverage',
      titleKm: 'បណ្តាញសេវាកម្ម ២៥ ខេត្ត',
      titleZh: '全国25个省市无缝覆盖',
      descEn: 'Operational presence across all 25 provinces in Cambodia with unified management standards.',
      descKm: 'មានវត្តមាន និងបញ្ជាការដ្ឋាននៅគ្រប់ ២៥ រាជធានី-ខេត្ត ទូទាំងព្រះរាជាណាចក្រកម្ពុជា។',
      descZh: '在全国全部25个省市设有独立调度站与驻点，满足跨省连锁企业的统一安保发包。',
    },
    {
      id: 'customer_satisfaction',
      icon: Smile,
      color: 'bg-rose-100 text-rose-900',
      titleEn: 'Customer Satisfaction',
      titleKm: 'ការពេញចិត្តរបស់អតិថិជន',
      titleZh: '以客户为中心的服务体验',
      descEn: 'High client satisfaction with dedicated multilingual support for Khmer, English, and Chinese.',
      descKm: 'ការពេញចិត្តខ្ពស់ពីអតិថិជន ដោយមានការសម្របសម្រួលជាភាសាខ្មែរ អង់គ្លេស និងចិន។',
      descZh: '以优质服务保障客户满意度，配有柬、英、中三语专属沟通对接。',
    },
    {
      id: 'fast_response',
      icon: Zap,
      color: 'bg-yellow-100 text-yellow-900',
      titleEn: 'Fast Response',
      titleKm: 'ការឆ្លើយតបអាសន្នរហ័ស',
      titleZh: '快速应急响应机制',
      descEn: 'Rapid emergency intercept by motorized mobile patrol units in Phnom Penh and provincial hubs.',
      descKm: 'ក្រុមអន្តរាគមន៍រថយន្ត 4x4 ធ្វើដំណើរមកដល់ទីតាំងកើតហេតុយ៉ាងរហ័សទាន់ពេលវេលា។',
      descZh: '金边及各主要省会常态化分片驻守，接到调度指令后快速赶赴处置。',
    },
    {
      id: 'professional_management',
      icon: Briefcase,
      color: 'bg-indigo-100 text-indigo-900',
      titleEn: 'Professional Management',
      titleKm: 'ការគ្រប់គ្រងបែបវិជ្ជាជីវៈ',
      titleZh: '规范化与现代企业化管理',
      descEn: 'Managed by former military and police officers with structured quality supervision and operational audit frameworks.',
      descKm: 'គ្រប់គ្រងដោយអតីតនាយទាហាន និងនគរបាលជាន់ខ្ពស់ តាមស្តង់ដារគុណភាព និងការត្រួតពិនិត្យច្បាស់លាស់។',
      descZh: '由退役军警高管精细化统筹，规范化督导流程，运营高效透明。',
    },
  ];

  const getT = (en: string, km: string, zh: string) => {
    if (language === 'km') return km;
    if (language === 'zh') return zh;
    return en;
  };

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200" id="why-knsk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-100 text-blue-900 border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-blue-900" />
            {getT('Why K.N.S.K Security', 'ហេតុអ្វីជ្រើសរើស K.N.S.K', '为什么选择 K.N.S.K 安保')}
          </div>
          <h2 className="text-3xl font-extrabold font-serif text-slate-900 tracking-tight">
            {getT(
              'Key Reasons Leading Enterprises Trust K.N.S.K',
              'មូលហេតុចម្បងដែលស្ថាប័នធំៗទុកចិត្ត K.N.S.K',
              '核心优势 打造全柬值得信赖的安防品牌'
            )}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {getT(
              'Built on official Ministry of Interior authorization, military discipline, and 100% legal compliance.',
              'កសាងឡើងលើការទទួលស្គាល់ផ្លូវការពីក្រសួងមហាផ្ទៃ វិន័យរឹងមាំ និងភាពត្រឹមត្រូវតាមច្បាប់។',
              '立足于内政部官方特许资质、严格的警训纪律与100%合法合规运营。'
            )}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cards.map((card) => {
            const IconComponent = card.icon;
            const title = getT(card.titleEn, card.titleKm, card.titleZh);
            const desc = getT(card.descEn, card.descKm, card.descZh);

            return (
              <div
                key={card.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 space-y-3 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center font-bold group-hover:scale-105 transition`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-extrabold text-base text-slate-900 font-serif group-hover:text-blue-900 transition">
                    {title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-blue-900">
                  <span>K.N.S.K Standard</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
