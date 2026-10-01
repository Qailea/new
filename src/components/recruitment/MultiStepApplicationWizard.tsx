import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { cambodiaProvinces } from '../../data/provinces';
import {
  UserPlus,
  CheckCircle2,
  FileText,
  Upload,
  User,
  GraduationCap,
  MapPin,
  PhoneCall,
  Shield,
  Send,
  ArrowRight,
  ArrowLeft,
  X,
  FileCheck2,
  AlertCircle,
  Copy,
  Printer
} from 'lucide-react';

interface MultiStepApplicationWizardProps {
  prefilledJobTitle?: string;
}

export const MultiStepApplicationWizard: React.FC<MultiStepApplicationWizardProps> = ({ prefilledJobTitle }) => {
  const { language } = useLanguage();

  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps = 6;

  // Step 1: Personal Information
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState<number>(24);
  const [heightCm, setHeightCm] = useState<number>(170);
  const [weightKg, setWeightKg] = useState<number>(65);
  const [nationalIdNumber, setNationalIdNumber] = useState('');
  const [provinceOfOrigin, setProvinceOfOrigin] = useState('Phnom Penh');

  // Step 2: Education & Experience
  const [educationLevel, setEducationLevel] = useState('Grade 12 / High School');
  const [militaryExp, setMilitaryExp] = useState(false);
  const [militaryBranch, setMilitaryBranch] = useState('');
  const [yearsSecurityExp, setYearsSecurityExp] = useState<number>(0);
  const [previousEmployer, setPreviousEmployer] = useState('');

  // Step 3: Skills & Preferences
  const [appliedPosition, setAppliedPosition] = useState(prefilledJobTitle || 'Static Security Guard (Male / Female)');
  const [preferredWorkProvince, setPreferredWorkProvince] = useState('Phnom Penh');
  const [shiftPreference, setShiftPreference] = useState('Flexible / Day or Night');
  const [languagesSpoken, setLanguagesSpoken] = useState<string[]>(['Khmer']);

  // Step 4: Emergency Contact
  const [emergencyName, setEmergencyName] = useState('');
  const [emergencyRelation, setEmergencyRelation] = useState('Parent / Spouse');
  const [emergencyPhone, setEmergencyPhone] = useState('');
  const [emergencyAddress, setEmergencyAddress] = useState('');

  // Step 5: Document Upload Architecture State
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [idFile, setIdFile] = useState<File | null>(null);
  const [certFile, setCertFile] = useState<File | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);

  // Step 6 / Submitted State
  const [submittedAppCode, setSubmittedAppCode] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: document.getElementById('apply-form')?.offsetTop || 0, behavior: 'smooth' });
    } else {
      // Submit Application
      const randomCode = 'KNSK-APP-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);
      setSubmittedAppCode(randomCode);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCopyCode = () => {
    if (submittedAppCode) {
      navigator.clipboard.writeText(submittedAppCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 3000);
    }
  };

  const toggleLanguageSkill = (lang: string) => {
    if (languagesSpoken.includes(lang)) {
      setLanguagesSpoken(languagesSpoken.filter((l) => l !== lang));
    } else {
      setLanguagesSpoken([...languagesSpoken, lang]);
    }
  };

  const stepsHeader = [
    { num: 1, labelEn: 'Personal Info', labelKm: 'ព័ត៌មានផ្ទាល់ខ្លួន', labelZh: '个人基本信息' },
    { num: 2, labelEn: 'Education & Exp', labelKm: 'ការសិក្សា & បទពិសោធន៍', labelZh: '学历与经历' },
    { num: 3, labelEn: 'Preferences', labelKm: 'មុខតំណែង & ទីតាំង', labelZh: '意向岗位与地点' },
    { num: 4, labelEn: 'Emergency Contact', labelKm: 'ទំនាក់ទំនងអាសន្ន', labelZh: '紧急联系人' },
    { num: 5, labelEn: 'Upload Documents', labelKm: 'ផ្ទុកឡើងឯកសារ', labelZh: '上传证件档案' },
    { num: 6, labelEn: 'Review & Submit', labelKm: 'ពិនិត្យ & បញ្ជូន', labelZh: '核对并提交' }
  ];

  return (
    <section id="apply-form" className="py-16 bg-slate-100 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-900 text-white border border-blue-700 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
            <UserPlus className="w-4 h-4 text-emerald-400" />
            {language === 'km' ? 'ពាក្យសុំធ្វើការអនឡាញ' : language === 'zh' ? 'K.N.S.K 在线求职申请中心' : 'Online Security Job Application Wizard'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-serif text-slate-900 tracking-tight">
            {language === 'km' ? 'ទម្រង់ដាក់ពាក្យសុំធ្វើការផ្លូវការ K.N.S.K' : language === 'zh' ? '多步骤标准化个人履职申请表' : 'Enterprise Multi-Step Job Application'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {language === 'km' ? 'សូមបំពេញព័ត៌មានឲ្យបានត្រឹមត្រូវ ក្រុមការងារជ្រើសរើសបុគ្គលិកនឹងទាក់ទងលោកអ្នកក្នុងរយៈពេល ២៤ ម៉ោង' : language === 'zh' ? '请如实填写个人档案，HR招聘部门将在24小时内与您联系调度' : 'Fill out your accurate profile. Our HR recruitment officers will review and contact you within 24 hours.'}
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl space-y-8">
          
          {!submittedAppCode ? (
            <>
              {/* Stepper Progress Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                  <span>Step {currentStep} of {totalSteps}: {stepsHeader[currentStep - 1].labelEn}</span>
                  <span className="text-blue-900 font-mono font-extrabold">{Math.round((currentStep / totalSteps) * 100)}% Completed</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                  <div
                    className="h-full bg-gradient-to-r from-blue-900 via-indigo-700 to-emerald-500 transition-all duration-500 rounded-full"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  />
                </div>

                {/* Desktop Stepper Icons */}
                <div className="hidden sm:grid grid-cols-6 gap-2 pt-2">
                  {stepsHeader.map((s) => (
                    <button
                      key={s.num}
                      onClick={() => {
                        if (s.num < currentStep) setCurrentStep(s.num);
                      }}
                      disabled={s.num > currentStep}
                      className={`flex flex-col items-center gap-1 p-2 rounded-xl text-[10px] font-bold transition ${
                        currentStep === s.num
                          ? 'bg-blue-900 text-white shadow-md'
                          : s.num < currentStep
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                          : 'bg-slate-50 text-slate-400'
                      }`}
                    >
                      <span className="w-5 h-5 rounded-full flex items-center justify-center font-mono text-[10px] border border-current">
                        {s.num < currentStep ? '✓' : s.num}
                      </span>
                      <span className="line-clamp-1">{language === 'km' ? s.labelKm : language === 'zh' ? s.labelZh : s.labelEn}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step Forms */}
              <form onSubmit={handleNextStep} className="space-y-6 text-xs">
                
                {/* STEP 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="font-extrabold text-sm text-slate-900 font-serif border-b border-slate-100 pb-2 flex items-center gap-2">
                      <User className="w-4 h-4 text-blue-900" />
                      Step 1: Personal Information (ព័ត៌មានផ្ទាល់ខ្លួន)
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Full Name (ឈ្មោះពេញជាអក្សរឡាតាំង ឬខ្មែរ) *</label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Sok Sophal"
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Phone Number (លេខទូរស័ព្ទទំនាក់ទំនង) *</label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 096 483 8666"
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Gender (ភេទ)</label>
                        <select
                          value={gender}
                          onChange={(e) => setGender(e.target.value as any)}
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:outline-none bg-white"
                        >
                          <option value="male">Male (ប្រុស)</option>
                          <option value="female">Female (ស្រី)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Age in Years (អាយុ)</label>
                        <input
                          type="number"
                          min={18}
                          max={55}
                          value={age}
                          onChange={(e) => setAge(parseInt(e.target.value))}
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Height in Cm (កម្ពស់)</label>
                        <input
                          type="number"
                          value={heightCm}
                          onChange={(e) => setHeightCm(parseInt(e.target.value))}
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Weight in Kg (ទម្ងន់)</label>
                        <input
                          type="number"
                          value={weightKg}
                          onChange={(e) => setWeightKg(parseInt(e.target.value))}
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">National ID Card Number (លេខអត្តសញ្ញាណប័ណ្ណ) *</label>
                        <input
                          type="text"
                          required
                          value={nationalIdNumber}
                          onChange={(e) => setNationalIdNumber(e.target.value)}
                          placeholder="e.g. 010988776"
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:outline-none font-mono"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Province of Origin (ខេត្តកំណើត)</label>
                        <select
                          value={provinceOfOrigin}
                          onChange={(e) => setProvinceOfOrigin(e.target.value)}
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:outline-none bg-white"
                        >
                          {cambodiaProvinces.map((p) => (
                            <option key={p.id} value={p.nameEn}>
                              {p.nameEn} ({p.nameKm})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: Education & Experience */}
                {currentStep === 2 && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="font-extrabold text-sm text-slate-900 font-serif border-b border-slate-100 pb-2 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-blue-900" />
                      Step 2: Education & Experience (ការសិក្សា & បទពិសោធន៍)
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Highest Education Level (កម្រិតវប្បធម៌)</label>
                        <select
                          value={educationLevel}
                          onChange={(e) => setEducationLevel(e.target.value)}
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:outline-none bg-white"
                        >
                          <option value="Grade 9 / Junior High School">Grade 9 / Junior High School (ថ្នាក់ទី៩)</option>
                          <option value="Grade 12 / High School">Grade 12 / High School (ថ្នាក់ទី១២)</option>
                          <option value="Vocational Technical Certificate">Vocational Technical Certificate (សញ្ញាបត្របច្ចេកទេស)</option>
                          <option value="Associate Degree / Bachelor">Associate Degree / Bachelor (បរិញ្ញាបត្រ)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Years of Prior Security Experience (បទពិសោធន៍សន្តិសុខ)</label>
                        <select
                          value={yearsSecurityExp}
                          onChange={(e) => setYearsSecurityExp(parseInt(e.target.value))}
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:outline-none bg-white"
                        >
                          <option value={0}>No Experience (គ្មានបទពិសោធន៍ - រៀនឥតគិតថ្លៃ)</option>
                          <option value={1}>1 Year (១ ឆ្នាំ)</option>
                          <option value={2}>2 Years (២ ឆ្នាំ)</option>
                          <option value={3}>3+ Years (៣ ឆ្នាំឡើងទៅ)</option>
                        </select>
                      </div>
                    </div>

                    {/* Military / Police Checkbox */}
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer font-bold text-slate-800">
                        <input
                          type="checkbox"
                          checked={militaryExp}
                          onChange={(e) => setMilitaryExp(e.target.checked)}
                          className="accent-blue-900 w-4 h-4 rounded"
                        />
                        <span>Prior Military, Gendarmerie (PM), Police, or Special Forces Experience?</span>
                      </label>

                      {militaryExp && (
                        <div className="pt-2">
                          <label className="block font-semibold text-slate-700 mb-1">Branch / Unit & Rank (អង្គភាព ឬកងរាជអាវុធហត្ថ / ប៉ូលីស)</label>
                          <input
                            type="text"
                            value={militaryBranch}
                            onChange={(e) => setMilitaryBranch(e.target.value)}
                            placeholder="e.g. Royal Cambodian Armed Forces (RCAF) / Police"
                            className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:outline-none bg-white"
                          />
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Previous Employer / Security Company Name (Optional)</label>
                      <input
                        type="text"
                        value={previousEmployer}
                        onChange={(e) => setPreviousEmployer(e.target.value)}
                        placeholder="e.g. Previous Company Name"
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                {/* STEP 3: Position & Work Location Preferences */}
                {currentStep === 3 && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="font-extrabold text-sm text-slate-900 font-serif border-b border-slate-100 pb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-900" />
                      Step 3: Job & Location Preferences (មុខតំណែង & ទីតាំង)
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Applied Job Position (មុខតំណែងត្រូវសុំ) *</label>
                        <select
                          value={appliedPosition}
                          onChange={(e) => setAppliedPosition(e.target.value)}
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:outline-none bg-white font-bold text-blue-900"
                        >
                          <option value="Static Security Guard (Male / Female)">Static Security Guard (Male / Female)</option>
                          <option value="Senior Security Guard / Team Leader">Senior Security Guard / Team Leader</option>
                          <option value="Security Sales & Client Relationship Manager">Security Sales & Client Relationship Manager</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Preferred Work Province (ខេត្តចង់ធ្វើការ) *</label>
                        <select
                          value={preferredWorkProvince}
                          onChange={(e) => setPreferredWorkProvince(e.target.value)}
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:outline-none bg-white"
                        >
                          {cambodiaProvinces.map((p) => (
                            <option key={p.id} value={p.nameEn}>
                              {p.nameEn} ({p.nameKm})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Shift Availability (វេនធ្វើការ)</label>
                        <select
                          value={shiftPreference}
                          onChange={(e) => setShiftPreference(e.target.value)}
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:outline-none bg-white"
                        >
                          <option value="Day Shift (06:00 - 18:00)">Day Shift (06:00 - 18:00)</option>
                          <option value="Night Shift (18:00 - 06:00)">Night Shift (18:00 - 06:00)</option>
                          <option value="Flexible / Rotational Shift">Flexible / Rotational Shift (វេនដូរ)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Languages Spoken (ភាសាអាចនិយាយបាន)</label>
                        <div className="flex flex-wrap items-center gap-2 pt-1">
                          {['Khmer', 'English', 'Chinese (Mandarin)', 'Vietnamese', 'Thai'].map((lang) => (
                            <button
                              type="button"
                              key={lang}
                              onClick={() => toggleLanguageSkill(lang)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition border ${
                                languagesSpoken.includes(lang)
                                  ? 'bg-blue-900 text-white border-blue-900'
                                  : 'bg-slate-100 text-slate-700 border-slate-200'
                              }`}
                            >
                              {languagesSpoken.includes(lang) ? '✓ ' : '+ '}{lang}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: Emergency Contact */}
                {currentStep === 4 && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="font-extrabold text-sm text-slate-900 font-serif border-b border-slate-100 pb-2 flex items-center gap-2">
                      <PhoneCall className="w-4 h-4 text-blue-900" />
                      Step 4: Emergency Contact Information (ទំនាក់ទំនងអាសន្ន)
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Emergency Contact Person Name (ឈ្មោះអ្នកទំនាក់ទំនងអាសន្ន) *</label>
                        <input
                          type="text"
                          required
                          value={emergencyName}
                          onChange={(e) => setEmergencyName(e.target.value)}
                          placeholder="e.g. Sok Chanthou"
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Relationship to Candidate (ត្រូវជាអ្វីជាមួយបេក្ខជន) *</label>
                        <select
                          value={emergencyRelation}
                          onChange={(e) => setEmergencyRelation(e.target.value)}
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:outline-none bg-white"
                        >
                          <option value="Parent / Father / Mother">Parent / Father / Mother (ឪពុក / ម្ដាយ)</option>
                          <option value="Spouse / Husband / Wife">Spouse / Husband / Wife (ប្តី / ប្រពន្ធ)</option>
                          <option value="Brother / Sister">Brother / Sister (បងប្អូន)</option>
                          <option value="Relative / Guardian">Relative / Guardian (សាច់ញាតិ)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Emergency Phone Number (លេខទូរស័ព្ទ) *</label>
                        <input
                          type="tel"
                          required
                          value={emergencyPhone}
                          onChange={(e) => setEmergencyPhone(e.target.value)}
                          placeholder="e.g. 012 999 888"
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Residence Address (អាសយដ្ឋានស្នាក់នៅបច្ចុប្បន្ន)</label>
                        <input
                          type="text"
                          value={emergencyAddress}
                          onChange={(e) => setEmergencyAddress(e.target.value)}
                          placeholder="Sangkat / Khan / District"
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 5: Document Upload Section Architecture */}
                {currentStep === 5 && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="font-extrabold text-sm text-slate-900 font-serif border-b border-slate-100 pb-2 flex items-center gap-2">
                      <Upload className="w-4 h-4 text-blue-900" />
                      Step 5: Document Upload Architecture (ផ្ទុកឡើងឯកសារស្កែន)
                    </h3>
                    <p className="text-slate-600 text-xs">
                      Upload photos or scanned copies of your certificates (Supported formats: PDF, JPG, PNG up to 10MB each).
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* CV Upload Card */}
                      <div className="p-4 bg-slate-50 border-2 border-dashed border-slate-300 hover:border-blue-900 rounded-2xl transition space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-800">1. Resume / CV File</span>
                          <span className="text-[10px] bg-slate-200 text-slate-600 px-2 py-0.5 rounded">PDF/DOCX</span>
                        </div>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => setCvFile(e.target.files?.[0] || null)}
                          className="w-full text-xs text-slate-600 cursor-pointer"
                        />
                        {cvFile && (
                          <div className="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> {cvFile.name} ({(cvFile.size / 1024).toFixed(0)} KB)
                          </div>
                        )}
                      </div>

                      {/* ID Card Upload Card */}
                      <div className="p-4 bg-slate-50 border-2 border-dashed border-slate-300 hover:border-blue-900 rounded-2xl transition space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-800">2. National ID Card Photo *</span>
                          <span className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded font-bold">Required</span>
                        </div>
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          onChange={(e) => setIdFile(e.target.files?.[0] || null)}
                          className="w-full text-xs text-slate-600 cursor-pointer"
                        />
                        {idFile && (
                          <div className="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> {idFile.name} ({(idFile.size / 1024).toFixed(0)} KB)
                          </div>
                        )}
                      </div>

                      {/* Education / Police Cert */}
                      <div className="p-4 bg-slate-50 border-2 border-dashed border-slate-300 hover:border-blue-900 rounded-2xl transition space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-800">3. Police Clearance / Education Cert</span>
                          <span className="text-[10px] bg-slate-200 text-slate-600 px-2 py-0.5 rounded">Optional</span>
                        </div>
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          onChange={(e) => setCertFile(e.target.files?.[0] || null)}
                          className="w-full text-xs text-slate-600 cursor-pointer"
                        />
                        {certFile && (
                          <div className="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> {certFile.name} ({(certFile.size / 1024).toFixed(0)} KB)
                          </div>
                        )}
                      </div>

                      {/* Passport Photo */}
                      <div className="p-4 bg-slate-50 border-2 border-dashed border-slate-300 hover:border-blue-900 rounded-2xl transition space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-800">4. 4x6 Recent Passport Photo</span>
                          <span className="text-[10px] bg-slate-200 text-slate-600 px-2 py-0.5 rounded">Optional</span>
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => setPhotoFile(e.target.files?.[0] || null)}
                          className="w-full text-xs text-slate-600 cursor-pointer"
                        />
                        {photoFile && (
                          <div className="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> {photoFile.name} ({(photoFile.size / 1024).toFixed(0)} KB)
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 6: Review & Final Submit */}
                {currentStep === 6 && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="font-extrabold text-sm text-slate-900 font-serif border-b border-slate-100 pb-2 flex items-center gap-2">
                      <FileCheck2 className="w-4 h-4 text-blue-900" />
                      Step 6: Review & Final Submission (ផ្ទៀងផ្ទាត់ និងបញ្ជូន)
                    </h3>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 text-xs">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <span className="text-slate-400 block font-semibold uppercase">Full Name:</span>
                          <span className="font-extrabold text-slate-900 text-sm">{fullName || 'Not provided'}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block font-semibold uppercase">Phone Number:</span>
                          <span className="font-extrabold text-slate-900 text-sm font-mono">{phone || 'Not provided'}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block font-semibold uppercase">Applied Position:</span>
                          <span className="font-bold text-blue-900">{appliedPosition}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block font-semibold uppercase">Duty Location:</span>
                          <span className="font-bold text-slate-900">{preferredWorkProvince} Province</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block font-semibold uppercase">Age & Height:</span>
                          <span className="font-bold text-slate-900">{age} Yrs | {heightCm} cm</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block font-semibold uppercase">Emergency Contact:</span>
                          <span className="font-bold text-slate-900">{emergencyName} ({emergencyPhone})</span>
                        </div>
                      </div>

                      <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-[11px] flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0 text-amber-700" />
                        <span>By clicking Submit, you declare that all personal records supplied are accurate and free of falsification.</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Previous</span>
                    </button>
                  ) : <div />}

                  <button
                    type="submit"
                    className="px-7 py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center gap-2"
                  >
                    <span>{currentStep === totalSteps ? 'Submit Application' : 'Next Step'}</span>
                    {currentStep === totalSteps ? <Send className="w-4 h-4 text-emerald-400" /> : <ArrowRight className="w-4 h-4" />}
                  </button>
                </div>

              </form>
            </>
          ) : (
            /* Submission Receipt Confirmation Screen */
            <div className="py-8 text-center space-y-6 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black font-serif text-slate-900">Application Submitted Successfully!</h3>
                <p className="text-xs text-slate-600 max-w-lg mx-auto">
                  Thank you <strong className="text-slate-900">{fullName}</strong>. Your candidate application has been logged into the K.N.S.K Recruitment Registry.
                </p>
              </div>

              {/* Reference Code Card */}
              <div className="max-w-md mx-auto p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-3 shadow-xl">
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Official Application Tracking Code</div>
                <div className="text-2xl sm:text-3xl font-mono font-black text-amber-400 tracking-wider">
                  {submittedAppCode}
                </div>
                <div className="text-xs text-slate-300">
                  Target Location: <span className="text-white font-bold">{preferredWorkProvince} Province</span>
                </div>

                <div className="pt-2 flex items-center justify-center gap-2">
                  <button
                    onClick={handleCopyCode}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-lg transition flex items-center gap-1.5"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                  </button>

                  <button
                    onClick={() => window.print()}
                    className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-lg transition flex items-center gap-1.5"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Receipt</span>
                  </button>
                </div>
              </div>

              {/* Telegram Contact CTA */}
              <div className="max-w-md mx-auto p-4 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 space-y-2">
                <p className="font-semibold">Fast-track your application background check on Telegram:</p>
                <a
                  href={`https://t.me/KNSK_security?text=Hello%20KNSK%20HR,%20I%20submitted%20my%20application%20code%20${submittedAppCode}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition"
                >
                  <Send className="w-3.5 h-3.5" /> Send Code to HR Telegram (@KNSK_security)
                </a>
              </div>

              <button
                onClick={() => {
                  setSubmittedAppCode(null);
                  setCurrentStep(1);
                }}
                className="px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs rounded-xl transition"
              >
                Submit Another Application
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
