import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { cambodiaProvinces } from '../../data/provinces';
import { KNSK_OFFICES } from '../../data/officeData';
import {
  MapPin,
  Building2,
  PhoneCall,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  Facebook
} from 'lucide-react';

interface ContactPageProps {
  setActiveTab?: (tab: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const { language } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    province: 'Phnom Penh',
    serviceType: 'Armed / Manned Guarding',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        province: 'Phnom Penh',
        serviceType: 'Armed / Manned Guarding',
        message: ''
      });
    }, 4000);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Contact Hero Banner */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-900/50 border border-blue-700 rounded-full text-xs font-bold text-blue-300 uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>
              {language === 'km'
                ? 'ស្នាក់ការកណ្តាល & មជ្ឈមណ្ឌលទំនាក់ទំនង'
                : language === 'zh'
                ? '企业官方指挥总部与商务联络'
                : 'Corporate Headquarters & Contact Hub'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight text-white max-w-3xl">
            {language === 'km' && 'ទំនាក់ទំនងស្នាក់ការកណ្តាល & ប្រឹក្សាសន្តិសុខ'}
            {language === 'zh' && '官方总部联络与专业安保咨询'}
            {language === 'en' && 'Headquarters Contact & Security Consultation'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            {language === 'km'
              ? 'ទំនាក់ទំនងដោយផ្ទាល់ជាមួយថ្នាក់ដឹកនាំ និងក្រុមការងារប្រតិបត្តិការនៃក្រុមហ៊ុនសន្តិសុខ ខេ អិន អេស ខេ តាមរយៈស្នាក់ការកណ្តាលផ្លូវការទាំង ៣ ទីតាំង ឬទូរស័ព្ទទាន់ហេតុការណ៍ ២៤ ម៉ោង។'
              : language === 'zh'
              ? '直接联系 K.N.S.K 安保管理团队与指挥中控中心。我们设有3处官方枢纽指挥中心，提供全天候应急响应与专业方案咨询。'
              : 'Directly connect with K.N.S.K Security executive operations across our 3 official headquarters stations or our 24/7 national response hotline.'}
          </p>
        </div>
      </section>

      {/* 3 Official Stations & Headquarters Section */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="headquarters-section">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-2.5 py-1 rounded">
            <Building2 className="w-3.5 h-3.5 text-blue-900" />
            <span>
              {language === 'km' ? 'ទីស្នាក់ការផ្លូវការទាំង ៣' : language === 'zh' ? '三大核心指挥中心' : '3 Official Headquarters & Stations'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-900">
            {language === 'km' ? 'ទីស្នាក់ការកណ្តាល និងស្ថានីយ៍ប្រតិបត្តិការ' : language === 'zh' ? '核心指挥总部与物流工业分站' : 'Official Command Centers & Logistics Hubs'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {KNSK_OFFICES.map((office) => (
            <div
              key={office.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-16/9 bg-slate-900 overflow-hidden">
                  <img
                    src={office.imageUrl}
                    alt={office.nameEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded border border-slate-800 uppercase tracking-wider">
                    {language === 'km' ? office.typeKm : language === 'zh' ? office.typeZh : office.type}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="font-bold text-base text-slate-900 font-serif group-hover:text-blue-900 transition-colors">
                    {language === 'km' ? office.nameKm : language === 'zh' ? office.nameZh : office.nameEn}
                  </h3>

                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{language === 'km' ? office.addressKm : language === 'zh' ? office.addressZh : office.addressEn}</span>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{language === 'km' ? office.businessHoursKm : language === 'zh' ? office.businessHoursZh : office.businessHoursEn}</span>
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      {language === 'km' ? 'សេវាកម្មប្រចាំការ' : language === 'zh' ? '驻防专项服务' : 'Key Station Capabilities'}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {(language === 'km' ? office.servicesKm : language === 'zh' ? office.servicesZh : office.servicesEn).slice(0, 3).map((svc, idx) => (
                        <span key={idx} className="bg-slate-100 text-slate-700 text-[10px] font-medium px-2 py-0.5 rounded">
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href={`tel:${office.phone[0].replace(/\s+/g, '')}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-blue-900 hover:bg-blue-950 text-white text-xs font-bold rounded-xl transition"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>{office.phone[0]}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Contact Channels & Inquiry Form */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Channels */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded">
                <PhoneCall className="w-3.5 h-3.5 text-red-600" />
                <span>
                  {language === 'km' ? 'ខ្សែទូរស័ព្ទទាន់ហេតុការណ៍ ២៤ម៉ោង' : language === 'zh' ? '24/7全天候应急热线' : '24/7 Rapid Response Dispatch'}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-900">
                {language === 'km' ? 'ទំនាក់ទំនងមកកាន់យើងខ្ញុំឥឡូវនេះ' : language === 'zh' ? '直接联系商务与安保调度团队' : 'Get in Direct Touch with Our Team'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {language === 'km'
                  ? 'ក្រុមការងារសន្តិសុខ ខេ អិន អេស ខេ ត្រៀមខ្លួនជាស្រេចដើម្បីឆ្លើយតបនូវរាល់សំណួរ ស្នើសុំសម្រង់តម្លៃ និងការដាក់ពង្រាយកម្លាំងសន្តិសុខបន្ទាន់។'
                  : language === 'zh'
                  ? 'K.N.S.K 安保顾问与值班主管随时为您提供专业安保评估、报价方案及现场勘查服务。'
                  : 'Our security consultants and command supervisors are on standby 24/7 to answer questions, issue quotation proposals, and dispatch emergency backup.'}
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* 24/7 Hotline */}
              <a
                href="tel:0964838666"
                className="p-4 bg-white rounded-xl border border-red-200 shadow-xs hover:border-red-600 transition flex items-start gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition">
                  <PhoneCall className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-red-600 block">24/7 Hotline (Emergency)</span>
                  <span className="font-bold text-sm text-slate-900 group-hover:text-red-700 font-mono transition">096 483 8666</span>
                  <span className="text-[10px] text-emerald-600 font-medium block mt-0.5">Instant Radio Dispatch</span>
                </div>
              </a>

              {/* General Phone 1 */}
              <a
                href="tel:093878666"
                className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-blue-900 transition flex items-start gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 group-hover:bg-blue-900 group-hover:text-white transition">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Official Phone Line</span>
                  <span className="font-bold text-sm text-slate-900 group-hover:text-blue-900 font-mono transition">093 878 666</span>
                  <span className="text-[10px] text-slate-500 font-medium block mt-0.5">Operations & Sales</span>
                </div>
              </a>

              {/* General Phone 2 */}
              <a
                href="tel:060878666"
                className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-blue-900 transition flex items-start gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 group-hover:bg-blue-900 group-hover:text-white transition">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Official Phone Line</span>
                  <span className="font-bold text-sm text-slate-900 group-hover:text-blue-900 font-mono transition">060 878 666</span>
                  <span className="text-[10px] text-slate-500 font-medium block mt-0.5">Admin & Coordination</span>
                </div>
              </a>

              {/* Official Telegram */}
              <a
                href="https://t.me/KNSK_security"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-xl border border-sky-200 shadow-xs hover:border-sky-600 transition flex items-start gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 group-hover:bg-sky-600 group-hover:text-white transition">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-sky-700 block">Official Telegram</span>
                  <span className="font-bold text-sm text-slate-900 group-hover:text-sky-700 transition">@KNSK_security</span>
                  <span className="text-[10px] text-sky-600 font-medium block mt-0.5">Direct Chat & Quote Support</span>
                </div>
              </a>

              {/* Official WhatsApp */}
              <a
                href="https://wa.me/855964838666?s=t"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-xl border border-emerald-200 shadow-xs hover:border-emerald-600 transition flex items-start gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-emerald-700 block">Official WhatsApp</span>
                  <span className="font-bold text-sm text-slate-900 group-hover:text-emerald-700 font-mono transition">096 483 8666</span>
                  <span className="text-[10px] text-emerald-600 font-medium block mt-0.5">WhatsApp Business</span>
                </div>
              </a>

              {/* Official Facebook */}
              <a
                href="https://www.facebook.com/share/1BrYBJpnQk/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-xl border border-blue-200 shadow-xs hover:border-blue-600 transition flex items-start gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition">
                  <Facebook className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-blue-700 block">Official Facebook</span>
                  <span className="font-bold text-xs text-slate-900 group-hover:text-blue-700 transition">K.N.S.K Security Co., Ltd.</span>
                  <span className="text-[10px] text-blue-600 font-medium block mt-0.5">Verified Company Page</span>
                </div>
              </a>

              {/* Email Inquiry */}
              <a
                href="mailto:soengknsk@gmail.com"
                className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-blue-900 transition flex items-start gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 group-hover:bg-blue-900 group-hover:text-white transition">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Official Email</span>
                  <span className="font-bold text-xs text-slate-900 group-hover:text-blue-900 transition break-all">soengknsk@gmail.com</span>
                  <span className="text-[10px] text-slate-500 font-medium block mt-0.5">Reply within 2 hours</span>
                </div>
              </a>

              {/* Working Hours */}
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Working Hours</span>
                  <span className="font-bold text-xs text-slate-900">Mon - Sat: 8AM - 5PM</span>
                  <span className="text-[10px] text-blue-700 font-medium block mt-0.5">Control Room: 24/7/365</span>
                </div>
              </div>
            </div>

            {/* Official Headquarters Address */}
            <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-3 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Official Corporate Headquarters</span>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {language === 'km'
                    ? 'ផ្ទះលេខ៩E១ ផ្លូវលេខ២០៥ ភូមិ១០ សង្កាត់ទួលស្វាយព្រៃ២ ខណ្ឌចំការមន រាជធានីភ្នំពេញ'
                    : language === 'zh'
                    ? '金边市桑园区Tuol Svay Prey II分区10村205街第9E1号'
                    : 'House No. 9E1, Street 205, Village 10, Tuol Svay Prey II, Chamkar Mon, Phnom Penh, Kingdom of Cambodia'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="space-y-2 mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-blue-900 bg-blue-50 px-2 py-0.5 rounded">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{language === 'km' ? 'ទម្រង់បែបបទទំនាក់ទំនង' : language === 'zh' ? '商务洽谈与报价' : 'Online Inquiry'}</span>
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-900">
                {language === 'km'
                  ? 'ផ្ញើសំណើពិគ្រោះ ឬស្នើសុំសម្រង់តម្លៃ'
                  : language === 'zh'
                  ? '提交安保需求或申请定制方案'
                  : 'Send Security Inquiry or Request Proposal'}
              </h3>
            </div>

            {formSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base text-emerald-900">
                  {language === 'km' ? 'សាររបស់អ្នកត្រូវបានផ្ញើដោយជោគជ័យ!' : language === 'zh' ? '您的咨询已成功提交！' : 'Inquiry Submitted Successfully!'}
                </h4>
                <p className="text-xs text-emerald-700 max-w-md mx-auto">
                  {language === 'km'
                    ? 'ក្រុមការងារសន្តិសុខ ខេ អិន អេស ខេ នឹងទាក់ទងត្រឡប់មកលោកអ្នកក្នុងរយៈពេល ២ ម៉ោង តាមរយៈលេខទូរស័ព្ទដែលបានផ្តល់ជូន។'
                    : language === 'zh'
                    ? 'K.N.S.K 安保顾问将在2小时内通过您预留的电话与您联系，提供专业安全方案。'
                    : 'Our security coordination team will contact you within 2 business hours to assess your facility requirements.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      {language === 'km' ? 'ឈ្មោះពេញ / ស្ថាប័ន *' : language === 'zh' ? '您的姓名 / 公司名称 *' : 'Full Name / Company *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. John Doe / Borey Peng Huoth"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      {language === 'km' ? 'លេខទូរស័ព្ទ *' : language === 'zh' ? '联系电话 *' : 'Phone Number *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 012 345 678"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      {language === 'km' ? 'អ៊ីមែល' : language === 'zh' ? '电子邮箱' : 'Email Address'}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="contact@company.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      {language === 'km' ? 'រាជធានី / ខេត្ត *' : language === 'zh' ? '所在省份 / 城市 *' : 'Province / Location *'}
                    </label>
                    <select
                      value={formData.province}
                      onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                    >
                      {cambodiaProvinces.map((prov) => (
                        <option key={prov.id} value={prov.nameEn}>
                          {language === 'km' ? prov.nameKm : language === 'zh' ? prov.nameZh : prov.nameEn}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">
                    {language === 'km' ? 'ប្រភេទសេវាកម្មដែលត្រូវការ' : language === 'zh' ? '需求安保类型' : 'Requested Security Service'}
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                  >
                    <option value="Armed / Manned Guarding">Manned Security Guarding (24/7)</option>
                    <option value="Commercial & Office Building">Commercial & Office Building Security</option>
                    <option value="Factory & Industrial Park">Factory & Industrial Park Protection</option>
                    <option value="Hotel & Resort Hospitality">Hotel & Resort Hospitality Security</option>
                    <option value="VIP Bodyguard & Close Protection">VIP Close Protection & Escort</option>
                    <option value="Cash in Transit (CIT)">Armed Cash in Transit (CIT)</option>
                    <option value="Event Security & Crowd Control">Event Security & Crowd Control</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">
                    {language === 'km' ? 'ព័ត៌មានលម្អិតបន្ថែម ឬតម្រូវការ *' : language === 'zh' ? '具体要求与说明 *' : 'Inquiry Details / Message *'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      language === 'km'
                        ? 'សូមបញ្ជាក់ទីតាំង ចំនួនកម្លាំងសន្តិសុខដែលត្រូវការ ឬព័ត៌មានជាក់លាក់...'
                        : language === 'zh'
                        ? '请填写需要保护的场所位置、预计保安人数及具体要求...'
                        : 'Describe your site location, guard shift hours, number of posts required, or special instructions...'
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>
                    {language === 'km' ? 'ផ្ញើសំណើឥឡូវនេះ' : language === 'zh' ? '立即提交咨询' : 'Submit Security Inquiry'}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
