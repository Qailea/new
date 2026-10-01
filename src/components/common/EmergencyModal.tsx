import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, AlertTriangle, ShieldAlert, Send, CheckCircle2, X, MessageSquare } from 'lucide-react';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [reported, setReported] = useState(false);
  const [location, setLocation] = useState('');
  const [incidentDetails, setIncidentDetails] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReported(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-red-200 relative">
        {/* Header */}
        <div className="bg-red-600 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <ShieldAlert className="w-7 h-7 text-white animate-pulse" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">24/7 K.N.S.K Emergency Response</h3>
              <p className="text-xs text-red-100">Direct Command Center Dispatch • Nationwide Hotline</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Direct Hotlines */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-red-700 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" /> Immediate Call Hotline (24 Hours)
            </span>
            <div className="space-y-2">
              <a
                href="tel:0964838666"
                className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl shadow transition text-sm font-mono tracking-wider"
              >
                <Phone className="w-4 h-4 animate-pulse" />
                <span>24/7 Hotline: 096 483 8666</span>
              </a>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <a
                  href="tel:093878666"
                  className="flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 text-slate-800 font-bold py-2 px-3 rounded-lg border border-slate-300 shadow-xs transition"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-900" />
                  <span>General: 093 878 666</span>
                </a>
                <a
                  href="tel:060878666"
                  className="flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 text-slate-800 font-bold py-2 px-3 rounded-lg border border-slate-300 shadow-xs transition"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-900" />
                  <span>General: 060 878 666</span>
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                <a
                  href="https://t.me/KNSK_security"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-3 rounded-lg shadow-xs transition"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Telegram (@KNSK_security)</span>
                </a>
                <a
                  href="https://wa.me/855964838666?s=t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-3 rounded-lg shadow-xs transition"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp (+855 96 483 8666)</span>
                </a>
              </div>
            </div>
          </div>

          {!reported ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h4 className="text-sm font-bold text-slate-800">Or Request Instant Command Dispatch:</h4>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Your Facility / Location in Cambodia *</label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g., ABA Bank Veng Sreng Branch, Phnom Penh"
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Contact Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  placeholder="e.g., 012 888 999"
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Brief Incident Description</label>
                <textarea
                  rows={2}
                  value={incidentDetails}
                  onChange={(e) => setIncidentDetails(e.target.value)}
                  placeholder="Describe emergency (e.g. Unauthorized intrusion, perimeter breach, medical support)..."
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                ></textarea>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-2.5 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-md flex items-center justify-center gap-2 transition"
                >
                  <Send className="w-4 h-4" /> Dispatch Rapid Team
                </button>
              </div>
            </form>
          ) : (
            <div className="py-6 text-center space-y-3">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Emergency Dispatch Signal Transmitted!</h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                K.N.S.K Headquarters Command Officer is calling <strong className="text-slate-900">{contactNumber}</strong> right now. Rapid Intervention Unit dispatched to {location}.
              </p>
              <button
                onClick={() => {
                  setReported(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2 text-xs font-bold text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
