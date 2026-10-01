import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { cambodiaProvinces } from '../../data/provinces';
import {
  Compass,
  Building2,
  MapPin,
  Users,
  Clock,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  RotateCcw
} from 'lucide-react';

interface InteractiveServiceFinderProps {
  setActiveTab: (tab: string) => void;
}

export const InteractiveServiceFinder: React.FC<InteractiveServiceFinderProps> = ({ setActiveTab }) => {
  const { language } = useLanguage();

  const [step, setStep] = useState<number>(1);
  const [businessType, setBusinessType] = useState<string>('factory');
  const [provinceId, setProvinceId] = useState<string>('phnom_penh');
  const [guardCountRange, setGuardCountRange] = useState<string>('3-5');
  const [shiftType, setShiftType] = useState<string>('24/7');
  const [duration, setDuration] = useState<string>('permanent');
  const [startDate, setStartDate] = useState<string>('immediate');

  const businessTypes = [
    { id: 'factory', labelEn: 'Factory / Manufacturing Plant', labelKm: 'រោងចក្រ / ឧស្សាហកម្ម', labelZh: '工厂与制造厂', recService: 'Factory & Industrial Security' },
    { id: 'bank', labelEn: 'Bank / Financial Institution', labelKm: 'ធនាគារ / គ្រឹះស្ថានហិរញ្ញវត្ថុ', labelZh: '银行与金融机构', recService: 'Direct Security Guard Services' },
    { id: 'hotel', labelEn: 'Hotel / Resort / Casino', labelKm: 'សណ្ឋាគារ / រីស៊ត / កាស៊ីណូ', labelZh: '酒店与度假村', recService: 'Hotel & Resort Hospitality Security' },
    { id: 'office', labelEn: 'Commercial Tower / Office', labelKm: 'អគារពាណិជ្ជកម្ម / ការិយាល័យ', labelZh: '写字楼与商务大厦', recService: 'Office Building Security' },
    { id: 'construction', labelEn: 'Construction Site / Project', labelKm: 'ការដ្ឋានសំណង់ / គម្រោង', labelZh: '建筑工地与工程项目', recService: 'Construction Site Security' },
    { id: 'residential', labelEn: 'Borey / Residential Community', labelKm: 'បុរី / សហគមន៍រស់នៅ', labelZh: 'Borey别墅与住宅小区', recService: 'Residential Community Security' },
    { id: 'retail', labelEn: 'Shopping Mall / Retail Store', labelKm: 'ផ្សារទំនើប / ហាងលក់រាយ', labelZh: '购物中心与商场', recService: 'Shopping Mall & Retail Security' },
    { id: 'event', labelEn: 'Concert / Event / Exhibition', labelKm: 'ពិធី / ពិព័រណ៍ / ប្រគំតន្ត្រី', labelZh: '演唱会与大型展会', recService: 'Event & Crowd Security' },
    { id: 'ngo', labelEn: 'Embassy / NGO / School', labelKm: 'ស្ថានទូត / អង្គការ / សាលារៀន', labelZh: '大使馆与教育机构', recService: 'Reception & Access Control Security' }
  ];

  const shiftOptions = [
    { id: '24/7', titleEn: '24/7 Full Day & Night Coverage', titleKm: 'ប្រចាំការ ២៤ម៉ោង/៧ថ្ងៃ ពេញលេញ', titleZh: '24/7 全天候日夜驻守', descEn: '2 shifts (Day & Night 12h each) with rotation' },
    { id: 'day', titleEn: 'Day Shift Only (12 Hours)', titleKm: 'វេនថ្ងៃ ១២ម៉ោង', titleZh: '日班值守 (12小时)', descEn: '6:00 AM to 6:00 PM for daily business hours' },
    { id: 'night', titleEn: 'Night Shift Only (12 Hours)', titleKm: 'វេនយប់ ១២ម៉ោង', titleZh: '夜班看管 (12小时)', descEn: '6:00 PM to 6:00 AM for overnight asset protection' }
  ];

  const durationOptions = [
    { id: 'permanent', titleEn: 'Permanent Contract (1+ Years)', titleKm: 'កិច្ចសន្យាអចិន្ត្រៃយ៍ (១ឆ្នាំឡើង)', titleZh: '长期固定合同 (1年以上)' },
    { id: 'short', titleEn: 'Short-Term (1 - 6 Months)', titleKm: 'រយៈពេលខ្លី (១-៦ ខែ)', titleZh: '短期保障 (1 - 6个月)' },
    { id: 'temporary', titleEn: 'Temporary / Event (1 - 14 Days)', titleKm: 'បណ្តោះអាសន្ន (១-១៤ ថ្ងៃ)', titleZh: '临时活动 (1 - 14天)' }
  ];

  const startDateOptions = [
    { id: 'immediate', titleEn: 'Immediate (Within 24 Hours)', titleKm: 'បន្ទាន់ (ក្នុងរវាង ២៤ម៉ោង)', titleZh: '紧急进驻 (24小时内)' },
    { id: '7days', titleEn: 'Within 7 Days', titleKm: 'ក្នុងរង្វង់ ៧ថ្ងៃ', titleZh: '7天内进驻' },
    { id: '30days', titleEn: 'Within 30 Days', titleKm: 'ក្នុងរង្វង់ ៣០ថ្ងៃ', titleZh: '30天内进驻' }
  ];

  // Selected object lookups
  const currentBusiness = businessTypes.find((b) => b.id === businessType) || businessTypes[0];
  const currentProvince = cambodiaProvinces.find((p) => p.id === provinceId) || cambodiaProvinces[0];

  const handleTransferToProposal = () => {
    // Navigate to quotation calculator with prefilled state if needed
    setActiveTab('quotation');
  };

  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.15),transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-900/80 text-blue-300 font-bold text-xs uppercase tracking-widest rounded-full border border-blue-700 shadow-inner">
            <Compass className="w-3.5 h-3.5 text-blue-400" />
            <span>Interactive Security Solution Wizard</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-serif">
            {language === 'km' ? 'ប្រព័ន្ធស្វែងរកសេវាកម្មសន្តិសុខសមស្រប' : language === 'zh' ? '智能安防方案匹配器' : 'Find the Right Security Solution'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            {language === 'km'
              ? 'ឆ្លើយសំណួរងាយៗ ៦ សំណួរ ដើម្បីទទួលបានការណែនាំអំពីចំនួនភ្នាក់ងារសន្តិសុខ និងកញ្ចប់សេវាកម្មផ្លូវការ។'
              : language === 'zh'
              ? '只需回答6个简单问题，即可获取适合您建筑与场地的防范人数与督导配置建议。'
              : 'Answer 6 quick questions to receive a tailored guard deployment recommendation and supervisor setup.'}
          </p>
        </div>

        {/* Wizard Container Card */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-2xl p-6 sm:p-8 space-y-8 backdrop-blur-md">
          {/* Progress Step Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 text-xs font-bold text-slate-400">
            <span className="text-blue-400 uppercase tracking-widest">
              Step {step} of 6
            </span>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    i === step
                      ? 'w-8 bg-blue-500'
                      : i < step
                      ? 'w-3 bg-emerald-500'
                      : 'w-3 bg-slate-800'
                  }`}
                />
              ))}
            </div>
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="hover:text-white transition underline"
              >
                Previous Step
              </button>
            )}
          </div>

          {/* STEP 1: BUSINESS TYPE */}
          {step === 1 && (
            <div className="space-y-5 animate-fadeIn">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-blue-400" />
                  1. What type of business or facility do you need to protect?
                </h3>
                <p className="text-xs text-slate-400">Select the option that best describes your property in Cambodia.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {businessTypes.map((bt) => (
                  <button
                    key={bt.id}
                    onClick={() => setBusinessType(bt.id)}
                    className={`p-4 rounded-xl border text-left transition flex flex-col justify-between space-y-2 ${
                      businessType === bt.id
                        ? 'bg-blue-950/80 border-blue-500 text-white shadow-lg shadow-blue-950/50'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    <span className="font-bold text-xs sm:text-sm">
                      {language === 'km' ? bt.labelKm : language === 'zh' ? bt.labelZh : bt.labelEn}
                    </span>
                    <span className="text-[10px] text-blue-400 font-semibold">
                      Recommended: {bt.recService}
                    </span>
                  </button>
                ))}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow transition flex items-center gap-2"
                >
                  <span>Next Step: Select Location</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: LOCATION */}
          {step === 2 && (
            <div className="space-y-5 animate-fadeIn">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  2. Where is your facility located in Cambodia?
                </h3>
                <p className="text-xs text-slate-400">K.N.S.K operates stations across all 25 Cambodian provinces.</p>
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-300">Select Province / City:</label>
                <select
                  value={provinceId}
                  onChange={(e) => setProvinceId(e.target.value)}
                  className="w-full p-3 bg-slate-950 border border-slate-700 rounded-xl text-xs font-bold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {cambodiaProvinces.map((prov) => (
                    <option key={prov.id} value={prov.id}>
                      {language === 'km' ? prov.nameKm : language === 'zh' ? prov.nameZh : prov.nameEn} - {prov.stationName}
                    </option>
                  ))}
                </select>

                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2 text-xs">
                  <div className="flex items-center justify-between text-blue-400 font-bold">
                    <span>Station: {currentProvince.stationName}</span>
                    <span className="text-emerald-400">Director: {currentProvince.regionalDirector}</span>
                  </div>
                  <p className="text-slate-400">{currentProvince.address}</p>
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded transition"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow transition flex items-center gap-2"
                >
                  <span>Next Step: Guard Count</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: GUARD COUNT NEEDED */}
          {step === 3 && (
            <div className="space-y-5 animate-fadeIn">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  3. How many security guards do you estimate you need?
                </h3>
                <p className="text-xs text-slate-400">If unsure, our senior supervisors can perform a free site evaluation.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                {[
                  { range: '1-2', label: '1 - 2 Guards', sub: 'Small Shop / Residence' },
                  { range: '3-5', label: '3 - 5 Guards', sub: 'Office / Boutique Hotel' },
                  { range: '6-10', label: '6 - 10 Guards', sub: 'Medium Factory / Mall' },
                  { range: '11-20', label: '11 - 20 Guards', sub: 'Large SEZ / Construction' },
                  { range: '20+', label: '20+ Guards', sub: 'Master SEZ / Mega Event' }
                ].map((item) => (
                  <button
                    key={item.range}
                    onClick={() => setGuardCountRange(item.range)}
                    className={`p-4 rounded-xl border text-center transition flex flex-col justify-center space-y-1 ${
                      guardCountRange === item.range
                        ? 'bg-blue-950/80 border-blue-500 text-white shadow-lg'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span className="font-extrabold text-sm text-blue-400">{item.label}</span>
                    <span className="text-[10px] text-slate-400 font-medium">{item.sub}</span>
                  </button>
                ))}
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded transition"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow transition flex items-center gap-2"
                >
                  <span>Next Step: Shift Hours</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: SHIFT TYPE */}
          {step === 4 && (
            <div className="space-y-5 animate-fadeIn">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-400" />
                  4. What shift schedule is required for your site?
                </h3>
                <p className="text-xs text-slate-400">All shifts are monitored continuously by central operations.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {shiftOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setShiftType(opt.id)}
                    className={`p-5 rounded-xl border text-left transition space-y-2 ${
                      shiftType === opt.id
                        ? 'bg-blue-950/80 border-blue-500 text-white shadow-lg'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span className="font-bold text-xs sm:text-sm block text-blue-300">
                      {language === 'km' ? opt.titleKm : language === 'zh' ? opt.titleZh : opt.titleEn}
                    </span>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{opt.descEn}</p>
                  </button>
                ))}
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  onClick={() => setStep(3)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded transition"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(5)}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow transition flex items-center gap-2"
                >
                  <span>Next Step: Duration</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: DURATION & START DATE */}
          {step === 5 && (
            <div className="space-y-5 animate-fadeIn">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  5. Contract duration and expected start date
                </h3>
                <p className="text-xs text-slate-400">Select engagement length and how fast you require deployment.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-slate-300">Contract Duration:</label>
                  <div className="space-y-2">
                    {durationOptions.map((dur) => (
                      <button
                        key={dur.id}
                        onClick={() => setDuration(dur.id)}
                        className={`w-full p-3 rounded-lg border text-left text-xs font-bold transition ${
                          duration === dur.id
                            ? 'bg-blue-950 border-blue-500 text-white'
                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        {language === 'km' ? dur.titleKm : language === 'zh' ? dur.titleZh : dur.titleEn}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-xs font-bold text-slate-300">Required Deployment Speed:</label>
                  <div className="space-y-2">
                    {startDateOptions.map((sd) => (
                      <button
                        key={sd.id}
                        onClick={() => setStartDate(sd.id)}
                        className={`w-full p-3 rounded-lg border text-left text-xs font-bold transition ${
                          startDate === sd.id
                            ? 'bg-blue-950 border-blue-500 text-white'
                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        {language === 'km' ? sd.titleKm : language === 'zh' ? sd.titleZh : sd.titleEn}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  onClick={() => setStep(4)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded transition"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(6)}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow transition flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-emerald-200" />
                  <span>Generate Custom Recommendation</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 6: RECOMMENDATION RESULT SUMMARY */}
          {step === 6 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-4 bg-emerald-950/80 border border-emerald-700 rounded-xl flex items-start gap-3">
                <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h3 className="text-base font-extrabold text-emerald-300 font-serif">
                    Tailored Security Solution Generated
                  </h3>
                  <p className="text-xs text-slate-300">
                    Based on your inputs, K.N.S.K operations commanders have matched your site with our recommended manned security configuration.
                  </p>
                </div>
              </div>

              {/* Recommendation Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* Box 1: Service Match */}
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">Recommended Primary Service</span>
                  <h4 className="font-extrabold text-sm text-white font-serif">{currentBusiness.recService}</h4>
                  <p className="text-slate-400">
                    Includes MOI police background verified guards equipped with Motorola walkie-talkies, high-vis vests, and patrol logging.
                  </p>
                </div>

                {/* Box 2: Team & Supervisor Config */}
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold">Guard & Supervisor Configuration</span>
                  <div className="font-bold text-white text-sm">
                    {guardCountRange} Guards ({shiftType} Shift Rotation)
                  </div>
                  <p className="text-slate-400">
                    Assigned Regional Supervisor: <strong className="text-slate-200">{currentProvince.regionalDirector}</strong> ({currentProvince.nameEn}).
                  </p>
                </div>

                {/* Box 3: Quality Guarantee */}
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-1 col-span-1 md:col-span-2">
                  <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold">Included Protection Features</span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-slate-300 font-medium">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      24/7 Mobile Supervisor Spot Checks (2x Day / 2x Night)
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      100% MOI & National Police background-cleared personnel
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Immediate replacement guard guarantee within 2 hours
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Direct radio link to Provincial Police Emergency Unit
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="w-full sm:w-auto px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-lg transition flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restart Wizard</span>
                </button>

                <button
                  onClick={handleTransferToProposal}
                  className="w-full sm:w-auto px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-widest rounded-lg shadow-xl shadow-red-900/40 transition flex items-center justify-center gap-2"
                >
                  <span>Transfer Selections to Official Proposal Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
