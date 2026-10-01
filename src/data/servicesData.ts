import mannedGuardingImg from '../assets/images/KNSK_Guards.jpg';
import guardFormationImg from '../assets/images/KNSK_Team.jpg';
import patrolTruckImg from '../assets/images/KNSK_Patrol.jpg';
import patrolCommandImg from '../assets/images/KNSK_Operations.jpg';
import companyOfficeImg from '../assets/images/KNSK_Headquarters.jpg';
import eventCeremonyImg from '../assets/images/KNSK_Operations.jpg';
import boreyGuardsImg from '../assets/images/KNSK_Guards3.jpg';
import officePatrolImg from '../assets/images/KNSK_Patrol2.jpg';
import schoolGuardsImg from '../assets/images/KNSK_Guards4.jpg';
import eventOperationsImg from '../assets/images/KNSK_Operations3.jpg';
import receptionGuardsImg from '../assets/images/KNSK_Guards5.jpg';
import hotelOperationsImg from '../assets/images/KNSK_Operations2.jpg';
import factoryGuardsImg from '../assets/images/KNSK_Guards7.jpg';
import hospitalGuardsImg from '../assets/images/KNSK_Guards8.jpg';
import retailGuardsImg from '../assets/images/KNSK_Guards6.jpg';

export interface DetailedService {
  id: string;
  titleEn: string;
  titleKm: string;
  titleZh: string;
  category: string;
  shortDescEn: string;
  shortDescKm: string;
  shortDescZh: string;
  whoShouldUseEn: string;
  whoShouldUseKm: string;
  whoShouldUseZh: string;
  responsibilitiesEn: string[];
  responsibilitiesKm: string[];
  responsibilitiesZh: string[];
  benefitsEn: string[];
  benefitsKm: string[];
  benefitsZh: string[];
  industriesServedEn: string[];
  industriesServedKm: string[];
  industriesServedZh: string[];
  availability24h: boolean;
  imageUrl: string;
  badge: string;
  responseTime: string;
  guardCoverage: string;
}

export interface IndustryDetail {
  id: string;
  nameEn: string;
  nameKm: string;
  nameZh: string;
  iconName: string;
  descriptionEn: string;
  descriptionKm: string;
  descriptionZh: string;
  keyRisksEn: string[];
  knskSolutionEn: string[];
  recommendedServices: string[];
  imageUrl: string;
}

export interface EquipmentItem {
  id: string;
  nameEn: string;
  nameKm: string;
  nameZh: string;
  category: string;
  descriptionEn: string;
  descriptionKm: string;
  descriptionZh: string;
  specificationEn: string;
  iconName: string;
}

export interface ServiceFaq {
  id: string;
  qEn: string;
  qKm: string;
  qZh: string;
  aEn: string;
  aKm: string;
  aZh: string;
  category: string;
}

