import React from 'react';
import { 
  Award, 
  Heart, 
  HeartHandshake, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  Sparkles,
  PhoneCall
} from 'lucide-react';

interface CallToActionBannerProps {
  onOpenMembership: () => void;
  onOpenDonate: (cause?: string) => void;
  onGoToVolunteer: () => void;
  lang: 'en' | 'bn';
}

export const CallToActionBanner: React.FC<CallToActionBannerProps> = ({
  onOpenMembership,
  onOpenDonate,
  onGoToVolunteer,
  lang
}) => {
  return (
    <section className="py-16 lg:py-24 bg-stone-900 text-white relative overflow-hidden">
      
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section kicker */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'en' ? 'Direct Community Action' : 'সরাসরি অংশ নিন'}</span>
          </div>

          <h2 className="font-serif-trust text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {lang === 'en' ? 'Three Ways You Can Make An Immediate Difference' : 'মানবতার সেবায় অংশ নেওয়ার তিনটি সহজ উপায়'}
          </h2>

          <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'Whether through an affordable ৳250 annual membership, offering your specialized skills as a field volunteer, or sponsoring a child’s education and medicines.'
              : 'বাৎসরিক ২৫০ টাকা সদস্যপদ গ্রহণ, জেলাভিত্তিক স্বেচ্ছাসেবক হিসেবে দক্ষতা দান, কিংবা সুবিধাবঞ্চিতদের খাদ্য ও চিকিৎসায় অনুদান প্রদানের মাধ্যমে আমাদের সাথে যুক্ত হোন।'}
          </p>
        </div>

        {/* 3 Visual CTA Cards with High-Impact Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* CTA Card 1: ৳250 Annual Membership with Certificate */}
          <div className="group relative rounded-3xl overflow-hidden border border-stone-700/80 bg-stone-850 shadow-xl flex flex-col justify-between hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1">
            {/* Visual Photo Header */}
            <div className="relative h-52 sm:h-56 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
                alt="Education and children learning in Bangladesh"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />
              
              {/* Badges on picture */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-stone-950 font-bold text-xs shadow-md">
                <Award className="w-3.5 h-3.5 text-stone-900" />
                <span>৳250 Subscription</span>
              </div>

              <div className="absolute bottom-3 left-4 right-4 text-xs font-medium text-stone-200">
                Official Verifiable Certificate &middot; Valid 1 Year
              </div>
            </div>

            {/* Card Content & Action */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif-trust text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {lang === 'en' ? 'Become a Registered Member' : 'নিবন্ধিত সদস্য হোন'}
                </h3>
                <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                  Support sustainable poverty reduction with an annual ৳250 fee. Receive an official certificate signed by our Trustees with a verification QR code.
                </p>

                <ul className="mt-4 space-y-1.5 text-xs text-stone-400">
                  <li className="flex items-center gap-1.5 text-stone-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Instant printable high-res PDF certificate</span>
                  </li>
                  <li className="flex items-center gap-1.5 text-stone-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Included in Emergency Blood Network</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-4 border-t border-stone-800">
                <button
                  onClick={onOpenMembership}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <Award className="w-4 h-4 text-stone-950" />
                  <span>{lang === 'en' ? 'Get Membership for ৳250' : '২৫০ টাকায় সদস্যপদ নিন'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* CTA Card 2: Volunteer Corps in Action */}
          <div className="group relative rounded-3xl overflow-hidden border border-stone-700/80 bg-stone-850 shadow-xl flex flex-col justify-between hover:border-emerald-400/60 transition-all duration-300 hover:-translate-y-1">
            {/* Visual Photo Header */}
            <div className="relative h-52 sm:h-56 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80"
                alt="Volunteers collaborating for community development"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />
              
              {/* Badges on picture */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-white font-bold text-xs shadow-md">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>64 Districts Corps</span>
              </div>

              <div className="absolute bottom-3 left-4 right-4 text-xs font-medium text-stone-200">
                5,200+ Active Volunteers &middot; 16 Wings
              </div>
            </div>

            {/* Card Content & Action */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif-trust text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {lang === 'en' ? 'Join Afzal Volunteer Corps' : 'স্বেচ্ছাসেবক হিসেবে যুক্ত হোন'}
                </h3>
                <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                  Contribute your expertise in medical care, tutoring, digital literacy, disaster relief, legal aid, or citizen journalism to uplift your local upazila.
                </p>

                <ul className="mt-4 space-y-1.5 text-xs text-stone-400">
                  <li className="flex items-center gap-1.5 text-stone-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Free registration &amp; official ID badge</span>
                  </li>
                  <li className="flex items-center gap-1.5 text-stone-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Choose specific focus areas &amp; flexibility</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-4 border-t border-stone-800">
                <button
                  onClick={onGoToVolunteer}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <HeartHandshake className="w-4 h-4 text-emerald-300" />
                  <span>{lang === 'en' ? 'Register as a Volunteer' : 'স্বেচ্ছাসেবক নিবন্ধন করুন'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* CTA Card 3: Healthcare & Emergency Humanitarian Relief */}
          <div className="group relative rounded-3xl overflow-hidden border border-stone-700/80 bg-stone-850 shadow-xl flex flex-col justify-between hover:border-rose-400/60 transition-all duration-300 hover:-translate-y-1">
            {/* Visual Photo Header */}
            <div className="relative h-52 sm:h-56 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
                alt="Compassionate child healthcare and humanitarian support"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />
              
              {/* Badges on picture */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-600 text-white font-bold text-xs shadow-md">
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>100% Policy Pledge</span>
              </div>

              <div className="absolute bottom-3 left-4 right-4 text-xs font-medium text-stone-200">
                Zero Overhead Deducted &middot; Audited Accounts
              </div>
            </div>

            {/* Card Content & Action */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif-trust text-xl font-bold text-white group-hover:text-rose-300 transition-colors">
                  {lang === 'en' ? 'Emergency Relief & Health Fund' : 'জরুরি ত্রাণ ও চিকিৎসা তহবিল'}
                </h3>
                <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                  Fund life-saving food baskets for haor flood victims, free cataract surgeries for destitute seniors, or school supplies for children in char areas.
                </p>

                <ul className="mt-4 space-y-1.5 text-xs text-stone-400">
                  <li className="flex items-center gap-1.5 text-stone-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>Instant downloadable money receipt</span>
                  </li>
                  <li className="flex items-center gap-1.5 text-stone-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>bKash, Nagad, Rocket &amp; Bank Cards</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-4 border-t border-stone-800">
                <button
                  onClick={() => onOpenDonate()}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-rose-700 to-rose-800 hover:from-rose-600 hover:to-rose-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <Heart className="w-4 h-4 text-rose-200 fill-rose-200/20" />
                  <span>{lang === 'en' ? 'Donate to Emergency Fund' : 'তহবিলে অনুদান দিন'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Urgent Humanitarian Banner Strip with Real Emergency Relief Imagery */}
        <div className="mt-12 rounded-3xl overflow-hidden border border-emerald-800/60 relative bg-emerald-950 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span>Active Field Mission · Sylhet &amp; Sunamganj Haor Relief</span>
              </div>

              <h3 className="font-serif-trust text-2xl sm:text-3xl font-bold text-white leading-snug">
                {lang === 'en' 
                  ? 'Help Us Provide 5,000 Emergency Food & Clean Water Kits'
                  : 'বন্যার্ত ৫,০০০ পরিবারের মাঝে জরুরি খাদ্য ও বিশুদ্ধ পানি পৌঁছে দিতে এগিয়ে আসুন'}
              </h3>

              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed max-w-xl">
                Our mobile boat clinics and volunteer teams are actively distributing water purification tablets, dry food, and essential pediatric medicines. Each family relief packet costs only ৳1,250.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenDonate('Sylhet & Sunamganj Haor Emergency Flood Relief')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs rounded-xl shadow-md cursor-pointer transition-all hover:scale-102"
                >
                  <Heart className="w-4 h-4 text-stone-950 fill-stone-950/20" />
                  <span>Sponsor a Relief Packet (৳1,250)</span>
                </button>

                <a
                  href="tel:+8801711234567"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-900/80 hover:bg-emerald-900 text-emerald-200 border border-emerald-700/80 font-semibold text-xs rounded-xl transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  <span>Hotline: 01711-234567</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 h-64 lg:h-full relative overflow-hidden min-h-[220px]">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
                alt="Environmental sustainability and grassroots humanitarian impact"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/40 to-transparent hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent lg:hidden" />
              
              <div className="absolute bottom-4 right-4 bg-stone-900/80 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-stone-700 text-[11px] text-amber-300 font-mono">
                Verified Field Deployment · 2026
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
