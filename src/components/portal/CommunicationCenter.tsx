import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { PortalMessage } from './PortalTypes';
import {
  MessageSquare,
  Send,
  UserCheck,
  ShieldCheck,
  Building2,
  Headphones,
  Paperclip,
  CheckCheck,
  Clock,
  Sparkles,
  PhoneCall
} from 'lucide-react';

export const CommunicationCenter: React.FC = () => {
  const { getT } = useLanguage();

  const [activeChannel, setActiveChannel] = useState<'operations' | 'sales' | 'customer_service'>('operations');
  const [replyText, setReplyText] = useState('');

  // Mock Messages
  const [messages, setMessages] = useState<PortalMessage[]>([
    {
      id: 'MSG-001',
      threadId: 'THREAD-OPS',
      channel: 'operations',
      sender: 'knsk_staff',
      senderName: 'Commander Sok Vanna',
      senderRole: 'Site Station Commander',
      message: {
        en: 'Good morning, Security Director Sokha. All 12 day-shift officers have passed morning briefing and thermal checks. Station posts fully manned.',
        km: 'ជម្រាបសួរលោកនាយកសន្តិសុខ សុខា។ ភ្នាក់ងារវេនថ្ងៃទាំង ១២នាក់ បានឆ្លងកាត់ការណែនាំពេលព្រឹក និងត្រួតពិនិត្យរួចរាល់។',
        zh: '早安，Sokha安保总监。12名白班队员已完成早班训示及体温测试，各岗位已全部就位。'
      },
      timestamp: 'Today, 06:15 AM',
      read: true
    },
    {
      id: 'MSG-002',
      threadId: 'THREAD-OPS',
      channel: 'operations',
      sender: 'client',
      senderName: 'Sokha Ly',
      senderRole: 'Client Security Director',
      message: {
        en: 'Thank you Commander Vanna. Please remind the vault guards to double-check contractor badges at 14:00 PM today.',
        km: 'សូមអរគុណមេបញ្ជាការ វណ្ណា។ សូមរំលឹកសន្តិសុខនៅទូដែកឱ្យពិនិត្យប័ណ្ណអ្នកម៉ៅការនៅម៉ោង ២:០០ រសៀលនេះ។',
        zh: '感谢Vanna队长。请提醒金库守卫今天下午14:00复核施工人员证件。'
      },
      timestamp: 'Today, 08:30 AM',
      read: true
    },
    {
      id: 'MSG-003',
      threadId: 'THREAD-OPS',
      channel: 'operations',
      sender: 'knsk_staff',
      senderName: 'Commander Sok Vanna',
      senderRole: 'Site Station Commander',
      message: {
        en: 'Acknowledged. Vault guards briefed and scanner logged.',
        km: 'ទទួលជ្រាប។ បានណែនាំសន្តិសុខទូដែក និងកត់ត្រារួចរាល់។',
        zh: '收到指令。已向金库守卫传达并登记备案。'
      },
      timestamp: 'Today, 08:42 AM',
      read: true
    },
    {
      id: 'MSG-101',
      threadId: 'THREAD-SALES',
      channel: 'sales',
      sender: 'knsk_staff',
      senderName: 'Commercial Director Bunna',
      senderRole: 'K.N.S.K Sales & SLA Dept',
      message: {
        en: 'Dear ABA Bank Team, your annual SLA renewal quotation for 2027 is ready in the Quotation Center for your review.',
        km: 'ជូនចំពោះក្រុមការងារធនាគារ ABA ការប្រម៉ង់តម្លៃកិច្ចសន្យាថ្មីឆ្នាំ២០២៧ បានរៀបចំរួចរាល់ក្នុងមជ្ឈមណ្ឌលតម្លៃ។',
        zh: '尊贵的ABA银行团队，2027年度SLA续约报价单已存入报价中心供您审阅。'
      },
      timestamp: 'Yesterday, 15:20 PM',
      read: true,
      attachmentName: 'KNSK-SLA-RENEWAL-2027.pdf'
    },
    {
      id: 'MSG-201',
      threadId: 'THREAD-CS',
      channel: 'customer_service',
      sender: 'knsk_staff',
      senderName: 'Channary Touch',
      senderRole: 'Customer Relations Manager',
      message: {
        en: 'How was our guard team performance during last week’s VIP event? We welcome your satisfaction feedback.',
        km: 'តើការអនុវត្តការងាររបស់ក្រុមសន្តិសុខក្នុងកម្មវិធី VIP សប្តាហ៍មុនយ៉ាងណាដែរ? យើងខ្ញុំរីករាយទទួលការផ្តល់មតិ។',
        zh: '请问上周VIP活动中我方安保团队表现如何？欢迎提供服务满意度反馈。'
      },
      timestamp: 'August 01, 2026',
      read: true
    }
  ]);

  const activeMessages = messages.filter((m) => m.channel === activeChannel);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    const newMsg: PortalMessage = {
      id: `MSG-${Date.now()}`,
      threadId: `THREAD-${activeChannel.toUpperCase()}`,
      channel: activeChannel,
      sender: 'client',
      senderName: 'Sokha Ly',
      senderRole: 'Client Security Director',
      message: { en: replyText, km: replyText, zh: replyText },
      timestamp: 'Just now',
      read: true
    };

    setMessages([...messages, newMsg]);
    setReplyText('');
  };

  const channelInfo = {
    operations: {
      title: 'Operations Command Team',
      subtitle: 'Direct communication with site station commander & patrol leads',
      badge: '24/7 LIVE'
    },
    sales: {
      title: 'Commercial & SLA Team',
      subtitle: 'Contract renewals, guard scale-ups & billing discussions',
      badge: 'BUSINESS HOURS'
    },
    customer_service: {
      title: 'Customer Satisfaction Desk',
      subtitle: 'Service quality reviews, feedback & management inquiries',
      badge: 'SUPPORT ACTIVE'
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold text-blue-900 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded uppercase">
              Secure Enterprise Messaging
            </span>
            <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
              Encrypted Session
            </span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 font-serif">
            {getT('Operations & Management Messaging', 'មជ្ឈមណ្ឌលទំនាក់ទំនង និងផ្ញើសារ', '运营与指挥直连沟通中心')}
          </h2>
          <p className="text-xs text-slate-500">
            {getT(
              'Direct encrypted messaging thread between client security managers and K.N.S.K commanders.',
              'ទំនាក់ទំនងផ្ទាល់ដោយសុវត្ថិភាពរវាងអ្នកគ្រប់គ្រងសន្តិសុខអតិថិជន និងមេបញ្ជាការ K.N.S.K។',
              '客户安保主管与K.N.S.K指挥官之间的加密直连沟通通道。'
            )}
          </p>
        </div>

        <a
          href="tel:0964838666"
          className="px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow flex items-center gap-1.5 transition"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Hotline: 096 483 8666</span>
        </a>
      </div>

      {/* Main Messaging Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden min-h-[500px]">
        
        {/* Left Channel Sidebar (4 cols) */}
        <div className="lg:col-span-4 border-r border-slate-200 bg-slate-50 p-4 space-y-3">
          <span className="text-xs font-extrabold text-slate-500 uppercase font-mono tracking-wider block px-2">
            Communication Channels
          </span>

          <div className="space-y-2">
            {[
              { id: 'operations', icon: ShieldCheck, name: 'Operations Command', desc: 'Station Commander' },
              { id: 'sales', icon: Building2, name: 'Sales & Contract SLA', desc: 'Commercial Team' },
              { id: 'customer_service', icon: Headphones, name: 'Customer Support Desk', desc: 'Quality Relations' },
            ].map((ch) => {
              const Icon = ch.icon;
              const isActive = activeChannel === ch.id;
              return (
                <button
                  key={ch.id}
                  onClick={() => setActiveChannel(ch.id as any)}
                  className={`w-full p-3.5 rounded-2xl text-left transition flex items-center gap-3 border ${
                    isActive
                      ? 'bg-blue-900 text-white border-blue-900 shadow-md'
                      : 'bg-white text-slate-800 hover:bg-slate-100 border-slate-200'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl shrink-0 ${
                    isActive ? 'bg-white/10 text-white' : 'bg-slate-100 text-blue-900'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs">{ch.name}</h4>
                    <p className={`text-[10px] ${isActive ? 'text-blue-200' : 'text-slate-500'}`}>{ch.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Chat Thread Panel (8 cols) */}
        <div className="lg:col-span-8 flex flex-col justify-between p-4 sm:p-6 bg-white space-y-4">
          
          {/* Thread Header */}
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-base text-slate-900 font-serif">
                  {channelInfo[activeChannel].title}
                </h3>
                <span className="text-[9px] font-mono font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                  {channelInfo[activeChannel].badge}
                </span>
              </div>
              <p className="text-xs text-slate-500">{channelInfo[activeChannel].subtitle}</p>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2">
            {activeMessages.map((msg) => {
              const isClient = msg.sender === 'client';
              const text = getT(msg.message.en, msg.message.km, msg.message.zh);

              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isClient ? 'items-end' : 'items-start'}`}
                >
                  <div className="flex items-center gap-2 mb-1 text-[10px] font-mono text-slate-400">
                    <span className="font-bold text-slate-700">{msg.senderName}</span>
                    <span>({msg.senderRole})</span>
                    <span>• {msg.timestamp}</span>
                  </div>

                  <div
                    className={`max-w-md p-4 rounded-2xl text-xs leading-relaxed space-y-2 ${
                      isClient
                        ? 'bg-blue-900 text-white rounded-tr-none shadow-md'
                        : 'bg-slate-100 text-slate-800 border border-slate-200 rounded-tl-none'
                    }`}
                  >
                    <p>{text}</p>

                    {msg.attachmentName && (
                      <div className="pt-2 border-t border-white/20 flex items-center gap-2 text-[11px] font-mono">
                        <Paperclip className="w-3.5 h-3.5" />
                        <span className="underline cursor-pointer">{msg.attachmentName}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Message Input Box */}
          <form onSubmit={handleSendMessage} className="pt-3 border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Type message to K.N.S.K Command Team..."
              className="flex-1 px-4 py-3 bg-slate-50 border border-slate-300 rounded-2xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            <button
              type="submit"
              className="px-5 py-3 bg-blue-900 hover:bg-blue-950 text-white font-extrabold text-xs rounded-2xl shadow flex items-center gap-1.5 transition"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Send</span>
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};
