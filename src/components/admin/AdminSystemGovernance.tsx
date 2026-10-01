import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  AdminUser,
  AdminRole,
  SEOPagesConfig,
  AuditLogItem,
  SystemBackupRecord,
  SystemNotificationItem,
} from '../../types/admin';
import {
  ADMIN_ROLES_CONFIG,
  INITIAL_ADMIN_USERS,
  INITIAL_SEO_PAGES,
  INITIAL_AUDIT_LOGS,
  INITIAL_BACKUPS,
  INITIAL_NOTIFICATIONS,
} from '../../data/adminMockData';
import {
  Users,
  Settings,
  Search,
  ShieldCheck,
  Database,
  Bell,
  Plus,
  Edit2,
  Trash2,
  Lock,
  KeyRound,
  Download,
  Upload,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
  Send,
  Mail,
  Phone,
  Globe,
  Sliders,
  X
} from 'lucide-react';

interface AdminSystemGovernanceProps {
  subTab: 'gov_users' | 'gov_settings' | 'gov_seo' | 'gov_audit' | 'gov_backup' | 'gov_notifs';
  notifications: SystemNotificationItem[];
  onAddNotification: (notif: SystemNotificationItem) => void;
}

export const AdminSystemGovernance: React.FC<AdminSystemGovernanceProps> = ({
  subTab,
  notifications,
  onAddNotification,
}) => {
  const { language } = useLanguage();

  // Governance states
  const [users, setUsers] = useState<AdminUser[]>(INITIAL_ADMIN_USERS);
  const [seoPages, setSeoPages] = useState<SEOPagesConfig[]>(INITIAL_SEO_PAGES);
  const [auditLogs, setAuditLogs] = useState<AuditLogItem[]>(INITIAL_AUDIT_LOGS);
  const [backups, setBackups] = useState<SystemBackupRecord[]>(INITIAL_BACKUPS);

  // Settings State
  const [siteTitleEn, setSiteTitleEn] = useState('K.N.S.K Private Security Digital Platform');
  const [contactPhone, setContactPhone] = useState('096 483 8666');
  const [emergencyPhone, setEmergencyPhone] = useState('093 878 666 / 060 878 666');
  const [contactEmail, setContactEmail] = useState('soengknsk@gmail.com');
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [smtpStatus, setSmtpStatus] = useState<string | null>(null);

  // User Edit Modal
  const [showUserModal, setShowUserModal] = useState(false);
  const [editingUser, setEditingUser] = useState<AdminUser | null>(null);

  // Notification broadcast input
  const [notifTitle, setNotifTitle] = useState('');
  const [notifMsg, setNotifMsg] = useState('');

  // Handle Backup Creation
  const handleCreateBackup = () => {
    const newBkp: SystemBackupRecord = {
      id: `BKP-${Date.now()}-MANUAL`,
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 19),
      sizeMb: 146.5,
      type: 'FULL_SNAPSHOT',
      createdBy: 'Manual Super Admin Request',
      status: 'COMPLETED',
      downloadUrl: '#',
    };
    setBackups([newBkp, ...backups]);

    // Create JSON download
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify({ users, seoPages, backups, timestamp: new Date() }, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `KNSK_SECURITY_BACKUP_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="space-y-8">
      {/* 1. USER & RBAC MANAGEMENT */}
      {subTab === 'gov_users' && (
        <div className="space-y-6">
          <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl flex items-center justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-white font-serif flex items-center gap-2">
                <Users className="w-5 h-5 text-red-500" />
                Staff User Accounts & RBAC Matrix
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Manage staff accounts, assign 11 fine-grained roles, force password resets, and audit access.
              </p>
            </div>
            <button
              onClick={() => {
                setEditingUser({
                  id: `USR-${Date.now()}`,
                  fullName: 'New Staff Officer',
                  email: 'officer@knsksecurity.com.kh',
                  role: 'content_editor',
                  avatarUrl: '',
                  assignedBranch: 'Phnom Penh HQ',
                  phone: '012 000 111',
                  status: 'ACTIVE',
                  lastLogin: 'Never',
                  twoFactorEnabled: true,
                });
                setShowUserModal(true);
              }}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow flex items-center gap-1.5 transition"
            >
              <Plus className="w-4 h-4" /> Add Staff Member
            </button>
          </div>

          {/* User Table */}
          <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 font-bold border-b border-slate-800 uppercase">
                  <tr>
                    <th className="p-4">Staff Member</th>
                    <th className="p-4">Assigned Role</th>
                    <th className="p-4">Branch Post</th>
                    <th className="p-4">2FA Security</th>
                    <th className="p-4">Last Active</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {users.map((u) => {
                    const rConfig = ADMIN_ROLES_CONFIG[u.role] || ADMIN_ROLES_CONFIG.super_admin;
                    return (
                      <tr key={u.id} className="hover:bg-slate-950/50 transition">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            {u.avatarUrl ? (
                              <img
                                src={u.avatarUrl}
                                alt={u.fullName}
                                className="w-9 h-9 rounded-xl object-cover border border-slate-800 shrink-0"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                }}
                              />
                            ) : (
                              <div className="w-9 h-9 rounded-xl bg-slate-800 text-blue-400 border border-slate-700 flex items-center justify-center font-bold text-xs shrink-0">
                                {u.fullName.replace(/^(Gen\.|Lok Oknha|Col\.|Mrs\.|Mr\.)\s*/, '').split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                              </div>
                            )}
                            <div>
                              <div className="font-bold text-white text-sm">{u.fullName}</div>
                              <div className="text-[10px] text-slate-400">{u.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border ${rConfig.badgeColor}`}>
                            {rConfig.titleEn}
                          </span>
                        </td>
                        <td className="p-4">{u.assignedBranch}</td>
                        <td className="p-4 font-mono">
                          {u.twoFactorEnabled ? (
                            <span className="text-emerald-400 font-bold">✓ Enabled</span>
                          ) : (
                            <span className="text-amber-400">Disabled</span>
                          )}
                        </td>
                        <td className="p-4 font-mono text-[11px] text-slate-400">{u.lastLogin}</td>
                        <td className="p-4 text-right space-x-2">
                          <button
                            onClick={() => {
                              setEditingUser(u);
                              setShowUserModal(true);
                            }}
                            className="p-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg"
                            title="Edit User"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 2. SYSTEM SETTINGS */}
      {subTab === 'gov_settings' && (
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-6 shadow-xl text-xs text-slate-100">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-xl font-extrabold text-white font-serif flex items-center gap-2">
              <Settings className="w-5 h-5 text-red-500" />
              General System Settings & Connectivity
            </h2>
            <p className="text-xs text-slate-400">Configure global site branding, emergency hotlines, and maintenance modes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-slate-300 font-bold mb-1">Platform Brand Title (English) *</label>
                <input
                  type="text"
                  value={siteTitleEn}
                  onChange={(e) => setSiteTitleEn(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">Main Reception Phone Hotline *</label>
                <input
                  type="text"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">24/7 Tactical Emergency Hotline *</label>
                <input
                  type="text"
                  value={emergencyPhone}
                  onChange={(e) => setEmergencyPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
                <h3 className="font-bold text-white text-sm flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-amber-400" /> Maintenance Mode Switch
                </h3>
                <p className="text-slate-400 text-[11px]">
                  Activating maintenance mode displays a compliance maintenance banner to public visitors while command staff remain logged in.
                </p>
                <button
                  type="button"
                  onClick={() => setMaintenanceMode(!maintenanceMode)}
                  className={`px-4 py-2 rounded-xl font-bold border transition ${
                    maintenanceMode ? 'bg-red-600 text-white border-red-500' : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}
                >
                  Maintenance Mode: {maintenanceMode ? 'ENABLED (SITE LOCKED)' : 'DISABLED (LIVE)'}
                </button>
              </div>

              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
                <h3 className="font-bold text-white text-sm flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" /> SMTP Email Server Connectivity
                </h3>
                <button
                  type="button"
                  onClick={() => setSmtpStatus('SMTP Relay Test Succeeded! Port 587 SSL Active.')}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold"
                >
                  Test System SMTP Connection
                </button>
                {smtpStatus && <p className="text-emerald-400 font-mono text-[11px]">{smtpStatus}</p>}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. SEO & META MANAGEMENT */}
      {subTab === 'gov_seo' && (
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-6 shadow-xl text-xs text-slate-100">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-xl font-extrabold text-white font-serif flex items-center gap-2">
              <Search className="w-5 h-5 text-red-500" />
              Search Engine Optimization (SEO) & Meta Tags
            </h2>
            <p className="text-xs text-slate-400">Optimize meta titles, descriptions, and OpenGraph tags per page for Google indexing.</p>
          </div>

          <div className="space-y-4">
            {seoPages.map((page) => (
              <div key={page.pageId} className="p-5 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-white text-sm">{page.pageName}</span>
                  <span className="font-mono text-slate-500">/{page.pageId}</span>
                </div>

                <div className="space-y-2">
                  <div>
                    <label className="text-slate-400 text-[10px] font-bold block">Meta Title (English)</label>
                    <input
                      type="text"
                      value={page.titleEn}
                      onChange={(e) => {
                        const val = e.target.value;
                        setSeoPages(seoPages.map((p) => (p.pageId === page.pageId ? { ...p, titleEn: val } : p)));
                      }}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white font-semibold"
                    />
                  </div>

                  <div>
                    <label className="text-slate-400 text-[10px] font-bold block">Meta Description</label>
                    <textarea
                      rows={2}
                      value={page.metaDescriptionEn}
                      onChange={(e) => {
                        const val = e.target.value;
                        setSeoPages(seoPages.map((p) => (p.pageId === page.pageId ? { ...p, metaDescriptionEn: val } : p)));
                      }}
                      className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white"
                    ></textarea>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. AUDIT LOG & SECURITY CENTER */}
      {subTab === 'gov_audit' && (
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-6 shadow-xl text-xs">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-xl font-extrabold text-white font-serif flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-red-500" />
                Security Audit Log & Activity Stream
              </h2>
              <p className="text-xs text-slate-400">Tamper-evident record of all command logins, role updates, and CMS edits.</p>
            </div>
          </div>

          <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden">
            <table className="w-full text-left text-slate-300">
              <thead className="bg-slate-900 text-slate-400 font-bold border-b border-slate-800 uppercase text-[10px]">
                <tr>
                  <th className="p-3">Timestamp</th>
                  <th className="p-3">Officer / User</th>
                  <th className="p-3">Action</th>
                  <th className="p-3">Module</th>
                  <th className="p-3">IP Signature</th>
                  <th className="p-3">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {auditLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-900/50">
                    <td className="p-3 font-mono text-[11px] text-slate-400">{log.timestamp}</td>
                    <td className="p-3 font-bold text-white">{log.userName}</td>
                    <td className="p-3 font-mono text-red-400">{log.action}</td>
                    <td className="p-3">{log.module}</td>
                    <td className="p-3 font-mono text-slate-400">{log.ipAddress}</td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        log.status === 'SUCCESS' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-red-950 text-red-400 border border-red-800'
                      }`}>
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 5. DATABASE BACKUP & RECOVERY */}
      {subTab === 'gov_backup' && (
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-6 shadow-xl text-xs text-slate-100">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-xl font-extrabold text-white font-serif flex items-center gap-2">
                <Database className="w-5 h-5 text-red-500" />
                Database Snapshot Backup & Recovery
              </h2>
              <p className="text-xs text-slate-400">Export platform snapshots and verify automated nightly backups.</p>
            </div>
            <button
              onClick={handleCreateBackup}
              className="px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow-lg flex items-center gap-1.5 transition"
            >
              <Download className="w-4 h-4" /> Create Manual Backup Now
            </button>
          </div>

          <div className="space-y-3">
            {backups.map((bkp) => (
              <div key={bkp.id} className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-red-400">{bkp.id}</span>
                    <span className="bg-slate-900 text-slate-300 px-2 py-0.5 rounded text-[10px] font-bold border border-slate-800">
                      {bkp.type} ({bkp.sizeMb} MB)
                    </span>
                  </div>
                  <p className="text-slate-400 mt-1">Created: {bkp.createdAt} • Creator: {bkp.createdBy}</p>
                </div>
                <span className="text-emerald-400 font-bold bg-emerald-950 border border-emerald-800 px-3 py-1 rounded-xl">
                  {bkp.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. NOTIFICATION CENTER */}
      {subTab === 'gov_notifs' && (
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-6 shadow-xl text-xs text-slate-100">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-xl font-extrabold text-white font-serif flex items-center gap-2">
              <Bell className="w-5 h-5 text-red-500" />
              Notification Center & Announcement Broadcast
            </h2>
            <p className="text-xs text-slate-400">Dispatch system alerts to command personnel and client portal users.</p>
          </div>

          <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="font-bold text-white text-sm">Dispatch Platform Notification Alert</h3>
            <div className="space-y-3">
              <input
                type="text"
                value={notifTitle}
                onChange={(e) => setNotifTitle(e.target.value)}
                placeholder="Alert Title e.g. Weather Advisory Sihanoukville Port"
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white"
              />
              <textarea
                rows={2}
                value={notifMsg}
                onChange={(e) => setNotifMsg(e.target.value)}
                placeholder="Alert message body details..."
                className="w-full p-3 bg-slate-900 border border-slate-800 rounded-xl text-white"
              ></textarea>
              <button
                onClick={() => {
                  if (notifTitle) {
                    onAddNotification({
                      id: `NOTIF-${Date.now()}`,
                      timestamp: 'Just now',
                      type: 'system',
                      title: notifTitle,
                      message: notifMsg,
                      read: false,
                      priority: 'high',
                    });
                    setNotifTitle('');
                    setNotifMsg('');
                  }
                }}
                className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl flex items-center gap-1.5"
              >
                <Send className="w-4 h-4" /> Broadcast System Alert
              </button>
            </div>
          </div>
        </div>
      )}

      {/* User Edit Modal */}
      {showUserModal && editingUser && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-3xl border border-slate-800 max-w-lg w-full p-6 space-y-4 shadow-2xl relative text-xs text-slate-100">
            <button onClick={() => setShowUserModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-base font-extrabold text-white font-serif">Configure Staff Account & RBAC Role</h3>

            <div className="space-y-3">
              <div>
                <label className="block text-slate-300 font-bold mb-1">Full Name *</label>
                <input
                  type="text"
                  value={editingUser.fullName}
                  onChange={(e) => setEditingUser({ ...editingUser, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">Email Address *</label>
                <input
                  type="email"
                  value={editingUser.email}
                  onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">Assigned RBAC Role *</label>
                <select
                  value={editingUser.role}
                  onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value as AdminRole })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white font-bold"
                >
                  {Object.values(ADMIN_ROLES_CONFIG).map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.titleEn} ({r.titleKm})
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-2 justify-end pt-4 border-t border-slate-800">
                <button onClick={() => setShowUserModal(false)} className="px-4 py-2 bg-slate-800 text-slate-300 rounded-xl font-bold">
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setUsers([editingUser, ...users.filter((u) => u.id !== editingUser.id)]);
                    setShowUserModal(false);
                  }}
                  className="px-4 py-2 bg-red-600 text-white rounded-xl font-bold flex items-center gap-1"
                >
                  <CheckCircle2 className="w-4 h-4" /> Save Staff Credentials
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
