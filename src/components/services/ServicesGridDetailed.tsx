import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { MANNED_SERVICES, DetailedService } from '../../data/servicesData';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  X,
  FileText,
  Clock,
  Building2,
  UserCheck,
  Search,
  Filter,
  Users
} from 'lucide-react';

interface ServicesGridDetailedProps {
  setActiveTab: (tab: string) => void;
}

export const ServicesGridDetailed: React.FC<ServicesGridDetailedProps> = ({ setActiveTab }) => {
  const { language } = useLanguage();
  const [selectedService, setSelectedService] = useState<DetailedService | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', nameEn: 'All 15 Services', nameKm: 'សេវាកម្មទាំង ១៥', nameZh: '全部15项服务' },
    { id: 'Guarding', nameEn: 'Static Guarding', nameKm: 'សន្តិសុខប្រចាំការ', nameZh: '驻点安保' },
    { id: 'Industrial', nameEn: 'Industrial & Factories', nameKm: 'រោងចក្រ & ឧស្សាហកម្ម', nameZh: '工厂与工业' },
    { id: 'Commercial', nameEn: 'Commercial & Towers', nameKm: 'អគារពាណិជ្ជកម្ម', nameZh: '商业与大厦' },
    { id: 'Residential', nameEn: 'Borey & Residential', nameKm: 'បុរី & ភូមិគ្រឹះ', nameZh: '住宅与小区' },
    { id: 'Hospitality', nameEn: 'Hotel & Resort', nameKm: 'សណ្ឋាគារ & រីស៊ត', nameZh: '酒店与度假村' },
    { id: 'Healthcare', nameEn: 'Hospital & ER', nameKm: 'មន្ទីរពេទ្យ', nameZh: '医疗与医院' },
    { id: 'Events', nameEn: 'Events & Expo', nameKm: 'ព្រឹត្តិការណ៍', nameZh: '活动与展会' },
    { id: 'Mobile Patrol', nameEn: 'Mobile Patrol', nameKm: 'ក្បួនល្បាតចល័ត', nameZh: '4x4机动巡逻' }
  ];

  const filteredServices = MANNED_SERVICES.filter((svc) => {
    const matchesCategory = activeCategory === 'all' || svc.category === activeCategory;
    const title = language === 'km' ? svc.titleKm : language === 'zh' ? svc.titleZh : svc.titleEn;
    const desc = language === 'km' ? svc.shortDescKm : language === 'zh' ? svc.shortDescZh : svc.shortDescEn;
    const matchesSearch =
      searchQuery === '' ||
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.industriesServedEn.some((ind) => ind.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const getTitle = (svc: DetailedService) => {
    if (language === 'km') return svc.titleKm;
    if (language === 'zh') return svc.titleZh;
    return svc.titleEn;
  };

  const getDesc = (svc: DetailedService) => {
    if (language === 'km') return svc.shortDescKm;
    if (language === 'zh') return svc.shortDescZh;
    return svc.shortDescEn;
  };

  const getWhoShouldUse = (svc: DetailedService) => {
    if (language === 'km') return svc.whoShouldUseKm;
    if (language === 'zh') return svc.whoShouldUseZh;
    return svc.whoShouldUseEn;
  };

  const getResponsibilities = (svc: DetailedService) => {
    if (language === 'km') return svc.responsibilitiesKm;
    if (language === 'zh') return svc.responsibilitiesZh;
    return svc.responsibilitiesEn;
  };

  const getBenefits = (svc: DetailedService) => {
    if (language === 'km') return svc.benefitsKm;
    if (language === 'zh') return svc.benefitsZh;
    return svc.benefitsEn;
  };

  const getIndustries = (svc: DetailedService) => {
    if (language === 'km') return svc.industriesServedKm;
    if (language === 'zh') return svc.industriesServedZh;
    return svc.industriesServedEn;
  };

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-950 font-bold text-xs uppercase tracking-widest rounded-full border border-blue-200">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-900" />
            <span>Ministry of Interior Licensed Manned Security</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            {language === 'km' ? 'សេវាកម្មសន្តិសុខផ្លូវការទាំង ១៥ របស់ K.N.S.K' : language === 'zh' ? 'K.N.S.K 官方15项专业驻点安保服务' : 'Our 15 Professional Security Guarding Services'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {language === 'km'
              ? 'ជ្រើសរើសសេវាកម្មសន្តិសុខដែលសមស្របបំផុតសម្រាប់អាជីវកម្ម និងទីតាំងរបស់លោកអ្នក ជាមួយការប្រចាំការ ២៤ម៉ោង និងការទទួលខុសត្រូវខ្ពស់។'
              : language === 'zh'
              ? '选择最适合您企业与场地的专业安保服务，享有24/7全天候驻守、双语督导抽查及全额商业保险。'
              : 'Explore our specialized physical security solutions tailored to commercial, industrial, residential, and diplomatic properties across Cambodia.'}
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === 'km'
                    ? 'ស្វែងរកសេវាកម្ម (ឧ. រោងចក្រ, ធនាគារ)...'
                    : language === 'zh'
                    ? '搜索安保服务 (例如: 工厂, 银行)...'
                    : 'Search service (e.g. Factory, Bank)...'
                }
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-1 md:pb-0 scrollbar-none text-xs font-bold">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition border ${
                    activeCategory === cat.id
                      ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                      : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                  }`}
                >
                  {language === 'km' ? cat.nameKm : language === 'zh' ? cat.nameZh : cat.nameEn}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Cards Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200 space-y-3">
            <Filter className="w-8 h-8 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-800 font-serif">No security services match your filter</h3>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-blue-900 text-white font-bold text-xs uppercase tracking-wider rounded"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((svc) => (
              <div
                key={svc.id}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl hover:border-blue-500 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Service Card Image Banner */}
                  <div className="relative aspect-16/9 overflow-hidden bg-slate-900">
                    <img
                      src={svc.imageUrl}
                      alt={svc.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    {/* Badge Top Left */}
                    <span className="absolute top-3 left-3 bg-blue-950/90 text-blue-300 text-[10px] font-extrabold px-2.5 py-1 rounded border border-blue-800 uppercase tracking-wider backdrop-blur-xs shadow">
                      {svc.badge}
                    </span>

                    {/* 24 Hours Availability Badge Top Right */}
                    {svc.availability24h && (
                      <span className="absolute top-3 right-3 bg-emerald-950/90 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-800 uppercase tracking-wider flex items-center gap-1 shadow">
                        <Clock className="w-3 h-3 text-emerald-400" />
                        24/7 Available
                      </span>
                    )}

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white font-bold">
                      <span className="bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700">
                        {svc.guardCoverage}
                      </span>
                      <span className="text-amber-300 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700">
                        Response: {svc.responseTime}
                      </span>
                    </div>
                  </div>

                  {/* Service Card Body */}
                  <div className="p-5 space-y-3">
                    <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-900 transition-colors font-serif">
                      {getTitle(svc)}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {getDesc(svc)}
                    </p>

                    {/* Who Should Use Snippet */}
                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-[11px] space-y-1">
                      <div className="font-bold text-slate-700 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-blue-900" />
                        <span>Recommended Client:</span>
                      </div>
                      <p className="text-slate-600 line-clamp-2">{getWhoShouldUse(svc)}</p>
                    </div>

                    {/* Benefits Checklist */}
                    <div className="pt-2 space-y-1.5">
                      {getBenefits(svc).slice(0, 3).map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Industries Tag Badges */}
                    <div className="pt-2 flex flex-wrap gap-1 text-[10px] font-semibold text-slate-600">
                      {getIndustries(svc).map((ind, i) => (
                        <span key={i} className="bg-blue-50 text-blue-900 px-2 py-0.5 rounded border border-blue-100">
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedService(svc)}
                      className="text-xs font-bold text-blue-900 hover:text-blue-700 transition flex items-center gap-1 uppercase tracking-wider"
                    >
                      <span>Learn More</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('quotation')}
                      className="px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded shadow-xs transition flex items-center gap-1.5"
                    >
                      <span>Request Proposal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Comprehensive Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-900 rounded-xl border border-blue-700 text-white">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-950 text-blue-300 text-[10px] font-extrabold px-2 py-0.5 rounded border border-blue-800 uppercase">
                      {selectedService.badge}
                    </span>
                    <span className="text-emerald-400 text-[10px] font-bold">24/7 Service</span>
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-white font-serif">{getTitle(selectedService)}</h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 space-y-6 overflow-y-auto">
              {/* Image Banner */}
              <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden border border-slate-200">
                <img
                  src={selectedService.imageUrl}
                  alt={getTitle(selectedService)}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white font-bold">
                  <span>Coverage: {selectedService.guardCoverage}</span>
                  <span>Emergency Dispatch: {selectedService.responseTime}</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-extrabold text-blue-900 uppercase tracking-widest">Service Overview</h4>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">{getDesc(selectedService)}</p>
              </div>

              {/* Who Should Use */}
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl space-y-1">
                <h4 className="text-xs font-extrabold text-blue-950 uppercase tracking-wider flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-blue-900" /> Who Should Use This Service
                </h4>
                <p className="text-xs text-slate-800 font-medium">{getWhoShouldUse(selectedService)}</p>
              </div>

              {/* Main Responsibilities */}
              <div className="space-y-2">
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-widest">Main Operational Responsibilities</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {getResponsibilities(selectedService).map((resp, i) => (
                    <div key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-800">
                      <span className="w-4 h-4 rounded-full bg-blue-900 text-white text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-2">
                <h4 className="text-xs font-extrabold text-emerald-800 uppercase tracking-widest">Key Client Benefits</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {getBenefits(selectedService).map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2 bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-200 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industries Served */}
              <div className="space-y-2">
                <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-widest">Industries Served</h4>
                <div className="flex flex-wrap gap-2">
                  {getIndustries(selectedService).map((ind, i) => (
                    <span key={i} className="bg-slate-100 text-slate-800 text-xs font-bold px-3 py-1 rounded-md border border-slate-200">
                      ✓ {ind}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corporate Guarantee Box */}
              <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800 flex items-center gap-3">
                <FileText className="w-6 h-6 text-emerald-400 shrink-0" />
                <p className="text-xs text-slate-300 leading-relaxed">
                  Includes Ministry of Interior Police background checks, standardized post orders, and 24/7 supervisor inspection visits.
                </p>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-200 rounded transition"
              >
                Close Window
              </button>
              <button
                onClick={() => {
                  setSelectedService(null);
                  setActiveTab('quotation');
                }}
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-md transition flex items-center gap-2"
              >
                <span>Request Quotation for {getTitle(selectedService)}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
