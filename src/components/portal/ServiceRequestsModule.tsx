import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ServiceRequestItem } from './PortalTypes';
import {
  PlusCircle,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Users,
  ShieldCheck,
  ChevronRight,
  Send,
  X,
  FileCheck,
  Zap,
  Filter
} from 'lucide-react';

export const ServiceRequestsModule: React.FC = () => {
  const { getT } = useLanguage();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ServiceRequestItem['category']>('additional_guards');
  const [requestTitle, setRequestTitle] = useState('');
  const [requestDetails, setRequestDetails] = useState('');
  const [guardsCount, setGuardsCount] = useState(2);
  const [priorityLevel, setPriorityLevel] = useState<ServiceRequestItem['priority']>('NORMAL');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Mock Service Requests Data
  const [requests, setRequests] = useState<ServiceRequestItem[]>([
    {
      id: 'REQ-001',
      refNumber: 'KNSK-SR-9910',
      category: 'additional_guards',
      title: {
        en: 'Request 2 Extra Night Guards for Vault Renovation',
        km: 'ស្នើសុំសន្តិសុខយាមយប់បន្ថែម ២នាក់ សម្រាប់ការជួសជុលទូដែក',
        zh: '申请增派2名夜间安保人员用于金库翻修'
      },
      details: {
        en: 'Construction contractors on site between 20:00 PM - 04:00 AM required dedicated escort officers.',
        km: 'ក្រុមការងារសាងសង់ធ្វើការចន្លោះម៉ោង ៨:០០ យប់ ដល់ ៤:០០ ព្រឹក តម្រូវឱ្យមានសន្តិសុខអមដំណើរ។',
        zh: '施工团队于晚间20:00至凌晨04:00进场，需配专职陪同队员。'
      },
      guardsRequested: 2,
      requestedDate: 'August 03, 2026',
      priority: 'HIGH',
      status: 'DISPATCHED',
      assignedCommander: 'Commander Sok Vanna'
    },
    {
      id: 'REQ-002',
      refNumber: 'KNSK-SR-9908',
      category: 'uniform_equipment',
      title: {
        en: 'Request 2 Metal Detector Scan Wands & 4 Walkie-Talkies',
        km: 'ស្នើសុំម៉ាស៊ីនស្កែនលោហៈ ២គ្រឿង និងអាយឌី ៤គ្រឿង',
        zh: '申请申领2台手持金属探测器及4台对讲机'
      },
      details: {
        en: 'Equipping basement B2 entrance with digital entry inspection tools.',
        km: 'បំពាក់ឧបករណ៍ត្រួតពិនិត្យផ្លូវចូលជាន់ក្រោមដី B2។',
        zh: '为B2地下停车场入口配置数字化安检设备。'
      },
      guardsRequested: 0,
      requestedDate: 'July 29, 2026',
      priority: 'NORMAL',
      status: 'COMPLETED',
      assignedCommander: 'Quartermaster Heng'
    },
    {
      id: 'REQ-003',
      refNumber: 'KNSK-SR-9905',
      category: 'guard_replacement',
      title: {
        en: 'Medical Leave Guard Swap for Front Gate Station',
        km: 'ការផ្លាស់ប្តូរបុគ្គលិកសន្តិសុខជំនួសដោយសារជំងឺ',
        zh: '前门岗位队员因病调换申请'
      },
      details: {
        en: 'Officer Keo Sophea scheduled for knee treatment; replacement required for 3 days.',
        km: 'មន្ត្រី កែវ សុភា សម្រាកព្យាបាលជំងឺ តម្រូវឱ្យមានអ្នកជំនួសរយៈពេល ៣ថ្ងៃ។',
        zh: '队员Keo Sophea因病请假3天，需派遣对等资历队员替换。'
      },
      guardsRequested: 1,
      requestedDate: 'July 20, 2026',
      priority: 'HIGH',
      status: 'COMPLETED',
      assignedCommander: 'Commander Sok Vanna'
    }
  ]);

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    const newReq: ServiceRequestItem = {
      id: `REQ-00${requests.length + 1}`,
      refNumber: `KNSK-SR-${Math.floor(10000 + Math.random() * 90000)}`,
      category: selectedCategory,
      title: {
        en: requestTitle || 'Custom Service Request',
        km: requestTitle || 'ពាក្យស្នើសុំសេវាកម្ម',
        zh: requestTitle || '服务需求申请'
      },
      details: {
        en: requestDetails,
        km: requestDetails,
        zh: requestDetails
      },
      guardsRequested: guardsCount,
      requestedDate: 'August 05, 2026',
      priority: priorityLevel,
      status: 'PENDING',
      assignedCommander: 'General Command Center Dispatch'
    };

    setRequests([newReq, ...requests]);
    setSubmittedSuccess(true);
  };

  const categories = [
    { id: 'additional_guards', label: 'Additional Guards' },
    { id: 'temp_guards', label: 'Temporary Guards' },
    { id: 'shift_change', label: 'Shift Changes' },
    { id: 'special_event', label: 'Special Events' },
    { id: 'emergency_deployment', label: 'Emergency Deployment' },
    { id: 'guard_replacement', label: 'Guard Replacement' },
    { id: 'uniform_equipment', label: 'Uniform & Equipment' },
  ] as const;

  const getPriorityBadge = (p: ServiceRequestItem['priority']) => {
    switch (p) {
      case 'URGENT_EMERGENCY':
        return (
          <span className="text-[10px] font-mono font-bold bg-red-100 text-red-800 border border-red-300 px-2 py-0.5 rounded flex items-center gap-1">
            <Zap className="w-3 h-3 text-red-600 fill-current" /> URGENT
          </span>
        );
      case 'HIGH':
        return (
          <span className="text-[10px] font-mono font-bold bg-amber-100 text-amber-800 border border-amber-300 px-2 py-0.5 rounded">
            HIGH
          </span>
        );
      case 'NORMAL':
        return (
          <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-700 border border-slate-300 px-2 py-0.5 rounded">
            NORMAL
          </span>
        );
    }
  };

  const getStatusBadge = (s: ServiceRequestItem['status']) => {
    switch (s) {
      case 'DISPATCHED':
      case 'IN_PROGRESS':
        return (
          <span className="text-[10px] font-mono font-bold bg-blue-100 text-blue-900 border border-blue-300 px-2.5 py-0.5 rounded-full flex items-center gap-1">
            <Clock className="w-3 h-3 text-blue-900" /> DISPATCHED
          </span>
        );
      case 'COMPLETED':
        return (
          <span className="text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 px-2.5 py-0.5 rounded-full flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> COMPLETED
          </span>
        );
      case 'PENDING':
        return (
          <span className="text-[10px] font-mono font-bold bg-amber-100 text-amber-800 border border-amber-300 px-2.5 py-0.5 rounded-full">
            PENDING
          </span>
        );
      case 'CANCELLED':
        return (
          <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-600 border border-slate-300 px-2.5 py-0.5 rounded-full">
            CANCELLED
          </span>
        );
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded uppercase">
              Field Dispatch Requests
            </span>
            <span className="text-[10px] font-mono text-slate-500 font-bold">15-Min SLA</span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 font-serif">
            {getT('Security Service Request Portal', 'វិបផតថលស្នើសុំសេវាកម្មសន្តិសុខបន្ថែម', '安保服务与特派需求中心')}
          </h2>
          <p className="text-xs text-slate-500">
            {getT(
              'Submit deployment requests for extra guards, shift adjustments, special event crowd control, or equipment.',
              'ដាក់ពាក្យស្នើសុំបន្ថែមភ្នាក់ងារសន្តិសុខ ផ្លាស់ប្តូរវេន ការពារកម្មវិធី និងឧបករណ៍សន្តិសុខ។',
              '提交增派人员、调整班次、大型活动临时安保或设备调拨申请。'
            )}
          </p>
        </div>

        <button
          onClick={() => {
            setSubmittedSuccess(false);
            setModalOpen(true);
          }}
          className="px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-red-950/20 flex items-center gap-2 transition"
        >
          <PlusCircle className="w-4 h-4" />
          <span>{getT('New Service Request', 'បង្កើតពាក្យស្នើសុំថ្មី', '提交新申请')}</span>
        </button>
      </div>

      {/* Requests Table / Cards */}
      <div className="space-y-4">
        {requests.map((req) => {
          const title = getT(req.title.en, req.title.km, req.title.zh);
          const details = getT(req.details.en, req.details.km, req.details.zh);

          return (
            <div
              key={req.id}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:border-blue-300 transition space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                    {req.refNumber}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-slate-500 font-bold bg-slate-100 px-2 py-0.5 rounded">
                    {req.category.replace('_', ' ')}
                  </span>
                  {getPriorityBadge(req.priority)}
                </div>

                {getStatusBadge(req.status)}
              </div>

              <div>
                <h3 className="font-extrabold text-base text-slate-900 font-serif">{title}</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{details}</p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 font-mono">
                <div className="flex items-center gap-4">
                  <span>Guards: <strong className="text-slate-900">{req.guardsRequested}</strong></span>
                  <span>Date: {req.requestedDate}</span>
                </div>
                <div>Assigned: <strong className="text-blue-900">{req.assignedCommander}</strong></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Create Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-extrabold text-base text-slate-900 font-serif">
                {getT('Submit Field Service Request', 'ដាក់ពាក្យស្នើសុំសេវាកម្ម', '提交安保派遣申请')}
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!submittedSuccess ? (
              <form onSubmit={handleSubmitRequest} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">Request Category *</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-bold text-slate-900"
                  >
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">Request Subject / Summary *</label>
                  <input
                    type="text"
                    required
                    value={requestTitle}
                    onChange={(e) => setRequestTitle(e.target.value)}
                    placeholder="e.g. Request 2 Extra Guards for AGM Shareholders Event"
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl font-bold text-slate-900"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-800 mb-1">Number of Personnel</label>
                    <input
                      type="number"
                      min={0}
                      max={50}
                      value={guardsCount}
                      onChange={(e) => setGuardsCount(parseInt(e.target.value))}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl font-mono font-bold text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-800 mb-1">Priority Level</label>
                    <select
                      value={priorityLevel}
                      onChange={(e) => setPriorityLevel(e.target.value as any)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-bold text-slate-900"
                    >
                      <option value="NORMAL">NORMAL (24h Dispatch)</option>
                      <option value="HIGH">HIGH (4h Dispatch)</option>
                      <option value="URGENT_EMERGENCY">URGENT EMERGENCY (15 Min Dispatch)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">Detailed Operational Instructions</label>
                  <textarea
                    rows={3}
                    required
                    value={requestDetails}
                    onChange={(e) => setRequestDetails(e.target.value)}
                    placeholder="Describe specific duties, shift hours, uniform requirements..."
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-slate-900"
                  ></textarea>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="flex-1 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-red-600 text-white font-extrabold rounded-xl hover:bg-red-700 shadow"
                  >
                    Transmit to Command
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-6 text-center space-y-4 text-xs">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-extrabold text-slate-900 text-base">Request Dispatched to Command Duty Officer</h4>
                <p className="text-slate-600">
                  Ref <code className="bg-slate-100 px-1.5 py-0.5 rounded font-bold text-blue-900">{requests[0]?.refNumber}</code> is actively being processed by Site Supervisor Commander Sok Vanna.
                </p>
                <button
                  onClick={() => setModalOpen(false)}
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
