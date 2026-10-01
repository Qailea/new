import headquarters1Img from '../assets/images/KNSK_Headquarters.jpg';
import headquarters2Img from '../assets/images/KNSK_Headquarters.jpg';
import headquarters3Img from '../assets/images/KNSK_Patrol.jpg';

export interface OfficeLocation {
  id: string;
  nameEn: string;
  nameKm: string;
  nameZh: string;
  type: 'Head Office' | 'Regional Office' | 'Branch Office';
  typeKm: string;
  typeZh: string;
  addressEn: string;
  addressKm: string;
  addressZh: string;
  phone: string[];
  email: string;
  businessHoursEn: string;
  businessHoursKm: string;
  businessHoursZh: string;
  servicesEn: string[];
  servicesKm: string[];
  servicesZh: string[];
  imageUrl: string;
  coordinates: { lat: number; lng: number };
  province: string;
}

export const KNSK_OFFICES: OfficeLocation[] = [
  {
    id: 'headquarters_1',
    nameEn: 'K.N.S.K Headquarters 1 (Chamkar Mon)',
    nameKm: 'ស្នាក់ការទី ១ (ចំការមន)',
    nameZh: 'K.N.S.K 第一总部 (Chamkar Mon 桑园区)',
    type: 'Head Office',
    typeKm: 'ស្នាក់ការកណ្តាល',
    typeZh: '总部大楼',
    addressEn: 'House No. 9E1, Street 205, Village 10, Tuol Svay Prey II, Chamkar Mon, Phnom Penh',
    addressKm: 'ផ្ទះលេខ៩E១ ផ្លូវលេខ២០៥ ភូមិ១០ សង្កាត់ទួលស្វាយព្រៃ២ ខណ្ឌចំការមន រាជធានីភ្នំពេញ',
    addressZh: '金边市桑园区Tuol Svay Prey II分区10村205街第9E1号',
    phone: ['096 483 8666', '093 878 666'],
    email: 'soengknsk@gmail.com',
    businessHoursEn: 'Mon - Sat: 8:00 AM - 5:00 PM | Operations Command: 24/7/365',
    businessHoursKm: 'ចន្ទ - សៅរ៍: ៨:០០ ព្រឹក - ៥:០០ ល្ងាច | បញ្ជាការប្រតិបត្តិការ: ២៤/៧/៣៦៥',
    businessHoursZh: '周一至周六: 8:00 AM - 5:00 PM | 24/7/365 全天候中控指挥部',
    servicesEn: ['HQ Central Dispatch', 'Guard Operations Command', 'VIP Close Protection', 'Cash in Transit', 'Security Audits', 'Recruitment Center'],
    servicesKm: ['មជ្ឈមណ្ឌលបញ្ជាការកណ្តាល', 'ការគ្រប់គ្រងប្រតិបត្តិការសន្តិសុខ', 'អង្គរក្សការពារឥស្សរជន (VIP)', 'សេវាដឹកជញ្ជូនប្រាក់', 'សវនកម្មសន្តិសុខ', 'មជ្ឈមណ្ឌលជ្រើសរើសបុគ្គលិក'],
    servicesZh: ['总部中控调度', '全国保安调度指挥', 'VIP近身保镖', '武装押运', '安防评估', '招聘中心'],
    imageUrl: headquarters1Img,
    coordinates: { lat: 11.5432, lng: 104.9122 },
    province: 'Phnom Penh'
  },
  {
    id: 'headquarters_2',
    nameEn: 'K.N.S.K Headquarters 2 (Kamboul)',
    nameKm: 'ស្នាក់ការទី ២ (កំបូល)',
    nameZh: 'K.N.S.K 第二分站 (Kamboul 贡武区)',
    type: 'Branch Office',
    typeKm: 'សាខាប្រតិបត្តិការ',
    typeZh: '分支机构',
    addressEn: 'House No. 41.82, National Road 3, Tuol Kei Village, Phleung Chheh Roteh, Kamboul, Phnom Penh',
    addressKm: 'ផ្ទះលេខ៤១.៨២ ផ្លូវជាតិលេខ៣ ភូមិទួលកី សង្កាត់ភ្លើងឆេះរទេះ ខណ្ឌកំបូល រាជធានីភ្នំពេញ',
    addressZh: '金边市贡武区Phleung Chheh Roteh分区Tuol Kei村3号国道第41.82号',
    phone: ['096 483 8666', '060 878 666'],
    email: 'soengknsk@gmail.com',
    businessHoursEn: 'Mon - Sat: 8:00 AM - 5:00 PM | Industrial Patrol: 24/7',
    businessHoursKm: 'ចន្ទ - សៅរ៍: ៨:០០ ព្រឹក - ៥:០០ ល្ងាច | ល្បាតរោងចក្រ: ២៤/៧',
    businessHoursZh: '周一至周六: 8:00 AM - 5:00 PM | 厂区联防 24/7',
    servicesEn: ['Factory & SEZ Guarding', 'Warehouse Logistics Security', 'Heavy Vehicle Escort'],
    servicesKm: ['សន្តិសុខរោងចក្រ និងតំបន់សេដ្ឋកិច្ចពិសេស', 'សន្តិសុខឃ្លាំងស្តុកទំនិញ', 'ល្បាតរថយន្តធុនធ្ងន់'],
    servicesZh: ['工厂及SEZ特区安保', '仓储物流防盗', '重型车队护航'],
    imageUrl: headquarters2Img,
    coordinates: { lat: 11.4891, lng: 104.8105 },
    province: 'Phnom Penh'
  },
  {
    id: 'headquarters_3',
    nameEn: 'K.N.S.K Headquarters 3 (Chrey Thom)',
    nameKm: 'ស្នាក់ការទី ៣ - ជ្រៃធំ',
    nameZh: 'K.N.S.K 第三分站 (Chrey Thom 柴通)',
    type: 'Regional Office',
    typeKm: 'ការិយាល័យប្រចាំតំបន់',
    typeZh: '区域办事处',
    addressEn: 'National Road 21A, Prek Sdey, Sampov Poun City, Koh Thom District, Kandal Province',
    addressKm: 'ផ្លូវជាតិលេខ២១អា សង្កាត់ព្រែកស្តី ក្រុងសំពៅពូន ស្រុកកោះធំ ខេត្តកណ្តាល',
    addressZh: '干丹省桑宝奔市戈通县Prek Sdey分区21A号国道',
    phone: ['096 483 8666', '093 878 666', '060 878 666'],
    email: 'soengknsk@gmail.com',
    businessHoursEn: 'Mon - Sat: 8:00 AM - 5:00 PM | Border Patrol Command: 24/7',
    businessHoursKm: 'ចន្ទ - សៅរ៍: ៨:០០ ព្រឹក - ៥:០០ ល្ងាច | ល្បាតព្រំដែន: ២៤/៧',
    businessHoursZh: '周一至周六: 8:00 AM - 5:00 PM | 边境特区中控 24/7',
    servicesEn: ['SEZ Border Security', 'Casino & Resort Protection', 'Border Trade Logistics Patrol'],
    servicesKm: ['សន្តិសុខព្រំដែន SEZ', 'សន្តិសុខកាស៊ីណូ និងរីសត', 'ល្បាតពាណិជ្ជកម្មព្រំដែន'],
    servicesZh: ['SEZ边境特区安保', '娱乐城及度假村巡逻', '跨境贸易通关安防'],
    imageUrl: headquarters3Img,
    coordinates: { lat: 10.9822, lng: 105.0811 },
    province: 'Kandal'
  }
];

