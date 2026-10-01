import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SupportTicket } from './PortalTypes';
import {
  HelpCircle,
  PlusCircle,
  Search,
  MessageSquare,
  CheckCircle2,
  Clock,
  PhoneCall,
  ChevronDown,
  ChevronUp,
  X,
  Headphones,
  Mail
} from 'lucide-react';

export const SupportCenterModule: React.FC = () => {
  const { getT } = useLanguage();

  const [modalOpen, setModalOpen] = useState(false);
  const [topic, setTopic] = useState<SupportTicket['topic']>('operations');
  const [subject, setSubject] = useState('');
  const [messageText, setMessageText] = useState('');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const [faqSearch, setFaqSearch] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Mock Tickets
  const [tickets, setTickets] = useState<SupportTicket[]>([
    {
      id: 'TICK-001',
      ticketId: 'KNSK-HD-8812',
      topic: 'operations',
      subject: {
        en: 'Request for Guard Shift Log Audit Report',
        km: 'ស្នើសុំរបាយការណ៍សវនកម្មវត្តមានសន្តិសុខ',
        zh: '索取安保值班考勤稽核报告'
      },
      message: {
        en: 'Please send weekly digital scan summaries for Checkpoints #1 to #4.',
        km: 'សូមផ្ញើសេចក្តីសង្ខេបការល្បាតប្រចាំសប្តាហ៍សម្រាប់គោលដៅទី១ ដល់ ទី៤។',
        zh: '请发送第1至第4打卡点的周度数字巡检汇总报告。'
      },
      status: 'RESOLVED',
      createdDate: 'August 01, 2026',
      lastUpdated: 'August 02, 2026'
    }
  ]);

  const faqs = [
    {
      q: {
        en: 'How quickly can K.N.S.K dispatch emergency backup guards during an alarm event?',
        km: 'តើ K.N.S.K អាចបញ្ជូនកម្លាំងអន្តរាគមន៍បន្ទាន់បានលឿនប៉ុនណា?',
        zh: 'K.N.S.K在发生突发警报时增援到达时间是多久？'
      },
      a: {
        en: 'Our 24/7 mobile 4x4 response vehicles are deployed across all 25 provinces, providing prompt emergency backup and rapid intervention upon panic alarm dispatch.',
        km: 'រថយន្តល្បាតអាសន្ន 4x4 របស់យើងខ្ញុំ មានវត្តមានតាម ២៥ ខេត្តក្រុង ដោយត្រៀមចេញអន្តរាគមន៍រហ័សទាន់ពេលវេលា។',
        zh: '我们的24小时4x4机动巡逻车覆盖全柬25个省份，收到紧急警报后迅速出动赶赴现场处置。'
      }
    },
    {
      q: {
        en: 'How do I download monthly VAT invoices and official SLA service agreements?',
        km: 'តើខ្ញុំអាចទាញយកវិក្កយបត្រ VAT និងកិច្ចសន្យា SLA យ៉ាងដូចម្តេច?',
        zh: '如何下载月度增值税发票与正式SLA服务合同？'
      },
      a: {
        en: 'Navigate to the "Document Center" tab in your Client Portal. All official tax invoices, patrol scan logs, and signed master SLAs are available as downloadable PDF files.',
        km: 'សូមចូលទៅកាន់ផ្នែក "មជ្ឈមណ្ឌលឯកសារ" ក្នុងវិបផតថល។ វិក្កយបត្រ និងកិច្ចសន្យាទាំងអស់ មានជាទម្រង់ PDF។',
        zh: '请转至客户门户中的“文档中心”页面。所有官方增值税发票、巡逻打卡记录及已签署的主SLA合同均可直接下载PDF文件。'
      }
    },
    {
      q: {
        en: 'Can I request bilingual (English / Chinese / Khmer) security officers for corporate events?',
        km: 'តើខ្ញុំអាចស្នើសុំភ្នាក់ងារសន្តិសុខនិយាយភាសាបរទេសបានទេ?',
        zh: '是否可以为企业活动申请双语（英/中/柬）安保人员？'
      },
      a: {
        en: 'Yes. K.N.S.K maintains specialized bilingual protocols for VIP embassies, luxury hotels, and high-rise commercial towers. Select "Bilingual Officer" when submitting a Service Request.',
        km: 'បាន។ K.N.S.K មានភ្នាក់ងារសន្តិសុខចេះភាសាបរទេស សម្រាប់សណ្ឋាគារ និងអគារពាណិជ្ជកម្ម។',
        zh: '可以。K.N.S.K拥有一支具备双语沟通能力的特种安保队伍，服务于大使馆、奢华酒店与高级写字楼。在提交服务申请时勾选“双语队员”即可。'
      }
    }
  ];

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    const newTick: SupportTicket = {
      id: `TICK-00${tickets.length + 1}`,
      ticketId: `KNSK-HD-${Math.floor(10000 + Math.random() * 90000)}`,
      topic,
      subject: { en: subject, km: subject, zh: subject },
      message: { en: messageText, km: messageText, zh: messageText },
      status: 'OPEN',
      createdDate: 'August 05, 2026',
      lastUpdated: 'Just now'
    };

    setTickets([newTick, ...tickets]);
    setSubmittedSuccess(true);
  };

  const filteredFaqs = faqs.filter((f) => {
    const qText = getT(f.q.en, f.q.km, f.q.zh).toLowerCase();
    const aText = getT(f.a.en, f.a.km, f.a.zh).toLowerCase();
    return qText.includes(faqSearch.toLowerCase()) || aText.includes(faqSearch.toLowerCase());
  });

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold text-blue-900 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded uppercase">
              24/7 Enterprise Help Desk
            </span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 font-serif">
            {getT('Support & Customer Service Desk', 'មជ្ឈមណ្ឌលជំនួយ និងសេវាអតិថិជន', '客户支持与服务台')}
          </h2>
          <p className="text-xs text-slate-500">
            {getT(
              'Submit support tickets regarding quotations, billing, field operations, or consult our enterprise FAQ repository.',
              'បង្កើតសំបុត្រជំនួយទាក់ទងនឹងការប្រម៉ង់តម្លៃ វិក្កយបត្រ ប្រតិបត្តិការសន្តិសុខ ឬពិនិត្យមើលសំណួរញឹកញាប់។',
              '提交关于服务报价、账单发票、现场运营的咨询工单，或查阅企业FAQ问答库。'
            )}
          </p>
        </div>

        <button
          onClick={() => {
            setSubmittedSuccess(false);
            setModalOpen(true);
          }}
          className="px-5 py-3 bg-blue-900 hover:bg-blue-950 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-blue-950/20 flex items-center gap-2 transition"
        >
          <PlusCircle className="w-4 h-4" />
          <span>{getT('Open Support Ticket', 'បង្កើតសំបុត្រជំនួយ', '提交服务工单')}</span>
        </button>
      </div>

      {/* Tickets List */}
      {tickets.length > 0 && (
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-extrabold text-slate-900 text-sm font-serif border-b border-slate-100 pb-3">Active Support Tickets</h3>
          <div className="space-y-3">
            {tickets.map((tick) => (
              <div key={tick.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-blue-900 bg-blue-100 px-2 py-0.5 rounded">
                    {tick.ticketId}
                  </span>
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                    tick.status === 'RESOLVED' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {tick.status}
                  </span>
                </div>

                <h4 className="font-extrabold text-sm text-slate-900">{getT(tick.subject.en, tick.subject.km, tick.subject.zh)}</h4>
                <p className="text-slate-600">{getT(tick.message.en, tick.message.km, tick.message.zh)}</p>

                <div className="text-[10px] font-mono text-slate-400 pt-1 border-t border-slate-200 flex justify-between">
                  <span>Topic: {tick.topic.toUpperCase()}</span>
                  <span>Created: {tick.createdDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <h3 className="font-extrabold text-base text-slate-900 font-serif flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-900" />
            {getT('Frequently Asked Questions (FAQ)', 'សំណួរដែលសួរញឹកញាប់ (FAQ)', '常见问题解答（FAQ问答库）')}
          </h3>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
            <input
              type="text"
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              placeholder="Search FAQ repository..."
              className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>
        </div>

        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const question = getT(faq.q.en, faq.q.km, faq.q.zh);
            const answer = getT(faq.a.en, faq.a.km, faq.a.zh);
            const isOpen = openFaqIndex === idx;

            return (
              <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden transition">
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-4 text-left bg-slate-50 hover:bg-slate-100 font-extrabold text-xs sm:text-sm text-slate-900 font-serif flex items-center justify-between gap-3 transition"
                >
                  <span>{question}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 shrink-0 text-blue-900" /> : <ChevronDown className="w-4 h-4 shrink-0 text-slate-400" />}
                </button>

                {isOpen && (
                  <div className="p-4 bg-white border-t border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
                    {answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* New Ticket Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-extrabold text-base text-slate-900 font-serif">
                {getT('Open New Support Ticket', 'បង្កើតសំបុត្រជំនួយថ្មី', '开立服务工单')}
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!submittedSuccess ? (
              <form onSubmit={handleCreateTicket} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">Inquiry Topic *</label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-bold text-slate-900"
                  >
                    <option value="operations">Guard Operations & Shift Scheduling</option>
                    <option value="quotation">Quotation & SLA Contract Inquiry</option>
                    <option value="billing">Invoicing & VAT Payment</option>
                    <option value="emergency">Emergency Response Logistics</option>
                    <option value="recruitment">Guard Guard Force Recruitment</option>
                    <option value="general">General Corporate Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">Subject Line *</label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Brief description of support request"
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl font-bold text-slate-900"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">Detailed Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-slate-900"
                  ></textarea>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="flex-1 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-blue-900 text-white font-extrabold rounded-xl hover:bg-blue-950 shadow"
                  >
                    Submit Ticket
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-6 text-center space-y-4 text-xs">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-extrabold text-slate-900 text-base">Ticket Submitted to Help Desk</h4>
                <p className="text-slate-600">
                  Ref <code className="bg-slate-100 px-1.5 py-0.5 rounded font-bold text-blue-900">{tickets[0]?.ticketId}</code> has been dispatched. Expected response time within 2 business hours.
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-2.5 bg-blue-900 text-white font-bold rounded-xl"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
