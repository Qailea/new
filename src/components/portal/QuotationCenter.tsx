import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { QuotationItem } from './PortalTypes';
import {
  FileText,
  Plus,
  Download,
  CheckCircle2,
  Clock,
  AlertCircle,
  XCircle,
  Search,
  Filter,
  Calculator,
  ShieldCheck,
  Building2,
  X,
  Printer
} from 'lucide-react';

export const QuotationCenter: React.FC = () => {
  const { getT } = useLanguage();

  const [activeFilter, setActiveFilter] = useState<'ALL' | 'DRAFT' | 'SUBMITTED' | 'UNDER_REVIEW' | 'APPROVED' | 'REJECTED'>('ALL');
  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState<QuotationItem | null>(null);

  // New Quote Form State
  const [serviceType, setServiceType] = useState('Banking & Cash-in-Transit Guarding');
  const [guardCount, setGuardCount] = useState(6);
  const [shiftType, setShiftType] = useState('24/7 Double Shift (12h/shift)');
  const [locationName, setLocationName] = useState('Central Mall Branch Office, Phnom Penh');
  const [notesInput, setNotesInput] = useState('Require armed cash escort guard and metal detector wands.');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Mock Quotes Data
  const [quotes, setQuotes] = useState<QuotationItem[]>([
    {
      id: 'QUOTE-2026-001',
      refNumber: 'KNSK-QT-88210',
      title: {
        en: 'Phnom Penh HQ Main Tower Security SLA',
        km: 'សេវាកម្មសន្តិសុខអគារពាណិជ្ជកម្មទីស្នាក់ការកណ្តាល',
        zh: '金边总部主楼安保SLA服务报价'
      },
      serviceType: { en: 'Corporate High-Rise Guarding', km: 'សន្តិសុខអគារខ្ពស់', zh: '企业高层写字楼安保' },
      guardCount: 12,
      location: { en: 'Phnom Penh Main Tower', km: 'អគារខ្ពស់ភ្នំពេញ', zh: '金边主楼' },
      submittedDate: 'May 10, 2026',
      estimatedCost: '$5,550.00 / month',
      status: 'APPROVED',
      notes: {
        en: 'Includes 12 guards, 1 station commander, CCTV surveillance, and 4x4 mobile patrol.',
        km: 'រាប់បញ្ចូលភ្នាក់ងារ ១២នាក់ មេបញ្ជាការ ១នាក់ CCTV និងរថយន្តល្បាត 4x4។',
        zh: '包含12名队员、1名队长、CCTV监控及4x4巡逻车。'
      }
    },
    {
      id: 'QUOTE-2026-002',
      refNumber: 'KNSK-QT-88211',
      title: {
        en: 'Annual AGM Shareholders Event VIP Protection',
        km: 'សេវាកម្មសន្តិសុខការពារប្រជុំភាគហ៊ុនិកប្រចាំឆ្នាំ',
        zh: '年度股东大会VIP尊荣护卫服务'
      },
      serviceType: { en: 'VIP Executive Protection & Event Security', km: 'សន្តិសុខព្រឹត្តិការណ៍ និង VIP', zh: 'VIP要员护卫与活动安保' },
      guardCount: 8,
      location: { en: 'Garten Hotel Ballroom, Phnom Penh', km: 'សណ្ឋាគារហ្គាថិន ភ្នំពេញ', zh: '金边花园酒店宴会厅' },
      submittedDate: 'July 15, 2026',
      estimatedCost: '$1,200.00 (Single Event)',
      status: 'UNDER_REVIEW',
      notes: {
        en: 'Formal suit uniform requested with x-ray luggage scanner.',
        km: 'តម្រូវឱ្យស្លៀកឯកសណ្ឋានអាវធំផ្លូវការ និងមានម៉ាស៊ីនស្កែនអុិចស្រេ។',
        zh: '要求全套西装制服并提供X光行李安检机。'
      }
    },
    {
      id: 'QUOTE-2026-003',
      refNumber: 'KNSK-QT-88212',
      title: {
        en: 'Siem Reap Regional Vault & ATM Fleet Reinforcement',
        km: 'សេវាកម្មសន្តិសុខការពារទូ ATM និងទូដែក ខេត្តសៀមរាប',
        zh: '暹粒分行金库及ATM巡检安保 reinforcement'
      },
      serviceType: { en: 'Banking & Vault Protection', km: 'សន្តិសុខធនាគារ និងទូដែក', zh: '银行及金库安保' },
      guardCount: 4,
      location: { en: 'Siem Reap Branch Office', km: 'សាខាខេត្តសៀមរាប', zh: '暹粒分行' },
      submittedDate: 'July 28, 2026',
      estimatedCost: '$2,100.00 / month',
      status: 'SUBMITTED',
      notes: {
        en: 'Waiting for commercial director sign-off.',
        km: 'រង់ចាំការចុះហត្ថលេខាពីនាយកពាណិជ្ជកម្ម។',
        zh: '等待商务总监签署确认。'
      }
    },
    {
      id: 'QUOTE-2026-004',
      refNumber: 'KNSK-QT-88209',
      title: {
        en: 'Temporary Warehouse Guarding (Draft)',
        km: 'សេវាកម្មសន្តិសុខឃ្លាំងបណ្តោះអាសន្ន (ព្រាង)',
        zh: '临时仓库安保服务（草案）'
      },
      serviceType: { en: 'Industrial Warehouse Security', km: 'សន្តិសុខឃ្លាំងទំនិញ', zh: '工业仓库安保' },
      guardCount: 3,
      location: { en: 'Kandal Logistics Park', km: 'តំបន់ឡូជីស្ទិក ខេត្តកណ្តាល', zh: '干丹物流园' },
      submittedDate: 'August 01, 2026',
      estimatedCost: '$1,350.00 / month',
      status: 'DRAFT'
    }
  ]);

  const handleCreateQuotation = (e: React.FormEvent) => {
    e.preventDefault();
    const newQuoteObj: QuotationItem = {
      id: `QUOTE-2026-00${quotes.length + 1}`,
      refNumber: `KNSK-QT-${Math.floor(10000 + Math.random() * 90000)}`,
      title: {
        en: `${serviceType} - ${guardCount} Guards`,
        km: `${serviceType} - ${guardCount} នាក់`,
        zh: `${serviceType} - ${guardCount} 名安保`
      },
      serviceType: { en: serviceType, km: serviceType, zh: serviceType },
      guardCount,
      location: { en: locationName, km: locationName, zh: locationName },
      submittedDate: 'August 05, 2026',
      estimatedCost: 'Custom Proposal (Pending Site Survey)',
      status: 'SUBMITTED',
      notes: { en: notesInput, km: notesInput, zh: notesInput }
    };

    setQuotes([newQuoteObj, ...quotes]);
    setSubmittedSuccess(true);
  };

  const getStatusBadge = (status: QuotationItem['status']) => {
    switch (status) {
      case 'APPROVED':
        return (
          <span className="text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 px-2.5 py-0.5 rounded-full flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> APPROVED
          </span>
        );
      case 'UNDER_REVIEW':
        return (
          <span className="text-[10px] font-mono font-bold bg-amber-100 text-amber-800 border border-amber-300 px-2.5 py-0.5 rounded-full flex items-center gap-1">
            <Clock className="w-3 h-3" /> UNDER REVIEW
          </span>
        );
      case 'SUBMITTED':
        return (
          <span className="text-[10px] font-mono font-bold bg-blue-100 text-blue-900 border border-blue-300 px-2.5 py-0.5 rounded-full flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> SUBMITTED
          </span>
        );
      case 'DRAFT':
        return (
          <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-700 border border-slate-300 px-2.5 py-0.5 rounded-full flex items-center gap-1">
            <FileText className="w-3 h-3" /> DRAFT
          </span>
        );
      case 'REJECTED':
        return (
          <span className="text-[10px] font-mono font-bold bg-red-100 text-red-800 border border-red-300 px-2.5 py-0.5 rounded-full flex items-center gap-1">
            <XCircle className="w-3 h-3" /> REJECTED
          </span>
        );
    }
  };

  const filteredQuotes = activeFilter === 'ALL'
    ? quotes
    : quotes.filter((q) => q.status === activeFilter);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold text-blue-900 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded uppercase">
              Commercial Proposal Hub
            </span>
            <span className="text-[10px] font-mono text-slate-500 font-bold">PDF Ready</span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 font-serif">
            {getT('Enterprise Quotation Center', 'មជ្ឈមណ្ឌលស្នើសុំតម្លៃ និងការប៉ាន់ប្រមាណ', '企业报价与服务方案中心')}
          </h2>
          <p className="text-xs text-slate-500">
            {getT(
              'Submit formal requests for security proposals, guard force scale-ups, and custom SLA pricing.',
              'ស្នើសុំការពិនិត្យតម្លៃសេវាកម្មសន្តិសុខ បន្ថែមកម្លាំងឈរជើង និងកិច្ចសន្យា SLA ផ្លូវការ។',
              '提交正式安保服务方案申请、人员扩充与定制化SLA服务报价。'
            )}
          </p>
        </div>

        <button
          onClick={() => {
            setSubmittedSuccess(false);
            setRequestModalOpen(true);
          }}
          className="px-5 py-3 bg-blue-900 hover:bg-blue-950 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-blue-950/20 flex items-center gap-2 transition"
        >
          <Plus className="w-4 h-4" />
          <span>{getT('Request New Quotation', 'បង្កើតការស្នើសុំតម្លៃថ្មី', '申请新报价')}</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex overflow-x-auto gap-2 border-b border-slate-200 pb-2">
        {(['ALL', 'SUBMITTED', 'UNDER_REVIEW', 'APPROVED', 'DRAFT', 'REJECTED'] as const).map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 text-xs font-bold rounded-xl whitespace-nowrap transition ${
              activeFilter === filter
                ? 'bg-blue-900 text-white shadow'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {filter === 'ALL' ? 'ALL QUOTATIONS' : filter.replace('_', ' ')}
          </button>
        ))}
      </div>

      {/* Quotations List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredQuotes.map((q) => {
          const title = getT(q.title.en, q.title.km, q.title.zh);
          const serviceName = getT(q.serviceType.en, q.serviceType.km, q.serviceType.zh);
          const locName = getT(q.location.en, q.location.km, q.location.zh);

          return (
            <div
              key={q.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-md transition space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-[11px] font-mono font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded">
                    {q.refNumber}
                  </span>
                  {getStatusBadge(q.status)}
                </div>

                <div>
                  <h3 className="font-extrabold text-base text-slate-900 font-serif leading-snug">{title}</h3>
                  <p className="text-xs text-slate-500 mt-1 font-mono">{serviceName} • {q.guardCount} Guards</p>
                </div>

                <div className="text-xs text-slate-600 space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Location:</span>
                    <span className="font-bold text-slate-800">{locName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Est. Monthly Rate:</span>
                    <span className="font-bold text-blue-900">{q.estimatedCost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Submitted:</span>
                    <span className="font-mono text-slate-700">{q.submittedDate}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                <button
                  onClick={() => setSelectedQuote(q)}
                  className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition text-center"
                >
                  {getT('View Proposal Details', 'មើលព័ត៌មានលម្អិត', '查看方案详情')}
                </button>
                <button
                  onClick={() => alert(`Downloading PDF Quotation file: ${q.refNumber}.pdf`)}
                  className="p-2.5 bg-blue-50 hover:bg-blue-100 text-blue-900 font-bold rounded-xl transition border border-blue-200"
                  title="Download Official PDF Proposal"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* New Quotation Request Modal */}
      {requestModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5 my-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-blue-900" />
                <h3 className="font-extrabold text-base text-slate-900 font-serif">
                  {getT('New Security Proposal Request', 'ពាក្យស្នើសុំប្រម៉ង់តម្លៃសន្តិសុខថ្មី', '新建安保报价申请')}
                </h3>
              </div>
              <button
                onClick={() => setRequestModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!submittedSuccess ? (
              <form onSubmit={handleCreateQuotation} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">Service Type *</label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  >
                    <option value="Banking & Cash-in-Transit Guarding">Banking & Cash-in-Transit Guarding</option>
                    <option value="Commercial High-Rise & Hotel Security">Commercial High-Rise & Hotel Security</option>
                    <option value="Factory & Industrial Park Protection">Factory & Industrial Park Protection</option>
                    <option value="Gated Community / Borey Protection">Gated Community / Borey Protection</option>
                    <option value="VIP Executive Protection">VIP Executive Protection</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-800 mb-1">Required Guard Personnel *</label>
                    <input
                      type="number"
                      min={1}
                      max={100}
                      value={guardCount}
                      onChange={(e) => setGuardCount(parseInt(e.target.value))}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl font-mono font-bold text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-800 mb-1">Shift Model *</label>
                    <select
                      value={shiftType}
                      onChange={(e) => setShiftType(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-bold text-slate-900"
                    >
                      <option value="24/7 Double Shift (12h/shift)">24/7 Double Shift (12h/shift)</option>
                      <option value="12-Hour Day Shift Only">12-Hour Day Shift Only</option>
                      <option value="12-Hour Night Shift Only">12-Hour Night Shift Only</option>
                      <option value="Temporary Special Event (Hourly)">Temporary Special Event (Hourly)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">Target Facility / Facility Address *</label>
                  <input
                    type="text"
                    required
                    value={locationName}
                    onChange={(e) => setLocationName(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl font-bold text-slate-900"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">Special Requirements & Equipment</label>
                  <textarea
                    rows={3}
                    value={notesInput}
                    onChange={(e) => setNotesInput(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-slate-900"
                    placeholder="e.g. CCTV monitoring, armed escort, bilingual guards..."
                  ></textarea>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setRequestModalOpen(false)}
                    className="flex-1 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-blue-900 text-white font-extrabold rounded-xl hover:bg-blue-950 shadow-md"
                  >
                    Submit Quotation Request
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-6 text-center space-y-4 text-xs">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-extrabold text-slate-900 text-base">Quotation Submitted Successfully</h4>
                <p className="text-slate-600 max-w-md mx-auto">
                  Reference <code className="bg-slate-100 px-1.5 py-0.5 rounded font-bold text-blue-900">{quotes[0]?.refNumber}</code> has been dispatched to K.N.S.K Commercial Department. A formal PDF proposal will be uploaded within 2 business hours.
                </p>
                <button
                  onClick={() => setRequestModalOpen(false)}
                  className="px-6 py-2.5 bg-blue-900 text-white font-bold rounded-xl"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Quote Detail Modal */}
      {selectedQuote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-mono font-bold text-blue-900">{selectedQuote.refNumber}</span>
                <h3 className="font-extrabold text-base text-slate-900 font-serif">
                  {getT(selectedQuote.title.en, selectedQuote.title.km, selectedQuote.title.zh)}
                </h3>
              </div>
              <button
                onClick={() => setSelectedQuote(null)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Service Category:</span>
                  <span className="font-bold text-slate-900">{getT(selectedQuote.serviceType.en, selectedQuote.serviceType.km, selectedQuote.serviceType.zh)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Personnel Count:</span>
                  <span className="font-bold text-slate-900">{selectedQuote.guardCount} Security Officers</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Facility:</span>
                  <span className="font-bold text-slate-900">{getT(selectedQuote.location.en, selectedQuote.location.km, selectedQuote.location.zh)}</span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-2">
                  <span className="text-slate-500">Monthly Service Rate:</span>
                  <span className="font-extrabold text-sm text-blue-900">{selectedQuote.estimatedCost}</span>
                </div>
              </div>

              {selectedQuote.notes && (
                <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-200 text-slate-800">
                  <span className="font-bold text-blue-900 block mb-1">Proposal Scope & Notes:</span>
                  <p>{getT(selectedQuote.notes.en, selectedQuote.notes.km, selectedQuote.notes.zh)}</p>
                </div>
              )}
            </div>

            <div className="flex gap-2 pt-2 border-t border-slate-100">
              <button
                onClick={() => alert(`Printing official quotation document ${selectedQuote.refNumber}`)}
                className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5"
              >
                <Printer className="w-4 h-4" /> Print Document
              </button>
              <button
                onClick={() => alert(`Downloading PDF file ${selectedQuote.refNumber}.pdf`)}
                className="flex-1 py-2.5 bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow"
              >
                <Download className="w-4 h-4" /> Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