export const OFFICIAL_CONTACT_CHANNELS = [
  {
    id: 'phone_hotline',
    platform: '24/7 Emergency Hotline',
    labelEn: '096 483 8666',
    labelKm: '០៩៦ ៤៨៣ ៨៦៦៦',
    labelZh: '096 483 8666',
    actionUrl: 'tel:0964838666',
    icon: 'PhoneCall',
    badge: '24/7 Hotline'
  },
  {
    id: 'phone_ops_1',
    platform: 'Official Phone',
    labelEn: '093 878 666',
    labelKm: '០៩៣ ៨៧៨ ៦៦៦',
    labelZh: '093 878 666',
    actionUrl: 'tel:093878666',
    icon: 'Phone',
    badge: 'Operations & Sales'
  },
  {
    id: 'phone_ops_2',
    platform: 'Official Phone',
    labelEn: '060 878 666',
    labelKm: '០៦០ ៨៧៨ ៦៦៦',
    labelZh: '060 878 666',
    actionUrl: 'tel:060878666',
    icon: 'Phone',
    badge: 'General Inquiries'
  },
  {
    id: 'telegram',
    platform: 'Official Telegram',
    labelEn: 'Telegram (@KNSK_security)',
    labelKm: 'Telegram (@KNSK_security)',
    labelZh: '官方 Telegram (@KNSK_security)',
    actionUrl: 'https://t.me/KNSK_security',
    icon: 'Send',
    badge: 'Instant Dispatch'
  },
  {
    id: 'whatsapp',
    platform: 'Official WhatsApp',
    labelEn: 'WhatsApp (+855 96 483 8666)',
    labelKm: 'WhatsApp (+៨៥៥ ៩៦ ៤៨៣ ៨៦៦៦)',
    labelZh: '官方 WhatsApp (+855 96 483 8666)',
    actionUrl: 'https://wa.me/855964838666?s=t',
    icon: 'MessageSquare',
    badge: 'Official WhatsApp'
  },
  {
    id: 'facebook',
    platform: 'Official Facebook',
    labelEn: 'Facebook (K.N.S.K Security)',
    labelKm: 'Facebook (K.N.S.K Security)',
    labelZh: '官方 Facebook (K.N.S.K Security)',
    actionUrl: 'https://www.facebook.com/share/1BrYBJpnQk/',
    icon: 'Facebook',
    badge: 'Verified Page'
  },
  {
    id: 'email',
    platform: 'Official Email',
    labelEn: 'soengknsk@gmail.com',
    labelKm: 'soengknsk@gmail.com',
    labelZh: 'soengknsk@gmail.com',
    actionUrl: 'mailto:soengknsk@gmail.com',
    icon: 'Mail',
    badge: 'Official Email'
  }
];

