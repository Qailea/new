import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { cambodiaProvinces } from '../../data/provinces';
import {
  MapPin,
  Building2,
  PhoneCall,
  CheckCircle2,
  Compass,
  ArrowRight,
  ShieldCheck,
  Radio,
  Clock,
  FileText
} from 'lucide-react';

interface CoverageMapProps {
  setActiveTab?: (tab: string) => void;
  onNavigate?: (tab: string) => void;
}

export interface OfficialStation {
  id: string;
  nameKm: string;
  nameEn: string;
  nameZh: string;
  locationKm: string;
  locationEn: string;
  locationZh: string;
  tagKm: string;
  tagEn: string;
  tagZh: string;
  phone: string;
}

export const officialStationsList: OfficialStation[] = [
  {
    id: 'hq-1',
    nameKm: 'ស្នាក់ការទី ១ (Headquarters 1)',
    nameEn: 'Headquarters 1 (Chamkar Mon)',
    nameZh: '第一总部 (Chamkar Mon 桑园区)',
    locationKm: 'ផ្ទះលេខ៩E១ ផ្លូវលេខ២០៥ ភូមិ១០ សង្កាត់ទួលស្វាយព្រៃ២ ខណ្ឌចំការមន រាជធានីភ្នំពេញ',
    locationEn: 'House No. 9E1, Street 205, Village 10, Tuol Svay Prey II, Chamkar Mon, Phnom Penh',
    locationZh: '金边市桑园区Tuol Svay Prey 2分区10村205街第9E1号',
    tagKm: 'ទីស្នាក់ការកណ្តាល & បញ្ជាការ ២៤/៧',
    tagEn: 'Corporate HQ & Central 24/7 Command',
    tagZh: '企业总部与24/7指挥中控',
    phone: '096 483 8666',
  },
  {
    id: 'hq-2',
    nameKm: 'ស្នាក់ការទី ២ (Headquarters 2)',
    nameEn: 'Headquarters 2 (Kamboul)',
    nameZh: '第二总部/分站 (Kamboul 贡武区)',
    locationKm: 'ផ្ទះលេខ៤១.៨២ ផ្លូវជាតិលេខ៣ ភូមិទួលកី សង្កាត់ភ្លើងឆេះរទេះ ខណ្ឌកំបូល រាជធានីភ្នំពេញ',
    locationEn: 'House No. 41.82, National Road 3, Tuol Kei Village, Phleung Chheh Roteh, Kamboul, Phnom Penh',
    locationZh: '金边市贡武区Phleung Chheh Roteh分区Tuol Kei村3号国道第41.82号',
    tagKm: 'ស្ថានីយល្បាតតំបន់សេដ្ឋកិច្ច & រោងចក្រ',
    tagEn: 'Industrial Zone & Factory Logistics Patrol Hub',
    tagZh: '经济特区与工业物流巡逻分站',
    phone: '096 483 8666',
  },
  {
    id: 'hq-3',
    nameKm: 'ស្នាក់ការទី ៣ - ជ្រៃធំ (Headquarters 3 - Chrey Thom)',
    nameEn: 'Headquarters 3 (Chrey Thom)',
    nameZh: '第三分站 (Chrey Thom 柴通)',
    locationKm: 'ផ្លូវជាតិលេខ២១អា សង្កាត់ព្រែកស្តី ក្រុងសំពៅពូន ស្រុកកោះធំ ខេត្តកណ្តាល',
    locationEn: 'National Road 21A, Prek Sdey, Sampov Poun City, Koh Thom District, Kandal Province',
    locationZh: '干丹省桑宝奔市戈通县Prek Sdey分区21A号国道',
    tagKm: 'ស្ថានីយសន្តិសុខតំបន់ព្រំដែន & ពាណិជ្ជកម្ម',
    tagEn: 'Border Economic Zone & Regional Security Station',
    tagZh: '边境经济特区与区域安保驻点',
    phone: '096 483 8666',
  },
];

