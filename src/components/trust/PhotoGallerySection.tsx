import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  Camera,
  ShieldCheck,
  Award,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Building,
  Truck,
  Users,
  Compass
} from 'lucide-react';

import knskCertificate from '../../assets/images/certificate_knsk.png';
import knskGuards2 from '../../assets/images/KNSK_Guards2.jpg';
import knskGuards3 from '../../assets/images/KNSK_Guards3.jpg';
import knskGuards4 from '../../assets/images/KNSK_Guards4.jpg';
import knskOperations2 from '../../assets/images/KNSK_Operations2.jpg';
import knskOperations3 from '../../assets/images/KNSK_Operations3.jpg';
import knskPatrol2 from '../../assets/images/KNSK_Patrol2.jpg';

export interface GalleryPhoto {
  id: string;
  src: string;
  category: 'license' | 'guards' | 'operations' | 'patrol';
  titleEn: string;
  titleKm: string;
  titleZh: string;
  captionEn: string;
  captionKm: string;
  captionZh: string;
  locationEn: string;
  locationKm: string;
  locationZh: string;
  tagEn: string;
  tagKm: string;
  tagZh: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'cert-1',
    src: knskCertificate,
    category: 'license',
    titleEn: 'Official Business Licenses & Accreditation',
    titleKm: 'អាជ្ញាប័ណ្ណ និងវិញ្ញាបនបត្រអាជីវកម្មផ្លូវការ',
    titleZh: '官方营业执照与特许资质证书',
    captionEn: 'Official business licenses and certificates issued by the Ministry of Interior, General Commissariat of National Police, and commercial authorities.',
    captionKm: 'អាជ្ញាប័ណ្ណ និងវិញ្ញាបនបត្រអាជីវកម្មផ្លូវការចេញដោយក្រសួងមហាផ្ទៃ អគ្គស្នងការដ្ឋាននគរបាលជាតិ និងអាជ្ញាធរពាណិជ្ជកម្ម។',
    captionZh: '内政部、国家警察总署及商业部颁发的合法安防特许牌照与正式注册执照。',
    locationEn: 'Ministry of Interior / General Commissariat of National Police',
    locationKm: 'ក្រសួងមហាផ្ទៃ / អគ្គស្នងការដ្ឋាននគរបាលជាតិ',
    locationZh: '内政部 / 柬埔寨国家警察总署',
    tagEn: 'Official Licenses',
    tagKm: 'អាជ្ញាប័ណ្ណផ្លូវការ',
    tagZh: '官方资质',
  },
  {
    id: 'guards-headquarters',
    src: knskGuards2,
    category: 'guards',
    titleEn: 'Large Group of Guards Outside Headquarters',
    titleKm: 'កម្លាំងសន្តិសុខជួបជុំនៅមុខទីស្នាក់ការកណ្តាល',
    titleZh: '总部大楼前安保主力队伍列队',
    captionEn: 'Large group of professional uniformed guards assembled outside the K.N.S.K corporate headquarters ready for operational deployment.',
    captionKm: 'កងកម្លាំងសន្តិសុខឯកសណ្ឋាន K.N.S.K ជួបជុំគ្នានៅមុខទីស្នាក់ការកណ្តាលក្រុមហ៊ុន ត្រៀមចេញបំពេញបេសកកម្ម។',
    captionZh: '在K.N.S.K企业总部大楼前集合整装待发的专业安保主力执勤方阵。',
    locationEn: 'Phnom Penh HQ',
    locationKm: 'ទីស្នាក់ការកណ្តាល រាជធានីភ្នំពេញ',
    locationZh: '金边总部大楼',
    tagEn: 'Headquarters Formation',
    tagKm: 'ជួបជុំនៅទីស្នាក់ការ',
    tagZh: '总部列队',
  },
  {
    id: 'guards-garden',
    src: knskGuards3,
    category: 'guards',
    titleEn: 'Hotel & Restaurant Security',
    titleKm: 'សេវាសន្តិសុខសណ្ឋាគារ និងភោជនីយដ្ឋាន',
    titleZh: '酒店与餐饮场所专业安保',
    captionEn: 'Guards deployed for luxury hotels, resorts, and restaurants, providing guest greeting, parking coordination, and continuous perimeter protection.',
    captionKm: 'កងកម្លាំងសន្តិសុខដាក់ពង្រាយសម្រាប់សណ្ឋាគារ រីស៊ត និងភោជនីយដ្ឋាន ការពារសុវត្ថិភាពភ្ញៀវ សម្រួលចំណត និងល្បាតជុំវិញទីតាំង។',
    captionZh: '在高端酒店、度假村与餐饮场所执勤的专业安保队伍，执行宾客礼仪问候、车流疏导与全方位周界防护。',
    locationEn: 'Hospitality & Dining Sector',
    locationKm: 'តំបន់បដិសណ្ឋារកិច្ច និងភោជនីយដ្ឋាន',
    locationZh: '酒店与餐饮项目现场',
    tagEn: 'Hospitality Security',
    tagKm: 'សន្តិសុខបដិសណ្ឋារកិច្ច',
    tagZh: '酒店餐饮安保',
  },
  {
    id: 'guards-coastal',
    src: knskGuards4,
    category: 'guards',
    titleEn: 'School & University Campus Security',
    titleKm: 'សេវាសន្តិសុខសាលារៀន និងសាកលវិទ្យាល័យ',
    titleZh: '学校与大学校园安全防范',
    captionEn: 'Dedicated campus security officers ensuring student safety, visitor checkpoint screening, and round-the-clock protection across educational grounds.',
    captionKm: 'ភ្នាក់ងារសន្តិសុខប្រចាំការការពារសុវត្ថិភាពសិស្ស-និស្សិត ត្រួតពិនិត្យការចេញចូលច្រកទ្វារ និងការពារសណ្តាប់ធ្នាប់ទូទាំងបរិវេណអប់រំ។',
    captionZh: '常驻校园安全官守护师生人身安全、严格落实访客出入查验登记，构筑全方位校园安全屏障。',
    locationEn: 'Campus & Education Sector',
    locationKm: 'បរិវេណគ្រឹះស្ថានអប់រំ',
    locationZh: '教育与大学园区',
    tagEn: 'Campus Protection',
    tagKm: 'ការពារគ្រឹះស្ថានសិក្សា',
    tagZh: '校园安防',
  },
  {
    id: 'ops-entrance',
    src: knskOperations2,
    category: 'operations',
    titleEn: 'Guards Gathered at Client Site Entrance Gate',
    titleKm: 'កម្លាំងសន្តិសុខនៅច្រកទ្វារធំទីតាំងអតិថិជន',
    titleZh: '客户项目出入口主大门安防执勤现场',
    captionEn: 'Guards gathered at a client site entrance gate, conducting structured visitor screening and checkpoint access control.',
    captionKm: 'កម្លាំងសន្តិសុខជួបជុំគ្នានៅច្រកទ្វារធំទីតាំងអតិថិជន ដើម្បីអនុវត្តការត្រួតពិនិត្យ និងគ្រប់គ្រងចេញចូលយ៉ាងហ្មត់ចត់។',
    captionZh: '安保队伍在客户出入口主大门执行严格的人员验证与车辆通行安检管控。',
    locationEn: 'Client Access Gate',
    locationKm: 'ច្រកទ្វារធំទីតាំងអតិថិជន',
    locationZh: '客户主要出入闸口',
    tagEn: 'Access Control',
    tagKm: 'ត្រួតពិនិត្យច្រកទ្វារ',
    tagZh: '出入口管控',
  },
  {
    id: 'ops-blue-uniforms',
    src: knskOperations3,
    category: 'operations',
    titleEn: 'Event & Crowd Control Security',
    titleKm: 'សេវាសន្តិសុខព្រឹត្តិការណ៍ និងគ្រប់គ្រងហ្វូងមនុស្ស',
    titleZh: '大型活动与人群集会秩序安保',
    captionEn: 'Guards lined up in official blue uniforms for operational briefings and tactical coordination during major events, concerts, and public gatherings.',
    captionKm: 'បុគ្គលិកសន្តិសុខឯកសណ្ឋានពណ៌ខៀវតម្រង់ជួរ ទទួលការណែនាំផែនការប្រតិបត្តិការ និងសម្របសម្រួលសណ្តាប់ធ្នាប់ក្នុងព្រឹត្តិការណ៍ធំៗ។',
    captionZh: '身着蓝色正规制服的安保方阵列队接受战术布防指令，为大型展会、演艺赛事及集会人群提供专业秩序维护。',
    locationEn: 'Event Operations Ground',
    locationKm: 'ទីធ្លាប្រតិបត្តិការព្រឹត្តិការណ៍',
    locationZh: '大型活动勤务现场',
    tagEn: 'Crowd Control',
    tagKm: 'គ្រប់គ្រងហ្វូងមនុស្ស',
    tagZh: '人流管控',
  },
  {
    id: 'patrol-truck',
    src: knskPatrol2,
    category: 'patrol',
    titleEn: 'Mobile Patrol Truck with Security Officers',
    titleKm: 'រថយន្តល្បាត និងមន្ត្រីសន្តិសុខអន្តរាគមន៍',
    titleZh: '专属移动巡逻皮卡车队与巡防安保官',
    captionEn: 'Our company patrol truck with officers equipped for active mobile patrols, rapid intervention, and scheduled route inspection.',
    captionKm: 'រថយន្តល្បាតចល័តផ្លូវការរបស់ក្រុមហ៊ុនជាមួយមន្ត្រីសន្តិសុខ ត្រៀមចុះល្បាត និងអន្តរាគមន៍រហ័សទាន់ពេលវេលា។',
    captionZh: '公司配置的移动巡逻皮卡勤务车与随车安全官，保障快速响应与全区域机动巡视。',
    locationEn: 'Mobile Patrol Division',
    locationKm: 'ផ្នែករថយន្តល្បាតចល័ត',
    locationZh: '机动巡防机动组',
    tagEn: 'Mobile Patrol Fleet',
    tagKm: 'កងរថយន្តល្បាត',
    tagZh: '机动巡防车',
  },
];

