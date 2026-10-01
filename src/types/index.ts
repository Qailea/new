export type Language = 'km' | 'en' | 'zh';

export interface MultilingualText {
  en?: string;
  km?: string;
  zh?: string;
  [key: string]: any;
}

export type UserRole = 'guest' | 'client' | 'verifier' | 'admin';

export interface ServiceItem {
  id: string;
  titleKey: string;
  shortDescKey: string;
  fullDescKey: string;
  iconName: string;
  features: string[];
  recommendedFor: string[];
  bgImage?: string;
}

export interface ProvinceData {
  id: string;
  nameKm: string;
  nameEn: string;
  nameZh: string;
  stationName: string;
  activeGuards: number;
  clientCount: number;
  regionalDirector: string;
  phone: string;
  address: string;
  isMainHub?: boolean;
}

export interface GuardVerificationResult {
  guardId: string;
  fullName: string;
  rank: string;
  assignedSite: string;
  province: string;
  status: 'ACTIVE' | 'ON_LEAVE' | 'INACTIVE';
  issueDate: string;
  expiryDate: string;
  clearanceLevel: string;
  badgeNumber: string;
  photoUrl: string;
}

export interface CompanyLicenseDetails {
  licenseNumber: string;
  issuingBody: string;
  issuingMinistry: string;
  issueDate: string;
  expiryDate: string;
  status: 'VALID_AND_VERIFIED' | 'UNDER_RENEWAL';
  taxIdentificationNumber: string;
  commercialRegNumber: string;
  legalRepresentative: string;
}

export interface QuotationRequest {
  id: string;
  clientName: string;
  companyName: string;
  phone: string;
  email: string;
  province: string;
  facilityType: 'commercial' | 'industrial' | 'residential' | 'bank' | 'event' | 'embassy';
  guardCount: number;
  shiftType: '24_7' | 'day_only' | 'night_only' | 'custom';
  extraServices: string[];
  estimatedMonthlyCostUSD: number;
  status: 'PENDING' | 'CONTACTED' | 'APPROVED';
  createdAt: string;
}

export interface RecruitmentApplication {
  id: string;
  fullName: string;
  gender: 'male' | 'female';
  phone: string;
  age: number;
  provinceOfOrigin: string;
  preferredWorkProvince: string;
  militaryOrPoliceExp: boolean;
  educationLevel: string;
  heightCm: number;
  weightKg: number;
  status: 'SUBMITTED' | 'UNDER_REVIEW' | 'INTERVIEW_SCHEDULED';
  submittedAt: string;
}

export interface IncidentReport {
  id: string;
  siteName: string;
  province: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  title: string;
  description: string;
  reportedByGuard: string;
  timeReported: string;
  status: 'RESOLVED' | 'INVESTIGATING' | 'DISPATCHED';
}

export interface PatrolLog {
  id: string;
  guardName: string;
  siteName: string;
  checkpointName: string;
  timeChecked: string;
  status: 'NORMAL' | 'ISSUE_NOTED';
  qrVerified: boolean;
  gpsCoordinates: string;
}
