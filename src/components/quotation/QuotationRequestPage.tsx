import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { cambodiaProvinces } from '../../data/provinces';
import {
  FileText,
  Building2,
  User,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Users,
  Send,
  CheckCircle2,
  PhoneCall,
  Clock,
  ArrowRight,
  Shield,
  HelpCircle
} from 'lucide-react';

interface QuotationRequestPageProps {
  setActiveTab?: (tab: string) => void;
}

export const QuotationRequestPage: React.FC<QuotationRequestPageProps> = () => {
  const { language } = useLanguage();

  // Form State for 8 required fields
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phoneTelegram, setPhoneTelegram] = useState('');
  const [email, setEmail] = useState('');
  const [province, setProvince] = useState('Phnom Penh');
  const [securityService, setSecurityService] = useState('Manned Physical Guarding');
  const [guardCount, setGuardCount] = useState('4 - 10 Guards (Medium Enterprise / Facility)');
  const [additionalRequirements, setAdditionalRequirements] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const securityServiceOptions = [
    {
      id: 'manned_guarding',
      en: 'Manned Physical Guarding & Facility Protection',
      km: 'សេវាសន្តិសុខការពារទីតាំង និងអគារ',
      zh: '驻点安保与设施日常防护'
    },
    {
      id: 'vip_protection',
      en: 'VIP & Executive Close Protection',
      km: 'សេវាការពារឥស្សរជន និង VIP',
      zh: '要员特保与VIP随身护卫'
    },
    {
      id: 'cit_escort',
      en: 'Cash-In-Transit (CIT) & Valuables Escort',
      km: 'សេវាដឹកជញ្ជូនប្រាក់ និងទ្រព្យសកម្ម',
      zh: '武装押运与贵重物品护送'
    },
    {
      id: 'event_security',
      en: 'Event Security & Crowd Management',
      km: 'សេវាសន្តិសុខព្រឹត្តិការណ៍ និងពិព័រណ៍',
      zh: '大型活动与展览防务安保'
    },
    {
      id: 'mobile_patrol',
      en: 'Mobile Patrol & Emergency Inspection',
      km: 'សេវាក្បួនល្បាតចល័ត និងអធិការកិច្ច',
      zh: '机动巡逻车队与夜间督导'
    },
    {
      id: 'industrial_sez',
      en: 'Factory & Special Economic Zone (SEZ) Security',
      km: 'សេវាសន្តិសុខរោងចក្រ និងតំបន់សេដ្ឋកិច្ចពិសេស',
      zh: '工厂工业区与经济特区安保'
    },
    {
      id: 'borey_community',
      en: 'Gated Community & Borey Residential Security',
      km: 'សេវាសន្តិសុខបុរី និងលំនៅឋាន',
      zh: '封闭式园区与Borey住宅安保'
    },
    {
      id: 'commercial_tower',
      en: 'Commercial Tower, Bank & Retail Complex Security',
      km: 'សេវាសន្តិសុខអគារពាណិជ្ជកម្ម ធនាគារ និងផ្សារទំនើប',
      zh: '商业大厦、银行与商场安保'
    }
  ];

  const guardCountOptions = [
    { value: '1 - 3 Guards (Small Site / Office / Retail)', labelEn: '1 - 3 Guards (Small Site / Office / Retail)', labelKm: '១ - ៣ នាក់ (ការិយាល័យតូច / ហាងទំនិញ)', labelZh: '1 - 3 人 (小型办公室/商铺)' },
    { value: '4 - 10 Guards (Medium Enterprise / Facility)', labelEn: '4 - 10 Guards (Medium Enterprise / Facility)', labelKm: '៤ - ១០ នាក់ (សហគ្រាសមធ្យម / សណ្ឋាគារ)', labelZh: '4 - 10 人 (中型企业/酒店)' },
    { value: '11 - 30 Guards (Large Factory / Commercial Tower)', labelEn: '11 - 30 Guards (Large Factory / Commercial Tower)', labelKm: '១១ - ៣០ នាក់ (រោងចក្រធំ / អគារពាណិជ្ជកម្ម)', labelZh: '11 - 30 人 (大型工厂/商业大厦)' },
    { value: '30+ Guards (Industrial SEZ / Borey / Township)', labelEn: '30+ Guards (Industrial SEZ / Borey / Township)', labelKm: '៣០+ នាក់ (តំបន់សេដ្ឋកិច្ចពិសេស / បុរីធំ)', labelZh: '30+ 人 (特区工业园/大型社区)' },
    { value: 'To be assessed during site survey', labelEn: 'To be assessed during professional site survey', labelKm: 'កំណត់បន្ទាប់ពីការចុះពិនិត្យទីតាំងជាក់ស្តែង', labelZh: '现场勘测后根据风险评估确定' }
  ];

  const workflowSteps = [
    { num: '01', titleEn: 'Customer Request', titleKm: 'អតិថិជនស្នើសុំ', descEn: 'Submit your requirements via our simple quotation form.' },
    { num: '02', titleEn: 'Team Review', titleKm: 'ការពិនិត្យតម្រូវការ', descEn: 'K.N.S.K operations team reviews facility and scope.' },
    { num: '03', titleEn: 'Operations Follow-Up', titleKm: 'ការទាក់ទងត្រឡប់', descEn: 'Management contacts you to clarify schedule and post orders.' },
    { num: '04', titleEn: 'Site Assessment', titleKm: 'ការវាយតម្លៃទីតាំង', descEn: 'Complimentary on-site physical security risk evaluation.' },
    { num: '05', titleEn: 'Customized Quotation', titleKm: 'សម្រង់តម្លៃផ្លូវការ', descEn: 'Tailored pricing schedule & formal SLA proposal delivered.' },
    { num: '06', titleEn: 'Client Confirmation', titleKm: 'ការយល់ព្រមពីអតិថិជន', descEn: 'Review, contract signing, and post assignment.' },
    { num: '07', titleEn: 'Service Deployment', titleKm: 'ការដាក់ពង្រាយកម្លាំង', descEn: 'Trained, uniformed guard force deployed on scheduled date.' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setCompanyName('');
    setContactPerson('');
    setPhoneTelegram('');
    setEmail('');
    setAdditionalRequirements('');
  };

  const scrollToForm = () => {
    const el = document.getElementById('quotation-inquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="py-12 bg-slate-50 min-h-[85vh]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Banner Section */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-900/90 text-blue-200 border border-blue-700/80 rounded-full text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>K.N.S.K Security Co., Ltd.</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            {language === 'km'
              ? 'ស្នើសុំការផ្តល់ជូនតម្លៃសេវាសន្តិសុខផ្លូវការ'
              : language === 'zh'
              ? '申请专业安保服务报价'
              : 'Request a Professional Security Quote'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto font-sans leading-relaxed">
            {language === 'km'
              ? 'តម្រូវការសន្តិសុខរបស់អតិថិជននីមួយៗមានភាពខុសគ្នា។ សូមទាក់ទងក្រុមហ៊ុនសន្តិសុខ K.N.S.K ដើម្បីស្នើសុំការផ្តល់ជូនតម្លៃដែលសមស្របទៅតាមទីតាំង តម្រូវការសន្តិសុខ ចំនួនបុគ្គលិកសន្តិសុខ ម៉ោងការងារ និងតម្រូវការសេវាកម្មរបស់អតិថិជន។'
              : language === 'zh'
              ? '每个客户的安保需求都不同。欢迎联系 K.N.S.K 安保有限公司，根据您的地点、安保需求、保安人员数量、工作时间和服务要求，为您提供定制报价。'
              : 'Every security requirement is different. Contact K.N.S.K Security Co., Ltd. for a customized quotation based on your location, security requirements, number of guards, working schedule, and service needs.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <button
              onClick={scrollToForm}
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-xl transition-all hover:scale-[1.02] flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{language === 'km' ? 'ស្នើសុំតម្លៃសេវា' : language === 'zh' ? '申请报价' : 'REQUEST A QUOTE'}</span>
            </button>

            <a
              href="tel:0964838666"
              className="px-6 py-4 bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-sm rounded-xl border border-slate-700 transition flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>Hotline: 096 483 8666</span>
            </a>

            <a
              href="https://t.me/KNSK_security"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm rounded-xl transition flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Telegram (@KNSK_security)</span>
            </a>
          </div>
        </section>

        {/* Real K.N.S.K Workflow */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <div>
              <span className="text-[10px] font-bold text-blue-900 uppercase tracking-widest">
                Transparent Operations
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif">
                {language === 'km' ? 'ដំណាក់កាលប្រតិបត្តិការសេវាសន្តិសុខផ្លូវការ' : language === 'zh' ? 'K.N.S.K 官方服务对接流程' : 'K.N.S.K Official Service Onboarding Workflow'}
              </h3>
            </div>
            <span className="text-xs text-slate-600 font-sans">
              Personalized Assessment by Senior Commanders
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 pt-2">
            {workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-extrabold text-red-600">{step.num}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <h4 className="font-bold text-slate-900 text-xs leading-tight">
                  {language === 'km' ? step.titleKm : step.titleEn}
                </h4>
                <p className="text-[11px] text-slate-500 leading-snug">{step.descEn}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Form Box */}
        <div id="quotation-inquiry-form" className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="bg-slate-900 text-white px-6 sm:px-8 py-5 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-red-500" />
              <h2 className="font-bold text-base sm:text-lg font-serif">
                {language === 'km'
                  ? 'ទម្រង់បែបបទស្នើសុំសម្រង់តម្លៃសេវា'
                  : language === 'zh'
                  ? '官方定制安保方案申请表'
                  : 'Official Security Quotation Request Form'}
              </h2>
            </div>
            <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded">
              K.N.S.K Operations
            </span>
          </div>

          <div className="p-6 sm:p-10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* 1. Company / Organization Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Company / Organization Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. ABA Bank, Factory Name, Borey Project"
                      className="w-full px-4 py-3 text-xs border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-900 focus:outline-none transition"
                    />
                  </div>

                  {/* 2. Contact Person */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactPerson}
                      onChange={(e) => setContactPerson(e.target.value)}
                      placeholder="e.g. Mr. Sokha / Ms. Linda"
                      className="w-full px-4 py-3 text-xs border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-900 focus:outline-none transition"
                    />
                  </div>

                  {/* 3. Phone Number / Telegram */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Phone Number / Telegram *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phoneTelegram}
                      onChange={(e) => setPhoneTelegram(e.target.value)}
                      placeholder="096 483 8666 / 093 878 666 (@telegram)"
                      className="w-full px-4 py-3 text-xs border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-900 focus:outline-none transition"
                    />
                  </div>

                  {/* 4. Email Address */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="contact@company.com"
                      className="w-full px-4 py-3 text-xs border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-900 focus:outline-none transition"
                    />
                  </div>

                  {/* 5. Province / Location */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Province / Location *
                    </label>
                    <select
                      value={province}
                      onChange={(e) => setProvince(e.target.value)}
                      className="w-full px-4 py-3 text-xs border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-900 focus:outline-none transition font-semibold"
                    >
                      {cambodiaProvinces.map((p) => (
                        <option key={p.id} value={p.nameEn}>
                          {language === 'km' ? p.nameKm : language === 'zh' ? p.nameZh : p.nameEn}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* 6. Security Service Required */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Security Service Required *
                    </label>
                    <select
                      value={securityService}
                      onChange={(e) => setSecurityService(e.target.value)}
                      className="w-full px-4 py-3 text-xs border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-900 focus:outline-none transition font-semibold"
                    >
                      {securityServiceOptions.map((opt) => (
                        <option key={opt.id} value={opt.en}>
                          {language === 'km' ? opt.km : language === 'zh' ? opt.zh : opt.en}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* 7. Number of Guards Required */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Number of Guards Required *
                    </label>
                    <select
                      value={guardCount}
                      onChange={(e) => setGuardCount(e.target.value)}
                      className="w-full px-4 py-3 text-xs border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-900 focus:outline-none transition font-semibold"
                    >
                      {guardCountOptions.map((opt, i) => (
                        <option key={i} value={opt.value}>
                          {language === 'km' ? opt.labelKm : language === 'zh' ? opt.labelZh : opt.labelEn}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* 8. Additional Requirements / Message */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Additional Requirements / Message (Optional)
                    </label>
                    <textarea
                      rows={4}
                      value={additionalRequirements}
                      onChange={(e) => setAdditionalRequirements(e.target.value)}
                      placeholder="Describe specific facility conditions, shift requirements (24/7 or 12-hour), armed/unarmed personnel, CCTV monitoring, or target start date..."
                      className="w-full px-4 py-3 text-xs border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-900 focus:outline-none transition"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Free on-site assessment across all 25 provinces of Cambodia.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{language === 'km' ? 'ស្នើសុំតម្លៃសេវា' : language === 'zh' ? '申请报价' : 'REQUEST A QUOTE'}</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-10 space-y-6 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-3 max-w-xl mx-auto">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-serif">
                    {language === 'km'
                      ? 'ការស្នើសុំសម្រង់តម្លៃត្រូវបានបញ្ជូនជោគជ័យ'
                      : language === 'zh'
                      ? '报价申请已成功提交'
                      : 'Quotation Request Received'}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {language === 'km'
                      ? 'សូមអរគុណសម្រាប់ការទាក់ទងមកកាន់ K.N.S.K Security Co., Ltd. ក្រុមការងារប្រតិបត្តិការរបស់យើងនឹងពិនិត្យតម្រូវការរបស់លោកអ្នក និងទាក់ទងត្រឡប់វិញក្នុងពេលឆាប់ៗនេះ។'
                      : language === 'zh'
                      ? '感谢您联系 K.N.S.K 安保有限公司。我们的运营团队将尽快审核您的需求并与您联系。'
                      : 'Thank you for contacting K.N.S.K Security Co., Ltd. Our operations team will review your requirements and contact you shortly.'}
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 max-w-md mx-auto text-xs text-left space-y-2">
                  <div className="flex justify-between text-slate-500">
                    <span>Organization:</span>
                    <strong className="text-slate-900">{companyName}</strong>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Location:</span>
                    <strong className="text-slate-900">{province}</strong>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Service:</span>
                    <strong className="text-slate-900">{securityService}</strong>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Headcount:</span>
                    <strong className="text-slate-900">{guardCount}</strong>
                  </div>
                </div>

                <div className="pt-4 flex justify-center gap-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded-xl transition"
                  >
                    Submit Another Request
                  </button>
                  <a
                    href="tel:0964838666"
                    className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call Operations: 096 483 8666</span>
                  </a>
                  <a
                    href="https://t.me/KNSK_security"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Telegram (@KNSK_security)</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuotationRequestPage;
