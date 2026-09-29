import React from 'react';
import { 
  ShieldCheck, 
  FileCheck2, 
  Landmark, 
  Scale, 
  Eye, 
  Award, 
  CheckCircle2, 
  Building 
} from 'lucide-react';

interface TrusteeGovernanceProps {
  lang: 'en' | 'bn';
}

export const TrusteeGovernance: React.FC<TrusteeGovernanceProps> = ({ lang }) => {
  const trustees = [
    {
      name: 'Prof. Dr. Afzal Hossain',
      role: 'Founder & Chairman, Board of Trustees',
      bio: 'Eminent academician, philanthropist, and public welfare advocate with over four decades of civic service in Bangladesh.',
      imageBadge: 'AH'
    },
    {
      name: 'Barrister S. M. Farhan',
      role: 'Trustee & General Secretary',
      bio: 'Supreme Court Advocate specializing in human rights law, public interest litigation, and non-profit governance.',
      imageBadge: 'SF'
    },
    {
      name: 'Dr. Shahana Yasmin',
      role: 'Trustee & Director of Medical Services',
      bio: 'Consultant physician leading mobile health missions, neonatal nutrition, and charitable diagnostic clinics.',
      imageBadge: 'SY'
    },
    {
      name: 'Engineer Mahbubur Rahman',
      role: 'Trustee & Treasurer',
      bio: 'Former chief civil engineer supervising rural water filtration, tube wells, and elderly shelter infrastructure.',
      imageBadge: 'MR'
    }
  ];

  return (
    <section id="governance" className="py-20 lg:py-28 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
            <Scale className="w-4 h-4 text-emerald-700" />
            <span>{lang === 'en' ? 'Fiduciary Integrity & Stewardship' : 'স্বচ্ছতা, জবাবদিহিতা ও সুশাসন'}</span>
          </div>
          <h2 className="font-serif-trust text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            {lang === 'en' ? 'Trust Governance & Transparency' : 'ট্রাস্টের পরিচালনা ও জবাবদিহিতা'}
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            Registered under the Trust Act (Act II of 1882) of Bangladesh. Every allocation, donation, and membership subscription is guided by statutory oversight and independent chartered audits.
          </p>
        </div>

        {/* 3 Integrity Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1.5">100% Efficiency Pledge</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              All administrative overhead, office rent, and operational salaries are covered exclusively by our founding Waqf endowment. 100% of citizen subscriptions and donations reach grassroots beneficiaries.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1.5">Statutory External Audit</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Financial statements are audited annually by certified Chartered Accountants (Rahman &amp; Co. CA). Audit reports and tax compliance certificates are publicly published on the Trust Notice Board.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1.5">Non-Discriminatory Mandate</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              As enshrined in our foundational charter, the Trust operates strictly on humanitarian criteria without regard to religious affiliation, race, caste, gender, or political opinion.
            </p>
          </div>
        </div>

        {/* Board of Trustees Grid */}
        <div className="border-t border-stone-200 pt-14">
          <div className="text-center mb-10">
            <h3 className="font-serif-trust text-2xl font-bold text-slate-900">
              Board of Trustees
            </h3>
            <p className="text-xs text-stone-500 mt-1">Guiding the institutional vision and fiduciary administration</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustees.map((t, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 border border-stone-200 text-center flex flex-col items-center shadow-xs hover:border-emerald-300 transition-colors">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-900 to-stone-900 text-amber-300 font-serif-trust font-bold text-lg flex items-center justify-center shadow-sm mb-4 border-2 border-amber-400/40">
                  {t.imageBadge}
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-0.5">{t.name}</h4>
                <div className="text-[11px] font-semibold text-emerald-800 mb-2">{t.role}</div>
                <p className="text-xs text-stone-500 leading-relaxed">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
