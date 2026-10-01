import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { RecruitmentApplication } from '../../types';
import {
  Briefcase,
  UserCheck,
  Search,
  Filter,
  CheckCircle2,
  XCircle,
  Clock,
  MapPin,
  Shield,
  FileText,
  Phone,
  User,
  Plus,
  Edit2,
  X,
  Award
} from 'lucide-react';

interface AdminHRSectionProps {
  subTab: 'hr_jobs' | 'hr_applicants';
}

export const AdminHRSection: React.FC<AdminHRSectionProps> = ({ subTab }) => {
  const { language } = useLanguage();

  const [applications, setApplications] = useState<RecruitmentApplication[]>([
    {
      id: 'APP-101',
      fullName: 'Sok Sophal',
      gender: 'male',
      phone: '097 888 777',
      age: 26,
      provinceOfOrigin: 'Takeo',
      preferredWorkProvince: 'Phnom Penh',
      militaryOrPoliceExp: true,
      educationLevel: 'High School Diploma (Grade 12)',
      heightCm: 178,
      weightKg: 72,
      status: 'SUBMITTED',
      submittedAt: '2026-08-05 14:20',
    },
    {
      id: 'APP-102',
      fullName: 'Chan Vanna',
      gender: 'male',
      phone: '012 333 444',
      age: 29,
      provinceOfOrigin: 'Battambang',
      preferredWorkProvince: 'Siem Reap',
      militaryOrPoliceExp: true,
      educationLevel: 'Associate Degree',
      heightCm: 180,
      weightKg: 75,
      status: 'UNDER_REVIEW',
      submittedAt: '2026-08-04 18:00',
    },
    {
      id: 'APP-103',
      fullName: 'Meas Rithy',
      gender: 'male',
      phone: '088 111 222',
      age: 24,
      provinceOfOrigin: 'Kampong Cham',
      preferredWorkProvince: 'Phnom Penh',
      militaryOrPoliceExp: false,
      educationLevel: 'High School',
      heightCm: 175,
      weightKg: 68,
      status: 'INTERVIEW_SCHEDULED',
      submittedAt: '2026-08-02 11:15',
    },
  ]);

  const [selectedApp, setSelectedApp] = useState<RecruitmentApplication | null>(null);

  const updateAppStatus = (id: string, newStatus: RecruitmentApplication['status']) => {
    setApplications(
      applications.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
    );
    if (selectedApp && selectedApp.id === id) {
      setSelectedApp({ ...selectedApp, status: newStatus });
    }
  };

  return (
    <div className="space-y-8">
      {/* 1. JOB OPENINGS */}
      {subTab === 'hr_jobs' && (
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-xl font-extrabold text-white font-serif flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-purple-400" />
                Job Vacancies & Guard Recruitment Positions
              </h2>
              <p className="text-xs text-slate-400">Post open guard, supervisor, and control room operator positions.</p>
            </div>
            <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl flex items-center gap-1.5">
              <Plus className="w-4 h-4" /> Post New Job Vacancy
            </button>
          </div>

          <div className="space-y-3 text-xs">
            {[
              { title: 'Commercial Static Security Guard', loc: 'Phnom Penh / Sihanoukville', openings: 50, status: 'OPEN' },
              { title: 'VIP Close Protection Officer (Armed)', loc: 'Phnom Penh HQ', openings: 10, status: 'OPEN' },
              { title: 'Provincial Dispatch Supervisor', loc: 'Battambang Branch', openings: 2, status: 'OPEN' },
            ].map((job, i) => (
              <div key={i} className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    {job.status}
                  </span>
                  <h4 className="font-extrabold text-white text-sm mt-1">{job.title}</h4>
                  <p className="text-slate-400">{job.loc} • Openings: {job.openings}</p>
                </div>
                <button className="p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl">
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. GUARD APPLICANTS TRACKING (ATS) */}
      {subTab === 'hr_applicants' && (
        <div className="space-y-6">
          <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl flex items-center justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-white font-serif flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-purple-400" />
                Guard Applicants Pipeline (ATS Review)
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Review candidate applications, verify military service background, and schedule physical vetting interviews.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {applications.map((app) => (
              <div key={app.id} className="p-5 bg-slate-900 rounded-2xl border border-slate-800 space-y-3 shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    {app.id}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                    app.status === 'SUBMITTED' ? 'bg-amber-950 text-amber-400 border-amber-800' : 'bg-blue-950 text-blue-400 border-blue-800'
                  }`}>
                    {app.status}
                  </span>
                </div>

                <div>
                  <h3 className="font-extrabold text-white text-base">{app.fullName} ({app.age} yrs)</h3>
                  <p className="text-slate-400 mt-0.5">Origin: {app.provinceOfOrigin} • Preferred Post: {app.preferredWorkProvince}</p>
                </div>

                {app.militaryOrPoliceExp && (
                  <div className="p-2 bg-purple-950/60 rounded-xl border border-purple-800 text-purple-300 font-bold text-[11px] flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-purple-400 shrink-0" />
                    Verified Ex-Military / Police Background
                  </div>
                )}

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1 font-mono text-[11px]">
                  <div>Height: <strong className="text-white">{app.heightCm} cm</strong> • Weight: <strong className="text-white">{app.weightKg} kg</strong></div>
                  <div>Phone: <strong className="text-slate-200">{app.phone}</strong></div>
                </div>

                <button
                  onClick={() => setSelectedApp(app)}
                  className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition text-center"
                >
                  Review Full Candidate Dossier
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Candidate Dossier Drawer Modal */}
      {selectedApp && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-3xl border border-slate-800 max-w-xl w-full p-6 space-y-4 shadow-2xl relative text-xs text-slate-100">
            <button onClick={() => setSelectedApp(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white font-serif">{selectedApp.fullName}</h3>
                <p className="text-slate-400">Candidate Ref: {selectedApp.id} • Submitted: {selectedApp.submittedAt}</p>
              </div>
            </div>

            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div><span className="text-slate-400">Phone:</span> <strong className="text-white block">{selectedApp.phone}</strong></div>
                <div><span className="text-slate-400">Age / Gender:</span> <strong className="text-white block">{selectedApp.age} yrs ({selectedApp.gender})</strong></div>
                <div><span className="text-slate-400">Education:</span> <strong className="text-white block">{selectedApp.educationLevel}</strong></div>
                <div><span className="text-slate-400">Origin Province:</span> <strong className="text-white block">{selectedApp.provinceOfOrigin}</strong></div>
              </div>

              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                <span className="font-bold text-slate-300 block">Physical & Clearance Specs:</span>
                <p className="text-slate-400">Height: {selectedApp.heightCm} cm • Weight: {selectedApp.weightKg} kg</p>
                <p className="text-purple-400 font-bold">
                  {selectedApp.militaryOrPoliceExp ? '✓ Prior Armed Forces / Security Experience' : 'No prior military service'}
                </p>
              </div>
            </div>

            <div className="flex gap-2 justify-end pt-2">
              <button
                onClick={() => updateAppStatus(selectedApp.id, 'INTERVIEW_SCHEDULED')}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl"
              >
                Schedule Physical Interview
              </button>
              <button
                onClick={() => updateAppStatus(selectedApp.id, 'UNDER_REVIEW')}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl"
              >
                Approve Candidate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
