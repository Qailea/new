import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  ShieldCheck,
  Clock,
  MapPin,
  Zap,
  Award,
  Users,
  CheckCircle2,
  Building2
} from 'lucide-react';

interface TrustCredentialsProps {
  setActiveTab?: (tab: string) => void;
}

export const TrustCredentials: React.FC<TrustCredentialsProps> = () => {
  const { language, t } = useLanguage();

  const trustCards = [
    {
      icon: <Users className="w-6 h-6 text-blue-900" />,
      titleEn: 'Professional Guards',
      titleKm: 'ភ្នាក់ងារសន្តិសុខប្រកបដោយវិជ្ជាជីវៈ',
      titleZh: '专业正规保安人员',
      descEn: 'Rigorously vetted, police background cleared, and trained in first aid, fire safety, and physical defense.',
      descKm: 'ឆ្លងកាត់ការពិនិត្យប្រវត្តិរូបស្អាតស្អំពីនគរបាលជាតិ និងបណ្តុះបណ្តាលបច្ចេកទេសការពារខ្លួន សង្គ្រោះបឋម និងពន្លត់អគ្គិភ័យ។',
      descZh: '经国家警察无犯罪政审，专业培训消防、急救及防暴技能。',
    },
    {
      icon: <Clock className="w-6 h-6 text-red-600" />,
      titleEn: '24/7 Operations',
      titleKm: 'ប្រតិបត្តិការ និងការបញ្ជាការ ២៤/៧',
      titleZh: '24/7全天候勤务指挥',
      descEn: 'Central Command Post active 24 hours a day, 365 days a year with real-time radio and GPS patrol monitoring.',
      descKm: 'បញ្ជាការដ្ឋានកណ្តាលប្រចាំការ ២៤ម៉ោង/៧ថ្ងៃ ដោយមានការតាមដានតាមវិទ្យុទាក់ទង និងប្រព័ន្ធ GPS Patrol។',
      descZh: '中央指挥中心365天全天候值守，实时GPS巡逻轨迹监管。',
    },
    {
      icon: <MapPin className="w-6 h-6 text-emerald-600" />,
      titleEn: 'Nationwide Coverage',
      titleKm: 'បណ្តាញគ្របដណ្តប់ ២៥ ខេត្ត-ក្រុង',
      titleZh: '全国25省市安保覆盖',
      descEn: 'Active presence and regional stations across Phnom Penh and all 24 provinces in the Kingdom of Cambodia.',
      descKm: 'មានភ្នាក់ងារ និងការិយាល័យតំបន់ប្រចាំការនៅរាជធានីភ្នំពេញ និងគ្រប់ ២៤ ខេត្តទូទាំងប្រទេសកម្ពុជា។',
      descZh: '在金边及全国所有24个省份均设有安保力量与分支服务点。',
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      titleEn: 'Rapid Emergency Response',
      titleKm: 'ការឆ្លើយតបអាសន្នរហ័ស',
      titleZh: '快速应急响应',
      descEn: 'Dedicated mobile pickup trucks and motorcycle patrol units ready for prompt emergency intervention.',
      descKm: 'ក្រុមក្បួនល្បាតចល័តរថយន្ត និងម៉ូតូត្រៀមខ្លួនជាស្រេចឆ្លើយតបហេតុការណ៍អាសន្នបានទាន់ពេលវេលា។',
      descZh: '专属巡逻车队与机动响应小组，全天候应对各类突发安全事件。',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-900" />,
      titleEn: 'Government Registered',
      titleKm: 'ចុះបញ្ជីផ្លូវការនៅក្រសួងមហាផ្ទៃ',
      titleZh: '内政部合法执照',
      descEn: 'Official private security license #KNSK-SEC-2015-089 authorized by the Ministry of Interior.',
      descKm: 'ទទួលបានអាជ្ញាប័ណ្ណផ្លូវការពីក្រសួងមហាផ្ទៃ និងអគ្គស្នងការដ្ឋាននគរបាលជាតិកម្ពុជា។',
      descZh: '获得柬埔寨内政部与国家警察总署颁发的正规经营许可证。',
    },
    {
      icon: <Award className="w-6 h-6 text-purple-600" />,
      titleEn: 'Experienced Supervisors',
      titleKm: 'ក្រុមត្រួតពិនិត្យមានបទពិសោធន៍',
      titleZh: '资深军警督导团队',
      descEn: 'Operations managed by former military officers and police commanders with deep security expertise.',
      descKm: 'ដឹកនាំ និងត្រួតពិនិត្យផ្ទាល់ដោយអតីតនាយទាហាន និងនាយនគរបាលដែលមានបទពិសោធន៍ខ្ពស់។',
      descZh: '由前退役军官与高级警官直接进行日常带队与实地督导。',
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
      titleEn: 'Client Satisfaction',
      titleKm: 'ការពេញចិត្តខ្ពស់ពីអតិថិជន',
      titleZh: '客户信赖与满意度',
      descEn: 'Protecting commercial buildings, industrial factories, residential boreys, and banking facilities with reliable SLA standards.',
      descKm: 'ផ្តល់សេវាកម្មការពារអគារពាណិជ្ជកម្ម រោងចក្រ បុរី និងធនាគារ ដោយរក្សាស្តង់ដារគុណភាពខ្ពស់ និងការទទួលខុសត្រូវ។',
      descZh: '为商业写字楼、工业厂房、住宅小区及金融网点提供高标准可靠安保与严格履约保障。',
    },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950 text-blue-300 border border-blue-700/80 rounded-full text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{t('trust_pillars_badge')}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight font-serif">
            {t('trust_title')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {t('trust_subtitle')}
          </p>
        </div>

        {/* Premium Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {trustCards.map((card, idx) => {
            const title = language === 'km' ? card.titleKm : language === 'zh' ? card.titleZh : card.titleEn;
            const desc = language === 'km' ? card.descKm : language === 'zh' ? card.descZh : card.descEn;

            return (
              <div
                key={idx}
                className="bg-slate-950/90 p-5 rounded-xl border border-slate-800 hover:border-blue-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-blue-950/50 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-white text-base font-serif group-hover:text-blue-300 transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-900 flex items-center gap-1 text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>K.N.S.K Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
