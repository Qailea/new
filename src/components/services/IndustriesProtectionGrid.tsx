import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { INDUSTRIES_LIST, IndustryDetail } from '../../data/servicesData';
import {
  ShieldCheck,
  Building2,
  ArrowRight,
  X,
  CheckCircle2,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';

interface IndustriesProtectionGridProps {
  setActiveTab: (tab: string) => void;
}

export const IndustriesProtectionGrid: React.FC<IndustriesProtectionGridProps> = ({ setActiveTab }) => {
  const { language } = useLanguage();
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryDetail | null>(null);

  const getIndName = (ind: IndustryDetail) => {
    if (language === 'km') return ind.nameKm;
    if (language === 'zh') return ind.nameZh;
    return ind.nameEn;
  };

  const getIndDesc = (ind: IndustryDetail) => {
    if (language === 'km') return ind.descriptionKm;
    if (language === 'zh') return ind.descriptionZh;
    return ind.descriptionEn;
  };

  return (
    <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-950 text-blue-300 font-bold text-xs uppercase tracking-widest rounded-full border border-blue-800">
            <Building2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Sector Protection Expertise</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-serif">
            {language === 'km' ? 'ឧស្សាហកម្មទាំង ១៩ ដែលយើងខ្ញុំការពារ' : language === 'zh' ? 'K.N.S.K 守护的19大核心行业' : 'Protecting 19 Core Industries Across Cambodia'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            {language === 'km'
              ? 'ក្រុមហ៊ុន K.N.S.K រៀបចំដំណោះស្រាយសន្តិសុខសម្របតាមហានិភ័យ និងតម្រូវការជាក់ស្តែងនៃឧស្សាហកម្មនីមួយៗ។'
              : language === 'zh'
              ? '针对各行各业的特定安防痛点与风险漏洞，K.N.S.K 提供深度定制化的安保规程与防范力量。'
              : 'Every industry faces unique security vulnerabilities. K.N.S.K designs tailored guard protocols for every sector.'}
          </p>
        </div>

        {/* 19 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {INDUSTRIES_LIST.map((ind) => (
            <div
              key={ind.id}
              onClick={() => setSelectedIndustry(ind)}
              className="p-5 bg-slate-950/80 rounded-xl border border-slate-800 hover:border-blue-500 hover:bg-slate-950 transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 group shadow-xs"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="p-2 bg-slate-900 rounded-lg text-blue-400 border border-slate-800 group-hover:bg-blue-900 group-hover:text-white transition">
                    <Building2 className="w-4 h-4" />
                  </span>
                  <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">
                    {ind.recommendedServices.length} Services
                  </span>
                </div>

                <h3 className="font-bold text-sm text-white group-hover:text-blue-400 transition font-serif">
                  {getIndName(ind)}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{getIndDesc(ind)}</p>
              </div>

              <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-[11px] font-bold text-blue-400 group-hover:translate-x-1 transition-transform">
                <span>View Security Strategy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industry Strategy Modal */}
      {selectedIndustry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 text-white rounded-2xl max-w-2xl w-full overflow-hidden border border-slate-800 shadow-2xl space-y-6 p-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-900 rounded-xl border border-blue-700 text-white">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-400">Industry Security Strategy</span>
                  <h3 className="font-bold text-lg sm:text-xl text-white font-serif">{getIndName(selectedIndustry)}</h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedIndustry(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">{getIndDesc(selectedIndustry)}</p>

            {/* Key Risks vs KNSK Solutions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <h4 className="font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5" /> Key Industry Risks
                </h4>
                <ul className="space-y-1 text-slate-300">
                  {selectedIndustry.keyRisksEn.map((risk, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <h4 className="font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1">
                  <Lightbulb className="w-3.5 h-3.5" /> K.N.S.K Protection Protocol
                </h4>
                <ul className="space-y-1 text-slate-300">
                  {selectedIndustry.knskSolutionEn.map((sol, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-2 flex justify-between items-center border-t border-slate-800">
              <button
                onClick={() => setSelectedIndustry(null)}
                className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-white transition"
              >
                Close Strategy
              </button>
              <button
                onClick={() => {
                  setSelectedIndustry(null);
                  setActiveTab('quotation');
                }}
                className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow transition flex items-center gap-2"
              >
                <span>Get Quotation for {getIndName(selectedIndustry)}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
