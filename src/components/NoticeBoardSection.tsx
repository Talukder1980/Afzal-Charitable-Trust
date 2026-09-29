import React, { useState } from 'react';
import { INITIAL_NOTICES } from '../data/notices';
import { NoticeItem, NoticeCategory } from '../types';
import { 
  Bell, 
  FileText, 
  Calendar, 
  Search, 
  Pin, 
  Download, 
  ExternalLink, 
  X, 
  ShieldCheck, 
  Filter, 
  Send,
  AlertCircle,
  Building
} from 'lucide-react';

interface NoticeBoardSectionProps {
  lang: 'en' | 'bn';
}

export const NoticeBoardSection: React.FC<NoticeBoardSectionProps> = ({ lang }) => {
  const [notices, setNotices] = useState<NoticeItem[]>(INITIAL_NOTICES);
  const [selectedCategory, setSelectedCategory] = useState<NoticeCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNoticeModal, setActiveNoticeModal] = useState<NoticeItem | null>(null);
  
  // Public petition/inquiry modal
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const categories: NoticeCategory[] = [
    'All',
    'Official Notice',
    'Scholarship & Grants',
    'Emergency Relief',
    'Health Camps',
    'Tender & Procurement',
    'Annual General Meeting'
  ];

  const filteredNotices = notices.filter((n) => {
    const matchesCategory = selectedCategory === 'All' || n.category === selectedCategory;
    const matchesSearch = 
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.noticeNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.titleBn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownloadNotice = (notice: NoticeItem) => {
    const content = `AFZAL CHARITABLE TRUST\nNotice Memo: ${notice.noticeNumber}\nDate: ${notice.publishedDate}\nIssued By: ${notice.issuedBy}\n\nTitle: ${notice.title}\n\n${notice.content.join('\n\n')}\n\nOfficial Circular authenticated by Trust Secretariat, Dhaka, Bangladesh.`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${notice.noticeNumber.replace(/\//g, '_')}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setInquiryModalOpen(false);
      setInquiryForm({ name: '', phone: '', email: '', subject: '', message: '' });
    }, 2500);
  };

  return (
    <section id="notice-board" className="py-20 lg:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
              <Bell className="w-4 h-4 text-emerald-600" />
              <span>{lang === 'en' ? 'Official Public Disclosures' : 'ট্রাস্টের দাপ্তরিক নোটিশ ও বিজ্ঞপ্তি'}</span>
            </div>
            <h2 className="font-serif-trust text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              {lang === 'en' ? 'Trust Notice Board' : 'অফিসিয়াল নোটিশ বোর্ড'}
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base max-w-2xl">
              Authentic circulars, scholarship admissions, tender notices, emergency relief schedules, and annual board resolutions issued directly by the Secretariat of Afzal Charitable Trust.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setInquiryModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-emerald-900 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-xl transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Inquiry to Trustees</span>
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap items-center gap-1.5 w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-900 text-white font-semibold shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search memo number, title, relief..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs bg-white border border-stone-200 rounded-lg text-slate-800 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700"
            />
          </div>
        </div>

        {/* Notice List Table / Cards */}
        <div className="space-y-4">
          {filteredNotices.map((notice) => (
            <div
              key={notice.id}
              className={`p-5 sm:p-6 rounded-2xl border transition-all duration-200 hover:shadow-md ${
                notice.isPinned
                  ? 'bg-gradient-to-r from-amber-50/70 to-emerald-50/40 border-amber-300/80 shadow-2xs'
                  : 'bg-white border-stone-200 hover:border-emerald-300'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                
                {/* Left details */}
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5 text-xs text-stone-500">
                    {notice.isPinned && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-amber-200/80 px-2 py-0.5 rounded-md">
                        <Pin className="w-3 h-3 fill-amber-800" /> Pinned Official Circular
                      </span>
                    )}
                    <span className="font-mono font-medium text-emerald-900 bg-emerald-100/60 px-2 py-0.5 rounded-md">
                      {notice.noticeNumber}
                    </span>
                    <span>&middot;</span>
                    <span className="text-stone-600 font-medium">{notice.category}</span>
                    <span>&middot;</span>
                    <span className="flex items-center gap-1 text-stone-500">
                      <Calendar className="w-3.5 h-3.5" />
                      {notice.publishedDate}
                    </span>
                  </div>

                  <h3 
                    onClick={() => setActiveNoticeModal(notice)}
                    className="font-serif-trust text-lg sm:text-xl font-bold text-slate-900 hover:text-emerald-800 transition-colors cursor-pointer"
                  >
                    {notice.title}
                  </h3>

                  <p className="text-xs text-stone-500 italic font-bangla">
                    {notice.titleBn}
                  </p>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-4xl">
                    {notice.summary}
                  </p>

                  <div className="text-[11px] text-stone-500 font-medium pt-1">
                    Issuing Authority: <span className="text-slate-800 font-semibold">{notice.issuedBy}</span>
                  </div>
                </div>

                {/* Right Action buttons */}
                <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0 pt-2 sm:pt-0">
                  <button
                    onClick={() => setActiveNoticeModal(notice)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Read Circular</span>
                  </button>

                  <button
                    onClick={() => handleDownloadNotice(notice)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
                    title="Download Official Notice Document"
                  >
                    <Download className="w-3.5 h-3.5 text-stone-500" />
                    <span className="hidden sm:inline">Save Memo</span>
                  </button>
                </div>

              </div>
            </div>
          ))}

          {filteredNotices.length === 0 && (
            <div className="text-center py-16 bg-stone-50 rounded-2xl border border-stone-200">
              <AlertCircle className="w-8 h-8 text-stone-400 mx-auto mb-2" />
              <p className="text-sm font-semibold text-slate-800">No notices found</p>
              <p className="text-xs text-stone-500 mt-1">Try another category or clear your search query.</p>
            </div>
          )}
        </div>

        {/* Footer info strip */}
        <div className="mt-8 p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>All official notices are stamped and approved by the Afzal Charitable Trust Board of Trustees.</span>
          </div>
          <span className="font-mono text-stone-400">Notice Board Archive · 2017–2026</span>
        </div>

      </div>

      {/* Notice Detail Circular Modal */}
      {activeNoticeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative max-h-[92vh] overflow-y-auto">
            <button
              onClick={() => setActiveNoticeModal(null)}
              className="absolute top-5 right-5 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Official Circular Header Style */}
            <div className="border-b-2 border-emerald-900 pb-5 mb-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-lg bg-emerald-900 text-amber-300 font-serif-trust flex items-center justify-center font-bold text-xs">
                  ACT
                </div>
                <h3 className="font-serif-trust font-bold text-lg text-slate-900 uppercase tracking-wider">
                  Afzal Charitable Trust
                </h3>
              </div>
              <p className="text-xs text-stone-500">
                Central Secretariat · House 14, Road 7, Dhanmondi R/A, Dhaka-1205, Bangladesh
              </p>
              <p className="text-[11px] text-emerald-800 font-mono font-medium mt-0.5">
                Govt. Trust Registration No. ACT/DH-1049/2017
              </p>
            </div>

            {/* Memo & Date Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-stone-50 p-3.5 rounded-xl border border-stone-200 text-xs mb-6">
              <div>
                <span className="text-stone-500">Memo No: </span>
                <span className="font-mono font-bold text-slate-800">{activeNoticeModal.noticeNumber}</span>
              </div>
              <div>
                <span className="text-stone-500">Publication Date: </span>
                <span className="font-semibold text-slate-800">{activeNoticeModal.publishedDate}</span>
              </div>
              <div>
                <span className="text-stone-500">Category: </span>
                <span className="font-semibold text-emerald-800">{activeNoticeModal.category}</span>
              </div>
            </div>

            {/* Notice Title */}
            <h4 className="font-serif-trust text-xl sm:text-2xl font-bold text-slate-900 mb-2 leading-snug">
              {activeNoticeModal.title}
            </h4>
            <p className="text-sm text-stone-500 italic font-bangla mb-6 pb-4 border-b border-stone-200">
              {activeNoticeModal.titleBn}
            </p>

            {/* Notice Paragraphs */}
            <div className="space-y-3.5 text-sm text-stone-700 leading-relaxed">
              {activeNoticeModal.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Formal Circular Signature Block */}
            <div className="mt-10 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="inline-block p-3 rounded-xl bg-emerald-50/80 border border-emerald-200/80 text-emerald-950 text-xs">
                  <div className="font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span>Digitally Authenticated Circular</span>
                  </div>
                  <div className="text-[11px] text-stone-500 mt-0.5">
                    Authorized Signatory: {activeNoticeModal.issuedBy}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleDownloadNotice(activeNoticeModal)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-emerald-900 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-xl transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-amber-800" />
                  <span>Download Official Copy</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Citizen Petition / Inquiry to Trustees Modal */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative">
            <button
              onClick={() => setInquiryModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 mb-2">
              <Building className="w-5 h-5 text-emerald-800" />
              <h3 className="font-serif-trust text-xl font-bold text-slate-900">
                Submit Public Inquiry / Letter
              </h3>
            </div>
            <p className="text-xs text-stone-600 mb-6">
              Communicate directly with the Secretariat of Afzal Charitable Trust regarding notices, project proposals, or humanitarian support requests.
            </p>

            {inquirySent ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <ShieldCheck className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-emerald-900 text-base">Inquiry Submitted Successfully</h4>
                <p className="text-xs text-stone-600">
                  Your reference ticket #ACT-INQ-{Math.floor(1000 + Math.random() * 9000)} has been logged. Our Secretariat desk will respond within 48 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={inquiryForm.name}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                    placeholder="e.g. Mohammad Rafiqul Islam"
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Contact Phone *</label>
                    <input
                      type="tel"
                      required
                      value={inquiryForm.phone}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                      placeholder="01XXXXXXXXX"
                      className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Subject / Notice Reference *</label>
                  <input
                    type="text"
                    required
                    value={inquiryForm.subject}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, subject: e.target.value })}
                    placeholder="e.g. Scholarship query / Medical camp request"
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Message Details *</label>
                  <textarea
                    rows={4}
                    required
                    value={inquiryForm.message}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                    placeholder="Provide details regarding your inquiry..."
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2.5">
                  <button
                    type="button"
                    onClick={() => setInquiryModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-100 rounded-lg cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg shadow-xs cursor-pointer"
                  >
                    Submit to Secretariat
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
