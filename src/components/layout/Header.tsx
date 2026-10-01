import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { EmergencyModal } from '../common/EmergencyModal';
import { SearchModal } from '../common/SearchModal';
import { CompanyLogo } from '../common/CompanyLogo';
import {
  PhoneCall,
  Menu,
  X,
  FileCheck,
  Search,
  Send,
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const { t, language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { id: 'home', labelEn: 'Home', labelKm: 'ទំព័រដើម', labelZh: '首页' },
    { id: 'about', labelEn: 'About Us', labelKm: 'អំពីក្រុមហ៊ុន', labelZh: '关于我们' },
    { id: 'services', labelEn: 'Security Services', labelKm: 'សេវាកម្មសន្តិសុខ', labelZh: '安保服务' },
    { id: 'industries', labelEn: 'Industries', labelKm: 'វិស័យការពារ', labelZh: '服务行业' },
    { id: 'coverage', labelEn: 'Coverage', labelKm: 'បណ្តាញ ២៥ ខេត្ត', labelZh: '覆盖网络' },
    { id: 'recruitment', labelEn: 'Careers', labelKm: 'ជ្រើសរើសបុគ្គលិក', labelZh: '招贤纳士' },
    { id: 'trust', labelEn: 'Media & Trust', labelKm: 'មជ្ឈមណ្ឌលព័ត៌មាន', labelZh: '企业信任与媒体' },
    { id: 'contact', labelEn: 'Contact', labelKm: 'ទំនាក់ទំនង', labelZh: '联系我们' },
  ];

  const getNavLabel = (item: typeof navItems[0]) => {
    if (language === 'km') return item.labelKm;
    if (language === 'zh') return item.labelZh;
    return item.labelEn;
  };

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Corporate Utility Bar (Desktop / Tablet) */}
      <div className="hidden sm:block bg-slate-900 text-slate-300 text-[11px] font-semibold border-b border-slate-800 py-2 px-4 sm:px-8 uppercase tracking-wider">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Left: Ministry Verification Notice & Credentials */}
          <div className="flex items-center gap-4 text-slate-300">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-bold bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800/80">
              <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
              MOI Licensed #KNSK-SEC-2015-089
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="hidden sm:inline text-slate-300 font-medium">
              25 Provinces Coverage
            </span>
          </div>

          {/* Right: 24/7 Emergency Hotline & Telegram */}
          <div className="flex items-center gap-3 ml-auto">
            <a
              href="https://t.me/KNSK_security"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 bg-sky-700 hover:bg-sky-600 text-white font-bold px-3 py-1 rounded transition text-[11px] tracking-wider shadow-sm group"
              title="Official Telegram: @KNSK_security"
            >
              <Send className="w-3 h-3 text-white" />
              <span>Telegram (@KNSK_security)</span>
            </a>

            <a
              href="tel:0964838666"
              className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white font-bold px-3.5 py-1 rounded transition text-[11px] tracking-wider shadow-sm group"
              title={language === 'km' ? 'ខ្សែទូរស័ព្ទអាសន្ន ២៤/៧: 096 483 8666' : '24/7 Emergency Hotline: 096 483 8666'}
            >
              <PhoneCall className="w-3 h-3 animate-pulse text-white" />
              <span className="hidden sm:inline font-medium text-red-100">
                {language === 'km' ? 'ខ្សែទូរស័ព្ទអាសន្ន ២៤/៧:' : language === 'zh' ? '24/7 紧急热线:' : '24/7 Emergency Hotline:'}
              </span>
              <span className="font-extrabold tracking-widest font-mono">096 483 8666</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          {/* Company Brand Logo with Official KNSK Emblem */}
          <div onClick={() => handleNavClick('home')} className="cursor-pointer shrink-0">
            <CompanyLogo size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-[12px] font-bold uppercase tracking-wider transition-all py-1 ${
                    isActive
                      ? 'text-blue-900 border-b-2 border-blue-900'
                      : 'text-slate-600 hover:text-blue-900'
                  }`}
                >
                  {getNavLabel(item)}
                </button>
              );
            })}
          </nav>

          {/* Right Header Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Search Trigger Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-900 border border-slate-200 transition"
              title="Search Services & Verification"
            >
              <Search className="w-4 h-4" />
            </button>

            <LanguageSwitcher />

            {/* Request a Quote Primary Action Button */}
            <button
              onClick={() => handleNavClick('quotation')}
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 text-[12px] font-bold uppercase tracking-widest text-white bg-red-600 hover:bg-red-700 rounded shadow-md shadow-red-200 transition-all hover:scale-[1.02]"
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span>{language === 'km' ? 'ស្នើសុំតម្លៃ' : language === 'zh' ? '申请报价' : 'Request Quote'}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded text-slate-700 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 animate-fadeIn max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2.5 text-xs font-bold uppercase tracking-wider rounded transition ${
                  activeTab === item.id
                    ? 'text-blue-900 bg-blue-50 border border-blue-200'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {getNavLabel(item)}
              </button>
            ))}

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  handleNavClick('quotation');
                }}
                className="w-full py-2.5 text-center font-bold text-xs uppercase tracking-wider text-white bg-red-600 rounded shadow"
              >
                {language === 'km' ? 'ស្នើសុំការផ្តល់ជូនតម្លៃ' : language === 'zh' ? '申请定制报价' : 'Request a Quote'}
              </button>

              <a
                href="tel:0964838666"
                className="w-full py-2.5 px-3 text-center font-bold text-xs uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded shadow flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 animate-pulse" />
                <span>
                  {language === 'km' ? 'ខ្សែទូរស័ព្ទអាសន្ន ២៤/៧: 096 483 8666' : language === 'zh' ? '24/7 紧急热线: 096 483 8666' : '24/7 Hotline: 096 483 8666'}
                </span>
              </a>

              <a
                href="https://t.me/KNSK_security"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 text-center font-bold text-xs uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 rounded shadow flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Telegram (@KNSK_security)</span>
              </a>

              <button
                onClick={() => {
                  setEmergencyOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 text-center font-bold text-xs uppercase tracking-wider text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded"
              >
                {t('btn_emergency')}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Emergency & Search Modals */}
      <EmergencyModal isOpen={emergencyOpen} onClose={() => setEmergencyOpen(false)} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} setActiveTab={setActiveTab} />
    </>
  );
};
