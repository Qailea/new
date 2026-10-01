import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SERVICE_FAQS, ServiceFaq } from '../../data/servicesData';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageSquare } from 'lucide-react';

interface ServicesFaqProps {
  onOpenEmergency: () => void;
}

export const ServicesFaq: React.FC<ServicesFaqProps> = ({ onOpenEmergency }) => {
  const { language } = useLanguage();
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const getQuestion = (faq: ServiceFaq) => {
    if (language === 'km') return faq.qKm;
    if (language === 'zh') return faq.qZh;
    return faq.qEn;
  };

  const getAnswer = (faq: ServiceFaq) => {
    if (language === 'km') return faq.aKm;
    if (language === 'zh') return faq.aZh;
    return faq.aEn;
  };

  const filteredFaqs = SERVICE_FAQS.filter((f) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      f.qEn.toLowerCase().includes(q) ||
      f.qKm.toLowerCase().includes(q) ||
      f.qZh.toLowerCase().includes(q) ||
      f.aEn.toLowerCase().includes(q)
    );
  });

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-950 font-bold text-xs uppercase tracking-widest rounded-full border border-blue-200">
            <HelpCircle className="w-3.5 h-3.5 text-blue-900" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            {language === 'km' ? 'សំណួរដែលជួបប្រទះញឹកញាប់អំពីសេវាកម្មសន្តិសុខ' : language === 'zh' ? '安保服务常见问题解答 (FAQ)' : 'Frequently Asked Security Questions'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {language === 'km'
              ? 'ចម្លើយច្បាស់លាស់ចំពោះសំណួរដែលអតិថិជនតែងតែសាកសួរអំពីចំនួនភ្នាក់ងារ ពេលវេលាបញ្ជូន និងកិច្ចសន្យា។'
              : language === 'zh'
              ? '为您解答有关派驻人数、进驻速度、24/7轮班及临时租赁的常见疑问。'
              : 'Clear answers regarding guard deployment speeds, 24/7 shift structures, supervisor visits, and contracts.'}
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. guard count, 24/7, speed)..."
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs transition hover:border-blue-400"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-50 transition"
                >
                  <span className="font-bold text-sm text-slate-900 font-serif leading-snug">
                    {getQuestion(faq)}
                  </span>
                  <div className="p-1 rounded bg-white border border-slate-200 text-slate-600 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="p-5 pt-2 border-t border-slate-100 text-xs text-slate-700 leading-relaxed space-y-2 bg-white animate-fadeIn">
                    <p>{getAnswer(faq)}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-bold text-base font-serif">Still have specific security questions?</h3>
            <p className="text-xs text-slate-300">Our senior security commanders are available 24/7 to answer your inquiries.</p>
          </div>
          <button
            onClick={onOpenEmergency}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow transition flex items-center gap-2 shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Consult Security Commander</span>
          </button>
        </div>
      </div>
    </section>
  );
};
