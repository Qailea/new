import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Sparkles, MessageSquare, X, Send, Bot, User, PhoneCall, ShieldCheck } from 'lucide-react';

export const SecurityAiAssistant: React.FC = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    {
      role: 'assistant',
      content:
        language === 'km'
          ? 'ជម្រាបសួរ! ខ្ញុំជាជំនួយការ AI របស់ក្រុមហ៊ុនសន្តិសុខ K.N.S.K។ តើខ្ញុំអាចជួយប្រឹក្សាអំពីសេវាការពារ ឬសម្រង់តម្លៃបានយ៉ាងដូចម្តេច?'
          : language === 'zh'
          ? '您好！我是 K.N.S.K 安保有限公司的 AI 安全顾问。请问有什么可以为您解答？'
          : 'Hello! I am the official AI Security Consultant for K.N.S.K Security Co., Ltd. How can I assist you with guard services or quotation estimates today?',
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || loading) return;

    const userText = inputMessage;
    setInputMessage('');
    setMessages((prev) => [...prev, { role: 'user', content: userText }]);
    setLoading(true);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userText,
          language,
        }),
      });

      const data = await res.json();
      if (data.reply) {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content:
              data.fallback ||
              'Thank you for reaching out to K.N.S.K Security Co., Ltd. Our dispatch center is available 24/7 at 096 483 8666.',
          },
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'K.N.S.K Security officers are available 24/7. Call our hotline at 096 483 8666, 093 878 666, or 060 878 666, or message us directly on Telegram (@KNSK_security).',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Pill */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 hover:from-blue-900 hover:to-slate-800 text-white font-bold px-4 py-3 rounded-full shadow-2xl border border-blue-500/50 flex items-center gap-2.5 transition transform hover:scale-105 active:scale-95 group"
            aria-label="Open AI Security Consultant"
          >
            <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white shrink-0 group-hover:rotate-12 transition-transform shadow-md">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-left hidden sm:block pr-1">
              <div className="text-xs font-extrabold leading-tight text-white">{t('ai_assistant_title')}</div>
              <div className="text-[10px] text-blue-300 font-mono">24/7 Gemini AI Assistant</div>
            </div>
          </button>
        </div>
      )}

      {/* Assistant Modal Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm sm:max-w-md bg-white rounded-2xl shadow-2xl border border-slate-300 overflow-hidden flex flex-col h-[500px] max-h-[85vh] animate-fadeIn">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white p-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-red-600 rounded-xl text-white shadow-md">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm leading-tight text-white font-serif">{t('ai_assistant_title')}</h4>
                <p className="text-[10px] text-blue-200 font-mono">K.N.S.K Security Co., Ltd. Enterprise AI</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <a
                href="https://t.me/KNSK_security"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-[10px] font-bold transition shadow-xs"
                title="Open Official Telegram: @KNSK_security"
              >
                <Send className="w-3 h-3 text-white" />
                <span>Telegram</span>
              </a>

              <a
                href="tel:0964838666"
                className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 bg-red-600/90 hover:bg-red-600 text-white rounded-lg text-[10px] font-bold transition border border-red-500"
                title="Call 24/7 Emergency Hotline"
              >
                <PhoneCall className="w-3 h-3 animate-pulse" />
                <span>096 483 8666</span>
              </a>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 text-xs">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-red-600 text-white rounded-tr-none font-medium shadow-sm'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none shadow-sm'
                  }`}
                >
                  {msg.content}
                </div>
                {msg.role === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="flex items-center gap-2 text-slate-500 italic text-[11px]">
                <Bot className="w-4 h-4 animate-spin text-blue-900" />
                <span>K.N.S.K AI Security Consultant is thinking...</span>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-200 flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={t('ai_assistant_placeholder')}
              className="flex-1 px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="p-2.5 bg-blue-900 hover:bg-blue-800 text-white rounded-xl shadow font-bold transition shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
