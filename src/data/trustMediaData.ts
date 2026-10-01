import patrolTruckImg from '../assets/images/KNSK_Patrol.jpg';
import patrolCommandImg from '../assets/images/KNSK_Operations.jpg';
import mannedGuardingImg from '../assets/images/KNSK_Guards.jpg';
import guardFormationImg from '../assets/images/KNSK_Team.jpg';
import companyOfficeImg from '../assets/images/KNSK_Headquarters.jpg';

export interface MultilingualText {
  en: string;
  km: string;
  zh: string;
}

export interface VideoItem {
  id: string;
  title: MultilingualText;
  description: MultilingualText;
  category: 'intro' | 'training' | 'operations' | 'promo';
  duration: string;
  thumbnailUrl: string;
  videoUrl?: string;
  publishedDate: string;
}

export interface KnowledgeArticle {
  id: string;
  title: MultilingualText;
  excerpt: MultilingualText;
  content: MultilingualText[];
  category: 'business' | 'factory' | 'hotel' | 'residential' | 'construction' | 'tips' | 'emergency' | 'workplace';
  readTime: string;
  author: MultilingualText;
  date: string;
  imageUrl: string;
  keyTakeaways: MultilingualText[];
}

export interface FaqItem {
  id: string;
  category: string;
  question: MultilingualText;
  answer: MultilingualText;
}

// 1. VIDEOS DATA
export const OFFICIAL_VIDEOS: VideoItem[] = [
  {
    id: 'vid-intro-2025',
    title: {
      en: 'K.N.S.K Security Corporate Video Brochure 2025',
      km: 'វីដេអូណែនាំក្រុមហ៊ុនសន្តិសុខ K.N.S.K ២០២៥',
      zh: 'K.N.S.K 2025年企业宣传与安全保障专题片',
    },
    description: {
      en: 'Official company overview presenting K.N.S.K nationwide operations, professional guard deployments, 24/7 radio command center, and 4x4 mobile patrol fleet.',
      km: 'វីដេអូបង្ហាញពីប្រតិបត្តិការទូទាំងប្រទេស២៥ខេត្ត កម្លាំងសន្តិសុខវិជ្ជាជីវៈ មជ្ឈមណ្ឌលបញ្ជាការ២៤ម៉ោង និងក្រុមរថយន្តល្បាត 4x4។',
      zh: '官方企业专题片，展示K.N.S.K覆盖全国25个省市的安保网络、专业正规队员、24小时指挥中心及4x4巡逻车队。',
    },
    category: 'intro',
    duration: '03:45',
    thumbnailUrl: companyOfficeImg,
    publishedDate: 'January 2025',
  },
  {
    id: 'vid-training-drill',
    title: {
      en: 'Guard Tactical Drill & Physical Academy Demonstration',
      km: 'ការបណ្តុះបណ្តាលក្បួនវិន័យ និងការហ្វឹកហាត់កាយសម្បទា',
      zh: '安保队员队列纪律与体能特训科目实录',
    },
    description: {
      en: 'Inside look at K.N.S.K drill academy in Sen Sok. Watch our guards practice access control, crowd management, fire safety, and emergency CPR.',
      km: 'សកម្មភាពហ្វឹកហាត់ក្បួនវិន័យ ការគ្រប់គ្រងច្រកទ្វារ ការពន្លត់អគ្គិភ័យ និងការសង្គ្រោះបឋមនៅសាលាហ្វឹកហាត់សែនសុខ។',
      zh: '直击森速训练基地，展示队员在出入口管控、人群疏导、消防演练及心肺复苏急救中的专业表现。',
    },
    category: 'training',
    duration: '04:12',
    thumbnailUrl: guardFormationImg,
    publishedDate: 'February 2025',
  },
  {
    id: 'vid-patrol-night',
    title: {
      en: 'Night Patrol & 24/7 Radio Command Dispatching',
      km: 'សកម្មភាពល្បាតយប់ និងការបញ្ជាតាមវិទ្យុទាក់ទង ២៤/៧',
      zh: '24小时夜间巡逻与指挥调度实况',
    },
    description: {
      en: 'Real-time nighttime inspection by K.N.S.K field supervisors conducting unannounced guard checks and rapid dispatch coordination.',
      km: 'សកម្មភាពចុះត្រួតពិនិត្យគោលដៅយប់ចៃដន្យដោយមេការ និងការទាក់ទងតាមវិទ្យុ ICOM ជាមួយមជ្ឈមណ្ឌលបញ្ជាការ។',
      zh: '巡逻督导夜间突击查岗实录，展示ICOM无线电联络与突发事件快速响应机制。',
    },
    category: 'operations',
    duration: '02:50',
    thumbnailUrl: patrolTruckImg,
    publishedDate: 'March 2025',
  },
  {
    id: 'vid-smart-ai-promo',
    title: {
      en: 'Phase II Smart AI CCTV & Electronic Wand Technology',
      km: 'បច្ចេកវិទ្យាកាមេរ៉ា AI & ដំបងស្កែន Patrol GPS ជំនាន់ទី ២',
      zh: '第二阶段AI智能监控与电子巡更系统展望',
    },
    description: {
      en: 'Preview of K.N.S.K Phase II digital platform integrating facial recognition, automatic vehicle plate scanner, and mobile guard GPS wands.',
      km: 'ការបង្ហាញពីប្រព័ន្ធ AI កាមេរ៉ាស្កែនមុខ ស្កែនផ្លាកលេខរថយន្ត និងដំបងស្កែន Guard Wand សម្រាប់អតិថិជន។',
      zh: '预览K.N.S.K第二阶段数字平台，集成人脸识别、车牌抓拍及手持巡更打卡系统。',
    },
    category: 'promo',
    duration: '02:15',
    thumbnailUrl: mannedGuardingImg,
    publishedDate: 'April 2025',
  },
];

