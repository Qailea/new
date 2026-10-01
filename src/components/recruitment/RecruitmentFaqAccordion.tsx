import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { RECRUITMENT_FAQS } from '../../data/recruitmentData';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageSquare } from 'lucide-react';

export const RecruitmentFaqAccordion: React.FC = () => {
  const { language } = useLanguage();
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Guard Requirements', 'Salary & Benefits', 'Training & Onboarding', 'Career & Promotion'];

  const filteredFaqs = RECRUITMENT_FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const q = (faq.questionEn + faq.questionKm + faq.questionZh).toLowerCase();
    const matchesSearch = searchQuery === '' || q.includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getT = (en: string, km: string, zh: string) => {
    if (language === 'km') return km;
    if (language === 'zh') return zh;
    return en;
  };

  return (
    <section id="faq" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-900 border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-blue-700" />
            {language === 'km' ? 'សំណួរដែលសួរញឹកញាប់' : language === 'zh' ? '招聘常见问题解答 (FAQ)' : 'Recruitment FAQ'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-serif text-slate-900 tracking-tight">
            {language === 'km' ? 'សំណួរដែលបេក្ខជនតែងតែសួរ K.N.S.K' : language === 'zh' ? '解答关于薪资、培训与入职的疑问' : 'Answers to Common Candidate Inquiries'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {language === 'km' ? 'ស្វែងយល់បន្ថែមអំពីប្រាក់បៀវត្សរ៍ ធនាគារវីង អត្ថប្រយោជន៍ធានារ៉ាប់រង និងការចេញធ្វើការ' : language === 'zh' ? '快速了解关于试用期、Wing Bank发薪、员工保险福利及正式履职的权威解答' : 'Clear answers regarding onboarding timelines, Wing Bank payroll, employee insurance, and benefits.'}
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 scrollbar-thin">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter FAQ questions..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const question = getT(faq.questionEn, faq.questionKm, faq.questionZh);
            const answer = getT(faq.answerEn, faq.answerKm, faq.answerZh);
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs transition"
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full p-5 text-left font-extrabold text-sm sm:text-base text-slate-900 font-serif flex items-center justify-between gap-4 hover:text-blue-900 transition"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-blue-900 shrink-0" />
                    {question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-blue-900 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50">
                    <p>{answer}</p>
                    <div className="mt-3 pt-2 border-t border-slate-200/50 text-[10px] text-slate-400 uppercase font-semibold">
                      Category: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
