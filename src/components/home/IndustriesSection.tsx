import React, { useState } from 'react';
import {
  Factory,
  Landmark,
  Hotel,
  ShieldCheck,
  Dices,
  GraduationCap,
  Building2,
  HardHat,
  ShoppingBag,
  Home,
  Crown,
  Globe2,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export interface IndustryItem {
  id: string;
  icon: React.ReactNode;
  titleKey: string;
  titleKm: string;
  titleZh: string;
  descKm: string;
  descEn: string;
  descZh: string;
  protocols: string[];
}

export const industriesData: IndustryItem[] = [
  {
    id: 'factories',
    icon: <Factory className="w-6 h-6 text-blue-900" />,
    titleKey: 'ind_factories',
    titleKm: 'រោងចក្រ & តំបន់សេដ្ឋកិច្ចពិសេស',
    titleZh: '工厂与工业园安保',
    descKm: 'ការការពារសម្ភារៈ គ្រឿងចក្រ ការពិនិត្យច្រកទ្វារចេញចូលកម្មករ និងការទប់ស្កាត់ការលួចបាត់បង់ទ្រព្យសម្បត្តិ ២៤/៧',
    descEn: 'Industrial site security, perimeter defense, shift worker access control, cargo inspection, and loss prevention.',
    descZh: '针对工厂与工业区，提供24小时出入口管控、员工考勤巡查、物资防盗及消防突发应对。',
    protocols: ['Cargo Truck Inspection', 'Patrol Guard Wand Checkpoints', 'Fire Safety & First Aid Trained'],
  },
  {
    id: 'banks',
    icon: <Landmark className="w-6 h-6 text-blue-900" />,
    titleKey: 'ind_banks',
    titleKm: 'ធនាគារ & គ្រឹះស្ថានហិរញ្ញវត្ថុ',
    titleZh: '银行与金融机构',
    descKm: 'សន្តិសុខប្រ장ជិតស្និទ្ធនៅមុខសាខាធនាគារ ការពារទូរ ATM និងសន្តិសុខអមដំណើរសាច់ប្រាក់តាមស្តង់ដារ',
    descEn: 'High-visibility armed/unarmed bank guards, ATM protection, vault access safety, and cash transit support.',
    descZh: '银行门头高级安保、营业厅防抢防暴、网点巡查及ATM自动取款机安全防护。',
    protocols: ['Access Control & Customer Escort', 'Armed Guard Response Readiness', 'Rapid Radio Dispatch to Police'],
  },
  {
    id: 'hotels',
    icon: <Hotel className="w-6 h-6 text-blue-900" />,
    titleKey: 'ind_hotels',
    titleKm: 'សណ្ឋាគារ & រីស៊ត',
    titleZh: '酒店与度假村安保',
    descKm: 'សេវាកម្មសន្តិសុខប្រកបដោយរដិបរដុបសមរម្យ ស្វាគមន៍ភ្ញៀវទេសចរ សម្របសម្រួលចំណត និងការពារសន្តិសុខ VIP',
    descEn: 'Polite, customer-service oriented security officers for lobby access, parking coordination, and guest safety.',
    descZh: '注重礼仪与服务的酒店安保，提供门童协助、客房楼层巡视、突发事件处理及贵宾接送。',
    protocols: ['Hospitality Trained Personnel', 'Vehicle Parking & VIP Valet', 'Discreet Guest Safety Monitoring'],
  },
  {
    id: 'embassies',
    icon: <Globe2 className="w-6 h-6 text-blue-900" />,
    titleKey: 'ind_embassies',
    titleKm: 'ស្ថានទូត & អង្គការអន្តរជាតិ',
    titleZh: '大使馆与国际机构',
    descKm: 'ការការពារកម្រិតខ្ពស់សម្រាប់បេសកកម្មឌីប្រូម៉ាទិក ការត្រួតពិនិត្យមធ្យោបាយធ្វើដំណើរ និងលិខិតឆ្លងដែន',
    descEn: 'High-security diplomatic compound protection, perimeter clearance, visitor vetting, and liaison with law enforcement.',
    descZh: '符合外交机构标准的高级别领事馆安保，严密人流核验、车检及外交要员护卫。',
    protocols: ['Diplomatic Protocol Vetted', 'Clearance Level Checks', '24/7 Perimeter Standby Patrol'],
  },
  {
    id: 'casinos',
    icon: <Dices className="w-6 h-6 text-blue-900" />,
    titleKey: 'ind_casinos',
    titleKm: 'កាស៊ីណូ & មជ្ឈមណ្ឌលកម្សាន្ត',
    titleZh: '赌场与娱乐会所',
    descKm: 'ការគ្រប់គ្រងច្រកទ្វារកាស៊ីណូ សម្រួលសណ្តាប់ធ្នាប់អតិថិជន VIP និងការការពារជម្លោះក្នុងទីតាំងកម្សាន្ត',
    descEn: 'Specialized security officers for gaming floors, crowd control, VIP entrance clearance, and conflict resolution.',
    descZh: '娱乐场高密度警卫、通道安全把控、贵宾专区护卫及突发纷争的专业化解。',
    protocols: ['Crowd Management Certified', 'VIP Escort Services', 'De-escalation & Restraint Training'],
  },
  {
    id: 'schools',
    icon: <GraduationCap className="w-6 h-6 text-blue-900" />,
    titleKey: 'ind_schools',
    titleKm: 'សាលារៀន & សកលវិទ្យាល័យ',
    titleZh: '学校与教育机构',
    descKm: 'ការការពារសុវត្ថិភាពសិស្សានុសិស្ស សម្រួលចរាចរណ៍កុមារនៅមុខសាលា និងការពិនិត្យអត្តសញ្ញាណជនแปลកមុខ',
    descEn: 'Safe campus security, school gate traffic management, student safety enforcement, and visitor verification.',
    descZh: '校园出入口安全把关、上下学交通疏导、防止陌生人潜入及校园巡逻。',
    protocols: ['Student Safety Certified', 'Traffic Control at Gates', 'Strict Visitor ID Registration'],
  },
  {
    id: 'hospitals',
    icon: <Building2 className="w-6 h-6 text-blue-900" />,
    titleKey: 'ind_hospitals',
    titleKm: 'មន្ទីរពេទ្យ & គ្លីនិក',
    titleZh: '医院与医疗中心',
    descKm: 'ការរៀបចំសណ្តាប់ធ្នាប់ផ្នែកសង្គ្រោះបន្ទាន់ សម្រួលចំណតរថយន្តសង្គ្រោះ និងការទប់ស្កាត់ភាពវឹកវរ',
    descEn: 'Emergency department order maintenance, ambulance bay clearing, patient escort, and conflict prevention.',
    descZh: '急诊大厅与门诊安保、救护车通道疏通、医患矛盾应急处置及秩序维护。',
    protocols: ['Medical Emergency Escort', 'Traffic Clearing for Ambulances', 'Conflict De-escalation'],
  },
  {
    id: 'construction',
    icon: <HardHat className="w-6 h-6 text-blue-900" />,
    titleKey: 'ind_construction',
    titleKm: 'ការដ្ឋានសំណង់ & អគារកំពុងសាងសង់',
    titleZh: '建筑工地与工程项目',
    descKm: 'ការការពារគ្រឿងចក្រ ដែក ស៊ីម៉ង់ត៍ និងសម្ភារៈសំណង់ មិនឲ្យមានការលួចបាត់បង់ និងការត្រួតពិនិត្យមួកសុវត្ថិភាព',
    descEn: 'Equipment & building material protection, night perimeter patrols, entry gate logging, and safety PPE compliance.',
    descZh: '工地重型设备与建筑材料防盗、夜间高频巡逻、进出人员身份查验及安全帽防护。',
    protocols: ['Heavy Machinery Guarding', 'Material Log & Gate Pass Verification', 'Night Patrol & Guard Dog Units'],
  },
  {
    id: 'malls',
    icon: <ShoppingBag className="w-6 h-6 text-blue-900" />,
    titleKey: 'ind_malls',
    titleKm: 'ផ្សារទំនើប & មជ្ឈមណ្ឌលពាណិជ្ជកម្ម',
    titleZh: '商场与商业中心',
    descKm: 'ការការពារហាងទំនិញ សម្រួលចំណតយានយន្ត រៀបចំសណ្តាប់ធ្នាប់ និងការទប់ស្កាត់អគ្គិភ័យ',
    descEn: 'Retail store security, parking structure patrols, lost child assistance, and shopping center order enforcement.',
    descZh: '大型商场出入口防范、地下停车场防盗巡视、人流引导及消防隐患排查。',
    protocols: ['Loss Prevention Patrols', 'Parking Facility Management', 'Fire Response Trained'],
  },
  {
    id: 'residences',
    icon: <Home className="w-6 h-6 text-blue-900" />,
    titleKey: 'ind_residences',
    titleKm: 'បុរី & ភូមិគ្រឹះជាន់ខ្ពស់',
    titleZh: '豪华别墅与住宅小区',
    descKm: 'ការត្រួតពិនិត្យច្រកចេញចូលបុរី ការប្រើប្រាស់ប័ណ្ណស្កែន កាមេរ៉ានិងក្បួនល្បាតយប់ក្នុងសហគមន៍',
    descEn: 'Gated community perimeter protection, visitor RFID/QR screening, 24/7 mobile patrols inside residential estates.',
    descZh: '住宅小区闸门把控、外来人员访客登记、夜间小区内部安保巡逻及居家指引。',
    protocols: ['Resident Barrier Access Control', 'Mobile Patrol Vehicles', 'Visitor QR/ID Verification'],
  },
  {
    id: 'government',
    icon: <Crown className="w-6 h-6 text-blue-900" />,
    titleKey: 'ind_government',
    titleKm: 'ក្រសួង & ស្ថាប័នរដ្ឋ',
    titleZh: '政府机关与行政大楼',
    descKm: 'ការពិនិត្យឯកសារផ្លូវការ ការពារច្រកចូលក្រសួង និងការរក្សាសណ្តាប់ធ្នាប់ទីស្តីការ',
    descEn: 'Official government building access security, visitor credential checking, and ceremonial standing protocol.',
    descZh: '政府公共机构及行政大楼前台检录、机关安保巡视及要员进出协助。',
    protocols: ['Official Credential Checking', 'Ceremonial Guard Standing', 'Direct MOI Liaison'],
  },
];

interface IndustriesSectionProps {
  setActiveTab?: (tab: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ setActiveTab }) => {
  const { language, t } = useLanguage();
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem | null>(null);

  const getTitle = (ind: IndustryItem) => {
    if (language === 'km') return ind.titleKm;
    if (language === 'zh') return ind.titleZh;
    return ind.id.charAt(0).toUpperCase() + ind.id.slice(1) + ' Protection';
  };

  const getDesc = (ind: IndustryItem) => {
    if (language === 'km') return ind.descKm;
    if (language === 'zh') return ind.descZh;
    return ind.descEn;
  };

  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-950 border border-blue-700/50 px-3.5 py-1 rounded-full text-xs font-bold text-blue-300 uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{t('industries_badge')}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-serif">
            {t('industries_title')}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            {t('industries_subtitle')}
          </p>
        </div>

        {/* Industries Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {industriesData.map((ind) => (
            <div
              key={ind.id}
              className="bg-slate-950/80 rounded-xl p-5 border border-slate-800 hover:border-blue-600/60 transition-all duration-300 hover:shadow-xl hover:shadow-blue-950/50 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-blue-900/40 rounded-lg flex items-center justify-center border border-blue-700/50 group-hover:bg-blue-900 transition-colors">
                    {ind.icon}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800/60 uppercase">
                    Tailored SLA
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                  {getTitle(ind)}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {getDesc(ind)}
                </p>

                {/* Key Protocols List */}
                <div className="pt-3 border-t border-slate-900 space-y-1.5">
                  {ind.protocols.map((proto, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span className="truncate">{proto}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-900 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedIndustry(ind)}
                  className="text-xs font-bold text-blue-400 hover:text-white transition flex items-center gap-1 uppercase tracking-wider"
                >
                  Protection Protocol
                </button>
                <button
                  onClick={() => setActiveTab && setActiveTab('quotation')}
                  className="p-1.5 bg-red-600 hover:bg-red-700 text-white rounded transition"
                  title="Request Quote"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industry Detail Modal */}
      {selectedIndustry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 text-white rounded-xl border border-slate-700 max-w-lg w-full p-6 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-900/60 rounded-lg border border-blue-700">
                  {selectedIndustry.icon}
                </div>
                <h3 className="text-lg font-bold text-white font-serif">
                  {getTitle(selectedIndustry)}
                </h3>
              </div>
              <button
                onClick={() => setSelectedIndustry(null)}
                className="p-1 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {getDesc(selectedIndustry)}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Standard Security Enforcement Protocols:
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {selectedIndustry.protocols.map((proto, idx) => (
                  <li key={idx} className="flex items-center gap-2 bg-slate-950 p-2.5 rounded border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{proto}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
              <button
                onClick={() => setSelectedIndustry(null)}
                className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedIndustry(null);
                  setActiveTab && setActiveTab('quotation');
                }}
                className="px-5 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded shadow"
              >
                Request Proposal
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
