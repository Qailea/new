import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import { AdminRole, SystemNotificationItem } from '../../types/admin';
import { INITIAL_NOTIFICATIONS } from '../../data/adminMockData';

import { AdminLogin } from './AdminLogin';
import { AdminHeader } from './AdminHeader';
import { AdminSidebar, AdminTab } from './AdminSidebar';
import { AdminDashboardOverview } from './AdminDashboardOverview';
import { AdminCMSSection } from './AdminCMSSection';
import { AdminOperationsSection } from './AdminOperationsSection';
import { AdminHRSection } from './AdminHRSection';
import { AdminSystemGovernance } from './AdminSystemGovernance';

export const AdminDashboard: React.FC = () => {
  const { language } = useLanguage();
  const { role, loginAsAdmin, logout } = useAuth();

  // Active admin role (default: super_admin)
  const [currentAdminRole, setCurrentAdminRole] = useState<AdminRole>('super_admin');
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');

  // Notifications
  const [notifications, setNotifications] = useState<SystemNotificationItem[]>(INITIAL_NOTIFICATIONS);

  const handleMarkNotificationRead = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const handleAddNotification = (newNotif: SystemNotificationItem) => {
    setNotifications([newNotif, ...notifications]);
  };

  // Login handler
  const handleLoginSuccess = (passcode: string, selectedRole: AdminRole) => {
    setCurrentAdminRole(selectedRole);
    loginAsAdmin(passcode);
  };

  // If user not authenticated as admin in AuthContext
  if (role !== 'admin') {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Top Header */}
      <AdminHeader
        currentRole={currentAdminRole}
        onChangeRole={(r) => setCurrentAdminRole(r)}
        onLogout={logout}
        notifications={notifications}
        onMarkNotificationRead={handleMarkNotificationRead}
      />

      {/* Main Container with Sidebar + Dynamic View */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <AdminSidebar
          activeTab={activeTab}
          onSelectTab={(tab) => setActiveTab(tab)}
          currentRole={currentAdminRole}
        />

        {/* Content Area */}
        <main className="flex-1 min-w-0">
          {activeTab === 'overview' && (
            <AdminDashboardOverview onNavigateTab={(tab) => setActiveTab(tab)} />
          )}

          {(activeTab === 'cms_home' ||
            activeTab === 'cms_services' ||
            activeTab === 'cms_news' ||
            activeTab === 'cms_gallery' ||
            activeTab === 'cms_docs' ||
            activeTab === 'cms_announcements') && (
            <AdminCMSSection subTab={activeTab} />
          )}

          {(activeTab === 'ops_patrols' ||
            activeTab === 'ops_quotes' ||
            activeTab === 'ops_clients' ||
            activeTab === 'ops_tickets') && (
            <AdminOperationsSection subTab={activeTab} />
          )}

          {(activeTab === 'hr_jobs' || activeTab === 'hr_applicants') && (
            <AdminHRSection subTab={activeTab} />
          )}

          {(activeTab === 'gov_users' ||
            activeTab === 'gov_settings' ||
            activeTab === 'gov_seo' ||
            activeTab === 'gov_audit' ||
            activeTab === 'gov_backup' ||
            activeTab === 'gov_notifs') && (
            <AdminSystemGovernance
              subTab={activeTab}
              notifications={notifications}
              onAddNotification={handleAddNotification}
            />
          )}
        </main>
      </div>
    </div>
  );
};
