import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import guardFormationImg from '../../assets/images/KNSK_Team.jpg';
import knskCertificateImg from '../../assets/images/certificate_knsk.png';
import { companyLicenseDetails } from '../../data/companyData';
import {
  CERTIFICATIONS_LIST,
  ABOUT_FAQS,
  FAQItem
} from '../../data/aboutData';
import {
  ShieldCheck,
  Shield,
  Building2,
  Award,
  Users,
  CheckCircle2,
  Lock,
  FileText,
  MapPin,
  ChevronDown,
  ChevronUp,
  Play,
  PhoneCall,
  HelpCircle,
  Zap,
  Globe,
  Search,
  Sparkles,
  Cpu,
  Radio,
  HeartHandshake,
  Smile,
  BookOpen,
  MessageSquare,
  ExternalLink,
  X,
  ArrowRight,
  ChevronRight,
  Car,
  Briefcase,
  GraduationCap,
  Layers,
  Scale,
  Send
} from 'lucide-react';

interface AboutCompanyProps {
  setActiveTab: (tab: string) => void;
}

export const AboutCompany: React.FC<AboutCompanyProps> = ({ setActiveTab }) => {
  const { language } = useLanguage();
  const [activeFaqId, setActiveFaqId] = useState<string | null>('faq-1');
  const [faqCategoryFilter, setFaqCategoryFilter] = useState<string>('all');
  const [faqSearchQuery, setFaqSearchQuery] = useState<string>('');
  const [activeImageModal, setActiveImageModal] = useState<{ url: string; title: string; caption: string } | null>(null);

  // Helper for multilingual field resolution
  const getText = (textObj: { en: string; km: string; zh: string }): string => {
    if (language === 'km') return textObj.km;
    if (language === 'zh') return textObj.zh;
    return textObj.en;
  };

  // Helper to map icon string to Lucide component
  const renderIcon = (iconName: string, className = "w-6 h-6") => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Shield': return <Shield className={className} />;
      case 'Building2': return <Building2 className={className} />;
      case 'Award': return <Award className={className} />;
      case 'Users': return <Users className={className} />;
      case 'CheckCircle2': return <CheckCircle2 className={className} />;
      case 'Lock': return <Lock className={className} />;
      case 'FileText': return <FileText className={className} />;
      case 'MapPin': return <MapPin className={className} />;
      case 'Zap': return <Zap className={className} />;
      case 'Globe': return <Globe className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      case 'Radio': return <Radio className={className} />;
      case 'HeartHandshake': return <HeartHandshake className={className} />;
      case 'Smile': return <Smile className={className} />;
      case 'BookOpen': return <BookOpen className={className} />;
      case 'MessageSquare': return <MessageSquare className={className} />;
      default: return <Shield className={className} />;
    }
  };

  // FAQ filtering
  const filteredFaqs = ABOUT_FAQS.filter((faq) => {
    const matchesCategory = faqCategoryFilter === 'all' || faq.category === faqCategoryFilter;
    const qText = getText(faq.question).toLowerCase();
    const aText = getText(faq.answer).toLowerCase();
    const query = faqSearchQuery.toLowerCase().trim();
    const matchesSearch = query === '' || qText.includes(query) || aText.includes(query);
    return matchesCategory && matchesSearch;
  });

  // Schema.org Structured Data
  const schemaOrgData = {
    '@context': 'https://schema.org',
    '@type': 'SecurityService',
    'name': 'K.N.S.K Security Co., Ltd.',
    'alternateName': 'K.N.S.K Private Security Services',
    'url': 'https://knsk-security.com.kh',
    'logo': 'https://knsk-security.com.kh/images/KNSK_Logo.jpg',
    'foundingDate': '2015',
    'license': 'MOI License #KNSK-SEC-2015-089',
    'telephone': '+855964838666',
    'email': 'soengknsk@gmail.com',
    'sameAs': [
      'https://www.facebook.com/share/1BrYBJpnQk/',
      'https://wa.me/855964838666?s=t',
      'https://t.me/KNSK_security'
    ],
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '#31A22, Street 08, Mean Chey District',
      'addressLocality': 'Phnom Penh',
      'addressCountry': 'KH'
    },
    'areaServed': 'Cambodia',
    'description': 'K.N.S.K Security Co., Ltd. provides professional manned guarding, VIP close protection, cash-in-transit, and mobile patrol security across all 25 provinces in Cambodia.'
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* Schema.org Script tag for Search Engine Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
      />

      {/* ======================================================================== */}
      {/* SECTION 1: HERO BANNER                                                   */}
      {/* ======================================================================== */}
      <section className="relative bg-slate-950 text-white overflow-hidden py-20 lg:py-28 border-b border-slate-800">
        {/* Background Overlay Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={guardFormationImg}
            alt="K.N.S.K Guard Formation Assembly"
            className="w-full h-full object-cover opacity-25 scale-105 filter brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-blue-950/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.3),transparent_70%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            {/* Accreditation Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 bg-blue-900/80 border border-blue-500/40 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>
                {language === 'km'
                  ? 'អាជ្ញាប័ណ្ណផ្លូវការពីក្រសួងមហាផ្ទៃ #KNSK-SEC-2015-089'
                  : language === 'zh'
                  ? '内政部特许执照 #KNSK-SEC-2015-089'
                  : 'MOI Licensed #KNSK-SEC-2015-089 • Est. 2015'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-serif text-white leading-tight tracking-tight">
              {language === 'km' && 'ការពារកម្ពុជាដោយសេវាកម្មសន្តិសុខប្រកបដោយវិជ្ជាជីវៈ ចាប់តាំងពីឆ្នាំ២០១៥'}
              {language === 'zh' && '自2015年起以专业安保服务守护柬埔寨'}
              {language === 'en' && 'Protecting Cambodia with Professional Security Services Since 2015'}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {language === 'km' && 'ក្រុមហ៊ុនសន្តិសុខ K.N.S.K Security Co., Ltd. ផ្តល់ជូននូវសេវាកម្មសន្តិសុខប្រកបដោយវិជ្ជាជីវៈ ស្មោះត្រង់ និងទំនុកចិត្តខ្ពស់ទូទាំងប្រទេស ដោយមានភ្នាក់ងារបណ្តុះបណ្តាលយ៉ាងស្ទាត់ជំនាញ ក្រុមបញ្ជាការឆ្លើយតបរហ័ស និងការគ្រប់គ្រងប្រកបដោយបទពិសោធន៍។'}
              {language === 'zh' && 'K.N.S.K 安保有限公司在全国范围内提供专业、可靠和值得信赖的安保服务，拥有经过严格培训的安保人员、经验丰富的督导员和高效响应的运营管理团队。'}
              {language === 'en' && 'K.N.S.K Security Co., Ltd. delivers professional, reliable and trusted security services nationwide with highly trained security personnel, experienced supervisors and responsive operations management.'}
            </p>

            {/* Hero CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setActiveTab('quotation')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-widest rounded-lg shadow-xl shadow-red-900/30 transition-all transform hover:-translate-y-0.5"
              >
                <span>
                  {language === 'km' ? 'ស្នើសុំសម្រង់តម្លៃ' : language === 'zh' ? '获取专属报价' : 'Request Proposal'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('contact-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else setActiveTab('contact');
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-800/90 hover:bg-slate-800 text-white border border-slate-700 font-bold text-sm uppercase tracking-widest rounded-lg transition-all"
              >
                <span>
                  {language === 'km' ? 'ទំនាក់ទំនងយើងខ្ញុំ' : language === 'zh' ? '联系我们' : 'Contact Us'}
                </span>
                <PhoneCall className="w-4 h-4 text-blue-400" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================== */}
      {/* SECTION 2: COMPANY INTRODUCTION                                         */}
      {/* ======================================================================== */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header Tag */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-bold uppercase tracking-widest text-blue-900">
              <Building2 className="w-3.5 h-3.5 text-blue-900" />
              <span>
                {language === 'km' ? 'សេចក្តីផ្តើមអំពីក្រុមហ៊ុន' : language === 'zh' ? '公司概况' : 'Company Overview'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900">
              {language === 'km' && 'ស្ថាប័នសន្តិសុខឯកជនឈានមុខគេក្នុងព្រះរាជាណាចក្រកម្ពុជា'}
              {language === 'zh' && '柬埔寨王国领先的专业安保服务机构'}
              {language === 'en' && 'Cambodia’s Leading Private Security Enterprise'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {language === 'km' && 'បង្កើតឡើងក្នុងឆ្នាំ២០១៥ ក្រុមហ៊ុនសន្តិសុខ K.N.S.K Security Co., Ltd. ត្រូវបានចុះបញ្ជីផ្លូវការនៅក្រសួងពាណិជ្ជកម្ម និងទទួលបានអាជ្ញាប័ណ្ណប្រតិបត្តិការពីក្រសួងមហាផ្ទៃ #KNSK-SEC-2015-089។ យើងខ្ញុំផ្តល់សេវាកម្មការពារប្រកបដោយបទពិសោធន៍ វិន័យខ្ពស់ និងការទទួលខុសត្រូវពេញលេញ។'}
              {language === 'zh' && 'K.N.S.K 安保有限公司成立于2015年，在商业部依法注册，并持有内政部颁发的特许经营执照 #KNSK-SEC-2015-089。我们为各类企业机构提供纪律严明、值得信赖的安保保障。'}
              {language === 'en' && 'Incorporated in 2015, K.N.S.K Security Co., Ltd. holds Ministry of Interior License #KNSK-SEC-2015-089 and Commercial Registration #Co. 2884 Et/2015, serving top financial institutions, embassies, manufacturing plants, and residential communities across all 25 provinces.'}
            </p>
          </div>

          {/* Slogan Banner */}
          <div className="p-8 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <ShieldCheck className="w-48 h-48 text-blue-400" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-red-400 flex items-center justify-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Official Company Motto
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
                "{language === 'km' ? 'ក្រុមហ៊ុនសន្តិសុខ K.N.S.K ផ្តល់សេវាកម្មការពារប្រកបដោយវិជ្ជាជីវៈ ស្មោះត្រង់ និងអាចទុកចិត្តបាន ទូទាំងប្រទេស' : language === 'zh' ? 'K.N.S.K 安保在全国范围内提供专业、诚信、可靠的安保服务' : 'K.N.S.K Security provides professional, reliable, and trusted security services nationwide'}"
              </h3>
              <p className="text-sm font-bold text-red-400 uppercase tracking-widest">
                {language === 'km' ? 'គុណភាព • តម្លៃសមរម្យ • សេវារហ័ស' : language === 'zh' ? '质量 • 诚信 • 快速响应' : 'Quality • Affordability • Fast Response'}
              </p>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-3 hover:border-blue-300 transition">
              <div className="w-10 h-10 bg-blue-900 text-white rounded-lg flex items-center justify-center font-bold">
                01
              </div>
              <h4 className="font-bold text-slate-900 text-base">
                {language === 'km' ? 'គុណភាពសេវាកម្ម' : language === 'zh' ? '卓越质量' : 'Quality Service'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'km' ? 'ភ្នាក់ងារសន្តិសុខទទួលបានការបណ្តុះបណ្តាលក្បួនវិន័យ និងការសង្គ្រោះបឋមយ៉ាងត្រឹមត្រូវ។' : language === 'zh' ? '队员均接受严格体能纪律与急救特训。' : 'Rigorous National Police physical drill training, etiquette, and first-aid certification.'}
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-3 hover:border-blue-300 transition">
              <div className="w-10 h-10 bg-blue-900 text-white rounded-lg flex items-center justify-center font-bold">
                02
              </div>
              <h4 className="font-bold text-slate-900 text-base">
                {language === 'km' ? 'តម្លៃសមរម្យ & ស្មោះត្រង់' : language === 'zh' ? '合理报价与诚信' : 'Affordable & Honest'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'km' ? 'តម្លៃសមរម្យ បើកចំហ និងមានការពិនិត្យប្រវត្តិរូបគ្មានទោសពៃរ៍ ១០០%។' : language === 'zh' ? '价格公开透明，全员通过无犯罪记录审核。' : 'Competitive transparent pricing with 100% background-checked personnel.'}
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-3 hover:border-blue-300 transition">
              <div className="w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center font-bold">
                03
              </div>
              <h4 className="font-bold text-slate-900 text-base">
                {language === 'km' ? 'សេវារហ័ស' : language === 'zh' ? '快速响应' : 'Fast Response'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'km' ? 'ក្រុមអន្តរាគមន៍រថយន្ត 4x4 ឆ្លើយតបសន្តិសុខអាសន្នយ៉ាងរហ័សទាន់ពេលវេលា។' : language === 'zh' ? '皮卡巡逻车队快速赶赴警情现场。' : '24/7 radio command center with prompt emergency mobile patrol dispatch.'}
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-3 hover:border-blue-300 transition">
              <div className="w-10 h-10 bg-emerald-700 text-white rounded-lg flex items-center justify-center font-bold">
                04
              </div>
              <h4 className="font-bold text-slate-900 text-base">
                {language === 'km' ? 'គ្របដណ្តប់ ២៥ ខេត្ត' : language === 'zh' ? '全国25省覆盖' : 'Nationwide Reach'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'km' ? 'មានការិយាល័យសាខា និងបញ្ជាការដ្ឋាននៅគ្រប់រាជធានី-ខេត្ត។' : language === 'zh' ? '各省市设独立调度指挥站，统一服务标准。' : 'Provincial dispatch stations across Cambodia providing seamless contracts.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================== */}
      {/* SECTION 5: ORGANIZATION STRUCTURE                                        */}
      {/* ======================================================================== */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-400">
              <Layers className="w-3.5 h-3.5" />
              <span>
                {language === 'km' ? 'រចនាសម្ព័ន្ធចាត់តាំង' : language === 'zh' ? '组织架构' : 'Organizational Structure'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-white">
              {language === 'km' && 'ខ្សែច្រវាក់បញ្ជាការ និងការបែងចែកភារកិច្ចច្បាស់លាស់'}
              {language === 'zh' && '结构严密的指挥链与职能部门划分'}
              {language === 'en' && 'Corporate Command Hierarchy & Operations Flow'}
            </h2>
          </div>

          {/* Org Chart Diagram Component */}
          <div className="p-8 bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl space-y-8">
            {/* Top Node */}
            <div className="flex justify-center">
              <div className="p-4 bg-gradient-to-r from-blue-900 to-slate-900 border-2 border-blue-500 rounded-xl text-center space-y-1 max-w-sm w-full shadow-lg">
                <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">General Management</span>
                <h3 className="font-extrabold text-white text-base font-serif">Executive Directorate</h3>
                <p className="text-xs text-slate-300">Corporate Governance & Strategy</p>
              </div>
            </div>

            {/* Vertical Connector Line */}
            <div className="w-0.5 h-6 bg-blue-500/50 mx-auto" />

            {/* Level 2: Operations Command */}
            <div className="flex justify-center">
              <div className="p-4 bg-slate-900 border border-slate-700 rounded-xl text-center space-y-1 max-w-sm w-full shadow">
                <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">Operations Headquarters</span>
                <h4 className="font-bold text-white text-sm font-serif">Central Operations Division</h4>
                <p className="text-xs text-slate-400">24/7 Provincial Dispatch & Guard Command</p>
              </div>
            </div>

            {/* Vertical Connector Line */}
            <div className="w-0.5 h-6 bg-slate-700 mx-auto" />

            {/* Level 3: Departmental Branches */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-lg text-center space-y-1">
                <div className="w-8 h-8 bg-blue-900 text-white rounded-full mx-auto flex items-center justify-center font-bold text-xs mb-1">1</div>
                <h5 className="font-bold text-xs text-white">Patrol Supervisors</h5>
                <p className="text-[11px] text-slate-400">25 Provincial Dispatch Hubs</p>
              </div>

              <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-lg text-center space-y-1">
                <div className="w-8 h-8 bg-blue-900 text-white rounded-full mx-auto flex items-center justify-center font-bold text-xs mb-1">2</div>
                <h5 className="font-bold text-xs text-white">Guard Academy (HR)</h5>
                <p className="text-[11px] text-slate-400">Recruitment & MOI Clearance</p>
              </div>

              <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-lg text-center space-y-1">
                <div className="w-8 h-8 bg-blue-900 text-white rounded-full mx-auto flex items-center justify-center font-bold text-xs mb-1">3</div>
                <h5 className="font-bold text-xs text-white">Administration & Legal</h5>
                <p className="text-[11px] text-slate-400">Licensing & Compliance</p>
              </div>

              <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-lg text-center space-y-1">
                <div className="w-8 h-8 bg-blue-900 text-white rounded-full mx-auto flex items-center justify-center font-bold text-xs mb-1">4</div>
                <h5 className="font-bold text-xs text-white">Finance & Payroll</h5>
                <p className="text-[11px] text-slate-400">NSSF & Employee Welfare</p>
              </div>

              <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-lg text-center space-y-1">
                <div className="w-8 h-8 bg-blue-900 text-white rounded-full mx-auto flex items-center justify-center font-bold text-xs mb-1">5</div>
                <h5 className="font-bold text-xs text-white">Client Services</h5>
                <p className="text-[11px] text-slate-400">24/7 Hotline & Account Managers</p>
              </div>
            </div>

            {/* Level 4: Field Guards */}
            <div className="p-4 bg-blue-950/60 border border-blue-900/80 rounded-xl text-center space-y-2 max-w-xl mx-auto">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Field Personnel & Guard Units</span>
              <p className="text-xs text-slate-300">
                Manned Guards • VIP Escort Squads • Mobile Patrol 4x4 Fleet • CIT Armor Crew
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================== */}
      {/* SECTION 9: TRAINING EXCELLENCE                                          */}
      {/* ======================================================================== */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-bold uppercase tracking-widest text-blue-900">
              <GraduationCap className="w-3.5 h-3.5 text-blue-900" />
              <span>
                {language === 'km' ? 'វគ្គបណ្តុះបណ្តាល និងក្បួនវិន័យ' : language === 'zh' ? '特训与体能基地' : 'Guard Training Excellence'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900">
              {language === 'km' && 'ការបណ្តុះបណ្តាលក្បួនវិន័យ សីលធម៌ និងការសង្គ្រោះបឋម'}
              {language === 'zh' && '正规化军警纪律培训与应急救护'}
              {language === 'en' && 'National Police Certified Guard Academy'}
            </h2>
            <p className="text-slate-600 text-sm">
              {language === 'km' ? 'ភ្នាក់ងារសន្តិសុខ K.N.S.K គ្រប់រូបត្រូវឆ្លងកាត់ការបណ្តុះបណ្តាលយ៉ាងស្ទាត់ជំនាញមុនពេលបញ្ជូនទៅបំពេញបេសកកម្ម' : language === 'zh' ? '每名队员上岗前必须在基地接受全面封闭式考核特训' : 'Every security officer undergoes strict physical, legal, and hospitality instruction before post assignment'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Gallery Image Feature */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group bg-slate-950">
              <img
                src={guardFormationImg}
                alt="K.N.S.K Guard Drill Formation Inspection"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700">
                  Official Drill Inspection
                </span>
                <h3 className="font-bold text-sm text-white font-serif">
                  Morning Roll-Call & Physical Inspection at K.N.S.K Head Office
                </h3>
              </div>
            </div>

            {/* 6 Training Curriculum Pillars */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <h4 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-900" /> Physical Fitness & Drills
                </h4>
                <p className="text-[11px] text-slate-600">Daily parade drills, physical endurance, and unarmed defense.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <h4 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-900" /> Emergency First-Aid (CPR)
                </h4>
                <p className="text-[11px] text-slate-600">Certified basic life support, medical emergency response.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <h4 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-900" /> Fire Safety & Prevention
                </h4>
                <p className="text-[11px] text-slate-600">Fire extinguisher operation and building evacuation drills.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <h4 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-900" /> Customer Service & Etiquette
                </h4>
                <p className="text-[11px] text-slate-600">Polite visitor greeting, luggage escort, and dispute de-escalation.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <h4 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-900" /> Radio & Patrol Wands
                </h4>
                <p className="text-[11px] text-slate-600">VHF radio codes, electronic GPS wand scanning checkpoint logs.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <h4 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-900" /> MOI Security Laws
                </h4>
                <p className="text-[11px] text-slate-600">Legal rights, post boundaries, and National Police coordination.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================== */}
      {/* SECTION 14: CERTIFICATIONS & CREDIBILITY                                  */}
      {/* ======================================================================== */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-900 border border-emerald-200 rounded-full text-xs font-bold uppercase tracking-widest">
              <Award className="w-3.5 h-3.5 text-emerald-700" />
              <span>
                {language === 'km' ? 'លិខិតអនុញ្ញាត & វិញ្ញាបនបត្រ' : language === 'zh' ? '官方资质与执照' : 'Official Certifications & Registrations'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900">
              {language === 'km' && 'ការទទួលស្គាល់ផ្លូវការពីក្រសួង និងស្ថាប័នរដ្ឋ'}
              {language === 'zh' && '王国政府内政部与商业部合规认定'}
              {language === 'en' && 'Verified Government Credentials & Accreditations'}
            </h2>
          </div>

          {/* Official Certificates Showcase Image Card */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="relative rounded-xl overflow-hidden border border-slate-700 group bg-slate-950 shadow-inner">
                <img
                  src={knskCertificateImg}
                  alt={
                    language === 'km'
                      ? 'រូបថតវិញ្ញាបនបត្រអាជីវកម្ម និងលិខិតអនុញ្ញាតផ្លូវការរបស់ក្រុមហ៊ុន K.N.S.K'
                      : language === 'zh'
                      ? 'K.N.S.K 官方实体营业执照、税务登记与内政部特许安保资质证书展板'
                      : 'Authentic Photo of K.N.S.K Official Government-Issued Business Certificates, Tax Registrations, NSSF and Ministry Approvals'
                  }
                  className="w-full h-auto max-h-[420px] object-contain mx-auto group-hover:scale-101 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-widest shadow-md flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {language === 'km' ? 'ឯកសារច្បាប់ផ្លូវការជាក់ស្តែង' : language === 'zh' ? '官方权威实体证照' : 'Original Government Certificates'}
                </span>
              </div>
              <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-lg text-xs text-slate-300 flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-bold text-slate-200 block text-[11px] uppercase tracking-wider">
                    {language === 'km' ? 'រូបថតជាក់ស្តែងនៃឯកសារផ្លូវការ' : language === 'zh' ? '实拍原件展板说明' : 'Official Certificate Display (Authentic Photo)'}
                  </span>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {language === 'km'
                      ? 'ផ្ទាំងរូបភាពបង្ហាញឯកសារច្បាប់ផ្លូវការរួមមាន៖ ប័ណ្ណប៉ាតង់ពន្ធដារ (Patent Tax), វិញ្ញាបនបត្រចុះបញ្ជីអាករលើតម្លៃបន្ថែម (VAT Registration), វិញ្ញាបនបត្រចុះបញ្ជីពាណិជ្ជកម្ម (Certificate of Incorporation), លិខិតចុះបញ្ជីបេឡាជាតិរបបសន្តិសុខសង្គម (NSSF), និងលិខិតអនុញ្ញាតប្រតិបត្តិការសន្តិសុខពីក្រសួងមហាផ្ទៃ។'
                      : language === 'zh'
                      ? '展板原件包含：国家税务总局营业专利税证 (Patent Tax)、增值税(VAT)登记证、商业部企业法人注册登记证 (Certificate of Incorporation)、国家社会保障基金 (NSSF) 企业参保证书、以及内政部与国家警察总署特许私营安保批准证书。'
                      : 'Framed original certificates display: General Department of Taxation Patent Tax, VAT Registration, Ministry of Commerce Certificate of Incorporation, National Social Security Fund (NSSF) Enterprise Registration, and Ministry of Interior / National Police Private Security Approvals.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800 uppercase tracking-widest inline-block">
                {language === 'km' ? 'នីតិបុគ្គលស្របច្បាប់ពេញលេញ' : language === 'zh' ? '官方核准合法合规安防实体' : 'Fully Authorized Security Entity'}
              </span>
              <h3 className="text-2xl font-bold font-serif text-white">
                {language === 'km'
                  ? 'ឯកសារច្បាប់ និងវិញ្ញាបនបត្រទទួលស្គាល់ផ្លូវការពីរាជរដ្ឋាភិបាល'
                  : language === 'zh'
                  ? '柬埔寨官方营业资质与特许安保牌照'
                  : 'Official Government Business Certificates & Regulatory Accreditations'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'km'
                  ? 'រូបភាពខាងលើបង្ហាញពីឯកសារច្បាប់ពិតប្រាកដរបស់ក្រុមហ៊ុន K.N.S.K Security Co., Ltd. ដែលបានចុះបញ្ជី និងទទួលស្គាល់ពេញលេញពីរាជរដ្ឋាភិបាលកម្ពុជា រួមមាន វិញ្ញាបនបត្រចុះបញ្ជីពាណិជ្ជកម្មពីក្រសួងពាណិជ្ជកម្ម (Co. 88219/15E), ប័ណ្ណប៉ាតង់ពន្ធដារ និងវិញ្ញាបនបត្រ VAT (KNSK-TIN-109823471) ពីអគ្គនាយកដ្ឋានពន្ធដារ, ការចុះបញ្ជីបេឡាជាតិរបបសន្តិសុខសង្គម (NSSF #NSSF-KH-2015-88) ការពារសុខុមាលភាពបុគ្គលិក និងអាជ្ញាប័ណ្ណប្រតិបត្តិការសន្តិសុខឯកជនពីក្រសួងមហាផ្ទៃ និងអគ្គស្នងការដ្ឋាននគរបាលជាតិ (លេខ KNSK-SEC-2015-089)។'
                  : language === 'zh'
                  ? '上图展示了 K.N.S.K 安保有限公司全套官方颁发的法定营业与资质证照：包括柬埔寨商业部企业法人注册登记证 (Co. 88219/15E)、国家税务总局营业专利税证及增值税(VAT)登记证 (KNSK-TIN-109823471)、国家社会保障基金(NSSF)企业参保资质、以及内政部与国家警察总署特许私营安保牌照 (#KNSK-SEC-2015-089)。'
                  : "Pictured above are K.N.S.K Security Co., Ltd.'s genuine government-issued business credentials: the Ministry of Commerce Certificate of Incorporation (Co. 88219/15E), General Department of Taxation Patent Tax and VAT Registration (#KNSK-TIN-109823471), National Social Security Fund (NSSF) employee healthcare and injury insurance registration (#NSSF-KH-2015-88), and official private security operating approvals from the Ministry of Interior / General Commissariat of National Police (#KNSK-SEC-2015-089)."}
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-300">
                <span className="bg-slate-800 px-2.5 py-1 rounded border border-slate-700 text-emerald-400">
                  ✓ {language === 'km' ? 'ប័ណ្ណប៉ាតង់ពន្ធដារ (Patent Tax)' : language === 'zh' ? '营业专利税证 (Patent Tax)' : 'Patent Tax (GDT)'}
                </span>
                <span className="bg-slate-800 px-2.5 py-1 rounded border border-slate-700 text-emerald-400">
                  ✓ {language === 'km' ? 'វិញ្ញាបនបត្រ VAT' : language === 'zh' ? '增值税(VAT)登记证' : 'VAT Registration'}
                </span>
                <span className="bg-slate-800 px-2.5 py-1 rounded border border-slate-700 text-emerald-400">
                  ✓ {language === 'km' ? 'ចុះបញ្ជីពាណិជ្ជកម្ម (MOC)' : language === 'zh' ? '商业部企业法人登记证' : 'Commerce Incorporation'}
                </span>
                <span className="bg-slate-800 px-2.5 py-1 rounded border border-slate-700 text-emerald-400">
                  ✓ {language === 'km' ? 'អាជ្ញាប័ណ្ណក្រសួងមហាផ្ទៃ' : language === 'zh' ? '内政部安保许可证' : 'MOI Police License'}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS_LIST.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 hover:border-emerald-400 transition"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-900 rounded-lg flex items-center justify-center font-bold">
                    {renderIcon(cert.iconName, "w-5 h-5 text-emerald-800")}
                  </div>
                  <span className="text-[10px] font-extrabold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded uppercase tracking-wider">
                    {getText(cert.status)}
                  </span>
                </div>

                <h3 className="font-extrabold text-slate-900 text-sm font-serif">
                  {getText(cert.title)}
                </h3>

                <div className="text-xs space-y-1">
                  <span className="font-mono font-bold text-blue-900 block">{cert.code}</span>
                  <span className="text-slate-500 block text-[11px]">{getText(cert.issuedBy)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================== */}
      {/* SECTION 15: INTERACTIVE FAQ                                              */}
      {/* ======================================================================== */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-bold uppercase tracking-widest text-blue-900">
              <HelpCircle className="w-3.5 h-3.5 text-blue-900" />
              <span>
                {language === 'km' ? 'សំណួរដែលជួបញឹកញាប់' : language === 'zh' ? '常见问题解答' : 'Frequently Asked Questions'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900">
              {language === 'km' && 'ចម្លើយចំពោះសំណួរដែលអតិថិជនតែងតែសួរ'}
              {language === 'zh' && '关于 K.N.S.K 安保服务的常见解答'}
              {language === 'en' && 'Everything You Need to Know About K.N.S.K'}
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={faqSearchQuery}
              onChange={(e) => setFaqSearchQuery(e.target.value)}
              placeholder={
                language === 'km'
                  ? 'ស្វែងរកសំណួរ (ឧទាហរណ៍៖ តម្លៃ, ២៤ម៉ោង, អាជ្ញាប័ណ្ណ)...'
                  : language === 'zh'
                  ? '搜索问题 (例如：报价、24小时、执照)...'
                  : 'Search questions (e.g. quote, 24-hour, license)...'
              }
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white shadow-inner"
            />
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.length === 0 ? (
              <p className="text-center text-sm text-slate-500 py-8">
                No matching questions found. Try searching with a different keyword or contact our dispatch hotline.
              </p>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = activeFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 transition shadow-xs"
                  >
                    <button
                      onClick={() => setActiveFaqId(isOpen ? null : faq.id)}
                      className="w-full p-5 text-left font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-4 hover:bg-blue-50/50 transition font-serif"
                    >
                      <span>{getText(faq.question)}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-blue-900 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                        {getText(faq.answer)}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* ======================================================================== */}
      {/* SECTION 17: CALL TO ACTION BANNER                                       */}
      {/* ======================================================================== */}
      <section id="contact-section" className="py-20 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-red-600/90 text-white font-bold text-xs uppercase tracking-widest rounded-full shadow">
              <ShieldCheck className="w-4 h-4" />
              <span>
                {language === 'km' ? 'ដំណោះស្រាយសន្តិសុខផ្លូវការ' : language === 'zh' ? '开启专业安保保障' : 'Partner with K.N.S.K'}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-white leading-tight">
              {language === 'km' && 'ត្រៀមខ្លួនរួមជាមួយ K.N.S.K ដើម្បីការពារអាជីវកម្មរបស់អ្នក?'}
              {language === 'zh' && '准备好为您的企业配备全方位的安全保障了吗？'}
              {language === 'en' && 'Ready to Protect Your Business with K.N.S.K?'}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {language === 'km' && 'ទំនាក់ទំនងមកកាន់យើងខ្ញុំថ្ងៃនេះ ដើម្បីទទួលបានការវាយតម្លៃហានិភ័យដោយឥតគិតថ្លៃ និងសម្រង់តម្លៃសេវាសន្តិសុខដែលតម្រូវតាមទីតាំងរបស់អ្នក។'}
              {language === 'zh' && '立即联系我们，获取免费现场安全风险评估与专属项目安保报价方案。'}
              {language === 'en' && 'Get in touch with our operations team today for a complimentary site risk assessment and customized proposal tailored to your facility.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setActiveTab('quotation')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-widest rounded-xl shadow-xl shadow-red-900/40 transition-all transform hover:-translate-y-0.5"
            >
              <Zap className="w-4 h-4" />
              <span>
                {language === 'km' ? 'ស្នើសុំសម្រង់តម្លៃឥតគិតថ្លៃ' : language === 'zh' ? '获取免费定制方案' : 'Request Free Proposal'}
              </span>
            </button>

            <a
              href="tel:0964838666"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 font-extrabold text-sm uppercase tracking-widest rounded-xl shadow-xl transition-all"
            >
              <PhoneCall className="w-4 h-4 text-red-600 animate-pulse" />
              <span>096 483 8666 (24/7 Dispatch)</span>
            </a>

            <a
              href="https://t.me/KNSK_security"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm uppercase tracking-widest rounded-xl shadow-xl transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Telegram (@KNSK_security)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
