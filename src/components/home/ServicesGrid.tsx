import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import mannedGuardingImg from '../../assets/images/KNSK_Guards.jpg';
import guardFormationImg from '../../assets/images/KNSK_Team.jpg';
import patrolTruckImg from '../../assets/images/KNSK_Patrol.jpg';
import patrolCommandImg from '../../assets/images/KNSK_Operations.jpg';
import companyOfficeImg from '../../assets/images/KNSK_Headquarters.jpg';
import boreyGuardsImg from '../../assets/images/KNSK_Guards3.jpg';
import officePatrolImg from '../../assets/images/KNSK_Patrol2.jpg';
import schoolGuardsImg from '../../assets/images/KNSK_Guards4.jpg';
import eventOperationsImg from '../../assets/images/KNSK_Operations3.jpg';
import hotelResortGuardsImg from '../../assets/images/KNSK_Guards7.jpg';
import hospitalGuardsImg from '../../assets/images/KNSK_Guards8.jpg';
import {
  ShieldCheck,
  UserCheck,
  Factory,
  HardHat,
  Home,
  Building2,
  Hotel,
  GraduationCap,
  Building,
  CalendarCheck,
  Radio,
  CheckCircle2,
  ArrowRight,
  X,
  FileText
} from 'lucide-react';

export interface PhysicalService {
  id: string;
  icon: React.ReactNode;
  titleKm: string;
  titleEn: string;
  titleZh: string;
  descKm: string;
  descEn: string;
  descZh: string;
  imageUrl: string;
  benefits: string[];
}

