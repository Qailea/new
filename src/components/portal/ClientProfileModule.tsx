import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ClientAccountInfo, AuditLogItem } from './PortalTypes';
import {
  User,
  Building2,
  Mail,
  Phone,
  MapPin,
  Globe,
  Shield,
  KeyRound,
  CheckCircle2,
  Save,
  Lock,
  Smartphone,
  Laptop
} from 'lucide-react';

interface ClientProfileModuleProps {
  clientInfo: ClientAccountInfo;
  onUpdateInfo: (updated: ClientAccountInfo) => void;
}

export const ClientProfileModule: React.FC<ClientProfileModuleProps> = ({
  clientInfo,
  onUpdateInfo
}) => {
  const { getT, language, setLanguage } = useLanguage();

  const [contactPerson, setContactPerson] = useState(clientInfo.contactPerson);
  const [title, setTitle] = useState(clientInfo.title);
  const [phone, setPhone] = useState(clientInfo.phone);
  const [email, setEmail] = useState(clientInfo.email);
  const [addressEn, setAddressEn] = useState(clientInfo.address.en);
  const [commLanguage, setCommLanguage] = useState<'en' | 'km' | 'zh'>(clientInfo.commPreferences.preferredLanguage);
  
  const [emailAlerts, setEmailAlerts] = useState(clientInfo.commPreferences.emailAlerts);
  const [smsAlerts, setSmsAlerts] = useState(clientInfo.commPreferences.smsAlerts);
  const [telegramAlerts, setTelegramAlerts] = useState(clientInfo.commPreferences.telegramAlerts);

  // 2FA Toggle State
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Audit Logs
  const auditLogs: AuditLogItem[] = [
    { id: 'LOG-01', timestamp: 'Today, 08:30:12 AM', action: 'Portal Login - Password & ID Authenticated', ipAddress: '111.92.204.18', device: 'Chrome / Windows 11', status: 'SUCCESS' },
    { id: 'LOG-02', timestamp: 'Yesterday, 14:15:02 PM', action: 'Service Request KNSK-SR-9910 Dispatched', ipAddress: '111.92.204.18', device: 'Chrome / Windows 11', status: 'SUCCESS' },
    { id: 'LOG-03', timestamp: 'July 28, 2026, 09:10:44 AM', action: 'Quotation KNSK-QT-88210 Downloaded', ipAddress: '111.92.204.18', device: 'Mobile Safari / iOS 18', status: 'SUCCESS' },
  ];

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: ClientAccountInfo = {
      ...clientInfo,
      contactPerson,
      title,
      phone,
      email,
      address: { ...clientInfo.address, en: addressEn },
      commPreferences: {
        emailAlerts,
        smsAlerts,
        telegramAlerts,
        preferredLanguage: commLanguage
      }
    };

    onUpdateInfo(updated);
    setLanguage(commLanguage);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold text-blue-900 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded uppercase">
              Corporate Account Management
            </span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 font-serif">
            {getT('Client Profile & Security Credentials', 'ព័ត៌មានអតិថិជន និងសុវត្ថិភាពគណនី', '客户档案与安全凭证管理')}
          </h2>
          <p className="text-xs text-slate-500">
            {getT(
              'Manage primary contact personnel, communication channels, preferred portal language, and session security.',
              'គ្រប់គ្រងព័ត៌មានអ្នកទទួលខុសត្រូវ បណ្តាញទំនាក់ទំនង ភាសា និងសុវត្ថិភាពគណនី។',
              '管理主要联系人员、沟通渠道、门户语言偏好及登录安全机制。'
            )}
          </p>
        </div>

        <button
          type="button"
          onClick={handleSaveProfile}
          className="px-5 py-3 bg-blue-900 hover:bg-blue-950 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-blue-950/20 flex items-center gap-2 transition"
        >
          <Save className="w-4 h-4" />
          <span>{getT('Save Profile Changes', 'រក្សាទុកការកែប្រែ', '保存个人资料')}</span>
        </button>
      </div>

      {saveSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 text-xs font-bold text-emerald-900 animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{getT('Profile changes saved successfully.', 'ព័ត៌មានត្រូវបានរក្សាទុកដោយជោគជ័យ។', '个人资料已成功更新。')}</span>
        </div>
      )}

      {/* Main Profile Form */}
      <form onSubmit={handleSaveProfile} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Organization & Contact Info (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
          <h3 className="font-extrabold text-base text-slate-900 font-serif border-b border-slate-100 pb-3 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blue-900" />
            {getT('Organization & Designated Security Director', 'ព័ត៌មានក្រុមហ៊ុន និងអ្នកគ្រប់គ្រង', '机构与指定安保主管信息')}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Company / Facility Name</label>
              <input
                type="text"
                disabled
                value={getT(clientInfo.companyName.en, clientInfo.companyName.km, clientInfo.companyName.zh)}
                className="w-full px-3.5 py-2.5 bg-slate-100 border border-slate-300 rounded-xl font-bold text-slate-700 font-serif"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Contract Account ID</label>
              <input
                type="text"
                disabled
                value={clientInfo.clientCode}
                className="w-full px-3.5 py-2.5 bg-slate-100 border border-slate-300 rounded-xl font-mono font-bold text-blue-900"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-800 mb-1">Designated Security Manager *</label>
              <input
                type="text"
                required
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl font-bold text-slate-900"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-800 mb-1">Official Title *</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl font-bold text-slate-900"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-800 mb-1">Direct Telephone *</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl font-mono font-bold text-slate-900"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-800 mb-1">Corporate Email Address *</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl font-mono font-bold text-slate-900"
              />
            </div>
          </div>

          <div className="text-xs">
            <label className="block font-bold text-slate-800 mb-1">Business Facility Address *</label>
            <input
              type="text"
              required
              value={addressEn}
              onChange={(e) => setAddressEn(e.target.value)}
              className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl font-bold text-slate-900"
            />
          </div>
        </div>

        {/* Right Column: Language & Security Credentials (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Preferences Box */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 text-xs">
            <h3 className="font-extrabold text-base text-slate-900 font-serif border-b border-slate-100 pb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-900" />
              {getT('Portal Language & Notification Channels', 'ភាសា និងបណ្តាញដំណឹង', '语言偏好与通知渠道')}
            </h3>

            <div>
              <label className="block font-bold text-slate-800 mb-1">Preferred Portal Language</label>
              <select
                value={commLanguage}
                onChange={(e) => setCommLanguage(e.target.value as any)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-bold text-slate-900"
              >
                <option value="en">English (Official Enterprise)</option>
                <option value="km">ភាសាខ្មែរ (Khmer)</option>
                <option value="zh">中文 (Chinese)</option>
              </select>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100">
              <span className="font-bold text-slate-800 block">Automated Dispatch Alerts:</span>
              <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={emailAlerts}
                  onChange={(e) => setEmailAlerts(e.target.checked)}
                  className="w-4 h-4 text-blue-900 rounded"
                />
                <span>Email Incident & Quotation Updates</span>
              </label>

              <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={smsAlerts}
                  onChange={(e) => setSmsAlerts(e.target.checked)}
                  className="w-4 h-4 text-blue-900 rounded"
                />
                <span>SMS Emergency Panic Alerts</span>
              </label>

              <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={telegramAlerts}
                  onChange={(e) => setTelegramAlerts(e.target.checked)}
                  className="w-4 h-4 text-blue-900 rounded"
                />
                <span>Telegram Bot Patrol Wand Notifications</span>
              </label>
            </div>
          </div>

          {/* Security & 2FA */}
          <div className="bg-slate-950 text-white rounded-3xl p-6 border border-slate-800 space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-400" />
                <h3 className="font-extrabold text-sm text-white">
                  Two-Factor Authentication (2FA)
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                className={`px-3 py-1 rounded-full font-bold text-[10px] font-mono transition ${
                  twoFactorEnabled ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-slate-800 text-slate-400'
                }`}
              >
                {twoFactorEnabled ? 'ACTIVE' : 'DISABLED'}
              </button>
            </div>

            <p className="text-slate-400 leading-relaxed">
              Require a 6-digit SMS / TOTP verification token when signing into the K.N.S.K Client Portal from unrecognized IP addresses.
            </p>
          </div>

        </div>

      </form>

      {/* Audit Logs Table */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4 text-xs">
        <h3 className="font-extrabold text-base text-slate-900 font-serif border-b border-slate-100 pb-3 flex items-center gap-2">
          <Lock className="w-5 h-5 text-blue-900" />
          {getT('Session Security & Audit Logging', 'ប្រវត្តិសុវត្ថិភាពចូលប្រព័ន្ធ', '登录安全与审计日志')}
        </h3>

        <div className="space-y-2">
          {auditLogs.map((log) => (
            <div key={log.id} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <div>
                <strong className="text-slate-900 text-xs block">{log.action}</strong>
                <span className="text-[11px] text-slate-500 font-mono">IP: {log.ipAddress} • Device: {log.device}</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <span className="text-slate-400">{log.timestamp}</span>
                <span className="text-[9px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  {log.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
