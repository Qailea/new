import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ClientAccountInfo } from './PortalTypes';
import {
  Users,
  Clock,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  QrCode,
  Radio,
  PhoneCall,
  Search,
  ChevronRight
} from 'lucide-react';

interface ServiceStatusModuleProps {
  clientInfo: ClientAccountInfo;
}

export const ServiceStatusModule: React.FC<ServiceStatusModuleProps> = ({ clientInfo }) => {
  const { getT } = useLanguage();

  const [activeSubTab, setActiveSubTab] = useState<'roster' | 'checkpoints' | 'services'>('roster');

  const guardsList = [
    { name: 'Sok Vanna', rank: 'Station Chief', badge: 'KNSK-G-9942', shift: 'Day Shift (06:00 - 18:00)', post: 'Main Bank Glass Entrance', status: 'ON_POST' },
    { name: 'Keo Sophea', rank: 'Screening Lead', badge: 'KNSK-G-5510', shift: 'Day Shift (06:00 - 18:00)', post: 'Lobby Metal Scanner', status: 'ON_POST' },
    { name: 'Yim Samnang', rank: 'Vault Guard', badge: 'KNSK-G-1102', shift: 'Day Shift (06:00 - 18:00)', post: 'Cash Vault Door #1', status: 'ON_POST' },
    { name: 'Chea Rithy', rank: 'CCTV Lead', badge: 'KNSK-G-4402', shift: '24/7 Control Room', post: 'Monitoring Station B', status: 'ON_POST' },
    { name: 'Thorn Vanna', rank: 'Perimeter Wand', badge: 'KNSK-G-8821', shift: 'Night Shift (18:00 - 06:00)', post: 'Outer Perimeter & Parking', status: 'SCHEDULED' },
    { name: 'Prum Heng', rank: 'Gate Officer', badge: 'KNSK-G-3310', shift: 'Night Shift (18:00 - 06:00)', post: 'Basement B1 Vehicle Gate', status: 'SCHEDULED' },
  ];

  const checkpoints = [
    { time: '22:45 PM', point: 'Checkpoint #1 - Main Glass Atrium', guard: 'Sok Vanna', badge: 'KNSK-G-9942', verified: true },
    { time: '22:15 PM', point: 'Checkpoint #4 - Rear Vault Escort Gate', guard: 'Yim Samnang', badge: 'KNSK-G-1102', verified: true },
    { time: '21:30 PM', point: 'Checkpoint #2 - Basement B2 VIP Parking Ramp', guard: 'Keo Sophea', badge: 'KNSK-G-5510', verified: true },
    { time: '20:50 PM', point: 'Checkpoint #3 - Rooftop Generator & HVAC', guard: 'Chea Rithy', badge: 'KNSK-G-4402', verified: true },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded uppercase">
              Live Station Deployment Tracker
            </span>
            <span className="text-[10px] font-mono text-slate-500 font-bold">100% Stationed</span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 font-serif">
            {getT('Service Status & On-Duty Guard Roster', 'ស្ថានភាពសេវាកម្ម និងកម្លាំងសន្តិសុខឈរជើង', '服务状态与在岗安保勤务名册')}
          </h2>
          <p className="text-xs text-slate-500">
            {getT(
              'Real-time view of stationed security officers, GPS patrol wand checkpoints, and site supervisors.',
              'ពិនិត្យមើលកម្លាំងសន្តិសុខឈរជើងជាក់ស្តែង របាយការណ៍ល្បាត GPS QR code និងមេបញ្ជាការ។',
              '实时查看在岗安保队员名册、GPS巡逻打卡稽核及现场驻点主管。'
            )}
          </p>
        </div>

        <div className="p-3 bg-blue-950 text-white rounded-2xl border border-blue-900 text-xs font-mono">
          <span className="text-slate-400 block text-[10px]">Assigned Station Supervisor:</span>
          <strong className="text-white text-sm block">{clientInfo.assignedSupervisor.name}</strong>
          <span className="text-emerald-400 font-bold">Badge {clientInfo.assignedSupervisor.badge}</span>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex overflow-x-auto gap-2 border-b border-slate-200 pb-2">
        {[
          { id: 'roster', label: `On-Duty Guard Roster (${guardsList.length} Officers)`, icon: Users },
          { id: 'checkpoints', label: 'GPS Patrol Wand Scan Logs', icon: Clock },
          { id: 'services', label: 'Active Contract Service Breakdown', icon: ShieldCheck },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as any)}
              className={`px-4 py-2.5 text-xs font-bold rounded-xl whitespace-nowrap transition flex items-center gap-2 ${
                isActive
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Sub-Tab 1: Guard Roster */}
      {activeSubTab === 'roster' && (
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-extrabold text-slate-900 text-sm font-serif">Site Guard Personnel Roster</h3>
            <span className="text-xs text-slate-500 font-mono">Facility: {getT(clientInfo.companyName.en, clientInfo.companyName.km, clientInfo.companyName.zh)}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {guardsList.map((g, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-blue-900 bg-blue-100 px-2 py-0.5 rounded">
                    {g.badge}
                  </span>
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                    g.status === 'ON_POST' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {g.status}
                  </span>
                </div>

                <div>
                  <h4 className="font-extrabold text-sm text-slate-900">{g.name}</h4>
                  <p className="text-xs text-slate-600 font-medium">{g.rank}</p>
                </div>

                <div className="text-[11px] text-slate-500 space-y-1 font-mono pt-2 border-t border-slate-200">
                  <div>Post: <strong className="text-slate-800">{g.post}</strong></div>
                  <div>Shift: {g.shift}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sub-Tab 2: Wand Checkpoints */}
      {activeSubTab === 'checkpoints' && (
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-extrabold text-slate-900 text-sm font-serif">Real-Time GPS QR Wand Scan Registry</h3>
            <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              ✓ All Checkpoints Cleared
            </span>
          </div>

          <div className="space-y-2 text-xs">
            {checkpoints.map((cp, i) => (
              <div key={i} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono font-bold text-blue-900 bg-blue-100 px-2.5 py-1 rounded-lg">{cp.time}</span>
                  <div>
                    <strong className="text-slate-900 text-sm block">{cp.point}</strong>
                    <span className="text-slate-500 font-mono">Officer: {cp.guard} ({cp.badge})</span>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> GPS Scan Verified
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sub-Tab 3: Service Breakdown */}
      {activeSubTab === 'services' && (
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-extrabold text-slate-900 text-sm font-serif border-b border-slate-100 pb-3">Active Contract Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <span className="font-extrabold text-sm text-blue-900 block">1. 24/7 Gate & Perimeter Guarding</span>
              <p className="text-slate-600">Double-shift 12-hour continuous stationary protection at main glass atrium and cash loading bay.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <span className="font-extrabold text-sm text-blue-900 block">2. Real-Time CCTV Control Room Station</span>
              <p className="text-slate-600">Dedicated monitoring officer reviewing 64 camera streams with AI intrusion alerts.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <span className="font-extrabold text-sm text-blue-900 block">3. QR Patrol Wand Inspection Swipes</span>
              <p className="text-slate-600">Mandatory 45-minute interval sweeps across all 8 station checkpoints with GPS logging.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <span className="font-extrabold text-sm text-blue-900 block">4. 4x4 Mobile Reinforcement Fleet Backup</span>
              <p className="text-slate-600">24/7 rapid mobile reinforcement backup with prompt emergency dispatch SLA.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
