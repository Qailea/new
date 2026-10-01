import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  FileText,
  Search,
  ClipboardCheck,
  ShieldAlert,
  FileCheck2,
  Users,
  Building2,
  BarChart3,
  Clock
} from 'lucide-react';

interface ServiceProcessWorkflowProps {
  setActiveTab?: (tab: string) => void;
}

export const ServiceProcessWorkflow: React.FC<ServiceProcessWorkflowProps> = () => {
  const { language } = useLanguage();

  const workflowSteps = [
    {
      num: '01',
      titleEn: 'Client Inquiry',
      titleKm: 'ការទំនាក់ទំនងសាកសួរ',
      titleZh: '客户咨询对接',
      descEn: 'Contact us via phone, Telegram, or online quotation form.',
      icon: FileText
    },
    {
      num: '02',
      titleEn: 'Free Consultation',
      titleKm: 'ការពិគ្រោះយោបល់ឥតគិតថ្លៃ',
      titleZh: '免费安防咨询',
      descEn: 'Discussion of security requirements & site operational needs.',
      icon: Search
    },
    {
      num: '03',
      titleEn: 'Site Risk Assessment',
      titleKm: 'ការវាយតម្លៃហានិភ័យទីតាំង',
      titleZh: '实地勘测与风险评估',
      descEn: 'Senior supervisors visit site to inspect perimeters and entry points.',
      icon: ClipboardCheck
    },
    {
      num: '04',
      titleEn: 'Risk Evaluation Report',
      titleKm: 'របាយការណ៍វាយតម្លៃហានិភ័យ',
      titleZh: '风险评估报告出具',
      descEn: 'Detailed security gap analysis and recommendations provided.',
      icon: ShieldAlert
    },
    {
      num: '05',
      titleEn: 'Formal Proposal',
      titleKm: 'សំណើប្រកួតប្រជែងផ្លូវការ',
      titleZh: '提交官方方案与报价',
      descEn: 'Transparent guard headcount, shift schedules, & SLA post orders.',
      icon: FileCheck2
    },
    {
      num: '06',
      titleEn: 'Agreement & SLA',
      titleKm: 'ការចុះកិច្ចសន្យាផ្លូវការ',
      titleZh: '签署法律协议与SLA',
      descEn: 'Formal contract signed adhering strictly to Ministry of Interior rules.',
      icon: Users
    },
    {
      num: '07',
      titleEn: 'Guard Deployment',
      titleKm: 'ការបញ្ជូនភ្នាក់ងារសន្តិសុខ',
      titleZh: '队员准时进驻',
      descEn: 'Trained, vetted uniformed guards stationed on site with full post gear.',
      icon: Building2
    },
    {
      num: '08',
      titleEn: 'Operations Management',
      titleKm: 'ការគ្រប់គ្រងប្រតិបត្តិការ',
      titleZh: '24/7 督导与中控管理',
      descEn: '24/7 mobile supervisor patrols, log audits, and central command monitoring.',
      icon: Clock
    },
    {
      num: '09',
      titleEn: 'Regular Audit Reporting',
      titleKm: 'របាយការណ៍សវនកម្មប្រចាំខែ',
      titleZh: '定期汇报与满意度复盘',
      descEn: 'Comprehensive monthly incident reviews and client service satisfaction.',
      icon: BarChart3
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-900 font-bold text-xs uppercase tracking-widest rounded-full border border-blue-200">
            <ClipboardCheck className="w-3.5 h-3.5 text-blue-900" />
            <span>Standard Operational Procedure (SOP)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            {language === 'km'
              ? 'ដំណើរការផ្តល់សេវាកម្មស្តង់ដារ'
              : language === 'zh'
              ? '标准化安保服务流程'
              : 'Standard Service Workflow'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {language === 'km'
              ? 'ពីការសាកសួរដំបូង រហូតដល់ការប្រចាំការផ្លូវការ ក្រុមហ៊ុន K.N.S.K ធានាដំណើរការប្រកបដោយតម្លាភាព វិជ្ជាជីវៈ និងសុវត្ថិភាពខ្ពស់បំផុត។'
              : language === 'zh'
              ? '从首次沟通、实地勘测到队员正式进驻，K.N.S.K 提供标准化、专业严谨与高透明度的服务流程。'
              : 'Our structured 9-step workflow ensures seamless transition, comprehensive risk mitigation, and professional site security management.'}
          </p>
        </div>

        {/* 9-Step Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {workflowSteps.map((step) => {
            const IconComp = step.icon;
            return (
              <div
                key={step.num}
                className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-3 hover:border-blue-900 hover:bg-white hover:shadow-md transition group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-blue-900 font-serif">{step.num}</span>
                  <div className="p-2 bg-white text-blue-900 rounded-lg border border-slate-200 group-hover:bg-blue-900 group-hover:text-white transition">
                    <IconComp className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-bold text-sm text-slate-900 font-serif group-hover:text-blue-900 transition">
                  {language === 'km' ? step.titleKm : language === 'zh' ? step.titleZh : step.titleEn}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.descEn}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
