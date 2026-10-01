export interface JobPosition {
  id: string;
  titleEn: string;
  titleKm: string;
  titleZh: string;
  category: string;
  locationEn: string;
  locationKm: string;
  locationZh: string;
  typeEn: string;
  typeKm: string;
  typeZh: string;
  salaryEn: string;
  salaryKm: string;
  salaryZh: string;
  summaryEn: string;
  summaryKm: string;
  summaryZh: string;
  requirementsEn: string[];
  requirementsKm: string[];
  requirementsZh: string[];
  responsibilitiesEn: string[];
  responsibilitiesKm: string[];
  responsibilitiesZh: string[];
  badgeEn?: string;
  badgeKm?: string;
  badgeZh?: string;
}

export interface RecruitmentStep {
  stepNumber: number;
  titleEn: string;
  titleKm: string;
  titleZh: string;
  descEn: string;
  descKm: string;
  descZh: string;
  iconName: string;
  durationEn: string;
  durationKm: string;
  durationZh: string;
}

export interface WhyJoinReason {
  id: string;
  titleEn: string;
  titleKm: string;
  titleZh: string;
  descEn: string;
  descKm: string;
  descZh: string;
  iconName: string;
  color: string;
}

export interface CultureValue {
  id: string;
  titleEn: string;
  titleKm: string;
  titleZh: string;
  descEn: string;
  descKm: string;
  descZh: string;
  iconName: string;
}

export interface BenefitItem {
  id: string;
  titleEn: string;
  titleKm: string;
  titleZh: string;
  descEn: string;
  descKm: string;
  descZh: string;
  iconName: string;
  tagEn: string;
  tagKm: string;
  tagZh: string;
  clarificationEn?: string;
  clarificationKm?: string;
  clarificationZh?: string;
  eligiblePositionsEn?: string[];
  eligiblePositionsKm?: string[];
  eligiblePositionsZh?: string[];
  footerNoteEn?: string;
  footerNoteKm?: string;
  footerNoteZh?: string;
}

export interface RecruitmentFaq {
  id: string;
  questionEn: string;
  questionKm: string;
  questionZh: string;
  answerEn: string;
  answerKm: string;
  answerZh: string;
  category: string;
}

export const WHY_JOIN_REASONS: WhyJoinReason[] = [
  {
    id: 'career',
    titleEn: 'Professional Career',
    titleKm: 'អាជីពប្រកបដោយវិជ្ជាជីវៈ',
    titleZh: '专业职业发展',
    descEn: 'Build a long-term, respected security career with clear advancement paths from Static Guard to Operations Supervisor and Regional Manager.',
    descKm: 'កសាងអាជីពសន្តិសុខប្រកបដោយការគោរព និងមានផ្លូវឡើងតំណែងច្បាស់លាស់ ពីភ្នាក់ងារឈរជើង រហូតដល់ប្រធានប្រតិបត្តិការ និងប្រធានតំបន់។',
    descZh: '建立受人尊敬的长期安保职业生涯，拥有明确的晋升通道：从驻点安保员到运营主管及区域经理。',
    iconName: 'Shield',
    color: 'border-blue-500/30 bg-blue-50/50'
  },
  {
    id: 'stability',
    titleEn: 'Stable Employment',
    titleKm: 'ការងារមានស្ថិរភាពខ្ពស់',
    titleZh: '稳定就业保障',
    descEn: 'Enjoy guaranteed monthly salary paid on time, official MOI-licensed employment contracts, and long-term job security.',
    descKm: 'ទទួលបានប្រាក់បៀវត្សរ៍ទៀងទាត់ជារៀងរាល់ខែ កិច្ចសន្យាការងារស្របច្បាប់ដែលមានអាជ្ញាប័ណ្ណពីក្រសួងមហាផ្ទៃ និងស្ថិរភាពការងារវែងឆ្ងាយ។',
    descZh: '享受按时发放的保障性月薪、内政部认证的正规劳动合同及长期工作稳定性。',
    iconName: 'CheckCircle2',
    color: 'border-emerald-500/30 bg-emerald-50/50'
  },
  {
    id: 'salary',
    titleEn: 'Competitive Salary & Bonuses',
    titleKm: 'ប្រាក់បៀវត្សរ៍ និងប្រាក់រង្វាន់ល្អ',
    titleZh: '具竞争力的薪酬与奖金',
    descEn: 'Above-market base wages, overtime pay, holiday allowances, night shift stipends, and performance excellence bonuses.',
    descKm: 'ប្រាក់បៀវត្សរ៍មូលដ្ឋានខ្ពស់ជាងទីផ្សារ ប្រាក់ថែមម៉ោង ប្រាក់ឧបត្ថម្ភថ្ងៃបុណ្យ ប្រាក់វេនយប់ និងប្រាក់រង្វាន់បំពេញការងារល្អ។',
    descZh: '高于市场水平的底薪、加班费、节假日补贴、夜班津贴以及优秀绩效奖金。',
    iconName: 'Coins',
    color: 'border-amber-500/30 bg-amber-50/50'
  },
  {
    id: 'development',
    titleEn: 'Career Development',
    titleKm: 'ការអភិវឌ្ឍសមត្ថភាព',
    titleZh: '职业技能提升',
    descEn: 'Regular skill enhancement workshops in executive protection, surveillance tech, VIP escort, and disaster emergency response.',
    descKm: 'វគ្គបណ្តុះបណ្តាលបង្កើនសមត្ថភាពជាទៀងទាត់លើការការពារ VIP បច្ចេកវិទ្យាឃ្លាំមើល និងការឆ្លើយតបអាសន្ន។',
    descZh: '定期举办要员保护、监控技术、VIP护卫及突发事件应急处置技能提升工作坊。',
    iconName: 'TrendingUp',
    color: 'border-indigo-500/30 bg-indigo-50/50'
  },
  {
    id: 'training',
    titleEn: 'Professional Training Academy',
    titleKm: 'សាលាបណ្តុះបណ្តាលស្តង់ដារ',
    titleZh: '专业培训学院',
    descEn: 'Full-paid initial training covering tactical defense, first aid, fire safety, ethics, and bilingual communication skills.',
    descKm: 'ការបណ្តុះបណ្តាលដំបូងទទួលបានប្រាក់បៀវត្សរ៍ គ្របដណ្តប់លើការការពារខ្លួន សង្គ្រោះបឋម បង្ការអគ្គិភ័យ និងភាសា។',
    descZh: '带薪入职培训，全面涵盖战术防卫、急救、消防安全、职业道德及双语沟通技巧。',
    iconName: 'GraduationCap',
    color: 'border-cyan-500/30 bg-cyan-50/50'
  },
  {
    id: 'promotion',
    titleEn: 'Internal Promotion Opportunities',
    titleKm: 'ឱកាសឡើងតំណែងផ្ទៃក្នុង',
    titleZh: '内部优先晋升机制',
    descEn: 'Over 85% of team leaders and field supervisors are promoted internally based on merit, discipline, and performance.',
    descKm: 'ជាង ៨៥% នៃប្រធានក្រុម និងអ្នកត្រួតពិនិត្យ ត្រូវបានលើកកម្ពស់តំណែងចេញពីភ្នាក់ងារផ្ទៃក្នុងដោយផ្អែកលើសមត្ថភាព និងវិន័យ។',
    descZh: '超过85%的班组长及外勤主管根据能力、纪律和绩效从内部员工中优先提拔。',
    iconName: 'Award',
    color: 'border-purple-500/30 bg-purple-50/50'
  },
  {
    id: 'team',
    titleEn: 'Supportive & Disciplined Team',
    titleKm: 'ក្រុមការងារមានវិន័យ និងជួយគ្នា',
    titleZh: '团结与严谨的团队氛围',
    descEn: 'Work alongside former military officers and seasoned security leaders in a camaraderie-rich, highly respected atmosphere.',
    descKm: 'ធ្វើការរួមគ្នាជាមួយអតីតនាយទាហាន និងអ្នកដឹកនាំសន្តិសុខដែលមានបទពិសោធន៍ ក្នុងបរិយាកាសស្និទ្ធស្នាល និងស្មារតីសាមគ្គី។',
    descZh: '与退役军官及资深安保管理者并肩工作，在互助敬业、高度自律的氛围中共事。',
    iconName: 'Users',
    color: 'border-rose-500/30 bg-rose-50/50'
  },
  {
    id: 'nationwide',
    titleEn: 'Nationwide Opportunities',
    titleKm: 'ឱកាសការងារ ២៥ ខេត្ត-ក្រុង',
    titleZh: '全国25省市工作机会',
    descEn: 'Opportunities to serve in your home province or relocate to high-tier commercial hubs across all 25 provinces.',
    descKm: 'ឱកាសធ្វើការនៅក្នុងខេត្តកំណើតរបស់អ្នក ឬផ្លាស់ទៅកាន់មជ្ឈមណ្ឌលពាណិជ្ជកម្មធំៗទូទាំង ២៥ ខេត្ត-ក្រុង។',
    descZh: '可选择在籍贯原籍省份就近任职，或派遣至全国25个省市的核心商业枢纽。',
    iconName: 'MapPin',
    color: 'border-red-500/30 bg-red-50/50'
  }
];

