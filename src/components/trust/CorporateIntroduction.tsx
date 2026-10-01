import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  Building2,
  FileCheck,
  ShieldCheck,
  CheckCircle2,
  Award,
  Globe2,
  Users,
  MapPin,
  Calendar,
  Lock,
  Stamp
} from 'lucide-react';

export const CorporateIntroduction: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-white border-b border-slate-200" id="corp-intro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-50 text-blue-900 border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
            <FileCheck className="w-4 h-4 text-blue-900" />
            {language === 'km'
              ? 'ព័ត៌មានក្រុមហ៊ុនផ្លូវការ និងការអនុញ្ញាតពីក្រសួង'
              : language === 'zh'
              ? 'K.N.S.K 企业官方资质与政府批文概况'
              : 'Official Corporate Background & Credentials'}
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900 tracking-tight leading-tight">
            {language === 'km'
              ? 'ក្រុមហ៊ុន ខេ. អិន. អេស. ខេ ស៊ីឃ្យូរ៉ូធី ខូអិលធីឌី'
              : language === 'zh'
              ? 'K.N.S.K 安保有限公司企业概况'
              : 'K.N.S.K SECURITY CO., LTD.'}
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-sans">
            {language === 'km'
              ? 'ផ្តល់សេវាកម្មសន្តិសុខឯកជនប្រកបដោយទំនុកចិត្ត និងគុណភាពខ្ពស់ គ្របដណ្តប់ ២៥ រាជធានី-ខេត្ត ក្នុងព្រះរាជាណាចក្រកម្ពុជា។'
              : language === 'zh'
              ? '在柬埔寨王国全境25个省市提供合法合规、高效专业的私营安保与要员护卫整体解决方案。'
              : 'Delivering comprehensive and integrated security solutions tailored to private and public sectors across all 25 provinces in Cambodia.'}
          </p>
        </div>

        {/* Official Credentials Grid (Based on Brochure PDF OCR) */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-900/80 rounded-xl text-blue-300 border border-blue-700/80">
                <Stamp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg font-serif text-white">
                  {language === 'km' ? 'អាជ្ញាប័ណ្ណ និងការចុះបញ្ជីផ្លូវការ' : language === 'zh' ? '政府特许经营执照与商业注册' : 'Official Government Licenses & Permits'}
                </h3>
                <p className="text-xs text-slate-400">
                  {language === 'km' ? 'ទទួលបានការទទួលស្គាល់ពីក្រសួងមហាផ្ទៃ និងក្រសួងពាណិជ្ជកម្ម' : language === 'zh' ? '内政部国家警察总署批复与商业部法定实体注册' : 'Verified & Licensed by Ministry of Interior & Ministry of Commerce'}
                </p>
              </div>
            </div>

            <span className="px-3 py-1 bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {language === 'km' ? 'មានសុពលភាពផ្លូវការ' : language === 'zh' ? '合规效力生效中' : 'Active & Compliant'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-slate-300">
            <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1.5">
              <span className="text-[10px] text-slate-400 font-mono uppercase">Establishment Date</span>
              <p className="font-bold text-sm text-white flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-blue-400" /> Sept 07, 2015
              </p>
              <p className="text-[11px] text-slate-400">Director: SOME SOENG (ស៊ឹម ស៊ឹង)</p>
            </div>

            <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1.5">
              <span className="text-[10px] text-slate-400 font-mono uppercase">National Police Approval</span>
              <p className="font-bold text-sm text-white flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-emerald-400" /> Letter No. 2186 លស
              </p>
              <p className="text-[11px] text-slate-400">Dated 16 Sept 2015 / DPM Letter #1989</p>
            </div>

            <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1.5">
              <span className="text-[10px] text-slate-400 font-mono uppercase">Ministry of Commerce</span>
              <p className="font-bold text-sm text-white flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-amber-400" /> MOC-56237457
              </p>
              <p className="text-[11px] text-slate-400">Reg No: 00021299 (Co.3867KH/2015)</p>
            </div>

            <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1.5">
              <span className="text-[10px] text-slate-400 font-mono uppercase">Tax Identification Number</span>
              <p className="font-bold text-sm text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-purple-400" /> TIN: K007-901504529
              </p>
              <p className="text-[11px] text-slate-400">VAT TIN: 8138អតប/អពដ (16 Dec 2015)</p>
            </div>
          </div>
        </div>

        {/* 4 Pillar Corporate Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Who We Are */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 hover:border-blue-300 transition shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 font-serif">
              {language === 'km' ? 'អំពីយើងខ្ញុំ' : language === 'zh' ? '关于我们' : 'Who We Are'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'km'
                ? 'ក្រុមហ៊ុនសន្តិសុខ K.N.S.K ត្រូវបានបង្កើតឡើងក្នុងឆ្នាំ២០១៥ ដោយមានកម្លាំងសន្តិសុខប្រកបដោយក្បួនវិន័យ ស្មោះត្រង់ និងឆ្លងកាត់ការពិនិត្យប្រវត្តិរូបត្រឹមត្រូវ។'
                : language === 'zh'
                ? 'K.N.S.K 成立於2015年，是柬埔寨特許資質全備的私營安保公司，旗下擁有政審合格、訓練有素的專業安保隊員。'
                : 'Incorporated in 2015, K.N.S.K Security Co., Ltd. is a premier licensed security provider backed by background-checked professional security personnel.'}
            </p>
          </div>

          {/* What We Do */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 hover:border-blue-300 transition shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 font-serif">
              {language === 'km' ? 'សេវាកម្មរបស់យើង' : language === 'zh' ? '核心业务' : 'What We Do'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'km'
                ? 'ផ្តល់សេវាសន្តិសុខប្រចាំការ ២៤/៧, ការពារ VIP, ដឹកជញ្ជូនប្រាក់, គ្រប់គ្រងចរាចរណ៍ និងប្រព័ន្ធកាមេរ៉ាសុវត្ថិភាព CCTV។'
                : language === 'zh'
                ? '提供24/7不間斷駐点安保、要員特保、金錢押运、防盜巡邏、消防監控及CCTV中央聯防監控。'
                : 'Comprehensive guarding, VIP protection, cash-in-transit escorting, electronic CCTV analytics, and rapid response patrols.'}
            </p>
          </div>

          {/* Our Commitment */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 hover:border-blue-300 transition shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 font-serif">
              {language === 'km' ? 'ការប្តេជ្ញាចិត្ត' : language === 'zh' ? '服务承诺' : 'Our Commitment'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'km'
                ? 'ការពារទ្រព្យសម្បត្តិ និងជីវិតមនុស្សដោយភាពស្មោះត្រង់ គ្មានសារធាតុញៀន និងវិន័យតឹងរ៉ឹងបំផុតគ្រប់គោលដៅ។'
                : language === 'zh'
                ? '恪守防范为主的安防理念，全员严密政审与禁毒搜检，严格执行驻点岗位守则。'
                : 'Simple philosophy: prevention of crime. High visibility deterrent backed by strict discipline and mandatory post orders.'}
            </p>
          </div>

          {/* Nationwide Coverage */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 hover:border-blue-300 transition shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center font-bold">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 font-serif">
              {language === 'km' ? 'បណ្តាញ ២៥ ខេត្ត' : language === 'zh' ? '全国覆盖' : 'Nationwide Service'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'km'
                ? 'មានបញ្ជាការដ្ឋាន និងក្រុមល្បាតចល័តនៅគ្រប់ ២៥ រាជធានី-ខេត្ត ដោយធានាល្បឿនអន្តរាគមន៍រហ័សទាន់ពេលវេលា។'
                : language === 'zh'
                ? '依托金邊總部與25省獨立調度站，配合4x4皮卡機動車隊，提供全天候快速應急響應。'
                : 'Direct presence across all 25 provinces with dedicated regional radio repeaters and 4x4 mobile patrol response units.'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
