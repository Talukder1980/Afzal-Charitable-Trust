import React, { useState, useEffect } from 'react';
import { FOCUS_AREAS } from '../data/focusAreas';
import { VolunteerRecord, VolunteerExpertise } from '../types';
import { 
  HeartHandshake, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  Clock, 
  Award, 
  Printer, 
  Download, 
  Share2, 
  Check, 
  AlertCircle,
  HelpCircle,
  Users
} from 'lucide-react';

interface VolunteerSectionProps {
  preselectedArea?: string | null;
  lang: 'en' | 'bn';
}

const EXPERTISE_OPTIONS: VolunteerExpertise[] = [
  'Medical & Healthcare (Doctor / Nurse / Paramedic)',
  'Education & Tutoring (Teacher / Academic / Student)',
  'IT, Web & Cybersecurity',
  'Legal Aid & Human Rights',
  'Media, Journalism & Photography',
  'Emergency Disaster Relief & Logistics',
  'Psychosocial Counseling & Social Work',
  'Vocational & Artisan Training',
  'Environmental Science & Forestry',
  'Youth Coordination & Field Operations',
  'General Community Support'
];

const BANGLADESH_DISTRICTS = [
  'Dhaka', 'Chattogram', 'Sylhet', 'Rajshahi', 'Khulna', 'Barishal', 'Rangpur', 
  'Mymensingh', 'Bogura', 'Cumilla', 'Cox\'s Bazar', 'Kishoreganj', 'Sunamganj', 
  'Kurigram', 'Jessore', 'Dinajpur', 'Pabna', 'Faridpur', 'Overseas / Non-Resident'
];