// 2. KNOWLEDGE CENTER ARTICLES DATA
export const KNOWLEDGE_ARTICLES: KnowledgeArticle[] = [
  {
    id: 'art-factory-loss-prevention',
    title: {
      en: 'Factory Security & Anti-Theft Protocol: Protecting Industrial Supply Chains in Cambodia',
      km: 'វិធានការសន្តិសុខ និងការទប់ស្កាត់ការចោរកម្មក្នុងរោងចក្រ៖ ការពារសង្វាក់ផលិតកម្មនៅកម្ពុជា',
      zh: '柬埔寨工业厂房安防与防盗清查规程：保障工业供应链安全',
    },
    excerpt: {
      en: 'Key strategies for garment, footwear, and electronics factories to eliminate inventory loss, audit worker shift changes, and manage truck loading bays.',
      km: 'យុទ្ធសាស្ត្រសំខាន់ៗសម្រាប់រោងចក្រកាត់ដេរ និងអេឡិចត្រូនិក ក្នុងការទប់ស្កាត់ការបាត់បង់ទំនិញ ការពិនិត្យកម្មករ និងការគ្រប់គ្រងច្រកទ្វារ។',
      zh: '针对服装、鞋业及电子厂房防范物料流失、员工上下班搜检及货车进出查验的核心实操指南。',
    },
    category: 'factory',
    readTime: '6 min read',
    author: {
      en: 'SOME SOENG & K.N.S.K Operations Team',
      km: 'លោកនាយក ស៊ឹម ស៊ឹង និងក្រុមការងារ K.N.S.K',
      zh: 'SOME SOENG 董事与 K.N.S.K 运营指挥组',
    },
    date: 'May 2025',
    imageUrl: patrolCommandImg,
    keyTakeaways: [
      {
        en: 'Implement strict 100% baggage and vehicle trunk searches at facility exit gates.',
        km: 'អនុវត្តការពិនិត្យកាតាប និងគូទឡាន ១០០% នៅពេលចេញពីច្រកទ្វាររោងចក្រ។',
        zh: '在厂区大门出入口实行100%开包与车辆后备箱搜检规程。',
      },
      {
        en: 'Maintain dual-verification delivery note logs for raw materials and container loading.',
        km: 'ពិនិត្យ និងចុះហត្ថលេខាលើលិខិតដឹកជញ្ជូនទំនិញពីរតង់ (Dual Verification)។',
        zh: '对原材料进厂与集装箱封条实行双人签字复核登记。',
      },
      {
        en: 'Deploy randomized night patrol wand checks around perimeter fencing.',
        km: 'ប្រើប្រាស់ដំបងស្កែន Patrol Wand ដើរស្កែនតាមរបងជុំវិញរោងចក្រទាំងយប់។',
        zh: '在厂区围墙周界设置电子打卡点，实施不定期夜间巡更。',
      },
    ],
    content: [
      {
        en: 'Industrial security in Cambodia requires more than passive presence. Manufacturing plants in Special Economic Zones (SEZs) face constant risks from internal pilferage, unauthorized vehicle access, and fire hazards. K.N.S.K Security deploys trained officers equipped with metal detectors and mirror inspection wands to inspect undercarriages.',
        km: 'សន្តិសុខរោងចក្រនៅកម្ពុជាទាមទារនូវការយកចិត្តទុកដាក់ខ្ពស់។ រោងចក្រនៅក្នុងតំបន់សេដ្ឋកិច្ចពិសេសប្រឈមនឹងការបាត់បង់ទំនិញ និងគ្រោះអគ្គិភ័យ។ K.N.S.K បំពាក់ឧបករណ៍ស្កែនលោហៈ និងកញ្ចក់ឆ្លុះក្រោមបាតឡាន ដើម្បីធានាសុវត្ថិភាព។',
        zh: '柬埔寨的工业安防绝非简单的看门守户。经济特区（SEZ）内的制造企业面临着内盗、未经授权车辆出入及火灾隐患的多重挑战。K.N.S.K安保派遣配有金属探测器与底盘搜检镜的特训队员，全面把控出入口。',
      },
      {
        en: 'By establishing clear shift-change protocols, logging seal numbers on container trucks, and maintaining direct radio communications with provincial police stations, factory managers can ensure 0% inventory loss and seamless compliance with international buyer safety audits.',
        km: 'តាមរយៈការកំណត់បទបញ្ជាវេនការងារ ចុះលេខស៊ើលកុងតឺន័រ និងទាក់ទងជាមួយស្នងការដ្ឋាននគរបាលខេត្ត ម្ចាស់រោងចក្រអាចធានាបាននូវការបាត់បង់ ០% និងឆ្លងកាត់ការពិនិត្យស្តង់ដារអន្តរជាតិ។',
        zh: '通过建立清晰的换班接替规程、集装箱铅封双向登记以及与省警察局建立直通无线电频段，工厂管理者可实现物料零流失，轻松应对国际买家的验厂稽核。',
      },
    ],
  },
  {
    id: 'art-bank-atm-protection',
    title: {
      en: 'Financial Facility & ATM Vault Protection Protocols',
      km: 'ស្តង់ដារការពារសុវត្ថិភាពធនាគារ និងទូ ATM',
      zh: '商业银行与ATM金库级安防等级规范',
    },
    excerpt: {
      en: 'How bank branches and ATM booths maintain high-visibility armed deterrents, customer queue safety, and cash replenishment escorting.',
      km: 'របៀបដែលសាខាធនាគារ និងទូ ATM រក្សាវិន័យខ្ពស់ ការពារសុវត្ថិភាពអតិថិជន និងការការពារពេលបញ្ជូនប្រាក់។',
      zh: '阐述商业银行网点与独立ATM机如何保持高度警惕、出入口排队管控及武装押运对接规范。',
    },
    category: 'business',
    readTime: '5 min read',
    author: {
      en: 'K.N.S.K Banking Security Bureau',
      km: 'នាយកដ្ឋានសន្តិសុខធនាគារ K.N.S.K',
      zh: 'K.N.S.K 银行与金融安防专责组',
    },
    date: 'April 2025',
    imageUrl: mannedGuardingImg,
    keyTakeaways: [
      {
        en: 'Guards must maintain active posture at branch entrances with full visibility of parking zones.',
        km: 'ភ្នាក់ងារត្រូវឈរក្នុងឥរិយាបថរឹងមាំនៅមុនច្រកទ្វារធនាគារ និងមើលថែទាំកន្លែងចតយានយន្ត។',
        zh: '安保人员须在银行门厅保持高警惕姿态，并密切关注门前停放车辆与人员。',
      },
      {
        en: 'Mandatory ID checks for any contractors accessing backend server rooms or vaults.',
        km: 'ពិនិត្យអត្តសញ្ញាណប័ណ្ណយ៉ាងម៉ត់ចត់ចំពោះអ្នកបច្ចេកទេសចូលបន្ទប់ម៉ាស៊ីន ឬបន្ទប់សុវត្ថិភាព។',
        zh: '对所有进入金库、服务器重地维修的技术人员进行严格身份核查与随行陪同。',
      },
    ],
    content: [
      {
        en: 'Financial institutions in Cambodia require officers trained in high-alert observation, customer guidance, and swift armed robbery prevention. Our bank guards receive specialized training in recognizing suspicious behavior and coordinating with Cash-In-Transit (CIT) armored teams.',
        km: 'ស្ថាប័នហិរញ្ញវត្ថុនៅកម្ពុជាត្រូវការភ្នាក់ងារដែលមានការប្រុងប្រយ័ត្នខ្ពស់ និងច្បាស់លាស់ពីការការពារអតិថិជន។ ភ្នាក់ងារសន្តិសុខធនាគាររបស់ K.N.S.K ទទួលបានការបណ្តុះបណ្តាលពិសេសក្នុងការកត់សម្គាល់សកម្មភាពសង្ស័យ។',
        zh: '柬埔寨的金融机构需要经过高警惕观察特训、礼貌引导客户及能快速应对突发警情的安保人员。我们的银行驻点队员接受过识别异常人员行为及与武装押运车队高效接应的专门培训。',
      },
    ],
  },
  {
    id: 'art-hotel-concierge-safety',
    title: {
      en: 'Hotel & Resort Hospitality Security: Blending Safety with 5-Star Customer Service',
      km: 'សន្តិសុខសណ្ឋាគារ និងរីស៊ត៖ ការពារសុវត្ថិភាព និងបម្រើអតិថិជនកម្រិតផ្កាយ ៥',
      zh: '酒店与度假村安保指南：融合安全保障与五星级优雅礼仪',
    },
    excerpt: {
      en: 'Balancing discreet access management, luggage screening, VIP guest escorting, and emergency pool/fire evacuation procedures in luxury resorts.',
      km: 'ការរក្សាសុវត្ថិភាពដោយមិនប៉ះពាល់ដល់ភាពស្ងប់ស្ងាត់របស់ភ្ញៀវ ការពិនិត្យវ៉ាលី និងការជួយសង្គ្រោះពេលមានអាសន្ន។',
      zh: '如何在奢华酒店中实现隐形安防管理、行李安全搜检、VIP贵宾随行及泳池/消防急救预案。',
    },
    category: 'hotel',
    readTime: '4 min read',
    author: {
      en: 'Hospitality Security Unit',
      km: 'ក្រុមការងារសន្តិសុខសណ្ឋាគារ',
      zh: '酒店与高端接待安保组',
    },
    date: 'March 2025',
    imageUrl: companyOfficeImg,
    keyTakeaways: [
      {
        en: 'Polite, bilingual greeting at main entrance combined with discrete baggage scanning.',
        km: 'ការស្វាគមន៍ភ្ញៀវដោយសីលធម៌ និងភាសាបរទេស រួមជាមួយការស្កែនវ៉ាលី។',
        zh: '在大堂入口实施三语礼貌问候与隐蔽式行李过检。',
      },
      {
        en: 'Water safety CPR certification for resort pool and beachfront guards.',
        km: 'ភ្នាក់ងារសន្តិសុខប្រចាំអាងហែលទឹកត្រូវមានសញ្ញាបត្រ CPR សង្គ្រោះក្នុងទឹក។',
        zh: '度假村泳池与沙滩岗位的队员均持有急救与水上救生认证。',
      },
    ],
    content: [
      {
        en: 'Guests visiting Siem Reap, Phnom Penh, and Sihanoukville hotels expect total peace of mind. K.N.S.K officers assigned to hospitality venues are dressed in sharp suits or formal uniform, trained in cross-cultural communication, and adept at managing crowd flow during high-profile galas.',
        km: 'ភ្ញៀវទេសចរដែលមកកាន់សៀមរាប ភ្នំពេញ និងព្រះសីហនុ ត្រូវការភាពស្ងប់ស្ងាត់។ ភ្នាក់ងារសន្តិសុខ K.N.S.K ប្រចាំសណ្ឋាគារស្លៀកពាក់ស្អាតបាត និយាយភាសាបរទេសបាន និងយល់ដឹងពីសីលធម៌។',
        zh: '入住暹粒、金边及西哈努克高端酒店的各国贵宾追求极致的安全与尊贵体验。K.N.S.K派遣至酒店的队员穿着整洁正装制服，具备跨文化沟通能力与高规格宴会秩序维护经验。',
      },
    ],
  },
  {
    id: 'art-construction-site-security',
    title: {
      en: 'Construction Site Loss Prevention & Worker Badge Verification',
      km: 'សន្តិសុខការដ្ឋានសំណង់៖ ការពារការបាត់បង់គ្រឿងចក្រ និងសម្ភារសំណង់',
      zh: '施工工地与建筑大厦物料防盗及工人佩卡出入规程',
    },
    excerpt: {
      en: 'Managing heavy equipment access, copper wire theft prevention, and sub-contractor ID verification on high-rise building projects.',
      km: 'ការគ្រប់គ្រងគ្រឿងចក្រ ការពារការលួចខ្សែភ្លើង និងការពិនិត្យប័ណ្ណសម្គាល់ខ្លួនកម្មករសំណង់។',
      zh: '大型高层建筑工地重型机械出入审批、铜线电缆防盗及分包商工人佩卡考勤管理规程。',
    },
    category: 'construction',
    readTime: '5 min read',
    author: {
      en: 'Field Operations Patrol Division',
      km: 'នាយកដ្ឋានប្រតិបត្តិការល្បាតការដ្ឋាន',
      zh: '工地与工程项目安保巡检组',
    },
    date: 'February 2025',
    imageUrl: patrolTruckImg,
    keyTakeaways: [
      {
        en: 'Daily material log checking against official site engineer delivery dockets.',
        km: 'ផ្ទៀងផ្ទាត់បញ្ជីសម្ភារចេញ-ចូល ជាមួយលិខិតបញ្ជាពីវិស្វករការដ្ឋាន។',
        zh: '每日出场物料须严格核对现场工程师开具的通行放行单。',
      },
      {
        en: 'Mandatory PPE safety helmet and vest enforcement at all perimeter entry gates.',
        km: 'តម្រូវឲ្យពាក់មួក និងអាវសុវត្ថិភាព PPE ១០០% នៅច្រកចូលការដ្ឋាន។',
        zh: '在大门处强制执行100%佩戴安全帽及穿反光背心出入规定。',
      },
    ],
    content: [
      {
        en: 'Construction sites contain millions of dollars in steel, copper cables, and heavy machinery. Without strict 24/7 static perimeter guarding and night dog/patrol sweeps, sites suffer costly project delays. K.N.S.K establishes gate access control, vehicle exit material checks, and regular supervisor night visits.',
        km: 'ការដ្ឋានសំណង់មានសម្ភារមានតម្លៃរាប់លានដុល្លារដូចជា ដែក ខ្សែភ្លើង និងគ្រឿងចក្រ។ ប្រសិនបើគ្មានសន្តិសុខប្រចាំការ ២៤ម៉ោង ការដ្ឋាននឹងជួបការខាតបង់។ K.N.S.K ផ្តល់ដំណោះស្រាយការពាររ៉ឹងប៉ឹង។',
        zh: '高层建筑工地存放着价值昂贵的钢筋、铜缆线与重型机械设备。若缺乏24小时严密驻点与夜间巡查，极易招致严重损失并拖延工期。K.N.S.K通过严格的门禁考勤、物料放行查验与夜间查岗为您保驾护航。',
      },
    ],
  },
];

