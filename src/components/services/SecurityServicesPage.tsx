import React from 'react';
import { ServicesHero } from './ServicesHero';
import { ServicesGridDetailed } from './ServicesGridDetailed';
import { InteractiveServiceFinder } from './InteractiveServiceFinder';
import { ServiceProcessWorkflow } from './ServiceProcessWorkflow';
import { WhyOurServicesQA } from './WhyOurServicesQA';
import { TacticalEquipmentShowcase } from './TacticalEquipmentShowcase';
import { IndustriesProtectionGrid } from './IndustriesProtectionGrid';
import { ServicesFaq } from './ServicesFaq';
import { ServicesCtaBanner } from './ServicesCtaBanner';

interface SecurityServicesPageProps {
  setActiveTab: (tab: string) => void;
  onOpenEmergency: () => void;
}

export const SecurityServicesPage: React.FC<SecurityServicesPageProps> = ({ setActiveTab, onOpenEmergency }) => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Hero Banner with Breadcrumbs & Schema.org */}
      <ServicesHero setActiveTab={setActiveTab} onOpenEmergency={onOpenEmergency} />

      {/* 15 Manned Security Services Grid */}
      <ServicesGridDetailed setActiveTab={setActiveTab} />

      {/* Interactive Service Finder Wizard */}
      <InteractiveServiceFinder setActiveTab={setActiveTab} />

      {/* Standard Operational Workflow */}
      <ServiceProcessWorkflow setActiveTab={setActiveTab} />

      {/* Why Choose Our Services & Quality Assurance Framework */}
      <WhyOurServicesQA />

      {/* Tactical & Communication Equipment Showcase */}
      <TacticalEquipmentShowcase />

      {/* 19 Core Industries Protected */}
      <IndustriesProtectionGrid setActiveTab={setActiveTab} />

      {/* Interactive Multilingual FAQ Accordion */}
      <ServicesFaq onOpenEmergency={onOpenEmergency} />

      {/* Call to Action Banner */}
      <ServicesCtaBanner setActiveTab={setActiveTab} onOpenEmergency={onOpenEmergency} />
    </div>
  );
};
