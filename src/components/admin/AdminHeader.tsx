import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { AdminRole, SystemNotificationItem } from '../../types/admin';
import { ADMIN_ROLES_CONFIG } from '../../data/adminMockData';
import {
  Radio,
  Bell,
  Search,
  Globe,
  LogOut,
  Shield,
  UserCheck,
  ChevronDown,
  CheckCircle2,
  X,
  Sparkles,
  Layers,
  AlertTriangle,
  Building
} from 'lucide-react';

interface AdminHeaderProps {
  currentRole: AdminRole;
  onChangeRole: (role: AdminRole) => void;
  onLogout: () => void;
  notifications: SystemNotificationItem[];
  onMarkNotificationRead: (id: string) => void;
  onSearchQuery?: (query: string) => void;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({
  currentRole,
  onChangeRole,
  onLogout,
  notifications,
  onMarkNotificationRead,
  onSearchQuery,
}) => {
  const { language, setLanguage } = useLanguage();
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  const roleConfig = ADMIN_ROLES_CONFIG[currentRole] || ADMIN_ROLES_CONFIG.super_admin;
  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
    if (onSearchQuery) {
      onSearchQuery(e.target.value);
    }
  };

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-30 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo & Dispatch Status */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-red-600/30 shrink-0">
            <Radio className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold bg-red-950 text-red-400 border border-red-800 px-2 py-0.5 rounded uppercase">
                HQ COMMAND CMS
              </span>
              <span className="hidden sm:inline-block text-[10px] font-bold text-emerald-400 bg-emerald-950 border border-emerald-800 px-2 py-0.5 rounded">
                25 PROVINCES LINKED
              </span>
            </div>
            <h1 className="text-base font-extrabold text-white font-serif leading-tight">
              K.N.S.K Security Operations & CMS
            </h1>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="hidden md:flex items-center max-w-xs w-full bg-slate-950 rounded-xl border border-slate-800 px-3 py-1.5 text-xs">
          <Search className="w-4 h-4 text-slate-400 shrink-0 mr-2" />
          <input
            type="text"
            value={searchVal}
            onChange={handleSearchChange}
            placeholder="Search news, guards, clients, tickets..."
            className="w-full bg-transparent text-white focus:outline-none placeholder-slate-500"
          />
        </div>

        {/* Right Controls: Role Switcher, Language, Notifications, User */}
        <div className="flex items-center gap-3">
          {/* RBAC Role Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowRoleDropdown(!showRoleDropdown)}
              className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-2 transition ${roleConfig.badgeColor}`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">{roleConfig.titleEn}</span>
              <span className="lg:hidden">{roleConfig.id.toUpperCase()}</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>

            {showRoleDropdown && (
              <div className="absolute right-0 mt-2 w-72 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2 z-50 text-xs space-y-1">
                <div className="px-3 py-2 border-b border-slate-800 font-bold text-slate-400 flex items-center justify-between">
                  <span>Switch Role (RBAC Simulation)</span>
                  <span className="text-[10px] text-red-400">11 Roles</span>
                </div>
                <div className="max-h-64 overflow-y-auto space-y-1">
                  {Object.values(ADMIN_ROLES_CONFIG).map((r) => (
                    <button
                      key={r.id}
                      onClick={() => {
                        onChangeRole(r.id);
                        setShowRoleDropdown(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-xl transition flex items-start justify-between ${
                        currentRole === r.id
                          ? 'bg-red-600 text-white font-bold'
                          : 'hover:bg-slate-800 text-slate-300'
                      }`}
                    >
                      <div>
                        <div className="font-semibold text-xs">{r.titleEn}</div>
                        <div className="text-[10px] opacity-75">{r.titleKm}</div>
                      </div>
                      {currentRole === r.id && <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Language Switcher */}
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold">
            <button
              onClick={() => setLanguage('km')}
              className={`px-2 py-0.5 rounded-lg text-[11px] transition ${
                language === 'km' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              KM
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 rounded-lg text-[11px] transition ${
                language === 'en' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('zh')}
              className={`px-2 py-0.5 rounded-lg text-[11px] transition ${
                language === 'zh' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              ZH
            </button>
          </div>

          {/* Notifications Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-300 relative transition"
              title="System Notifications"
            >
              <Bell className="w-4 h-4" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white font-bold text-[9px] rounded-full flex items-center justify-center animate-pulse">
                  {unreadCount}
                </span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-3 z-50 text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="font-extrabold text-white flex items-center gap-1.5">
                    <Bell className="w-4 h-4 text-red-500" />
                    System Alerts & Logs
                  </span>
                  <span className="text-[10px] text-slate-400">{unreadCount} Unread</span>
                </div>

                <div className="max-h-64 overflow-y-auto space-y-2">
                  {notifications.length === 0 ? (
                    <div className="text-center py-4 text-slate-500">No active notifications</div>
                  ) : (
                    notifications.map((n) => (
                      <div
                        key={n.id}
                        onClick={() => onMarkNotificationRead(n.id)}
                        className={`p-2.5 rounded-xl border text-xs cursor-pointer transition ${
                          n.read
                            ? 'bg-slate-950 border-slate-800 text-slate-400'
                            : 'bg-red-950/40 border-red-800/80 text-white font-semibold'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-red-400 font-bold">{n.title}</span>
                          <span className="text-[10px] text-slate-500">{n.timestamp}</span>
                        </div>
                        <p className="mt-1 text-[11px] text-slate-300 leading-snug">{n.message}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Logout Button */}
          <button
            onClick={onLogout}
            className="p-2 bg-red-950/60 hover:bg-red-900 text-red-300 border border-red-800 rounded-xl transition"
            title="Logout of Admin Console"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
