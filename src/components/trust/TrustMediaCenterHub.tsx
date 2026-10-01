import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CorporateIntroduction } from './CorporateIntroduction';
import { WhyChooseKnskSection } from './WhyChooseKnskSection';
import { PhotoGallerySection } from './PhotoGallerySection';
import { VideoCenterSection } from './VideoCenterSection';
import { KnowledgeCenterSection } from './KnowledgeCenterSection';
import { FaqCenterSection } from './FaqCenterSection';
import { CompanyValuesSection } from './CompanyValuesSection';
import { FinalCtaBanner } from './FinalCtaBanner';
import { SeoSchemaMarkup } from './SeoSchemaMarkup';

import {
  ShieldCheck,
  Building2,
  Camera,
  Video,
  BookOpen,
  HelpCircle,
  Layers,
  FileCheck
} from 'lucide-react';

interface TrustMediaCenterHubProps {
  onNavigateTab?: (tab: string) => void;
}

export const TrustMediaCenterHub: React.FC<TrustMediaCenterHubProps> = ({ onNavigateTab }) => {
  const { language } = useLanguage();
  const [activeSubTab, setActiveSubTab] = useState<string>('all');

  const getT = (en: string, km: string, zh: string) => {
    if (language === 'km') return km;
    if (language === 'zh') return zh;
    return en;
  };

  const subNavItems = [
    { id: 'all', labelEn: 'Overview', labelKm: 'ទិដ្ឋភាពទូទៅ', labelZh: '全景概览', icon: Layers },
    { id: 'gallery', labelEn: 'Photo Gallery', labelKm: 'វិចិត្រសាលរូបថត', labelZh: '真实相册', icon: Camera },
    { id: 'company', labelEn: 'Corporate Profile', labelKm: 'ប្រវត្តិក្រុមហ៊ុន', labelZh: '企业资质与概况', icon: Building2 },
    { id: 'knowledge', labelEn: 'Knowledge Hub', labelKm: 'ចំណេះដឹងសន្តិសុខ', labelZh: '安防知识库', icon: BookOpen },
    { id: 'faq', labelEn: 'FAQ Center', labelKm: 'សំណួរចម្លើយ', labelZh: '常见问题', icon: HelpCircle },
    { id: 'values', labelEn: 'Company Values', labelKm: 'តម្លៃស្នូលក្រុមហ៊ុន', labelZh: '核心价值观', icon: ShieldCheck },
  ];

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900">
      {/* Inject SEO Schema Markup */}
      <SeoSchemaMarkup />

      {/* Hero Banner for Corporate Trust & Knowledge Center */}
      <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-900/90 text-blue-200 border border-blue-700/80 rounded-full text-xs font-bold uppercase tracking-wider">
            <FileCheck className="w-4 h-4 text-emerald-400" />
            {getT('Verified Corporate Media & Trust Center', 'មជ្ឈមណ្ឌលព័ត៌មាន និងទំនុកចិត្តផ្លូវការ', 'K.N.S.K 官方企业信任与媒体知识中心')}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight leading-tight">
            {getT(
              'Corporate Trust, Media & Knowledge Center',
              'មជ្ឈមណ្ឌលទំនុកចិត្ត ព័ត៌មាន និងចំណេះដឹងសន្តិសុខ',
              '企业信任、媒体影像与行业知识中心'
            )}
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl mx-auto font-sans leading-relaxed">
            {getT(
              'Official background credentials, Ministry of Interior approvals, CEO statement, photo & video gallery, and security knowledge base.',
              'អាជ្ញាប័ណ្ណផ្លូវការ សាររបស់នាយក រូបភាព និងវីដេអូ និងចំណេះដឹងសន្តិសុខ។',
              '汇聚内政部特许资质（第2186号）、常务董事致辞、全景图库与视频及安防实操手册。'
            )}
          </p>

          {/* Sub-Navigation Pills Bar */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {subNavItems.map((item) => {
              const IconComponent = item.icon;
              const label = getT(item.labelEn, item.labelKm, item.labelZh);
              const isActive = activeSubTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSubTab(item.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Conditional Rendering of Sections Based on SubTab */}
      <main className="space-y-0">
        {(activeSubTab === 'all' || activeSubTab === 'gallery') && (
          <PhotoGallerySection />
        )}

        {(activeSubTab === 'all' || activeSubTab === 'company') && (
          <>
            <CorporateIntroduction />
            <WhyChooseKnskSection />
          </>
        )}

        {(activeSubTab === 'all' || activeSubTab === 'media') && (
          <VideoCenterSection />
        )}

        {(activeSubTab === 'all' || activeSubTab === 'knowledge') && (
          <KnowledgeCenterSection />
        )}

        {(activeSubTab === 'all' || activeSubTab === 'faq') && (
          <FaqCenterSection />
        )}

        {(activeSubTab === 'all' || activeSubTab === 'values') && (
          <CompanyValuesSection />
        )}

        {/* Final CTA Banner always visible */}
        <FinalCtaBanner onNavigateTab={onNavigateTab} />
      </main>
    </div>
  );
};
