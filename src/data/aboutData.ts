export interface MultilingualText {
  en: string;
  km: string;
  zh: string;
}

export interface CoreValue {
  id: string;
  title: MultilingualText;
  subtitle: MultilingualText;
  description: MultilingualText;
  iconName: string;
}

export interface FacilityItem {
  id: string;
  title: MultilingualText;
  category: string;
  imageUrl: string;
  description: MultilingualText;
  highlights: MultilingualText[];
}

export interface WhyChooseItem {
  id: string;
  title: MultilingualText;
  description: MultilingualText;
  knskStandard: MultilingualText;
  industryStandard: MultilingualText;
  iconName: string;
}

export interface FAQItem {
  id: string;
  category: string;
  question: MultilingualText;
  answer: MultilingualText;
}

export const CORE_VALUES: CoreValue[] = [
  {
    id: 'professionalism',
    title: {
      en: 'Professionalism',
      km: 'វិជ្ជាជីវៈ',
      zh: '专业精神',
    },
    subtitle: {
      en: 'Uniformed Discipline & Tactical Etiquette',
      km: 'វិន័យឯកសណ្ឋាន និងការប្រកួតប្រជែងខ្ពស់',
      zh: '严明纪律与专业仪态',
    },
    description: {
      en: 'Every officer maintains crisp uniform standards, polite customer etiquette, and military-grade guard post alertness at all times.',
      km: 'ភ្នាក់ងារសន្តិសុខគ្រប់រូបរក្សាស្តង់ដារឯកសណ្ឋានស្អាតបាត សីលធម៌សមរម្យ និងស្មារតីប្រុងប្រយ័ត្នខ្ពស់នៅគ្រប់គោលដៅ។',
      zh: '每位安保队员始终保持整洁的服装仪容、礼貌的服务态度和高度的岗哨警惕性。',
    },
    iconName: 'Shield',
  },
  {
    id: 'integrity',
    title: {
      en: 'Integrity',
      km: 'ភាពស្មោះត្រង់',
      zh: '诚信至上',
    },
    subtitle: {
      en: 'Uncompromising Honesty & Ethics',
      km: 'ភាពស្មោះត្រង់ និងក្រមសីលធម៌ការងារ',
      zh: '廉洁奉公与恪守职业道德',
    },
    description: {
      en: 'We execute thorough National Police background checks for every guard, guaranteeing transparent, honest, and tamper-proof protection.',
      km: 'យើងពិនិត្យប្រវត្តិរូបយ៉ាងលម្អិតជាមួយអគ្គស្នងការដ្ឋាននគរបាលជាតិ ដោយធានាបាននូវភាពស្មោះត្រង់ និងគ្មានប្រវត្តិកើនទោស។',
      zh: '我们对每名员工进行严格的国家警察局无犯罪记录审查，确保诚实守信、恪尽职守。',
    },
    iconName: 'CheckCircle2',
  },
  {
    id: 'trust',
    title: {
      en: 'Trust',
      km: 'ទំនុកចិត្ត',
      zh: '值得信赖',
    },
    subtitle: {
      en: 'Proven Reliability for Top Institutions',
      km: 'ការទុកចិត្តពីធនាគារ និងស្ថានទូត',
      zh: '顶级机构的共同选择',
    },
    description: {
      en: 'Earning long-term partnerships with leading Cambodian banks, foreign embassies, international schools, and luxury commercial towers.',
      km: 'ទទួលបានការទុកចិត្តរយៈពេលវែងពីធនាគារធំៗ ស្ថានទូតបរទេស សាលារៀនអន្តរជាតិ និងអគារពាណិជ្ជកម្មទំនើប។',
      zh: '赢得柬埔寨主流银行、外国使馆、国际学校及奢华商业大厦的长期信赖与合作。',
    },
    iconName: 'Lock',
  },
  {
    id: 'respect',
    title: {
      en: 'Respect',
      km: 'ការគោរព',
      zh: '相互尊重',
    },
    subtitle: {
      en: 'Dignity for Clients, Guests & Guards',
      km: 'ការគោរពអតិថិជន ភ្ញៀវ និងសិទ្ធិបុគ្គលិក',
      zh: '尊重大众与保护员工权益',
    },
    description: {
      en: 'Treating all clients, visitors, and security personnel with dignity, politeness, and cross-cultural understanding.',
      km: 'ប្រព្រឹត្តចំពោះអតិថិជន ភ្ញៀវ និងបុគ្គលិកសន្តិសុខទាំងអស់ដោយការគោរព សីលធម៌ល្អ និងការយល់ដឹងអំពីវប្បធម៌។',
      zh: '以礼貌、尊重和跨文化包容的态度对待每位客户、访客及安保队员。',
    },
    iconName: 'HeartHandshake',
  },
  {
    id: 'responsibility',
    title: {
      en: 'Responsibility',
      km: 'ការទទួលខុសត្រូវ',
      zh: '高度负责',
    },
    subtitle: {
      en: 'Standardized SOPs & Operational Rigor',
      km: 'ការទទួលខុសត្រូវខ្ពស់ និងវិន័យតឹងរ៉ឹង',
      zh: '全天候督导与严密执勤规范',
    },
    description: {
      en: 'Full operational accountability supported by standardized post orders and 24/7 supervisor oversight on every shift.',
      km: 'ទទួលខុសត្រូវពេញលេញចំពោះសុវត្ថិភាពទ្រព្យសម្បត្តិ ដោយមានការចុះត្រួតពិនិត្យ និងតាមដានពីមេការ២៤ម៉ោង។',
      zh: '通过标准化岗位守则与24小时全天候巡查督导，切实保障客户场地秩序与财产安全。',
    },
    iconName: 'Award',
  },
  {
    id: 'teamwork',
    title: {
      en: 'Teamwork',
      km: 'ការងារជាក្រុម',
      zh: '团队协作',
    },
    subtitle: {
      en: 'Field Guards & Central Dispatch Sync',
      km: 'កិច្ចសហការរវាងភ្នាក់ងារ និងមជ្ឈមណ្ឌល',
      zh: '一线队员与指挥中心高效联动',
    },
    description: {
      en: 'Seamless radio coordination between on-site guards, mobile patrol units, and central dispatch supervisors during all incidents.',
      km: 'ការសម្របសម្រួលតាមវិទ្យុទាក់ទងយ៉ាងរលូនរវាងសន្តិសុខឈរជើង ក្រុមល្បាត និងមជ្ឈមណ្ឌលបញ្ជាការពេលមានហេតុការណ៍។',
      zh: '现场安保、巡逻车队与中央指挥调度中心保持无缝无线电呼应与协同。',
    },
    iconName: 'Users',
  },
  {
    id: 'customer_satisfaction',
    title: {
      en: 'Customer Satisfaction',
      km: 'ការពេញចិត្តរបស់អតិថិជន',
      zh: '客户满意',
    },
    subtitle: {
      en: 'High Client Retention & Custom Post Orders',
      km: 'អត្រារក្សាអតិថិជនខ្ពស់ និងបត់បែន',
      zh: '高客户满意度与专属安保方案',
    },
    description: {
      en: 'Customized security protocols for each client facility with dedicated account managers and regular quality review meetings.',
      km: 'រៀបចំបទបញ្ជាគោលដៅតម្រូវតាមទីតាំងនីមួយៗ ដោយមានប្រធានគ្រប់គ្រងអតិថិជនផ្ទាល់ និងការវាយតម្លៃប្រចាំខែ។',
      zh: '为每个场地制定专属岗位守则，配有专门的客户经理并定期进行服务质量复盘。',
    },
    iconName: 'Smile',
  },
  {
    id: 'continuous_learning',
    title: {
      en: 'Continuous Learning',
      km: 'ការរៀនសូត្របន្ត',
      zh: '持续进取',
    },
    subtitle: {
      en: 'Regular Drills & Legal Refreshers',
      km: 'ការហ្វឹកហាត់ក្បួនវិន័យ និងច្បាប់ជាប្រចាំ',
      zh: '定期演练与法规知识更新',
    },
    description: {
      en: 'Quarterly refresher training in firefighting, emergency CPR, threat de-escalation, and Ministry of Interior security rules.',
      km: 'ការបណ្តុះបណ្តាលឡើងវិញជារៀងរាល់ត្រីមាសលើការបង្ការអគ្គិភ័យ ការសង្គ្រោះបឋម CPR និងបទបញ្ជារបស់ក្រសួងមហាផ្ទៃ។',
      zh: '每季度开展消防演练、心肺复苏急救、冲突降级以及内政部安保规程复训。',
    },
    iconName: 'BookOpen',
  },
];