export const AVAILABLE_POSITIONS: JobPosition[] = [
  {
    id: 'sec-guard',
    titleEn: 'Static Security Guard (Male / Female)',
    titleKm: 'ភ្នាក់ងារសន្តិសុខការពារប្រចាំការ (ប្រុស / ស្រី)',
    titleZh: '驻点安保员（男 / 女）',
    category: 'Field Operations',
    locationEn: 'Phnom Penh, Siem Reap, Sihanoukville, Kampong Cham & All 25 Provinces',
    locationKm: 'ភ្នំពេញ សៀមរាប ព្រះសីហនុ កំពង់ចាម និងគ្រប់ ២៥ ខេត្ត-ក្រុង',
    locationZh: '金边、暹粒、西哈努克、榜湛及全国25省市',
    typeEn: 'Full-Time (Rotational Shift)',
    typeKm: 'ពេញម៉ោង (វេនដូរ)',
    typeZh: '全职（轮班制）',
    salaryEn: '$230 - $350 / month',
    salaryKm: '$230 - $350 / ខែ',
    salaryZh: '$230 - $350 / 月',
    summaryEn: 'Responsible for access control, visitor logging, perimeter patrols, and asset protection at embassies, banks, commercial towers, and luxury boreys.',
    summaryKm: 'ទទួលខុសត្រូវលើការពិនិត្យច្រកចេញចូល ចុះឈ្មោះភ្ញៀវ ល្បាតជុំវិញទីតាំង និងការពារទ្រព្យសម្បត្តិនៅស្ថានទូត ធនាគារ និងបុរី។',
    summaryZh: '负责大使馆、银行、商业大厦及奢华星级小区的出入管控、访客登记、外围巡逻及资产安全防护。',
    requirementsEn: [
      'Age 18 - 45 years old, physically fit and healthy',
      'Height: Minimum 168cm (Male), 158cm (Female)',
      'Education: Completion of Grade 9 or higher',
      'No criminal record (Police clearance required)',
      'High discipline, honesty, and strong sense of responsibility'
    ],
    requirementsKm: [
      'អាយុ ១៨ ដល់ ៤៥ឆ្នាំ សុខភាពល្អ និងកាយសម្បទារ៉ឹងប៉ឹង',
      'កម្ពស់៖ យ៉ាងតិច ១៦៨ស.ម (ប្រុស), ១៥៨ស.ម (ស្រី)',
      'កម្រិតវប្បធម៌៖ ចាប់ពីថ្នាក់ទី៩ឡើងទៅ',
      'គ្មានប្រវត្តិប្រព្រឹត្តបទល្មើស (ត្រូវមានលិខិតបញ្ជាក់ថ្កោលទោស)',
      'មានវិន័យខ្ពស់ ស្មោះត្រង់ និងមានស្មារតីទទួលខុសត្រូវ'
    ],
    requirementsZh: [
      '年龄18-45周岁，身体健康，体格魁梧',
      '身高：男168cm以上，女158cm以上',
      '学历：初中（九年级）或以上学历',
      '无违法犯罪记录（需提供公安机关无犯罪记录证明）',
      '纪律性强、诚实守信、具备高度责任心'
    ],
    responsibilitiesEn: [
      'Conduct regular foot patrols around client premises',
      'Inspect incoming vehicles, guests, and deliver goods',
      'Operate metal detectors and basic CCTV monitor station',
      'Report safety hazards, fire risks, or suspicious activities',
      'Maintain polite, helpful customer service to all site visitors'
    ],
    responsibilitiesKm: [
      'ធ្វើការល្បាតជុំវិញទីតាំងការពារជាទៀងទាត់',
      'ពិនិត្យយានយន្ត ភ្ញៀវ និងទំនិញចេញចូល',
      'ប្រើប្រាស់ឧបករណ៍ស្កែន និងពិនិត្យកាមេរ៉ាសុវត្ថិភាព',
      'រាយការណ៍អំពីហានិភ័យ ឬសកម្មភាពសង្ស័យ',
      'ផ្តល់សេវាកម្មប្រកបដោយភាពរាក់ទាក់ដល់ភ្ញៀវ'
    ],
    responsibilitiesZh: [
      '在客户驻地四周执行定期徒步巡逻',
      '检查出入车辆、来访客人及送货人员',
      '操作手持金属探测器及基础监控显示屏',
      '及时上报安全隐患、火灾风险或可疑人员',
      '向所有来访人员提供礼貌周到的服务'
    ],
    badgeEn: 'Urgent Hire - 150 Slots',
    badgeKm: 'ត្រូវការប្រញាប់ - ១៥០នាក់',
    badgeZh: '急聘 - 150名'
  },
  {
    id: 'sr-sec-guard',
    titleEn: 'Senior Security Guard / Team Leader',
    titleKm: 'មេក្រុមសន្តិសុខ / ភ្នាក់ងារជាន់ខ្ពស់',
    titleZh: '高级安保员 / 班组长',
    category: 'Field Leadership',
    locationEn: 'Phnom Penh & Major Industrial Zones',
    locationKm: 'រាជធានីភ្នំពេញ និងតំបន់សេដ្ឋកិច្ចពិសេស',
    locationZh: '金边市及各大工业园区',
    typeEn: 'Full-Time',
    typeKm: 'ពេញម៉ោង',
    typeZh: '全职',
    salaryEn: '$400 - $600 / month',
    salaryKm: '$400 - $600 / ខែ',
    salaryZh: '$400 - $600 / 月',
    summaryEn: 'Lead a team of 5-15 guards on site, manage shift schedules, conduct daily briefings, and liaise with client site managers.',
    summaryKm: 'ដឹកនាំក្រុមសន្តិសុខ ៥-១៥នាក់ គ្រប់គ្រងកាលវិភាគវេន ធ្វើការប្រជុំខ្លីប្រចាំថ្ងៃ និងសម្របសម្រួលជាមួយប្រធានទីតាំង។',
    summaryZh: '领导5-15名驻点安保小组，安排轮班表，主持每日班前会，并与客户方现场经理保持日常沟通。',
    requirementsEn: [
      'At least 2 years of security or military/police experience',
      'High school diploma or vocational certificate',
      'Proven team leadership and conflict resolution skills',
      'Basic English or Chinese speaking ability preferred'
    ],
    requirementsKm: [
      'មានបទពិសោធន៍ផ្នែកសន្តិសុខ ឬកងទ័ព/នគរបាល យ៉ាងតិច ២ឆ្នាំ',
      'សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ ឬវិញ្ញាបនបត្របច្ចេកទេស',
      'មានជំនាញដឹកនាំក្រុម និងដោះស្រាយទំនាស់',
      'អាចនិយាយភាសាអង់គ្លេស ឬចិនកម្រិតដំបូង'
    ],
    requirementsZh: [
      '具备至少2年安保或军队/警察服务背景',
      '高中毕业或职业技术证书',
      '具备良好的团队领导及突发争议调解能力',
      '掌握基础英语或基础中文沟通者优先'
    ],
    responsibilitiesEn: [
      'Supervise daily shift handovers and guard post assignments',
      'Conduct spot-check inspections during day and night shifts',
      'Prepare daily incident logs and site operational reports',
      'Train new guards on post-specific standard operating procedures'
    ],
    responsibilitiesKm: [
      'ត្រួតពិនិត្យការប្រគល់វេន និងការបែងចែកគោលដៅ',
      'ចុះពិនិត្យគោលដៅដោយមិនជម្រាបឲ្យដឹងមុនទាំងយប់ទាំងថ្ងៃ',
      'រៀបចំរបាយការណ៍សន្តិសុខប្រចាំថ្ងៃជូនក្រុមហ៊ុន',
      'បណ្តុះបណ្តាលភ្នាក់ងារថ្មីអំពីបទបញ្ជាផ្ទៃក្នុងទីតាំង'
    ],
    responsibilitiesZh: [
      '监督每日岗位交接及哨位指派执行情况',
      '开展昼夜不定期突击抽查与岗姿督导',
      '汇总撰写每日安保日志及现场运营报告',
      '对新入职队员进行特定岗位的SOP实操培训'
    ]
  },
  {
    id: 'sales-marketing',
    titleEn: 'Security Sales & Client Relationship Manager',
    titleKm: 'ប្រធានផ្នែកលក់សេវាកម្មសន្តិសុខ និងទំនាក់ទំនងអតិថិជន',
    titleZh: '安保业务销售兼客户关系经理',
    category: 'Commercial',
    locationEn: 'Phnom Penh Headquarters',
    locationKm: 'ទីស្នាក់ការកណ្តាល រាជធានីភ្នំពេញ',
    locationZh: '金边总部大楼',
    typeEn: 'Full-Time',
    typeKm: 'ពេញម៉ោង',
    typeZh: '全职',
    salaryEn: '$400 - $600 / month',
    salaryKm: '$400 - $600 / ខែ',
    salaryZh: '$400 - $600 / 月',
    summaryEn: 'Identify potential corporate clients, prepare commercial security proposals, negotiate contracts for boreys and factories, and maintain long-term client retention.',
    summaryKm: 'ស្វែងរកអតិថិជនក្រុមហ៊ុន រៀបចំដេញថ្លៃសេវាកម្ម ចរចាកិច្ចសន្យាជាមួយរោងចក្រ/បុរី និងថែរក្សាទំនាក់ទំនងល្អជាមួយអតិថិជន។',
    summaryZh: '开拓企业级安保客户、起草商业安保标书与报价方案、洽谈小区及工厂安保服务合同并维护客情关系。',
    requirementsEn: [
      'Degree in Business, Marketing, or International Relations',
      '3+ years successful B2B sales experience in Cambodia security or facility sector',
      'Fluency in English or Chinese (Mandarin) required',
      'Strong presentation skills and negotiation acumen'
    ],
    requirementsKm: [
      'បរិញ្ញាបត្រផ្នែកពាណិជ្ជកម្ម ទីផ្សារ ឬទំនាក់ទំនងអន្តរជាតិ',
      'បទពិសោធន៍លក់ B2B យ៉ាងតិច ៣ឆ្នាំ ក្នុងវិស័យសន្តិសុខ ឬសេវាកម្ម',
      'ស្ទាត់ជំនាញភាសាអង់គ្លេស ឬចិន (ចិនមែនដារីន)',
      'មានជំនាញធ្វើបទបង្ហាញ និងចរចាពាណិជ្ជកម្ម'
    ],
    requirementsZh: [
      '具备市场营销、商务或国际贸易专业学士学位',
      '3年以上柬埔寨B2B大客户销售经验（有安保或物业设施管理背景者优先）',
      '必须具备流利的英语或中文（普通话）商务沟通能力',
      '具备出色的商业提案演示与商务谈判技巧'
    ],
    responsibilitiesEn: [
      'Conduct site walks with prospective clients to propose guard density',
      'Draft customized Quotation Proposals adhering to K.N.S.K standards',
      'Represent K.N.S.K at corporate networking expos and chamber events',
      'Ensure 100% timely contract renewal and service satisfaction'
    ],
    responsibilitiesKm: [
      'ចុះពិនិត្យទីតាំងជាមួយអតិថិជន ដើម្បីណែនាំចំនួនកម្លាំងការពារ',
      'រៀបចំឯកសារដេញថ្លៃ និងប្រកួតប្រជែងតម្លៃ',
      'តំណាងក្រុមហ៊ុនក្នុងពិព័រណ៍ពាណិជ្ជកម្ម និងជំនួបធុរកិច្ច',
      'ធានាការបន្តកិច្ចសន្យាទាន់ពេលវេលា និងការពេញចិត្តរបស់អតិថិជន'
    ],
    responsibilitiesZh: [
      '陪同潜在客户实地勘测，规划哨位密度的合理部署方案',
      '根据K.N.S.K标准化要求起草定制化商务报价书',
      '代表K.N.S.K参加各大商会展会及企业高管交流研讨会',
      '确保合同按期续约率及客户满意度指标100%达标'
    ]
  },
];