export const MANNED_SERVICES: DetailedService[] = [
  {
    id: 'direct-guards',
    titleEn: 'Direct Security Guard Services',
    titleKm: 'សេវាសន្តិសុខការពារទីតាំងផ្ទាល់ (24/7)',
    titleZh: '驻点驻守安保服务',
    category: 'Guarding',
    badge: 'MOI Licensed',
    responseTime: 'Rapid Dispatch',
    guardCoverage: '1 - 100+ Guards',
    shortDescEn: '24/7 static security guard deployment providing access control, perimeter defense, visitor logging, and physical asset protection.',
    shortDescKm: 'ភ្នាក់ងារសន្តិសុខប្រចាំការ ២៤ម៉ោង/៧ថ្ងៃ សម្រាប់ការពារអគារ ធនាគារ រោងចក្រ និងបុរី ដោយមានការគ្រប់គ្រងវិន័យយ៉ាងតឹងរ៉ឹង។',
    shortDescZh: '全天候驻点固定安保，负责人员出入控制、园区防范及秩序维护。',
    whoShouldUseEn: 'Commercial buildings, banking facilities, industrial sites, and gated communities needing permanent 24/7 physical presence.',
    whoShouldUseKm: 'អគារពាណិជ្ជកម្ម ធនាគារ រោងចក្រ និងបុរីដែលត្រូវការវត្តមានសន្តិសុខប្រចាំការ ២៤ម៉ោង។',
    whoShouldUseZh: '需要24小时固定警卫值的商业大楼、金融机构、各类工厂及住宅社区。',
    responsibilitiesEn: [
      'Visitor registration & ID card verification',
      'Perimeter patrolling & fence integrity checks',
      'Vehicle access gate control & cargo inspection',
      'Daily shift activity logging & incident reports',
      'Emergency lockdown & evacuation support'
    ],
    responsibilitiesKm: [
      'ការចុះឈ្មោះភ្ញៀវ និងពិនិត្យអត្តសញ្ញាណប័ណ្ណ',
      'ការដើរល្បាតជុំវិញបរិវេណ និងត្រួតពិនិត្យរបង',
      'ការគ្រប់គ្រងច្រកទ្វារយានយន្ត និងពិនិត្យទំនិញ',
      'ការកត់ត្រាដេញដោល និងរបាយការណ៍ហេតុការណ៍',
      'ការជួយសង្គ្រោះ និងជម្លៀសពេលមានអាសន្ន'
    ],
    responsibilitiesZh: [
      '访客登记与有效身份证件查验',
      '周界巡查与围墙防范检查',
      '车辆出入出放行与载货查验',
      '日常交接班记录与突发事件汇报',
      '紧急封锁与疏散引导配合'
    ],
    benefitsEn: [
      'MOI Police background cleared & vetted personnel',
      '24/7 Central Dispatch monitoring & supervisor visits',
      'Uniformed deterrent & disciplined physical presence',
      'Standardized site post orders & SOP enforcement'
    ],
    benefitsKm: [
      'បុគ្គលិកឆ្លងកាត់ការពិនិត្យប្រវត្តិរូបពីក្រសួងមហាផ្ទៃ',
      'មានការត្រួតពិនិត្យពីប្រធានក្រុម ២៤ម៉ោង/៧ថ្ងៃ',
      'ឯកសណ្ឋានថ្លៃថ្នូរ និងមានវិន័យខ្ពស់',
      'ការអនុវត្តបទបញ្ជាគោលដៅ និងនីតិវិធីប្រតិបត្តិស្តង់ដារ'
    ],
    benefitsZh: [
      '人员均经内政部背景政审及严格政审',
      '24小时调度指挥中心与督导不定期抽查',
      '统一威严着装与高度纪律性',
      '严格执行专属岗位标准作业规程 (SOP)'
    ],
    industriesServedEn: ['Banking', 'Commercial Office', 'Factories', 'Residential Boreys', 'Government'],
    industriesServedKm: ['ធនាគារ', 'អគារការិយាល័យ', 'រោងចក្រ', 'បុរីរស់នៅ', 'ស្ថាប័នរដ្ឋ'],
    industriesServedZh: ['金融银行', '商业写字楼', '工业工厂', '住宅小区', '政府机构'],
    availability24h: true,
    imageUrl: mannedGuardingImg
  },
  {
    id: 'vip-protection',
    titleEn: 'VIP Protection & Executive Escort',
    titleKm: 'សេវាការពារ VIP & ឥស្សរជន',
    titleZh: 'VIP要员贴身护卫',
    category: 'Executive Protection',
    badge: 'Tactical Elite',
    responseTime: 'Rapid Dispatch',
    guardCoverage: '2 - 20 Officers',
    shortDescEn: 'Discreet close-protection officers, convoy security escorts, route risk assessment, and high-net-worth individual safeguarding.',
    shortDescKm: 'ក្រុមអង្គរក្សការពារផ្ទាល់ខ្លួន យានយន្តអមដំណើរ និងការវាយតម្លៃហានិភ័យផ្លូវគោក សម្រាប់អ្នកវិនិយោគ និងឥស្សរជន។',
    shortDescZh: '要员与外商贴身护卫、随行车队及行程风险评估。',
    whoShouldUseEn: 'International investors, diplomats, C-suite executives, celebrities, and high-net-worth families visiting Cambodia.',
    whoShouldUseKm: 'អ្នកវិនិយោគអន្តរជាតិ ឥស្សរជន អ្នកជំនួញធំៗ និងគ្រួសារ VIP ដែលធ្វើដំណើរក្នុងប្រទេសកម្ពុជា។',
    whoShouldUseZh: '跨国投资者、外交官、企业高管、知名人士及高净值家庭。',
    responsibilitiesEn: [
      'Personal bodyguard close shadowing & barrier defense',
      'Airport transfer motorcade escort & route clearance',
      'Hotel & venue advance threat scanning',
      'Discreet threat mitigation & emergency evacuation',
      'Multilingual liaison (Khmer, English, Chinese)'
    ],
    responsibilitiesKm: [
      'ការការពារផ្ទាល់ខ្លួនជិតស្និទ្ធ និងបង្កើតរនាំងសុវត្ថិភាព',
      'ការអមដំណើរក្បួនរថយន្តពីព្រលានយន្តហោះ',
      'ការពិនិត្យទីតាំងសណ្ឋាគារ និងកន្លែងជួបជុំជាមុន',
      'ការជម្លៀសបន្ទាន់ពេលមានអាសន្ន',
      'សមត្ថភាពភាសាខ្មែរ អង់គ្លេស និងចិន'
    ],
    responsibilitiesZh: [
      '贴身警卫随行与出入安全屏障',
      '机场接送车队护航与路线预先开道',
      '下榻酒店及活动场地事先排查',
      '突发威胁快速转移与紧急疏散',
      '中英高三语沟通与外交礼仪'
    ],
    benefitsEn: [
      'Special Forces & Police tactical background guards',
      'Unmarked 4x4 SUV convoy support',
      'Strict confidentiality & non-disclosure compliance',
      'Direct line to National Emergency Police Unit'
    ],
    benefitsKm: [
      'អង្គរក្សមានប្រវត្តិបណ្តុះបណ្តាលពិសេស',
      'មានរថយន្ត 4x4 ទំនើបសម្រាប់អមដំណើរ',
      'រក្សាការសម្ងាត់យ៉ាងតឹងរ៉ឹងបំផុត',
      'ភ្ជាប់ទំនាក់ទំនងផ្ទាល់ជាមួយនគរបាលជាតិ'
    ],
    benefitsZh: [
      '特警与精锐退役军人特保团队',
      '四驱商务车队与机动支援',
      '签署严格商业保密协议',
      '直通国家警务应急绿色通道'
    ],
    industriesServedEn: ['Embassies', 'Casinos', 'Foreign Investors', 'Government VIPs', 'Luxury Tourism'],
    industriesServedKm: ['ស្ថានទូត', 'កាស៊ីណូ', 'អ្នកវិនិយោគបរទេស', 'ឥស្សរជន', 'ទេសចរណ៍កម្រិតខ្ពស់'],
    industriesServedZh: ['驻华/领事馆', '娱乐博彩', '外籍财团', '政要代表', '高端旅游'],
    availability24h: true,
    imageUrl: guardFormationImg
  },
  {
    id: 'factory-security',
    titleEn: 'Factory & Industrial Security',
    titleKm: 'សេវាសន្តិសុខរោងចក្រ & សហគ្រាស',
    titleZh: '工厂与工业园区安保',
    category: 'Industrial',
    badge: 'Loss Prevention',
    responseTime: 'Rapid Dispatch',
    guardCoverage: '4 - 50+ Guards',
    shortDescEn: 'Comprehensive protection for garment factories, industrial plants, and warehouses preventing cargo theft and labor friction.',
    shortDescKm: 'ការការពារសម្ភារៈ គ្រឿងចក្រ ការពិនិត្យច្រកទ្វារចេញចូលកម្មករ-បុគ្គលិក និងការទប់ស្កាត់ការលួចបាត់បង់ទ្រព្យសម្បត្តិ។',
    shortDescZh: '针对服装厂、大型加工厂及物流园的物资防盗与出入查验。',
    whoShouldUseEn: 'Garment factories, manufacturing plants, Special Economic Zone (SEZ) investors, and industrial complexes.',
    whoShouldUseKm: 'រោងចក្រកាត់ដេរ រោងចក្រផលិតកម្ម តំបន់សេដ្ឋកិច្ចពិសេស (SEZ) និងឃ្លាំងទំនិញធំៗ។',
    whoShouldUseZh: '服装制造厂、大型重工业厂房、特别经济区（SEZ）入驻企业及仓库。',
    responsibilitiesEn: [
      'Raw material & finished goods gate pass check',
      'Container truck seal audit & driver registration',
      'Worker shift entry metal detection & bag search',
      'Fire hazard monitoring & chemical store patrols',
      'Labor gathering & perimeter protest containment'
    ],
    responsibilitiesKm: [
      'ការពិនិត្យលិខិតអនុញ្ញាតទំនិញចេញចូល',
      'ការពិនិត្យកុងតឺន័រ និងចុះឈ្មោះអ្នកបើកបរ',
      'ការស្កែនលោហធាតុ និងពិនិត្យកាបូបកម្មករ',
      'ការប្រុងប្រយ័ត្នអគ្គិភ័យ និងសារធាតុគីមី',
      'ការសម្របសម្រួលសណ្តាប់ធ្នាប់ពេលមានការជួបជុំ'
    ],
    responsibilitiesZh: [
      '原材料及成品出厂放行条核对',
      '集装箱货车铅封抽查与司机登记',
      '工上下班金属探测与提包搜查',
      '消防隐患巡查与危化品库重点看守',
      '群体性聚集突发秩序维持与报告'
    ],
    benefitsEn: [
      'Proven loss reduction & inventory safeguarding',
      'Electronic patrol wand time-stamped logging',
      'Bilingual site commanders (Khmer / Chinese)',
      '100% compliance with Brand Audit Safety Standards'
    ],
    benefitsKm: [
      'កាត់បន្ថយការបាត់បង់សម្ភារៈ និងស្តុកទំនិញ',
      'ប្រព័ន្ធស្កែនដំបងអេឡិចត្រូនិចកំណត់វេលា',
      'ប្រធានក្រុមនិយាយភាសាខ្មែរ និងចិនបាន',
      'ស្របតាមស្តង់ដារសវនកម្មអន្តរជាតិ'
    ],
    benefitsZh: [
      '有效降低存货损耗与盗窃率',
      '电子巡更棒实时时间戳打卡',
      '中柬双语驻厂主管现场调度',
      '符合欧美买家（BSCI/CTPAT）安规'
    ],
    industriesServedEn: ['Garment Factories', 'SEZ Industrial Zones', 'Warehouse Logistics', 'Food Processing'],
    industriesServedKm: ['រោងចក្រកាត់ដេរ', 'តំបន់សេដ្ឋកិច្ចពិសេស', 'ឃ្លាំងទំនិញ', 'រោងចក្រចំណីអាហារ'],
    industriesServedZh: ['成衣制造厂', 'SEZ工业园区', '物流仓储', '食品加工厂'],
    availability24h: true,
    imageUrl: factoryGuardsImg
  },
  {
    id: 'construction-security',
    titleEn: 'Construction Site Security',
    titleKm: 'សេវាសន្តិសុខការដ្ឋានសំណង់',
    titleZh: '建筑工地与工程项目安保',
    category: 'Construction',
    badge: 'Site Protection',
    responseTime: 'Rapid Dispatch',
    guardCoverage: '2 - 30 Guards',
    shortDescEn: 'Protecting heavy machinery, steel, fuel reserves, and raw construction materials against night trespassing and site theft.',
    shortDescKm: 'ការការពារគ្រឿងចក្រ ដែក ស៊ីម៉ង់ត៍ និងសម្ភារៈសំណង់មិនឲ្យមានការលួចបាត់បង់ និងការត្រួតពិនិត្យមួកសុវត្ថិភាព PPE។',
    shortDescZh: '重型工程机械、建材与柴油储备夜间防盗看管。',
    whoShouldUseEn: 'Civil construction contractors, high-rise building developers, road infrastructure projects, and bridge engineers.',
    whoShouldUseKm: 'ក្រុមហ៊ុនម៉ៅការសំណង់ គម្រោងសាងសង់អគារខ្ពស់ៗ គម្រោងផ្លូវថ្នល់ និងស្ពាន។',
    whoShouldUseZh: '建筑总包商、高层项目开发商、道路桥梁工程队及基建企业。',
    responsibilitiesEn: [
      'Night perimeter patrol around material yards',
      'Fuel tank & generator diesel theft monitoring',
      'Subcontractor tool & steel beam dispatch check',
      'Safety helmet & PPE entry compliance enforcement',
      'Unauthorized trespasser detention & warning'
    ],
    responsibilitiesKm: [
      'ការដើរល្បាតយប់ជុំវិញឃ្លាំងស្តុកដែក និងសម្ភារៈ',
      'ការការពារធុងប្រេង និងម៉ាស៊ីនភ្លើង',
      'ការពិនិត្យឧបករណ៍ និងដែកចេញចូល',
      'ការត្រួតពិនិត្យការសวมមួកសុវត្ថិភាព PPE',
      'ការឃាត់ខ្លួនជនលួចចូលដោយគ្មានការអនុញ្ញាត'
    ],
    responsibilitiesZh: [
      '夜间建材堆场与周边巡查看守',
      '发电机柴油与油箱防盗监控',
      '分包商工具及钢筋材料料放行查验',
      '佩戴安全帽及PPE防护着装督查',
      '非法潜入人员劝离与治安扣留'
    ],
    benefitsEn: [
      'High-visibility night patrol guards & LED lights',
      'Prevents costly project delay from stolen cable/fuel',
      'Detailed gate entry logbook for material trucks',
      'Rapid response vehicle backup on call'
    ],
    benefitsKm: [
      'កាត់បន្ថយការបាត់បង់ខ្សែកាប និងប្រេងម៉ាស៊ូត',
      'មានភ្លើងស្កែន និងភ្លើងសញ្ញានៅពេលយប់',
      'សៀវភៅកត់ត្រាយានយន្តដឹកជញ្ជូនច្បាស់លាស់',
      'មានរថយន្តអន្តរាគមន៍រហ័សគាំទ្រ'
    ],
    benefitsZh: [
      '避免电缆柴油被盗导致的工期延误',
      '配备强光巡逻灯与夜视高威慑防范',
      '建材运输车辆专人进出台账记录',
      '巡逻车队随叫随到突发支援'
    ],
    industriesServedEn: ['High-rise Construction', 'Civil Engineering', 'Road & Bridge', 'Solar Farms'],
    industriesServedKm: ['សំណង់អគារខ្ពស់', 'វិស្វកម្មស៊ីវិល', 'ផ្លូវស្ពាន', 'កសិដ្ឋានសូឡា'],
    industriesServedZh: ['高层建筑工程', '市政土木工程', '路桥建设', '光伏电站工程'],
    availability24h: true,
    imageUrl: patrolCommandImg
  },
  {
    id: 'office-security',
    titleEn: 'Office Building & Commercial Tower Security',
    titleKm: 'សេវាសន្តិសុខអគារពាណិជ្ជកម្ម & ការិយាល័យ',
    titleZh: '写字楼与商业大厦安保',
    category: 'Commercial',
    badge: 'Frontline Access',
    responseTime: 'Rapid Dispatch',
    guardCoverage: '2 - 25 Guards',
    shortDescEn: 'Lobby access control, visitor badge issuance, elevator floor locking, tenant safety, and basement parking management.',
    shortDescKm: 'ការគ្រប់គ្រងច្រកទ្វារអគារ ការពិនិត្យប័ណ្ណសម្គាល់អត្តសញ្ញាណ សម្រួលចំណត និងការទប់ស្កាត់ការរំខាន។',
    shortDescZh: '商业大厦大堂门禁、访客登记、电梯管控及停车场秩序维护。',
    whoShouldUseEn: 'Commercial real estate owners, Grade-A office towers, corporate headquarters, and co-working spaces.',
    whoShouldUseKm: 'ម្ចាស់អគារពាណិជ្ជកម្ម អគារការិយាល័យ A/B ទីស្នាក់ការកណ្តាលក្រុមហ៊ុន និង Co-working spaces។',
    whoShouldUseZh: '甲级写字楼、企业总部大楼、商务中心及联合办公空间。',
    responsibilitiesEn: [
      'Main lobby visitor welcoming & digital badge issuance',
      'Turnstile gate supervision & unauthorized entry prevention',
      'Basement parking traffic guidance & valet coordination',
      'After-hours floor locking & tenant door inspections',
      'Fire alarm control panel surveillance'
    ],
    responsibilitiesKm: [
      'ការទទួលរាក់ទាក់ភ្ញៀវ និងផ្តល់ប័ណ្ណស្កែន',
      'ការគ្រប់គ្រងរបាំងស្កែន និងការពារជនអនាមិក',
      'ការរៀបចំចំណតរថយន្តនៅជាន់ក្រោមดิน',
      'ការចាក់សោទ្វារជាន់ការិយាល័យក្រោយម៉ោងធ្វើការ',
      'ការតាមដានប្រព័ន្ធប្រកាសអាសន្នអគ្គិភ័យ'
    ],
    responsibilitiesZh: [
      '主大堂访客礼貌接待与电子门禁换卡',
      '闸机口秩序监管与无卡人员拦截',
      '地下停车场车辆诱导与秩序维持',
      '非工作时间楼层巡查与租户门窗查验',
      '消防警报主机值班与巡查'
    ],
    benefitsEn: [
      'Polite & corporate-styled front desk posture',
      'Certified fire safety wardens on duty',
      'Prevents unauthorized solicitors & door-to-door vendors',
      '24/7 CCTV monitor room assistance'
    ],
    benefitsKm: [
      'ឥរិយាបថរៀបរយ ស្វាគមន៍អតិថិជនយ៉ាងថ្លៃថ្នូរ',
      'មានជំនាញការពារ និងពន្លត់អគ្គិភ័យ',
      'ការពារអ្នកលក់ដូរគ្មានការអនុញ្ញាត',
      'មានការសម្របសម្រួលជាមួយបន្ទប់ CCTV'
    ],
    benefitsZh: [
      '职业礼仪与高标准形象门岗',
      '持有消防安全员上岗资格证',
      '杜绝推销人及无关人员骚扰',
      '协助配合24小时CCTV监控室工作'
    ],
    industriesServedEn: ['Corporate Offices', 'Financial Centers', 'Co-working Spaces', 'Tech Parks'],
    industriesServedKm: ['ការិយាល័យក្រុមហ៊ុន', 'មជ្ឈមណ្ឌលហិរញ្ញវត្ថុ', 'កន្លែងធ្វើការរួម', 'ឧទ្យានបច្ចេកវិទ្យា'],
    industriesServedZh: ['企业总部写字楼', '金融中心大厦', '联合办公区', '科技园区'],
    availability24h: true,
    imageUrl: officePatrolImg
  },
  {
    id: 'residential-security',
    titleEn: 'Residential & Borey Gated Community Security',
    titleKm: 'សេវាសន្តិសុខបុរី & ភូមិគ្រឹះ',
    titleZh: '住宅小区与高端住宅安保',
    category: 'Residential',
    badge: 'Community Guard',
    responseTime: 'Rapid Dispatch',
    guardCoverage: '4 - 40 Guards',
    shortDescEn: 'Perimeter gate screening, resident barcode pass management, motorcycle neighborhood patrols, and domestic dispute de-escalation.',
    shortDescKm: 'ការត្រួតពិនិត្យច្រកចេញចូលបុរី ការប្រើប្រាស់ប័ណ្ណស្កែន កាមេរ៉ានិងក្បួនល្បាតយប់ក្នុងសហគមន៍រស់នៅ។',
    shortDescZh: '封闭式小区门禁查验、访客二维码登记及24小时机动巡逻。',
    whoShouldUseEn: 'Borey gated community developers, luxury condo HOAs, private villa estates, and apartment complexes.',
    whoShouldUseKm: 'ម្ចាស់គម្រោងបុរី គណៈកម្មាធិការខុនដូ ភូមិគ្រឹះឯកជន និងអាផាតមិន។',
    whoShouldUseZh: '大型Borey别墅园区、高端公寓业主委员会、私人豪宅区。',
    responsibilitiesEn: [
      'Main entry gate boom barrier operation & visitor screening',
      'Resident sticker check & delivery driver tracking',
      '24/7 motorcycle patrol along neighborhood alleyways',
      'Noise complaint resolution & domestic dispute reporting',
      'Swimming pool & playground child safety watch'
    ],
    responsibilitiesKm: [
      'ការបញ្ជាបារ៉ាស់ច្រកទ្វារ និងពិនិត្យភ្ញៀវ',
      'ការស្កែនប័ណ្ណអ្នកភូមិ និងចុះឈ្មោះអ្នកដឹកទំនិញ',
      'ការជិះម៉ូតូល្បាតតាមផ្លូវក្នុងបុរី ២៤ម៉ោង',
      'ការសម្របសម្រួលជម្លោះ និងសំឡេងរំខាន',
      'ការមើលថែសុវត្ថិភាពកុមារនៅអាងហែលទឹក'
    ],
    responsibilitiesZh: [
      '主入口车闸放行与外来访客严格核验',
      '业主车贴识别与外卖快递登记',
      '小区内部巷道24小时摩托车流动巡逻',
      '邻里噪音投诉处置与治安协助',
      '儿童游乐区与泳池安全巡查'
    ],
    benefitsEn: [
      'Peace of mind for families & children in gated estates',
      'Quick emergency response inside neighborhood',
      'Reduces burglary & delivery driver speed violations',
      'Friendly neighborhood customer service posture'
    ],
    benefitsKm: [
      'ផ្តល់ភាពកក់ក្តៅដល់គ្រួសារ និងកុមារក្នុងបុរី',
      'អន្តរាគមន៍លឿនរហ័សពេលមានហេតុការណ៍',
      'ទប់ស្កាត់អំពើចោរកម្ម និងការបើកបរលឿន',
      'ទំនាក់ទំនងល្អជាមួយអ្នកភូមិ'
    ],
    benefitsZh: [
      '营造安全尊贵的小区住户生活环境',
      '社区内部突发警情1分钟快速赶到',
      '杜绝入室盗窃与超速违规驾驶',
      '亲和礼貌的社区管家式安保服务'
    ],
    industriesServedEn: ['Borey Gated Communities', 'Condominium Towers', 'Private Villas', 'Apartments'],
    industriesServedKm: ['បុរីរស់នៅ', 'អគារខុនដូ', 'ភូមិគ្រឹះឯកជន', 'អគារអាផាតមិន'],
    industriesServedZh: ['Borey联排别墅区', '高档公寓大楼', '私人独栋别墅', '公寓社区'],
    availability24h: true,
    imageUrl: boreyGuardsImg
  },
  {
    id: 'hotel-security',
    titleEn: 'Hotel & Resort Hospitality Security',
    titleKm: 'សេវាសន្តិសុខសណ្ឋាគារ & រីស៊ត',
    titleZh: '酒店与度假村安保礼仪',
    category: 'Hospitality',
    badge: 'Guest Safety',
    responseTime: 'Rapid Dispatch',
    guardCoverage: '2 - 20 Guards',
    shortDescEn: 'Hospitality-trained security officers combining elegant customer greeting, luggage assist, perimeter watch, and discreet guest protection.',
    shortDescKm: 'សេវាកម្មសន្តិសុខប្រកបដោយរដិបរដុបសមរម្យ ស្វាគមន៍ភ្ញៀវទេសចរ សម្របសម្រួលចំណត និងការពារសន្តិសុខ VIP។',
    shortDescZh: '注重高礼仪标准与外语沟通的酒店与度假村高级安保。',
    whoShouldUseEn: 'International 5-star hotels, eco-resorts, boutique lodges, and luxury casino hotels.',
    whoShouldUseKm: 'សណ្ឋាគារផ្កាយ ៥ រីស៊តធម្មជាតិ សណ្ឋាគារប៊ូទិក និងកាស៊ីណូ។',
    whoShouldUseZh: '五星级国际酒店、生态度假村、精品设计酒店及博彩酒店。',
    responsibilitiesEn: [
      'Valet & driveway vehicular traffic coordination',
      'Guest welcome greetings & luggage escort assist',
      'Pool area, spa, & beachfront night security patrol',
      'Unruly guest de-escalation & unwanted trespasser deterrence',
      'In-room safe key recovery & emergency response'
    ],
    responsibilitiesKm: [
      'ការសម្រួលចរាចរណ៍រថយន្តនៅច្រកចូលសណ្ឋាគារ',
      'ការស្វាគមន៍ភ្ញៀវ និងជួយលើកអីវ៉ាន់',
      'ការដើរល្បាតជុំវិញអាងហែលទឹក និងឆ្នេរសមុទ្រ',
      'ការសម្របសម្រួលភ្ញៀវស្រវឹង ឬរំខាន',
      'ការជួយអន្តរាគមន៍បន្ទាន់ក្នុងបន្ទប់'
    ],
    responsibilitiesZh: [
      '门廊正门车流疏导与贵宾接送',
      '住客礼貌问候与行李提拉疏导',
      '泳池区、水疗区及私人沙滩夜间巡逻',
      '醉酒闹事人员劝离与治安维护',
      '客房安全应急处置配合'
    ],
    benefitsEn: [
      'Enhances hotel star rating & positive TripAdvisor reviews',
      'Discreet & non-intrusive security guards',
      'Multilingual capability for international guests',
      'CCTV room monitoring & keycard access audits'
    ],
    benefitsKm: [
      'លើកកម្ពស់កិត្តិយស និងកេរ្តិ៍ឈ្មោះសណ្ឋាគារ',
      'ឥរិយាបថគួរសម មិនធ្វើឲ្យភ្ញៀវភ័យខ្លាច',
      'សមត្ថភាពនិយាយភាសាបរទេស',
      'ការគ្រប់គ្រងបន្ទប់ CCTV និងសោស្កែន'
    ],
    benefitsZh: [
      '提升酒店国际品牌形象与住客满意度',
      '隐蔽式与非入侵式礼仪防范',
      '基础外语沟通能力（英/中）',
      '房卡考勤与CCTV联防监控'
    ],
    industriesServedEn: ['5-Star Hotels', 'Luxury Eco-Resorts', 'Boutique Hotels', 'Casino Resorts'],
    industriesServedKm: ['សណ្ឋាគារផ្កាយ៥', 'រីស៊តធម្មជាតិ', 'សណ្ឋាគារប៊ូទិក', 'កាស៊ីណូរីស៊ត'],
    industriesServedZh: ['五星级商务酒店', '奢华海岛度假村', '精品精品酒店', '大型赌博度假村'],
    availability24h: true,
    imageUrl: hotelOperationsImg
  },
  {
    id: 'hospital-security',
    titleEn: 'Hospital & Healthcare Facility Security',
    titleKm: 'សេវាសន្តិសុខមន្ទីរពេទ្យ & គ្លីនិក',
    titleZh: '医院与医疗机构安保',
    category: 'Healthcare',
    badge: '24/7 ER Response',
    responseTime: 'Rapid Dispatch',
    guardCoverage: '2 - 30 Guards',
    shortDescEn: 'Emergency Room order enforcement, ambulance drive-lane clearing, patient dispute de-escalation, and pharmaceutical store watch.',
    shortDescKm: 'ការរៀបចំសណ្តាប់ធ្នាប់ផ្នែកសង្គ្រោះបន្ទាន់ សម្រួលចំណតរថយន្តសង្គ្រោះ និងការទប់ស្កាត់ភាពវឹកវរ។',
    shortDescZh: '急诊科秩序维持、救护车专用绿色通道开辟及医患纠纷突发处置。',
    whoShouldUseEn: 'National hospitals, private referral clinics, maternity centers, and pharmaceutical distribution hubs.',
    whoShouldUseKm: 'មន្ទីរពេទ្យជាតិ គ្លីនិកឯកជន មជ្ឈមណ្ឌលមាតា និងកុមារ និងឃ្លាំងឱសថ។',
    whoShouldUseZh: '综合性公立医院、高端外资诊所、妇产专科医院及医药仓储。',
    responsibilitiesEn: [
      'Emergency room drive lane clearing for quick ambulance entry',
      'Triage & ER waiting hall crowd & family order management',
      'Protection of medical personnel against emotional aggression',
      'Controlled substance & drug room high-security watch',
      'Maternity ward infant protection & visitor badge control'
    ],
    responsibilitiesKm: [
      'ការបើកផ្លូវរថយន្តសង្គ្រោះបន្ទាន់ឱ្យចូលបានលឿន',
      'ការរៀបចំសណ្តាប់ធ្នាប់សាច់ញាតិអ្នកជំងឺនៅ ER',
      'ការការពារគ្រូពេទ្យ និងបុគ្គលិកសុខាភិបាល',
      'ការការពារឃ្លាំងថ្នាំពេទ្យ និងសារធាតុញៀន',
      'ការការពារផ្នែកទារក និងត្រួតពិនិត្យភ្ញៀវ'
    ],
    responsibilitiesZh: [
      '救护车急救绿色通道开辟与疏导',
      '急诊大厅与候诊区家属秩序维护',
      '医护人员人身安全屏障保护',
      '麻醉药品与重症监护室重地把守',
      '产科病房婴儿防盗与访客核验'
    ],
    benefitsEn: [
      'De-escalation trained officers handling stressed families',
      'Fast 24/7 emergency response inside medical wards',
      'Ensures smooth ambulance arrival without blockage',
      'First-aid & CPR certified guard commanders'
    ],
    benefitsKm: [
      'មានជំនាញសម្របសម្រួលជាមួយគ្រួសារអ្នកជំងឺ',
      'អន្តរាគមន៍លឿនបំផុតក្នុងផ្នែកសង្គ្រោះបន្ទាន់',
      'ធានាថាផ្លូវរថយន្តសង្គ្រោះមិនកកស្ទះ',
      'ប្រធានក្រុមមានសញ្ញាបត្រសង្គ្រោះបឋម'
    ],
    benefitsZh: [
      '具备情绪化医患纠纷降温疏导技巧',
      '急诊楼层24小时不间断机动巡查',
      '确保生命急救通道常年畅通无阻',
      '驻点主管具备急救与心肺复苏资质'
    ],
    industriesServedEn: ['General Hospitals', 'Private Clinics', 'Maternity Centers', 'Pharma Logistics'],
    industriesServedKm: ['មន្ទីរពេទ្យទូទៅ', 'គ្លីនិកឯកជន', 'មជ្ឈមណ្ឌលមាតា', 'ឃ្លាំងឱសថ'],
    industriesServedZh: ['大型综合医院', '私立国际诊所', '妇产医院', '医药物流中心'],
    availability24h: true,
    imageUrl: hospitalGuardsImg
  },
  {
    id: 'school-security',
    titleEn: 'School & University Campus Security',
    titleKm: 'សេវាសន្តិសុខសាលារៀន & សកលវិទ្យាល័យ',
    titleZh: '校园与高等院校安保',
    category: 'Educational',
    badge: 'Child Safety First',
    responseTime: 'Rapid Dispatch',
    guardCoverage: '2 - 20 Guards',
    shortDescEn: 'Protecting students and faculty, drop-off traffic control, stranger verification, perimeter fence watch, and campus peace.',
    shortDescKm: 'ការការពារសុវត្ថិភាពសិស្សានុសិស្ស សម្រួលចរាចរណ៍កុមារនៅមុខសាលា និងការពិនិត្យអត្តសញ្ញាណជនแปลកមុខ។',
    shortDescZh: '上下学交通疏导、校园出入口把关及防范无关人员闯入。',
    whoShouldUseEn: 'International K-12 schools, private universities, vocational institutes, and daycare centers.',
    whoShouldUseKm: 'សាលារៀនអន្តរជាតិ K-12 សកលវិទ្យាល័យឯកជន វិទ្យាស្ថានបណ្តុះបណ្តាល និងមជ្ឈមណ្ឌលកុមារតូច។',
    whoShouldUseZh: '国际K-12学校、私立大学院校、职业培训机构及幼托中心。',
    responsibilitiesEn: [
      'Morning drop-off & afternoon pick-up pedestrian traffic safety',
      'Strict guardian ID match verification before student release',
      'Unidentified visitor screening & escort to administration',
      'Campus fence patrol against truancy & illegal trespassing',
      'Sports field & auditorium event crowd monitoring'
    ],
    responsibilitiesKm: [
      'ការសម្រួលចរាចរណ៍ពេលអាណាព្យាបាលជូន និងទទួលសិស្ស',
      'ការពិនិត្យប័ណ្ណទទួលសិស្សមុនអនុញ្ញាតឱ្យចេញ',
      'ការស្កែនភ្ញៀវចម្លែក និងជូនទៅការិយាល័យ',
      'ការដើរល្បាតតាមរបងសាលាការពារសិស្សគេចសាលា',
      'ការការពារសុវត្ថិភាពក្នុងពិធីកីឡា និងសន្និសីទ'
    ],
    responsibilitiesZh: [
      '早晚上下学出入口交通疏导与过街引导',
      '家长接送卡严格核验放行机制',
      '外来访客查验登记并全程引导至行政区',
      '周界围墙巡逻杜绝翻墙与外部人破坏',
      '体育馆与大型校园活动秩序维护'
    ],
    benefitsEn: [
      'Zero-tolerance child safety & background verified guards',
      'Polite & encouraging posture towards young students',
      'Reduces front-gate traffic congestion during rush hours',
      'Emergency lockdown protocol integrated with police'
    ],
    benefitsKm: [
      'សុវត្ថិភាពសិស្សជាអាទិភាព BGC 100%',
      'ឥរិយាបថរវៃរវៀស និងរាក់ទាក់ចំពោះកុមារ',
      'កាត់បន្ថយការកកស្ទះចរាចរណ៍មុខសាលា',
      'ប្រព័ន្ធប្រកាសអាសន្នភ្ជាប់ទៅនគរបាល'
    ],
    benefitsZh: [
      '100%无犯罪记录严审与亲和力安保员',
      '温和有礼、呵护未成年学生安全',
      '有效疏解上下学高峰期校门拥堵',
      '与辖区警局一键联动防暴演练'
    ],
    industriesServedEn: ['International K-12', 'Universities', 'Vocational Colleges', 'Kindergartens'],
    industriesServedKm: ['សាលាអន្តរជាតិ', 'សកលវិទ្យាល័យ', 'វិទ្យាស្ថានជំនាញ', 'សាលាមត្តេយ្យ'],
    industriesServedZh: ['国际K-12学校', '高等大学城', '职业技术学院', '连锁幼儿园'],
    availability24h: true,
    imageUrl: schoolGuardsImg
  },
  {
    id: 'shopping-mall-security',
    titleEn: 'Shopping Mall & Retail Center Security',
    titleKm: 'សេវាសន្តិសុខផ្សារទំនើប & មជ្ឈមណ្ឌលពាណិជ្ជកម្ម',
    titleZh: '大型商场与零售中心安保',
    category: 'Retail',
    badge: 'Crowd & Loss Control',
    responseTime: 'Rapid Dispatch',
    guardCoverage: '4 - 50 Guards',
    shortDescEn: 'Crowd management, loss prevention against shoplifting, lost child finding assist, parking garage security, and loading bay supervision.',
    shortDescKm: 'ការគ្រប់គ្រងហ្វូងមនុស្ស ការទប់ស្កាត់ការលួចទំនិញ ជួយជ្រោមជ្រែងកុមារវង្វេង និងការគ្រប់គ្រងចំណតរថយន្ត។',
    shortDescZh: '商场人流引导、反偷盗防范、寻回走失儿童及地下车库巡查。',
    whoShouldUseEn: 'Shopping malls, supermarket chains, luxury brand flagships, and retail plaza complexes.',
    whoShouldUseKm: 'ផ្សារទំនើបធំៗ ស៊ុបពើម៉ាកែត ហាងទំនិញប្រេនល្បីៗ និងមជ្ឈមណ្ឌលលក់រាយ។',
    whoShouldUseZh: '大型购物中心、连锁超市大卖场、奢品旗舰店及商业广场。',
    responsibilitiesEn: [
      'Main entrance metal detector gate & bag screening',
      'High-value retail tenant anti-shoplifting visual patrols',
      'Lost children broadcast & family reunion assistance',
      'Underground parking garage safety & crime prevention',
      'Night-time store closing lock audits & cleaning crew clearance'
    ],
    responsibilitiesKm: [
      'ការស្កែនច្រកចូលធំ និងពិនិត្យកាបូប',
      'ការដើរល្បាតការពារការលួចទំនិញក្នុងហាង',
      'ការប្រកាស និងជួយសម្របសម្រួលកុមារវង្វេង',
      'ការការពារសុវត្ថិភាពនៅចំណតក្រោមដី',
      'ការពិនិត្យសោទ្វារហាងក្រោយម៉ោងបិទផ្សារ'
    ],
    responsibilitiesZh: [
      '主入口安检门设立与大件箱包抽查',
      '高价值奢侈品门店巡视防偷防盗',
      '广播广播走失儿童寻回与家属安抚',
      '地下多层停车场照明与治安巡查',
      '夜间清场闭店检查与保洁人员管理'
    ],
    benefitsEn: [
      'Maintains pleasant & secure shopping environment',
      'Deters organized shoplifting rings effectively',
      'Reduces parking lot auto thefts and break-ins',
      'Quick response to medical or slips & falls incidents'
    ],
    benefitsKm: [
      'បង្កើតបរិយាកាសទិញទំនិញប្រកបដោយសុវត្ថិភាព',
      'ទប់ស្កាត់ក្រុមចោរលួចទំនិញក្នុងផ្សារ',
      'ការពារការលួចរថយន្ត និងម៉ូតូនៅចំណត',
      'ជួយអន្តរាគមន៍រហ័សពេលមានគ្រោះថ្នាក់'
    ],
    benefitsZh: [
      '营造放心舒适的高端购物消费环境',
      '有效威慑有组织团伙盗窃犯罪',
      '大幅降低地下车库盗抢案件发生率',
      '协助处置顾客意外摔伤与医疗求助'
    ],
    industriesServedEn: ['Shopping Malls', 'Supermarket Chains', 'Luxury Flagships', 'Night Markets'],
    industriesServedKm: ['ផ្សារទំនើប', 'ស៊ុបពើម៉ាកែត', 'ហាងប្រេនល្បី', 'ផ្សាររាត្រី'],
    industriesServedZh: ['大型Mall', '连锁超市', '国际奢品店', '商业街区'],
    availability24h: true,
    imageUrl: retailGuardsImg
  },
  {
    id: 'warehouse-security',
    titleEn: 'Warehouse & Logistics Distribution Hub Security',
    titleKm: 'សេវាសន្តិសុខឃ្លាំងទំនិញ & មជ្ឈមណ្ឌលដឹកជញ្ជូន',
    titleZh: '仓储物流与分拨中心安保',
    category: 'Logistics',
    badge: 'Logistics Gate Check',
    responseTime: 'Rapid Dispatch',
    guardCoverage: '2 - 20 Guards',
    shortDescEn: 'Inventory loss prevention, container seal verification, truck driver log, CCTV loading dock monitoring, and overnight perimeter watch.',
    shortDescKm: 'ការការពារស្តុកទំនិញ ការពិនិត្យកុងតឺន័រ ការកត់ត្រាឡានដឹកទំនិញ និងការការពារជុំវិញឃ្លាំងនៅពេលយប់។',
    shortDescZh: '货品出入库比对、集装箱封条查验、司机考勤及夜间库区防盗。',
    whoShouldUseEn: 'E-commerce fulfillment hubs, cold storage plants, bonded warehouses, and freight forwarders.',
    whoShouldUseKm: 'ឃ្លាំងទំនិញ E-commerce ឃ្លាំងត្រជាក់ ឃ្លាំងពន្ធដារ និងក្រុមហ៊ុនដឹកជញ្ជូន។',
    whoShouldUseZh: '电商履约仓、冷链物流园、保税仓库及跨境货运集散地。',
    responsibilitiesEn: [
      'Waybill tallying & cargo weight bridge inspection match',
      'Truck driver license log & seal number verification',
      'Forklift movement safety regulation enforcement',
      'Loading dock night camera monitoring & patrol',
      'Employee exit metal detector screening against internal theft'
    ],
    responsibilitiesKm: [
      'ការផ្ទៀងផ្ទាត់វិក្កយបត្រ និងទម្ងន់ទំនិញ',
      'ការពិនិត្យប័ណ្ណបើកបរ និងលេខកុងតឺន័រ',
      'ការត្រួតពិនិត្យសុវត្ថិភាពឡានស្ទូច Forklift',
      'ការមើលថែច្រកលើកទំនិញនៅពេលយប់',
      'ការស្កែនបុគ្គលិកចេញពីឃ្លាំងទប់ស្កាត់ការលួច'
    ],
    responsibilitiesZh: [
      '运单信息与出库实物逐一比对核查',
      '货车司机证件登记与铅封完整性查验',
      '叉车作业区安全操作规范督导',
      '装卸平台夜间CCTV巡查与人员管理',
      '下班员工出仓金属搜查防内部监守自盗'
    ],
    benefitsEn: [
      'Prevents high-value inventory leakage & shrink',
      'Provides clear electronic logs for audits & investigations',
      'Strict fire hazard enforcement in paper/plastic stores',
      'Reliable 24/7 gate control for heavy trucks'
    ],
    benefitsKm: [
      'ទប់ស្កាត់ការបាត់បង់ទំនិញក្នុងឃ្លាំង',
      'មានកំណត់ត្រាច្បាស់លាស់សម្រាប់ការត្រួតពិនិត្យ និងស៊ើបអង្កេត',
      'ការពារអគ្គិភ័យក្នុងឃ្លាំងក្រដាស/ប្លាស្ទិក',
      'គ្រប់គ្រងច្រកទ្វារឡានធំ ២៤ម៉ោង'
    ],
    benefitsZh: [
      '杜绝高价值商品流失与库存耗损',
      '提供完备的数字化出入库核查与追溯台账',
      '严格执行易燃物仓库禁火防静电规范',
      '24小时严密把守大型货柜车出入口'
    ],
    industriesServedEn: ['E-Commerce Warehouses', 'Cold Storage', 'Bonded Hubs', 'Customs Depots'],
    industriesServedKm: ['ឃ្លាំង E-commerce', 'ឃ្លាំងត្រជាក់', 'ឃ្លាំងពន្ធដារ', 'ឃ្លាំងគយ'],
    industriesServedZh: ['电商仓储', '冷链物流园', '保税园区', '海关堆场'],
    availability24h: true,
    imageUrl: patrolTruckImg
  },
  {
    id: 'industrial-zone-security',
    titleEn: 'Industrial Zone & Special Economic Zone (SEZ) Security',
    titleKm: 'សេវាសន្តិសុខតំបន់សេដ្ឋកិច្ចពិសេស & ឧស្សាហកម្ម',
    titleZh: '特区与工业园区整体安保',
    category: 'Industrial',
    badge: 'Master Perimeter Guard',
    responseTime: 'Rapid Dispatch',
    guardCoverage: '10 - 100+ Guards',
    shortDescEn: 'Comprehensive master security management for multi-factory SEZ parks including main gate control, mobile patrol, and strike management.',
    shortDescKm: 'ការគ្រប់គ្រងសន្តិសុខរួមក្នុងតំបន់សេដ្ឋកិច្ចពិសេស ច្រកទ្វារធំ ការល្បាតចល័ត និងការទប់ស្កាត់កូដកម្ម។',
    shortDescZh: '大型经济特区（SEZ）主入口主卡口管控、园区内部巡逻及治安综治。',
    whoShouldUseEn: 'Special Economic Zone developers, industrial park operators, and government export zone authorities.',
    whoShouldUseKm: 'អ្នកអភិវឌ្ឍន៍តំបន់សេដ្ឋកិច្ចពិសេស ក្រុមហ៊ុនគ្រប់គ្រងឧទ្យានឧស្សាហកម្ម និងអាជ្ញាធរតំបន់នាំចេញ។',
    whoShouldUseZh: '大型SEZ经济特区开发商、工业地产运营商及出口加工区管委会。',
    responsibilitiesEn: [
      'Master perimeter gate control & automated boom barriers',
      'SEZ internal road 4x4 truck & motorcycle patrols',
      'Worker dispute strike perimeter containment & police dispatch',
      'Substation, water treatment, & power plant protection',
      'Customs & container clearance coordination'
    ],
    responsibilitiesKm: [
      'ការគ្រប់គ្រងច្រកទ្វារធំ និងបារ៉ាស់អូតូ',
      'ការជិះឡាន 4x4 និងម៉ូតូល្បាតផ្លូវក្នុងតំបន់',
      'ការសម្របសម្រួលពេលមានកូដកម្ម និងហៅនគរបាល',
      'ការការពារស្ថានីយអគ្គិសនី និងប្រព័ន្ធទឹកស្អាត',
      'ការសម្របសម្រួលគយ និងច្រកកុងតឺន័រ'
    ],
    responsibilitiesZh: [
      '特区主大门全天候车辆与人员出入管控',
      '园区干道4x4越野巡逻车与机动组巡查',
      '劳资纠纷罢工人群安全屏障与警务对接',
      '变电站、水厂等园区核心公用设施重地看守',
      '协助海关监管车道放行与查验'
    ],
    benefitsEn: [
      'Master level coordination across dozens of factories',
      'Dedicated SEZ security command post & dispatch center',
      'Direct liaison with Provincial Police Commissioner',
      'Ensures continuous production without external disturbance'
    ],
    benefitsKm: [
      'ការគ្រប់គ្រងកម្រិតមេលើរោងចក្ររាប់សិប',
      'មានបន្ទប់បញ្ជាការសន្តិសុខផ្ទាល់ក្នុងតំបន់',
      'ទំនាក់ទំនងផ្ទាល់ជាមួយស្នងការដ្ឋាននគរបាលខេត្ត',
      'ធានាដំណើរការផលិតកម្មមិនអាក់ខាន'
    ],
    benefitsZh: [
      '统筹管理数十家入住外资工厂的安保联防',
      '特区内设立独立安保指挥中心与中控台',
      '直通省级警察厅高层调度机制',
      '保障园区生产秩序不受外部干扰'
    ],
    industriesServedEn: ['SEZ Zones', 'Garment Parks', 'Power Plants', 'Export Depots'],
    industriesServedKm: ['តំបន់ SEZ', 'ឧទ្យានកាត់ដេរ', 'រោងចក្រអគ្គិសនី', 'ឃ្លាំងនាំចេញ'],
    industriesServedZh: ['SEZ经济特区', '纺织工业园', '大型电厂', '出口加工区'],
    availability24h: true,
    imageUrl: patrolCommandImg
  },
  {
    id: 'event-security',
    titleEn: 'Event & Concert Crowd Management Security',
    titleKm: 'សេវាសន្តិសុខព្រឹត្តិការណ៍ & ពិព័រណ៍',
    titleZh: '大型活动与演唱会安保',
    category: 'Events',
    badge: 'Crowd Control',
    responseTime: 'Rapid Dispatch',
    guardCoverage: '10 - 200+ Guards',
    shortDescEn: 'Temporary crowd control, metal detector screening, ticket gate control, VIP stage defense, and emergency exit pathway clearance.',
    shortDescKm: 'ការគ្រប់គ្រងហ្វូងមនុស្ស ការពិនិត្យច្រកចេញចូល ការពិនិត្យកាបូប និងការរៀបចំសណ្តាប់ធ្នាប់ក្នុងពិធីធំៗ។',
    shortDescZh: '大型展会、音乐节演唱会人流管控、安检门门禁及舞台特保。',
    whoShouldUseEn: 'Concert organizers, international trade expos, sports tournaments, corporate galas, and wedding banquets.',
    whoShouldUseKm: 'អ្នករៀបចំសម្តែងតន្ត្រី ពិព័រណ៍ពាណិជ្ជកម្ម ព្រឹត្តិការណ៍កីឡា ពិធីជប់លៀង និងអាពាហ៍ពិពាហ៍ធំៗ។',
    whoShouldUseZh: '演唱会主办方、国际博览会、体育赛事组委会、大型企业年 fixed 会及奢华婚礼。',
    responsibilitiesEn: [
      'Walk-through metal detector portals & bag search teams',
      'Ticket gate queue barrier layout & crowd speed control',
      'VIP backstage & artist green room tactical protection',
      'Emergency exit route clearance & panic prevention',
      'Alcohol ban & illegal substance confiscation'
    ],
    responsibilitiesKm: [
      'ការដំឡើងទ្វារស្កែនលោហធាតុ និងក្រុមឆែកកាបូប',
      'ការរៀបចំបារ៉ាស់តម្រង់ជួរ និងគ្រប់គ្រងល្បឿនហ្វូងមនុស្ស',
      'ការការពារផ្នែក VIP និងបន្ទប់តារាសម្តែង',
      'ការបើកផ្លូវច្រកចេញបន្ទាន់ការពារការរត់ជាន់គ្នា',
      'ការទប់ស្កាត់គ្រឿងស្រវឹង និងសារធាតុហាមឃាត់'
    ],
    responsibilitiesZh: [
      '金属安检门搭建与全员提包搜查',
      '票务入口导流栅栏布防与人流速度管控',
      'VIP后台与艺人休息室贴身防范',
      '防踩踏紧急疏散通道全程畅通保障',
      '违禁物品与危险品现场查缴'
    ],
    benefitsEn: [
      'Protects artists, VIPs, and thousands of attendees',
      'Rapid deployment of 50-200 guards on short notice',
      'Seamless coordination with Municipal Police and Fire',
      'Clean professional uniform appearance'
    ],
    benefitsKm: [
      'ការពារតារាសម្តែង ភ្ញៀវ VIP និងអ្នកចូលរួមរាប់ពាន់នាក់',
      'អាចរៀបចំភ្នាក់ងារ ៥០-២០០ នាក់បានលឿន',
      'សហការស្អិតល្មួតជាមួយនគរបាល និងពន្លត់អគ្គិភ័យ',
      'ឯកសណ្ឋានស្អាតបាត និងស្បែកជើងវែង'
    ],
    benefitsZh: [
      '全力保障明星艺人与数万观众安全',
      '短时间内快速集结50-200名专业队员',
      '与金边市警局与消防支队联保对接',
      '统一规范的威严仪态与执勤礼仪'
    ],
    industriesServedEn: ['Concerts', 'Trade Exhibitions', 'Sports Arenas', 'Corporate Galas'],
    industriesServedKm: ['ការប្រគំតន្ត្រី', 'ពិព័រណ៍ពាណិជ្ជកម្ម', 'ស្តាតកីឡា', 'ពិធីជប់លៀង'],
    industriesServedZh: ['大型演唱会', '国际展会', '体育场馆', '企业高端晚宴'],
    availability24h: true,
    imageUrl: eventOperationsImg
  },
  {
    id: 'patrol-services',
    titleEn: 'Mobile Patrol & Rapid Dispatch Services',
    titleKm: 'សេវាក្បួនល្បាតចល័ត (Mobile Patrol)',
    titleZh: '4x4巡逻车与机动快速反应',
    category: 'Mobile Patrol',
    badge: 'Rapid Response',
    responseTime: 'Rapid Dispatch',
    guardCoverage: 'Mobile Fleets',
    shortDescEn: '24/7 mobile patrol teams in 4x4 Ford Ranger trucks and motorbikes providing scheduled and surprise perimeter checks across provinces.',
    shortDescKm: 'ក្រុមល្បាតម៉ូតូ និងរថយន្ត 4x4 ត្រួតពិនិត្យចល័តនៅតាមតំបន់ឧស្សាហកម្ម និងសហគមន៍ ដោយមាន GPS។',
    shortDescZh: '4x4越野巡逻车与摩托车巡逻队，提供定时及随机区域巡查。',
    whoShouldUseEn: 'Remote facilities, agricultural solar farms, telecom towers, multi-property owners, and unstaffed night warehouses.',
    whoShouldUseKm: 'ទីតាំងឆ្ងាយៗ កសិដ្ឋានសូឡា បង្គោលអង់តែនទូរស័ព្ទ និងឃ្លាំងទំនិញដែលគ្មានមនុស្សនៅយប់។',
    whoShouldUseZh: '偏远设施、光伏电站、电信基站、多不动产业主及无人在守夜间仓库。',
    responsibilitiesEn: [
      'Randomized night time mobile patrols in marked vehicles',
      'Electronic RFID wand scanning at facility boundaries',
      'Immediate armed-level alarm response to intruder alerts',
      'Lock verification on doors, gates, & storage containers',
      'Written photo inspection report sent after every visit'
    ],
    responsibilitiesKm: [
      'ការបើកបររថយន្តល្បាតស្កែននៅពេលយប់',
      'ការស្កែនដំបង RFID នៅតាមចំណុចសន្តិសុខ',
      'ការឆ្លើយតបបន្ទាន់ពេលមានស៊ីរ៉ែនប្រកាសអាសន្ន',
      'ការពិនិត្យសោទ្វារ និងកុងតឺន័រ',
      'ការផ្ញើរបាយការណ៍រូបថតជូនម្ចាស់ទីតាំង'
    ],
    responsibilitiesZh: [
      '驾驶专运巡逻车进行夜间不定期随机打卡',
      '电子巡更感应卡固定巡查打卡',
      '接报警后10分钟内赶赴现场处置',
      '大门锁具与危险区域实地拉扯检查',
      '每次巡查完毕提供带GPS定位的照片汇报'
    ],
    benefitsEn: [
      'Cost-effective alternative to permanent static guards',
      'GPS tracked 4x4 vehicles with high-beam searchlights',
      'High visual deterrent effect against rural thieves',
      'Instant emergency call backup to client site'
    ],
    benefitsKm: [
      'ចំណាយតិចជាងការជួលសន្តិសុខប្រចាំការពេញ',
      'រថយន្ត 4x4 មានប្រព័ន្ធ GPS និងភ្លើងហ្វាភ្លឺខ្លាំង',
      'បំភ័យចោរលួចនៅតាមទីជនបទ',
      'ជួយអន្តរាគមន៍បន្ទាន់ភ្លាមៗ'
    ],
    benefitsZh: [
      '相比全天候驻点，大幅节省企业安保预算',
      '带GPS卫星定位与强光探照灯的四驱皮卡',
      '对偏远地区违法犯罪分子形成极强威慑',
      '发生险情时可立即作为生力军增援'
    ],
    industriesServedEn: ['Solar Farms', 'Telecom Towers', 'Agribusiness', 'Unattended Warehouses'],
    industriesServedKm: ['កសិដ្ឋានសូឡា', 'បង្គោលអង់តែន', 'កសិ-ឧស្សាហកម្ម', 'ឃ្លាំងគ្មានមនុស្ស'],
    industriesServedZh: ['光伏电站', '通信基站', '农业种植园', '无人看守仓库'],
    availability24h: true,
    imageUrl: patrolTruckImg
  },
  {
    id: 'reception-access',
    titleEn: 'Reception & Access Control Security',
    titleKm: 'សេវាសន្តិសុខស្វាគមន៍ & គ្រប់គ្រងច្រកទ្វារ',
    titleZh: '前台前卫与门禁礼仪安保',
    category: 'Commercial',
    badge: 'Frontdesk Ambassador',
    responseTime: 'Rapid Dispatch',
    guardCoverage: '1 - 10 Guards',
    shortDescEn: 'Professional reception security personnel who manage visitor badges, phone calls, package sign-ins, and polite frontdesk security.',
    shortDescKm: 'ភ្នាក់ងារសន្តិសុខស្វាគមន៍នៅផ្នែកខាងមុខ ការបញ្ជូនសំបុត្រ ទទួលភ្ញៀវ និងគ្រប់គ្រងប្រព័ន្ធស្កែនទ្វារ។',
    shortDescZh: '兼具前台礼仪与安防防范双重职能的高素质前卫队员。',
    whoShouldUseEn: 'Embassy offices, luxury showrooms, tech hubs, private hospitals, and international corporate offices.',
    whoShouldUseKm: 'ការិយាល័យស្ថានទូត ហាងទំនិញទំនើប មជ្ឈមណ្ឌលបច្ចេកវិទ្យា និងក្រុមហ៊ុនបរទេស។',
    whoShouldUseZh: '领事馆办公区、豪车展厅、高科技企业、国际诊所及外企办事处。',
    responsibilitiesEn: [
      'Polite reception greeting & visitor passport/ID registration',
      'Courier package receiving, logging, & tenant delivery',
      'Keycard access programming & guest elevator clearance',
      'Switchboard call routing & executive protection liaison',
      'First aid & emergency evacuation desk warden'
    ],
    responsibilitiesKm: [
      'ការទទួលរាក់ទាក់ និងពិនិត្យលិខិតឆ្លងដែន/អត្តសញ្ញាណប័ណ្ណ',
      'ការទទួលកញ្ចប់ប្រៃសណីយ៍ និងចុះបញ្ជី',
      'ការបញ្ចូលទិន្នន័យប័ណ្ណស្កែនទ្វារ និងអុិលីវ៉ាទ័រ',
      'ការឆ្លើយទូរស័ព្ទ និងសម្របសម្រួលសន្តិសុខ',
      'ការផ្តល់ការសង្គ្រោះបឋម និងដឹកនាំផ្លូវបន្ទាន់'
    ],
    responsibilitiesZh: [
      '前台礼貌问候与外籍访客护照登记',
      '快递包裹签收、分类台账与通知',
      '电子门禁卡授权与客用电梯解控',
      '前台总机电话转接与应急安保联动',
      '具备基础急救技能与疏散导引'
    ],
    benefitsEn: [
      'Blends polished customer service with firm security protection',
      'Smart formal blazer uniform options available',
      'Multilingual communication skill',
      'Seamless integration with corporate HR & Admin teams'
    ],
    benefitsKm: [
      'រួមបញ្ចូលសេវាកម្មអតិថិជន និងសុវត្ថិភាពយ៉ាងល្អ',
      'មានជម្រើសពាក់អាវធំ Blazer ថ្លៃថ្នូរ',
      'និយាយភាសាបរទេសបានល្អ',
      'សហការជិតស្និទ្ធជាមួយផ្នែក HR'
    ],
    benefitsZh: [
      '完美融合亲和商务服务与严密安全屏障',
      '可选配精裁正装西服（Blazer）制服',
      '具备流畅中/英/柬多语接洽能力',
      '无缝对接企业行政与HR部门工作'
    ],
    industriesServedEn: ['Embassies', 'Tech Offices', 'Luxury Showrooms', 'Private Clinics'],
    industriesServedKm: ['ស្ថានទូត', 'ក្រុមហ៊ុនបច្ចេកវិទ្យា', 'ហាងទំនិញទំនើប', 'គ្លីនិកឯកជន'],
    industriesServedZh: ['驻柬大使馆', '科技外企', '豪车品牌展厅', '高端诊所'],
    availability24h: true,
    imageUrl: receptionGuardsImg
  }
];

