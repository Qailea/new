import React, { useState } from 'react';
import { Search, X, ShieldCheck, ArrowRight, Building2, MapPin, FileSearch } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveTab: (tab: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, setActiveTab }) => {
  const { t } = useLanguage();
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const searchItems = [
    { title: 'Direct Security Guard Services', tab: 'services', category: 'Services', desc: '24/7 static guard deployment for factories, commercial towers, banks and boreys.' },
    { title: 'VIP Protection & Escort', tab: 'services', category: 'Services', desc: 'Personal bodyguards, motorcade escort, and executive travel security.' },
    { title: 'Request a Security Quote', tab: 'quotation', category: 'Quotation', desc: 'Submit security requirements and receive a customized service proposal.' },
    { title: 'Ministry License & Company Credentials', tab: 'trust', category: 'Credentials', desc: 'MOI License #KNSK-SEC-2015-089, official tax patent and NSSF registration.' },
    { title: '25 Provinces Coverage & Branch Offices', tab: 'coverage', category: 'Network', desc: 'Phnom Penh HQ, Siem Reap, Sihanoukville, Battambang regional sub-stations.' },
    { title: 'Guard Recruitment & Security Jobs', tab: 'recruitment', category: 'Careers', desc: 'Join K.N.S.K security force, view requirements, salary and apply online.' },
    { title: 'About K.N.S.K Security Co., Ltd.', tab: 'about', category: 'Company', desc: 'Company leadership, founding history since 2015, and mission standards.' },
  ];

  const filtered = query.trim() === ''
    ? searchItems.slice(0, 4)
    : searchItems.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-2xl w-full overflow-hidden flex flex-col">
        {/* Search Bar Input Header */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-blue-900 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search security services, license verification, 25 provinces, recruitment..."
            className="w-full bg-transparent text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded bg-slate-200 hover:bg-slate-300 text-slate-600 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results */}
        <div className="p-4 max-h-[60vh] overflow-y-auto space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2">
            {query.trim() === '' ? 'Suggested Quick Links' : `Search Results (${filtered.length})`}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-8 text-slate-500 text-xs">
              No results found for "{query}". Try searching for "guard", "quote", "verify", or "province".
            </div>
          ) : (
            filtered.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setActiveTab(item.tab);
                  onClose();
                }}
                className="p-3 rounded-lg hover:bg-blue-50 border border-transparent hover:border-blue-200 transition cursor-pointer flex items-center justify-between group"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-900 bg-blue-100 px-2 py-0.5 rounded-xs">
                      {item.category}
                    </span>
                    <h4 className="font-bold text-sm text-slate-900 group-hover:text-blue-900 transition-colors font-serif">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 pl-0.5">
                    {item.desc}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-900 group-hover:translate-x-1 transition-all shrink-0 ml-3" />
              </div>
            ))
          )}
        </div>

        {/* Search Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Official Search • K.N.S.K Security Co., Ltd.</span>
          <span className="font-mono">ESC to close</span>
        </div>
      </div>
    </div>
  );
};
