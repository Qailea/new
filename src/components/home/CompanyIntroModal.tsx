import React from 'react';
import { X, ShieldCheck, Award, FileCheck, PhoneCall, Building2, CheckCircle2, Play } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import knskLogoImg from '../../assets/images/KNSK_Logo.jpg';
import knskTeamImg from '../../assets/images/KNSK_Team.jpg';

interface CompanyIntroModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateQuote: () => void;
}

export const CompanyIntroModal: React.FC<CompanyIntroModalProps> = ({
  isOpen,
  onClose,
  onNavigateQuote,
}) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col">
        {/* Modal Header */}
        <div className="bg-blue-950 text-white p-5 flex items-center justify-between border-b border-blue-900 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-blue-400 bg-white shrink-0">
              <img
                src={knskLogoImg}
                alt="K.N.S.K Security Official Company Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white leading-tight">
                K.N.S.K Security Co., Ltd. — Corporate Operations Overview
              </h2>
              <p className="text-xs text-blue-300 font-medium">
                Established 2015 • Ministry of Interior License #KNSK-SEC-2015-089
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-blue-900 hover:bg-red-600 text-slate-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Corporate Profile Feature Banner */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-800 group shadow-lg">
            <img
              src={knskTeamImg}
              alt="K.N.S.K Security Team Personnel"
              className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col items-center justify-end p-6 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-slate-900/90 px-3.5 py-1 rounded-full border border-emerald-500/40 mb-2 shadow">
                Official Corporate Profile
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white max-w-xl">
                Nationwide Private Security Operations & Tactical Readiness
              </h3>
              <p className="text-xs text-slate-300 max-w-lg mt-1">
                Field personnel undergoing National Police background verification, emergency response drills, and guard deployment across 25 provinces.
              </p>
            </div>
          </div>

          {/* Core Credentials Breakdown Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                MOI License Verified
              </div>
              <p className="text-xs text-slate-600">
                Fully registered with the Cambodian Ministry of Interior and National Police Commissioner.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                <Award className="w-4 h-4 text-blue-600" />
                Vetted Guard Personnel
              </div>
              <p className="text-xs text-slate-600">
                Rigorous police background checks, discipline, and professional training in security guarding.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                <Building2 className="w-4 h-4 text-red-600" />
                25 Provinces Coverage
              </div>
              <p className="text-xs text-slate-600">
                Sub-stations and rapid response patrol vehicles active in Phnom Penh and all 24 provinces.
              </p>
            </div>
          </div>

          {/* Key Facts List */}
          <div className="space-y-3 pt-2 border-t border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">
              Key Operational Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Background checks & criminal record clearance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>24/7 Central Command Center radio dispatching</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>First Aid & Firefighting certified security officers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>NSSF worker social security & healthcare registration</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 rounded-b-xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <PhoneCall className="w-4 h-4 text-red-600" />
            <span>Emergency Hotline: <strong className="text-red-600">096 483 8666 / 093 878 666 / 060 878 666</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-200 rounded-lg transition"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onNavigateQuote();
              }}
              className="px-5 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow transition"
            >
              {t('btn_request_quote')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
