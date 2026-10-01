import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  ClientDirectoryItem,
  SupportTicketItem,
} from '../../types/admin';
import { QuotationRequest } from '../../types';
import {
  INITIAL_CLIENT_DIRECTORY,
  INITIAL_SUPPORT_TICKETS,
} from '../../data/adminMockData';
import {
  MapPin,
  FileCheck,
  Building,
  Headphones,
  Search,
  Plus,
  Edit2,
  CheckCircle2,
  X,
  Printer,
  FileText,
  Radio,
  Clock,
  Shield,
  Phone,
  Mail,
  User,
  Check,
  Send,
  AlertTriangle
} from 'lucide-react';

interface AdminOperationsSectionProps {
  subTab: 'ops_patrols' | 'ops_quotes' | 'ops_clients' | 'ops_tickets';
}

export const AdminOperationsSection: React.FC<AdminOperationsSectionProps> = ({ subTab }) => {
  const { language } = useLanguage();

  const [clients, setClients] = useState<ClientDirectoryItem[]>(INITIAL_CLIENT_DIRECTORY);
  const [tickets, setTickets] = useState<SupportTicketItem[]>(INITIAL_SUPPORT_TICKETS);

  // Sample quotations queue
  const [quotes, setQuotes] = useState<QuotationRequest[]>([
    {
      id: 'QUOTE-991',
      clientName: 'Lok Oknha Sophea',
      companyName: 'PNH Luxury Tower & Residence',
      phone: '012 999 000',
      email: 'sophea@pnhluxury.com',
      province: 'Phnom Penh',
      facilityType: 'commercial',
      guardCount: 12,
      shiftType: '24_7',
      extraServices: ['GPS Patrol Telemetry', 'CCTV Control Room Operator', 'First Aid Officer'],
      estimatedMonthlyCostUSD: 5400,
      status: 'PENDING',
      createdAt: '2026-08-05 21:15',
    },
    {
      id: 'QUOTE-992',
      clientName: 'Mr. David Lee',
      companyName: 'Sihanoukville International Resort & Casino',
      phone: '098 777 666',
      email: 'd.lee@shkresort.com',
      province: 'Preah Sihanouk',
      facilityType: 'commercial',
      guardCount: 20,
      shiftType: '24_7',
      extraServices: ['Armed Response Escort', 'K9 Patrol Unit'],
      estimatedMonthlyCostUSD: 9800,
      status: 'PENDING',
      createdAt: '2026-08-05 18:40',
    },
  ]);

  // SLA Proposal Preview Modal
  const [activeProposalQuote, setActiveProposalQuote] = useState<QuotationRequest | null>(null);

  return (
    <div className="space-y-8">
      {/* 1. GUARDS & GPS PATROLS */}
      {subTab === 'ops_patrols' && (
        <div className="space-y-6">
          <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl flex items-center justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-white font-serif flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-400" />
                Live GPS Telemetry & Patrol Roster
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Real-time tracking for active guard officers across all 25 provinces in Cambodia.
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950 border border-emerald-800 px-3 py-1.5 rounded-xl flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              Live Telemetry Active
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {[
              { station: 'Phnom Penh HQ Central', guard: 'Officer Seng Rithy (#KNSK-8812)', site: 'ABA Bank HQ Tower', time: '1 Min ago', status: 'PATROL_VERIFIED' },
              { station: 'Preah Sihanouk Hub', guard: 'Officer Vorn Sarath (#KNSK-4421)', site: 'Sihanoukville Port Gateway', time: '3 Mins ago', status: 'PATROL_VERIFIED' },
              { station: 'Siem Reap Hub', guard: 'Officer Meas Bunna (#KNSK-3310)', site: 'Angkor Heritage Hotel', time: '5 Mins ago', status: 'PATROL_VERIFIED' },
              { station: 'Svay Rieng Hub', guard: 'Officer Keo Narith (#KNSK-9902)', site: 'Bavet SEZ Industrial Complex', time: '8 Mins ago', status: 'PATROL_VERIFIED' },
            ].map((p, i) => (
              <div key={i} className="p-5 bg-slate-900 rounded-2xl border border-slate-800 space-y-2 shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    {p.station}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    GPS TRACKED
                  </span>
                </div>
                <h3 className="font-extrabold text-white text-sm">{p.guard}</h3>
                <p className="text-slate-400">{p.site} • Last QR Scan: {p.time}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. QUOTATIONS & PROPOSALS */}
      {subTab === 'ops_quotes' && (
        <div className="space-y-6">
          <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl flex items-center justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-white font-serif flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-blue-400" />
                Quotation Queue & Interactive SLA Proposal Builder
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Review incoming client requests, calculate guard SLA requirements, and issue PDF SLA proposals.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {quotes.map((q) => (
              <div
                key={q.id}
                className="p-6 bg-slate-900 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-red-400 bg-red-950 border border-red-800 px-2.5 py-0.5 rounded">
                      {q.id}
                    </span>
                    <span className="text-xs font-bold text-slate-400 bg-slate-950 px-2.5 py-0.5 rounded border border-slate-800">
                      {q.province}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-white font-serif">{q.companyName}</h3>
                  <p className="text-xs text-slate-300">
                    Contact: <strong className="text-white">{q.clientName}</strong> ({q.phone}) • {q.guardCount} Guards ({q.shiftType})
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {q.extraServices.map((s, idx) => (
                      <span key={idx} className="text-[10px] bg-slate-950 text-slate-400 border border-slate-800 px-2 py-0.5 rounded">
                        + {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-left md:text-right space-y-3 shrink-0">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">Estimated Monthly Fee</span>
                    <div className="text-2xl font-extrabold text-emerald-400 font-mono">
                      ${q.estimatedMonthlyCostUSD.toLocaleString()} / mo
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveProposalQuote(q)}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-600/30 flex items-center gap-1.5 transition"
                  >
                    <FileText className="w-4 h-4" />
                    Generate SLA Proposal PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. CLIENT ACCOUNTS DIRECTORY */}
      {subTab === 'ops_clients' && (
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-xl font-extrabold text-white font-serif flex items-center gap-2">
                <Building className="w-5 h-5 text-amber-400" />
                Enterprise Client Accounts Directory
              </h2>
              <p className="text-xs text-slate-400">Manage active institutional security contracts and guard assignments.</p>
            </div>
            <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl flex items-center gap-1.5">
              <Plus className="w-4 h-4" /> Add New Client
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {clients.map((c) => (
              <div key={c.id} className="p-5 bg-slate-950 rounded-2xl border border-slate-800 space-y-3 shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-red-400 bg-red-950 px-2 py-0.5 rounded border border-red-800">
                    {c.id}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    {c.status}
                  </span>
                </div>

                <div>
                  <h3 className="font-extrabold text-white text-sm">{c.companyName}</h3>
                  <p className="text-slate-400 text-[11px] mt-0.5">Contact: {c.contactPerson} ({c.phone})</p>
                </div>

                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1 font-mono text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Assigned Guards:</span>
                    <span className="text-white font-bold">{c.assignedGuards} Guards</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Monthly Contract:</span>
                    <span className="text-emerald-400 font-bold">${c.monthlyFeeUSD.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. SUPPORT TICKETS */}
      {subTab === 'ops_tickets' && (
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-xl font-extrabold text-white font-serif flex items-center gap-2">
                <Headphones className="w-5 h-5 text-pink-400" />
                Support Tickets & Client Inquiry Queue
              </h2>
              <p className="text-xs text-slate-400">Handle support requests sent via Client Portal and website contact form.</p>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            {tickets.map((t) => (
              <div key={t.id} className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-red-400">{t.ticketNo}</span>
                    <span className="bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800 font-bold">
                      {t.category}
                    </span>
                    <span className="bg-amber-950 text-amber-400 border border-amber-800 px-2 py-0.5 rounded font-bold">
                      Priority: {t.priority}
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-sm mt-1">{t.subject}</h4>
                  <p className="text-slate-400">Client: {t.clientName} • Assigned: {t.assignedTo}</p>
                </div>

                <button className="px-3 py-1.5 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-500">
                  Mark Resolved
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SLA Proposal Generator Modal */}
      {activeProposalQuote && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-3xl border border-slate-800 max-w-3xl w-full p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto text-xs text-slate-100">
            <button onClick={() => setActiveProposalQuote(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>

            {/* Print / Export Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                  KNSK
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white font-serif">K.N.S.K SECURITY SLA PROPOSAL</h3>
                  <p className="text-[11px] text-slate-400">Official Service Level Agreement & Guard Deployment Budget</p>
                </div>
              </div>

              <button
                onClick={() => window.print()}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 flex items-center gap-1.5"
              >
                <Printer className="w-4 h-4" /> Print / Export PDF
              </button>
            </div>

            <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-slate-500 font-bold block text-[10px]">CLIENT ORGANISATION</span>
                  <div className="text-sm font-extrabold text-white">{activeProposalQuote.companyName}</div>
                  <div className="text-slate-300">{activeProposalQuote.clientName}</div>
                  <div className="text-slate-400">{activeProposalQuote.phone} • {activeProposalQuote.email}</div>
                </div>

                <div className="text-right">
                  <span className="text-slate-500 font-bold block text-[10px]">PROPOSAL REF</span>
                  <div className="text-sm font-mono font-bold text-red-400">{activeProposalQuote.id}</div>
                  <div className="text-slate-400">Issued: {new Date().toISOString().split('T')[0]}</div>
                  <div className="text-slate-400">Provincial Hub: {activeProposalQuote.province}</div>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-3 space-y-2">
                <h4 className="font-extrabold text-white text-xs uppercase tracking-wider">Service Scope & Guard Allocations</h4>
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1 font-mono">
                  <div className="flex justify-between">
                    <span>Assigned Officers:</span>
                    <span className="text-white font-bold">{activeProposalQuote.guardCount} Guard Personnel</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shift Coverage:</span>
                    <span className="text-white font-bold">{activeProposalQuote.shiftType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergency SLA Intercept Guarantee:</span>
                    <span className="text-emerald-400 font-bold">&lt; 15 Minutes</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-3">
                <div className="flex justify-between items-center">
                  <span className="font-extrabold text-white text-sm">TOTAL MONTHLY SLA BUDGET:</span>
                  <span className="text-2xl font-extrabold text-emerald-400 font-mono">
                    ${activeProposalQuote.estimatedMonthlyCostUSD.toLocaleString()} USD / Month
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 justify-end">
              <button
                onClick={() => {
                  setQuotes(quotes.map((q) => (q.id === activeProposalQuote.id ? { ...q, status: 'APPROVED' } : q)));
                  setActiveProposalQuote(null);
                }}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" /> Approve & Dispatch Contract to Client
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