export const RECRUITMENT_STEPS: RecruitmentStep[] = [
  {
    stepNumber: 1,
    titleEn: 'Submit Application',
    titleKm: 'ដាក់ពាក្យស្នើសុំ',
    titleZh: '提交求职申请',
    descEn: 'Fill out our online multi-step application form or visit any of our regional office locations in Cambodia.',
    descKm: 'បំពេញទម្រង់ពាក្យសុំតាមអនឡាញ ឬអញ្ជើញមកកាន់ការិយាល័យ K.N.S.K ដោយផ្ទាល់។',
    descZh: '在线填写多步骤申请表，或亲临K.N.S.K全国各地办公室现场报名。',
    iconName: 'FileText',
    durationEn: '10 Mins',
    durationKm: '១០ នាទី',
    durationZh: '10分钟'
  },
  {
    stepNumber: 2,
    titleEn: 'Document Review',
    titleKm: 'ពិនិត្យផ្ទៀងផ្ទាត់ឯកសារ',
    titleZh: '资格与档案初审',
    descEn: 'HR team validates National ID, Cambodian Police Background Clearance, and medical health records.',
    descKm: 'ក្រុមការងារ HR ពិនិត្យផ្ទៀងផ្ទាត់អត្តសញ្ញាណប័ណ្ណ លិខិតបញ្ជាក់ថ្កោលទោស និងលិខិតពិនិត្យសុខភាព។',
    descZh: 'HR团队严格审核身份证、警察局无犯罪记录证明及体检健康报告。',
    iconName: 'FileCheck2',
    durationEn: '24 Hours',
    durationKm: '២៤ ម៉ោង',
    durationZh: '24小时'
  },
  {
    stepNumber: 3,
    titleEn: 'In-Person Interview',
    titleKm: 'ការសម្ភាសន៍ផ្ទាល់',
    titleZh: '现场专业面试',
    descEn: 'Structured interview assessing communication skills, discipline, ethics, and attitude with senior officers.',
    descKm: 'សម្ភាសន៍ផ្ទាល់ជាមួយមន្ត្រីជាន់ខ្ពស់ ដើម្បីវាយតម្លៃជំនាញទំនាក់ទំនង វិន័យ និងអាកប្បកិរិយា។',
    descZh: '由高级安保官主持面试，全面评估求职者的沟通能力、纪律意识与服务态度。',
    iconName: 'Users',
    durationEn: '30 Mins',
    durationKm: '៣០ នាទី',
    durationZh: '30分钟'
  },
  {
    stepNumber: 4,
    titleEn: 'Background Verification',
    titleKm: 'ការស្រាវជ្រាវប្រវត្តិរូប',
    titleZh: '政治与社会背景调查',
    descEn: 'Formal verification with commune authorities and police commissariats to ensure pristine safety standards.',
    descKm: 'ការស្រាវជ្រាវប្រវត្តិរូបផ្លូវការជាមួយអាជ្ញាធរឃុំ-សង្កាត់ និងប៉ុស្តិ៍នគរបាលរដ្ឋបាល។',
    descZh: '联合求职者户籍所在地乡镇政府及辖区派出所进行极高标准的背景核验。',
    iconName: 'ShieldAlert',
    durationEn: '48 Hours',
    durationKm: '៤៨ ម៉ោង',
    durationZh: '48小时'
  },
  {
    stepNumber: 5,
    titleEn: 'Physical & Medical Assessment',
    titleKm: 'ការពិនិត្យកាយសម្បទា និងសុខភាព',
    titleZh: '体能测试与体检',
    descEn: 'Physical endurance test (push-ups, running), vision check, and drug screening test at HQ drill grounds.',
    descKm: 'ការតេស្តកាយសម្បទារ៉ឹងប៉ឹង (អាវ៉ង់ រត់ប្រណាំង) ពិនិត្យភ្នែក និងតេស្តសារធាតុញៀន។',
    descZh: '在总部训练场进行体能测试（俯卧撑、耐力跑）、视力检测及违禁药物筛查。',
    iconName: 'Activity',
    durationEn: '2 Hours',
    durationKm: '២ ម៉ោង',
    durationZh: '2小时'
  },
  {
    stepNumber: 6,
    titleEn: 'Training Academy Boot-Camp',
    titleKm: 'វគ្គបណ្តុះបណ្តាលសាលាសន្តិសុខ',
    titleZh: '安保学院封闭式集训',
    descEn: 'Intensive paid training covering security SOPs, emergency response, fire safety, and customer courtesy.',
    descKm: 'វគ្គបណ្តុះបណ្តាលទទួលបានប្រាក់បៀវត្សរ៍ គ្របដណ្តប់លើបទបញ្ជាសន្តិសុខ សង្គ្រោះបន្ទាន់ និងអាកប្បកិរិយា។',
    descZh: '带薪参加为期数天的全封闭式实战集训，涵盖安保SOP、消防急救与礼仪。',
    iconName: 'GraduationCap',
    durationEn: '7 - 14 Days',
    durationKm: '៧ - ១៤ ថ្ងៃ',
    durationZh: '7 - 14天'
  },
  {
    stepNumber: 7,
    titleEn: 'Official Deployment & Gear',
    titleKm: 'ការចាត់តាំងចេញការពារផ្លូវការ',
    titleZh: '授衔发装与正式上岗',
    descEn: 'Issue of custom K.N.S.K tactical uniforms, equipment kit, official ID card, and post deployment.',
    descKm: 'ទទួលបានឯកសណ្ឋាន ឧបករណ៍បំពាក់ កាតសម្គាល់ខ្លួន និងការចាត់តាំងទៅកាន់ទីតាំងការពារផ្លូវការ។',
    descZh: '颁发K.N.S.K定制战术制服、装备包、专属工作证，并正式派驻指定客户岗位。',
    iconName: 'Award',
    durationEn: 'Day 1 Duty',
    durationKm: 'ថ្ងៃដំបូង',
    durationZh: '即刻上岗'
  }
];

