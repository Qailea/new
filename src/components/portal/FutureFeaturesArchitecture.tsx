import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  CreditCard,
  FileCheck2,
  Fingerprint,
  MapPin,
  QrCode,
  Eye,
  Smartphone,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2
} from 'lucide-react';

export const FutureFeaturesArchitecture: React.FC = () => {
  const { getT } = useLanguage();

  const futureModules = [
    {
      icon: CreditCard,
      title: {
        en: 'Online Invoice & KHQR Payment Gateway',
        km: 'ការទូទាត់វិក្កយបត្រតាមអនឡាញ និង KHQR (Bakong/ABA)',
        zh: '在线发票及KHQR（ABA/Bakong）快捷支付'
      },
      description: {
        en: 'Settle monthly security SLA invoices instantly using KHQR Bakong mobile banking or automated corporate direct debit.',
        km: 'ទូទាត់ថ្លៃសេវាកម្មសន្តិសុខប្រចាំខែតាមរយៈ KHQR Bakong ឬ ABA PAY បានភ្លាមៗ។',
        zh: '支持使用KHQR/ABA PAY一键扫码支付月度安保SLA发票或设置企业自动对公扣款。'
      },
      status: 'Q4 2026 ROADMAP',
      color: 'from-blue-600 to-blue-900'
    },
    {
      icon: FileCheck2,
      title: {
        en: 'Digital Contract e-Signing (Legal SLA)',
        km: 'ការចុះហត្ថលេខាលើកិច្ចសន្យាឌីជីថល (e-Signature)',
        zh: '数字合同电子签署（具备法律效力的e-SLA）'
      },
      description: {
        en: 'Sign annual guard service agreements and amendment riders digitally with legally binding Ministry-compliant seals.',
        km: 'ចុះហត្ថលេខាលើកិច្ចសន្យាឌីជីថលដែលមានសុពលភាពច្បាប់ផ្លូវការ។',
        zh: '具备符合内政部规范法律效力的电子印章，实现年度安保合同在线一键签署。'
      },
      status: 'Q4 2026 ROADMAP',
      color: 'from-purple-600 to-indigo-900'
    },
    {
      icon: Fingerprint,
      title: {
        en: 'Biometric Guard Attendance & Face Verification',
        km: 'ការកត់ត្រាវត្តមានសន្តិសុខតាមជីវមាត្រ និងស្កែនមុខ',
        zh: '生物识别考勤与人脸防伪考勤系统'
      },
      description: {
        en: 'Guard chief verifies biometric face scans at shift start, guaranteeing 100% genuine officer attendance.',
        km: 'ផ្ទៀងផ្ទាត់វត្តមានសន្តិសុខតាមរយៈការស្កែនទម្រង់មុខពេលផ្លាស់ប្តូរវេន។',
        zh: '队长在换班时进行人脸识别生物考勤，100%确保持证在岗人员真实无误。'
      },
      status: 'Q1 2027 ROADMAP',
      color: 'from-emerald-600 to-teal-900'
    },
    {
      icon: MapPin,
      title: {
        en: 'Live GPS Patrol Tracing & Geofenced Sweeps',
        km: 'ការតាមដានការល្បាតតាម GPS ជាក់ស្តែង និង Geofence',
        zh: '实时GPS巡逻轨迹追踪与地理围栏'
      },
      description: {
        en: 'Track 4x4 mobile patrol response units and station wand sweeps on an interactive live map of your facility.',
        km: 'តាមដានសកម្មភាពល្បាតសន្តិសុខ និងរថយន្តអន្តរាគមន៍លើផែនទីជាក់ស្តែង។',
        zh: '在动态交互地图上实时追踪4x4机动巡逻车队与步巡打卡轨迹。'
      },
      status: 'Q1 2027 ROADMAP',
      color: 'from-amber-600 to-red-900'
    },
    {
      icon: QrCode,
      title: {
        en: 'Visitor Management & QR Pre-Registration',
        km: 'ប្រព័ន្ធគ្រប់គ្រងភ្ញៀវ និងចុះឈ្មោះតាម QR Code',
        zh: '访客管理与QR Code预登记通行系统'
      },
      description: {
        en: 'Issue VIP guest QR passes for high-rise turnstiles, speeding up check-in while maintaining total building access security.',
        km: 'ចេញប័ណ្ណ QR Code សម្រាប់ភ្ញៀវ VIP ចូលចេញអគារប្រកបដោយសុវត្ថិភាព។',
        zh: '为尊贵来宾生成预登记QR通行码，快速核验进出大楼闸机。'
      },
      status: 'Q2 2027 ROADMAP',
      color: 'from-sky-600 to-blue-950'
    },
    {
      icon: Smartphone,
      title: {
        en: 'K.N.S.K Mobile App (iOS & Android)',
        km: 'កម្មវិធីទូរស័ព្ទដៃ K.N.S.K Mobile App (iOS & Android)',
        zh: 'K.N.S.K专属移动端App（iOS与Android）'
      },
      description: {
        en: 'Native mobile app for corporate security directors to receive push alerts, trigger panic alarms, and view camera feeds.',
        km: 'កម្មវិធីទូរស័ព្ទដៃសម្រាប់ទទួលការជូនដំណឹងអាសន្ន និងពិនិត្យកម្លាំងសន្តិសុខ។',
        zh: '专为企业安保总监打造的原生App，接收即时警报通知、一键触控紧急呼救。'
      },
      status: 'DEVELOPMENT ACTIVE',
      color: 'from-rose-600 to-red-950'
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3 py-1 rounded-full text-xs font-mono font-bold">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Digital Transformation Architecture</span>
          </div>

          <h2 className="text-3xl font-black text-white font-serif tracking-tight leading-tight">
            {getT(
              'Next-Generation Digital Security Capabilities',
              'សមត្ថភាពសន្តិសុខឌីជីថលជំនាន់ក្រោយ',
              '新一代数字化安保与智能管控架构'
            )}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            {getT(
              'K.N.S.K Security Co., Ltd. is pioneering the integration of cloud IoT, KHQR online settlement, biometric face attendance, and AI computer vision into physical guarding operations.',
              'K.N.S.K សន្តិសុខ កំពុងដឹកនាំការទូទាត់តាម KHQR ការស្កែនមុខជីវមាត្រ និងបច្ចេកវិទ្យា AI ក្នុងកិច្ចការពារសន្តិសុខ។',
              'K.N.S.K安保正在将云端IoT、KHQR在线结算、生物人脸考勤及AI计算机视觉深度融入实体安保勤务中。'
            )}
          </p>
        </div>
      </div>

      {/* Roadmap Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {futureModules.map((mod, idx) => {
          const Icon = mod.icon;
          const title = getT(mod.title.en, mod.title.km, mod.title.zh);
          const desc = getT(mod.description.en, mod.description.km, mod.description.zh);

          return (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-lg transition flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${mod.color} text-white shadow-md group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full border border-slate-200">
                    {mod.status}
                  </span>
                </div>

                <div>
                  <h3 className="font-extrabold text-base text-slate-900 font-serif leading-snug group-hover:text-blue-900 transition">
                    {title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{desc}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-900">
                <span className="flex items-center gap-1 font-mono text-[11px] text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Architecture Prepared</span>
                </span>
                <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
