import React, { useRef } from 'react';
import { MemberRecord } from '../types';
import { 
  X, 
  Printer, 
  Download, 
  ShieldCheck, 
  Award, 
  Share2, 
  Check, 
  QrCode 
} from 'lucide-react';

interface CertificateModalProps {
  member: MemberRecord | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ member, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!member) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/?verify=${member.certificateNo}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-in fade-in">
      
      {/* Outer Wrapper */}
      <div className="relative max-w-4xl w-full my-auto">
        
        {/* Controls Bar on top */}
        <div className="flex items-center justify-between bg-stone-900 text-white px-5 py-3 rounded-t-2xl border-t border-x border-stone-700">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Official Verifiable Certificate &middot; {member.certificateNo}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg cursor-pointer transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied!' : 'Share'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold bg-amber-400 hover:bg-amber-300 text-stone-950 rounded-lg shadow-xs cursor-pointer transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Certificate Sheet */}
        <div 
          id="printable-certificate"
          className="bg-amber-50/40 p-6 sm:p-10 border-b border-x border-stone-300 rounded-b-2xl text-stone-900 relative shadow-2xl overflow-hidden"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #fffdfa 70%, #fef8ee 100%)'
          }}
        >
          {/* Ornate Gold Border Inner Frame */}
          <div className="border-4 border-double border-amber-700/60 p-6 sm:p-8 rounded-xl relative bg-white/70">
            
            {/* Corner Filigree Accents */}
            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-800" />
            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-800" />
            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-amber-800" />
            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-800" />

            {/* Header Emblem and Title */}
            <div className="text-center space-y-2 mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-emerald-900 to-emerald-950 text-amber-300 shadow-md border-2 border-amber-500 mb-1">
                <span className="font-serif-trust font-bold text-lg">ACT</span>
              </div>
              
              <h2 className="font-serif-trust text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-widest text-slate-900 uppercase">
                Afzal Charitable Trust
              </h2>
              
              <div className="text-[11px] sm:text-xs uppercase tracking-widest text-stone-600 font-semibold">
                Established under Trust Act of Bangladesh &middot; Govt Reg. No. ACT/DH-1049/2017
              </div>
              <div className="text-[10px] text-stone-500">
                Central Secretariat: House 14, Road 7, Dhanmondi R/A, Dhaka-1205, Bangladesh
              </div>

              <div className="pt-2 flex items-center justify-center gap-3">
                <span className="h-px w-16 bg-amber-700/40" />
                <span className="font-serif-trust text-xs uppercase tracking-widest font-bold text-amber-900">
                  Certificate of Associate Membership
                </span>
                <span className="h-px w-16 bg-amber-700/40" />
              </div>
            </div>

            {/* Certificate Body Text */}
            <div className="text-center max-w-2xl mx-auto space-y-4 my-8">
              <p className="text-xs uppercase tracking-wider text-stone-500">
                This is to certify that
              </p>

              <div className="font-serif-trust text-2xl sm:text-4xl font-bold text-emerald-950 tracking-wide border-b-2 border-dotted border-stone-400 pb-2 inline-block px-6">
                {member.fullName}
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal pt-2">
                has officially enrolled as a verified <strong className="text-stone-900">Associate Member</strong> of the{' '}
                <strong>Afzal Charitable Trust</strong>, having subscribed with an annual contribution of <strong>৳250 (Two Hundred Fifty Taka)</strong> in support of education, healthcare, and humanitarian welfare across Bangladesh.
              </p>

              {/* Member particulars table */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left bg-stone-50/90 border border-stone-200/80 rounded-xl p-3.5 text-xs mt-4">
                <div>
                  <span className="text-stone-500 block text-[10px]">Certificate No:</span>
                  <span className="font-mono font-bold text-slate-900">{member.certificateNo}</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[10px]">Blood Group:</span>
                  <span className="font-bold text-red-700">{member.bloodGroup}</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[10px]">Home District:</span>
                  <span className="font-semibold text-slate-800">{member.district}</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[10px]">Issued Date:</span>
                  <span className="font-semibold text-slate-800">{member.joinedDate}</span>
                </div>
              </div>
            </div>

            {/* Seal and Signatures */}
            <div className="mt-10 pt-6 border-t border-stone-300 grid grid-cols-3 items-end text-center">
              
              {/* Chairman Sign */}
              <div className="space-y-1">
                <div className="font-serif-trust italic text-base sm:text-lg text-slate-800 font-semibold tracking-wide">
                  Afzal Hossain
                </div>
                <div className="h-0.5 w-32 bg-stone-400 mx-auto" />
                <div className="text-[11px] font-bold text-slate-900">Prof. Dr. Afzal Hossain</div>
                <div className="text-[10px] text-stone-500">Chairman, Board of Trustees</div>
              </div>

              {/* Golden Embossed Seal & QR Center */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full border-4 border-double border-amber-600 bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-500 shadow-md flex items-center justify-center text-amber-950 p-1">
                  <div className="w-full h-full rounded-full border border-amber-700/60 flex flex-col items-center justify-center text-center">
                    <ShieldCheck className="w-5 h-5 text-emerald-900" />
                    <span className="text-[7px] uppercase font-black tracking-widest text-emerald-950">OFFICIAL SEAL</span>
                    <span className="text-[6px] font-bold text-emerald-900">VERIFIED</span>
                  </div>
                </div>
                <div className="text-[9px] font-mono text-stone-500 mt-1">
                  Auth ID: {member.certificateNo}
                </div>
              </div>

              {/* Secretary Sign */}
              <div className="space-y-1">
                <div className="font-serif-trust italic text-base sm:text-lg text-slate-800 font-semibold tracking-wide">
                  S. M. Farhan
                </div>
                <div className="h-0.5 w-32 bg-stone-400 mx-auto" />
                <div className="text-[11px] font-bold text-slate-900">Barrister S. M. Farhan</div>
                <div className="text-[10px] text-stone-500">Trustee &amp; General Secretary</div>
              </div>

            </div>

            {/* Small Footer Notice */}
            <div className="mt-8 text-center text-[10px] text-stone-500">
              This document is digitally verifiable via the Trust registry portal. Membership is valid through {member.expiryDate}.
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
