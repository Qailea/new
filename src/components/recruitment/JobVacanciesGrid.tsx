import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { AVAILABLE_POSITIONS, JobPosition } from '../../data/recruitmentData';
import { Briefcase, MapPin, Clock, DollarSign, CheckCircle2, ArrowRight, X, Shield, Search, FileText } from 'lucide-react';

interface JobVacanciesGridProps {
  onSelectJobToApply: (jobTitle: string) => void;
}

export const JobVacanciesGrid: React.FC<JobVacanciesGridProps> = ({ onSelectJobToApply }) => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeJobModal, setActiveJobModal] = useState<JobPosition | null>(null);

  const categories = ['All', 'Field Operations', 'Field Leadership', 'Commercial'];

  const filteredJobs = AVAILABLE_POSITIONS.filter((job) => {
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
    const title = (job.titleEn + job.titleKm + job.titleZh).toLowerCase();
    const matchesSearch = searchQuery === '' || title.includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getT = (en: string, km: string, zh: string) => {
    if (language === 'km') return km;
    if (language === 'zh') return zh;
    return en;
  };

  return (
    <section id="vacancies" className="py-16 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-900 border border-red-200 rounded-full text-xs font-bold uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5 text-red-600" />
              {language === 'km' ? 'ឱកាសការងារទំនេរ' : language === 'zh' ? '最新招聘岗位' : 'Current Job Vacancies'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-serif text-slate-900 tracking-tight">
              {language === 'km' ? 'ជ្រើសរើសមុខតំណែងដែលសមស្របនឹងសមត្ថភាពរបស់អ្នក' : language === 'zh' ? '探索适于您的专业岗位' : 'Available Openings Across Cambodia'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              {language === 'km' ? 'ក្រុមហ៊ុនសន្តិសុខ K.N.S.K ប្រកាសជ្រើសរើសបុគ្គលិកជាច្រើនផ្នែកទូទាំង ២៥ ខេត្ត-ក្រុង' : language === 'zh' ? 'K.N.S.K 现面向全柬25省市公开发布以下专业岗位' : 'K.N.S.K Security Co., Ltd. is hiring for operational and corporate leadership positions nationwide.'}
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'km' ? 'ស្វែងរកមុខតំណែង...' : language === 'zh' ? '搜索岗位名称...' : 'Search position title...'}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>
        </div>

        {/* Filter Badges */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${
                selectedCategory === cat
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vacancies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => {
            const title = getT(job.titleEn, job.titleKm, job.titleZh);
            const location = getT(job.locationEn, job.locationKm, job.locationZh);
            const type = getT(job.typeEn, job.typeKm, job.typeZh);
            const salary = getT(job.salaryEn, job.salaryKm, job.salaryZh);
            const summary = getT(job.summaryEn, job.summaryKm, job.summaryZh);
            const badge = job.badgeEn ? getT(job.badgeEn, job.badgeKm || job.badgeEn, job.badgeZh || job.badgeEn) : null;

            return (
              <div
                key={job.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-blue-900/40"
              >
                <div className="p-6 space-y-4">
                  {/* Top Bar with Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 bg-blue-50 text-blue-900 border border-blue-200 text-[10px] font-bold uppercase rounded">
                      {job.category}
                    </span>
                    {badge && (
                      <span className="px-2.5 py-1 bg-red-100 text-red-700 border border-red-200 text-[10px] font-extrabold uppercase rounded animate-pulse">
                        {badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-extrabold text-base text-slate-900 font-serif leading-snug group-hover:text-blue-900 transition">
                    {title}
                  </h3>

                  {/* Location & Shift & Salary Meta */}
                  <div className="space-y-2 text-xs text-slate-600 pt-1">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{type}</span>
                    </div>

                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <DollarSign className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="text-emerald-700 font-mono">{salary}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed border-t border-slate-100 pt-3">
                    {summary}
                  </p>
                </div>

                {/* Footer Actions */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveJobModal(job)}
                    className="px-3 py-2 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs rounded-xl border border-slate-300 transition flex items-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5 text-slate-500" />
                    <span>{language === 'km' ? 'ព័ត៌មានលម្អិត' : language === 'zh' ? '岗位详情' : 'Job Details'}</span>
                  </button>

                  <button
                    onClick={() => onSelectJobToApply(job.titleEn)}
                    className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center gap-1.5"
                  >
                    <span>{language === 'km' ? 'ដាក់ពាក្យ' : language === 'zh' ? '申请该岗' : 'Apply Now'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Job Modal */}
        {activeJobModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200">
              <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                <div className="space-y-1">
                  <span className="px-2.5 py-0.5 bg-blue-100 text-blue-900 text-[10px] font-bold uppercase rounded">
                    {activeJobModal.category}
                  </span>
                  <h3 className="font-extrabold text-xl text-slate-900 font-serif">
                    {getT(activeJobModal.titleEn, activeJobModal.titleKm, activeJobModal.titleZh)}
                  </h3>
                  <div className="text-xs text-emerald-700 font-bold font-mono">
                    {getT(activeJobModal.salaryEn, activeJobModal.salaryKm, activeJobModal.salaryZh)}
                  </div>
                </div>
                <button
                  onClick={() => setActiveJobModal(null)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Requirements & Responsibilities Lists */}
              <div className="space-y-4 text-xs">
                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-blue-900" />
                    {language === 'km' ? 'លក្ខខណ្ឌតម្រូវ (Job Requirements)' : language === 'zh' ? '任职要求 (Job Requirements)' : 'Job Requirements'}
                  </h4>
                  <ul className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200 text-slate-700">
                    {(language === 'km' ? activeJobModal.requirementsKm : language === 'zh' ? activeJobModal.requirementsZh : activeJobModal.requirementsEn).map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-red-600" />
                    {language === 'km' ? 'តួនាទី និងការទទួលខុសត្រូវ (Responsibilities)' : language === 'zh' ? '岗位职责 (Responsibilities)' : 'Key Responsibilities'}
                  </h4>
                  <ul className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200 text-slate-700">
                    {(language === 'km' ? activeJobModal.responsibilitiesKm : language === 'zh' ? activeJobModal.responsibilitiesZh : activeJobModal.responsibilitiesEn).map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  onClick={() => setActiveJobModal(null)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = activeJobModal.titleEn;
                    setActiveJobModal(null);
                    onSelectJobToApply(title);
                  }}
                  className="px-6 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center gap-2"
                >
                  <span>Apply For This Position</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