export const REQUIRED_DOCUMENTS = [
  {
    id: 'id-card',
    titleEn: 'Cambodian National ID Card (Original & Copy)',
    titleKm: 'អត្តសញ្ញាណប័ណ្ណសញ្ជាតិខ្មែរ (ច្បាប់ដើម និងច្បាប់ចម្លង)',
    titleZh: '柬埔寨国民身份证（原件及复印件）',
    required: true,
    descEn: 'Must be valid and unexpired.',
    descKm: 'ត្រូវមានពលុពល និងមិនទាន់ផុតកំណត់។',
    descZh: '须在有效期限内。'
  },
  {
    id: 'family-book',
    titleEn: 'Family Book / Residence Book',
    titleKm: 'សៀវភៅគ្រួសារ ឬសៀវភៅស្នាក់នៅ',
    titleZh: '户口簿 / 居住登记簿',
    required: true,
    descEn: 'Certified copy showing current home address.',
    descKm: 'ច្បាប់ចម្លងមានការបញ្ជាក់ បង្ហាញអាសយដ្ឋានបច្ចុប្បន្ន។',
    descZh: '需加盖公章的复印件，显示常住地址。'
  },
  {
    id: 'police-record',
    titleEn: 'Police Background Clearance Certificate',
    titleKm: 'លិខិតបញ្ជាក់ថ្កោលទោស (លិខិតគ្មានទោស)',
    titleZh: '无犯罪记录证明书',
    required: true,
    descEn: 'Issued by Ministry of Justice or Local Police Commissariat.',
    descKm: 'ចេញដោយក្រសួងយុត្តិធម៌ ឬស្នងការដ្ឋាននគរបាលខេត្ត-ក្រុង។',
    descZh: '由司法部或省市警察局权威开具。'
  },
  {
    id: 'health-cert',
    titleEn: 'Medical Health & Fitness Certificate',
    titleKm: 'លិខិតពិនិត្យសុខភាព និងកាយសម្បទា',
    titleZh: '体检健康合格证明',
    required: true,
    descEn: 'From a recognized Cambodian hospital or clinic.',
    descKm: 'ចេញដោយមន្ទីរពេទ្យ ឬគ្លីនិកទទួលស្គាល់ផ្លូវការ។',
    descZh: '由柬埔寨正规医院或体检中心开具。'
  },
  {
    id: 'cv',
    titleEn: 'Curriculum Vitae (CV) & Cover Letter',
    titleKm: 'ប្រវត្តិរូបសង្ខេប (CV) និងលិខិតអម',
    titleZh: '个人简历（CV）及求职信',
    required: true,
    descEn: 'Highlighting work history and references.',
    descKm: 'បង្ហាញពីប្រវត្តិការងារ និងអ្នកធានា។',
    descZh: '详细列出工作经历与推荐人信息。'
  },
  {
    id: 'education-cert',
    titleEn: 'Education Certificate / High School Diploma',
    titleKm: 'សញ្ញាបត្រការសិក្សា ឬលិខិតបញ្ជាក់ការសិក្សា',
    titleZh: '学历证书 / 高中毕业证',
    required: false,
    descEn: 'Grade 9, High School, or Vocational diploma.',
    descKm: 'សញ្ញាបត្រថ្នាក់ទី៩ ថ្នាក់ទី១២ ឬវិជ្ជាជីវៈ។',
    descZh: '初中、高中或职业技术毕业文凭。'
  },
  {
    id: 'photos',
    titleEn: '4x6 Recent Passport Photos (4 Copies)',
    titleKm: 'រូបថត ៤x៦ ថតថ្មីៗ (ចំនួន ៤សន្លឹក)',
    titleZh: '4x6近期免冠护照彩照（4张）',
    required: true,
    descEn: 'White background, formal attire.',
    descKm: 'ផ្ទៃខាងក្រោយពណ៌ស សម្លៀកបំពាក់សមរម្យ។',
    descZh: '白底彩照，服装端庄。'
  },
  {
    id: 'military-cert',
    titleEn: 'Military / Police Discharge Book (If applicable)',
    titleKm: 'សៀវភៅផ្ទេរភារកិច្ចយោធិន/នគរបាល (បើមាន)',
    titleZh: '退役军人/警察退役证（如有）',
    required: false,
    descEn: 'Qualifies for senior post and rapid response bonus.',
    descKm: 'ទទួលបានការអាទិភាពឡើងតំណែង និងប្រាក់ឧបត្ថម្ភ។',
    descZh: '可优先晋升高级岗位并获得专项津贴。'
  }
];

