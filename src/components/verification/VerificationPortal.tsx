import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { companyLicenseDetails, verifiedGuardsDatabase } from '../../data/companyData';
import { GuardVerificationResult } from '../../types';
import {
  FileCheck,
  ShieldCheck,
  UserCheck,
  Search,
  CheckCircle2,
  AlertCircle,
  Building,
  Award,
  Lock,
  Printer,
  QrCode
} from 'lucide-react';

export const VerificationPortal: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'company' | 'guard'>('company');

  // License Search State
  const [licenseQuery, setLicenseQuery] = useState('KNSK-SEC-2015-089');
  const [licenseVerified, setLicenseVerified] = useState(true);

  // Guard Search State
  const [guardQuery, setGuardQuery] = useState('KNSK-G-9942');
  const [guardResult, setGuardResult] = useState<GuardVerificationResult | null>(
    verifiedGuardsDatabase['KNSK-G-9942']
  );
  const [guardError, setGuardError] = useState(false);

  const handleVerifyLicense = (e: React.FormEvent) => {
    e.preventDefault();
    if (licenseQuery.trim().toUpperCase().includes('KNSK')) {
      setLicenseVerified(true);
    } else {
      setLicenseVerified(false);
    }
  };

  const handleVerifyGuard = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = guardQuery.trim().toUpperCase();
    if (verifiedGuardsDatabase[cleanId]) {
      setGuardResult(verifiedGuardsDatabase[cleanId]);
      setGuardError(false);
    } else {
      setGuardResult(null);
      setGuardError(true);
    }
  };

  return (
    <div className="py-12 bg-slate-100 min-h-[80vh]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Title */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-900 space-y-3 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950 text-emerald-400 border border-emerald-700 rounded-full text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" /> Official Government & Client Verification System
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-serif">
            {t('verify_title')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t('verify_subtitle')}
          </p>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex rounded-2xl bg-white p-1.5 border border-slate-200 shadow-sm max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('company')}
            className={`flex-1 py-3 px-4 text-xs font-bold rounded-xl transition flex items-center justify-center gap-2 ${
              activeTab === 'company'
                ? 'bg-blue-900 text-white shadow'
                : 'text-slate-600 hover:text-blue-900'
            }`}
          >
            <Building className="w-4 h-4" />
            {t('verify_tab_company')}
          </button>
          <button
            onClick={() => setActiveTab('guard')}
            className={`flex-1 py-3 px-4 text-xs font-bold rounded-xl transition flex items-center justify-center gap-2 ${
              activeTab === 'guard'
                ? 'bg-blue-900 text-white shadow'
                : 'text-slate-600 hover:text-blue-900'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            {t('verify_tab_guard')}
          </button>
        </div>

        {/* Tab 1: Company License Verification */}
        {activeTab === 'company' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
            <form onSubmit={handleVerifyLicense} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={licenseQuery}
                  onChange={(e) => setLicenseQuery(e.target.value)}
                  placeholder={t('verify_input_company')}
                  className="w-full pl-11 pr-4 py-3 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow transition"
              >
                {t('verify_btn')}
              </button>
            </form>

            {licenseVerified ? (
              <div className="border-2 border-emerald-500 rounded-2xl bg-emerald-50/50 p-6 sm:p-8 space-y-6 relative overflow-hidden">
                {/* Status Stamp */}
                <div className="flex items-center justify-between border-b border-emerald-200 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-emerald-600 text-white rounded-xl shadow-md">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Authentication Result</span>
                      <h3 className="text-lg font-extrabold text-emerald-950 font-serif">OFFICIALLY REGISTERED & VALID</h3>
                    </div>
                  </div>
                  <button
                    onClick={() => window.print()}
                    className="p-2 text-xs font-bold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 flex items-center gap-1"
                  >
                    <Printer className="w-4 h-4" /> Print Cert
                  </button>
                </div>

                {/* Company License Specs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="bg-white p-3.5 rounded-xl border border-emerald-200 space-y-1">
                    <span className="text-slate-500 font-semibold">Registered Company Name:</span>
                    <p className="font-extrabold text-slate-900 text-sm">{companyLicenseDetails.legalRepresentative}</p>
                    <p className="text-slate-600">K.N.S.K Security Co., Ltd.</p>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-emerald-200 space-y-1">
                    <span className="text-slate-500 font-semibold">Ministry Operating License #:</span>
                    <p className="font-extrabold text-emerald-700 text-sm font-mono">{companyLicenseDetails.licenseNumber}</p>
                    <p className="text-slate-600">{companyLicenseDetails.issuingMinistry}</p>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-emerald-200 space-y-1">
                    <span className="text-slate-500 font-semibold">Issuing Authority:</span>
                    <p className="font-bold text-slate-800">{companyLicenseDetails.issuingBody}</p>
                    <p className="text-slate-600">General Commissariat of National Police</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                  <strong className="text-slate-900">Legal Statement:</strong>
                  <p>{t('verify_legal_note')}</p>
                </div>
              </div>
            ) : (
              <div className="p-6 bg-red-50 border border-red-200 rounded-2xl text-center text-red-800 space-y-2">
                <AlertCircle className="w-8 h-8 text-red-600 mx-auto" />
                <h4 className="font-bold">License Record Not Found</h4>
                <p className="text-xs">Please verify the license number format (e.g., KNSK-SEC-2015-089) or contact Headquarters at 096 483 8666.</p>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Security Guard Badge Verification */}
        {activeTab === 'guard' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 bg-blue-50 p-3 rounded-xl border border-blue-200 text-xs text-blue-900">
              <span className="font-bold">Try Sample Guard IDs:</span>
              <div className="flex flex-wrap gap-2">
                {['KNSK-G-9942', 'KNSK-G-1024', 'KNSK-G-5510', 'KNSK-G-8812'].map((id) => (
                  <button
                    key={id}
                    onClick={() => {
                      setGuardQuery(id);
                      setGuardResult(verifiedGuardsDatabase[id]);
                      setGuardError(false);
                    }}
                    className="px-2.5 py-1 bg-white hover:bg-blue-900 hover:text-white rounded border border-blue-300 font-mono font-bold transition"
                  >
                    {id}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleVerifyGuard} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={guardQuery}
                  onChange={(e) => setGuardQuery(e.target.value)}
                  placeholder={t('verify_input_guard')}
                  className="w-full pl-11 pr-4 py-3 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow transition"
              >
                {t('verify_btn')}
              </button>
            </form>

            {guardResult ? (
              <div className="border-2 border-blue-900 rounded-2xl bg-slate-900 text-white p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  {/* Guard Officer Photo */}
                  <div className="relative w-28 h-36 bg-slate-800 rounded-xl overflow-hidden border-2 border-emerald-400 shadow-lg flex items-center justify-center">
                    <img
                      src={guardResult.photoUrl}
                      alt={guardResult.fullName}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <span className="absolute -bottom-2 -right-2 bg-emerald-500 text-slate-950 font-extrabold text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider shadow">
                      VERIFIED
                    </span>
                  </div>

                  {/* Guard Specs */}
                  <div className="flex-1 space-y-3 text-center sm:text-left">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <span className="bg-emerald-950 text-emerald-400 border border-emerald-700 px-2.5 py-0.5 rounded text-xs font-bold font-mono">
                        ID: {guardResult.guardId}
                      </span>
                      <span className="bg-blue-950 text-blue-300 border border-blue-800 px-2.5 py-0.5 rounded text-xs font-semibold">
                        Badge: {guardResult.badgeNumber}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-white font-serif">{guardResult.fullName}</h3>
                    <p className="text-xs text-blue-300 font-semibold">{guardResult.rank}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-800">
                      <div>
                        <span className="text-slate-400">Assigned Facility:</span>
                        <p className="font-bold text-slate-200">{guardResult.assignedSite}</p>
                      </div>
                      <div>
                        <span className="text-slate-400">Province:</span>
                        <p className="font-bold text-slate-200">{guardResult.province}</p>
                      </div>
                      <div>
                        <span className="text-slate-400">Clearance Grade:</span>
                        <p className="font-bold text-emerald-400">{guardResult.clearanceLevel}</p>
                      </div>
                      <div>
                        <span className="text-slate-400">Card Validity:</span>
                        <p className="font-bold text-blue-300">{guardResult.expiryDate}</p>
                      </div>
                    </div>
                  </div>

                  {/* QR Stamp */}
                  <div className="p-3 bg-white rounded-xl flex flex-col items-center justify-center text-slate-900 text-[10px] font-bold gap-1 shrink-0">
                    <QrCode className="w-16 h-16 text-slate-900" />
                    <span>KNSK AUTH STAMP</span>
                  </div>
                </div>
              </div>
            ) : guardError ? (
              <div className="p-6 bg-red-50 border border-red-200 rounded-2xl text-center text-red-800 space-y-2">
                <AlertCircle className="w-8 h-8 text-red-600 mx-auto" />
                <h4 className="font-bold">Guard ID Not Found</h4>
                <p className="text-xs">Try sample IDs above or contact K.N.S.K Personnel Records Division.</p>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};
