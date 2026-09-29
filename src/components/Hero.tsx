import React from 'react';
import { 
  Award, 
  ArrowRight, 
  Bell, 
  Heart, 
  ShieldCheck, 
  Users, 
  GraduationCap, 
  Stethoscope, 
  CheckCircle2 
} from 'lucide-react';

interface HeroProps {
  onOpenMembership: () => void;
  onOpenDonate: () => void;
  onGoToNotices: () => void;
  onGoToFocusAreas: () => void;
  lang: 'en' | 'bn';
}

export const Hero: React.FC<HeroProps> = ({
  onOpenMembership,
  onOpenDonate,
  onGoToNotices,
  onGoToFocusAreas,
  lang
}) => {
  return (
    <section className="relative overflow-hidden bg-stone-950 text-white pt-16 pb-20 lg:pt-24 lg:pb-28">
      {/* Vulnerable community photograph placed directly behind the first block and headline */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1800&q=80"
          alt="Vulnerable children and rural communities in Bangladesh"
          className="w-full h-full object-cover object-[25%_35%] opacity-28 filter saturate-75 contrast-125"
        />
        {/* Multilayer gradient overlays to guarantee pristine WCAG AA text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(6,78,59,0.35),transparent_60%)]" />
      </div>

      {/* Decorative subtle background grid & radial glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and CTAs with atmospheric backdrop */}
          <div className="lg:col-span-7 space-y-6 relative">
            
            {/* Visual caption badge linking to vulnerable community mission */}
            <div className="inline-flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-600/50 text-emerald-300 text-xs font-semibold tracking-wide backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>
                  {lang === 'en' 
                    ? 'NON-PROFIT CHARITABLE TRUST · ESTABLISHED IN BANGLADESH' 
                    : 'অলাভজনক দাতব্য ট্রাস্ট · বাংলাদেশ ট্রাস্ট আইনের অধীনে নিবন্ধিত'}
                </span>
              </div>
              <span className="text-[11px] text-stone-400 italic hidden sm:inline">
                Reaching children &amp; families in deepest need
              </span>
            </div>

            <h1 className="font-serif-trust text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] drop-shadow-md">
              {lang === 'en' ? (
                <>
                  Dignity, Relief &amp; Hope for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-200 to-emerald-200">Every Corner of Bangladesh</span>
                </>
              ) : (
                <>
                  বাংলাদেশের প্রতিটি প্রান্তে <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-200 to-emerald-200">মর্যাদা, স্বাবলম্বন ও আলোর বিস্তার</span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-stone-200 leading-relaxed max-w-2xl font-normal drop-shadow-sm">
              {lang === 'en' 
                ? 'Afzal Charitable Trust operates across 16 vital humanitarian spheres — empowering underprivileged children through education, delivering healthcare to remote villages, caring for seniors, fostering social justice, and championing self-reliance.'
                : 'আফজাল চ্যারিটেবল ট্রাস্ট শিক্ষা, স্বাস্থ্যসেবা, দারিদ্র্য নিরসন, প্রবীণ ও এতিমদের আশ্রয়, পরিবেশ এবং সামাজিক সমতার ১৬টি সুনির্দিষ্ট ক্ষেত্রে সমগ্র বাংলাদেশে নিরলসভাবে সেবাদান করে যাচ্ছে।'}
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Policy: Overheads covered by endowments</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Audited public accounts &amp; complete transparency</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Inclusive support for all regardless of religion or gender</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Instant Digital Membership &amp; Official Certificate (৳250)</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenMembership}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold text-sm rounded-xl shadow-lg shadow-amber-500/20 transition-all cursor-pointer hover:-translate-y-0.5"
              >
                <Award className="w-5 h-5 text-stone-900" />
                <span>{lang === 'en' ? 'Get Membership & Certificate (৳250)' : 'সদস্যপদ ও সার্টিফিকেট নিন (৳২৫০)'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onGoToNotices}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-stone-800/80 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-700 font-semibold text-sm rounded-xl transition-all cursor-pointer"
              >
                <Bell className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'en' ? 'Official Notice Board' : 'ট্রাস্ট নোটিশ বোর্ড'}</span>
              </button>

              <button
                onClick={onOpenDonate}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl transition-all cursor-pointer"
              >
                <Heart className="w-4 h-4 text-rose-300 fill-rose-300/30" />
                <span>{lang === 'en' ? 'Contribute Donation' : 'অনুদান প্রদান'}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Hero Visual Card with Trust Credentials */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-stone-800/90 to-emerald-950/90 border border-emerald-800/50 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-stone-700/80 pb-4 mb-5">
                <div>
                  <div className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                    Trust Registration
                  </div>
                  <div className="font-serif-trust text-lg font-bold text-white">
                    Trust Deed Reg. No. 1049/17
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                  <ShieldCheck className="w-6 h-6" />
                </div>
              </div>

              {/* Action Photograph Banner */}
              <div className="relative rounded-xl overflow-hidden mb-5 border border-stone-700/80 shadow-md group">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=700&q=80"
                  alt="Humanitarian outreach in rural Bangladesh"
                  className="w-full h-40 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-950/80 text-emerald-300 border border-emerald-700/60 font-medium text-[11px] backdrop-blur-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Field Deployments Active
                  </span>
                  <span className="text-[11px] text-stone-300 font-medium drop-shadow-sm">
                    Education &middot; Health &middot; Relief
                  </span>
                </div>
              </div>

              {/* Membership Feature Card inside Hero */}
              <div className="bg-stone-900/80 rounded-xl p-5 border border-stone-700/60 mb-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                      Public Subscription
                    </span>
                    <h3 className="text-base font-bold text-white mt-1">
                      Associate Lifetime Member
                    </h3>
                    <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                      Join hands with our mission. Every citizen can register for an annual fee of only ৳250 and receive an official, verifiable digital certificate signed by the Board of Trustees.
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs text-stone-400 block">Annual Fee</span>
                    <span className="text-2xl font-extrabold text-amber-300">৳250</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Instant Digital PDF
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verifiable QR Code
                  </span>
                  <button 
                    onClick={onOpenMembership}
                    className="text-amber-300 font-bold hover:underline cursor-pointer"
                  >
                    Enroll Now &rarr;
                  </button>
                </div>
              </div>

              {/* Live Metric Counters */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="bg-stone-900/60 border border-emerald-900/50 rounded-xl p-3.5">
                  <div className="text-2xl font-bold text-emerald-300 font-serif-trust">4,280+</div>
                  <div className="text-xs text-stone-400 mt-0.5">Scholarships &amp; Students</div>
                </div>
                <div className="bg-stone-900/60 border border-emerald-900/50 rounded-xl p-3.5">
                  <div className="text-2xl font-bold text-emerald-300 font-serif-trust">38,500+</div>
                  <div className="text-xs text-stone-400 mt-0.5">Medical Patients Treated</div>
                </div>
                <div className="bg-stone-900/60 border border-emerald-900/50 rounded-xl p-3.5">
                  <div className="text-2xl font-bold text-amber-300 font-serif-trust">62,000+</div>
                  <div className="text-xs text-stone-400 mt-0.5">Emergency Food Rations</div>
                </div>
                <div className="bg-stone-900/60 border border-emerald-900/50 rounded-xl p-3.5">
                  <div className="text-2xl font-bold text-amber-300 font-serif-trust">16 Wings</div>
                  <div className="text-xs text-stone-400 mt-0.5">64 Districts of BD</div>
                </div>
              </div>

              <div className="mt-5 text-center">
                <button
                  onClick={onGoToFocusAreas}
                  className="text-xs text-emerald-300 hover:text-emerald-200 font-medium inline-flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <span>Explore all 16 humanitarian program sectors</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