export const INDUSTRIES_LIST: IndustryDetail[] = [
  {
    id: 'factories',
    nameEn: 'Garment & Industrial Factories',
    nameKm: 'រោងចក្រកាត់ដេរ & ឧស្សាហកម្ម',
    nameZh: '服装制造与工业工厂',
    iconName: 'Factory',
    descriptionEn: 'Protecting heavy machinery, raw fabric inventory, worker shift order, cargo logistics, and labor safety.',
    descriptionKm: 'ការការពារគ្រឿងចក្រ ក្រណាត់ ស្តុកទំនិញ សណ្តាប់ធ្នាប់កម្មករ និងការដឹកជញ្ជូនទំនិញ។',
    descriptionZh: '全面防护工厂设备、成衣服料存货、工人考勤与货物出入安全。',
    keyRisksEn: ['Raw material theft', 'Worker strike disruption', 'Container truck seal tampering', 'Fire hazard in fabric store'],
    knskSolutionEn: ['Gate pass verification', 'Metal detector bag search', 'Bilingual site commander', '24/7 patrol wand log'],
    recommendedServices: ['factory-security', 'patrol-services', 'industrial-zone-security'],
    imageUrl: patrolTruckImg
  },
  {
    id: 'banks',
    nameEn: 'Banks & Financial Institutions',
    nameKm: 'ធនាគារ & គ្រឹះស្ថានហិរញ្ញវត្ថុ',
    nameZh: '商业银行与金融机构',
    iconName: 'Building2',
    descriptionEn: 'High-security guard posture, ATM cash lobby watch, vault escort, customer queue safety, and armed response readiness.',
    descriptionKm: 'ការការពារសន្តិសុខកម្រិតខ្ពស់នៅធនាគារ ទូ ATM បន្ទប់តម្កល់ប្រាក់ និងសុវត្ថិភាពអតិថិជន។',
    descriptionZh: '银行营业厅、ATM提款区、金库看管及大额现金押运防范。',
    keyRisksEn: ['Armed robbery threat', 'ATM tampering', 'Customer intimidation', 'After-hours vault breach'],
    knskSolutionEn: ['Tactical guard posture', '24/7 ATM lobby watch', 'Direct police speed dial', 'Discreet executive guard'],
    recommendedServices: ['direct-guards', 'vip-protection', 'reception-access'],
    imageUrl: mannedGuardingImg
  },
  {
    id: 'hotels',
    nameEn: 'Hotels & Resorts',
    nameKm: 'សណ្ឋាគារ & រីស៊ត',
    nameZh: '酒店与度假村',
    iconName: 'Hotel',
    descriptionEn: 'Hospitality-trained security officers blending warm guest welcoming with vigilant perimeter defense.',
    descriptionKm: 'សន្តិសុខស្វាគមន៍ភ្ញៀវប្រកបដោយរដិបរដុបសមរម្យ និងការការពារសន្តិសុខជុំវិញសណ្ឋាគារ។',
    descriptionZh: '融入礼仪问候的酒店高标准安保，维护住客隐私与安全。',
    keyRisksEn: ['Unwanted trespassers', 'Luggage theft', 'Poolside safety incidents', 'Noise & intoxication disturbance'],
    knskSolutionEn: ['Hospitality guard etiquette', 'Valet traffic control', 'Beach & pool patrol', 'Keycard access audit'],
    recommendedServices: ['hotel-security', 'vip-protection', 'reception-access'],
    imageUrl: eventCeremonyImg
  },
  {
    id: 'casinos',
    nameEn: 'Casinos & Entertainment Centers',
    nameKm: 'កាស៊ីណូ & មជ្ឈមណ្ឌលកម្សាន្ត',
    nameZh: '赌场博彩与娱乐综合体',
    iconName: 'Gamepad2',
    descriptionEn: 'Strict entry age check, high-value chip protection, dispute de-escalation, and VIP gaming room escort.',
    descriptionKm: 'ការពិនិត្យអាយុអតិថិជន ការការពារបន្ទប់ហ្គេម VIP និងការដោះស្រាយជម្លោះផ្សេងៗ។',
    descriptionZh: '博彩大厅年龄与身份核验、VIP贵宾厅特保及突发纠纷控场。',
    keyRisksEn: ['Unruly patron disputes', 'Counterfeit chip fraud', 'VIP cash movement breach', 'Perimeter disruption'],
    knskSolutionEn: ['Tactical close officers', 'VIP escort guards', 'Metal detector gates', '24/7 monitor liaison'],
    recommendedServices: ['vip-protection', 'direct-guards', 'event-security'],
    imageUrl: guardFormationImg
  },
  {
    id: 'embassies',
    nameEn: 'Embassies & Diplomatic Missions',
    nameKm: 'ស្ថានទូត & បេសកកម្មឌីប្រូម៉ាទិក',
    nameZh: '大使馆与领事馆机构',
    iconName: 'Building',
    descriptionEn: 'Class-A diplomatic access control, vehicle undercarriage inspection, visitor passport logging, and perimeter defense.',
    descriptionKm: 'ការពិនិត្យសន្តិសុខកម្រិតខ្ពស់សម្រាប់ស្ថានទូត ការពិនិត្យក្រោមបាតរថយន្ត និងលិខិតឆ្លងដែន។',
    descriptionZh: '使领馆最高级门禁查验、车辆底部底盘检查及外交官安全防范。',
    keyRisksEn: ['Unauthorized breach', 'Protest gathering', 'Suspicious package delivery', 'Diplomat threat'],
    knskSolutionEn: ['Diplomatic gate protocol', 'Mirror undercarriage scan', 'Bilingual guards', 'Armed police unit link'],
    recommendedServices: ['reception-access', 'vip-protection', 'direct-guards'],
    imageUrl: companyOfficeImg
  },
  {
    id: 'government',
    nameEn: 'Government & Public Sector Buildings',
    nameKm: 'ស្ថាប័នរដ្ឋ & អគារសាធារណៈ',
    nameZh: '政府机关与公共事业大楼',
    iconName: 'Landmark',
    descriptionEn: 'Public visitor queue management, official document room protection, and protocol enforcement.',
    descriptionKm: 'ការរៀបចំសណ្តាប់ធ្នាប់ប្រជាពលរដ្ឋមកទទួលសេវា និងការការពារបន្ទប់ឯកសារផ្លូវការ។',
    descriptionZh: '政务大厅群众办事秩序维护、机密档案室重地看守及安全防范。',
    keyRisksEn: ['Crowd congestion', 'Unlawful entry to restricted zones', 'Protest management', 'Document theft'],
    knskSolutionEn: ['Ministry approved guards', 'ID badge checks', 'Queue barriers', '24/7 building lockup'],
    recommendedServices: ['direct-guards', 'reception-access', 'patrol-services'],
    imageUrl: companyOfficeImg
  },
  {
    id: 'schools',
    nameEn: 'Schools & Educational Institutes',
    nameKm: 'សាលារៀន & វិទ្យាស្ថាន',
    nameZh: '中小学与教育机构',
    iconName: 'GraduationCap',
    descriptionEn: 'Student drop-off traffic control, guardian pick-up badge matching, and stranger deterrence.',
    descriptionKm: 'ការសម្រួលចរាចរណ៍សិស្ស ការពិនិត្យប័ណ្ណទទួលសិស្ស និងការការពារជនแปลកមុខ។',
    descriptionZh: '上下学出入口交通疏导、接送卡核验及防止陌生人潜入。',
    keyRisksEn: ['Child abduction risk', 'Traffic accidents at gate', 'Unauthorized stranger entrance', 'Bullying/truancy'],
    knskSolutionEn: ['Guardian badge matching', 'Traffic safety patrol', 'Background cleared staff', 'First aid support'],
    recommendedServices: ['school-security', 'direct-guards'],
    imageUrl: guardFormationImg
  },
  {
    id: 'universities',
    nameEn: 'Universities & Research Campuses',
    nameKm: 'សកលវិទ្យាល័យ & មជ្ឈមណ្ឌលស្រាវជ្រាវ',
    nameZh: '高等院校与大学城',
    iconName: 'BookOpen',
    descriptionEn: 'Large campus perimeter monitoring, lab equipment protection, student dormitory safety, and event crowd control.',
    descriptionKm: 'ការការពារបរិវេណសកលវិទ្យាល័យ មន្ទីរពិសោធន៍ អន្តេវាសិកដ្ឋាន និងកម្មវិធីកីឡា។',
    descriptionZh: '大学园区周界巡查、实验室高精设备保护及宿舍区夜间安全。',
    keyRisksEn: ['Lab equipment theft', 'Motorcycle theft from parking', 'Dormitory trespassers', 'Student event friction'],
    knskSolutionEn: ['Motorcycle patrol fleet', 'Lab access logging', 'Dormitory gate watch', 'Event crowd control'],
    recommendedServices: ['school-security', 'patrol-services', 'event-security'],
    imageUrl: guardFormationImg
  },
  {
    id: 'hospitals',
    nameEn: 'Hospitals & Healthcare Facilities',
    nameKm: 'មន្ទីរពេទ្យ & គ្លីនិក',
    nameZh: '医院与医疗卫生机构',
    iconName: 'HeartPulse',
    descriptionEn: 'ER triage safety, ambulance drive-lane clearing, emotional family de-escalation, and pharmacy room security.',
    descriptionKm: 'ការសម្រួលផ្លូវរថយន្តសង្គ្រោះបន្ទាន់ ការរៀបចំសណ្តាប់ធ្នាប់ ER និងការការពារឃ្លាំងថ្នាំ។',
    descriptionZh: '急诊绿色通道畅通保障、医护人员保护及麻醉药品库重点看守。',
    keyRisksEn: ['Ambulance lane blockage', 'Emotional family friction', 'Controlled drug theft', 'Infant ward breach'],
    knskSolutionEn: ['De-escalation trained team', 'Ambulance lane watch', 'Drug room security', '24/7 ER guard station'],
    recommendedServices: ['hospital-security', 'direct-guards'],
    imageUrl: patrolCommandImg
  },
  {
    id: 'malls',
    nameEn: 'Shopping Malls & Retail Centers',
    nameKm: 'ផ្សារទំនើប & មជ្ឈមណ្ឌលពាណិជ្ជកម្ម',
    nameZh: '购物中心与大型商场',
    iconName: 'ShoppingBag',
    descriptionEn: 'Crowd management, anti-shoplifting visual deterrence, lost child assistance, and basement parking watch.',
    descriptionKm: 'ការគ្រប់គ្រងហ្វូងមនុស្ស ការទប់ស្កាត់ការលួចទំនិញ ជួយកុមារវង្វេង និងសុវត្ថិភាពចំណតរថយន្ត។',
    descriptionZh: '商场人流引导、反偷盗巡查、寻回走失儿童及地下车库防范。',
    keyRisksEn: ['Shoplifting rings', 'Lost children', 'Parking garage auto theft', 'Escalator/slip safety'],
    knskSolutionEn: ['Uniformed deterrent', 'Lost child broadcast', 'Basement patrol', 'Gate bag metal screening'],
    recommendedServices: ['shopping-mall-security', 'direct-guards', 'reception-access'],
    imageUrl: companyOfficeImg
  },
  {
    id: 'construction',
    nameEn: 'Construction Sites & Civil Infrastructure',
    nameKm: 'ការដ្ឋានសំណង់ & ស្ពានផ្លូវ',
    nameZh: '建筑工程与基建项目',
    iconName: 'HardHat',
    descriptionEn: 'Safeguarding steel, heavy machinery, diesel tanks, and enforcing PPE helmet compliance for workers.',
    descriptionKm: 'ការការពារគ្រឿងចក្រ ដែក ស៊ីម៉ង់ត៍ ប្រេង និងការត្រួតពិនិត្យមួកសុវត្ថិភាព។',
    descriptionZh: '重型工程机械、建材与柴油储备看管及PPE安全帽督查。',
    keyRisksEn: ['Diesel fuel theft', 'Copper cable theft', 'Subcontractor tool loss', 'Night trespassers'],
    knskSolutionEn: ['Night patrol searchlights', 'Fuel tank log', 'Material gate pass', 'Rapid 4x4 dispatch'],
    recommendedServices: ['construction-security', 'patrol-services'],
    imageUrl: patrolCommandImg
  },
  {
    id: 'warehouses',
    nameEn: 'Warehouses & Logistics Depots',
    nameKm: 'ឃ្លាំងទំនិញ & មជ្ឈមណ្ឌលដឹកជញ្ជូន',
    nameZh: '仓储物流与分拨中心',
    iconName: 'Boxes',
    descriptionEn: 'Container truck seal audits, inventory waybill checks, loading dock monitoring, and night perimeter patrols.',
    descriptionKm: 'ការត្រួតពិនិត្យកុងតឺន័រ វិក្កយបត្រទំនិញ ច្រកទ្វារឃ្លាំង និងការដើរល្បាតយប់។',
    descriptionZh: '集装箱铅封抽查、发货单比对、装卸平台监控及夜间库区防盗。',
    keyRisksEn: ['Internal inventory shrink', 'Seal tampering', 'Forklift accidents', 'Fire hazard in stack zone'],
    knskSolutionEn: ['Seal & truck logbook', 'Metal detector exit scan', 'Patrol wand checkpoints', '24/7 gate operator'],
    recommendedServices: ['warehouse-security', 'patrol-services', 'factory-security'],
    imageUrl: patrolTruckImg
  },
  {
    id: 'residential',
    nameEn: 'Residential Communities & Boreys',
    nameKm: 'បុរីរស់នៅ & សហគមន៍',
    nameZh: 'Borey别墅区与住宅小区',
    iconName: 'Home',
    descriptionEn: 'Gated entrance boom barrier control, resident vehicle sticker checks, 24/7 motorcycle neighborhood patrols.',
    descriptionKm: 'ការគ្រប់គ្រងច្រកទ្វារបុរី ការពិនិត្យស្គិកគឺរថយន្ត និងការជិះម៉ូតូល្បាតក្នុងបុរី។',
    descriptionZh: '小区主门禁车闸把控、业主车贴识别及24小时巷道巡逻。',
    keyRisksEn: ['Home burglary', 'Delivery driver speeding', 'Noise complaints', 'Unauthorized visitor entrance'],
    knskSolutionEn: ['Barcode entry gate', 'Motorcycle mobile patrol', 'Resident emergency button', 'Visitor QR log'],
    recommendedServices: ['residential-security', 'patrol-services'],
    imageUrl: companyOfficeImg
  },
  {
    id: 'villas',
    nameEn: 'Luxury Villas & Private Estates',
    nameKm: 'ភូមិគ្រឹះឯកជន & វីឡាទំនើប',
    nameZh: '私人豪宅与独栋别墅',
    iconName: 'Key',
    descriptionEn: 'Dedicated gate sentry guards, perimeter alarm monitoring, family privacy protection, and emergency backup.',
    descriptionKm: 'សន្តិសុខការពារភូមិគ្រឹះឯកជន ការការពារឯកជនភាពគ្រួសារ និងប្រព័ន្ធប្រកាសអាសន្ន។',
    descriptionZh: '独栋别墅专享看守门岗、周界防盗告警及家族隐私保护。',
    keyRisksEn: ['Intrusion threat', 'Privacy leakage', 'Staff theft', 'Isolated emergency'],
    knskSolutionEn: ['Vetted private sentry', 'Perimeter CCTV watch', 'Immediate police hotline', 'Discreet guard posture'],
    recommendedServices: ['residential-security', 'vip-protection'],
    imageUrl: companyOfficeImg
  },
  {
    id: 'ngos',
    nameEn: 'International NGOs & Agencies',
    nameKm: 'អង្គការមិនមែនរដ្ឋាភិបាល & អង្គការអន្តរជាតិ',
    nameZh: '国际NGO与非营利机构',
    iconName: 'Globe2',
    descriptionEn: 'Expat safety management, field trip security escorts, asset protection, and neutral diplomatic posture.',
    descriptionKm: 'ការការពារសុវត្ថិភាពបុគ្គលិកបរទេស ការអមដំណើរចុះបេសកកម្មតាមខេត្ត និងការការពារទ្រព្យសម្បត្តិ។',
    descriptionZh: '外籍专家人身安全保障、下乡考察随行护卫及资产防护。',
    keyRisksEn: ['Field travel risks', 'Compound intrusion', 'Asset theft', 'Diplomatic friction'],
    knskSolutionEn: ['English fluent guards', '4x4 escort vehicle', 'Asset tag tracking', 'Neutral etiquette'],
    recommendedServices: ['reception-access', 'vip-protection', 'patrol-services'],
    imageUrl: guardFormationImg
  },
  {
    id: 'restaurants',
    nameEn: 'Restaurants & Dining Venues',
    nameKm: 'ភោជនីយដ្ឋាន & ហាងអាហារ',
    nameZh: '高端餐厅与餐饮服务业',
    iconName: 'Utensils',
    descriptionEn: 'Valet parking assistance, customer greeting, midnight cash closing protection, and intoxication dispute mitigation.',
    descriptionKm: 'ការរៀបចំចំណតរថយន្ត ការស្វាគមន៍ភ្ញៀវ ការការពារប្រាក់ចំណូលពេលយប់ និងការសម្របសម្រួលភ្ញៀវស្រវឹង។',
    descriptionZh: '代客泊车与正门疏导、夜间营业结账结账押运及醉酒理赔处置。',
    keyRisksEn: ['Dine and dash fraud', 'Parking lot vehicle damage', 'Drunk customer disputes', 'Late night cash robbery'],
    knskSolutionEn: ['Valet coordination', 'Polite greeting posture', 'Midnight cash watch', 'Discreet dispute handling'],
    recommendedServices: ['hotel-security', 'direct-guards'],
    imageUrl: eventCeremonyImg
  },
  {
    id: 'nightclubs',
    nameEn: 'Night Clubs & Entertainment Spots',
    nameKm: 'ក្លឹបកម្សាន្ត & កន្លែងរាត្រី',
    nameZh: '酒吧夜总会与夜生活场所',
    iconName: 'Music',
    descriptionEn: 'Firm door bouncers, weapons metal detector check, fights de-escalation, and VIP bottle service protection.',
    descriptionKm: 'ការពិនិត្យអាវុធនៅច្រកចូល ការទប់ស្កាត់ការវាយតប់គ្នា និងការការពារភ្ញៀវ VIP ក្នុងក្លឹប។',
    descriptionZh: '酒吧正门安检查枪、内部斗殴快速劝离及VIP台位保卫。',
    keyRisksEn: ['Weapons brought inside', 'Physical fights', 'Underage entry', 'VIP harassment'],
    knskSolutionEn: ['Physically commanding bouncers', 'Handheld metal wands', 'Fast ejection protocol', 'VIP booth watch'],
    recommendedServices: ['event-security', 'vip-protection'],
    imageUrl: guardFormationImg
  },
  {
    id: 'airports',
    nameEn: 'Airports & Cargo Terminals',
    nameKm: 'ព្រលានយន្តហោះ & ឃ្លាំងទំនិញអាកាសចរណ៍',
    nameZh: '机场外围与航空货运站',
    iconName: 'Plane',
    descriptionEn: 'Perimeter fence patrol, cargo terminal gate clearance, passenger queue order, and high-security compliance.',
    descriptionKm: 'ការដើរល្បាតតាមរបងព្រលានយន្តហោះ ការពិនិត្យទំនិញតាមផ្លូវអាកាស និងសណ្តាប់ធ្នាប់អ្នកដំណើរ។',
    descriptionZh: '机场外围网界巡逻、航空货运站放行与客运大厅秩序。',
    keyRisksEn: ['Perimeter fence breach', 'Air cargo theft', 'Terminal passenger congestion', 'Unattended luggage'],
    knskSolutionEn: ['High-security patrol team', 'Cargo waybill match', '4x4 perimeter truck', 'MOI Police liaison'],
    recommendedServices: ['patrol-services', 'warehouse-security', 'reception-access'],
    imageUrl: patrolTruckImg
  },
  {
    id: 'tourism',
    nameEn: 'Tourism & Cultural Heritage Sites',
    nameKm: 'តំបន់ទេសចរណ៍ & បេតិកភណ្ឌវប្បធម៌',
    nameZh: '旅游景区与文化遗产保护区',
    iconName: 'Compass',
    descriptionEn: 'Protecting tourists, guiding visitor direction, preventing temple vandalism, and coordinating emergency first aid.',
    descriptionKm: 'ការការពារសុវត្ថិភាពភ្ញៀវទេសចរ ការពារប្រាសាទបុរាណ និងការផ្តល់ការសង្គ្រោះបឋម។',
    descriptionZh: '景地秩序维护、国家文物防范破坏及外籍游客急救求助。',
    keyRisksEn: ['Vandalism of artifacts', 'Tourist pickpocketing', 'Lost tourists', 'Medical emergencies on trails'],
    knskSolutionEn: ['Heritage patrol guards', 'First aid certified staff', 'Multilingual info posture', '24/7 site watch'],
    recommendedServices: ['hotel-security', 'patrol-services'],
    imageUrl: guardFormationImg
  }
];

