import React, { useState } from 'react';
import { 
  Building2, 
  Menu, 
  X, 
  Award, 
  Heart, 
  Bell, 
  Compass, 
  BookOpen, 
  PhoneCall, 
  Globe2 
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenMembership: () => void;
  onOpenDonate: () => void;
  lang: 'en' | 'bn';
  setLang: (l: 'en' | 'bn') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenMembership,
  onOpenDonate,
  lang,
  setLang
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', labelEn: 'Home', labelBn: 'হোম' },
    { id: 'about', labelEn: 'Mission & Vision', labelBn: 'লক্ষ্য ও উদ্দেশ্য' },
    { id: 'focus-areas', labelEn: '16 Focus Wings', labelBn: '১৬টি কর্মক্ষেত্র' },
    { id: 'notice-board', labelEn: 'Notice Board', labelBn: 'নোটিশ বোর্ড' },
    { id: 'membership', labelEn: 'Membership (৳250)', labelBn: 'সদস্যপদ (২৫০ টাকা)' },
    { id: 'volunteer', labelEn: 'Volunteer Corps', labelBn: 'স্বেচ্ছাসেবক' },
    { id: 'governance', labelEn: 'Trust Governance', labelBn: 'ট্রাস্ট প্রশাসন' },
    { id: 'contact', labelEn: 'Contact', labelBn: 'যোগাযোগ' }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
      {/* Top Banner Notice Hotline */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium">
              {lang === 'en' 
                ? 'Afzal Charitable Trust — Registered Public Humanitarian Trust in Bangladesh'
                : 'আফজাল চ্যারিটেবল ট্রাস্ট — বাংলাদেশে নিবন্ধিত জনকল্যাণমূলক ও দাতব্য ট্রাস্ট'}
            </span>
            <span className="hidden md:inline text-emerald-400/60">|</span>
            <span className="hidden md:inline text-emerald-300">Govt. Reg. No: ACT/DH-1049/2017</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a href="tel:+8801700000000" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>+880 1711-234567 (Hotline)</span>
            </a>
            <div className="flex items-center gap-1 border-l border-emerald-800 pl-3">
              <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
              <button 
                onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
                className="hover:text-white transition-colors font-medium cursor-pointer"
                title="Toggle Language"
              >
                {lang === 'en' ? 'বাংলা' : 'English'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 flex items-center justify-center text-white shadow-md border border-emerald-700/40 group-hover:scale-105 transition-transform">
              <div className="flex flex-col items-center">
                <span className="font-serif-trust font-bold text-lg leading-none tracking-wider text-amber-300">ACT</span>
                <span className="text-[9px] tracking-widest text-emerald-200 uppercase font-sans mt-0.5">Trust</span>
              </div>
            </div>
            <div>
              <div className="font-serif-trust text-xl font-bold tracking-tight text-slate-900 leading-tight group-hover:text-emerald-900 transition-colors">
                Afzal Charitable Trust
              </div>
              <div className="text-xs text-stone-500 font-medium">
                {lang === 'en' ? 'Uplifting Communities Across Bangladesh' : 'মানবতার সেবায় নিবেদিত স্থায়ী প্রতিষ্ঠান'}
              </div>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors cursor-pointer rounded-lg ${
                  activeTab === item.id
                    ? 'text-emerald-900 bg-emerald-50/80 font-semibold'
                    : 'text-stone-700 hover:text-emerald-800 hover:bg-stone-50'
                }`}
              >
                {lang === 'en' ? item.labelEn : item.labelBn}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenMembership}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-900 bg-amber-100 hover:bg-amber-200 border border-amber-300/80 rounded-lg shadow-2xs transition-all cursor-pointer hover:shadow-xs active:scale-98"
            >
              <Award className="w-4 h-4 text-amber-700" />
              <span>{lang === 'en' ? 'Membership ৳250' : 'সদস্যপদ ২৫০ ৳'}</span>
            </button>

            <button
              onClick={onOpenDonate}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg shadow-sm transition-all cursor-pointer hover:shadow-md active:scale-98"
            >
              <Heart className="w-4 h-4 text-emerald-200 fill-emerald-200/40" />
              <span>{lang === 'en' ? 'Donate Now' : 'অনুদান দিন'}</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenMembership}
              className="px-2.5 py-1.5 text-xs font-bold text-emerald-950 bg-amber-200 rounded-md"
            >
              ৳250
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-slate-900 rounded-lg"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2.5 text-base font-medium rounded-lg ${
                activeTab === item.id
                  ? 'text-emerald-900 bg-emerald-50 font-bold'
                  : 'text-stone-700 hover:bg-stone-50'
              }`}
            >
              {lang === 'en' ? item.labelEn : item.labelBn}
            </button>
          ))}
          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenMembership(); }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-emerald-950 bg-amber-200 hover:bg-amber-300 rounded-lg"
            >
              <Award className="w-4 h-4 text-amber-800" />
              <span>{lang === 'en' ? 'Get Membership & Certificate (৳250)' : 'সদস্যপদ ও সার্টিফিকেট নিন (২৫০ টাকা)'}</span>
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDonate(); }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg"
            >
              <Heart className="w-4 h-4" />
              <span>{lang === 'en' ? 'Support & Donate' : 'দান করুন'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
