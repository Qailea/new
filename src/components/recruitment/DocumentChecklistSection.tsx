import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { REQUIRED_DOCUMENTS } from '../../data/recruitmentData';
import { FileCheck, CheckCircle2, AlertCircle, HelpCircle, Download } from 'lucide-react';

export const DocumentChecklistSection: React.FC = () => {
  const { language } = useLanguage();

  const getT = (en: string, km: string, zh: string) => {
    if (language === 'km') return km;
    if (language === 'zh') return zh;
    return en;
  };

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-900 border border-emerald-200 rounded-full text-xs font-bold uppercase tracking-wider">
            <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
            {language === 'km' ? 'បញ្ជីឯកសារតម្រូវ' : language === 'zh' ? '求职必备材料清单' : 'Required Application Documents'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-serif text-slate-900 tracking-tight">
            {language === 'km' ? 'ឯកសារសំខាន់ៗដែលត្រូវរៀបចំមុនពេលសម្ភាសន៍' : language === 'zh' ? '面试与政审必备权威书面文件' : 'Document Checklist for Candidate Screening'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {language === 'km' ? 'សូមរៀបចំឯកសារខាងក្រោមឲ្យបានគ្រប់គ្រាន់ ដើម្បីទទួលបានការពិនិត្យ និងចាត់តាំងរហ័ស' : language === 'zh' ? '请在参加现场面试或上传档案前准备好以下原件及清晰复印件' : 'Preparing complete documentation accelerates your background verification and fast-track onboarding.'}
          </p>
        </div>

        {/* 2-Column Grid of Checklist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {REQUIRED_DOCUMENTS.map((doc) => {
            const title = getT(doc.titleEn, doc.titleKm, doc.titleZh);
            const desc = getT(doc.descEn, doc.descKm, doc.descZh);

            return (
              <div
                key={doc.id}
                className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex items-start gap-4 hover:border-blue-900/40 transition"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  doc.required ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' : 'bg-slate-100 text-slate-600 border border-slate-200'
                }`}>
                  <CheckCircle2 className="w-5 h-5" />
                </div>

                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-extrabold text-sm text-slate-900 font-serif">
                      {title}
                    </h3>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      doc.required ? 'bg-red-100 text-red-700 border border-red-200' : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}>
                      {doc.required ? (language === 'km' ? 'ចាំបាច់' : language === 'zh' ? '必备材料' : 'Mandatory') : (language === 'km' ? 'ជម្រើស' : language === 'zh' ? '加分材料' : 'Optional')}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Important HR Advice Note */}
        <div className="max-w-4xl mx-auto bg-blue-950 text-white rounded-2xl p-6 border border-blue-900 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-900 text-blue-200 flex items-center justify-center shrink-0">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <h4 className="font-bold text-sm">Need help obtaining Police Clearance?</h4>
              <p className="text-xs text-blue-200">Our HR Officers can assist candidates with official commune verification guidelines.</p>
            </div>
          </div>
          <a
            href="https://t.me/KNSK_security"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl whitespace-nowrap transition shadow"
          >
            Contact HR Telegram Assistance
          </a>
        </div>

      </div>
    </section>
  );
};