export const EQUIPMENT_ITEMS: EquipmentItem[] = [
  {
    id: 'eq-1',
    nameEn: 'Motorola Long-Range 2-Way Radios',
    nameKm: 'វិទ្យុទាក់ទង Motorola ចម្ងាយឆ្ងាយ',
    nameZh: '摩托罗拉长距离双向战术对讲机',
    category: 'Communication',
    descriptionEn: 'Encrypted multi-channel walkie-talkies with acoustic tube earpieces for noise-free instant dispatch to site commanders.',
    descriptionKm: 'ប្រព័ន្ធវិទ្យុទាក់ទងកូដសម្ងាត់ មានកាសស្តាប់ត្រចៀក ទំនាក់ទំនងបានច្បាស់ល្អ មិនរំខានដល់ភ្ញៀវ។',
    descriptionZh: '加密多频道对讲机配隐蔽空气导管耳麦，保障指挥部与现场高清无噪即时呼应。',
    specificationEn: 'UHF/VHF 5W Output, 16-channel encryption, 18-hour lithium battery life',
    iconName: 'Radio'
  },
  {
    id: 'eq-2',
    nameEn: 'Ultra-Bright LED Tactical Flashlights',
    nameKm: 'អំពូលបញ្ចាំងពន្លឺ LED កម្លាំងខ្លាំង',
    nameZh: '高亮LED战术巡逻手电筒',
    category: 'Patrol Gear',
    descriptionEn: 'Aircraft-grade aluminum flashlights with strobe disorient mode and 500-meter beam distance for night patrols.',
    descriptionKm: 'អំពូលបញ្ចាំងអាលុយមីញ៉ូមកម្លាំងភ្លឺខ្លាំង ៥០០ម៉ែត្រ មានភ្លើង strobe បំភ័យចោរនៅពេលយប់។',
    descriptionZh: '航空级铝合金防爆强光手电，带爆闪眩晕模式，射程达500米，夜间巡逻必备。',
    specificationEn: '2000 Lumens, IP68 waterproof, Cree XHP50 LED bulb',
    iconName: 'Zap'
  },
  {
    id: 'eq-3',
    nameEn: 'RFID Guard Patrol Wand Checkpoints',
    nameKm: 'ឧបករណ៍ស្កែនដំបង RFID កំណត់ម៉ោងល្បាត',
    nameZh: 'RFID电子巡更打卡棒',
    category: 'Surveillance',
    descriptionEn: 'Waterproof electronic patrol wands that log guard check-in times at perimeter checkpoints for timestamp verification.',
    descriptionKm: 'ឧបករណ៍ស្កែនដំបងអេឡិចត្រូនិច កត់ត្រាពេលវេលាភ្នាក់ងារដើរល្បាតតាមចំណុចនានា មិនអាចបន្លំបាន។',
    descriptionZh: '防水防摔电子巡更棒，感应库区与周界巡更点，生成不容篡改的时间戳报告。',
    specificationEn: '100,000 logs memory, USB auto-upload to portal, shockproof casing',
    iconName: 'QrCode'
  },
  {
    id: 'eq-4',
    nameEn: '4x4 Ford Ranger Rapid Response Fleet',
    nameKm: 'រថយន្តល្បាត 4x4 Ford Ranger អន្តរាគមន៍រហ័ស',
    nameZh: '4x4福特特战巡逻车队',
    category: 'Vehicles',
    descriptionEn: 'Marked 4x4 pickup trucks equipped with GPS live tracking, emergency sirens, roof lightbars, and first-aid kits.',
    descriptionKm: 'រថយន្ត 4x4 មានបិទឡូហ្គោ KNSK ប្រព័ន្ធ GPS តាមដានបន្តផ្ទាល់ ស៊ីរ៉ែនអាសន្ន និងប្រអប់ថ្នាំសង្គ្រោះ។',
    descriptionZh: '带有KNSK官方车身涂装的4x4皮卡车，带卫星定位、警号警灯及综合车载急救包。',
    specificationEn: '2.2L Turbo Diesel 4WD, Real-time GPS Telematics, Emergency Siren System',
    iconName: 'Truck'
  },
  {
    id: 'eq-5',
    nameEn: 'Handheld Walk-Through Metal Detectors',
    nameKm: 'ឧបករណ៍ស្កែនលោហធាតុដៃកាន់',
    nameZh: '手持金属探测器与安检门',
    category: 'Access Screening',
    descriptionEn: 'Precision metal detection wands used at gate entrances to detect concealed blades, iron tools, and prohibited metal objects.',
    descriptionKm: 'ឧបករណ៍ស្កែនលោហធាតុដៃកាន់ សម្រាប់ពិនិត្យស្វែងរកអាវុធ ដែក ឬសម្ភារៈហាមឃាត់នៅច្រកចូល។',
    descriptionZh: '高灵敏度手持金属探测器，有效排除携带管制刀具、铁制工具及违禁金属物件。',
    specificationEn: 'Audio & vibration alert, adjustable sensitivity, 9V rechargeable battery',
    iconName: 'ShieldAlert'
  },
  {
    id: 'eq-6',
    nameEn: 'Personal Protective Equipment (PPE) & High-Vis Vests',
    nameKm: 'ឧបករណ៍ការពារសុវត្ថិភាព PPE & អាវឆ្លុះពន្លឺ',
    nameZh: 'PPE个人防护装备与反光背心',
    category: 'Safety',
    descriptionEn: 'Heavy-duty safety helmets, 3M reflective vests, steel-toed boots, and traffic batons for construction and traffic posts.',
    descriptionKm: 'មួកសុវត្ថិភាព អាវឆ្លុះពន្លឺ 3M ស្បែកជើងក្បាលដែក និងដំបងភ្លើងសញ្ញាចរាចរណ៍។',
    descriptionZh: '防砸安全帽、3M高视认性反光背心、防穿刺钢头鞋及发光指挥棒。',
    specificationEn: 'ANSI Z89.1 certified helmet, Class 2 reflective vest, steel shank boots',
    iconName: 'HardHat'
  }
];

