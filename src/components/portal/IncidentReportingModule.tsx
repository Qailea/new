import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { IncidentReportItem } from './PortalTypes';
import {
  AlertTriangle,
  Plus,
  ShieldAlert,
  Camera,
  UploadCloud,
  CheckCircle2,
  Clock,
  X,
  FileText,
  Paperclip,
  Check
} from 'lucide-react';

export const IncidentReportingModule: React.FC = () => {
  const { getT } = useLanguage();

  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [reportType, setReportType] = useState<IncidentReportItem['type']>('security_incident');
  const [reportTitle, setReportTitle] = useState('');
  const [locationText, setLocationText] = useState('Main Bank Lobby Glass Entrance');
  const [descriptionText, setDescriptionText] = useState('');
  const [severityLevel, setSeverityLevel] = useState<IncidentReportItem['severity']>('MEDIUM');
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Mock Incidents
  const [incidents, setIncidents] = useState<IncidentReportItem[]>([
    {
      id: 'INC-2026-001',
      refNumber: 'KNSK-INC-8810',
      type: 'security_incident',
      title: {
        en: 'Suspicious Vehicle Parked in Cash Vault Alleyway',
        km: 'រថយន្តសង្ស័យចតនៅច្រកផ្លូវទូដែក',
        zh: '现金金库后巷发现可疑车辆停放'
      },
      location: { en: 'Basement B1 Loading Alley', km: 'ច្រកផ្លូវទំនិញ ជាន់ B1', zh: 'B1层卸货后巷' },
      dateReported: 'August 02, 2026',
      timeReported: '22:45 PM',
      severity: 'HIGH',
      status: 'RESOLVED',
      description: {
        en: 'Unregistered pickup truck with tinted windows parked near cash loading door. Guard Chief verified driver ID and escorted vehicle out.',
        km: 'រថយន្តភីកអាប់គ្មានការចុះឈ្មោះ បានចតនៅជិតទ្វារដឹកប្រាក់។ មេបញ្ជាការបានពិនិត្យអត្តសញ្ញាណប័ណ្ណ និងជូនដំណើរចេញ។',
        zh: '未登记的黑膜皮卡车在现金解缴门旁停靠。队长到场核查驾驶员身份证件并离场押送。'
      },
      actionsTaken: {
        en: 'Area swept by 4x4 patrol unit. CCTV footage archived for 90 days.',
        km: 'ពិនិត្យតំបន់ដោយរថយន្តល្បាត 4x4។ រក្សារូបភាព CCTV រយៈពេល ៩០ថ្ងៃ។',
        zh: '巡逻车组完成区域清查。CCTV监控录像已归档保存90天。'
      },
      hasPhotos: true,
      photoCount: 3
    },
    {
      id: 'INC-2026-002',
      refNumber: 'KNSK-INC-8805',
      type: 'safety_concern',
      title: {
        en: 'Broken Safety Glass Barrier at Escalator #2',
        km: 'កញ្ចក់ជណ្តើរយន្តលេខ២ មានការប្រេះស្រាំ',
        zh: '2号手扶电梯安全玻璃护栏破损'
      },
      location: { en: 'Level 2 Retail Atrium', km: 'ជាន់ទី២ ផ្សារទំនើប', zh: '2楼商场中庭' },
      dateReported: 'July 25, 2026',
      timeReported: '14:10 PM',
      severity: 'LOW',
      status: 'CLOSED',
      description: {
        en: 'Accidental impact by contractor ladder caused hairline crack in glass.',
        km: 'ការប៉ះទង្គិចដោយអចេតនាពីជណ្តើរអ្នកម៉ៅការ បណ្តាលឱ្យមានការប្រេះ។',
        zh: '施工方梯子不慎碰撞导致玻璃微裂。'
      },
      actionsTaken: {
        en: 'Guards cordoned off area with warning tape within 3 minutes; maintenance team replaced pane.',
        km: 'សន្តិសុខបានដាក់ខ្សែព្រមានការពារក្នុងរយៈពេល ៣នាទី; ក្រុមបច្ចេកទេសបានផ្លាស់ប្តូរកញ្ចក់ថ្មី។',
        zh: '安保人员于3分钟内拉设警示带隔离，维修队完成更换。'
      },
      hasPhotos: true,
      photoCount: 2
    }
  ]);

  const handleSimulatePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const urls = Array.from(e.target.files).map((file: File) => URL.createObjectURL(file));
      setUploadedPhotos((prev) => [...prev, ...urls]);
    }
  };

  const handleCreateReport = (e: React.FormEvent) => {
    e.preventDefault();
    const newInc: IncidentReportItem = {
      id: `INC-2026-00${incidents.length + 1}`,
      refNumber: `KNSK-INC-${Math.floor(10000 + Math.random() * 90000)}`,
      type: reportType,
      title: {
        en: reportTitle || 'Security Notice',
        km: reportTitle || 'របាយការណ៍សន្តិសុខ',
        zh: reportTitle || '突发事件报告'
      },
      location: { en: locationText, km: locationText, zh: locationText },
      dateReported: 'August 05, 2026',
      timeReported: 'Current Time',
      severity: severityLevel,
      status: 'OPEN',
      description: { en: descriptionText, km: descriptionText, zh: descriptionText },
      hasPhotos: uploadedPhotos.length > 0,
      photoCount: uploadedPhotos.length
    };

    setIncidents([newInc, ...incidents]);
    setSubmittedSuccess(true);
  };

  const getSeverityBadge = (s: IncidentReportItem['severity']) => {
    switch (s) {
      case 'CRITICAL':
      case 'HIGH':
        return (
          <span className="text-[10px] font-mono font-bold bg-red-100 text-red-800 border border-red-300 px-2 py-0.5 rounded">
            HIGH SEVERITY
          </span>
        );
      case 'MEDIUM':
        return (
          <span className="text-[10px] font-mono font-bold bg-amber-100 text-amber-800 border border-amber-300 px-2 py-0.5 rounded">
            MEDIUM SEVERITY
          </span>
        );
      case 'LOW':
        return (
          <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-700 border border-slate-300 px-2 py-0.5 rounded">
            LOW SEVERITY
          </span>
        );
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold text-amber-900 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded uppercase">
              Secure Incident Audit Log
            </span>
            <span className="text-[10px] font-mono text-slate-500 font-bold">Audited by MOI</span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 font-serif">
            {getT('Incident Reporting & Safety Audit', 'ការរាយការណ៍ឧបទ្ទវហេតុ និងសវនកម្មសុវត្ថិភាព', '突发事件上报与安全审计')}
          </h2>
          <p className="text-xs text-slate-500">
            {getT(
              'Report security incidents, safety risks, or officer feedback directly to K.N.S.K Command Room.',
              'រាយការណ៍ឧបទ្ទវហេតុសន្តិសុខ ហានិភ័យសុវត្ថិភាព ឬការផ្តល់មតិយោបល់ទៅកាន់បន្ទប់បញ្ជាការ។',
              '向K.N.S.K指挥控制室直接上报安保事件、安全隐患或服务建议。'
            )}
          </p>
        </div>

        <button
          onClick={() => {
            setUploadedPhotos([]);
            setSubmittedSuccess(false);
            setReportModalOpen(true);
          }}
          className="px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-red-950/20 flex items-center gap-2 transition"
        >
          <AlertTriangle className="w-4 h-4" />
          <span>{getT('Report Incident', 'រាយការណ៍ឧបទ្ទវហេតុ', '上报突发事件')}</span>
        </button>
      </div>

      {/* Incidents List */}
      <div className="space-y-4">
        {incidents.map((inc) => {
          const title = getT(inc.title.en, inc.title.km, inc.title.zh);
          const loc = getT(inc.location.en, inc.location.km, inc.location.zh);
          const desc = getT(inc.description.en, inc.description.km, inc.description.zh);
          const actions = inc.actionsTaken ? getT(inc.actionsTaken.en, inc.actionsTaken.km, inc.actionsTaken.zh) : null;

          return (
            <div
              key={inc.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold text-red-600 bg-red-50 px-2.5 py-0.5 rounded border border-red-200">
                    {inc.refNumber}
                  </span>
                  <span className="text-[10px] font-mono uppercase font-bold bg-slate-100 px-2 py-0.5 rounded text-slate-700">
                    {inc.type.replace('_', ' ')}
                  </span>
                  {getSeverityBadge(inc.severity)}
                </div>

                <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full ${
                  inc.status === 'RESOLVED' || inc.status === 'CLOSED'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-amber-100 text-amber-800'
                }`}>
                  STATUS: {inc.status}
                </span>
              </div>

              <div>
                <h3 className="font-extrabold text-base text-slate-900 font-serif">{title}</h3>
                <p className="text-xs text-slate-500 font-mono mt-0.5">Location: {loc} • Reported {inc.dateReported} at {inc.timeReported}</p>
                <p className="text-xs text-slate-700 mt-2 bg-slate-50 p-3.5 rounded-xl border border-slate-100 leading-relaxed">
                  {desc}
                </p>
              </div>

              {actions && (
                <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl text-xs text-emerald-900 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Command Response & Resolution:</span>
                    <span>{actions}</span>
                  </div>
                </div>
              )}

              {inc.hasPhotos && (
                <div className="flex items-center gap-2 text-xs font-mono text-blue-900 font-bold pt-1">
                  <Camera className="w-4 h-4" />
                  <span>{inc.photoCount || 1} Photographic Artifacts Uploaded to Secure Cloud</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* New Report Modal */}
      {reportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5 my-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-extrabold text-base text-slate-900 font-serif flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-red-600" />
                {getT('Security Incident Report', 'ពាក្យបណ្តឹង / របាយការណ៍សន្តិសុខ', '安全突发事件上报')}
              </h3>
              <button
                onClick={() => setReportModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!submittedSuccess ? (
              <form onSubmit={handleCreateReport} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-800 mb-1">Report Category *</label>
                    <select
                      value={reportType}
                      onChange={(e) => setReportType(e.target.value as any)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-bold text-slate-900"
                    >
                      <option value="security_incident">Security Incident</option>
                      <option value="emergency">Emergency / Intrusion</option>
                      <option value="safety_concern">Safety Concern</option>
                      <option value="complaint">Service Complaint</option>
                      <option value="suggestion">Improvement Suggestion</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-800 mb-1">Severity Level</label>
                    <select
                      value={severityLevel}
                      onChange={(e) => setSeverityLevel(e.target.value as any)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-bold text-slate-900"
                    >
                      <option value="LOW">LOW - Minor / Informational</option>
                      <option value="MEDIUM">MEDIUM - Standard Concern</option>
                      <option value="HIGH">HIGH - Priority Action</option>
                      <option value="CRITICAL">CRITICAL - Immediate Threat</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">Incident Headline / Title *</label>
                  <input
                    type="text"
                    required
                    value={reportTitle}
                    onChange={(e) => setReportTitle(e.target.value)}
                    placeholder="e.g. Unattended Package Found near Elevator B"
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl font-bold text-slate-900"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">Specific Facility Location *</label>
                  <input
                    type="text"
                    required
                    value={locationText}
                    onChange={(e) => setLocationText(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl font-bold text-slate-900"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">Detailed Description & Observations *</label>
                  <textarea
                    rows={3}
                    required
                    value={descriptionText}
                    onChange={(e) => setDescriptionText(e.target.value)}
                    placeholder="Describe what occurred, people involved, time frame..."
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-slate-900"
                  ></textarea>
                </div>

                {/* Photo Upload Area */}
                <div>
                  <label className="block font-bold text-slate-800 mb-1">Upload Photo Evidence (Optional)</label>
                  <div className="border-2 border-dashed border-slate-300 hover:border-blue-900 rounded-2xl p-4 text-center cursor-pointer transition bg-slate-50 relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleSimulatePhotoUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-1" />
                    <span className="text-xs font-bold text-blue-900 block">Click or Drag Photos Here</span>
                    <span className="text-[10px] text-slate-500">JPG, PNG up to 10MB per file</span>
                  </div>

                  {uploadedPhotos.length > 0 && (
                    <div className="flex gap-2 mt-2">
                      {uploadedPhotos.map((url, i) => (
                        <div key={i} className="w-12 h-12 rounded-lg border border-slate-300 overflow-hidden relative">
                          <img src={url} alt="Evidence" className="w-full h-full object-cover" />
                          <span className="absolute bottom-0 right-0 bg-emerald-600 text-white text-[8px] p-0.5">✓</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setReportModalOpen(false)}
                    className="flex-1 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-red-600 text-white font-extrabold rounded-xl hover:bg-red-700 shadow"
                  >
                    Dispatch Incident Report
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-6 text-center space-y-4 text-xs">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-extrabold text-slate-900 text-base">Incident Report Logged in Command Registry</h4>
                <p className="text-slate-600">
                  Ref <code className="bg-slate-100 px-1.5 py-0.5 rounded font-bold text-blue-900">{incidents[0]?.refNumber}</code> has been assigned to Site Supervisor Commander Sok Vanna for immediate inspection.
                </p>
                <button
                  onClick={() => setReportModalOpen(false)}
                  className="px-6 py-2.5 bg-blue-900 text-white font-bold rounded-xl"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