export const PhotoGallerySection: React.FC = () => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const getT = (en: string, km: string, zh: string) => {
    if (language === 'km') return km;
    if (language === 'zh') return zh;
    return en;
  };

  const categories = [
    { id: 'all', labelEn: 'All Photos (7)', labelKm: 'រូបភាពទាំងអស់ (៧)', labelZh: '全部真实照片 (7)', icon: Camera },
    { id: 'guards', labelEn: 'Guards & Formations', labelKm: 'កម្លាំងសន្តិសុខ', labelZh: '安保阵容', icon: Users },
    { id: 'operations', labelEn: 'Operations & Sites', labelKm: 'ប្រតិបត្តិការទីតាំង', labelZh: '现场勤务', icon: Compass },
    { id: 'patrol', labelEn: 'Patrol Vehicle Fleet', labelKm: 'រថយន្តល្បាត', labelZh: '巡逻车队', icon: Truck },
    { id: 'license', labelEn: 'Official Licenses', labelKm: 'អាជ្ញាប័ណ្ណផ្លូវការ', labelZh: '执照证书', icon: Award },
  ];

  const filteredPhotos = selectedCategory === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);

  const handleOpenLightbox = (index: number) => {
    setActivePhotoIndex(index);
  };

  const handleCloseLightbox = () => {
    setActivePhotoIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) => (prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0));
    }
  };

  const activePhoto = activePhotoIndex !== null ? filteredPhotos[activePhotoIndex] : null;

  return (
    <section id="trust-photo-gallery" className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-600/50 text-blue-300 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Camera className="w-4 h-4 text-emerald-400" />
            <span>{getT('Authentic Corporate & Field Photography', 'រូបភាពពិតនៃសកម្មភាព និងក្រុមហ៊ុន K.N.S.K', 'K.N.S.K 真实企业与外勤执勤图库')}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-white tracking-tight">
            {getT(
              'Real Company Photo Gallery',
              'វិចិត្រសាលរូបភាពពិតរបស់ក្រុមហ៊ុន K.N.S.K',
              'K.N.S.K 官方真实影像画廊'
            )}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            {getT(
              'Explore authentic photographs of our uniformed guard teams, company headquarters, operational access control checkpoints, mobile patrol vehicles, and official Ministry of Interior business licenses.',
              'ទស្សនារូបភាពពិតនៃកងកម្លាំងសន្តិសុខឯកសណ្ឋាន ទីស្នាក់ការកណ្តាល ច្រកទ្វារការពារទីតាំង រថយន្តល្បាត និងអាជ្ញាប័ណ្ណផ្លូវការរបស់ក្រុមហ៊ុន។',
              '展示我们正规着装的安保队员、企业总部、客户大门查验哨卡、巡逻专用皮卡以及内政部官方特许执照的真实影像。'
            )}
          </p>

          {/* Category Filter Chips */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const IconComp = cat.icon;
              const isSelected = selectedCategory === cat.id;
              const label = getT(cat.labelEn, cat.labelKm, cat.labelZh);

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-102'
                      : 'bg-slate-850 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/80'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo, index) => {
            const title = getT(photo.titleEn, photo.titleKm, photo.titleZh);
            const caption = getT(photo.captionEn, photo.captionKm, photo.captionZh);
            const location = getT(photo.locationEn, photo.locationKm, photo.locationZh);
            const tag = getT(photo.tagEn, photo.tagKm, photo.tagZh);

            return (
              <div
                key={photo.id}
                onClick={() => handleOpenLightbox(index)}
                className="group relative bg-slate-950 rounded-2xl border border-slate-800/90 overflow-hidden shadow-xl hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
              >
                {/* Image Frame */}
                <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <img
                    src={photo.src}
                    alt={title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="bg-blue-900/90 text-blue-200 border border-blue-500/40 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-sm">
                      {tag}
                    </span>
                  </div>

                  {/* Top Right Zoom Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/80 border border-slate-700 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm shadow-md">
                    <Maximize2 className="w-4 h-4 text-blue-300" />
                  </div>

                  {/* Bottom Location Indicator */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-slate-300">
                    <span className="flex items-center gap-1.5 truncate bg-slate-950/70 px-2 py-0.5 rounded backdrop-blur-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{location}</span>
                    </span>
                    <span className="text-[10px] text-emerald-300 font-bold uppercase tracking-wider shrink-0 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                      {getT('Authentic', 'រូបពិត', '真实照片')}
                    </span>
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-white font-serif group-hover:text-blue-300 transition-colors line-clamp-1">
                      {title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {caption}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1 text-[11px] text-blue-400 font-semibold group-hover:text-blue-300">
                      <Camera className="w-3.5 h-3.5" />
                      <span>{getT('Click to view full photo', 'ចុចដើម្បីមើលរូបភាពធំ', '点击查看大图')}</span>
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">KNSK-IMG</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Note */}
        <div className="mt-12 p-5 bg-slate-950/80 border border-slate-800 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-900/50 border border-blue-500/40 flex items-center justify-center shrink-0 text-blue-300">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="font-bold text-white">
                {getT('100% Genuine Field Photography', 'រូបភាពពិតពីការអនុវត្តការងារជាក់ស្តែង ១០០%', '100% 真实执勤作业与合规证书影像')}
              </p>
              <p className="text-slate-400 text-[11px]">
                {getT(
                  'All featured photographs depict real K.N.S.K operations, deployed personnel, patrol units, and official government credentials.',
                  'រូបថតទាំងអស់ឆ្លុះបញ្ចាំងពីសកម្មភាពពិតរបស់កងកម្លាំងសន្តិសុខ រថយន្តល្បាត និងអាជ្ញាប័ណ្ណផ្លូវការរបស់ក្រុមហ៊ុន K.N.S.K។',
                  '所有展示图片均为K.N.S.K现场实际安保官、巡逻车辆及正式政府资质文件的真实记录。'
                )}
              </p>
            </div>
          </div>
          <div className="shrink-0 text-right">
            <span className="inline-block bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700 text-slate-200 text-xs font-semibold">
              {getT('7 Photos Documented', 'ឯកសាររូបថតចំនួន ៧', '7 张实地档案记录')}
            </span>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={handleCloseLightbox}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseLightbox}
            aria-label="Close Lightbox"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-slate-900/90 border border-slate-700 text-slate-200 hover:text-white hover:bg-slate-850 flex items-center justify-center z-50 cursor-pointer shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation: Previous Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Photo"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/90 border border-slate-700 text-white hover:bg-blue-600 flex items-center justify-center z-50 cursor-pointer transition shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation: Next Button */}
          <button
            onClick={handleNext}
            aria-label="Next Photo"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/90 border border-slate-700 text-white hover:bg-blue-600 flex items-center justify-center z-50 cursor-pointer transition shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content Frame */}
          <div
            className="max-w-5xl w-full bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main High-Res Image View */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[320px] max-h-[65vh]">
              <img
                src={activePhoto.src}
                alt={getT(activePhoto.titleEn, activePhoto.titleKm, activePhoto.titleZh)}
                className="max-h-[65vh] w-auto max-w-full object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-4 left-4 bg-blue-900/90 text-blue-200 border border-blue-500/40 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md backdrop-blur-sm">
                {getT(activePhoto.tagEn, activePhoto.tagKm, activePhoto.tagZh)}
              </span>
            </div>

            {/* Modal Bottom Caption Bar */}
            <div className="p-6 bg-slate-950 border-t border-slate-800/90 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-lg sm:text-xl font-bold font-serif text-white">
                  {getT(activePhoto.titleEn, activePhoto.titleKm, activePhoto.titleZh)}
                </h4>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-emerald-950 text-emerald-300 border border-emerald-600/40 rounded text-xs font-bold">
                    ✓ {getT('Verified Real Photo', 'រូបថតពិតជាក់ស្តែង', '官方实拍')}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {activePhotoIndex !== null ? `${activePhotoIndex + 1} / ${filteredPhotos.length}` : ''}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {getT(activePhoto.captionEn, activePhoto.captionKm, activePhoto.captionZh)}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{getT(activePhoto.locationEn, activePhoto.locationKm, activePhoto.locationZh)}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
