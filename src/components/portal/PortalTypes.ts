import { MultilingualText } from '../../types';

export type PortalTab = 
  | 'dashboard'
  | 'quotations'
  | 'service_requests'
  | 'incidents'
  | 'communication'
  | 'documents'
  | 'service_status'
  | 'notifications'
  | 'profile'
  | 'support'
  | 'future_roadmap';

export interface ClientAccountInfo {
  id: string;
  clientCode: string;
  companyName: MultilingualText;
  contactPerson: string;
  title: string;
  email: string;
  phone: string;
  address: MultilingualText;
  contractStatus: 'ACTIVE' | 'PENDING_RENEWAL' | 'UNDER_REVIEW';
  contractNumber: string;
  startDate: string;
  assignedGuardsCount: number;
  assignedSupervisor: {
    name: string;
    phone: string;
    badge: string;
    photoUrl?: string;
  };
  opsTeam: {
    commanderName: string;
    commanderPhone: string;
    hotline247: string;
    controlRoomCode: string;
  };
  commPreferences: {
    emailAlerts: boolean;
    smsAlerts: boolean;
    telegramAlerts: boolean;
    preferredLanguage: 'en' | 'km' | 'zh';
  };
}

export interface QuotationItem {
  id: string;
  refNumber: string;
  title: MultilingualText;
  serviceType: MultilingualText;
  guardCount: number;
  location: MultilingualText;
  submittedDate: string;
  estimatedCost: string;
  status: 'DRAFT' | 'SUBMITTED' | 'UNDER_REVIEW' | 'APPROVED' | 'REJECTED';
  notes?: MultilingualText;
}

export interface ServiceRequestItem {
  id: string;
  refNumber: string;
  category: 'additional_guards' | 'temp_guards' | 'shift_change' | 'special_event' | 'emergency_deployment' | 'guard_replacement' | 'uniform_equipment';
  title: MultilingualText;
  details: MultilingualText;
  guardsRequested: number;
  requestedDate: string;
  priority: 'NORMAL' | 'HIGH' | 'URGENT_EMERGENCY';
  status: 'PENDING' | 'DISPATCHED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
  assignedCommander?: string;
}

export interface IncidentReportItem {
  id: string;
  refNumber: string;
  type: 'security_incident' | 'emergency' | 'safety_concern' | 'complaint' | 'suggestion';
  title: MultilingualText;
  location: MultilingualText;
  dateReported: string;
  timeReported: string;
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  status: 'OPEN' | 'UNDER_INVESTIGATION' | 'RESOLVED' | 'CLOSED';
  description: MultilingualText;
  actionsTaken?: MultilingualText;
  hasPhotos: boolean;
  photoCount?: number;
}

export interface PortalMessage {
  id: string;
  threadId: string;
  channel: 'operations' | 'sales' | 'customer_service';
  sender: 'client' | 'knsk_staff';
  senderName: string;
  senderRole: string;
  message: MultilingualText;
  timestamp: string;
  read: boolean;
  attachmentName?: string;
}

export interface PortalDocument {
  id: string;
  category: 'agreements' | 'invoices' | 'patrol_reports' | 'safety' | 'company' | 'announcements';
  title: MultilingualText;
  fileName: string;
  fileSize: string;
  uploadDate: string;
  downloadUrl?: string;
}

export interface PortalNotification {
  id: string;
  category: 'announcements' | 'service_updates' | 'quotation_updates' | 'recruitment' | 'holiday' | 'system';
  title: MultilingualText;
  content: MultilingualText;
  date: string;
  read: boolean;
  priority: 'NORMAL' | 'IMPORTANT' | 'HIGH_ALERT';
}

export interface SupportTicket {
  id: string;
  ticketId: string;
  topic: 'quotation' | 'billing' | 'operations' | 'emergency' | 'recruitment' | 'general';
  subject: MultilingualText;
  message: MultilingualText;
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED';
  createdDate: string;
  lastUpdated: string;
}

export interface AuditLogItem {
  id: string;
  timestamp: string;
  action: string;
  ipAddress: string;
  device: string;
  status: 'SUCCESS' | 'WARNING';
}