export const EMPLOYEE_BENEFITS: BenefitItem[] = [
  {
    id: 'b-wing-bank',
    titleEn: 'Eligible employees may apply for Wing Bank loans from $500 to $5,000.',
    titleKm: 'ឱកាសស្នើសុំកម្ចីតាមរយៈ Wing Bank ចាប់ពី $500 ដល់ $5,000',
    titleZh: '符合条件的员工享有通过 Wing Bank 申请 $500 至 $5,000 贷款的机会',
    descEn: 'Official monthly payroll through Wing Bank accounts for all K.N.S.K employees across all job positions. Eligible employees may apply for Wing Bank loans from $500 to $5,000.',
    descKm: 'បើកប្រាក់បៀវត្សរ៍តាមរយៈគណនីធនាគារ វីង (Wing Bank) សម្រាប់បុគ្គលិក K.N.S.K ទាំងអស់គ្រប់តំណែងការងារ។ បុគ្គលិកមានឱកាសស្នើសុំកម្ចីតាមរយៈ Wing Bank ចាប់ពី $500 ដល់ $5,000។',
    descZh: '全体各岗位 K.N.S.K 员工均享受 Wing Bank 规范薪资发放。符合条件的各岗位员工均享有申请 Wing Bank $500 至 $5,000 专属贷款的机会。',
    iconName: 'Building2',
    tagEn: 'All Positions Eligible',
    tagKm: 'គ្រប់តំណែងការងារទាំងអស់',
    tagZh: '全员各岗位适用',
    clarificationEn: "Loan approval is subject to Wing Bank's eligibility requirements and approval.",
    clarificationKm: 'ការអនុម័តកម្ចី អាស្រ័យលើលក្ខខណ្ឌ និងការអនុម័តរបស់ Wing Bank។',
    clarificationZh: '贷款审批须符合 Wing Bank 的申请条件并以银行最终审批为准。',
    eligiblePositionsEn: [
      'Static Security Guard (Male / Female)',
      'Senior Security Guard / Team Leader',
      'Security Sales & Client Relationship Manager',
      'All other active K.N.S.K employees and positions'
    ],
    eligiblePositionsKm: [
      'ភ្នាក់ងារសន្តិសុខការពារប្រចាំការ (ប្រុស / ស្រី)',
      'មេក្រុមសន្តិសុខ / ភ្នាក់ងារជាន់ខ្ពស់',
      'ប្រធានផ្នែកលក់សេវាកម្មសន្តិសុខ និងទំនាក់ទំនងអតិថិជន',
      'បុគ្គលិក និងតំណែងសកម្មទាំងអស់របស់ K.N.S.K'
    ],
    eligiblePositionsZh: [
      '固定岗安保队员（男 / 女）',
      '高级安保队员 / 驻点班组长',
      '安保业务销售兼客户关系经理',
      '所有在职 K.N.S.K 员工与岗位'
    ],
    footerNoteEn: "Subject to Wing Bank Approval",
    footerNoteKm: "អាស្រ័យលើការអនុម័តរបស់ Wing Bank",
    footerNoteZh: "须符合 Wing Bank 审批条件"
  },
  {
    id: 'b-insurance',
    titleEn: 'Employee Insurance Benefits',
    titleKm: 'អត្ថប្រយោជន៍ធានារ៉ាប់រងសម្រាប់បុគ្គលិក',
    titleZh: '员工保险保障福利',
    descEn: 'Employee Insurance Benefits provided for all eligible K.N.S.K employees across all job positions to ensure on-duty safety, health security, and peace of mind.',
    descKm: 'អត្ថប្រយោជន៍ធានារ៉ាប់រងសម្រាប់បុគ្គលិក ត្រូវបានផ្តល់ជូនសម្រាប់បុគ្គលិក K.N.S.K ទាំងអស់ដែលបំពេញលក្ខខណ្ឌគ្រប់គ្រាន់ គ្រប់មុខតំណែងការងារ ដើម្បីធានាសុវត្ថិភាព និងភាពកក់ក្តៅក្នុងការបំពេញការងារ។',
    descZh: '为全体符合条件的 K.N.S.K 各岗位员工提供员工保险保障福利，确保履职期间的安心与安全。',
    iconName: 'ShieldCheck',
    tagEn: 'All Eligible Employees',
    tagKm: 'បុគ្គលិកគ្រប់លក្ខខណ្ឌទាំងអស់',
    tagZh: '全体符合条件员工',
    clarificationEn: 'Available to all eligible active employees across all roles and departments, not limited to managers or senior employees.',
    clarificationKm: 'ផ្តល់ជូនដល់បុគ្គលិកសកម្មគ្រប់លក្ខខណ្ឌទាំងអស់ ដោយមិនកម្រិតត្រឹមតែថ្នាក់គ្រប់គ្រង ឬភ្នាក់ងារជាន់ខ្ពស់ឡើយ។',
    clarificationZh: '面向所有岗位符合条件的正式在职员工，不限于管理层或资深职位。',
    eligiblePositionsEn: [
      'Static Security Guard (Male / Female)',
      'Senior Security Guard / Team Leader',
      'Security Sales & Client Relationship Manager',
      'All other active K.N.S.K employees and positions'
    ],
    eligiblePositionsKm: [
      'ភ្នាក់ងារសន្តិសុខការពារប្រចាំការ (ប្រុស / ស្រី)',
      'មេក្រុមសន្តិសុខ / ភ្នាក់ងារជាន់ខ្ពស់',
      'ប្រធានផ្នែកលក់សេវាកម្មសន្តិសុខ និងទំនាក់ទំនងអតិថិជន',
      'បុគ្គលិក និងតំណែងសកម្មទាំងអស់របស់ K.N.S.K'
    ],
    eligiblePositionsZh: [
      '固定岗安保队员（男 / 女）',
      '高级安保队员 / 驻点班组长',
      '安保业务销售兼客户关系经理',
      '所有在职 K.N.S.K 员工与岗位'
    ],
    footerNoteEn: 'All Eligible K.N.S.K Employees',
    footerNoteKm: 'សម្រាប់បុគ្គលិកគ្រប់លក្ខខណ្ឌទាំងអស់',
    footerNoteZh: '全体符合条件在职员工'
  },
  {
    id: 'b-growth',
    titleEn: 'Accelerated Merit Career Growth',
    titleKm: 'ការឡើងតំណែងរហ័សតាមសមត្ថភាព',
    titleZh: '基于绩效的快速职位晋升通道',
    descEn: 'Clear criteria for promotion to Senior Guard, Shift Supervisor, and Operations Inspector within 12 months.',
    descKm: 'មានលក្ខខណ្ឌច្បាស់លាស់ក្នុងការឡើងតំណែងជាប្រធានក្រុម ឬមន្ត្រីប្រតិបត្តិការក្នុងរយៈពេល ១២ខែ។',
    descZh: '设立清晰的考核晋升标准，表现优异者可在12个月内升任班组长或区域督察。',
    iconName: 'TrendingUp',
    tagEn: 'Fast Track',
    tagKm: 'ឡើងតំណែងរហ័ស',
    tagZh: '快速通道'
  },
  {
    id: 'b-housing',
    titleEn: 'Free Guard Housing Barracks (Provincial Team)',
    titleKm: 'កន្លែងស្នាក់នៅឥតគិតថ្លៃសម្រាប់សន្តិសុខតាមខេត្ត',
    titleZh: '外省调遣队员免费集中宿舍与餐补',
    descEn: 'Clean, safe dormitories with electricity, water, and wireless internet for guards deployed away from home.',
    descKm: 'អគារស្នាក់នៅស្អាតបាត មានទឹក ភ្លើង និងអ៊ីនធឺណិត សម្រាប់ភ្នាក់ងារដែលមកពីខេត្តឆ្ងាយ។',
    descZh: '为异地调派队员提供干净安全的集体宿舍，配备水电气及无线上网设施。',
    iconName: 'Home',
    tagEn: 'Free Dormitory',
    tagKm: 'ស្នាក់នៅឥតគិតថ្លៃ',
    tagZh: '包住福利'
  }
];