export const CoverageMap: React.FC<CoverageMapProps> = ({ setActiveTab, onNavigate }) => {
  const { language } = useLanguage();

  const handleNavigateToStations = () => {
    if (setActiveTab) {
      setActiveTab('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (onNavigate) {
      onNavigate('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRequestProposal = () => {
    if (setActiveTab) {
      setActiveTab('quotation');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (onNavigate) {
      onNavigate('quotation');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-slate-900 text-white border-y border-slate-800" id="nationwide-coverage-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* ==================================================================== */}
        {/* SECTION HEADER                                                       */}
        {/* ==================================================================== */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-red-950/80 text-red-300 font-bold text-xs uppercase tracking-widest rounded-full border border-red-800">
            <Compass className="w-3.5 h-3.5 text-red-400" />
            <span>Kingdom of Cambodia</span>
          </div>

          {/* Official Main Heading */}
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-serif">
            {language === 'km'
              ? 'បណ្តាញសន្តិសុខគ្របដណ្តប់ទូទាំងប្រទេស'
              : language === 'zh'
              ? '全国安保网络覆盖'
              : 'NATIONWIDE SECURITY NETWORK'}
          </h2>

          {/* Official Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {language === 'km'
              ? 'ផ្តល់សេវាសន្តិសុខជូនអតិថិជនទូទាំង ២៥ រាជធានី-ខេត្ត នៃព្រះរាជាណាចក្រកម្ពុជា'
              : language === 'zh'
              ? '为柬埔寨全国25个省及自治区客户提供全方位专业安保服务。'
              : 'Providing comprehensive professional security services across all 25 provinces of Cambodia.'}
          </p>
        </div>

        {/* ==================================================================== */}
        {/* NATIONWIDE COVERAGE OVERVIEW (25 PROVINCES)                          */}
        {/* ==================================================================== */}
        <div className="bg-slate-950 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div className="space-y-1">
              <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-widest text-red-400 bg-red-950/80 px-2.5 py-0.5 rounded border border-red-900">
                {language === 'km'
                  ? 'ការគ្របដណ្តប់ទូទាំងប្រទេស៖ ២៥ រាជធានី-ខេត្ត'
                  : language === 'zh'
                  ? '全国业务覆盖：25个省及自治区'
                  : 'Nationwide Coverage: 25 Provinces'}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white font-serif pt-1">
                {language === 'km'
                  ? 'ប្រតិបត្តិការផ្តល់សេវាសន្តិសុខ និងកម្លាំងយាមល្បាតទូទាំងព្រះរាជាណាចក្រកម្ពុជា'
                  : language === 'zh'
                  ? '柬埔寨全境25个省市安防部署与应急出警服务'
                  : 'Full Territorial Deployment & Rapid Mobile Security Services'}
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-800/80">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {language === 'km' ? 'សេវាសន្តិសុខទូទាំងប្រទេស' : language === 'zh' ? '全国覆盖' : 'Nationwide Service Coverage'}
                </span>
              </div>
              <button
                onClick={handleRequestProposal}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-blue-900 hover:bg-blue-800 px-3.5 py-1.5 rounded-lg transition shadow-xs"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>
                  {language === 'km' ? 'ស្នើសុំការផ្តល់ជូន' : language === 'zh' ? '申请定制方案' : 'Request Proposal'}
                </span>
              </button>
            </div>
          </div>

          {/* Compact Clean 25 Provinces Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 text-xs">
            {cambodiaProvinces.map((prov) => (
              <div
                key={prov.id}
                className="p-2.5 bg-slate-900/90 rounded-lg border border-slate-800/80 flex items-center gap-2 hover:border-slate-700 transition"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="text-slate-300 font-serif truncate text-[11px] sm:text-xs">
                  {language === 'km' ? prov.nameKm : language === 'zh' ? prov.nameZh : prov.nameEn}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 border-t border-slate-800/80">
            <div className="flex items-center gap-2">
              <Radio className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>
                {language === 'km'
                  ? 'ក្រុមហ៊ុនផ្តល់សេវាកម្មសន្តិសុខគ្របដណ្តប់គ្រប់រាជធានី-ខេត្ត តាមរយៈការដាក់ពង្រាយកម្លាំង និងការត្រួតពិនិត្យចល័ត'
                  : language === 'zh'
                  ? '本公司通过机动巡逻与驻点派驻在全国25个省市提供全方位安保服务'
                  : 'K.N.S.K deploys trained officers, mobile supervisors, and emergency dispatch across all 25 provinces.'}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px] shrink-0">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>24/7 Operations</span>
            </div>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* OFFICIAL BRANCH / STATION LOCATIONS (3 OFFICIAL SITES)               */}
        {/* ==================================================================== */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Physical Facilities & Command Stations
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-serif tracking-wide">
                {language === 'km'
                  ? 'ទីតាំងស្នាក់ការ និងស្ថានីយផ្លូវការ'
                  : language === 'zh'
                  ? '官方分部及驻点位置'
                  : 'OFFICIAL BRANCH / STATION LOCATIONS'}
              </h3>
            </div>

            <button
              onClick={handleNavigateToStations}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition group self-start sm:self-auto py-1"
            >
              <span>
                {language === 'km'
                  ? 'មើលទីតាំងស្នាក់ការ និងស្ថានីយ →'
                  : language === 'zh'
                  ? '查看分支与驻点详情 →'
                  : 'View Branch & Station Locations →'}
              </span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* 3 Official Locations Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {officialStationsList.map((station) => (
              <div
                key={station.id}
                className="bg-slate-950 p-5 rounded-xl border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between space-y-4 shadow-md group"
              >
                <div className="space-y-3">
                  {/* Icon & Tag */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-blue-400 flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                      {station.id === 'hq-1' ? 'Headquarters 1' : station.id === 'hq-2' ? 'Headquarters 2' : 'Headquarters 3'}
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <h4 className="font-bold text-base text-white font-serif group-hover:text-blue-300 transition">
                      {language === 'km' ? station.nameKm : language === 'zh' ? station.nameZh : station.nameEn}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {language === 'km' ? station.tagKm : language === 'zh' ? station.tagZh : station.tagEn}
                    </p>
                  </div>

                  {/* Physical Address */}
                  <div className="pt-2 border-t border-slate-900 flex items-start gap-2 text-xs text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-200">
                      {language === 'km' ? station.locationKm : language === 'zh' ? station.locationZh : station.locationEn}
                    </span>
                  </div>
                </div>

                {/* Direct Phone Link */}
                <div className="pt-3 border-t border-slate-900 flex items-center justify-between text-xs">
                  <span className="text-[10px] uppercase font-bold text-slate-500">Contact:</span>
                  <a
                    href="tel:0964838666"
                    className="font-mono font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1 transition"
                  >
                    <PhoneCall className="w-3 h-3 text-amber-400" />
                    <span>{station.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoverageMap;
