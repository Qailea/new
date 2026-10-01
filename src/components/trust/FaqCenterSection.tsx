import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CENTRAL_FAQS, FaqItem } from '../../data/trustMediaData';
import { HelpCircle, Search, ChevronDown, ChevronUp, MessageSquare, PhoneCall } from 'lucide-react';

export const FaqCenterSection: React.FC = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const categories = [
    { id: 'all', labelEn: 'All Questions', labelKm: 'សំណួរទាំងអស់', labelZh: '全部常见问题' },
    { id: 'general', labelEn: 'General & Licensing', labelKm: 'ទូទៅ និងអាជ្ញាប័ណ្ណ', labelZh: '通用资质与许可' },
    { id: 'guarding', labelEn: 'Guarding & Training', labelKm: 'ភ្នាក់ងារ និងការហ្វឹកហាត់', labelZh: '驻点队员与培训' },
    { id: 'quotation', labelEn: 'Pricing & Contracts', labelKm: 'កិច្ចសន្យា និងតម្លៃ', labelZh: '服务合同与报价' },
    { id: 'operations', labelEn: 'Operations & Emergency', labelKm: 'ប្រតិបត្តិការ និងសង្គ្រោះអាសន្ន', labelZh: '24/7调度与应急' },
  ];

  const getT = (en: string, km: string, zh: string) => {
    if (language === 'km') return km;
    if (language === 'zh') return zh;
    return en;
  };

  const filteredFaqs = CENTRAL_FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const q = getT(faq.question.en, faq.question.km, faq.question.zh).toLowerCase();
    const a = getT(faq.answer.en, faq.answer.km, faq.answer.zh).toLowerCase();
    const query = searchQuery.toLowerCase();
    const matchesQuery = q.includes(query) || a.includes(query);
    return matchesCategory && matchesQuery;
  });

  return (
    <section className="py-16 bg-white border-b border-slate-200" id="faq-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-50 text-blue-900 border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-blue-900" />
            {getT('Central FAQ Center', 'មជ្ឈមណ្ឌលសំណួរចម្លើយញឹកញាប់', 'K.N.S.K 官方常见问题解答')}
          </div>
          <h2 className="text-3xl font-extrabold font-serif text-slate-900 tracking-tight">
            {getT(
              'Answers to Your Security Service & Compliance Questions',
              'ចម្លើយច្បាស់លាស់ចំពោះរាល់សំណួររបស់លោកអ្នក',
              '为您解答关于内政部特许经营资质、人员调度与规范合规服务'
            )}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {getT(
              'Everything you need to know about Ministry of Interior licenses, pricing models, SLA standards, and emergency response.',
              'ព័ត៌មានលម្អិតអំពីអាជ្ញាប័ណ្ណ របៀបគណនាតម្លៃ ស្តង់ដារសេវាកម្ម និងការឆ្លើយតបអាសន្ន។',
              '涵盖资质复核、收费计算模式、SLA服务标准及夜间突击巡查细节。'
            )}
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={getT(
              'Search questions (e.g., license, pricing, 24/7, patrol)...',
              'ស្វែងរកសំណួរ (ឧ. អាជ្ញាប័ណ្ណ, តម្លៃ, ២៤ម៉ោង)...',
              '搜索关键词（如：执照、报价、24/7、紧急响应）...'
            )}
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-900 focus:bg-white shadow-2xs transition"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const label = getT(cat.labelEn, cat.labelKm, cat.labelZh);
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition ${
                  isActive
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <p className="text-xs text-slate-500 font-mono">
                No matching questions found. Try searching another term or contact our hotline directly.
              </p>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              const q = getT(faq.question.en, faq.question.km, faq.question.zh);
              const a = getT(faq.answer.en, faq.answer.km, faq.answer.zh);

              return (
                <div
                  key={faq.id}
                  className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-100/80 transition"
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-900 font-serif leading-snug">
                      {q}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-600">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans border-t border-slate-200/60 bg-white space-y-3 animate-fadeIn">
                      <p>{a}</p>
                      <div className="pt-2 flex items-center gap-4 text-[11px] font-mono text-slate-500">
                        <span className="text-blue-900 font-bold">Category: {faq.category}</span>
                        <span>•</span>
                        <span>Official Answer Verified</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Quick Contact Bar */}
        <div className="p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-bold text-sm text-white font-serif">
              Have a question not listed here?
            </h4>
            <p className="text-xs text-slate-400">
              Our 24/7 command officers are standing by to assist you immediately.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://t.me/KNSK_security"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition flex items-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4" /> Telegram Support
            </a>
            <a
              href="tel:0964838666"
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 transition flex items-center gap-1.5"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" /> 096 483 8666
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