export const WHY_CHOOSE_KNSK: WhyChooseItem[] = [
  {
    id: 'professional_guards',
    title: {
      en: 'MOI Checked & Trained Personnel',
      km: 'ភ្នាក់ងារឆ្លងកាត់ការពិនិត្យប្រវត្តិរូបពីក្រសួងមហាផ្ទៃ',
      zh: '经过内政部政审与正规特训的安保队员',
    },
    description: {
      en: 'All guards undergo National Police criminal background screening and mandatory physical drill academy training before field placement.',
      km: 'ភ្នាក់ងារសន្តិសុខទាំងអស់ត្រូវបានពិនិត្យប្រវត្តិរូបគ្មានទោសពៃរ៍ និងបានឆ្លងកាត់ការបណ្តុះបណ្តាលក្បួនវិន័យមុនពេលបញ្ជូនទៅឈរជើង។',
      zh: '所有队员均经过国家警察局无犯罪记录审核，并在警训基地完成封闭式体能与纪律训练。',
    },
    knskStandard: {
      en: '100% MOI Background Cleared + Drill Academy Certified',
      km: 'ពិនិត្យប្រវត្តិរូប ១០០% + បណ្តុះបណ្តាលក្បួនវិន័យត្រឹមត្រូវ',
      zh: '100%内政部政审合格 + 警训基地特训结业',
    },
    industryStandard: {
      en: 'Unscreened or informal guards with minimal preparation',
      km: 'សន្តិសុខគ្មានប្រវត្តិរូបច្បាស់លាស់ ឬគ្មានការបណ្តុះបណ្តាល',
      zh: '未经审查或临时招募且无培训的安保人员',
    },
    iconName: 'ShieldCheck',
  },
  {
    id: 'operations_247',
    title: {
      en: '24/7 Radio Command & Supervisor Audits',
      km: 'មជ្ឈមណ្ឌលបញ្ជាការ ២៤/៧ & ការចុះត្រួតពិនិត្យល្បាតយប់',
      zh: '24小时无线电调度与夜间督导查岗',
    },
    description: {
      en: 'Continuous radio contact with field posts paired with unannounced night supervisor spot-checks to guarantee 100% alert post coverage.',
      km: 'មានការទាក់ទងតាមវិទ្យុទាក់ទងជាប្រចាំ និងមានមេការចុះពិនិត្យគោលដៅទាំងយប់ ដើម្បីធានាសន្តិសុខមិនដេកលក់ ឬចោលគោលដៅ។',
      zh: '与各驻点保持实时无线电联络，配合夜间督导突击巡查，确保岗位24小时保持警惕。',
    },
    knskStandard: {
      en: 'Hourly Radio Roll-Calls + Random Night Inspections',
      km: 'ឆែកវិទ្យុទាក់ទងរៀងរាល់ម៉ោង + ចុះពិនិត្យយប់ចៃដន្យ',
      zh: '每小时无线电点名 + 夜间不定期突击巡查',
    },
    industryStandard: {
      en: 'Unmonitored guard posts with zero night supervisor visits',
      km: 'គ្មានការចុះពិនិត្យយប់ ឬគ្មានប្រព័ន្ធវិទ្យុទាក់ទងត្រឹមត្រូវ',
      zh: '无人监督的静止岗位，夜间零查岗',
    },
    iconName: 'Radio',
  },
  {
    id: 'rapid_response',
    title: {
      en: 'Rapid Emergency Intercept',
      km: 'ក្រុមអន្តរាគមន៍សន្តិសុខអាសន្នរហ័ស',
      zh: '快速应急响应与警情处置',
    },
    description: {
      en: 'Dedicated 4x4 mobile patrol pickups and motor units dispatched promptly upon emergency radio or panic button triggers.',
      km: 'មានក្រុមរថយន្តល្បាត 4x4 និងម៉ូតូចល័ត ត្រៀមចេញអន្តរាគមន៍ភ្លាមៗនៅពេលមានអាសន្ន ឬប៊ូតុងអាសន្នត្រូវ បានចុច។',
      zh: '配备专属4x4皮卡巡逻车与摩托机动队，接警或触发紧急报警后即刻赶赴现场。',
    },
    knskStandard: {
      en: 'Prompt Emergency Intercept Across Operating Hubs',
      km: 'អន្តរាគមន៍រហ័សទាន់ពេលវេលាគ្រប់ទីតាំងប្រតិបត្តិការ',
      zh: '各省市驻点快速机动应急响应',
    },
    industryStandard: {
      en: 'No dedicated patrol units or delayed multi-hour response',
      km: 'គ្មានក្រុមល្បាត ឬឆ្លើយតបយឺតយ៉ាវរាប់ម៉ោង',
      zh: '无机动巡逻队，警情处理推诿迟缓',
    },
    iconName: 'Zap',
  },
  {
    id: 'nationwide_service',
    title: {
      en: 'Full Coverage Across All 25 Provinces',
      km: 'វត្តមានសេវាកម្មគ្របដណ្តប់ ២៥ រាជធានី-ខេត្ត',
      zh: '全国25个省市无缝覆盖',
    },
    description: {
      en: 'Regional stations in Siem Reap, Sihanoukville, Battambang, Kampong Cham, and Svay Rieng providing seamless countrywide contracts.',
      km: 'មានការិយាល័យសាខានៅគ្រប់ខេត្តសំខាន់ៗ សម្រួលដល់ក្រុមហ៊ុនដែលមានសាខាច្រើនទូទាំងប្រទេស។',
      zh: '在暹粒、西哈努克、马德望、榜湛及柴桢设立区域指挥站，满足跨省连锁企业的统一安保需求。',
    },
    knskStandard: {
      en: '25 Provincial Dispatch Hubs with Unified Management',
      km: 'មានបញ្ជាការដ្ឋាន ២៥ ខេត្ត គ្រប់គ្រងតាមស្តង់ដារតែមួយ',
      zh: '25个省市独立调度站，统一管理标准',
    },
    industryStandard: {
      en: 'Phnom Penh-only operations with no provincial support',
      km: 'មានតែនៅភ្នំពេញ គ្មានលទ្ធភាពការពារនៅតាមខេត្ត',
      zh: '仅限于金边市区，外省无派驻与支援能力',
    },
    iconName: 'Globe',
  },
  {
    id: 'multilingual_comm',
    title: {
      en: 'Khmer, English & Chinese Operations Support',
      km: 'ការសម្របសម្រួលបីភាសា (ខ្មែរ អង់គ្លេស ចិន)',
      zh: '柬、英、中三语沟通与客诉支持',
    },
    description: {
      en: 'Dedicated multilingual account managers fluent in Khmer, English, and Mandarin catering to international corporate clients.',
      km: 'មានប្រធានគ្រប់គ្រងអតិថិជនដែលអាចនិយាយភាសាខ្មែរ អង់គ្លេស និងចិន ងាយស្រួលក្នុងការប្រាស័យទាក់ទង។',
      zh: '配备精通柬语、英语及中文的客诉专属经理，无障碍服务外资及跨国企业。',
    },
    knskStandard: {
      en: 'Trilingual Incident Reports & Client Portal',
      km: 'របាយការណ៍ និងប្រព័ន្ធគ្រប់គ្រងជា ៣ ភាសា',
      zh: '三语事故报告与专属客户管理系统',
    },
    industryStandard: {
      en: 'Khmer-only communication leading to language barriers',
      km: 'និយាយបានតែភាសាខ្មែរ បង្កការលំបាកដល់វិនិយោគិនបរទេស',
      zh: '仅限柬语，导致外资企业沟通受阻',
    },
    iconName: 'MessageSquare',
  },
];