export const SERVICE_FAQS: ServiceFaq[] = [
  {
    id: 'faq-1',
    category: 'deployment',
    qEn: 'How many security guards do I need for my property?',
    qKm: 'តើទីតាំងរបស់ខ្ញុំត្រូវការភ្នាក់ងារសន្តិសុខប៉ុន្មាននាក់?',
    qZh: '我的场地/工厂需要配备多少名安保人员？',
    aEn: 'The required guard count depends on property acreage, number of entrance/exit gates, visitor traffic volume, and risk exposure. K.N.S.K offers a 100% Free On-Site Risk Assessment where our senior operations supervisors evaluate your perimeter and recommend an optimized shift plan.',
    aKm: 'ចំនួនភ្នាក់ងារសន្តិសុខអាស្រ័យលើទំហំទីតាំង ចំនួនច្រកចេញចូល ចំនួនភ្ញៀវ និងកម្រិតហានិភ័យ។ ក្រុមហ៊ុន K.N.S.K មានផ្តល់សេវាកម្មចុះវាយតម្លៃហានិភ័យដល់ទីតាំងដោយឥតគិតថ្លៃ ១០០% ដើម្បីរៀបចំផែនការវេនធ្វើការដ៏សមស្របបំផុត។',
    aZh: '所需人数取决于场地占地面积、出入口数量、访客流量及风险等级。K.N.S.K提供100%免费的上门实地勘测与风险评估，由高级督导为您量身定制最经济高效的人力班次方案。'
  },
  {
    id: 'faq-2',
    category: 'operations',
    qEn: 'Can K.N.S.K security services operate 24 hours a day, 7 days a week?',
    qKm: 'តើសេវាកម្មសន្តិសុខ K.N.S.K អាចប្រចាំការ ២៤ម៉ោង/៧ថ្ងៃ បានឬទេ?',
    qZh: 'K.N.S.K安保服务是否支持24小时/7天不间断值守？',
    aEn: 'Yes! All K.N.S.K guard contracts include 24/7 continuous coverage structured in 12-hour or 8-hour shift rotations. Our 24/7 Central Operations Command monitors shift handovers and guarantees backup guard replacements if anyone calls in sick.',
    aKm: 'បាទ/ចាស ពិតជាបាន! កិច្ចសន្យាសន្តិសុខ K.N.S.K ទាំងអស់រួមបញ្ចូលការប្រចាំការ ២៤ម៉ោង/៧ថ្ងៃ ដោយបែងចែកជាវេន ១២ម៉ោង ឬ ៨ម៉ោង។ មជ្ឈមណ្ឌលបញ្ជាការ ២៤ម៉ោងរបស់យើងខ្ញុំតាមដានការផ្លាស់ប្តូរវេន និងមានភ្នាក់ងារបំរុងជំនួសភ្លាមៗ។',
    aZh: '是的！K.N.S.K所有防范合同均包含24/7全天候不间断值守，采用12小时或8小时轮班制。我们24小时中控指挥中心实时监控交接班，若有队员因病请假，保证备用队员无缝替补上岗。'
  },
  {
    id: 'faq-3',
    category: 'speed',
    qEn: 'How fast can security guards be deployed to my site?',
    qKm: 'តើអាចបញ្ជូនភ្នាក់ងារសន្តិសុខទៅកាន់ទីតាំងរបស់ខ្ញុំបានលឿនប៉ុណ្ណា?',
    qZh: '从签署协议到队员正式进驻需要多久？',
    aEn: 'For standard emergency or short-notice requests in Phnom Penh and major provincial capitals, K.N.S.K can deploy uniformed guards within 24 hours. For large-scale factory or SEZ projects (20+ guards), deployment takes 3 to 5 business days after site orientation.',
    aKm: 'សម្រាប់ករណីប្រញាប់នៅរាជធានីភ្នំពេញ និងទីប្រជុំជនខេត្តធំៗ K.N.S.K អាចបញ្ជូនភ្នាក់ងារក្នុងរយៈពេល ២៤ម៉ោង។ សម្រាប់គម្រោងធំៗដូចជារោងចក្រ ឬតំបន់ SEZ (២០នាក់ឡើង) ការបញ្ជូនប្រើពេលពី ៣ ទៅ ៥ថ្ងៃ បន្ទាប់ពីការចុះពិនិត្យទីតាំង។',
    aZh: '对于金边市及各省会城市的紧急驻守需求，K.N.S.K最快可在24小时内安排队员到岗。对于大型工厂或SEZ园区（20人以上）项目，在完成现场岗前培训后，通常需要3至5个工作日正式平稳进驻。'
  },
  {
    id: 'faq-4',
    category: 'flexibility',
    qEn: 'Can I request temporary guards for short events or exhibitions?',
    qKm: 'តើខ្ញុំអាចជួលសន្តិសុខបណ្តោះអាសន្នសម្រាប់ពិធី ឬពិព័រណ៍រយៈពេលខ្លីបានទេ?',
    qZh: '是否支持短期活动或大型展会的临时安保租赁？',
    aEn: 'Absolutely. K.N.S.K offers flexible temporary guard contracts ranging from 1-day event crowd control to 1-month seasonal construction coverage without requiring long-term minimum commitments.',
    aKm: 'ពិតជាបាន! K.N.S.K មានផ្តល់កិច្ចសន្យាសន្តិសុខបណ្តោះអាសន្នបត់បែន ចាប់ពីពិធី ១ថ្ងៃ រហូតដល់ការដ្ឋាន ១ខែ ដោយមិនមានការចាប់បង្ខំឱ្យធ្វើកិច្ចសន្យាវែងឆ្ងាយឡើយ។',
    aZh: '完全可以。K.N.S.K提供极具弹性的临时安保服务，涵盖从1天的大型演唱会/展会控场，到1个月的季节性工地看管，无需绑定长期固定合同。'
  },
  {
    id: 'faq-5',
    category: 'scaling',
    qEn: 'Can I change or scale the number of guards after signing the agreement?',
    qKm: 'តើខ្ញុំអាចកើន ឬបន្ថយចំនួនភ្នាក់ងារសន្តិសុខក្រោយពេលចុះកិច្ចសន្យាបានទេ?',
    qZh: '签署协议后，是否可以根据业务发展随时增减安保人数？',
    aEn: 'Yes! K.N.S.K agreements are designed for dynamic client scalability. You can scale guard count up or down with 48 hours advance notice, and monthly billing will be adjusted transparently.',
    aKm: 'បាទ/ចាស បាន! កិច្ចសន្យារបស់ K.N.S.K ត្រូវបានបង្កើតឡើងយ៉ាងបត់បែន។ លោកអ្នកអាចជូនដំណឹងមុន ៤៨ម៉ោង ដើម្បីបន្ថែម ឬបន្ថយចំនួនភ្នាក់ងារ ហើយវិក្កយបត្រប្រចាំខែនឹងត្រូវកែសម្រួលទៅតាមនោះ។',
    aZh: '当然可以！K.N.S.K的合作协议具备极高灵活性。您只需提前48小时书面通知我们，即可随时增加或缩减队员编制，月度结算账单将按实到位人数透明调整。'
  },
  {
    id: 'faq-6',
    category: 'qa',
    qEn: 'How often do K.N.S.K mobile supervisors conduct site inspection visits?',
    qKm: 'តើប្រធានក្រុមត្រួតពិនិត្យ K.N.S.K ចុះពិនិត្យទីតាំងញឹកញាប់ប៉ុណ្ណា?',
    qZh: 'K.N.S.K巡查督导多久对现场岗点进行一次抽查？',
    aEn: 'K.N.S.K mobile supervisors conduct random site inspections at least twice during day shifts and twice during night shifts every single day. Supervisors inspect guard alertness, uniform neatness, logbooks, and submit digital audit logs to management.',
    aKm: 'ប្រធានក្រុមត្រួតពិនិត្យចល័ត K.N.S.K ចុះពិនិត្យទីតាំងដោយមិនប្រាប់ឱ្យដឹងមុន យ៉ាងហោចណាស់ ២ដងក្នុងវេនថ្ងៃ និង ២ដងក្នុងវេនយប់ជារៀងរាល់ថ្ងៃ ដើម្បីពិនិត្យភាពភ្ញាក់រលឹក ឯកសណ្ឋាន និងសៀវភៅកត់ត្រា។',
    aZh: 'K.N.S.K机动督导每天白班至少2次、夜班至少2次对所有执勤岗点进行随机查岗。重点检查队员在岗精神状态、着装仪容、巡更记录及安全隐患，并实时上传督导报告。'
  }
];

