import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { PortalNotification } from './PortalTypes';
import {
  Bell,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Filter,
  Check,
  Megaphone,
  Briefcase,
  Sparkles
} from 'lucide-react';

export const NotificationCenter: React.FC = () => {
  const { getT } = useLanguage();

  const [activeTab, setActiveTab] = useState<'ALL' | PortalNotification['category']>('ALL');

  const [notifications, setNotifications] = useState<PortalNotification[]>([
    {
      id: 'NOTIF-001',
      category: 'holiday',
      title: {
        en: 'Khmer New Year Holiday Security Operations Directive',
        km: 'សេចក្តីណែនាំប្រតិបត្តិការសន្តិសុខ ឱកាសបុណ្យចូលឆ្នាំខ្មែរ',
        zh: '柬埔寨新年假期安保特别勤务指令'
      },
      content: {
        en: 'K.N.S.K General Command will deploy 100% full double-shift guarding across all corporate bank HQ sites during public holidays.',
        km: 'បញ្ជាការដ្ឋានទូទៅ K.N.S.K នឹងដាក់ពង្រាយកម្លាំងពេញលេញ ១០០% តាមសាខាធនាគារទាំងអស់ក្នុងឱកាសបុណ្យ។',
        zh: 'K.N.S.K总指挥部将在公共假期期间为所有企业银行总部提供100%全勤双班安保保障。'
      },
      date: 'August 02, 2026',
      read: false,
      priority: 'HIGH_ALERT'
    },
    {
      id: 'NOTIF-002',
      category: 'service_updates',
      title: {
        en: 'Enhanced QR Wand & GPS Checkpoints Implemented',
        km: 'ការដាក់ឱ្យប្រើប្រាស់ប្រព័ន្ធល្បាត QR code និង GPS ថ្មី',
        zh: '已全新升级QR巡逻打卡及GPS定位系统'
      },
      content: {
        en: 'Guards now upload real-time photos during every vault perimeter scan. Reports sync instantly to your Document Center.',
        km: 'ភ្នាក់ងារសន្តិសុខនឹងថតរូបភាពជាក់ស្តែងពេលល្បាត។ របាយការណ៍នឹងបញ្ចូលក្នុងមជ្ឈមណ្ឌលឯកសារភ្លាមៗ។',
        zh: '安保人员现需在金库打卡时实时上传照片，稽核报告即时同步至您的文档中心。'
      },
      date: 'July 28, 2026',
      read: true,
      priority: 'IMPORTANT'
    },
    {
      id: 'NOTIF-003',
      category: 'quotation_updates',
      title: {
        en: 'Quotation #KNSK-QT-88210 Approved by Commercial Director',
        km: 'ការប្រម៉ង់តម្លៃ #KNSK-QT-88210 ត្រូវបានអនុម័ត',
        zh: '报价单 #KNSK-QT-88210 已获商务总监批准'
      },
      content: {
        en: 'Your annual SLA renewal document is ready for download in the Quotation Center.',
        km: 'ឯកសារកិច្ចសន្យា SLA ថ្មីរបស់អ្នករួចរាល់សម្រាប់ការទាញយកក្នុងមជ្ឈមណ្ឌលតម្លៃ។',
        zh: '您的年度SLA续约文件已可在报价中心查阅与下载。'
      },
      date: 'July 20, 2026',
      read: true,
      priority: 'NORMAL'
    },
    {
      id: 'NOTIF-004',
      category: 'recruitment',
      title: {
        en: 'Q3 Certified Armed Bodyguard Cohort Graduated',
        km: 'ពិធីបញ្ចប់ការសិក្សាវគ្គបណ្តុះបណ្តាលអង្គរក្សការពារ VIP ត្រីមាសទី៣',
        zh: '第三季度持证VIP特警体能与枪械护卫班顺利毕业'
      },
      content: {
        en: '35 newly trained executive protection officers are ready for corporate VIP event deployments.',
        km: 'អង្គរក្សការពារ VIP ថ្មីចំនួន ៣៥នាក់ ត្រៀមខ្លួនរួចរាល់សម្រាប់ការការពារកម្មវិធីផ្លូវការ។',
        zh: '35名新训要员护卫官已具备执行企业大型VIP活动部署资格。'
      },
      date: 'July 15, 2026',
      read: true,
      priority: 'NORMAL'
    }
  ]);

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const toggleRead = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: !n.read } : n))
    );
  };

  const filteredNotifs = activeTab === 'ALL'
    ? notifications
    : notifications.filter((n) => n.category === activeTab);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded uppercase">
              Command Dispatch Alerts
            </span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 font-serif">
            {getT('Client Notification Center', 'មជ្ឈមណ្ឌលដំណឹង និងការជូនដំណឹង', '客户通知与指挥中心公告')}
          </h2>
          <p className="text-xs text-slate-500">
            {getT(
              'Official announcements, security alerts, quotation updates, and holiday operations directives.',
              'សេចក្តីជូនដំណឹងផ្លូវការ ការព្រមានសន្តិសុខ បច្ចុប្បន្នភាពប្រម៉ង់តម្លៃ និងការណែនាំឱកាសបុណ្យ។',
              '官方紧急通告、安全警报、服务报价更新及假期特派指令。'
            )}
          </p>
        </div>

        <button
          onClick={markAllAsRead}
          className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl flex items-center gap-1.5 transition"
        >
          <Check className="w-4 h-4 text-emerald-600" />
          <span>{getT('Mark All as Read', 'គូសចំណាំថាបានអានទាំងអស់', '全部标记为已读')}</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex overflow-x-auto gap-2 border-b border-slate-200 pb-2">
        {[
          { id: 'ALL', label: 'ALL NOTIFICATIONS' },
          { id: 'holiday', label: 'Holiday Notices' },
          { id: 'service_updates', label: 'Service Updates' },
          { id: 'quotation_updates', label: 'Quotation Updates' },
          { id: 'recruitment', label: 'Recruitment News' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 text-xs font-bold rounded-xl whitespace-nowrap transition ${
              activeTab === tab.id
                ? 'bg-blue-900 text-white shadow'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="space-y-3">
        {filteredNotifs.map((notif) => {
          const title = getT(notif.title.en, notif.title.km, notif.title.zh);
          const content = getT(notif.content.en, notif.content.km, notif.content.zh);

          return (
            <div
              key={notif.id}
              className={`p-5 rounded-2xl border transition flex flex-col md:flex-row items-start justify-between gap-4 ${
                !notif.read
                  ? 'bg-blue-50/70 border-blue-200 shadow-xs'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase ${
                    notif.priority === 'HIGH_ALERT' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-900'
                  }`}>
                    {notif.category.replace('_', ' ')}
                  </span>
                  {!notif.read && (
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
                  )}
                  <span className="text-[11px] font-mono text-slate-400">• {notif.date}</span>
                </div>

                <h3 className="font-extrabold text-base text-slate-900 font-serif">{title}</h3>
                <p className="text-xs text-slate-700 leading-relaxed">{content}</p>
              </div>

              <button
                onClick={() => toggleRead(notif.id)}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-bold font-mono transition shrink-0 ${
                  notif.read ? 'bg-slate-100 text-slate-500' : 'bg-blue-900 text-white'
                }`}
              >
                {notif.read ? 'READ' : 'MARK READ'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