export const VolunteerSection: React.FC<VolunteerSectionProps> = ({
  preselectedArea,
  lang
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    district: 'Dhaka',
    bloodGroup: 'B+',
    expertiseArea: 'Education & Tutoring (Teacher / Academic / Student)' as VolunteerExpertise,
    skillsDescription: '',
    availability: 'Weekends Only' as const,
    motivation: ''
  });

  const [selectedFocusAreas, setSelectedFocusAreas] = useState<string[]>(
    preselectedArea ? [preselectedArea] : ['Education, Research and Scholarships']
  );

  const [submittedVolunteer, setSubmittedVolunteer] = useState<VolunteerRecord | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // If a preselectedArea prop changes from outside (e.g. user clicked "Volunteer for this Wing" on a card)
  useEffect(() => {
    if (preselectedArea && !selectedFocusAreas.includes(preselectedArea)) {
      setSelectedFocusAreas((prev) => [...prev, preselectedArea]);
    }
  }, [preselectedArea]);

  const toggleFocusArea = (title: string) => {
    if (selectedFocusAreas.includes(title)) {
      if (selectedFocusAreas.length > 1) {
        setSelectedFocusAreas(selectedFocusAreas.filter((a) => a !== title));
      }
    } else {
      setSelectedFocusAreas([...selectedFocusAreas, title]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const volId = 'ACT-VOL-2026-' + Math.floor(1000 + Math.random() * 9000);
      const today = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      const newRecord: VolunteerRecord = {
        id: 'vol-' + Date.now(),
        volunteerId: volId,
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        district: formData.district,
        bloodGroup: formData.bloodGroup,
        expertiseArea: formData.expertiseArea,
        skillsDescription: formData.skillsDescription.trim() || 'Community volunteer enthusiast',
        selectedFocusAreas: selectedFocusAreas,
        availability: formData.availability,
        motivation: formData.motivation.trim() || 'Dedicated to serving underprivileged people in Bangladesh.',
        registeredDate: today,
        status: 'Active Volunteer Corps'
      };

      try {
        const existing = localStorage.getItem('act_volunteers_registry');
        const list = existing ? JSON.parse(existing) : [];
        list.unshift(newRecord);
        localStorage.setItem('act_volunteers_registry', JSON.stringify(list));
      } catch {
        // ignore
      }

      setSubmittedVolunteer(newRecord);
      setIsSubmitting(false);
    }, 1000);
  };

  const handlePrintBadge = () => {
    window.print();
  };

  const handleCopyBadge = () => {
    if (!submittedVolunteer) return;
    navigator.clipboard.writeText(
      `Afzal Volunteer Corps ID: ${submittedVolunteer.volunteerId} | Volunteer: ${submittedVolunteer.fullName} | District: ${submittedVolunteer.district} | Afzal Charitable Trust`
    );
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="volunteer" className="py-20 lg:py-28 bg-stone-100/90 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
            <HeartHandshake className="w-4 h-4 text-emerald-700" />
            <span>{lang === 'en' ? 'Community Action & Leadership' : 'তৃণমূল স্বেচ্ছাসেবক নেটওয়ার্ক'}</span>
          </div>

          <h2 className="font-serif-trust text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            {lang === 'en' ? 'Volunteer Sign-up & Mobilization' : 'স্বেচ্ছাসেবক হিসেবে যোগদান করুন'}
          </h2>

          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'Join over 5,200 passionate change-makers across 64 districts. Whether you are a doctor, teacher, tech professional, student, or community organizer, your skills can transform lives across our 16 humanitarian focus areas.'
              : 'বাংলাদেশের ৬৪টি জেলায় আমাদের সাথে কাজ করতে যুক্ত হোন। আপনার মেধা ও দক্ষতাকে কাজে লাগিয়ে আর্তমানবতার সেবায় সরাসরি অংশ নিন।'}
          </p>
        </div>

        {/* 3 Corps Value Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-2xs flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">64 Districts Network</h4>
              <p className="text-xs text-stone-500 mt-0.5">
                Active student &amp; youth volunteer teams stationed across every administrative district.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-2xs flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Official Volunteer Credential</h4>
              <p className="text-xs text-stone-500 mt-0.5">
                Every volunteer receives an authentic registration ID, orientation pack, and deployment gear.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-2xs flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Recognition &amp; Certification</h4>
              <p className="text-xs text-stone-500 mt-0.5">
                Annual service excellence certificates and leadership mentoring for grassroots contributors.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Call To Action Photo Showcase */}
        <div className="relative rounded-3xl overflow-hidden mb-10 border border-stone-300 shadow-md group">
          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80"
            alt="Afzal Volunteer Corps mobilizing in Bangladesh"
            className="w-full h-56 sm:h-64 object-cover object-center group-hover:scale-102 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/60 to-transparent flex items-center p-6 sm:p-10">
            <div className="max-w-lg space-y-2 text-white">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
                Grassroots Action in Bangladesh
              </span>
              <h3 className="font-serif-trust text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
                Be The Helping Hand Someone Prays For
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                Whether deploying for cyclone relief, teaching at rural literacy hubs, or planting mangroves, our volunteer family stands united.
              </p>
            </div>
          </div>
        </div>

        {/* Form Enclosure */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden">
          
          {!submittedVolunteer ? (
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 lg:p-12 space-y-8">
              
              {/* Part 1: Contact Details */}
              <div>
                <div className="flex items-center gap-2.5 pb-3 border-b border-stone-200 mb-5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-900 text-white flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-serif-trust text-lg font-bold text-slate-900">
                      Personal &amp; Contact Details
                    </h3>
                    <p className="text-xs text-stone-500">How our regional coordinators can contact you</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div className="sm:col-span-2 lg:col-span-1">
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Fahim Shahriar"
                        className="w-full pl-9 pr-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-stone-400 focus:outline-hidden focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      Mobile / WhatsApp Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="017XXXXXXXX"
                        className="w-full pl-9 pr-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-stone-400 focus:outline-hidden focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full pl-9 pr-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-stone-400 focus:outline-hidden focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      Home District / Station *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <select
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        className="w-full pl-9 pr-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-emerald-700"
                      >
                        {BANGLADESH_DISTRICTS.map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      Blood Group *
                    </label>
                    <select
                      value={formData.bloodGroup}
                      onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-emerald-700"
                    >
                      {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((bg) => (
                        <option key={bg} value={bg}>{bg}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      Availability *
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <select
                        value={formData.availability}
                        onChange={(e) => setFormData({ ...formData, availability: e.target.value as any })}
                        className="w-full pl-9 pr-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-emerald-700"
                      >
                        <option value="Weekends Only">Weekends Only (Fri - Sat)</option>
                        <option value="Weekdays / Flexible">Weekdays &amp; Flexible Hours</option>
                        <option value="Emergency Rapid Deployment">Emergency Rapid Deployment (Disasters/Floods)</option>
                        <option value="Full-Time Project Volunteer">Full-Time Project Volunteer (Internship)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Part 2: Area of Expertise & Technical Skills */}
              <div>
                <div className="flex items-center gap-2.5 pb-3 border-b border-stone-200 mb-5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-900 text-white flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-serif-trust text-lg font-bold text-slate-900">
                      Area of Expertise &amp; Professional Competencies
                    </h3>
                    <p className="text-xs text-stone-500">Matching your professional skills to the right humanitarian mission</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      Primary Professional Domain / Discipline *
                    </label>
                    <select
                      value={formData.expertiseArea}
                      onChange={(e) => setFormData({ ...formData, expertiseArea: e.target.value as VolunteerExpertise })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-emerald-700 font-medium"
                    >
                      {EXPERTISE_OPTIONS.map((exp) => (
                        <option key={exp} value={exp}>{exp}</option>
                      ))}
                    </select>
                    <p className="text-[11px] text-stone-500 mt-1">
                      Whether you are an experienced professional or enthusiastic learner, every contribution counts.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      Specific Skills, Tools &amp; Qualifications
                    </label>
                    <input
                      type="text"
                      value={formData.skillsDescription}
                      onChange={(e) => setFormData({ ...formData, skillsDescription: e.target.value })}
                      placeholder="e.g. First Aid, Bengali typing, Camera handling, Math tutoring, Vehicle driving"
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-stone-400 focus:outline-hidden focus:border-emerald-700"
                    />
                    <p className="text-[11px] text-stone-500 mt-1">
                      List certifications, languages, software, or technical licenses.
                    </p>
                  </div>
                </div>
              </div>

              {/* Part 3: Selection of Specific Focus Areas (All 16 wings available) */}
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-emerald-900 text-white flex items-center justify-center text-xs font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-serif-trust text-lg font-bold text-slate-900">
                        Choose Your Preferred Focus Areas
                      </h3>
                      <p className="text-xs text-stone-500">
                        Select one or multiple wings where you would like to be actively deployed
                      </p>
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg">
                    {selectedFocusAreas.length} Selected
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {FOCUS_AREAS.map((area) => {
                    const isSelected = selectedFocusAreas.includes(area.title);
                    return (
                      <button
                        key={area.id}
                        type="button"
                        onClick={() => toggleFocusArea(area.title)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-2.5 ${
                          isSelected
                            ? 'bg-emerald-900 text-white border-emerald-900 shadow-xs'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-emerald-300 hover:bg-white'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-md mt-0.5 flex items-center justify-center shrink-0 border ${
                          isSelected ? 'bg-amber-400 border-amber-400 text-stone-950' : 'border-stone-300 bg-white'
                        }`}>
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="text-xs font-bold leading-tight">
                            {area.title}
                          </div>
                          <div className={`text-[10px] mt-0.5 ${isSelected ? 'text-emerald-200' : 'text-stone-400'}`}>
                            {area.category}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Part 4: Motivation */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1.5">
                  Why do you wish to volunteer with Afzal Charitable Trust? (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  placeholder="Share a brief note about what motivates your community participation..."
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-stone-400 focus:outline-hidden focus:border-emerald-700 resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Volunteering is strictly honorary and non-partisan under Trust bylaws.</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer active:scale-98"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Registering in Volunteer Corps...</span>
                    </>
                  ) : (
                    <>
                      <HeartHandshake className="w-4 h-4 text-emerald-200" />
                      <span>Complete Volunteer Registration</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          ) : (
            /* Volunteer Success Badge Card */
            <div className="p-6 sm:p-10 lg:p-12 text-center space-y-8 animate-in zoom-in-95">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto border-2 border-emerald-300">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-800 font-bold">
                  Volunteer Registration Confirmed
                </span>
                <h3 className="font-serif-trust text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  Welcome to the Corps, {submittedVolunteer.fullName}!
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl mx-auto">
                  You are officially enrolled in the <strong>Afzal Volunteer Corps</strong>. Our regional volunteer coordinator for <strong>{submittedVolunteer.district}</strong> will reach out via WhatsApp/Phone for field briefing.
                </p>
              </div>

              {/* Digital Badge Layout */}
              <div className="max-w-xl mx-auto bg-stone-900 text-white rounded-2xl p-6 sm:p-8 text-left border-2 border-amber-400/40 relative shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 font-serif-trust text-8xl font-black select-none pointer-events-none text-amber-300">
                  ACT
                </div>

                <div className="flex items-center justify-between border-b border-stone-800 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-800 text-amber-300 font-serif-trust font-bold flex items-center justify-center text-sm border border-emerald-600">
                      ACT
                    </div>
                    <div>
                      <div className="text-xs font-bold text-amber-300 tracking-wider uppercase">
                        Afzal Volunteer Corps
                      </div>
                      <div className="text-[10px] text-stone-400">
                        Humanitarian Service Credential
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-stone-400 block">Volunteer ID</span>
                    <span className="font-mono text-sm font-bold text-emerald-400">{submittedVolunteer.volunteerId}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-stone-400 block text-[10px]">Volunteer Name:</span>
                    <span className="font-bold text-white text-sm">{submittedVolunteer.fullName}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px]">Station / District:</span>
                    <span className="font-semibold text-stone-200">{submittedVolunteer.district}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px]">Area of Expertise:</span>
                    <span className="text-amber-200 font-medium">{submittedVolunteer.expertiseArea}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px]">Blood Group:</span>
                    <span className="text-red-400 font-bold">{submittedVolunteer.bloodGroup}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800">
                  <span className="text-[10px] text-stone-400 block mb-1">Assigned Focus Wings:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {submittedVolunteer.selectedFocusAreas.map((area, i) => (
                      <span key={i} className="text-[10px] bg-stone-800 text-emerald-300 px-2 py-0.5 rounded-md border border-stone-700">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-[10px] text-stone-400">
                  <span>Enrolled: {submittedVolunteer.registeredDate}</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Status: Verified Active
                  </span>
                </div>
              </div>

              {/* Action buttons for volunteer */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleCopyBadge}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl cursor-pointer"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? 'Copied Details!' : 'Share Credential'}</span>
                </button>

                <button
                  onClick={handlePrintBadge}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl shadow-xs cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Volunteer ID Card</span>
                </button>

                <button
                  onClick={() => {
                    setSubmittedVolunteer(null);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      district: 'Dhaka',
                      bloodGroup: 'B+',
                      expertiseArea: 'Education & Tutoring (Teacher / Academic / Student)',
                      skillsDescription: '',
                      availability: 'Weekends Only',
                      motivation: ''
                    });
                  }}
                  className="px-4 py-2.5 text-xs text-stone-500 hover:text-stone-800 cursor-pointer"
                >
                  Register Another Volunteer
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