export const physicalServices: PhysicalService[] = [
  {
    id: 'direct-guards',
    icon: <ShieldCheck className="w-6 h-6 text-blue-900" />,
    titleKm: 'សេវាសន្តិសុខការពារទីតាំងផ្ទាល់ (24/7)',
    titleEn: 'Direct Security Guard Services',
    titleZh: '驻点驻守安保服务',
    descKm: 'ភ្នាក់ងារសន្តិសុខប្រចាំការ ២៤ម៉ោង/៧ថ្ងៃ សម្រាប់ការពារអគារ ធនាគារ រោងចក្រ និងបុរី ដោយមានការគ្រប់គ្រងវិន័យយ៉ាងតឹងរ៉ឹង។',
    descEn: '24/7 static security guard deployment providing access control, perimeter defense, and visitor logging.',
    descZh: '全天候驻点固定安保，负责人员出入控制、园区防范及秩序维护。',
    imageUrl: mannedGuardingImg,
    benefits: ['MOI Police background check cleared', '24/7 radio dispatch & shift handover', 'Uniformed discipline & physical presence'],
  },
  {
    id: 'vip-protection',
    icon: <UserCheck className="w-6 h-6 text-blue-900" />,
    titleKm: 'សេវាការពារ VIP & ឥស្សរជន',
    titleEn: 'VIP Protection & Close Escort',
    titleZh: 'VIP Close Protection',
    descKm: 'ក្រុមអង្គរក្សការពារផ្ទាល់ខ្លួន យានយន្តអមដំណើរ និងការវាយតម្លៃហានិភ័យផ្លូវគោក សម្រាប់អ្នកវិនិយោគ និងឥស្សរជន។',
    descEn: 'Executive protection officers, high-profile escort vehicles, route security evaluation, and risk mitigation.',
    descZh: '针对要员与外商的高级贴身护卫、随行车队及行程风险评估。',
    imageUrl: guardFormationImg,
    benefits: ['Tactical close-protection officers', 'Motorcade route clearance & escort', 'Discreet & multilingual personnel'],
  },
  {
    id: 'factory-security',
    icon: <Factory className="w-6 h-6 text-blue-900" />,
    titleKm: 'សេវាសន្តិសុខរោងចក្រ & សហគ្រាស',
    titleEn: 'Factory & Industrial Security',
    titleZh: 'Factory & Industrial Security',
    descKm: 'ការការពារសម្ភារៈ គ្រឿងចក្រ ការពិនិត្យច្រកទ្វារចេញចូលកម្មករ-បុគ្គលិក និងការទប់ស្កាត់ការលួចបាត់បង់ទ្រព្យសម្បត្តិ។',
    descEn: 'Industrial site security, cargo truck inspection, loss prevention, and worker attendance monitoring.',
    descZh: '工厂与工业园区物资防盗、货车查验、工人考勤协助及消防监管。',
    imageUrl: patrolTruckImg,
    benefits: ['Cargo truck gate log & search', 'Patrol guard wand checkpoints', 'Loss prevention & inventory protection'],
  },
  {
    id: 'construction-security',
    icon: <HardHat className="w-6 h-6 text-blue-900" />,
    titleKm: 'សេវាសន្តិសុខការដ្ឋានសំណង់',
    titleEn: 'Construction Site Security',
    titleZh: 'Construction Site Security',
    descKm: 'ការការពារគ្រឿងចក្រ ដែក ស៊ីម៉ង់ត៍ និងសម្ភារៈសំណង់មិនឲ្យមានការលួចបាត់បង់ និងការត្រួតពិនិត្យមួកសុវត្ថិភាព PPE។',
    descEn: 'Equipment & raw material safeguarding, night perimeter watch, gate clearance, and PPE compliance checks.',
    descZh: '工地重型设备与建材夜间巡查、出入材料登记及安全防护。',
    imageUrl: patrolCommandImg,
    benefits: ['Heavy machinery & steel protection', 'Material gate pass verification', 'Night patrol & perimeter dogs'],
  },
  {
    id: 'residential-security',
    icon: <Home className="w-6 h-6 text-blue-900" />,
    titleKm: 'សេវាសន្តិសុខបុរី & ភូមិគ្រឹះ',
    titleEn: 'Residential & Borey Security',
    titleZh: 'Residential & Borey Security',
    descKm: 'ការត្រួតពិនិត្យច្រកចេញចូលបុរី ការប្រើប្រាស់ប័ណ្ណស្កែន កាមេរ៉ានិងក្បួនល្បាតយប់ក្នុងសហគមន៍រស់នៅ។',
    descEn: 'Gated community perimeter protection, visitor RFID/QR screening, 24/7 mobile patrols inside residential estates.',
    descZh: '小区与门禁把控、外来访客核验、夜间社区巡逻及业主指引。',
    imageUrl: boreyGuardsImg,
    benefits: ['Visitor QR & ID verification', 'Mobile motorcycle patrol units', 'Emergency resident alarm support'],
  },
  {
    id: 'office-security',
    icon: <Building2 className="w-6 h-6 text-blue-900" />,
    titleKm: 'សេវាសន្តិសុខអគារពាណិជ្ជកម្ម & ការិយាល័យ',
    titleEn: 'Corporate & Office Tower Security',
    titleZh: 'Corporate & Office Security',
    descKm: 'ការគ្រប់គ្រងច្រកទ្វារអគារ ការពិនិត្យប័ណ្ណសម្គាល់អត្តសញ្ញាណ សម្រួលចំណត និងការទប់ស្កាត់ការរំខាន។',
    descEn: 'Commercial tower lobby access control, visitor badge issuance, elevator management, and parking order.',
    descZh: '商业大厦大堂门禁、访客登记、电梯管控及停车场秩序维护。',
    imageUrl: officePatrolImg,
    benefits: ['Lobby receptionist guard etiquette', 'After-hours floor locking & patrols', 'Fire safety warden certified'],
  },
  {
    id: 'hotel-security',
    icon: <Hotel className="w-6 h-6 text-blue-900" />,
    titleKm: 'សេវាសន្តិសុខសណ្ឋាគារ & រីស៊ត',
    titleEn: 'Hotel & Resort Hospitality Security',
    titleZh: 'Hotel & Resort Security',
    descKm: 'សេវាកម្មសន្តិសុខប្រកបដោយរដិបរដុបសមរម្យ ស្វាគមន៍ភ្ញៀវទេសចរ សម្របសម្រួលចំណត និងការពារសន្តិសុខ VIP។',
    descEn: 'Hospitality-trained guards for guest welcome, luggage escort, pool safety, and quiet night hours.',
    descZh: '注注重礼仪与外语服务的酒店安保，确保住客安全与隐私。',
    imageUrl: hotelResortGuardsImg,
    benefits: ['Polite guest greeting etiquette', 'Parking & valet coordination', 'Discreet night security patrol'],
  },
  {
    id: 'school-security',
    icon: <GraduationCap className="w-6 h-6 text-blue-900" />,
    titleKm: 'សេវាសន្តិសុខសាលារៀន & សកលវិទ្យាល័យ',
    titleEn: 'School & University Campus Security',
    titleZh: 'School & University Security',
    descKm: 'ការការពារសុវត្ថិភាពសិស្សានុសិស្ស សម្រួលចរាចរណ៍កុមារនៅមុខសាលា និងការពិនិត្យអត្តសញ្ញាណជនแปลកមុខ។',
    descEn: 'School campus perimeter safety, gate traffic management during drop-off/pick-up, and stranger clearance.',
    descZh: '校园出入口管理、上下学交通疏导、防止非法潜入及学生安全护送。',
    imageUrl: schoolGuardsImg,
    benefits: ['Student drop-off traffic control', 'Strict stranger clearance protocol', 'First aid certified guards'],
  },
  {
    id: 'hospital-security',
    icon: <Building className="w-6 h-6 text-blue-900" />,
    titleKm: 'សេវាសន្តិសុខមន្ទីរពេទ្យ & គ្លីនិក',
    titleEn: 'Hospital & Healthcare Security',
    titleZh: 'Hospital & Healthcare Security',
    descKm: 'ការរៀបចំសណ្តាប់ធ្នាប់ផ្នែកសង្គ្រោះបន្ទាន់ សម្រួលចំណតរថយន្តសង្គ្រោះ និងការទប់ស្កាត់ភាពវឹកវរ។',
    descEn: 'Healthcare facility order, emergency room security, ambulance drive-lane clearing, and conflict resolution.',
    descZh: '急诊与门诊大厅安保、救护车通道清空及医患纠纷突发处置。',
    imageUrl: hospitalGuardsImg,
    benefits: ['Ambulance lane clearing', 'De-escalation conflict training', '24/7 ER standby security'],
  },
  {
    id: 'event-security',
    icon: <CalendarCheck className="w-6 h-6 text-blue-900" />,
    titleKm: 'សេវាសន្តិសុខព្រឹត្តិការណ៍ & ពិព័រណ៍',
    titleEn: 'Event & Crowd Control Security',
    titleZh: 'Event & Exhibition Security',
    descKm: 'ការគ្រប់គ្រងហ្វូងមនុស្ស ការពិនិត្យច្រកចេញចូល ការពិនិត្យកាបូប និងការរៀបចំសណ្តាប់ធ្នាប់ក្នុងពិធីធំៗ។',
    descEn: 'Concert, exhibition, and sports crowd control, metal detector screening, ticket gate management, and VIP stage protection.',
    descZh: '大型会展、演唱会人流管控、安检门筛查及舞台区域特保。',
    imageUrl: eventOperationsImg,
    benefits: ['Metal detector & bag inspection', 'Crowd barrier management', 'VIP stage & green room protection'],
  },
  {
    id: 'patrol-services',
    icon: <Radio className="w-6 h-6 text-blue-900" />,
    titleKm: 'សេវាក្បួនល្បាតចល័ត (Mobile Patrol)',
    titleEn: 'Mobile Patrol & Rapid Dispatch',
    titleZh: 'Mobile Patrol & Rapid Dispatch',
    descKm: 'ក្រុមល្បាតម៉ូតូ និងរថយន្ត 4x4 ត្រួតពិនិត្យចល័តនៅតាមតំបន់ឧស្សាហកម្ម និងសហគមន៍ ដោយមាន GPS។',
    descEn: '24/7 mobile patrol vehicles making scheduled and random inspections for remote facilities and industrial zones.',
    descZh: '4x4越野巡逻车与摩托车巡逻队，提供定时及随机区域巡查。',
    imageUrl: patrolTruckImg,
    benefits: ['GPS tracking & electronic wand logs', 'Randomized night time checks', 'Instant rapid emergency dispatch'],
  },
];

