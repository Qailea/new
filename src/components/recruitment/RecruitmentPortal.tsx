import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { RecruitmentSeoSchema } from './RecruitmentSeoSchema';
import { CareersHero } from './CareersHero';
import { WhyJoinSection } from './WhyJoinSection';
import { JobVacanciesGrid } from './JobVacanciesGrid';
import { RecruitmentTimeline } from './RecruitmentTimeline';
import { DocumentChecklistSection } from './DocumentChecklistSection';
import { EmployeeBenefitsSection } from './EmployeeBenefitsSection';
import { LifeAtKnskSection } from './LifeAtKnskSection';
import { MultiStepApplicationWizard } from './MultiStepApplicationWizard';
import { RecruitmentFaqAccordion } from './RecruitmentFaqAccordion';
import { Briefcase, UserPlus, Gift, HelpCircle, Compass, Clock } from 'lucide-react';

export const RecruitmentPortal: React.FC = () => {
  const { language } = useLanguage();
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>('Static Security Guard (Male / Female)');

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleSelectJobToApply = (title: string) => {
    setSelectedJobTitle(title);
    scrollToId('apply-form');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* JSON-LD SEO Structured Data for JobPostings and FAQ */}
      <RecruitmentSeoSchema />

      {/* Sticky Careers Sub-Navigation Bar */}
      <div className="sticky top-[64px] z-30 bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 gap-4 overflow-x-auto scrollbar-thin text-xs">
            
            <div className="flex items-center gap-1 font-mono text-[11px] text-amber-400 font-bold shrink-0 pr-2 border-r border-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              K.N.S.K RECRUITMENT
            </div>

            <div className="flex items-center gap-1 sm:gap-2 shrink-0 font-medium">
              <button
                onClick={() => scrollToId('vacancies')}
                className="px-3 py-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition flex items-center gap-1.5 whitespace-nowrap"
              >
                <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                <span>{language === 'km' ? 'មុខតំណែងទំនេរ' : language === 'zh' ? '岗位招聘' : 'Job Vacancies'}</span>
              </button>

              <button
                onClick={() => scrollToId('process')}
                className="px-3 py-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition flex items-center gap-1.5 whitespace-nowrap"
              >
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>{language === 'km' ? 'ដំណើរការជ្រើសរើស' : language === 'zh' ? '招聘流程' : 'Hiring Process'}</span>
              </button>

              <button
                onClick={() => scrollToId('benefits')}
                className="px-3 py-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition flex items-center gap-1.5 whitespace-nowrap"
              >
                <Gift className="w-3.5 h-3.5 text-rose-400" />
                <span>{language === 'km' ? 'អត្ថប្រយោជន៍' : language === 'zh' ? '员工福利' : 'Benefits'}</span>
              </button>

              <button
                onClick={() => scrollToId('life')}
                className="px-3 py-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition flex items-center gap-1.5 whitespace-nowrap"
              >
                <Compass className="w-3.5 h-3.5 text-emerald-400" />
                <span>{language === 'km' ? 'ជីវិតការងារ' : language === 'zh' ? '团队文化' : 'Life at K.N.S.K'}</span>
              </button>

              <button
                onClick={() => scrollToId('faq')}
                className="px-3 py-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition flex items-center gap-1.5 whitespace-nowrap"
              >
                <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
                <span>{language === 'km' ? 'សំណួរ FAQ' : language === 'zh' ? '常见问题' : 'FAQ'}</span>
              </button>
            </div>

            <button
              onClick={() => scrollToId('apply-form')}
              className="px-3.5 py-1.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-[11px] rounded-lg shadow-xs uppercase tracking-wider shrink-0 transition flex items-center gap-1.5"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>{language === 'km' ? 'ដាក់ពាក្យ' : language === 'zh' ? '在线申请' : 'Apply Online'}</span>
            </button>

          </div>
        </div>
      </div>

      {/* Hero Banner Section */}
      <CareersHero
        onApplyClick={() => scrollToId('apply-form')}
        onVacanciesClick={() => scrollToId('vacancies')}
        onProcessClick={() => scrollToId('process')}
      />

      {/* Why Join K.N.S.K Security Cards */}
      <WhyJoinSection />

      {/* Filterable Job Vacancies Grid */}
      <JobVacanciesGrid onSelectJobToApply={handleSelectJobToApply} />

      {/* 7-Step Interactive Recruitment Process */}
      <RecruitmentTimeline />

      {/* Required Document Checklist */}
      <DocumentChecklistSection />

      {/* Employee Compensation & Benefits */}
      <EmployeeBenefitsSection />

      {/* Life at K.N.S.K Corporate Culture */}
      <LifeAtKnskSection />

      {/* Multi-Step Online Application Wizard */}
      <MultiStepApplicationWizard prefilledJobTitle={selectedJobTitle} />

      {/* Searchable FAQ Accordion */}
      <RecruitmentFaqAccordion />

    </div>
  );
};
