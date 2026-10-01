export type AdminRole =
  | 'super_admin'
  | 'ceo'
  | 'operations_manager'
  | 'hr_manager'
  | 'marketing_manager'
  | 'sales_manager'
  | 'finance_manager'
  | 'branch_manager'
  | 'content_editor'
  | 'customer_support'
  | 'readonly_user';

export interface AdminRoleConfig {
  id: AdminRole;
  titleKm: string;
  titleEn: string;
  titleZh: string;
  descriptionEn: string;
  badgeColor: string;
  permissions: {
    dashboard: boolean;
    cms: boolean;
    operations: boolean;
    hr: boolean;
    finance: boolean;
    users: boolean;
    settings: boolean;
    auditLogs: boolean;
    backup: boolean;
  };
}

export interface AdminUser {
  id: string;
  fullName: string;
  email: string;
  role: AdminRole;
  avatarUrl: string;
  assignedBranch: string;
  phone: string;
  status: 'ACTIVE' | 'SUSPENDED' | 'PENDING';
  lastLogin: string;
  twoFactorEnabled: boolean;
}

export interface CMSHeroSlide {
  id: string;
  titleKm: string;
  titleEn: string;
  titleZh: string;
  subtitleEn: string;
  ctaTextEn: string;
  ctaLink: string;
  bgImageUrl: string;
  order: number;
  active: boolean;
}

export interface CMSArticle {
  id: string;
  titleKm: string;
  titleEn: string;
  titleZh: string;
  category: 'Security Tips' | 'Company News' | 'Press Release' | 'Case Study';
  summaryEn: string;
  contentEn: string;
  imageUrl: string;
  featured: boolean;
  published: boolean;
  author: string;
  publishedAt: string;
  views: number;
}

export interface CMSGalleryItem {
  id: string;
  titleEn: string;
  category: 'Patrol' | 'VIP Escort' | 'Training' | 'Control Room' | 'Events';
  imageUrl: string;
  tags: string[];
  date: string;
}

export interface CMSVideoItem {
  id: string;
  titleEn: string;
  videoUrl: string;
  thumbnailUrl: string;
  duration: string;
  category: string;
}

export interface CMSDocument {
  id: string;
  titleEn: string;
  category: 'SOP' | 'Brochure' | 'Compliance' | 'Form' | 'Policy';
  fileSize: string;
  fileType: 'PDF' | 'DOCX' | 'ZIP';
  accessLevel: 'PUBLIC' | 'CLIENT_ONLY' | 'INTERNAL_STAFF';
  downloadCount: number;
  updatedAt: string;
  downloadUrl: string;
}

export interface CMSAnnouncement {
  id: string;
  titleEn: string;
  messageEn: string;
  type: 'emergency' | 'warning' | 'info';
  active: boolean;
  showModalPopup: boolean;
  startDate: string;
  endDate: string;
}

export interface SEOPagesConfig {
  pageId: string;
  pageName: string;
  titleKm: string;
  titleEn: string;
  titleZh: string;
  metaDescriptionEn: string;
  keywordsEn: string;
  ogImageUrl: string;
}

export interface AuditLogItem {
  id: string;
  timestamp: string;
  userId: string;
  userName: string;
  role: AdminRole;
  action: string;
  module: string;
  ipAddress: string;
  status: 'SUCCESS' | 'FAILED' | 'WARNING';
}

export interface SystemBackupRecord {
  id: string;
  createdAt: string;
  sizeMb: number;
  type: 'FULL_SNAPSHOT' | 'DATABASE_ONLY' | 'MEDIA_ARCHIVE';
  createdBy: string;
  status: 'COMPLETED' | 'IN_PROGRESS' | 'FAILED';
  downloadUrl: string;
}

export interface SystemNotificationItem {
  id: string;
  timestamp: string;
  type: 'incident' | 'application' | 'quotation' | 'security' | 'system';
  title: string;
  message: string;
  read: boolean;
  priority: 'high' | 'medium' | 'low';
  actionUrl?: string;
}

export interface ClientDirectoryItem {
  id: string;
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  province: string;
  assignedGuards: number;
  contractStartDate: string;
  contractEndDate: string;
  monthlyFeeUSD: number;
  status: 'ACTIVE' | 'PENDING_RENEWAL' | 'SUSPENDED';
}

export interface SupportTicketItem {
  id: string;
  ticketNo: string;
  clientName: string;
  subject: string;
  category: 'Guard Incident' | 'Billing' | 'Schedule Request' | 'Equipment' | 'General';
  priority: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  status: 'NEW' | 'IN_PROGRESS' | 'RESOLVED';
  createdAt: string;
  assignedTo: string;
}
