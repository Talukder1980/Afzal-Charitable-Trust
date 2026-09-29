import React, { useState, useEffect } from 'react';
import { MemberRecord } from '../types';
import { 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  CreditCard, 
  Download, 
  Printer, 
  QrCode, 
  Search, 
  Sparkles, 
  UserCheck, 
  Heart, 
  Calendar, 
  MapPin, 
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';

interface MembershipSectionProps {
  onOpenCertificateModal: (member: MemberRecord) => void;
  lang: 'en' | 'bn';
}

const DEFAULT_MEMBERS: MemberRecord[] = [
  {
    id: 'mem-001',
    certificateNo: 'ACT-2026-M1042',
    fullName: 'Kazi Tanvir Ahmed',
    email: 'kazi.tanvir@example.com',
    phone: '+880 1712-345678',
    nidOrBirthCert: '19922695012345678',
    bloodGroup: 'B+',
    district: 'Dhaka',
    occupation: 'Software Engineer & Humanitarian',
    primaryInterest: 'Digital Learning and Security',
    joinedDate: 'January 15, 2026',
    expiryDate: 'January 14, 2027',
    paymentMethod: 'bKash',
    transactionId: 'BK9A72L091',
    amount: 250,
    status: 'Active',
    membershipTier: 'General Associate Member'
  },
  {
    id: 'mem-002',
    certificateNo: 'ACT-2026-M2085',
    fullName: 'Dr. Nusrat Jahan',
    email: 'nusrat.jahan@example.com',
    phone: '+880 1819-876543',
    nidOrBirthCert: '19882695098765432',
    bloodGroup: 'O+',
    district: 'Chattogram',
    occupation: 'Physician',
    primaryInterest: 'Medical and Healthcare Assistance',
    joinedDate: 'February 03, 2026',
    expiryDate: 'February 02, 2027',
    paymentMethod: 'Nagad',
    transactionId: 'NG772108B',
    amount: 250,
    status: 'Active',
    membershipTier: 'General Associate Member'
  }
];

export const MembershipSection: React.FC<MembershipSectionProps> = ({
  onOpenCertificateModal,
  lang
}) => {
  // Members database stored in localStorage
  const [members, setMembers] = useState<MemberRecord[]>(() => {
    try {
      const saved = localStorage.getItem('act_members_registry');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return DEFAULT_MEMBERS;
  });

  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [registeredMember, setRegisteredMember] = useState<MemberRecord | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    nidOrBirthCert: '',
    bloodGroup: 'B+',
    district: 'Dhaka',
    occupation: '',
    primaryInterest: 'Education, Research and Scholarships'
  });

  // Payment state
  const [paymentMethod, setPaymentMethod] = useState<'bKash' | 'Nagad' | 'Rocket' | 'Bank Card'>('bKash');
  const [mfsNumber, setMfsNumber] = useState('');
  const [trxId, setTrxId] = useState('');
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  // Verification Search State
  const [verifyQuery, setVerifyQuery] = useState('');
  const [verificationResult, setVerificationResult] = useState<MemberRecord | null | 'NOT_FOUND'>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const districtsOfBangladesh = [
    'Dhaka', 'Chattogram', 'Sylhet', 'Rajshahi', 'Khulna', 'Barishal', 'Rangpur', 
    'Mymensingh', 'Cumilla', 'Bogura', 'Gazipur', 'Narayanganj', 'Cox\'s Bazar', 'Overseas / Non-Resident'
  ];

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  // Save to local storage whenever members update
  useEffect(() => {
    try {
      localStorage.setItem('act_members_registry', JSON.stringify(members));
    } catch {
      // ignore
    }
  }, [members]);

  // Handle Form Submit to Step 2
  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email) return;
    setCurrentStep(2);
  };

  // Quick fill demo transaction id
  const handleAutoFillPayment = () => {
    setMfsNumber(formData.phone || '01712345678');
    const randomTrx = 'TRX' + Math.random().toString(36).substring(2, 8).toUpperCase();
    setTrxId(randomTrx);
  };

  // Complete Payment & Generate Certificate
  const handleConfirmSubscription = () => {
    setPaymentProcessing(true);
    setTimeout(() => {
      const randomCertNum = 'ACT-2026-M' + Math.floor(1000 + Math.random() * 9000);
      const today = new Date();
      const nextYear = new Date(today);
      nextYear.setFullYear(today.getFullYear() + 1);

      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      const joinedDateStr = today.toLocaleDateString('en-US', options);
      const expiryDateStr = nextYear.toLocaleDateString('en-US', options);

      const newMember: MemberRecord = {
        id: 'mem-' + Date.now(),
        certificateNo: randomCertNum,
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        nidOrBirthCert: formData.nidOrBirthCert.trim() || 'NID-VERIFIED',
        bloodGroup: formData.bloodGroup,
        district: formData.district,
        occupation: formData.occupation.trim() || 'General Citizen',
        primaryInterest: formData.primaryInterest,
        joinedDate: joinedDateStr,
        expiryDate: expiryDateStr,
        paymentMethod: paymentMethod,
        transactionId: trxId.trim() || ('TX' + Math.random().toString(36).substring(2, 7).toUpperCase()),
        amount: 250,
        status: 'Active',
        membershipTier: 'General Associate Member'
      };

      setMembers((prev) => [newMember, ...prev]);
      setRegisteredMember(newMember);
      setPaymentProcessing(false);
      setCurrentStep(3);
    }, 1200);
  };

  // Search verification
  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const query = verifyQuery.trim().toLowerCase();
    if (!query) return;

    const found = members.find(
      (m) =>
        m.certificateNo.toLowerCase() === query ||
        m.phone.toLowerCase().includes(query) ||
        m.email.toLowerCase() === query ||
        m.nidOrBirthCert.toLowerCase() === query
    );

    if (found) {
      setVerificationResult(found);
    } else {
      setVerificationResult('NOT_FOUND');
    }
  };

  return (
    <section id="membership" className="py-20 lg:py-28 bg-stone-900 text-white relative overflow-hidden">
      {/* Background embellishment */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-widest mb-3">
            <Award className="w-4 h-4 text-amber-400" />
            <span>{lang === 'en' ? 'Democratic Grassroots Philanthropy' : 'জনগণের অংশীদারিত্বমূলক সদস্যপদ'}</span>
          </div>

          <h2 className="font-serif-trust text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {lang === 'en' ? 'Get Official Trust Membership & Certificate' : 'ট্রাস্টের সদস্যপদ ও ডিজিটাল সার্টিফিকেট গ্রহণ'}
          </h2>

          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
            {lang === 'en' ? (
              <>
                Become a registered Associate Member of Afzal Charitable Trust for an annual subscription of only{' '}
                <span className="text-amber-300 font-bold underline decoration-amber-400 decoration-2">250 Taka (৳250)</span>. 
                Receive an official, verifiable digital certificate carrying the authentic seal and signatures of the Trust Secretariat.
              </>
            ) : (
              <>
                মাত্র <span className="text-amber-300 font-bold">২৫০ টাকা</span> বাৎসরিক সাবস্ক্রিপশন ফি দিয়ে আফজাল চ্যারিটেবল ট্রাস্টের নিবন্ধিত সহযোগী সদস্য হোন এবং তাৎক্ষণিক কিউআর কোডযুক্ত ডিজিটাল সনদপত্র লাভ করুন।
              </>
            )}
          </p>
        </div>

        {/* 3 Step Card Enclosure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Enrollment Workflow (7 Cols) */}
          <div className="lg:col-span-7 bg-stone-850 rounded-2xl border border-stone-700/80 p-6 sm:p-8 shadow-2xl">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between border-b border-stone-700 pb-5 mb-6 text-xs font-semibold">
              <div className={`flex items-center gap-2 ${currentStep >= 1 ? 'text-amber-400' : 'text-stone-500'}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  currentStep >= 1 ? 'bg-amber-400 text-stone-950' : 'bg-stone-700 text-stone-300'
                }`}>
                  1
                </span>
                <span>Member Details</span>
              </div>
              <span className="text-stone-600">&rarr;</span>
              <div className={`flex items-center gap-2 ${currentStep >= 2 ? 'text-amber-400' : 'text-stone-500'}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  currentStep >= 2 ? 'bg-amber-400 text-stone-950' : 'bg-stone-700 text-stone-300'
                }`}>
                  2
                </span>
                <span>৳250 Subscription</span>
              </div>
              <span className="text-stone-600">&rarr;</span>
              <div className={`flex items-center gap-2 ${currentStep === 3 ? 'text-emerald-400' : 'text-stone-500'}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  currentStep === 3 ? 'bg-emerald-400 text-stone-950' : 'bg-stone-700 text-stone-300'
                }`}>
                  3
                </span>
                <span>Certificate</span>
              </div>
            </div>

            {/* STEP 1: Personal Profile */}
            {currentStep === 1 && (
              <form onSubmit={handleProceedToPayment} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Full Name (as will appear on Certificate) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Mohammad Shamsul Huda"
                    className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-xl text-stone-100 placeholder-stone-500 text-sm focus:outline-hidden focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="shamsul@example.com"
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-xl text-stone-100 placeholder-stone-500 text-sm focus:outline-hidden focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="017XXXXXXXX"
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-xl text-stone-100 placeholder-stone-500 text-sm focus:outline-hidden focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                      National ID / Birth Cert #
                    </label>
                    <input
                      type="text"
                      value={formData.nidOrBirthCert}
                      onChange={(e) => setFormData({ ...formData, nidOrBirthCert: e.target.value })}
                      placeholder="NID or Birth Reg No"
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-xl text-stone-100 placeholder-stone-500 text-sm focus:outline-hidden focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                      Blood Group *
                    </label>
                    <select
                      value={formData.bloodGroup}
                      onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-xl text-stone-100 text-sm focus:outline-hidden focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    >
                      {bloodGroups.map((bg) => (
                        <option key={bg} value={bg}>{bg}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                      Home District *
                    </label>
                    <select
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-xl text-stone-100 text-sm focus:outline-hidden focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    >
                      {districtsOfBangladesh.map((dist) => (
                        <option key={dist} value={dist}>{dist}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                      Profession / Skill
                    </label>
                    <input
                      type="text"
                      value={formData.occupation}
                      onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                      placeholder="e.g. Teacher, Doctor, Student, Banker"
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-xl text-stone-100 placeholder-stone-500 text-sm focus:outline-hidden focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                      Preferred Volunteer Wing
                    </label>
                    <select
                      value={formData.primaryInterest}
                      onChange={(e) => setFormData({ ...formData, primaryInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-xl text-stone-100 text-sm focus:outline-hidden focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    >
                      <option value="Education, Research and Scholarships">Education, Research and Scholarships</option>
                      <option value="Medical and Healthcare Assistance">Medical and Healthcare Assistance</option>
                      <option value="Poverty Relief">Poverty Relief</option>
                      <option value="Old Age Home and Orphanage Initiatives">Old Age Home and Orphanage</option>
                      <option value="Third gender or Transgender Initiatives">Third gender / Transgender Initiatives</option>
                      <option value="Environmental Awareness">Environmental Awareness</option>
                      <option value="Citizen Journalism">Citizen Journalism</option>
                      <option value="Advocacy and awareness against drugs">Advocacy against drugs</option>
                      <option value="Digital Learning and Security">Digital Learning and Security</option>
                      <option value="Volunteering">General Volunteering</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <div className="text-xs text-stone-400">
                    Annual Subscription: <span className="font-bold text-amber-300 text-sm">৳250 Taka</span>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    <span>Proceed to ৳250 Payment</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </form>
            )}

            {/* STEP 2: Payment of 250 BDT */}
            {currentStep === 2 && (
              <div className="space-y-5 animate-in fade-in">
                <div className="p-4 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-amber-300 text-sm">
                      Membership Fee: ৳250 (Two Hundred Fifty Taka)
                    </h4>
                    <p className="text-xs text-stone-300 mt-0.5">
                      Your subscription directly funds educational stipends and medicine for destitute families across Bangladesh.
                    </p>
                  </div>
                </div>

                {/* Payment Gateway Options */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-2">
                    Select Payment Method:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {(['bKash', 'Nagad', 'Rocket', 'Bank Card'] as const).map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setPaymentMethod(method)}
                        className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                          paymentMethod === method
                            ? 'border-amber-400 bg-amber-400/15 text-white font-bold'
                            : 'border-stone-700 bg-stone-900/60 text-stone-400 hover:border-stone-600'
                        }`}
                      >
                        <div className="text-sm">{method}</div>
                        <div className="text-[10px] text-stone-400 mt-0.5">MFS &middot; BD</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Instructions Box */}
                <div className="p-4 rounded-xl bg-stone-900 border border-stone-700 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-stone-300 font-semibold">
                    <span>Afzal Charitable Trust Official {paymentMethod} Account:</span>
                    <span className="font-mono text-amber-300 text-sm">01711-234567</span>
                  </div>
                  <ol className="list-decimal list-inside text-stone-400 space-y-1 text-[11px] leading-relaxed">
                    <li>Go to your {paymentMethod} App or dial USSD.</li>
                    <li>Select &ldquo;Send Money&rdquo; or &ldquo;Payment&rdquo; to: <strong className="text-stone-200">01711-234567</strong></li>
                    <li>Enter Amount: <strong className="text-amber-300">250</strong> Taka.</li>
                    <li>Use Reference: <strong className="text-stone-200">ACT-MEM</strong></li>
                    <li>Enter the Transaction ID below, or click &ldquo;Instant Demo Autofill&rdquo; for test issuance.</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Sender Mobile Number
                    </label>
                    <input
                      type="tel"
                      value={mfsNumber}
                      onChange={(e) => setMfsNumber(e.target.value)}
                      placeholder="01XXXXXXXXX"
                      className="w-full px-3 py-2 bg-stone-900 border border-stone-700 rounded-lg text-stone-100 text-xs focus:outline-hidden focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Transaction ID (TrxID)
                    </label>
                    <input
                      type="text"
                      value={trxId}
                      onChange={(e) => setTrxId(e.target.value)}
                      placeholder="e.g. 9J820KL9A"
                      className="w-full px-3 py-2 bg-stone-900 border border-stone-700 rounded-lg text-stone-100 text-xs focus:outline-hidden focus:border-amber-400 font-mono"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    type="button"
                    onClick={handleAutoFillPayment}
                    className="text-xs text-amber-400 hover:text-amber-300 underline font-medium cursor-pointer"
                  >
                    ⚡ Click to Auto-Fill Simulated Payment (৳250)
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="text-xs text-stone-400 hover:text-stone-200 cursor-pointer"
                  >
                    &larr; Back to Details
                  </button>
                </div>

                <div className="pt-3">
                  <button
                    type="button"
                    disabled={paymentProcessing}
                    onClick={handleConfirmSubscription}
                    className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-sm rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {paymentProcessing ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Verifying ৳250 Transaction with MFS Gateway...</span>
                      </>
                    ) : (
                      <>
                        <ShieldCheck className="w-5 h-5 text-emerald-200" />
                        <span>Verify ৳250 &amp; Issue Official Membership Certificate</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Certificate Issued Success */}
            {currentStep === 3 && registeredMember && (
              <div className="space-y-6 text-center animate-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
                    Official Confirmation
                  </span>
                  <h3 className="font-serif-trust text-2xl font-bold text-white mt-1">
                    Welcome, {registeredMember.fullName}!
                  </h3>
                  <p className="text-xs text-stone-300 mt-1 max-w-md mx-auto">
                    Your 250 Taka annual subscription has been validated. You are officially enrolled in the Afzal Charitable Trust National Member Directory.
                  </p>
                </div>

                {/* Certificate summary card */}
                <div className="bg-stone-900 border border-amber-400/40 rounded-xl p-5 text-left space-y-3 relative overflow-hidden">
                  <div className="absolute top-2 right-3 font-mono text-[10px] text-amber-400/70">
                    SEALED &amp; RECORDED
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-stone-500 block">Certificate &amp; Member ID</span>
                      <span className="font-mono font-bold text-amber-300 text-sm">{registeredMember.certificateNo}</span>
                    </div>
                    <div>
                      <span className="text-stone-500 block">Status</span>
                      <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Active Member
                      </span>
                    </div>
                    <div>
                      <span className="text-stone-500 block">Blood Group &amp; District</span>
                      <span className="text-stone-200 font-medium">{registeredMember.bloodGroup} &middot; {registeredMember.district}</span>
                    </div>
                    <div>
                      <span className="text-stone-500 block">Valid Thru</span>
                      <span className="text-stone-200 font-medium">{registeredMember.expiryDate}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => onOpenCertificateModal(registeredMember)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold text-sm rounded-xl shadow-lg cursor-pointer"
                  >
                    <Award className="w-4 h-4 text-stone-950" />
                    <span>View &amp; Print Full Certificate</span>
                  </button>

                  <button
                    onClick={() => {
                      setRegisteredMember(null);
                      setCurrentStep(1);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        nidOrBirthCert: '',
                        bloodGroup: 'B+',
                        district: 'Dhaka',
                        occupation: '',
                        primaryInterest: 'Education, Research and Scholarships'
                      });
                    }}
                    className="px-4 py-3 text-xs text-stone-400 hover:text-stone-200 cursor-pointer"
                  >
                    Register Another Person
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Member Benefits & Certificate Verification Tool (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Membership Benefits Box */}
            <div className="bg-stone-850 rounded-2xl border border-stone-700/80 p-6 sm:p-7 shadow-xl space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">
                    What ৳250 Membership Delivers
                  </h3>
                  <p className="text-[11px] text-stone-400">Institutional privileges &amp; transparent service</p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Official Digital Certificate:</strong> High-resolution, verifiable certificate with security QR code, member number, and Trustee Chairman signature.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Humanitarian Impact:</strong> Your ৳250 is pooled directly to provide study materials for orphans and medicines for rural clinics.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Emergency Blood Network:</strong> Listed in the Trust&apos;s voluntary blood donor registry according to your blood group and home district.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Trustee Assemblies:</strong> Invites to district level volunteer conventions, annual general report reviews, and citizen consultative dialogues.</span>
                </div>
              </div>

              {/* Sample Certificate preview trigger */}
              <div className="pt-3 border-t border-stone-700 flex items-center justify-between">
                <span className="text-xs text-stone-400">Want to inspect certificate design?</span>
                <button
                  onClick={() => onOpenCertificateModal(members[0])}
                  className="text-xs font-bold text-amber-300 hover:text-amber-200 underline cursor-pointer"
                >
                  View Sample Certificate &rarr;
                </button>
              </div>
            </div>

            {/* Public Certificate Verification Tool */}
            <div className="bg-stone-850 rounded-2xl border border-stone-700/80 p-6 sm:p-7 shadow-xl space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">
                    Verify Membership Certificate
                  </h3>
                  <p className="text-[11px] text-stone-400">Public registry verification tool</p>
                </div>
              </div>

              <form onSubmit={handleVerify} className="space-y-2">
                <div className="relative">
                  <input
                    type="text"
                    value={verifyQuery}
                    onChange={(e) => setVerifyQuery(e.target.value)}
                    placeholder="Enter Certificate No (e.g. ACT-2026-M1042)"
                    className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-xl text-stone-100 placeholder-stone-500 text-xs font-mono focus:outline-hidden focus:border-emerald-400"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-2 bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span>Check Authenticity</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => { setVerifyQuery('ACT-2026-M1042'); }}
                    className="px-3 py-2 bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs rounded-xl cursor-pointer"
                    title="Load sample ID"
                  >
                    Sample ID
                  </button>
                </div>
              </form>

              {/* Verification Result Card */}
              {verificationResult && verificationResult !== 'NOT_FOUND' && (
                <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 space-y-2 animate-in fade-in">
                  <div className="flex items-center justify-between text-xs text-emerald-300 font-bold border-b border-emerald-800/80 pb-1.5">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      VERIFIED OFFICIAL MEMBER
                    </span>
                    <span className="font-mono text-amber-300">{verificationResult.certificateNo}</span>
                  </div>

                  <div className="text-xs space-y-1 text-stone-200 pt-1">
                    <div><strong>Member Name:</strong> {verificationResult.fullName}</div>
                    <div><strong>Status:</strong> <span className="text-emerald-400 font-semibold">{verificationResult.status}</span></div>
                    <div><strong>Blood Group:</strong> {verificationResult.bloodGroup} | <strong>District:</strong> {verificationResult.district}</div>
                    <div><strong>Valid Through:</strong> {verificationResult.expiryDate}</div>
                  </div>

                  <button
                    onClick={() => onOpenCertificateModal(verificationResult)}
                    className="mt-2 text-xs font-bold text-amber-300 hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inspect Full Official Certificate</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              )}

              {verificationResult === 'NOT_FOUND' && (
                <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-800/60 text-xs text-rose-200">
                  No registered certificate found matching &ldquo;{verifyQuery}&rdquo;. Please verify the certificate ID or contact Trust Secretariat.
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
