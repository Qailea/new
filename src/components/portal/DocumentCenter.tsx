import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { PortalDocument } from './PortalTypes';
import {
  FileText,
  Download,
  Search,
  Filter,
  Eye,
  FileCheck,
  ShieldCheck,
  Building2,
  X,
  Printer
} from 'lucide-react';

export const DocumentCenter: React.FC = () => {
  const { getT } = useLanguage();

  const [activeCategory, setActiveCategory] = useState<PortalDocument['category'] | 'ALL'>('ALL');
  const [selectedDoc, setSelectedDoc] = useState<PortalDocument | null>(null);

  // Mock Resources
  const documents: PortalDocument[] = [
    {
      id: 'DOC-001',
      category: 'agreements',
      title: {
        en: 'Annual Master Security Service Level Agreement (SLA) 2026',
        km: 'កិច្ចសន្យាកម្រិតសេវាកម្មសន្តិសុខមេ (SLA) ឆ្នាំ២០២៦',
        zh: '2026年度主安保服务级别协议（SLA合同）'
      },
      fileName: 'KNSK-SLA-ABA-2026-FINAL.pdf',
      fileSize: '2.8 MB',
      uploadDate: 'January 02, 2026'
    },
    {
      id: 'DOC-002',
      category: 'invoices',
      title: {
        en: 'July 2026 Monthly Security Guard Service Invoice',
        km: 'វិក្កយបត្រថ្លៃសេវាកម្មសន្តិសុខប្រចាំខែកក្កដា ឆ្នាំ២០២៦',
        zh: '2026年7月度安保服务费标准发票'
      },
      fileName: 'INV-2026-07-KNSK.pdf',
      fileSize: '840 KB',
      uploadDate: 'August 01, 2026'
    },
    {
      id: 'DOC-003',
      category: 'patrol_reports',
      title: {
        en: 'Monthly Patrol Wand GPS Scan Audit Summary - July 2026',
        km: 'របាយការណ៍សង្ខេបការល្បាត GPS QR code ប្រចាំខែកក្កដា',
        zh: '2026年7月度GPS巡逻打卡稽核汇总报告'
      },
      fileName: 'KNSK-PATROL-AUDIT-JUL2026.pdf',
      fileSize: '4.2 MB',
      uploadDate: 'August 02, 2026'
    },
    {
      id: 'DOC-004',
      category: 'safety',
      title: {
        en: 'High-Rise Commercial Fire Safety & Evacuation SOP Guideline',
        km: 'គោលការណ៍ណែនាំសុវត្ថិភាពអគ្គិភ័យ និងការជម្លៀសអគារខ្ពស់',
        zh: '高层商业大楼消防安全与紧急疏散SOP指南'
      },
      fileName: 'KNSK-SOP-FIRE-EVACUATION.pdf',
      fileSize: '1.5 MB',
      uploadDate: 'March 15, 2026'
    },
    {
      id: 'DOC-005',
      category: 'company',
      title: {
        en: 'Ministry of Interior License & Commercial Registration Certificate',
        km: 'អាជ្ញាប័ណ្ណក្រសួងមហាផ្ទៃ និងវិញ្ញាបនបត្រចុះបញ្ជីពាណិជ្ជកម្ម',
        zh: '内政部执照与商业登记注销合规证明文件'
      },
      fileName: 'MOI-LICENSE-REGISTRATION-KNSK.pdf',
      fileSize: '3.1 MB',
      uploadDate: 'January 10, 2026'
    }
  ];

  const filteredDocs = activeCategory === 'ALL'
    ? documents
    : documents.filter((d) => d.category === activeCategory);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold text-blue-900 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded uppercase">
              Downloadable Enterprise Resources
            </span>
            <span className="text-[10px] font-mono text-slate-500 font-bold">Encrypted Repository</span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 font-serif">
            {getT('Document & Contract Repository', 'មជ្ឈមណ្ឌលឯកសារ និងកិច្ចសន្យា', '企业文档与服务合同资源中心')}
          </h2>
          <p className="text-xs text-slate-500">
            {getT(
              'Access formal SLAs, monthly invoices, patrol inspection reports, and official ministry credentials.',
              'ពិនិត្យ និងទាញយកកិច្ចសន្យា SLA វិក្កយបត្រ របាយការណ៍ល្បាត និងអាជ្ញាប័ណ្ណផ្លូវការ។',
              '调阅并下载正式SLA合同、月度发票、巡逻稽核报告及政府部门合规执照。'
            )}
          </p>
        </div>
      </div>

      {/* Categories Bar */}
      <div className="flex overflow-x-auto gap-2 border-b border-slate-200 pb-2">
        {[
          { id: 'ALL', label: 'ALL DOCUMENTS' },
          { id: 'agreements', label: 'SLAs & Agreements' },
          { id: 'invoices', label: 'Monthly Invoices' },
          { id: 'patrol_reports', label: 'Patrol Audit Reports' },
          { id: 'safety', label: 'Safety Guidelines & SOPs' },
          { id: 'company', label: 'Licenses & Credentials' },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id as any)}
            className={`px-4 py-2 text-xs font-bold rounded-xl whitespace-nowrap transition ${
              activeCategory === cat.id
                ? 'bg-blue-900 text-white shadow'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredDocs.map((doc) => {
          const title = getT(doc.title.en, doc.title.km, doc.title.zh);

          return (
            <div
              key={doc.id}
              className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-md transition space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-[10px] font-mono font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded uppercase">
                    {doc.category.replace('_', ' ')}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">{doc.fileSize}</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-3 bg-red-50 text-red-600 rounded-xl border border-red-200 shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-slate-900 font-serif leading-snug">{title}</h3>
                    <p className="text-[11px] text-slate-500 font-mono mt-1">{doc.fileName}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-slate-400">Uploaded: {doc.uploadDate}</span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedDoc(doc)}
                    className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg transition"
                    title="Preview Document"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => alert(`Downloading Document ${doc.fileName}...`)}
                    className="px-3.5 py-2 bg-blue-900 hover:bg-blue-950 text-white font-bold rounded-lg text-xs flex items-center gap-1 shadow transition"
                  >
                    <Download className="w-3.5 h-3.5" /> PDF
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Document Viewer Modal */}
      {selectedDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-blue-900" />
                <h3 className="font-extrabold text-base text-slate-900 font-serif">
                  Document Digital Preview
                </h3>
              </div>
              <button
                onClick={() => setSelectedDoc(null)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4 text-center">
              <FileText className="w-16 h-16 text-blue-900 mx-auto" />
              <div>
                <h4 className="font-extrabold text-base text-slate-900 font-serif">
                  {getT(selectedDoc.title.en, selectedDoc.title.km, selectedDoc.title.zh)}
                </h4>
                <p className="text-xs text-slate-500 font-mono mt-1">File: {selectedDoc.fileName} • {selectedDoc.fileSize}</p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-600">
                <span>Verified K.N.S.K Digital Stamp & Watermark attached for compliance audit.</span>
              </div>
            </div>

            <div className="flex gap-2 pt-2 border-t border-slate-100">
              <button
                onClick={() => alert(`Printing document ${selectedDoc.fileName}`)}
                className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5"
              >
                <Printer className="w-4 h-4" /> Print
              </button>
              <button
                onClick={() => alert(`Downloading PDF ${selectedDoc.fileName}`)}
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
