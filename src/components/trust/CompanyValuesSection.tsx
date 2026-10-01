import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  Shield,
  HeartHandshake,
  Lock,
  Award,
  CheckCircle2,
  TrendingUp,
  Users,
  Target
} from 'lucide-react';

export const CompanyValuesSection: React.FC = () => {
  const { language } = useLanguage();

  const values = [
    {
      id: 'professionalism',
      icon: Shield,
      color: 'bg-blue-100 text-blue-900',
      titleEn: 'Professionalism',
      titleKm: 'វិជ្ជាជីវៈខ្ពស់',
      titleZh: '专业至上',
      descEn: 'Uncompromising adherence to military discipline, neat uniform standards, and National Police protocol.',
      descKm: 'ការគោរពវិន័យយ៉ាងម៉ឺងម៉ាត់ ឯកសណ្ឋាគារត្រឹមត្រូវ និងបទដ្ឋាននគរបាលជាតិ។',
      descZh: '严格遵循军警纪律、仪容仪表标准及国家警察局执勤规范。',
    },
    {
      id: 'integrity',
      icon: HeartHandshake,
      color: 'bg-emerald-100 text-emerald-900',
      titleEn: 'Integrity & Honesty',
      titleKm: 'ភាពស្មោះត្រង់ និងសច្ចធម៌',
      titleZh: '廉洁诚信',
      descEn: 'Zero tolerance for corruption or theft. 100% background-checked and drug-tested personnel.',
      descKm: 'គ្មានការអត់ឱនចំពោះអំពើពុករលួយ ឬអំពើចោរកម្ម។ បុគ្គលិកត្រូវបានពិនិត្យប្រវត្តិរូប និងអវត្តមានសារធាតុញៀន។',
      descZh: '对盗窃及腐败零容忍，全员100%无犯罪背景证明及禁毒检测。',
    },
    {
      id: 'trust',
      icon: Lock,
      color: 'bg-amber-100 text-amber-900',
      titleEn: 'Unshakable Trust',
      titleKm: 'ទំនុកចិត្តមិនប្រែប្រួល',
      titleZh: '值得信赖',
      descEn: 'Earning long-term client faith through rigorous standard operating procedures and transparent audits.',
      descKm: 'កសាងទំនុកចិត្តវែងឆ្ងាយតាមរយៈនីតិវិធីស្តង់ដារប្រតិបត្តិ និងការត្រួតពិនិត្យប្រកបដោយតម្លាភាព។',
      descZh: '以严格的标准作业流程与透明化监督巡查，赢得客户持久信赖。',
    },
    {
      id: 'respect',
      icon: Award,
      color: 'bg-purple-100 text-purple-900',
      titleEn: 'Mutual Respect',
      titleKm: 'ការគោរពគ្នាទៅវិញទៅមក',
      titleZh: '互相尊重',
      descEn: 'Treating all clients, employees, and community members with dignity, equality, and courtesy.',
      descKm: 'ប្រព្រឹត្តចំពោះអតិថិជន បុគ្គលិក និងសហគមន៍ដោយការគោរព និងសមភាព។',
      descZh: '以尊严、平等与彬彬有礼的态度对待客户、员工及社会公众。',
    },
    {
      id: 'responsibility',
      icon: CheckCircle2,
      color: 'bg-sky-100 text-sky-900',
      titleEn: 'Absolute Responsibility',
      titleKm: 'ការទទួលខុសត្រូវខ្ពស់',
      titleZh: '勇于担当',
      descEn: 'Taking full ownership of property security, incident reports, and immediate resolution.',
      descKm: 'ទទួលខុសត្រូវពេញលេញលើសុវត្ថិភាពទ្រព្យសម្បត្តិ របាយការណ៍ និងការដោះស្រាយបញ្ហាភ្លាមៗ។',
      descZh: '对客户财产安全、巡查报告及突发警情处置承担完全责任。',
    },
    {
      id: 'customer_first',
      icon: Target,
      color: 'bg-rose-100 text-rose-900',
      titleEn: 'Customer First',
      titleKm: 'អតិថិជនជាអាទិភាព',
      titleZh: '客户至上',
      descEn: 'Customizing security post orders to match specific client corporate culture and risk profile.',
      descKm: 'រៀបចំបទបញ្ជាគោលដៅតម្រូវតាមវប្បធម៌ និងតម្រូវការជាក់ស្តែងរបស់អតិថិជន។',
      descZh: '因地制宜量身定制专属岗位细则，贴合客户企业文化。',
    },
    {
      id: 'continuous_improvement',
      icon: TrendingUp,
      color: 'bg-indigo-100 text-indigo-900',
      titleEn: 'Continuous Improvement',
      titleKm: 'ការអភិវឌ្ឍជាប្រចាំ',
      titleZh: '持续精进',
      descEn: 'Regular retraining in fire suppression, electronic CCTV analytics, and rapid emergency intervention.',
      descKm: 'ការហ្វឹកហាត់ឡើងវិញជាប្រចាំលើការរពន្លត់អគ្គិភ័យ កាមេរ៉ា CCTV និងអន្តរាគមន៍អាសន្ន។',
      descZh: '定期开展消防演练、CCTV中控监控及防暴应急处突复训。',
    },
    {
      id: 'teamwork',
      icon: Users,
      color: 'bg-emerald-100 text-emerald-900',
      titleEn: 'Unified Teamwork',
      titleKm: 'សាមគ្គីភាព និងក្រុមការងារ',
      titleZh: '团结协作',
      descEn: 'Seamless radio coordination between static post guards, mobile patrol fleets, and central command.',
      descKm: 'ការសម្របសម្រួលយ៉ាងរលូនរវាងសន្តិសុខប្រចាំការ ក្រុមល្បាត និងមជ្ឈមណ្ឌលបញ្ជាការ។',
      descZh: '驻点安保、4x4巡逻车队与中央指挥中心无缝无线电联动。',
    },
  ];

  const getT = (en: string, km: string, zh: string) => {
    if (language === 'km') return km;
    if (language === 'zh') return zh;
    return en;
  };

  return (
    <section className="py-16 bg-slate-900 text-white border-b border-slate-800" id="company-values">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-950 text-blue-300 border border-blue-800 rounded-full text-xs font-bold uppercase tracking-wider">
            <Shield className="w-4 h-4 text-blue-400" />
            {getT('Core Corporate Values', 'តម្លៃស្នូលរបស់ក្រុមហ៊ុន', 'K.N.S.K 企业核心价值观')}
          </div>
          <h2 className="text-3xl font-extrabold font-serif text-white tracking-tight">
            {getT(
              'The Pillars Driving K.N.S.K Corporate Excellence',
              'សសរទ្រទ្រង់ភាពជោគជ័យ និងវិជ្ជាជីវៈរបស់ K.N.S.K',
              '恪守军警纪律与专业道德 铸就柬埔寨安防行业标杆'
            )}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            {getT(
              '8 core values guiding our dedicated security officers across Cambodia every hour of the day.',
              'តម្លៃស្នូល ៨ យ៉ាងដែលដឹកនាំភ្នាក់ងារសន្តិសុខប្រកបដោយវិជ្ជាជីវៈនៅទូទាំងប្រទេស។',
              '引领全国在册安保队员恪尽职守的8项核心行为准则。'
            )}
          </p>
        </div>

        {/* 8 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => {
            const IconComp = v.icon;
            const title = getT(v.titleEn, v.titleKm, v.titleZh);
            const desc = getT(v.descEn, v.descKm, v.descZh);

            return (
              <div
                key={v.id}
                className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-blue-700 transition duration-300 space-y-3 shadow-xl"
              >
                <div className={`w-12 h-12 rounded-xl ${v.color} flex items-center justify-center font-bold`}>
                  <IconComp className="w-6 h-6" />
                </div>

                <h3 className="font-bold text-base text-white font-serif">
                  {title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
