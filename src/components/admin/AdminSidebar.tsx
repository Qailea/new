import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { AdminRole } from '../../types/admin';
import { ADMIN_ROLES_CONFIG } from '../../data/adminMockData';
import {
  LayoutDashboard,
  Globe,
  Briefcase,
  Newspaper,
  Image,
  FileText,
  Megaphone,
  MapPin,
  FileCheck,
  Building,
  Headphones,
  Users,
  UserCheck,
  Settings,
  Search,
  ShieldCheck,
  Database,
  Bell,
  Lock,
  ChevronRight
} from 'lucide-react';

export type AdminTab =
  | 'overview'
  | 'cms_home'
  | 'cms_services'
  | 'cms_news'
  | 'cms_gallery'
  | 'cms_docs'
  | 'cms_announcements'
  | 'ops_patrols'
  | 'ops_quotes'
  | 'ops_clients'
  | 'ops_tickets'
  | 'hr_jobs'
  | 'hr_applicants'
  | 'gov_users'
  | 'gov_settings'
  | 'gov_seo'
  | 'gov_audit'
  | 'gov_backup'
  | 'gov_notifs';

interface AdminSidebarProps {
  activeTab: AdminTab;
  onSelectTab: (tab: AdminTab) => void;
  currentRole: AdminRole;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({
  activeTab,
  onSelectTab,
  currentRole,
}) => {
  const { language } = useLanguage();
  const roleConfig = ADMIN_ROLES_CONFIG[currentRole] || ADMIN_ROLES_CONFIG.super_admin;
  const perms = roleConfig.permissions;

  // Menu groups with permissions check
  const menuGroups = [
    {
      groupTitleEn: 'DASHBOARD & ANALYTICS',
      groupTitleKm: 'ផ្ទាំងបញ្ជាការ និង ស្ថិតិ',
      items: [
        { id: 'overview', labelEn: 'Executive Dashboard', labelKm: 'សង្ខេបប្រតិបត្តិការ', icon: LayoutDashboard, allowed: perms.dashboard },
      ],
    },
    {
      groupTitleEn: 'CONTENT MANAGEMENT (CMS)',
      groupTitleKm: 'ការគ្រប់គ្រងមាតិកាវេបសាយ',
      items: [
        { id: 'cms_home', labelEn: 'Homepage Editor', labelKm: 'ទំព័រដើម (Homepage)', icon: Globe, allowed: perms.cms },
        { id: 'cms_services', labelEn: 'Services & Specs', labelKm: 'សេវាកម្មសន្តិសុខ', icon: Briefcase, allowed: perms.cms },
        { id: 'cms_news', labelEn: 'News & Media', labelKm: 'ព័ត៌មាន និង ព្រឹត្តិការណ៍', icon: Newspaper, allowed: perms.cms },
        { id: 'cms_gallery', labelEn: 'Photo & Video Gallery', labelKm: 'បណ្ណាល័យរូបភាព និង វីដេអូ', icon: Image, allowed: perms.cms },
        { id: 'cms_docs', labelEn: 'Document & Download Center', labelKm: 'ឯកសារទាញយក និង SOP', icon: FileText, allowed: perms.cms },
        { id: 'cms_announcements', labelEn: 'Announcement & Banners', labelKm: 'សារប្រកាស និង បដា', icon: Megaphone, allowed: perms.cms },
      ],
    },
    {
      groupTitleEn: 'OPERATIONS & CLIENTS',
      groupTitleKm: 'ប្រតិបត្តិការ និង អតិថិជន',
      items: [
        { id: 'ops_patrols', labelEn: 'Guards & GPS Patrols', labelKm: 'សន្តិសុខ និង ការល្បាត GPS', icon: MapPin, allowed: perms.operations },
        { id: 'ops_quotes', labelEn: 'Quotations & Proposals', labelKm: 'សំណើរសុំសម្រង់តម្លៃ', icon: FileCheck, allowed: perms.finance || perms.operations },
        { id: 'ops_clients', labelEn: 'Client Accounts Directory', labelKm: 'បញ្ជីឈ្មោះអតិថិជន', icon: Building, allowed: perms.finance || perms.operations },
        { id: 'ops_tickets', labelEn: 'Support Tickets & Helpdesk', labelKm: 'សំបុត្រជំនួយអតិថិជន', icon: Headphones, allowed: perms.operations },
      ],
    },
    {
      groupTitleEn: 'HUMAN RESOURCES (HR)',
      groupTitleKm: 'ធនធានមនុស្ស និង ចុះឈ្មោះ',
      items: [
        { id: 'hr_jobs', labelEn: 'Job Openings & Specs', labelKm: 'ការប្រកាសរើសបុគ្គលិក', icon: Briefcase, allowed: perms.hr },
        { id: 'hr_applicants', labelEn: 'Guard Applicants Tracking', labelKm: 'អ្នកដាក់ពាក្យស្នើសុំធ្វើការ', icon: UserCheck, allowed: perms.hr },
      ],
    },
    {
      groupTitleEn: 'SYSTEM & GOVERNANCE',
      groupTitleKm: 'ការគ្រប់គ្រងប្រព័ន្ធ និង សន្តិសុខ',
      items: [
        { id: 'gov_users', labelEn: 'User & RBAC Matrix', labelKm: 'គណនីបុគ្គលិក និង សិទ្ធិ', icon: Users, allowed: perms.users },
        { id: 'gov_settings', labelEn: 'System Settings', labelKm: 'ការកំណត់ប្រព័ន្ធ', icon: Settings, allowed: perms.settings },
        { id: 'gov_seo', labelEn: 'SEO & Meta Manager', labelKm: 'ការកំណត់ SEO & Meta', icon: Search, allowed: perms.settings || perms.cms },
        { id: 'gov_audit', labelEn: 'Audit Log & Security', labelKm: 'កំណត់ត្រាសកម្មភាព Audit Log', icon: ShieldCheck, allowed: perms.auditLogs },
        { id: 'gov_backup', labelEn: 'Database Backup & Recovery', labelKm: 'ការចម្លងទុកព័ត៌មាន Backup', icon: Database, allowed: perms.backup },
        { id: 'gov_notifs', labelEn: 'Notification Center', labelKm: 'មជ្ឈមណ្ឌលសារជូនដំណឹង', icon: Bell, allowed: perms.dashboard },
      ],
    },
  ];

  return (
    <aside className="w-full lg:w-72 bg-slate-900 border-r border-slate-800 shrink-0 p-4 space-y-6">
      {/* Current User Role Card */}
      <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 text-xs">
        <span className="text-[10px] text-slate-500 uppercase font-mono font-bold block mb-1">
          Active Role Token
        </span>
        <div className="font-extrabold text-white text-sm flex items-center justify-between">
          <span>{roleConfig.titleEn}</span>
          <span className={`text-[10px] px-2 py-0.5 rounded border ${roleConfig.badgeColor}`}>
            {roleConfig.id}
          </span>
        </div>
        <p className="text-[11px] text-slate-400 mt-1 leading-snug">
          {roleConfig.descriptionEn}
        </p>
      </div>

      {/* Nav Groups */}
      <div className="space-y-5">
        {menuGroups.map((group, idx) => (
          <div key={idx} className="space-y-1.5">
            <h3 className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider px-2">
              {language === 'km' ? group.groupTitleKm : group.groupTitleEn}
            </h3>
            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                const isAllowed = item.allowed;

                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (isAllowed) {
                        onSelectTab(item.id as AdminTab);
                      }
                    }}
                    disabled={!isAllowed}
                    className={`w-full text-left px-3 py-2.5 rounded-xl font-bold text-xs transition flex items-center justify-between group ${
                      isActive
                        ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                        : isAllowed
                        ? 'text-slate-300 hover:bg-slate-800 hover:text-white'
                        : 'text-slate-600 cursor-not-allowed opacity-60'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                      <span className="truncate">
                        {language === 'km' ? item.labelKm : item.labelEn}
                      </span>
                    </div>

                    {!isAllowed ? (
                      <Lock className="w-3.5 h-3.5 text-slate-600 shrink-0" title="Locked for current role" />
                    ) : (
                      <ChevronRight className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition ${isActive ? 'opacity-100' : ''}`} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};
