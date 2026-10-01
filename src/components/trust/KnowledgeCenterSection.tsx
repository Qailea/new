import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { KNOWLEDGE_ARTICLES, KnowledgeArticle } from '../../data/trustMediaData';
import { BookOpen, Clock, Tag, User, ArrowRight, X, ShieldAlert } from 'lucide-react';

export const KnowledgeCenterSection: React.FC = () => {
  const { language } = useLanguage();
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [activeArticle, setActiveArticle] = useState<KnowledgeArticle | null>(null);

  const topics = [
    { id: 'all', labelEn: 'All Guides', labelKm: 'ចំណេះដឹងទាំងអស់', labelZh: '全部安操指南' },
    { id: 'business', labelEn: 'Business & Commercial', labelKm: 'សន្តិសុខអាជីវកម្ម', labelZh: '商业楼宇安防' },
    { id: 'factory', labelEn: 'Factory & Warehouses', labelKm: 'សន្តិសុខរោងចក្រ', labelZh: '工厂与仓储防盗' },
    { id: 'hospitality', labelEn: 'Hotels & Hospitality', labelKm: 'សន្តិសុខសណ្ឋាគារ', labelZh: '酒店与餐饮安保' },
    { id: 'construction', labelEn: 'Construction Sites', labelKm: 'សន្តិសុខការដ្ឋាន', labelZh: '建筑工地看守' },
    { id: 'emergency', labelEn: 'Emergency Preparedness', labelKm: 'ការត្រៀមលក្ខណៈអាសន្ន', labelZh: '突发警情处置' },
  ];

  const filteredArticles = selectedTopic === 'all'
    ? KNOWLEDGE_ARTICLES
    : KNOWLEDGE_ARTICLES.filter((a) => a.category === selectedTopic);

  const getT = (en: string, km: string, zh: string) => {
    if (language === 'km') return km;
    if (language === 'zh') return zh;
    return en;
  };

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200" id="knowledge-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-100 text-blue-900 border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-blue-900" />
            {getT('Security Knowledge & Advisory Hub', 'មជ្ឈមណ្ឌលចំណេះដឹង និងការពិគ្រោះយោបល់', 'K.N.S.K 实用安防知识与行业白皮书')}
          </div>
          <h2 className="text-3xl font-extrabold font-serif text-slate-900 tracking-tight">
            {getT(
              'Expert Operational Handbooks & Crime Prevention Guides',
              'សៀវភៅណែនាំការពារសុវត្ថិភាព និងការបង្ការបទល្មើស',
              '权威专家撰写之厂房防盗、酒店巡查与应急处置实操指南'
            )}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {getT(
              'Practical articles authored by K.N.S.K command officers on commercial security risk assessment, fire safety drills, and access control.',
              'អត្ថបទអប់រំ និងការណែនាំពីរបៀបរៀបចំប្រព័ន្ធសន្តិសុខសម្រាប់រោងចក្រ អាជីវកម្ម និងការដ្ឋានសំណង់។',
              '由 K.N.S.K 高级指挥官联合撰写，涵盖工厂资产防盗、出入口管控及消控联动。'
            )}
          </p>
        </div>

        {/* Topic Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {topics.map((top) => {
            const label = getT(top.labelEn, top.labelKm, top.labelZh);
            const isActive = selectedTopic === top.id;

            return (
              <button
                key={top.id}
                onClick={() => setSelectedTopic(top.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition ${
                  isActive
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => {
            const title = getT(article.title.en, article.title.km, article.title.zh);
            const summary = getT(article.excerpt.en, article.excerpt.km, article.excerpt.zh);
            const author = getT(article.author.en, article.author.km, article.author.zh);

            return (
              <div
                key={article.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between group p-6 space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span className="px-2.5 py-0.5 bg-blue-50 text-blue-900 font-bold uppercase rounded border border-blue-200">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base text-slate-900 font-serif group-hover:text-blue-900 transition line-clamp-2">
                    {title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-3">
                    {summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    {author}
                  </span>

                  <button
                    onClick={() => setActiveArticle(article)}
                    className="text-blue-900 hover:text-blue-950 font-bold text-xs flex items-center gap-1"
                  >
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full Article Reader Modal */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
            <div className="relative max-w-3xl w-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
              
              <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-900" />
                  <span className="font-bold text-xs text-blue-900 uppercase font-mono">
                    Official Security Advisory Paper
                  </span>
                </div>

                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-1 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                    <span>{activeArticle.readTime}</span>
                    <span>•</span>
                    <span>{getT(activeArticle.author.en, activeArticle.author.km, activeArticle.author.zh)}</span>
                  </div>

                  <h2 className="text-2xl font-extrabold font-serif text-slate-900">
                    {getT(activeArticle.title.en, activeArticle.title.km, activeArticle.title.zh)}
                  </h2>
                </div>

                <div className="p-4 bg-blue-50/80 rounded-xl border border-blue-200 text-xs text-slate-700 leading-relaxed">
                  <span className="font-bold text-blue-900 uppercase font-mono text-[10px] block mb-1">
                    Executive Summary:
                  </span>
                  {getT(activeArticle.excerpt.en, activeArticle.excerpt.km, activeArticle.excerpt.zh)}
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans whitespace-pre-line">
                  {activeArticle.content.map((p, idx) => (
                    <p key={idx}>{getT(p.en, p.km, p.zh)}</p>
                  ))}
                </div>
              </div>

              <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  K.N.S.K Security Co., Ltd. Command Desk
                </span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-4 py-2 bg-blue-900 text-white font-bold text-xs rounded-xl hover:bg-blue-950 transition"
                >
                  Close Advisory
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
