import React from 'react';
import { ShieldCheck, MapPin, Clock, Building2, UserCheck, FileText } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const VerifiedFacts: React.FC = () => {
  const { language } = useLanguage();

  const facts = [
    {
      icon: <MapPin className="w-6 h-6 text-blue-900" />,
      titleEn: 'Nationwide Service',
      titleKm: 'សេវាកម្មទូទាំងប្រទេស',
      titleZh: '全国安保网络',
      descEn: 'Full operational deployment capability covering Phnom Penh and all 24 provinces of Cambodia.',
      descKm: 'វត្តមានប្រតិបត្តិការពេញលេញប្រចាំការនៅរាជធានីភ្នំពេញ និងគ្រប់ ២៤ ខេត្ត។',
      descZh: '全面覆盖金边市及柬埔寨全国24个省份的安保力量。',
    },
    {
      icon: <Clock className="w-6 h-6 text-red-600" />,
      titleEn: '24/7 Operations & Dispatch',
      titleKm: 'មជ្ឈមណ្ឌលប្រតិបត្តិការ ២៤/៧',
      titleZh: '24/7运营调度中心',
      descEn: 'Round-the-clock radio dispatch, continuous guard supervision, and rapid emergency intervention.',
      descKm: 'ការបញ្ជាការតាមវិទ្យុទាក់ទង ការត្រួតពិនិត្យភ្នាក់ងារ និងក្រុមឆ្លើយតបអាសន្ន ២៤ម៉ោង/៧ថ្ងៃ។',
      descZh: '全天候无线电指挥、保安巡查监督及紧急事件突发响应。',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      titleEn: 'MOI Police Cleared',
      titleKm: 'ពិនិត្យប្រវត្តិរូបដោយនគរបាលជាតិ',
      titleZh: '国家警察背景审查',
      descEn: 'Every security officer undergoes strict background verification and criminal record clearance by the Ministry of Interior.',
      descKm: 'ភ្នាក់ងារសន្តិសុខគ្រប់រូបត្រូវបានពិនិត្យស្នាមម្រាមដៃ និងប្រវត្តិរូបស្អាតស្អំពីអគ្គស្នងការដ្ឋាននគរបាលជាតិ។',
      descZh: '所有安保人员均须通过内政部与国家警察总署无犯罪记录政审。',
    },
    {
      icon: <Building2 className="w-6 h-6 text-blue-900" />,
      titleEn: 'Regional Stations',
      titleKm: 'ការិយាល័យ & បញ្ជាការដ្ឋានតំបន់',
      titleZh: '区域分局与驻点',
      descEn: 'Established headquarters in Phnom Penh with active regional sub-stations in key economic hubs.',
      descKm: 'មានការិយាល័យកណ្តាលនៅភ្នំពេញ និងទីស្តីការតំបន់ប្រចាំការនៅតាមតំបន់សេដ្ឋកិច្ចសំខាន់ៗ។',
      descZh: '设金边总部及暹粒、西港、马德望等主要经济枢纽分局。',
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-widest text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Official Operational Credentials
          </span>
          <h2 className="text-2xl font-bold text-slate-900 font-serif">
            Verified Operational Facts & Authority
          </h2>
          <p className="text-xs text-slate-600">
            K.N.S.K Security operates strictly under Ministry of Interior Authorization #KNSK-SEC-2015-089.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, idx) => {
            const title = language === 'km' ? fact.titleKm : language === 'zh' ? fact.titleZh : fact.titleEn;
            const desc = language === 'km' ? fact.descKm : language === 'zh' ? fact.descZh : fact.descEn;

            return (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-md border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center border border-slate-200 shadow-xs">
                    {fact.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base font-serif">
                    {title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-1.5 text-[11px] font-bold text-blue-900 uppercase tracking-wider">
                  <FileText className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