// 5. CENTRAL FAQ DATA
export const CENTRAL_FAQS = [
  {
    id: 'faq-1',
    category: 'quotation',
    question: {
      en: 'How do I request a security quotation or formal proposal for my company?',
      km: 'តើខ្ញុំអាចស្នើសុំសម្រង់តម្លៃ ឬសំណើសេវាកម្មសន្តិសុខសម្រាប់ក្រុមហ៊ុនខ្ញុំដោយរបៀបណា?',
      zh: '我该如何为我的项目场地申请安保服务报价与正式方案？',
    },
    answer: {
      en: 'You can request a free proposal by using our Quotation Calculator tool on this platform, calling our 24/7 hotline at 096 483 8666, messaging our official Telegram (@KNSK_security), or emailing soengknsk@gmail.com. Our operations team provides free site surveys and submits detailed proposals within 24 hours.',
      km: 'លោកអ្នកអាចស្នើសុំសម្រង់តម្លៃដោយឥតគិតថ្លៃតាមរយៈ "ប្រព័ន្ធគណនាតម្លៃ" លើគេហទំព័រនេះ ទាក់ទងទូរស័ព្ទ ២៤ម៉ោង 096 483 8666 ផ្ញើសារតាម Telegram (@KNSK_security) ឬអ៊ីមែល soengknsk@gmail.com។ ក្រុមការងារយើងខ្ញុំនឹងចុះពិនិត្យទីតាំងដោយឥតគិតថ្លៃ និងផ្ញើសម្រង់តម្លៃជូនក្នុងរយ:ពេល ២៤ម៉ោង។',
      zh: '您可以通过本平台的“在线报价计算器”提交需求，致电24小时热线 096 483 8666，发送官方Telegram (@KNSK_security) 或发送邮件至 soengknsk@gmail.com。我们的运营团队将免费上门勘察场地，并在24小时内提供正式书面方案。',
    },
  },
  {
    id: 'faq-2',
    category: 'deployment',
    question: {
      en: 'How quickly can K.N.S.K deploy security guards after contract signing?',
      km: 'តើ K.N.S.K អាចបញ្ជូនភ្នាក់ងារសន្តិសុខទៅឈរជើងលឿនប៉ុណ្ណា ក្រោយចុះកិច្ចសន្យា?',
      zh: '签署服务合同后，K.N.S.K 最快多久能安排安保人员进场驻守？',
    },
    answer: {
      en: 'For standard guard posts in Phnom Penh and major provincial capitals, deployment can occur within 12 to 24 hours. Emergency stand-by guards or VIP escorts can be dispatched in 2 to 4 hours.',
      km: 'សម្រាប់គោលដៅទូទៅនៅភ្នំពេញ និងតាមខេត្ត យើងខ្ញុំអាចបញ្ជូនសន្តិសុខទៅឈរជើងក្នុងរយ:ពេល ១២ ទៅ ២៤ម៉ោង។ ករណីអាសន្ន ឬការពារ VIP អាចចេញអន្តរាគមន៍ក្នុងរយ:ពេល ២ ទៅ ៤ម៉ោង។',
      zh: '对于金边及各主要省会的常规驻点，可在12至24小时内安排人员进场接管。对于紧急备勤或要员随行，可在2至4小时内迅速增派到位。',
    },
  },
  {
    id: 'faq-3',
    category: 'service_hours',
    question: {
      en: 'Do you provide 24/7 continuous guarding with night supervisor inspections?',
      km: 'តើ K.N.S.K ផ្តល់សេវាសន្តិសុខប្រចាំការ ២៤ម៉ោង និងមានការចុះពិនិត្យយប់ដែរឬទេ?',
      zh: '你们是否提供24小时不间断驻点，并配有夜间督导巡查？',
    },
    answer: {
      en: 'Yes! We offer 12-hour day/night shift rotations or 24/7 static coverage. Every post is monitored via hourly radio roll-calls and unannounced night supervisor spot-checks in 4x4 patrol pickup trucks.',
      km: 'បាទ/ចាស! យើងខ្ញុំមានសេវាសន្តិសុខដូរវេន ១២ម៉ោង (ថ្ងៃ/យប់) ឬប្រចាំការ ២៤/៧។ គ្រប់គោលដៅទាំងអស់ត្រូវ បានឆែកវិទ្យុទាក់ទងរៀងរាល់ម៉ោង និងមានមេការជិះរថយន្ត 4x4 ចុះពិនិត្យទាំងយប់ដោយមិនប្រាប់មុន។',
      zh: '是的。我们提供12小时日夜轮班或24/7全天候驻点。所有岗位均进行每小时无线电打卡，并由巡逻车队夜间突击抽查，确保无遗漏。',
    },
  },
  {
    id: 'faq-4',
    category: 'industries',
    question: {
      en: 'Which industries and property types does K.N.S.K protect?',
      km: 'តើ K.N.S.K ផ្តល់សេវាកម្មការពារលើវិស័យ និងប្រភេទអគារអ្វីខ្លះ?',
      zh: 'K.N.S.K 安保服务涵盖哪些行业与场地类型？',
    },
    answer: {
      en: 'We serve commercial office towers, banks & ATMs, industrial factories & warehouses in SEZs, gated residential boreys, luxury hotels & resorts, embassies, construction sites, and corporate galas.',
      km: 'យើងខ្ញុំការពារអគារពាណិជ្ជកម្ម ធនាគារ និងទូ ATM រោងចក្រ និងឃ្លាំងទំនិញ បុរីរស់នៅ សណ្ឋាគារ និងរីស៊ត ស្ថានទូត ការដ្ឋានសំណង់ និងពិធីរៀបចំសង្គមធំៗ។',
      zh: '我们全面覆盖写字楼、商业银行与ATM、经济特区工厂与仓库、住宅封闭式小区、奢华酒店与度假村、外国驻柬使馆、建筑工地及大型商业公关活动。',
    },
  },
  {
    id: 'faq-5',
    category: 'recruitment',
    question: {
      en: 'How do I apply for a security guard job with K.N.S.K?',
      km: 'តើខ្ញុំអាចដាក់ពាក្យធ្វើជាភ្នាក់ងារសន្តិសុខនៅ K.N.S.K ដោយរបៀបណា?',
      zh: '我该如何应聘 K.N.S.K 的安保队员岗位？',
    },
    answer: {
      en: 'Applicants aged 18 to 48 with clean police records can apply directly via our online Recruitment Portal on this website, visit our Phnom Penh headquarters, message our official Telegram (@KNSK_security), or call HR at 093 878 666 / 096 483 8666 / 060 878 666.',
      km: 'បេក្ខជនដែលមានអាយុ ១៨ ដល់ ៤៨ឆ្នាំ គ្មានប្រវត្តិកើនទោស អាចដាក់ពាក្យតាម "ប្រព័ន្ធជ្រើសរើសបុគ្គលិក" លើគេហទំព័រនេះ មកកាន់អគារការិយាល័យកណ្តាលរាជធានីភ្នំពេញ ផ្ញើសារតាម Telegram (@KNSK_security) ឬទាក់ទងលេខ 093 878 666 / 096 483 8666 / 060 878 666។',
      zh: '年龄在18至48岁之间、无犯罪记录的求职者可通过本网站的“招贤纳士”通道线上报名，亲临金边总部大楼招聘处，发送官方Telegram (@KNSK_security) 或拨打HR热线 093 878 666 / 096 483 8666 / 060 878 666。',
    },
  },
  {
    id: 'faq-6',
    category: 'operations',
    question: {
      en: 'How can I contact K.N.S.K Operations Command during an emergency?',
      km: 'តើខ្ញុំអាចទាក់ទងទៅកាន់បញ្ជាការដ្ឋានប្រតិបត្តិការ K.N.S.K ដោយរបៀបណា ពេលមានអាសន្ន?',
      zh: '遇有突发紧急情况，如何第一时间联系 K.N.S.K 运营指挥中心？',
    },
    answer: {
      en: 'Call our 24/7 dedicated Emergency Hotline at 096 483 8666, 093 878 666, or 060 878 666 immediately, or contact via official Telegram (@KNSK_security). Our radio dispatch operators will send the nearest 4x4 mobile patrol pickup truck to your location.',
      km: 'សូមទូរស័ព្ទមកកាន់លេខអាសន្ន ២៤ម៉ោង 096 483 8666, 093 878 666 ឬ 060 878 666 ជាបន្ទាន់ ឬទាក់ទងតាម Telegram (@KNSK_security)។ មជ្ឈមណ្ឌលបញ្ជាការនឹងបញ្ជូនរថយន្តល្បាត 4x4 ដែលនៅជិតបំផុតទៅជួយអន្តរាគមន៍។',
      zh: '请立即致电24小时紧急热线 096 483 8666、093 878 666 或 060 878 666，或通过官方 Telegram (@KNSK_security) 联系。指挥中心无线电调度员将即刻派出一线距离最近的4x4巡逻车赶往现场。',
    },
  },
  {
    id: 'faq-7',
    category: 'temporary',
    question: {
      en: 'Can I request temporary security guards for short-term events or construction phases?',
      km: 'តើខ្ញុំអាចស្នើសុំភ្នាក់ងារសន្តិសុខបណ្តោះអាសន្នសម្រាប់ពិធីបុណ្យ ឬការដ្ឋានសំណង់ខ្លីៗបានទេ?',
      zh: '是否可以为短期展会、临时活动或工程阶段性需求增派临时安保？',
    },
    answer: {
      en: 'Yes. We provide flexible daily, weekly, or event-based temporary security packages for exhibitions, concerts, VIP visits, and short-term site protection without long-term penalty clauses.',
      km: 'បាទ/ចាស! យើងខ្ញុំមានកញ្ចប់សេវាសន្តិសុខបណ្តោះអាសន្នជាថ្ងៃ ជាសប្តាហ៍ ឬតាមកម្មវិធីពិធីបុណ្យ ពិព័រណ៍ និងការការពាររយៈពេលខ្លី ដោយគ្មានការពិន័យ។',
      zh: '是的。我们提供极为灵活的按日、按周或按活动场次发包的临时安保服务，涵盖商业展会、演唱会、VIP考察及短期工地，且无违约罚款项。',
    },
  },
];
