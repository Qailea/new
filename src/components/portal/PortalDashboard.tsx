import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ClientAccountInfo, PortalTab } from './PortalTypes';
import {
  Building2,
  Users,
  ShieldCheck,
  PhoneCall,
  PlusCircle,
  AlertTriangle,
  FileText,
  MessageSquare,
  Clock,
  ArrowRight,
  Bell,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Headphones
} from 'lucide-react';

interface PortalDashboardProps {
  clientInfo: ClientAccountInfo;
  onNavigateTab: (tab: PortalTab) => void;
  onRequestExtraGuards: () => void;
}

export const PortalDashboard: React.FC<PortalDashboardProps> = ({
  clientInfo,
  onNavigateTab,
  onRequestExtraGuards,
}) => {
  const { getT } = useLanguage();

  const companyName = getT(
    clientInfo.companyName.en,
    clientInfo.companyName.km,
    clientInfo.companyName.zh
  );

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Welcome Banner */}
      <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-blue-900/80 text-white rounded-2xl flex items-center justify-center border border-blue-500/30 shadow-lg shrink-0">
              <Building2 className="w-9 h-9 text-red-500" />
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-bold bg-blue-900 text-blue-200 border border-blue-700 px-2.5 py-0.5 rounded">
                  {clientInfo.clientCode}
                </span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/90 border border-emerald-800/80 px-2.5 py-0.5 rounded flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {clientInfo.contractStatus} SLA
                </span>
                <span className="text-[11px] font-mono text-slate-400">Contract #{clientInfo.contractNumber}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-white font-serif tracking-tight mt-1">
                {companyName}
              </h1>

              <p className="text-xs text-slate-300 font-sans">
                {getT('Welcome back,', 'សូមស្វាគមន៍មកវិញ,', '欢迎回来，')} <strong className="text-white">{clientInfo.contactPerson}</strong> ({clientInfo.title})
              </p>
            </div>
          </div>

          {/* Quick Primary Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onRequestExtraGuards}
              className="px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-red-950/30 flex items-center gap-2 transition transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <PlusCircle className="w-4 h-4" />
              <span>{getT('Request Extra Guards', 'ស្នើសុំបន្ថែមសន្តិសុខ', '增派安保人员')}</span>
            </button>

            <button
              onClick={() => onNavigateTab('incidents')}
              className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider rounded-xl border border-slate-700 flex items-center gap-2 transition"
            >
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>{getT('Report Incident', 'រាយការណ៍ឧបទ្ទវហេតុ', '上报突发事件')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Key Operational Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-2 hover:border-blue-300 transition">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase font-mono tracking-wider">On-Duty Guard Roster</span>
            <div className="p-2 bg-blue-50 text-blue-900 rounded-xl">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900 font-serif">
            {clientInfo.assignedGuardsCount} <span className="text-sm font-normal text-slate-500">Guards</span>
          </div>
          <p className="text-xs text-emerald-700 font-medium flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 100% Stationed & Manned Today
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-2 hover:border-blue-300 transition">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase font-mono tracking-wider">Patrol Wand QR Scans</span>
            <div className="p-2 bg-emerald-50 text-emerald-800 rounded-xl">
              <Clock className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900 font-serif">
            128 <span className="text-sm font-normal text-slate-500">Scans</span>
          </div>
          <p className="text-xs text-slate-600 font-medium">GPS Verified Checkpoints (Shift 1 & 2)</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-2 hover:border-blue-300 transition">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase font-mono tracking-wider">Service Requests</span>
            <div className="p-2 bg-amber-50 text-amber-800 rounded-xl">
              <PlusCircle className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900 font-serif">
            2 <span className="text-sm font-normal text-slate-500">Active</span>
          </div>
          <p className="text-xs text-amber-700 font-medium">1 Dispatched • 1 Under Review</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-2 hover:border-blue-300 transition">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase font-mono tracking-wider">Unread Alerts</span>
            <div className="p-2 bg-red-50 text-red-600 rounded-xl">
              <Bell className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900 font-serif">
            1 <span className="text-sm font-normal text-slate-500">Notice</span>
          </div>
          <p className="text-xs text-blue-900 font-medium">Khmer New Year Security Directive</p>
        </div>
      </div>

      {/* Main Grid: Assigned Ops Team + Announcements */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column (7 cols): Assigned Operations Team & Emergency Contacts */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-900 text-white rounded-2xl shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-slate-900 font-serif">
                    {getT('Assigned Operations Command Team', 'ក្រុមបញ្ជាការប្រតិបត្តិការដែលបានចាត់តាំង', '专属运营指挥团队')}
                  </h3>
                  <p className="text-xs text-slate-500">24/7 Direct line to site supervisor and mobile response fleet</p>
                </div>
              </div>
              <span className="text-[11px] font-mono bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full">
                24/7 MANNED
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Supervisor Card */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-900 text-white flex items-center justify-center font-bold text-base font-serif shrink-0">
                    {clientInfo.assignedSupervisor.name.split(' ')[0][0]}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-blue-900 uppercase">Site Station Commander</span>
                    <h4 className="font-extrabold text-sm text-slate-900">{clientInfo.assignedSupervisor.name}</h4>
                    <p className="text-[11px] text-slate-500 font-mono">Badge: {clientInfo.assignedSupervisor.badge}</p>
                  </div>
                </div>

                <a
                  href={`tel:${clientInfo.assignedSupervisor.phone}`}
                  className="w-full py-2 bg-white hover:bg-blue-50 text-blue-900 font-bold text-xs rounded-xl border border-slate-300 hover:border-blue-300 flex items-center justify-center gap-2 transition"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-blue-900" />
                  <span>{clientInfo.assignedSupervisor.phone}</span>
                </a>
              </div>

              {/* General Ops Command Card */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold text-base font-serif shrink-0">
                    HQ
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-red-600 uppercase">General Dispatch Commander</span>
                    <h4 className="font-extrabold text-sm text-slate-900">{clientInfo.opsTeam.commanderName}</h4>
                    <p className="text-[11px] text-slate-500 font-mono">Code: {clientInfo.opsTeam.controlRoomCode}</p>
                  </div>
                </div>

                <a
                  href={`tel:${clientInfo.opsTeam.hotline247}`}
                  className="w-full py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-sm transition"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>24/7 Hotline: {clientInfo.opsTeam.hotline247}</span>
                </a>
              </div>
            </div>

            {/* Quick Actions Bar */}
            <div className="pt-2 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-500 uppercase font-mono tracking-wider block mb-3">
                {getT('Portal Quick Management Modules', 'ម៉ូឌុលគ្រប់គ្រងលឿន', '门户快捷管理模块')}
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                <button
                  onClick={() => onNavigateTab('service_status')}
                  className="p-3 bg-slate-50 hover:bg-blue-50 rounded-xl border border-slate-200 hover:border-blue-300 text-slate-800 hover:text-blue-900 text-xs font-bold transition flex flex-col items-center gap-1.5"
                >
                  <Users className="w-5 h-5 text-blue-900" />
                  <span>On-Duty Roster</span>
                </button>

                <button
                  onClick={() => onNavigateTab('quotations')}
                  className="p-3 bg-slate-50 hover:bg-blue-50 rounded-xl border border-slate-200 hover:border-blue-300 text-slate-800 hover:text-blue-900 text-xs font-bold transition flex flex-col items-center gap-1.5"
                >
                  <FileText className="w-5 h-5 text-blue-900" />
                  <span>Quotations</span>
                </button>

                <button
                  onClick={() => onNavigateTab('communication')}
                  className="p-3 bg-slate-50 hover:bg-blue-50 rounded-xl border border-slate-200 hover:border-blue-300 text-slate-800 hover:text-blue-900 text-xs font-bold transition flex flex-col items-center gap-1.5"
                >
                  <MessageSquare className="w-5 h-5 text-blue-900" />
                  <span>Ops Chat</span>
                </button>

                <button
                  onClick={() => onNavigateTab('documents')}
                  className="p-3 bg-slate-50 hover:bg-blue-50 rounded-xl border border-slate-200 hover:border-blue-300 text-slate-800 hover:text-blue-900 text-xs font-bold transition flex flex-col items-center gap-1.5"
                >
                  <FileText className="w-5 h-5 text-blue-900" />
                  <span>Documents</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Latest Announcements & Security Directives */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-extrabold text-base text-slate-900 font-serif flex items-center gap-2">
                <Bell className="w-5 h-5 text-red-600" />
                {getT('Command Center Notices', 'សេចក្តីជូនដំណឹងពីមជ្ឈមណ្ឌលបញ្ជាការ', '指挥中心最新公告')}
              </h3>
              <button
                onClick={() => onNavigateTab('notifications')}
                className="text-xs font-bold text-blue-900 hover:underline flex items-center gap-1"
              >
                <span>{getT('View All', 'មើលទាំងអស់', '查看全部')}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-amber-900 font-bold">
                  <span className="bg-amber-200 text-amber-900 px-2 py-0.5 rounded">HOLIDAY DIRECTIVE</span>
                  <span>August 02, 2026</span>
                </div>
                <h4 className="font-extrabold text-sm text-slate-900">
                  100% Guard Readiness During Upcoming Public Holidays
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  All static bank and high-rise posts will maintain full double-shift personnel. Mobile 4x4 check vehicles will double night sweeps.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="bg-blue-100 text-blue-900 font-bold px-2 py-0.5 rounded">SYSTEM UPDATE</span>
                  <span>July 25, 2026</span>
                </div>
                <h4 className="font-extrabold text-sm text-slate-900">
                  Enhanced QR Wand Checkpoints Implemented
                </h4>
                <p className="text-xs text-slate-600">
                  Guards now perform real-time photo verification at every vault and perimeter scan point.
                </p>
              </div>
            </div>

            <div className="p-4 bg-blue-950 text-white rounded-2xl border border-blue-900 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                <Sparkles className="w-4 h-4" />
                <span>Next-Gen Enterprise Features Roadmap</span>
              </div>
              <p className="text-xs text-slate-300">
                Preview upcoming KHQR Online Payments, Digital SLA Contracts, and Live GPS Guard Tracking.
              </p>
              <button
                onClick={() => onNavigateTab('future_roadmap')}
                className="w-full py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition border border-blue-700"
              >
                <span>Explore Digital Transformation Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
