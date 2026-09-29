import React from 'react';
import { 
  Building2, 
  PhoneCall, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Heart, 
  Award, 
  Bell, 
  ExternalLink 
} from 'lucide-react';

interface FooterProps {
  onOpenMembership: () => void;
  onOpenDonate: () => void;
  lang: 'en' | 'bn';
}

export const Footer: React.FC<FooterProps> = ({
  onOpenMembership,
  onOpenDonate,
  lang
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1 & 2: Trust identity & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 flex items-center justify-center text-amber-300 font-serif-trust font-bold text-lg border border-emerald-700/50 shadow-md">
                ACT
              </div>
              <div>
                <h3 className="font-serif-trust text-xl font-bold text-white tracking-wide">
                  Afzal Charitable Trust
                </h3>
                <p className="text-xs text-stone-400">
                  Govt. Trust Registration: ACT/DH-1049/2017
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Dedicated to uplifting underprivileged communities across Bangladesh through compassion, education, healthcare, and sustainable development.
            </p>

            <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800 space-y-1.5 text-xs">
              <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> 100% Transparent Governance
              </div>
              <p className="text-stone-400 text-[11px]">
                Administrative costs are funded via permanent endowment. 100% of public gifts go directly to grassroots projects.
              </p>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollTo('about')} className="text-stone-400 hover:text-white transition-colors cursor-pointer">
                  Mission &amp; Vision
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('focus-areas')} className="text-stone-400 hover:text-white transition-colors cursor-pointer">
                  16 Humanitarian Wings
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('notice-board')} className="text-stone-400 hover:text-white transition-colors cursor-pointer">
                  Official Notice Board
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('membership')} className="text-stone-400 hover:text-white transition-colors cursor-pointer">
                  Associate Membership (৳250)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('volunteer')} className="text-stone-400 hover:text-white transition-colors cursor-pointer">
                  Volunteer Corps Sign-up
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('governance')} className="text-stone-400 hover:text-white transition-colors cursor-pointer">
                  Board of Trustees &amp; Audits
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Key Programmatic Wings */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Flagship Sectors
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>Education &amp; Merit Scholarships</li>
              <li>Medical &amp; Free Healthcare Camps</li>
              <li>Poverty Relief &amp; Ration Baskets</li>
              <li>Old Age Home &amp; Orphanages</li>
              <li>Transgender &amp; Hijra Initiatives</li>
              <li>Citizen Journalism &amp; Digital Security</li>
              <li>Environmental Protection &amp; Tree Planting</li>
            </ul>
          </div>

          {/* Col 5: Contact Secretariat */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Central Secretariat
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>House 14, Road 7, Dhanmondi R/A, Dhaka-1205, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+8801711234567" className="hover:text-white transition-colors">
                  +880 1711-234567 (Toll-Free/MFS)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:secretariat@afzaltrust.org" className="hover:text-white transition-colors">
                  secretariat@afzaltrust.org
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenMembership}
                className="w-full py-2 px-3 text-xs font-bold bg-amber-400 hover:bg-amber-300 text-stone-950 rounded-lg shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Join for ৳250</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright and legal disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Afzal Charitable Trust. All rights reserved. Registered Public Charitable Trust in Bangladesh.
          </p>
          <div className="flex items-center gap-4 text-stone-400">
            <span>Non-Political</span>
            <span>&middot;</span>
            <span>Non-Discriminatory</span>
            <span>&middot;</span>
            <span>Audited Annually</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