export const COVERAGE_FAQS = [
  {
    id: 'faq_quote',
    qEn: 'How do I request an official quotation?',
    qKm: 'តើខ្ញុំអាចស្នើសុំការប្រកួតប្រជែងតម្លៃផ្លូវការដោយរបៀបណា?',
    qZh: '如何申请官方安保服务报价方案？',
    aEn: 'You can use our step-by-step Quotation Wizard on this page, call our sales department at 096 483 8666, or message us on Telegram (@KNSK_security). Our senior command staff will schedule a free site inspection within 24 hours.',
    aKm: 'អ្នកអាចប្រើប្រាស់កម្មវិធីគណនាតម្លៃនៅលើទំព័រនេះ ទាក់ទងទូរស័ព្ទផ្នែកលក់ ០៩៦ ៤៨៣ ៨៦៦៦ ឬផ្ញើសារតាម Telegram (@KNSK_security)។ ក្រុមការងារយើងខ្ញុំនឹងចុះពិនិត្យទីតាំងដោយឥតគិតថ្លៃក្នុងរយៈពេល ២៤ ម៉ោង។',
    aZh: '您可以通过本页面的9步报价向导在线提交、拨打销售热线 096 483 8666 或发送Telegram (@KNSK_security)。我们的高级安防指挥官将在24小时内安排免费上门勘测。'
  },
  {
    id: 'faq_deploy_speed',
    qEn: 'How quickly can K.N.S.K deploy guards to our facility?',
    qKm: 'តើ K.N.S.K អាចបញ្ជូនភ្នាក់ងារសន្តិសុខបានលឿនប៉ុណ្ណា?',
    qZh: 'K.N.S.K 队员最快多久可以进驻场地？',
    aEn: 'For standard commercial and factory guard requests in Phnom Penh, Kandal, and main provinces, deployment can commence within 24 to 48 hours after agreement. For urgent emergency backup, our rapid response patrol teams can arrive on site within 2 to 4 hours.',
    aKm: 'សម្រាប់ការបញ្ជូនភ្នាក់ងារធម្មតានៅភ្នំពេញ កណ្តាល និងខេត្តសំខាន់ៗ ការដាក់ពង្រាយអាចធ្វើឡើងក្នុងរយៈពេល ២៤ ទៅ ៤៨ ម៉ោងបន្ទាប់ពីចុះកិច្ចសន្យា។ សម្រាប់ករណីបន្ទាន់ ក្បួនល្បាតអាចទៅដល់ក្នុងរយៈពេល ២ ទៅ ៤ ម៉ោង។',
    aZh: '对于金边、干丹及主要省份的标准商业与工厂驻守，可在签约后 24 至 48 小时内准时进驻。如遇突发紧急需求，机动巡逻车队可在 2 至 4 小时内快速抵达。'
  },
  {
    id: 'faq_provinces',
    qEn: 'Which provinces in Cambodia do you serve?',
    qKm: 'តើ K.N.S.K ផ្តល់សេវាកម្មនៅខេដ្ឋណាខ្លះ?',
    qZh: 'K.N.S.K 服务覆盖柬埔寨哪些省份？',
    aEn: 'K.N.S.K Security Co., Ltd. provides 100% active operational coverage across all 25 provinces and Phnom Penh Capital City. We maintain regional command posts in key hubs like Siem Reap, Sihanoukville, Bavet, Poipet, and Koh Thom.',
    aKm: 'ក្រុមហ៊ុន K.N.S.K ផ្តល់សេវាកម្មសន្តិសុខគ្របដណ្តប់ ១០០% លើគ្រប់ ២៥ រាជធានី-ខេត្ត។ យើងមានស្ថានីយបញ្ជាការប្រចាំតំបន់នៅសៀមរាប ព្រះសីហនុ បាវិត ប៉ោយប៉ែត និងកោះធំ។',
    aZh: 'K.N.S.K 安保有限公司 100% 覆盖柬埔寨全境 25 个省份及金边首都。我们在暹粒、西港、巴域、波贝及哥通等战略要地均设有驻地指挥所。'
  },
  {
    id: 'faq_temp_guards',
    qEn: 'Can I request temporary guards for short-term events or construction?',
    qKm: 'តើខ្ញុំអាចជួលភ្នាក់ងារសន្តិសុខបណ្តោះអាសន្នសម្រាប់ព្រឹត្តិការណ៍ ឬការដ្ឋានបានទេ?',
    qZh: '可以申请短期的临时安保人员（如大型活动或施工期）吗？',
    aEn: 'Yes! K.N.S.K provides flexible short-term guarding solutions ranging from 1-day event security to multi-month construction site protection with 24/7 supervisor oversight.',
    aKm: 'បានយ៉ាងពិតប្រាកដ! K.N.S.K ផ្តល់ជូនសេវាកម្មសន្តិសុខបណ្តោះអាសន្នបត់បែន ចាប់ពីព្រឹត្តិការណ៍ ១ ថ្ងៃ រហូតដល់ការដ្ឋានសំណង់ច្រើនខែ ដោយមានការត្រួតពិនិត្យ ២៤/៧។',
    aZh: '完全可以！K.N.S.K 提供极具弹性的一站式短期安保服务，涵盖单日大型会展、文娱活动到数月的建筑施工场地看守，均配备 24/7 督导检查。'
  },
  {
    id: 'faq_ops_contact',
    qEn: 'How do I contact Operations & Supervision during non-office hours?',
    qKm: 'តើខ្ញុំអាចទាក់ទងផ្នែកប្រតិបត្តិការក្រៅម៉ោងធ្វើការដោយរបៀបណា?',
    qZh: '非工作时间如何联系 24 小时中控指挥部？',
    aEn: 'Our Central Dispatch Operations Room functions 24 hours a day, 365 days a year. You can reach the duty commander anytime via our emergency hotline 096 483 8666, 093 878 666, or 060 878 666, or via Telegram.',
    aKm: 'មជ្ឈមណ្ឌលបញ្ជាការប្រតិបត្តិការកណ្តាលរបស់យើងខ្ញុំដំណើរការ ២៤ ម៉ោងក្នុងមួយថ្ងៃ ៣៦៥ ថ្ងៃក្នុងមួយឆ្នាំ។ អ្នកអាចទាក់ទងប្រធានវេនបានគ្រប់ពេលវេលាតាមលេខ ០៩៦ ៤៨៣ ៨៦៦៦, ០៩៣ ៨៧៨ ៦៦៦ ឬ ០៦០ ៨៧៨ ៦៦៦ ឬ Telegram។',
    aZh: '我们的中央调度中控指挥部全年 365 天、每天 24 小时不间断运行。您可随时拨打紧急热线 096 483 8666、093 878 666 或 060 878 666，或通过 Telegram 直接联系值班指挥官。'
  }
];