export const CULTURE_VALUES: CultureValue[] = [
  {
    id: 'c-professionalism',
    titleEn: 'Professionalism',
    titleKm: 'វិជ្ជាជីវៈនិយម',
    titleZh: '专业精神',
    descEn: 'Uncompromising attention to post posture, crisp uniforms, punctual guard handovers, and rigorous SOP execution.',
    descKm: 'ការយកចិត្តទុកដាក់ខ្ពស់លើឥរិយាបថ ឯកសណ្ឋានស្អាតបាត និងការគោរពពេលវេលា។',
    descZh: '在岗姿严谨度、制服整洁度、准时交接班及执行SOP细节上追求一丝不苟。',
    iconName: 'Briefcase'
  },
  {
    id: 'c-integrity',
    titleEn: 'Absolute Integrity',
    titleKm: 'ភាពស្មោះត្រង់ដាច់ខាត',
    titleZh: '绝对诚信',
    descEn: 'Zero tolerance for bribery, theft, or dishonesty. Complete trustworthiness in protecting client assets.',
    descKm: 'គ្មានការលើកលែងចំពោះអំពើពុករលួយ ឬភាពមិនស្មោះត្រង់។ ការទុកចិត្តបាន ១០០%។',
    descZh: '零容忍贪腐、盗窃或虚假隐瞒行为。在守护客户天额财物时做到绝对值得信赖。',
    iconName: 'ShieldCheck'
  },
  {
    id: 'c-discipline',
    titleEn: 'Military-Grade Discipline',
    titleKm: 'វិន័យម៉ឺងម៉ាត់',
    titleZh: '铁军纪律',
    descEn: 'Adherence to chain of command, radio protocols, alertness on night duty, and respectful demeanor.',
    descKm: 'ការគោរពបទបញ្ជា ការប្រុងប្រយ័ត្នខ្ពស់នៅវេនយប់ និងអាកប្បកិរិយាសមរម្យ។',
    descZh: '严格服从上级指挥链、无线电规范、保持夜间巡逻高度警惕及严谨军人作风。',
    iconName: 'CheckSquare'
  },
  {
    id: 'c-teamwork',
    titleEn: 'Unbeatable Teamwork',
    titleKm: 'ស្មារតីសាមគ្គីភាព',
    titleZh: '无间团队协作',
    descEn: 'Supporting brothers-in-arms during incidents, sharing knowledge, and functioning as one unified unit.',
    descKm: 'ការជួយគ្នាក្នុងគ្រាអាសន្ន ការចែករំលែកចំណេះដឹង និងការធ្វើការជាធ្លុងមួយ។',
    descZh: '在突发危险中相互并绳、毫无保留传帮带、形成心连心的整体防范力量。',
    iconName: 'Users'
  },
  {
    id: 'c-respect',
    titleEn: 'Mutual Respect',
    titleKm: 'ការគោរពគ្នាទៅវិញទៅមក',
    titleZh: '相互尊重',
    descEn: 'Treating colleagues, client staff, visitors, and the public with dignity and courteous manners.',
    descKm: 'ការប្រព្រឹត្តចំពោះសហការី អតិថិជន និងសាធារណជន ដោយសេចក្តីថ្លៃថ្នូរ និងការគោរព។',
    descZh: '以平等尊严的态度对待同事、客户员工、来访宾客及社会广大公众。',
    iconName: 'Heart'
  },
  {
    id: 'c-responsibility',
    titleEn: 'Vigilant Responsibility',
    titleKm: 'ស្មារតីទទួលខុសត្រូវខ្ពស់',
    titleZh: '高度高度责任感',
    descEn: 'Owning safety outcomes on site, proactively rectifying hazard spots, and taking action before breaches occur.',
    descKm: 'ទទួលខុសត្រូវលើសុវត្ថិភាពទីតាំង កែប្រែចំណុចហានិភ័យភ្លាមៗមុនពេលមានហេតុការណ៍កើតឡើង។',
    descZh: '主动对驻地安全后果负全责，在安全隐患转化为事故之前提前预警处置。',
    iconName: 'Eye'
  },
  {
    id: 'c-customer',
    titleEn: 'Customer Commitment',
    titleKm: 'ការប្តេជ្ញាចិត្តចំពោះអតិថិជន',
    titleZh: '以客户安全为中心',
    descEn: 'Placing client peace of mind at the core of all security activities and daily interactions.',
    descKm: 'តម្កល់ភាពស្ងប់ចិត្ត និងសុវត្ថិភាពរបស់អតិថិជនជាបេះដូងនៃកិច្ចការសន្តិសុខទាំងអស់។',
    descZh: '将客户的内心安宁与人身财产绝对安全置于一切安保日常工作的最高位置。',
    iconName: 'Sparkles'
  }
];