interface ServicesGridProps {
  setActiveTab: (tab: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ setActiveTab }) => {
  const { language, t } = useLanguage();
  const [selectedService, setSelectedService] = useState<PhysicalService | null>(null);

  const getTitle = (svc: PhysicalService) => {
    if (language === 'km') return svc.titleKm;
    if (language === 'zh') return svc.titleZh;
    return svc.titleEn;
  };

  const getDesc = (svc: PhysicalService) => {
    if (language === 'km') return svc.descKm;
    if (language === 'zh') return svc.descZh;
    return svc.descEn;
  };

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-950 font-bold text-xs uppercase tracking-widest rounded-full border border-blue-200">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-900" /> {t('services_solutions_badge')}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            {t('manned_services_title')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {t('manned_services_subtitle')}
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {physicalServices.map((svc) => (
            <div
              key={svc.id}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Service Card Thumbnail */}
                <div className="relative aspect-16/9 overflow-hidden bg-slate-900">
                  <img
                    src={svc.imageUrl}
                    alt={svc.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-blue-950/90 text-white p-2 rounded-lg border border-blue-800 shadow">
                    {svc.icon}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-emerald-950/90 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded border border-emerald-800 uppercase tracking-wider">
                    MOI Certified
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-900 transition-colors font-serif">
                    {getTitle(svc)}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {getDesc(svc)}
                  </p>

                  {/* Benefits List */}
                  <div className="pt-3 border-t border-slate-100 space-y-1.5">
                    {svc.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0">
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedService(svc)}
                    className="text-xs font-bold text-blue-900 hover:text-blue-700 transition flex items-center gap-1 uppercase tracking-wider"
                  >
                    Learn More
                  </button>

                  <button
                    onClick={() => setActiveTab('quotation')}
                    className="px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded shadow-xs transition flex items-center gap-1.5"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 flex flex-col">
            <div className="bg-blue-950 text-white p-5 flex items-center justify-between border-b border-blue-900">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-900 rounded-lg border border-blue-700">
                  {selectedService.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white font-serif">{getTitle(selectedService)}</h3>
                  <p className="text-xs text-blue-300">K.N.S.K Standard Operating Procedure (SOP)</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-1 rounded bg-blue-900 hover:bg-red-600 text-slate-300 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Operational Description</h4>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">{getDesc(selectedService)}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Key Operational Standards & Benefits</h4>
                <div className="space-y-2">
                  {selectedService.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-center gap-3">
                <FileText className="w-5 h-5 text-blue-900 shrink-0" />
                <p className="text-xs text-blue-950 font-medium">
                  Includes official MOI licensing, daily supervisor inspection logs, and National Police emergency dispatch protocol.
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-200 rounded transition"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedService(null);
                  setActiveTab('quotation');
                }}
                className="px-5 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded shadow transition flex items-center gap-2"
              >
                <span>Request Proposal for {getTitle(selectedService)}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
