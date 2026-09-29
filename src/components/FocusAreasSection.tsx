import React, { useState } from 'react';
import { FOCUS_AREAS } from '../data/focusAreas';
import { FocusArea } from '../types';
import { 
  GraduationCap, 
  Stethoscope, 
  HandHeart, 
  ShieldCheck, 
  Home, 
  Building2, 
  Landmark, 
  Newspaper, 
  Leaf, 
  Laptop, 
  Users, 
  Globe, 
  HeartHandshake, 
  ShieldAlert, 
  Compass, 
  Briefcase,
  Search,
  ArrowRight,
  CheckCircle2,
  X,
  Layers,
  Heart
} from 'lucide-react';

interface FocusAreasSectionProps {
  onOpenDonate: (cause?: string) => void;
  onOpenMembership: () => void;
  onVolunteerForWing: (wingTitle: string) => void;
  lang: 'en' | 'bn';
}

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  Stethoscope: <Stethoscope className="w-6 h-6" />,
  HandHeart: <HandHeart className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Home: <Home className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  Landmark: <Landmark className="w-6 h-6" />,
  Newspaper: <Newspaper className="w-6 h-6" />,
  Leaf: <Leaf className="w-6 h-6" />,
  Laptop: <Laptop className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6" />,
  Compass: <Compass className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />
};

export const FocusAreasSection: React.FC<FocusAreasSectionProps> = ({
  onOpenDonate,
  onOpenMembership,
  onVolunteerForWing,
  lang
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalArea, setActiveModalArea] = useState<FocusArea | null>(null);

  const categories = ['All', 'Human Welfare', 'Health & Relief', 'Empowerment & Inclusion', 'Future & Sustainability'];

  const filteredAreas = FOCUS_AREAS.filter((area) => {
    const matchesCategory = selectedCategory === 'All' || area.category === selectedCategory;
    const matchesSearch = 
      area.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      area.titleBn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      area.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      area.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="focus-areas" className="py-20 lg:py-28 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
              <Layers className="w-4 h-4 text-emerald-600" />
              <span>{lang === 'en' ? 'Core Programmatic Spheres' : 'কার্যক্রমের আওতাভুক্ত ক্ষেত্রসমূহ'}</span>
            </div>
            <h2 className="font-serif-trust text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              {lang === 'en' ? 'Our 16 Humanitarian Wings' : 'আমাদের ১৬টি সেবামূলক শাখা'}
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base max-w-2xl">
              From foundational education and free healthcare to digital security, transgender rights, citizen journalism, and senior care — explore how the Trust creates holistic grassroots change.
            </p>
          </div>

          <div className="text-sm font-semibold text-emerald-900 bg-white border border-stone-200 px-4 py-2 rounded-xl shadow-2xs self-start md:self-auto">
            <span>Showing {filteredAreas.length} of 16 Strategic Sectors</span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-900 text-white shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search wing or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-lg text-slate-800 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700"
            />
          </div>
        </div>

        {/* Grid of 16 Focus Wings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAreas.map((area) => (
            <div
              key={area.id}
              className="group bg-white rounded-2xl border border-stone-200/90 p-6 flex flex-col justify-between hover:shadow-lg hover:border-emerald-600/40 transition-all duration-200"
            >
              <div>
                {/* Header with Icon and Category */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-900 group-hover:text-amber-300 transition-colors shadow-2xs">
                    {iconMap[area.icon] || <HandHeart className="w-6 h-6" />}
                  </div>
                  <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                    {area.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-slate-900 text-lg leading-snug group-hover:text-emerald-900 transition-colors">
                  {lang === 'en' ? area.title : area.titleBn}
                </h3>
                <p className="text-xs text-stone-500 italic mt-1 font-bangla">
                  {area.titleBn}
                </p>

                {/* Tagline & description */}
                <p className="text-xs font-medium text-emerald-800 mt-2 line-clamp-1">
                  {area.tagline}
                </p>
                <p className="text-xs text-stone-600 mt-2 line-clamp-3 leading-relaxed">
                  {area.description}
                </p>

                {/* Key feature list preview */}
                <div className="mt-4 pt-3 border-t border-stone-100 space-y-1.5">
                  {area.keyInitiatives.slice(0, 2).map((initiative, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-stone-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{initiative}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Impact Metric & Modal Trigger */}
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-semibold text-stone-400 block">
                    {area.impactLabel}
                  </span>
                  <span className="font-serif-trust font-bold text-base text-emerald-900">
                    {area.impactMetric}
                  </span>
                </div>

                <button
                  onClick={() => setActiveModalArea(area)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* If no match */}
        {filteredAreas.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200">
            <Search className="w-8 h-8 text-stone-400 mx-auto mb-3" />
            <p className="text-sm font-semibold text-slate-800">No matching focus wing found</p>
            <p className="text-xs text-stone-500 mt-1">Try clearing your search query or choosing another category.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-emerald-900 bg-emerald-50 rounded-lg hover:bg-emerald-100"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Focus Area Full Detail Modal */}
      {activeModalArea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalArea(null)}
              className="absolute top-5 right-5 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-900 text-amber-300 flex items-center justify-center shadow-xs">
                {iconMap[activeModalArea.icon] || <HandHeart className="w-6 h-6" />}
              </div>
              <div>
                <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider block">
                  {activeModalArea.category}
                </span>
                <h3 className="font-serif-trust text-xl sm:text-2xl font-bold text-slate-900">
                  {activeModalArea.title}
                </h3>
                <p className="text-xs text-stone-500 font-bangla">{activeModalArea.titleBn}</p>
              </div>
            </div>

            <div className="p-3.5 bg-emerald-50/70 border border-emerald-200/60 rounded-xl mb-5">
              <p className="text-xs sm:text-sm text-emerald-950 font-medium">
                {activeModalArea.tagline}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-1.5">
                  Strategic Scope &amp; Purpose
                </h4>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {activeModalArea.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                  Active Flagship Initiatives
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {activeModalArea.keyInitiatives.map((init, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{init}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-stone-900 text-white">
                <div>
                  <span className="text-[11px] text-stone-400 block uppercase font-medium">Recorded Cumulative Impact</span>
                  <span className="text-xl font-serif-trust font-bold text-amber-300">{activeModalArea.impactMetric}</span>
                  <span className="text-xs text-stone-300 ml-1.5">{activeModalArea.impactLabel}</span>
                </div>
                <div className="text-right text-xs text-emerald-400">
                  <span>Trust Directorate Certified</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-stone-200 flex flex-wrap items-center justify-end gap-3">
              <button
                onClick={() => {
                  const areaTitle = activeModalArea.title;
                  setActiveModalArea(null);
                  onVolunteerForWing(areaTitle);
                }}
                className="px-4 py-2.5 text-xs font-bold text-emerald-950 bg-amber-200 hover:bg-amber-300 rounded-xl cursor-pointer transition-colors"
              >
                Volunteer for this Wing
              </button>
              <button
                onClick={() => {
                  const areaTitle = activeModalArea.title;
                  setActiveModalArea(null);
                  onOpenDonate(areaTitle);
                }}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl shadow-xs cursor-pointer"
              >
                <Heart className="w-4 h-4" />
                <span>Support with Donation</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
