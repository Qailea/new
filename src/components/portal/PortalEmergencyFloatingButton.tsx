import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { PhoneCall, AlertTriangle, ShieldCheck, X, Zap, Send } from 'lucide-react';

export const PortalEmergencyFloatingButton: React.FC = () => {
  const { getT } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Persistent Floating Emergency Dispatch Trigger */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-red-600 hover:bg-red-700 text-white font-extrabold px-4 py-3 rounded-full shadow-2xl border-2 border-red-400 flex items-center gap-2.5 transition transform hover:scale-105 active:scale-95 animate-pulse group"
          title="24/7 Security Emergency Hotline"
        >
          <div className="w-8 h-8 rounded-full bg-white text-red-600 flex items-center justify-center shrink-0 shadow-md">
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <div className="text-left hidden sm:block pr-1">
            <div className="text-xs font-black uppercase tracking-wider">
              {getT('24/7 Emergency Hotline', 'ទូរស័ព្ទអាសន្ន ២៤/៧', '24/7 紧急热线')}
            </div>
            <div className="text-[10px] text-red-100 font-mono font-bold">096 483 8666 • Command Center</div>
          </div>
        </button>
      </div>

      {/* Emergency Hotline Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-2 border-red-600 space-y-6 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-3 bg-red-600"></div>

            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto shadow-inner border border-red-200">
              <PhoneCall className="w-9 h-9 animate-bounce" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full uppercase tracking-wider">
                {getT('Priority Dispatch Hotline', 'ខ្សែទូរស័ព្ទបញ្ជាការអាសន្ន', '优先应急指挥热线')}
              </span>
              <h3 className="text-2xl font-black text-slate-900 font-serif">
                {getT('Immediate Security Reinforcement', 'ការឆ្លើយតបសន្តិសុខជាបន្ទាន់', '即刻安保紧急支援')}
              </h3>
              <p className="text-xs text-slate-600">
                {getT(
                  'Connect directly with the K.N.S.K General Command Duty Officer for rapid mobile reinforcement, panic alarm response, or on-site supervisor dispatch.',
                  'ទាក់ទងផ្ទាល់ជាមួយនាយនគរបាលបញ្ជាការ K.N.S.K សម្រាប់ការបញ្ជូនកម្លាំងអន្តរាគមន៍ជាបន្ទាន់២៤ម៉ោង។',
                  '直连K.N.S.K总指挥部值班指挥官，提供24小时快速机动增援、防盗报警响应及现场主管派驻。'
                )}
              </p>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 space-y-3">
              <div className="text-[11px] text-slate-400 font-mono uppercase tracking-wider">Direct Hotline Numbers</div>
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2">
                <a
                  href="tel:0964838666"
                  className="w-full sm:w-auto px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-black text-xs rounded-xl flex items-center justify-center gap-2 shadow-lg transition"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>096 483 8666</span>
                </a>
                <a
                  href="tel:093878666"
                  className="w-full sm:w-auto px-4 py-2.5 bg-blue-900 hover:bg-blue-950 text-white font-black text-xs rounded-xl flex items-center justify-center gap-2 border border-blue-700 transition"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-blue-300" />
                  <span>093 878 666</span>
                </a>
                <a
                  href="tel:060878666"
                  className="w-full sm:w-auto px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-black text-xs rounded-xl flex items-center justify-center gap-2 border border-slate-700 transition"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                  <span>060 878 666</span>
                </a>
                <a
                  href="https://t.me/KNSK_security"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-black text-xs rounded-xl flex items-center justify-center gap-2 shadow-lg transition"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Telegram (@KNSK_security)</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-left text-xs font-medium text-slate-700 pt-2 border-t border-slate-100">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Response Time &lt; 15 Mins</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>24/7 Patrol Backup</span>
              </div>
            </div>

            <button
              onClick={() => setModalOpen(false)}
              className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition"
            >
              {getT('Close Window', 'បិទបង្អួច', '关闭窗口')}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
