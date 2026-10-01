import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { cambodiaProvinces } from '../../data/provinces';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import {
  Users,
  Building2,
  DollarSign,
  FileCheck,
  ShieldAlert,
  Radio,
  PlusCircle,
  TrendingUp,
  MapPin,
  Clock,
  Sparkles,
  Send,
  UserCheck,
  CheckCircle2,
  Bell
} from 'lucide-react';
import { AdminTab } from './AdminSidebar';

interface AdminDashboardOverviewProps {
  onNavigateTab: (tab: AdminTab) => void;
}

export const AdminDashboardOverview: React.FC<AdminDashboardOverviewProps> = ({ onNavigateTab }) => {
  const { language } = useLanguage();

  const chartData = cambodiaProvinces.slice(0, 8).map((p) => ({
    name: p.nameEn.split(' ')[0],
    Guards: p.activeGuards,
    Clients: p.clientCount * 12,
  }));

  return (
    <div className="space-y-8">
      {/* Top Banner & Quick SLA Metrics */}
      <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
          <Radio className="w-80 h-80 text-red-500" />
        </div>

        <div className="relative z-10 space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold bg-red-950 text-red-400 border border-red-800 px-2.5 py-0.5 rounded">
                  LIVE GENERAL COMMAND CENTER
                </span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950 border border-emerald-800 px-2.5 py-0.5 rounded flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  SYSTEM HEALTH 100%
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 font-serif">
                Executive Operations Dashboard
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Real-time management for K.N.S.K Guard Personnel, 25 Provincial Command Units & Operations
              </p>
            </div>

            {/* Quick Action Button Group */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => onNavigateTab('cms_news')}
                className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 flex items-center gap-1.5 transition"
              >
                <PlusCircle className="w-3.5 h-3.5 text-red-400" />
                Publish Announcement
              </button>
              <button
                onClick={() => onNavigateTab('ops_quotes')}
                className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 flex items-center gap-1.5 transition"
              >
                <FileCheck className="w-3.5 h-3.5 text-blue-400" />
                New Quote SLA
              </button>
              <button
                onClick={() => onNavigateTab('ops_patrols')}
                className="px-3.5 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-red-600/30 flex items-center gap-1.5 transition"
              >
                <Radio className="w-3.5 h-3.5" />
                Emergency Dispatch
              </button>
            </div>
          </div>

          {/* 5 KPI Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-2">
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span>Deployment Force</span>
                <Users className="w-4 h-4 text-red-500" />
              </div>
              <div className="text-2xl font-extrabold text-white font-mono">Active</div>
              <div className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> Police Vetted Officers
              </div>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span>Operating Reach</span>
                <Building2 className="w-4 h-4 text-blue-400" />
              </div>
              <div className="text-2xl font-extrabold text-blue-400 font-mono">25 Provinces</div>
              <div className="text-[10px] text-slate-400">Banks, SEZs, Boreys & Commercial</div>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span>Account Status</span>
                <DollarSign className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl font-extrabold text-emerald-400 font-mono">Verified</div>
              <div className="text-[10px] text-emerald-400 font-bold">100% Tax Compliant</div>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span>Pending Quotes</span>
                <FileCheck className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-2xl font-extrabold text-amber-400 font-mono">Proposals</div>
              <div className="text-[10px] text-amber-400 font-bold">Review Pipeline</div>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span>Dispatch Status</span>
                <Clock className="w-4 h-4 text-purple-400" />
              </div>
              <div className="text-2xl font-extrabold text-purple-400 font-mono">24/7 Rapid</div>
              <div className="text-[10px] text-emerald-400 font-bold">Ready Deployment</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recharts Analytics & Heatmap Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Guard Deployment Chart */}
        <div className="lg:col-span-2 bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2 font-serif">
              <Users className="w-4 h-4 text-red-500" />
              Nationwide Guard Personnel Deployment (Top 8 Provincial Hubs)
            </h3>
            <span className="text-xs text-slate-400 font-mono">Total 25 Provinces</span>
          </div>

          <div className="h-[320px] w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff' }} />
                <Bar dataKey="Guards" fill="#dc2626" radius={[6, 6, 0, 0]} name="Active Guard Officers" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Live Command Stream & Quick Dispatches */}
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-4 shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider border-b border-slate-800 pb-3 flex items-center gap-2 font-serif">
              <Bell className="w-4 h-4 text-emerald-400" />
              Live Operational Log Feed
            </h3>

            <div className="space-y-3 text-xs">
              {[
                { time: '2 Mins ago', tag: 'PATROL', text: 'HQ Patrol Unit #01 verified QR checkpoint at ABA Bank Veng Sreng.' },
                { time: '14 Mins ago', tag: 'APPLICANT', text: 'New Guard candidate Chan Vanna (Ex-Military) submitted application.' },
                { time: '30 Mins ago', tag: 'QUOTE', text: 'Vattanac Tower requested quotation for 12 24/7 armed static guards.' },
                { time: '1 Hour ago', tag: 'CMS', text: 'New article "Ministry Commendation 2026" published by Marketing.' },
              ].map((item, i) => (
                <div key={i} className="p-3 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-red-400 bg-red-950 px-2 py-0.5 rounded border border-red-800">
                      {item.tag}
                    </span>
                    <span className="text-[10px] text-slate-500">{item.time}</span>
                  </div>
                  <p className="text-slate-300 text-[11px]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => onNavigateTab('gov_audit')}
            className="w-full py-2.5 bg-slate-950 hover:bg-slate-800 text-slate-300 font-bold text-xs rounded-xl border border-slate-800 transition text-center"
          >
            View Complete System Audit Log
          </button>
        </div>
      </div>
    </div>
  );
};
