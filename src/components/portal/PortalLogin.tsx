import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import { CompanyLogo } from '../common/CompanyLogo';
import {
  Building2,
  Lock,
  UserCheck,
  ShieldCheck,
  KeyRound,
  FileCheck,
  PhoneCall,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  X,
  ArrowRight
} from 'lucide-react';

interface PortalLoginProps {
  onLoginSuccess: (clientCode: string) => void;
}

export const PortalLogin: React.FC<PortalLoginProps> = ({ onLoginSuccess }) => {
  const { getT, language } = useLanguage();
  const { loginAsClient } = useAuth();

  const [clientCode, setClientCode] = useState('CLIENT-ABA-8821');
  const [password, setPassword] = useState('••••••••••••');
  const [rememberMe, setRememberMe] = useState(true);
  const [forgotModalOpen, setForgotModalOpen] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientCode.trim()) {
      setErrorMsg(
        getT(
          'Please enter your official Client Account ID.',
          'សូមបញ្ចូលអត្តលេខគណនីអតិថិជនផ្លូវការរបស់អ្នក។',
          '请输入您的官方客户账号。'
        )
      );
      return;
    }

    const success = loginAsClient(clientCode);
    if (success) {
      onLoginSuccess(clientCode);
    } else {
      setErrorMsg(
        getT(
          'Invalid Client ID. Please check your contract documents.',
          'អត្តលេខអតិថិជនមិនត្រឹមត្រូវ។ សូមពិនិត្យមើលកិច្ចសន្យារបស់អ្នក។',
          '客户账号无效。请核对您的合同文件。'
        )
      );
    }
  };

  const demoAccounts = [
    {
      id: 'CLIENT-ABA-8821',
      name: { en: 'ABA Bank Phnom Penh HQ', km: 'ធនាគារ អាស៊ី វឌ្ឍនៈ (ABA) ទីស្នាក់ការកណ្តាល', zh: 'ABA银行金边总部大楼' },
      guards: '12 Guards',
      tag: 'Banking & Financial',
    },
    {
      id: 'CLIENT-CMT-9920',
      name: { en: 'Chip Mong Tower & Commercial Hub', km: 'អគារ ជីប ម៉ុង ថៅវើ & ពាណិជ្ជកម្ម', zh: '集茂大厦及商业中心' },
      guards: '18 Guards',
      tag: 'Commercial High-Rise',
    },
    {
      id: 'CLIENT-HYATT-3310',
      name: { en: 'Hyatt Regency Phnom Penh', km: 'សណ្ឋាគារ ហៃយ៉ាត់ រីជិនស៊ី ភ្នំពេញ', zh: '金边凯悦酒店' },
      guards: '10 Guards',
      tag: 'Luxury Hospitality',
    },
    {
      id: 'CLIENT-SPB-4402',
      name: { en: 'Sathapana Bank Tower', km: 'អគារ ធនាគារ ស្ថាបនា', zh: '建设银行大厦' },
      guards: '15 Guards',
      tag: 'Corporate Tower',
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-100 min-h-[85vh] flex flex-col justify-center items-center">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 rounded-3xl shadow-2xl border border-slate-300 overflow-hidden bg-white">
        
        {/* Left Branding Panel */}
        <div className="md:col-span-5 bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 p-8 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-600/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 space-y-6">
            <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md inline-block border border-white/15">
              <CompanyLogo size="md" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold tracking-widest text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded border border-amber-800/80 uppercase">
                Enterprise Client Portal
              </span>
              <h2 className="text-2xl font-extrabold font-serif text-white tracking-tight leading-tight">
                {getT(
                  'Secure Customer Operations Hub',
                  'មជ្ឈមណ្ឌលប្រតិបត្តិការអតិថិជនមានសុវត្ថិភាព',
                  '安全客户运营管理门户'
                )}
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {getT(
                  'Real-time access to on-duty security guard rosters, GPS patrol wand checkpoints, incident reporting, and digital SLA contracts.',
                  'ពិនិត្យមើលកម្លាំងសន្តិសុខឈរជើង របាយការណ៍ល្បាត GPS QR code និងការទាក់ទងក្រុមឆ្លើយតបបន្ទាន់ ២៤ម៉ោង។',
                  '实时查看在岗安保人员名单、GPS巡逻打卡记录、突发事件报告及数字SLA服务合同。'
                )}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{getT('MOI Licensed #KNSK-SEC-2015-089', 'អាជ្ញាប័ណ្ណក្រសួងមហាផ្ទៃ #KNSK-SEC-2015-089', '内政部执照 #KNSK-SEC-2015-089')}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <FileCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{getT('25 Provinces Coverage', 'គ្របដណ្តប់ ២៥ រាជធានី-ខេត្ត', '全国25省市安保覆盖')}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Lock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>256-Bit SSL Encrypted Banking Security</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-8 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>K.N.S.K Security Co., Ltd.</span>
            <span>v3.5 Enterprise</span>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 font-serif">
                  {getT('Client Portal Login', 'ចូលប្រើប្រាស់វិបផតថលអតិថិជន', '客户门户登录')}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {getT(
                    'Authorized corporate clients and property security managers',
                    'សម្រាប់អតិថិជនសាជីវកម្ម និងអ្នកគ្រប់គ្រងសន្តិសុខអគារ',
                    '专供授权企业客户及物业安保主管登录'
                  )}
                </p>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-900 border border-blue-200 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
            </div>

            {errorMsg && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-xs font-medium text-red-800 animate-fadeIn">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  {getT('Client Account ID / Contract Code *', 'អត្តលេខគណនីអតិថិជន / កូដកិច្ចសន្យា *', '客户账号 / 合同代码 *')}
                </label>
                <div className="relative">
                  <UserCheck className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={clientCode}
                    onChange={(e) => {
                      setClientCode(e.target.value);
                      setErrorMsg('');
                    }}
                    placeholder="e.g. CLIENT-ABA-8821"
                    className="w-full pl-10 pr-4 py-2.5 text-xs font-mono font-bold text-slate-900 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 focus:outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  {getT('Security Passcode *', 'លេខកូដសម្ងាត់សុវត្ថិភាព *', '安全密码 *')}
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-xs font-mono font-bold text-slate-900 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 focus:outline-none transition"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none text-slate-700 font-medium">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-blue-900 rounded border-slate-300 focus:ring-blue-900"
                  />
                  <span>{getT('Remember Me', 'ចងចាំគណនីខ្ញុំ', '记住我的账号')}</span>
                </label>

                <button
                  type="button"
                  onClick={() => setForgotModalOpen(true)}
                  className="text-blue-900 hover:underline font-bold text-xs"
                >
                  {getT('Forgot Password?', 'ភ្លេចលេខកូដសម្ងាត់?', '忘记密码？')}
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-blue-900 hover:bg-blue-950 text-white font-extrabold text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-blue-950/20 flex items-center justify-center gap-2 transition transform active:scale-[0.99]"
              >
                <span>{getT('Login to Client Portal', 'ចូលទៅកាន់វិបផតថលអតិថិជន', '登录客户门户')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Quick Demo Presets */}
            <div className="pt-4 border-t border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-mono">
                  {getT('Demo Client Profiles (Select to Test)', 'គណនីសាកល្បងអតិថិជន (ជ្រើសរើសដើម្បីសាកល្បង)', '演示客户账号（点击快速体验）')}
                </span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">1-Click Login</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {demoAccounts.map((acc) => {
                  const accName = getT(acc.name.en, acc.name.km, acc.name.zh);
                  return (
                    <button
                      key={acc.id}
                      type="button"
                      onClick={() => {
                        setClientCode(acc.id);
                        loginAsClient(acc.id);
                        onLoginSuccess(acc.id);
                      }}
                      className="p-2.5 text-left bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-xl transition group flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-blue-900 group-hover:text-blue-950">{acc.id}</span>
                        <span className="text-[9px] font-semibold text-slate-500">{acc.guards}</span>
                      </div>
                      <span className="text-xs font-bold text-slate-800 truncate mt-0.5 group-hover:text-blue-900">{accName}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
              {getT('Need Portal Assistance?', 'ត្រូវការជំនួយផ្នែកវិបផតថល?', '需要门户协助？')}
            </span>
            <a
              href="tel:0964838666"
              className="font-bold text-red-600 hover:underline flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3" />
              <span>096 483 8666</span>
            </a>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {forgotModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-extrabold text-base text-slate-900 font-serif flex items-center gap-2">
                <KeyRound className="w-5 h-5 text-blue-900" />
                {getT('Password Reset Request', 'ការស្នើសុំកំណត់លេខកូដសម្ងាត់ឡើងវិញ', '重置密码申请')}
              </h3>
              <button
                onClick={() => {
                  setForgotModalOpen(false);
                  setResetSent(false);
                }}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!resetSent ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (resetEmail) {
                    setResetSent(true);
                  }
                }}
                className="space-y-4 text-xs"
              >
                <p className="text-slate-600">
                  {getT(
                    'Enter your registered enterprise email address. Our Security Command IT department will issue a secure reset token within 10 minutes.',
                    'សូមបញ្ចូលអ៊ីមែលសាជីវកម្មដែលបានចុះឈ្មោះ។ នាយកដ្ឋាន IT សន្តិសុខរបស់យើងខ្ញុំនឹងផ្ញើកូដកំណត់ឡើងវិញក្នុងរយៈពេល ១០នាទី។',
                    '请输入您登记的企业电子邮箱。我们的安保IT部门将在10分钟内向您发送重置令牌。'
                  )}
                </p>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {getT('Corporate Email Address *', 'អាសយដ្ឋានអ៊ីមែលសាជីវកម្ម *', '企业电子邮箱 *')}
                  </label>
                  <input
                    type="email"
                    required
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    placeholder="security.manager@company.com"
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs font-mono font-bold focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setForgotModalOpen(false)}
                    className="flex-1 py-2.5 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200"
                  >
                    {getT('Cancel', 'បោះបង់', '取消')}
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-950"
                  >
                    {getT('Send Token', 'ផ្ញើកូដ', '发送重置码')}
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-4 text-center space-y-3 text-xs">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-extrabold text-slate-900 text-sm">
                  {getT('Reset Instructions Dispatched', 'បានផ្ញើការណែនាំអំពីការកំណត់ឡើងវិញ', '重置说明已发送')}
                </h4>
                <p className="text-slate-600">
                  {getT(
                    `A secure verification token was sent to ${resetEmail}. Check your inbox or contact your assigned K.N.S.K Account Manager.`,
                    `កូដផ្ទៀងផ្ទាត់ត្រូវបានផ្ញើទៅកាន់ ${resetEmail}។ សូមពិនិត្យមើលសាររបស់អ្នក ឬទាក់ទងអ្នកគ្រប់គ្រងគណនី K.N.S.K។`,
                    `验证令牌已发送至 ${resetEmail}。请检查您的收件箱或联系您的K.N.S.K专属客户经理。`
                  )}
                </p>
                <button
                  onClick={() => {
                    setForgotModalOpen(false);
                    setResetSent(false);
                  }}
                  className="px-6 py-2 bg-blue-900 text-white font-bold rounded-xl"
                >
                  {getT('Back to Login', 'ត្រឡប់ទៅការចូល', '返回登录')}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
