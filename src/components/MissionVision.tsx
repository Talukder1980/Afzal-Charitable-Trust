import React from 'react';
import { Target, Compass, HeartHandshake, Eye, Sparkles, Shield, Users, Scale } from 'lucide-react';

interface MissionVisionProps {
  lang: 'en' | 'bn';
}

export const MissionVision: React.FC<MissionVisionProps> = ({ lang }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header kicker */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-3">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>{lang === 'en' ? 'Core Foundation & Institutional Purpose' : 'ট্রাস্টের মূল ভিত্তি ও উদ্দেশ্য'}</span>
          </div>
          <h2 className="font-serif-trust text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            {lang === 'en' ? 'Our Mission & Vision' : 'আমাদের মিশন ও ভিশন'}
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg">
            {lang === 'en' 
              ? 'Founded on the unwavering conviction that human dignity is non-negotiable, Afzal Charitable Trust stands as a beacon of hope and sustainable upliftment across Bangladesh.'
              : 'মানুষের মর্যাদা ও সমঅধিকার প্রতিষ্ঠায় অঙ্গীকারবদ্ধ আফজাল চ্যারিটেবল ট্রাস্ট সমগ্র বাংলাদেশে টেকসই উন্নয়নের লক্ষ্যে কাজ করে যাচ্ছে।'}
          </p>
        </div>

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Mission Card */}
          <div className="relative rounded-2xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-stone-950 text-white p-8 sm:p-10 shadow-xl flex flex-col justify-between overflow-hidden border border-emerald-800/40">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-48 h-48 bg-emerald-600/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-4 right-6 text-emerald-800/30 select-none pointer-events-none font-serif-trust text-8xl font-black">
              “
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-400 text-stone-950 flex items-center justify-center font-bold shadow-md">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold block">
                    Our Driving Purpose
                  </span>
                  <h3 className="font-serif-trust text-2xl sm:text-3xl font-bold text-white">
                    {lang === 'en' ? 'Mission Statement' : 'আমাদের মিশন (লক্ষ্য)'}
                  </h3>
                </div>
              </div>

              {/* Exact user requested Mission Statement */}
              <blockquote className="text-stone-200 text-base sm:text-lg leading-relaxed font-normal relative z-10 border-l-2 border-amber-400/80 pl-4 my-2">
                &ldquo;Afzal Charitable Trust is dedicated to uplifting underprivileged and vulnerable communities across Bangladesh by providing essential support in education, healthcare, poverty relief, and social welfare. We strive to create an inclusive and equitable society through compassionate service, sustainable development initiatives, and empowerment programs that enable individuals to live with dignity and self-reliance. Guided by transparency, non-discrimination, and collaboration, we work tirelessly to build a brighter, healthier, and more prosperous future for all.&rdquo;
              </blockquote>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-800/60 flex items-center justify-between text-xs text-emerald-300 font-medium">
              <span>Compassionate Service &middot; Sustainable Development</span>
              <span className="text-amber-300 font-semibold">Bangladesh</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative rounded-2xl bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white p-8 sm:p-10 shadow-xl flex flex-col justify-between overflow-hidden border border-stone-800">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-4 right-6 text-stone-800/30 select-none pointer-events-none font-serif-trust text-8xl font-black">
              “
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-400 text-emerald-950 flex items-center justify-center font-bold shadow-md">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-emerald-300 font-semibold block">
                    Our Future Horizon
                  </span>
                  <h3 className="font-serif-trust text-2xl sm:text-3xl font-bold text-white">
                    {lang === 'en' ? 'Vision Statement' : 'আমাদের ভিশন (দৃষ্টিভঙ্গি)'}
                  </h3>
                </div>
              </div>

              {/* Exact user requested Vision Statement */}
              <blockquote className="text-stone-200 text-base sm:text-lg leading-relaxed font-normal relative z-10 border-l-2 border-emerald-400/80 pl-4 my-2">
                &ldquo;Afzal Charitable Trust envisions a Bangladesh where every individual, regardless of background or circumstance, has access to education, healthcare, and basic necessities for a life of dignity and opportunity. We aspire to build an inclusive, compassionate, and self-reliant society free from poverty, discrimination, and suffering. Through sustained efforts and collective partnership, we strive to create lasting change that empowers communities and transforms lives for generations to come.&rdquo;
              </blockquote>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-800 flex items-center justify-between text-xs text-stone-300 font-medium">
              <span>Equitable Society &middot; Dignity &middot; Opportunity</span>
              <span className="text-emerald-300 font-semibold">Generational Change</span>
            </div>
          </div>

        </div>

        {/* Four Guiding Core Pillars */}
        <div className="mt-16 pt-12 border-t border-stone-200">
          <div className="text-center mb-8">
            <h4 className="text-xs uppercase font-bold tracking-wider text-stone-500">
              {lang === 'en' ? 'Operational Values of Afzal Charitable Trust' : 'ট্রাস্টের মূল চার স্তম্ভ'}
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 hover:border-emerald-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h5 className="font-bold text-slate-900 text-base mb-1">Compassionate Service</h5>
              <p className="text-xs text-stone-600 leading-relaxed">
                Treating every beneficiary with profound human dignity, deep empathy, and genuine emotional solidarity.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 hover:border-emerald-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center mb-3">
                <Shield className="w-5 h-5" />
              </div>
              <h5 className="font-bold text-slate-900 text-base mb-1">Uncompromising Transparency</h5>
              <p className="text-xs text-stone-600 leading-relaxed">
                Every Taka is accounted for with independent annual audits, public disclosures, and open governance.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 hover:border-emerald-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h5 className="font-bold text-slate-900 text-base mb-1">Inclusion &amp; Non-Discrimination</h5>
              <p className="text-xs text-stone-600 leading-relaxed">
                Serving all marginalized communities without regard to religion, ethnicity, gender identity, or background.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 hover:border-emerald-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center mb-3">
                <Scale className="w-5 h-5" />
              </div>
              <h5 className="font-bold text-slate-900 text-base mb-1">Sustainable Self-Reliance</h5>
              <p className="text-xs text-stone-600 leading-relaxed">
                Moving beyond temporary aid to equip families with vocational tools, education, and social enterprises.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
