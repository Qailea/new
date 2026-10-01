import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { EMPLOYEE_BENEFITS } from '../../data/recruitmentData';
import { ShieldCheck, TrendingUp, Award, Home, CheckCircle2, Gift, Building2, AlertCircle, Users } from 'lucide-react';

export const EmployeeBenefitsSection: React.FC = () => {
  const { language } = useLanguage();

  const getIcon = (name: string) => {
    switch (name) {
      case 'Building2': return <Building2 className="w-6 h-6 text-emerald-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-blue-800" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-indigo-600" />;
      case 'Award': return <Award className="w-6 h-6 text-purple-600" />;
      case 'Home': return <Home className="w-6 h-6 text-rose-600" />;
      default: return <Gift className="w-6 h-6 text-blue-900" />;
    }
  };

  const getT = (en?: string, km?: string, zh?: string) => {
    if (!en && !km && !zh) return '';
    if (language === 'km') return km || en || '';
    if (language === 'zh') return zh || en || '';
    return en || '';
  };

  return (
    <section id="benefits" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-900 border border-red-200 rounded-full text-xs font-bold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5 text-red-600" />
            {language === 'km' ? 'អត្ថប្រយោជន៍ និងការថែទាំបុគ្គលិក' : language === 'zh' ? '全方位员工福利与保障计划' : 'Employee Benefits & Welfare'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-serif text-slate-900 tracking-tight">
            {language === 'km' ? 'កញ្ចប់អត្ថប្រយោជន៍ផ្លូវការដែល K.N.S.K ផ្តល់ជូន' : language === 'zh' ? '实打实的优厚福利，让每一位员工无后顾之忧' : 'Comprehensive Compensation & Support Package'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {language === 'km' ? 'អត្ថប្រយោជន៍ទាំងអស់ត្រូវបានផ្តល់ជូនដោយច្បាស់លាស់ និងស្របតាមច្បាប់ស្តីពីការងារនៃព្រះរាជាណាចក្រកម្ពុជា' : language === 'zh' ? '所有福利均严格遵守柬埔寨《劳工法》规范并正式兑现保障' : 'All benefits listed are officially provided to K.N.S.K contract officers.'}
          </p>
        </div>

        {/* Universal Eligibility Banner for Wing Bank & Insurance */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Users className="w-5 h-5 text-blue-200" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-serif">
                {language === 'km' ? 'អត្ថប្រយោជន៍បើកទូលាយសម្រាប់បុគ្គលិកគ្រប់មុខតំណែង' : language === 'zh' ? '全员开放式福利（不限职级与管理层）' : 'Universal Employee Benefits (Open to All Positions)'}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-600">
                {language === 'km' 
                  ? 'ឱកាសកម្ចី Wing Bank និងអត្ថប្រយោជន៍ធានារ៉ាប់រងសម្រាប់បុគ្គលិក ត្រូវបានផ្តល់ជូនសម្រាប់គ្រប់មុខតំណែងសកម្មទាំងអស់របស់ K.N.S.K ដោយមិនកម្រិតត្រឹមតែថ្នាក់គ្រប់គ្រងឡើយ' 
                  : language === 'zh'
                  ? 'Wing Bank 贷款机会与员工保险保障适用于 K.N.S.K 所有在职各岗位人员，不限于管理人员'
                  : 'Wing Bank loan opportunity and Employee Insurance Benefits are available to all active K.N.S.K personnel, not restricted to management.'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
            <span className="px-2.5 py-1 bg-white rounded-lg border border-slate-200 font-medium text-slate-700">
              {language === 'km' ? '១. ភ្នាក់ងារសន្តិសុខការពារប្រចាំការ (ប្រុស / ស្រី)' : language === 'zh' ? '1. 驻点安保员（男/女）' : '1. Static Security Guards'}
            </span>
            <span className="px-2.5 py-1 bg-white rounded-lg border border-slate-200 font-medium text-slate-700">
              {language === 'km' ? '២. មេក្រុមសន្តិសុខ / ភ្នាក់ងារជាន់ខ្ពស់' : language === 'zh' ? '2. 班组长/资深队员' : '2. Team Leaders'}
            </span>
            <span className="px-2.5 py-1 bg-white rounded-lg border border-slate-200 font-medium text-slate-700">
              {language === 'km' ? '៣. ប្រធានផ្នែកលក់សេវាកម្មសន្តិសុខ' : language === 'zh' ? '3. 业务销售经理' : '3. Security Sales Managers'}
            </span>
            <span className="px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-lg border border-emerald-200 font-bold">
              {language === 'km' ? '៤. បុគ្គលិក និងតំណែងសកម្មទាំងអស់' : language === 'zh' ? '4. 全体在职员工与岗位' : '4. All Active Staff & Roles'}
            </span>
          </div>
        </div>

        {/* Benefits Grid - Balanced 2x2 grid for remaining benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EMPLOYEE_BENEFITS.map((item) => {
            const title = getT(item.titleEn, item.titleKm, item.titleZh);
            const desc = getT(item.descEn, item.descKm, item.descZh);
            const tag = getT(item.tagEn, item.tagKm, item.tagZh);
            const clarification = getT(item.clarificationEn, item.clarificationKm, item.clarificationZh);
            const footerNote = getT(item.footerNoteEn, item.footerNoteKm, item.footerNoteZh);
            const eligibleList = language === 'km' ? item.eligiblePositionsKm : language === 'zh' ? item.eligiblePositionsZh : item.eligiblePositionsEn;

            const isWingBank = item.id === 'b-wing-bank';
            const isInsurance = item.id === 'b-insurance';

            return (
              <div
                key={item.id}
                className={`bg-slate-50 hover:bg-white p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-xl ${
                  isWingBank 
                    ? 'border-emerald-300/80 ring-1 ring-emerald-500/10' 
                    : isInsurance 
                    ? 'border-blue-300/80 ring-1 ring-blue-500/10' 
                    : 'border-slate-200/90'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-slate-200 flex items-center justify-center group-hover:scale-110 transition">
                      {getIcon(item.iconName)}
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase border ${
                      isWingBank 
                        ? 'bg-emerald-100 text-emerald-900 border-emerald-300' 
                        : isInsurance
                        ? 'bg-blue-100 text-blue-900 border-blue-300'
                        : 'bg-emerald-100 text-emerald-800 border-emerald-200'
                    }`}>
                      {tag}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base text-slate-900 font-serif leading-snug group-hover:text-blue-900 transition">
                    {title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {desc}
                  </p>

                  {/* Clarification Alert Box */}
                  {clarification && (
                    <div className={`p-3 rounded-xl border text-[11px] leading-relaxed flex items-start gap-2 ${
                      isWingBank 
                        ? 'bg-amber-50/90 border-amber-200 text-amber-900' 
                        : 'bg-blue-50/90 border-blue-200 text-blue-900'
                    }`}>
                      <AlertCircle className={`w-4 h-4 shrink-0 mt-0.5 ${
                        isWingBank ? 'text-amber-600' : 'text-blue-600'
                      }`} />
                      <span className="font-medium">{clarification}</span>
                    </div>
                  )}

                  {/* Eligible Roles Chips */}
                  {eligibleList && eligibleList.length > 0 && (
                    <div className="pt-2 border-t border-slate-200/60 space-y-1.5">
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                        <Users className="w-3 h-3 text-slate-400" />
                        <span>{language === 'km' ? 'មុខតំណែងដែលមានសិទ្ធិ' : language === 'zh' ? '适用岗位对象' : 'Eligible Positions'}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {eligibleList.map((role, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-white text-slate-700 rounded-md text-[10px] font-medium border border-slate-200"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer status */}
                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between gap-2 text-xs">
                  {isWingBank ? (
                    <div className="flex items-center gap-2 text-emerald-800 font-bold">
                      <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{footerNote || (language === 'km' ? 'អាស្រ័យលើការអនុម័តរបស់ Wing Bank' : language === 'zh' ? '须经 Wing Bank 审批' : 'Subject to Wing Bank Approval')}</span>
                    </div>
                  ) : isInsurance ? (
                    <div className="flex items-center gap-2 text-blue-900 font-bold">
                      <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{footerNote || (language === 'km' ? 'សម្រាប់បុគ្គលិកគ្រប់លក្ខខណ្ឌទាំងអស់' : language === 'zh' ? '全体符合条件在职员工' : 'All Eligible Active Employees')}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-emerald-700 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{language === 'km' ? 'ផ្តល់ជូនជាផ្លូវការ' : language === 'zh' ? '公司正式提供' : 'Guaranteed Provision'}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