export const RECRUITMENT_FAQS: RecruitmentFaq[] = [
  {
    id: 'faq-1',
    questionEn: 'Who is eligible to apply for a security guard position at K.N.S.K?',
    questionKm: 'តើនរណាខ្លះដែលមានសិទ្ធិដាក់ពាក្យធ្វើជាភ្នាក់ងារសន្តិសុខនៅ K.N.S.K?',
    questionZh: '哪些人员符合报考K.N.S.K安保员的资格条件？',
    answerEn: 'Any Cambodian citizen aged 18 to 45 with good health, clean police background, minimum Grade 9 education, and minimum height of 168cm (Male) / 158cm (Female) can apply.',
    answerKm: 'ប្រជាពលរដ្ឋខ្មែរគ្រប់រូបដែលមានអាយុ ១៨ ដល់ ៤៥ឆ្នាំ សុខភាពល្អ គ្មានប្រវត្តិប្រព្រឹត្តបទល្មើស វប្បធម៌ចាប់ពីថ្នាក់ទី៩ និងកម្ពស់យ៉ាងតិច ១៦៨ស.ម (ប្រុស) / ១៥៨ស.ម (ស្រី) អាចដាក់ពាក្យបាន។',
    answerZh: '凡年龄在18至45周岁之间、身体健康、无刑事犯罪记录、具备初中（九年级）以上学历且身高达标（男168cm/女158cm）的柬埔寨公民均可报名。',
    category: 'General'
  },
  {
    id: 'faq-2',
    questionEn: 'Do I need prior security, military, or police experience to be accepted?',
    questionKm: 'តើខ្ញុំចាំបាច់ត្រូវមានបទពិសោធន៍សន្តិសុខ កងទ័ព ឬនគរបាលពីមុនដែរឬទេ?',
    questionZh: '没有安保、退伍军人或警察经验可以申请吗？',
    answerEn: 'No prior experience is required for entry-level guards! Every candidate undergoes fully paid initial training at our Training Academy. Prior experience is only required for supervisory positions.',
    answerKm: 'មិនទាមទារបទពិសោធន៍ពីមុនទេ! បេក្ខជនទាំងអស់នឹងទទួលបានការបណ្តុះបណ្តាលដោយទទួលបានប្រាក់ខែពេញ។ បទពិសោធន៍ត្រូវបានទាមទារសម្រាប់តែកម្រិតប្រធានក្រុមប៉ុណ្ណោះ។',
    answerZh: '无需任何经验！所有新录用队员将在K.N.S.K安保学院接受全额带薪的岗前实操培训。经验要求仅适用于班组长及主管等中高层岗位。',
    category: 'Training'
  },
  {
    id: 'faq-3',
    questionEn: 'Is training provided, and will I get paid during the training period?',
    questionKm: 'តើមានការបណ្តុះបណ្តាលជូនដែរឬទេ ហើយតើខ្ញុំទទួលបានប្រាក់ខែក្នុងពេលរៀនដែរឬទេ?',
    questionZh: '入职培训是免费的吗？培训期间是否有工资？',
    answerEn: 'Yes! All training courses are 100% free of charge. Furthermore, recruits receive their base daily salary allowance throughout the entire training boot-camp.',
    answerKm: 'បាទ/ចាស! វគ្គបណ្តុះបណ្តាលទាំងអស់គឺឥតគិតថ្លៃ ១០០%។ លើសពីនេះ បេក្ខជនទទួលបានប្រាក់បៀវត្សរ៍មូលដ្ឋានប្រចាំថ្ងៃក្នុងអំឡុងពេលហ្វឹកហាត់។',
    answerZh: '是的！所有培训课程100%免费。此外，求职队员在集训营学习的每一天均全额享受基础日薪与餐饮补贴。',
    category: 'Training'
  },
  {
    id: 'faq-4',
    questionEn: 'What are the working shifts and duty hours?',
    questionKm: 'តើកាលវិភាគធ្វើការ និងវេនសន្តិសុខមានបែបណាខ្លះ?',
    questionZh: '安保岗位的班次与作息时间是如何安排的？',
    answerEn: 'Most static security posts operate on a 12-hour rotational shift system (Day Shift: 06:00 - 18:00 / Night Shift: 18:00 - 06:00) with rotating day-off rest days per month.',
    answerKm: 'គោលដៅភាគច្រើនធ្វើការតាមវេន ១២ម៉ោង (វេនថ្ងៃ៖ ០៦:០០ - ១៨:០០ / វេនយប់៖ ១៨:០០ - ០៦:០០) ដោយមានថ្ងៃឈប់សម្រាកប្តូរវេនក្នុងមួយខែ។',
    answerZh: '绝大多数驻点岗位采用标准12小时轮班制（白班：06:00 - 18:00 / 夜班：18:00 - 06:00），每月按轮班表享有公休轮休日。',
    category: 'Work Conditions'
  },
  {
    id: 'faq-5',
    questionEn: 'Can I choose my preferred working province or location?',
    questionKm: 'តើខ្ញុំអាចជ្រើសរើសខេត្ត ឬទីតាំងធ្វើការដែលខ្ញុំចង់បានបានដែរឬទេ?',
    questionZh: '我是否可以自由选择期望工作的省份或城市？',
    answerEn: 'Yes! During application, you can state your preferred duty province. With coverage across all 25 provinces, K.N.S.K strives to deploy candidates close to their home district whenever possible.',
    answerKm: 'បាទ/ចាស! ក្នុងពេលបំពេញពាក្យសុំ អ្នកអាចបញ្ជាក់ខេត្តដែលចង់ធ្វើការ។ ដោយសារយើងមានបណ្តាញ ២៥ ខេត្ត យើងព្យាយាមចាត់តាំងនៅជិតផ្ទះរបស់អ្នក។',
    answerZh: '可以！在填写申请表时您可注明意向省份。凭借全国25个省市的庞大业务覆盖，K.N.S.K会优先考虑就近派驻您户籍所在的县区。',
    category: 'Location'
  },
  {
    id: 'faq-6',
    questionEn: 'How long does the entire recruitment process take from application to deployment?',
    questionKm: 'តើដំណើរការជ្រើសរើសបុគ្គលិកត្រូវចំណាយពេលប៉ុន្មានពីការដាក់ពាក្យរហូតដល់ចេញធ្វើការ?',
    questionZh: '从在线提交申请到正式发装上岗需要多长时间？',
    answerEn: 'The fast-track recruitment process typically takes between 3 to 7 working days, including document screening, background check, medical checkup, and quick SOP orientation.',
    answerKm: 'ដំណើរការជ្រើសរើសរហ័សជាទូទៅចំណាយពេលពី ៣ ទៅ ៧ ថ្ងៃធ្វើការ រួមមានការពិនិត្យឯកសារ ការស្រាវជ្រាវប្រវត្តិរូប ពិនិត្យសុខភាព និងការតម្រង់ទិស។',
    answerZh: '绿色通道招聘流程通常仅需 3 至 7 个工作日，高效包含初审、政审、体检与快速岗前SOP交底。',
    category: 'Process'
  },
  {
    id: 'faq-7',
    questionEn: 'Are Wing Bank loans and insurance benefits available to all job positions?',
    questionKm: 'តើឱកាសកម្ចី Wing Bank និងអត្ថប្រយោជន៍ធានារ៉ាប់រង មានផ្តល់ជូនសម្រាប់គ្រប់មុខតំណែងទាំងអស់ដែរឬទេ?',
    questionZh: 'Wing Bank 借款支持与员工保险福利是否对全体员工及各岗位均适用？',
    answerEn: "Yes! The Wing Bank loan opportunity ($500 to $5,000) and Employee Insurance Benefits are available to all eligible K.N.S.K personnel across all positions, including static security guards, team leaders, sales managers, and all active staff. Loan approval is subject to Wing Bank's eligibility requirements and approval.",
    answerKm: 'បាទ/ចាស! ឱកាសស្នើសុំកម្ចីតាមរយៈ Wing Bank ចាប់ពី $500 ដល់ $5,000 និងអត្ថប្រយោជន៍ធានារ៉ាប់រង គឺបើកទូលាយសម្រាប់បុគ្គលិក K.N.S.K ទាំងអស់គ្រប់មុខតំណែង រួមមាន ភ្នាក់ងារសន្តិសុខការពារប្រចាំការ (ប្រុស/ស្រី), មេក្រុមសន្តិសុខ, ប្រធានផ្នែកលក់សេវាកម្ម និងបុគ្គលិកសកម្មទាំងអស់។ ការអនុម័តកម្ចី អាស្រ័យលើលក្ខខណ្ឌ និងការអនុម័តរបស់ Wing Bank។',
    answerZh: '是的！Wing Bank 员工贷款申请机会（$500 至 $5,000）与员工保险保障福利对全体各岗位在职员工开放，包括驻点保安员（男/女）、班组长、业务经理以及全体在职人员。贷款审批须符合 Wing Bank 的申请条件并以银行最终审批为准。',
    category: 'Salary & Benefits'
  }
];

