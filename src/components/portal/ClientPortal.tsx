import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import { ClientAccountInfo, PortalTab } from './PortalTypes';

import { PortalLogin } from './PortalLogin';
import { PortalDashboard } from './PortalDashboard';
import { QuotationCenter } from './QuotationCenter';
import { ServiceRequestsModule } from './ServiceRequestsModule';
import { IncidentReportingModule } from './IncidentReportingModule';
import { CommunicationCenter } from './CommunicationCenter';
import { DocumentCenter } from './DocumentCenter';
import { ServiceStatusModule } from './ServiceStatusModule';
import { NotificationCenter } from './NotificationCenter';
import { ClientProfileModule } from './ClientProfileModule';
import { SupportCenterModule } from './SupportCenterModule';
import { FutureFeaturesArchitecture } from './FutureFeaturesArchitecture';
import { PortalEmergencyFloatingButton } from './PortalEmergencyFloatingButton';

import {
  LayoutDashboard,
  Calculator,
  PlusCircle,
  AlertTriangle,
  MessageSquare,
  FileText,
  Users,
  Bell,
  UserCheck,
  HelpCircle,
  Sparkles,
  Building2,
  LogOut,
  ChevronDown,
  Menu,
  X,
  PhoneCall
} from 'lucide-react';

export const ClientPortal: React.FC = () => {
  const { getT } = useLanguage();
  const { role, currentUser, logout, loginAsClient } = useAuth();

  const [activeTab, setActiveTab] = useState<PortalTab>('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Request Extra Guard Modal
  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const [extraGuardsCount, setExtraGuardsCount] = useState(2);
  const [extraReason, setExtraReason] = useState('VIP Event / Heavy Foot Traffic expected');
  const [extraSubmitted, setExtraSubmitted] = useState(false);

  // Default Client State
  const [clientInfo, setClientInfo] = useState<ClientAccountInfo>({
    id: 'CLIENT-ABA-8821',
    clientCode: 'CLIENT-ABA-8821',
    companyName: {
      en: 'ABA Bank Phnom Penh Head Office Tower',
      km: 'ធនាគារ អាស៊ី វឌ្ឍនៈ (ABA) ទីស្នាក់ការកណ្តាល',
      zh: 'ABA银行金边总部大楼'
    },
    contactPerson: 'Sokha Ly',
    title: 'Group Security Director',
    email: 'sokha.ly@ababank.com.kh',
    phone: '012 998 811',
    address: {
      en: 'Preah Monivong Blvd, Sangkat Boeung Keng Kang I, Phnom Penh',
      km: 'មហាវិថីព្រះមុនីវង្ស សង្កាត់បឹងកេងកងទី១ ភ្នំពេញ',
      zh: '金边市莫尼旺大道 Boeung Keng Kang I 區'
    },
    contractStatus: 'ACTIVE',
    contractNumber: 'KNSK-SLA-2026-8821',
    startDate: 'January 01, 2026',
    assignedGuardsCount: 12,
    assignedSupervisor: {
      name: 'Commander Sok Vanna',
      phone: '096 483 8666',
      badge: 'KNSK-SUP-9942'
    },
    opsTeam: {
      commanderName: 'General Command Director',
      commanderPhone: '093 878 666',
      hotline247: '096 483 8666',
      controlRoomCode: 'HQ-DISPATCH-ALPHA'
    },
    commPreferences: {
      emailAlerts: true,
      smsAlerts: true,
      telegramAlerts: true,
      preferredLanguage: 'en'
    }
  });

  // If user is not logged in as client role, display Enterprise Portal Login Page
  if (role !== 'client') {
    return (
      <PortalLogin
        onLoginSuccess={(code) => {
          loginAsClient(code);
          setActiveTab('dashboard');
        }}
      />
    );
  }

  const navTabs = [
    { id: 'dashboard' as PortalTab, labelEn: 'Dashboard', labelKm: 'ផ្ទាំងគ្រប់គ្រង', labelZh: '仪表板', icon: LayoutDashboard },
    { id: 'quotations' as PortalTab, labelEn: 'Quotation Center', labelKm: 'មជ្ឈមណ្ឌលតម្លៃ', labelZh: '报价中心', icon: Calculator },
    { id: 'service_requests' as PortalTab, labelEn: 'Service Requests', labelKm: 'ស្នើសុំសេវាកម្ម', labelZh: '服务申请', icon: PlusCircle },
    { id: 'incidents' as PortalTab, labelEn: 'Incident Reporting', labelKm: 'រាយការណ៍ឧបទ្ទវហេតុ', labelZh: '事件上报', icon: AlertTriangle },
    { id: 'communication' as PortalTab, labelEn: 'Communication Center', labelKm: 'មជ្ឈមណ្ឌលសារ', labelZh: '沟通中心', icon: MessageSquare },
    { id: 'documents' as PortalTab, labelEn: 'Document Center', labelKm: 'មជ្ឈមណ្ឌលឯកសារ', labelZh: '文档中心', icon: FileText },
    { id: 'service_status' as PortalTab, labelEn: 'Service Status', labelKm: 'ស្ថានភាពសេវាកម្ម', labelZh: '服务状态', icon: Users },
    { id: 'notifications' as PortalTab, labelEn: 'Notifications', labelKm: 'ការជូនដំណឹង', labelZh: '通知中心', icon: Bell },
    { id: 'profile' as PortalTab, labelEn: 'Client Profile', labelKm: 'ព័ត៌មានគណនី', labelZh: '客户档案', icon: UserCheck },
    { id: 'support' as PortalTab, labelEn: 'Support Center', labelKm: 'មជ្ឈមណ្ឌលជំនួយ', labelZh: '支持中心', icon: HelpCircle },
    { id: 'future_roadmap' as PortalTab, labelEn: 'Future Innovations', labelKm: 'បច្ចេកវិទ្យាអនាគត', labelZh: '未来架构', icon: Sparkles },
  ];

  const getTabLabel = (tab: typeof navTabs[0]) => {
    return getT(tab.labelEn, tab.labelKm, tab.labelZh);
  };

  const companyName = getT(clientInfo.companyName.en, clientInfo.companyName.km, clientInfo.companyName.zh);

  return (
    <div className="bg-slate-100 min-h-screen py-6 px-3 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Top Corporate Portal Bar */}
        <div className="bg-slate-900 text-white rounded-3xl p-4 sm:p-6 shadow-xl border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 bg-blue-900 rounded-2xl flex items-center justify-center text-white border border-blue-700 shrink-0">
              <Building2 className="w-7 h-7 text-red-500" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold bg-blue-950 text-blue-300 border border-blue-800 px-2 py-0.5 rounded">
                  {clientInfo.clientCode}
                </span>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 border border-emerald-800 px-2 py-0.5 rounded">
                  {clientInfo.contractStatus} SLA
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-black text-white font-serif mt-0.5">
                {companyName}
              </h1>
              <p className="text-[11px] text-slate-400 font-sans">
                {clientInfo.contactPerson} • {clientInfo.title}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              onClick={() => {
                setExtraSubmitted(false);
                setRequestModalOpen(true);
              }}
              className="px-3.5 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow flex items-center gap-1.5 transition"
            >
              <PlusCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Request Extra Guards</span>
            </button>

            <button
              onClick={logout}
              className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-bold text-xs rounded-xl border border-slate-700 flex items-center gap-1.5 transition"
              title="Logout from Client Portal"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>

        {/* Desktop & Tablet Navigation Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-1.5 overflow-x-auto">
          <div className="flex items-center gap-1 min-w-max">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              const label = getTabLabel(tab);

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-2.5 text-xs font-bold rounded-xl whitespace-nowrap transition flex items-center gap-2 ${
                    isActive
                      ? 'bg-blue-900 text-white shadow-md'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-blue-900'}`} />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Portal Module View */}
        <main>
          {activeTab === 'dashboard' && (
            <PortalDashboard
              clientInfo={clientInfo}
              onNavigateTab={setActiveTab}
              onRequestExtraGuards={() => {
                setExtraSubmitted(false);
                setRequestModalOpen(true);
              }}
            />
          )}

          {activeTab === 'quotations' && <QuotationCenter />}
          {activeTab === 'service_requests' && <ServiceRequestsModule />}
          {activeTab === 'incidents' && <IncidentReportingModule />}
          {activeTab === 'communication' && <CommunicationCenter />}
          {activeTab === 'documents' && <DocumentCenter />}
          {activeTab === 'service_status' && <ServiceStatusModule clientInfo={clientInfo} />}
          {activeTab === 'notifications' && <NotificationCenter />}
          {activeTab === 'profile' && (
            <ClientProfileModule
              clientInfo={clientInfo}
              onUpdateInfo={setClientInfo}
            />
          )}
          {activeTab === 'support' && <SupportCenterModule />}
          {activeTab === 'future_roadmap' && <FutureFeaturesArchitecture />}
        </main>

      </div>

      {/* Floating Emergency Hotline Button */}
      <PortalEmergencyFloatingButton />

      {/* Extra Guards Dispatch Request Modal */}
      {requestModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <h3 className="font-extrabold text-slate-900 text-base font-serif">
                {getT('Request Extra Guards / Replacement', 'ស្នើសុំបន្ថែមសន្តិសុខ / ការផ្លាស់ប្តូរ', '申请临时增派/调换安保人员')}
              </h3>
              <button
                onClick={() => setRequestModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!extraSubmitted ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setExtraSubmitted(true);
                }}
                className="space-y-4 text-xs"
              >
                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Number of Extra Personnel Required *
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={20}
                    value={extraGuardsCount}
                    onChange={(e) => setExtraGuardsCount(parseInt(e.target.value))}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl font-mono font-bold text-slate-900"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Operational Reason & Special Duty Instructions *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={extraReason}
                    onChange={(e) => setExtraReason(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-slate-900"
                  ></textarea>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setRequestModalOpen(false)}
                    className="flex-1 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-red-600 text-white font-extrabold rounded-xl hover:bg-red-700 shadow"
                  >
                    Dispatch Request
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-6 text-center space-y-3 text-xs">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-7 h-7" />
                </div>
                <h4 className="font-extrabold text-slate-900 text-base">Request Transmitted to Command Center</h4>
                <p className="text-slate-600">
                  Operations Command has been notified. Prompt dispatch of {extraGuardsCount} officers has been scheduled.
                </p>
                <button
                  onClick={() => setRequestModalOpen(false)}
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
