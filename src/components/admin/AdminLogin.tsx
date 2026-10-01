import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { AdminRole } from '../../types/admin';
import { ADMIN_ROLES_CONFIG } from '../../data/adminMockData';
import {
  ShieldAlert,
  Radio,
  Lock,
  Globe,
  KeyRound,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  X,
  Mail,
  Send,
  Building2,
  Users
} from 'lucide-react';

interface AdminLoginProps {
  onLoginSuccess: (passcode: string, role: AdminRole) => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess }) => {
  const { t, language, setLanguage } = useLanguage();
  const [passcode, setPasscode] = useState('KNSK-ADMIN-HQ');
  const [selectedRole, setSelectedRole] = useState<AdminRole>('super_admin');
  const [rememberMe, setRememberMe] = useState(true);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSent, setForgotSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passcode.trim()) {
      setErrorMessage(
        language === 'km'
          ? 'សូមបញ្ចូលលេខកូដសម្ងាត់'
          : language === 'zh'
          ? '请输入访问代码'
          : 'Please enter command passcode.'
      );
      return;
    }
    setErrorMessage('');
    onLoginSuccess(passcode, selectedRole);
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (forgotEmail) {
      setForgotSent(true);
      setTimeout(() => {
        setForgotSent(false);
        setShowForgotModal(false);
        setForgotEmail('');
      }, 3000);
    }
  };

  return (
    <div className="py-16 bg-slate-950 text-slate-100 min-h-[85vh] flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-red-950/40 p-6 sm:p-8 border-b border-slate-800 text-center relative">
          {/* Language Switcher */}
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-slate-950/80 px-2.5 py-1 rounded-xl border border-slate-800 text-xs">
            <Globe className="w-3.5 h-3.5 text-slate-400" />
            <button
              onClick={() => setLanguage('km')}
              className={`px-1.5 py-0.5 rounded text-[11px] font-bold ${
                language === 'km' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              KM
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-1.5 py-0.5 rounded text-[11px] font-bold ${
                language === 'en' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('zh')}
              className={`px-1.5 py-0.5 rounded text-[11px] font-bold ${
                language === 'zh' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              ZH
            </button>
          </div>

          <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center mx-auto shadow-xl shadow-red-600/30 mb-4 animate-pulse">
            <Radio className="w-9 h-9" />
          </div>

          <span className="text-[11px] font-mono font-bold text-red-400 bg-red-950 border border-red-800 px-3 py-1 rounded-full inline-block uppercase tracking-wider mb-2">
            RESTRICTED ENTERPRISE PORTAL
          </span>
          <h1 className="text-2xl font-extrabold text-white font-serif">
            K.N.S.K Command & CMS System
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            {language === 'km'
              ? 'ប្រព័ន្ធគ្រប់គ្រងសន្តិសុខ និង មាតិកាអគ្គនាយកដ្ឋាន K.N.S.K'
              : language === 'zh'
              ? 'K.N.S.K 安保与内容管理企业系统'
              : 'Authorized Command Personnel & Executive Management Portal'}
          </p>
        </div>

        {/* Login Form */}
        <div className="p-6 sm:p-8 space-y-6">
          {errorMessage && (
            <div className="p-3 bg-red-950/80 border border-red-800 text-red-200 text-xs rounded-xl flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Role Demo Preset Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-red-400" />
                  {language === 'km'
                    ? 'ជ្រើសរើសតួនាទីគ្រប់គ្រង (RBAC Demo Role)'
                    : language === 'zh'
                    ? '选择管理角色 (RBAC Demo)'
                    : 'Select Admin Role (RBAC Simulation)'}
                </span>
                <span className="text-[10px] text-slate-500">11 Roles Configured</span>
              </label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value as AdminRole)}
                className="w-full px-3.5 py-2.5 text-xs font-bold bg-slate-950 border border-slate-800 rounded-xl focus:ring-2 focus:ring-red-600 focus:outline-none text-white"
              >
                {Object.values(ADMIN_ROLES_CONFIG).map((roleItem) => (
                  <option key={roleItem.id} value={roleItem.id}>
                    {roleItem.titleEn} — ({roleItem.titleKm})
                  </option>
                ))}
              </select>
              <div className="mt-1.5 p-2.5 bg-slate-950/80 rounded-lg border border-slate-800 text-[11px] text-slate-400">
                <span className="font-semibold text-slate-300">Selected Permission Scope: </span>
                {ADMIN_ROLES_CONFIG[selectedRole]?.descriptionEn}
              </div>
            </div>

            {/* Passcode Input */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <KeyRound className="w-3.5 h-3.5 text-red-400" />
                  {language === 'km'
                    ? 'លេខកូដសម្ងាត់ប្រតិបត្តិការ (Command Passcode)'
                    : language === 'zh'
                    ? '指令通行码'
                    : 'Command Passcode *'}
                </span>
                <button
                  type="button"
                  onClick={() => setShowForgotModal(true)}
                  className="text-[11px] text-red-400 hover:underline flex items-center gap-1"
                >
                  <HelpCircle className="w-3 h-3" />
                  Forgot Passcode?
                </button>
              </label>
              <input
                type="password"
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter passcode..."
                className="w-full px-4 py-3 text-sm font-mono font-bold bg-slate-950 border border-slate-800 rounded-xl focus:ring-2 focus:ring-red-600 focus:outline-none text-white"
              />
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer text-slate-400 hover:text-slate-200">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded bg-slate-950 border-slate-800 text-red-600 focus:ring-red-600"
                />
                <span>Remember session credentials on this station</span>
              </label>
            </div>

            {/* Login Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg shadow-red-600/30 transition flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              {language === 'km'
                ? 'ចូលទៅកាន់ប្រព័ន្ធគ្រប់គ្រង'
                : language === 'zh'
                ? '进入管理系统'
                : 'Access Enterprise Command System'}
            </button>
          </form>

          {/* Quick Demo Credentials Footer */}
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-center text-[11px] text-slate-400 space-y-1">
            <div>
              Demo Command Passcode:{' '}
              <code className="bg-slate-900 text-slate-200 font-mono font-bold px-2 py-0.5 rounded border border-slate-800">
                KNSK-ADMIN-HQ
              </code>
            </div>
            <div className="text-slate-500 text-[10px]">
              Supports instant login as Super Admin, CEO, Operations, HR, Sales, Finance, etc.
            </div>
          </div>
        </div>

        {/* Security Compliance Footer */}
        <div className="bg-slate-950 p-4 border-t border-slate-800 text-center text-[10px] text-slate-500 font-mono space-y-1">
          <div className="flex items-center justify-center gap-1.5 text-slate-400">
            <ShieldAlert className="w-3.5 h-3.5 text-red-500" />
            <span>K.N.S.K CYBER SECURITY DEFENSE PROTOCOL v4.2</span>
          </div>
          <p>All login attempts, IP signatures, and session tokens are logged for compliance auditing.</p>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl border border-slate-800 max-w-md w-full p-6 space-y-4 shadow-2xl relative">
            <button
              onClick={() => setShowForgotModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-red-950 text-red-400 rounded-xl border border-red-800">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-base font-serif">Command Passcode Recovery</h3>
                <p className="text-xs text-slate-400">Request temporary passkey from IT Security Desk</p>
              </div>
            </div>

            {forgotSent ? (
              <div className="p-4 bg-emerald-950/80 border border-emerald-800 text-emerald-300 rounded-xl text-xs space-y-1 text-center">
                <CheckCircle2 className="w-6 h-6 mx-auto text-emerald-400 mb-1 animate-bounce" />
                <p className="font-bold">Recovery Dispatch Request Sent!</p>
                <p className="text-slate-300 text-[11px]">
                  Check your registered staff email for passkey authorization link.
                </p>
              </div>
            ) : (
              <form onSubmit={handleForgotSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">Staff Official Email Address *</label>
                  <input
                    type="email"
                    required
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    placeholder="e.g. officer@knsksecurity.com.kh"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-400 space-y-1">
                  <span className="font-bold text-slate-300">Security Requirement:</span>
                  <p>Passcode resets require secondary approval from the Super Admin or IT Security Director.</p>
                </div>

                <div className="flex gap-2 justify-end">
                  <button
                    type="button"
                    onClick={() => setShowForgotModal(false)}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Request Recovery Code
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
