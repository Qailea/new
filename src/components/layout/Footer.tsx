import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CompanyLogo } from '../common/CompanyLogo';
import {
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Clock,
  Building2,
  X,
  FileText,
  Facebook,
  Send
} from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const { t, language } = useLanguage();
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Slogan Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 border-b border-slate-800 py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/80 border border-red-700/60 rounded-full text-red-400 text-[11px] font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" /> Official Company Motto
          </div>
          <h2 className="text-base sm:text-lg font-bold text-white max-w-4xl mx-auto font-serif leading-relaxed">
            "{t('slogan_primary')}"
          </h2>
          <p className="text-xs text-red-500 font-bold uppercase tracking-widest">
            {t('slogan_sub')}
          </p>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Col 1: Logo & Company Specs */}
        <div className="lg:col-span-2 space-y-4">
          <CompanyLogo size="lg" showSubtext={true} variant="dark" />
          <p className="text-xs text-slate-400 leading-relaxed">
            K.N.S.K Security Co., Ltd. is a premier private security firm licensed by the Ministry of Interior (#KNSK-SEC-2015-089) providing 24/7 manned security, VIP protection, and rapid response patrol across all 25 provinces in Cambodia.
          </p>
          <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-800 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">MOI License:</span>
              <strong className="text-emerald-400 font-mono">#KNSK-SEC-2015-089</strong>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Command Center:</span>
              <strong className="text-emerald-400 flex items-center gap-1">
                <Clock className="w-3 h-3" /> 24/7/365 Active
              </strong>
            </div>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="space-y-3">
          <h4 className="font-bold text-white text-xs uppercase tracking-wider text-blue-400 border-b border-slate-800 pb-2">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => setActiveTab('home')} className="hover:text-white transition flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> Home
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('about')} className="hover:text-white transition flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> About K.N.S.K
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('services')} className="hover:text-white transition flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> Security Services
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('coverage')} className="hover:text-white transition flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> 25 Provinces Coverage
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('verify')} className="hover:text-white transition flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> License & Guard Check
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('quotation')} className="hover:text-white transition flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-500" /> Request Proposal
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('recruitment')} className="hover:text-white transition flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> Guard Careers
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Key Regional Stations */}
        <div className="space-y-3">
          <h4 className="font-bold text-white text-xs uppercase tracking-wider text-blue-400 border-b border-slate-800 pb-2">
            Branch Stations
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="bg-slate-900 p-2 rounded border border-slate-800">
              <strong className="text-white block font-serif">Head Office</strong>
              <span className="text-[11px] text-slate-400">Mean Chey District, Phnom Penh</span>
            </li>
            <li className="bg-slate-900 p-2 rounded border border-slate-800">
              <strong className="text-white block font-serif">Station 1 (Chamkar Mon)</strong>
              <span className="text-[11px] text-slate-400">Tuol Svay Prey II, Chamkar Mon</span>
            </li>
            <li className="bg-slate-900 p-2 rounded border border-slate-800">
              <strong className="text-white block font-serif">Station 2 (Kamboul)</strong>
              <span className="text-[11px] text-slate-400">National Road 3, Kamboul</span>
            </li>
            <li className="bg-slate-900 p-2 rounded border border-slate-800">
              <strong className="text-white block font-serif">Station 3 (Chrey Thom)</strong>
              <span className="text-[11px] text-slate-400">Prek Sdey, Koh Thom, Kandal</span>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact & Location */}
        <div className="space-y-3">
          <h4 className="font-bold text-white text-xs uppercase tracking-wider text-red-500 border-b border-slate-800 pb-2">
            Headquarters Contact
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>#31A22, Street 08, Group 21, Tuol Roka Village, Chak Angre Kraom Commune, Mean Chey District, Phnom Penh, Cambodia</span>
            </li>
            <li className="space-y-1.5 pt-1">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">24/7 Hotline & Sales:</span>
                <a
                  href="tel:0964838666"
                  className="text-white font-mono font-bold hover:text-red-400 transition"
                >
                  096 483 8666
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pl-6 text-xs text-slate-300">
                <span className="text-[11px] text-slate-400">General Contacts:</span>
                <a
                  href="tel:093878666"
                  className="font-mono font-bold hover:text-blue-300 transition text-slate-200"
                >
                  093 878 666
                </a>
                <span className="text-slate-700">•</span>
                <a
                  href="tel:060878666"
                  className="font-mono font-bold hover:text-blue-300 transition text-slate-200"
                >
                  060 878 666
                </a>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-red-500 shrink-0" />
              <a
                href="mailto:soengknsk@gmail.com"
                className="font-mono text-slate-300 hover:text-white transition"
              >
                soengknsk@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Facebook className="w-4 h-4 text-red-500 shrink-0" />
              <a
                href="https://www.facebook.com/share/1BrYBJpnQk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition font-medium"
              >
                Facebook
              </a>
            </li>
            <li className="flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-red-500 shrink-0"
              >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9l-5.05.9" />
                <path d="M9 10a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
              </svg>
              <a
                href="https://wa.me/855964838666?s=t"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition font-medium"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Send className="w-4 h-4 text-red-500 shrink-0" />
              <a
                href="https://t.me/KNSK_security"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition font-medium"
              >
                Telegram (@KNSK_security)
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-5 px-4 sm:px-8 text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© 2026 K.N.S.K Security Co., Ltd. All Rights Reserved.</div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-white transition"
            >
              Privacy Policy
            </button>
            <span className="text-slate-800">•</span>
            <button
              onClick={() => setModalType('terms')}
              className="hover:text-white transition"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Legal Modals */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 text-white rounded-xl border border-slate-700 max-w-lg w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white font-serif">
                {modalType === 'privacy' ? 'Privacy & Data Protection Policy' : 'Terms of Service & SLA'}
              </h3>
              <button
                onClick={() => setModalType(null)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {modalType === 'privacy'
                ? 'K.N.S.K Security Co., Ltd. complies strictly with Ministry of Interior directives regarding client confidentiality, guard background screening data, and secure incident logging.'
                : 'Service Level Agreements (SLAs) guarantee 24/7 guard rotation, mandatory supervisor inspection, and rapid emergency patrol dispatch.'}
            </p>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setModalType(null)}
                className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded"
              >
                Acknowledge
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
