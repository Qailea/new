import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { EQUIPMENT_ITEMS } from '../../data/servicesData';
import {
  Radio,
  ShieldCheck,
  Info
} from 'lucide-react';

export const TacticalEquipmentShowcase: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Tactical Equipment Showcase */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-widest rounded-full border border-slate-200">
            <Radio className="w-3.5 h-3.5 text-blue-900" />
            <span>Tactical & Security Equipment</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            {language === 'km' ? 'បរិក្ខារ & ឧបករណ៍បច្ចេកទេសសន្តិសុខ K.N.S.K' : language === 'zh' ? 'K.N.S.K 官方战术与巡逻装备展示' : 'Tactical & Communication Equipment'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {language === 'km'
              ? 'ឧបករណ៍បច្ចេកទេសទំនើបជួយគាំទ្រដល់ការបំពេញភារកិច្ចរបស់ភ្នាក់ងារសន្តិសុខ K.N.S.K ឱ្យមានប្រសិទ្ធភាពខ្ពស់។'
              : language === 'zh'
              ? '配备加密双向对讲机、高光巡逻灯、电子巡更棒及4x4福特特战车队，保障执勤反应。'
              : 'Equipped with commercial-grade walkie-talkies, high-beam searchlights, RFID patrol wands, and 4x4 response vehicles.'}
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EQUIPMENT_ITEMS.map((eq) => (
            <div
              key={eq.id}
              className="p-5 bg-slate-50 rounded-xl border border-slate-200 shadow-xs space-y-3 hover:bg-white hover:border-blue-400 transition"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest bg-blue-100 text-blue-900 px-2.5 py-0.5 rounded border border-blue-200">
                  {eq.category}
                </span>
                <ShieldCheck className="w-5 h-5 text-blue-900" />
              </div>

              <h3 className="font-bold text-base text-slate-900 font-serif">
                {language === 'km' ? eq.nameKm : language === 'zh' ? eq.nameZh : eq.nameEn}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">{eq.descriptionEn}</p>

              <div className="p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] font-semibold text-slate-700">
                <span className="text-slate-400 font-bold block text-[10px] uppercase">Specification:</span>
                {eq.specificationEn}
              </div>
            </div>
          ))}
        </div>

        {/* STRICT NON-LETHAL NOTICE BANNER */}
        <div className="p-5 bg-amber-50 border-2 border-amber-300 rounded-2xl flex items-start gap-3.5 shadow-xs">
          <Info className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs text-amber-950">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-amber-900">
              Official Equipment Protocol Notice
            </h4>
            <p className="leading-relaxed font-medium">
              Strictly Non-Lethal & Defensive Equipment — All K.N.S.K security officers carry defensive tools only (radios, tactical flashlights, batons, and inspection wands). No firearms are utilized unless explicitly authorized under Ministry of Interior special diplomatic or banking escort mandates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