export const CERTIFICATIONS_LIST = [
  {
    title: {
      en: 'Ministry of Interior Private Security License',
      km: 'អាជ្ញាប័ណ្ណសេវាសន្តិសុខឯកជន ពីក្រសួងមហាផ្ទៃ',
      zh: '内政部私营安保特许经营执照',
    },
    code: 'License #KNSK-SEC-2015-089',
    issuedBy: {
      en: 'General Commissariat of National Police, Cambodia',
      km: 'អគ្គស្នងការដ្ឋាននគរបាលជាតិ ក្រសួងមហាផ្ទៃ',
      zh: '柬埔寨国家警察总署 / 内政部',
    },
    status: {
      en: 'Active & Verified',
      km: 'មានសុពលភាព & ពិនិត្យរួច',
      zh: '有效并已通过审核',
    },
    iconName: 'Award',
  },
  {
    title: {
      en: 'Ministry of Commerce Certificate of Incorporation',
      km: 'វិញ្ញាបនបត្រចុះបញ្ជីពាណិជ្ជកម្ម ពីក្រសួងពាណិជ្ជកម្ម',
      zh: '商业部企业注册登记证书',
    },
    code: 'Registration #Co. 2884 Et/2015',
    issuedBy: {
      en: 'Ministry of Commerce, Kingdom of Cambodia',
      km: 'ក្រសួងពាណិជ្ជកម្ម នៃព្រះរាជាណាចក្រកម្ពុជា',
      zh: '柬埔寨王国商业部',
    },
    status: {
      en: 'Registered Legal Entity',
      km: 'នីតិបុគ្គលចុះបញ្ជីផ្លូវការ',
      zh: '法定注册实体',
    },
    iconName: 'FileText',
  },
  {
    title: {
      en: 'General Department of Taxation Patent License',
      km: 'ប័ណ្ណប៉ាតង់ពន្ធដារ ពីអគ្គនាយកដ្ឋានពន្ធដារ',
      zh: '国家税务总局营业专利税证',
    },
    code: 'Tax Patent #VATT-2025-9981',
    issuedBy: {
      en: 'General Department of Taxation (GDT)',
      km: 'អគ្គនាយកដ្ឋានពន្ធដារ ក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ',
      zh: '国家税务总局 (GDT)',
    },
    status: {
      en: 'Fully Tax Compliant',
      km: 'បានបង់ពន្ធត្រឹមត្រូវ',
      zh: '完全依法纳税实体',
    },
    iconName: 'CheckCircle2',
  },
  {
    title: {
      en: 'NSSF Employee Health & Accident Registration',
      km: 'ការចុះបញ្ជីបេឡាជាតិរបបសន្តិសុខសង្គម (NSSF)',
      zh: 'NSSF 国家社会保障基金成员认证',
    },
    code: 'NSSF Employer #NSSF-KH-2015-88',
    issuedBy: {
      en: 'National Social Security Fund (Ministry of Labour)',
      km: 'បេឡាជាតិរបបសន្តិសុខសង្គម ក្រសួងការងារ',
      zh: '国家社会保障基金 (NSSF)',
    },
    status: {
      en: 'Full Worker Welfare',
      km: 'ផ្តល់ការរ៉ាប់រងដល់បុគ្គលិក',
      zh: '全员社会保障就位',
    },
    iconName: 'Users',
  },
];

export const ABOUT_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'quotation',
    question: {
      en: 'How can I request a security proposal or quotation for my facility?',
      km: 'តើខ្ញុំអាចស្នើសុំសម្រង់តម្លៃ ឬសំណើសេវាសន្តិសុខសម្រាប់ទីតាំងរបស់ខ្ញុំដោយរបៀបណា?',
      zh: '我该如何为我的项目场地申请安保服务报价与正式方案？',
    },
    answer: {
      en: 'You can request a free proposal by using our online Quotation Calculator on this website, calling our 24/7 hotline at 096 483 8666, messaging our official Telegram (@KNSK_security), or emailing soengknsk@gmail.com. Our operations team will perform an optional free site survey and send a formal proposal within 24 hours.',
      km: 'លោកអ្នកអាចស្នើសុំសម្រង់តម្លៃដោយសេរីតាមរយៈ "ប្រព័ន្ធគណនាតម្លៃ" លើគេហទំព័រនេះ ទាក់ទងមកលេខ ២៤ម៉ោង 096 483 8666 ផ្ញើសារតាម Telegram (@KNSK_security) ឬអ៊ីមែល soengknsk@gmail.com។ ក្រុមការងារយើងខ្ញុំនឹងចុះស្ទង់ទីតាំងដោយឥតគិតថ្លៃ និងរៀបចំសម្រង់តម្លៃផ្លូវការជូនក្នុងរយ:ពេល ២៤ម៉ោង។',
      zh: '您可以通过本网站的“在线报价计算器”直接提交需求，拨打24小时热线 096 483 8666，发送Telegram (@KNSK_security) 或发送邮件至 soengknsk@gmail.com。我们的运营团队可为您提供免费实地勘察，并在24小时内出具正式书面方案。',
    },
  },
  {
    id: 'faq-2',
    category: 'operations',
    question: {
      en: 'Do you provide 24-hour security guard deployment with night supervision?',
      km: 'តើ K.N.S.K ផ្តល់សេវាសន្តិសុខប្រចាំការ ២៤ម៉ោង និងមានមេការ ចុះពិនិត្យយប់ដែរឬទេ?',
      zh: '你们是否提供24小时驻点安保，并配有夜间督导巡查？',
    },
    answer: {
      en: 'Yes. We offer 12-hour day/night shift rotations or 24/7 continuous static guard deployment. Every post is monitored via hourly radio roll-calls and unannounced night supervisor visits in 4x4 patrol pickup trucks.',
      km: 'បាទ/ចាស! យើងខ្ញុំមានសេវាសន្តិសុខដូរវេន ១២ម៉ោង (ថ្ងៃ/យប់) ឬប្រចាំការ ២៤/៧។ គ្រប់គោលដៅទាំងអស់ត្រូវ បានឆែកវិទ្យុទាក់ទងរៀងរាល់ម៉ោង និងមានមេការជិះរថយន្ត 4x4 ចុះពិនិត្យទាំងយប់ដោយមិនប្រាប់មុន។',
      zh: '是的。我们提供12小时日夜轮班或24/7全天候不间断驻点安保。所有岗位均进行每小时无线电打卡，并由巡逻车队夜间突击抽查。',
    },
  },
  {
    id: 'faq-3',
    category: 'emergency',
    question: {
      en: 'Can I request additional security guards or VIP escorts on short notice?',
      km: 'តើខ្ញុំអាចស្នើសុំភ្នាក់ងារសន្តិសុខបន្ថែម ឬក្រុមការពារ VIP ភ្លាមៗក្នុងករណីប្រញាប់បានទេ?',
      zh: '如果在紧急情况下需要临时增加安保人员或要员随行护卫，能否快速响应？',
    },
    answer: {
      en: 'Yes. K.N.S.K maintains a reserve pool of trained stand-by officers and tactical escort personnel ready for deployment within 2 to 4 hours in Phnom Penh and major provincial centers.',
      km: 'បាទ/ចាស! K.N.S.K មានក្រុមភ្នាក់ងារសន្តិសុខ និងក្រុមការពារ VIP បម្រុងដែលបានបណ្តុះបណ្តាលរួចរាល់ អាចចេញអន្តរាគមន៍ ឬបន្ថែមគោលដៅក្នុងរយ:ពេល ២ ទៅ ៤ម៉ោង។',
      zh: '是的。K.N.S.K 储备有经过特训的后备队员与特保组，金边及各主省份可在2至4小时内迅速增派人员到位。',
    },
  },
  {
    id: 'faq-4',
    category: 'response',
    question: {
      en: 'How quickly can K.N.S.K mobile patrol respond to an incident or distress call?',
      km: 'តើក្រុមល្បាតចល័ត K.N.S.K អាចមកដល់ទីតាំងកើតហេតុលឿនប៉ុណ្ណា ពេលមានអាសន្ន?',
      zh: '当发生突发事件或触发报警时，K.N.S.K 的巡逻队多久能赶到现场？',
    },
    answer: {
      en: 'Our dedicated 4x4 pickup trucks and motorcycle units are strategically stationed across Phnom Penh and provincial capitals, providing prompt emergency response and rapid intervention upon radio or hotline dispatch.',
      km: 'ក្រុមរថយន្តល្បាត 4x4 និងម៉ូតូចល័តរបស់យើងខ្ញុំត្រូវបានប្រចាំការនៅតាមតំបន់យុទ្ធសាស្ត្រ ដោយធានានូវការចេញអន្តរាគមន៍រហ័សទាន់ពេលវេលាពេលមានអាសន្ន។',
      zh: '我们的4x4皮卡巡逻车与机动队常态化分片驻守在金边及各省核心区，接到调度指令后迅速出动赶赴现场处置。',
    },
  },
  {
    id: 'faq-5',
    category: 'coverage',
    question: {
      en: 'Which industries and property types does K.N.S.K Security protect?',
      km: 'តើ K.N.S.K ផ្តល់សេវាកម្មការពារលើវិស័យ និងប្រភេទអគារអ្វីខ្លះ?',
      zh: 'K.N.S.K 安保服务覆盖哪些行业与场地类型？',
    },
    answer: {
      en: 'We protect commercial office towers, commercial banks & ATMs, industrial factories & warehouses, gated residential boreys, luxury hotels & resorts, embassies, construction sites, and major public events.',
      km: 'យើងខ្ញុំការពារអគារពាណិជ្ជកម្ម ធនាគារ និងទូ ATM រោងចក្រ និងឃ្លាំងទំនិញ បុរីរស់នៅ សណ្ឋាគារ និងរីស៊ត ស្ថានទូត ការដ្ឋានសំណង់ និងពិធីរៀបចំសង្គមធំៗ។',
      zh: '我们全面覆盖写字楼大厦、商业银行及ATM、工业厂房与仓库、住宅封闭式小区、奢华酒店与度假村、各国驻柬使馆、建筑工地及大型公关活动。',
    },
  },
  {
    id: 'faq-6',
    category: 'legal',
    question: {
      en: 'Are K.N.S.K security guards legally background-checked and compliant?',
      km: 'តើភ្នាក់ងារសន្តិសុខ K.N.S.K មានការត្រួតពិនិត្យប្រវត្តិរូបត្រឹមត្រូវដែរឬទេ?',
      zh: 'K.N.S.K 的安保人员是否均通过合法政审与正规合规？',
    },
    answer: {
      en: 'Yes. 100% of our personnel are background-checked through the General Commissariat of National Police / Ministry of Interior and covered by mandatory worker healthcare and accident insurance protection.',
      km: 'បាទ/ចាស! ភ្នាក់ងារ ១០០% ត្រូវបានពិនិត្យប្រវត្តិរូបគ្មានទោសពៃរ៍ពីអគ្គស្នងការដ្ឋាននគរបាលជាតិ/ក្រសួងមហាផ្ទៃ និងទទួលបានការការពារសុខុមាលភាពពេញលេញតាមរយៈការធានារ៉ាប់រងសុខភាព និងសុវត្ថិភាពការងារ។',
      zh: '是的。100%的队员均通过国家警察总署/内政部官方无犯罪记录审查，全员依法享有正规合规的工伤与医疗健康保障。',
    },
  },
];
