import React, { useState } from 'react';
import { 
  X, 
  Heart, 
  ShieldCheck, 
  CheckCircle2, 
  Download, 
  Printer, 
  CreditCard,
  Building
} from 'lucide-react';
import { DonationRecord } from '../types';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCause?: string;
  lang: 'en' | 'bn';
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  preselectedCause,
  lang
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [donorName, setDonorName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [cause, setCause] = useState(preselectedCause || 'General Public Utility & Emergency Relief');
  const [method, setMethod] = useState<'bKash' | 'Nagad' | 'Rocket' | 'Bank Transfer'>('bKash');
  const [receipt, setReceipt] = useState<DonationRecord | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const presetAmounts = [500, 1000, 2500, 5000, 10000];

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = customAmount ? parseFloat(customAmount) : amount;
    if (!donorName || !phone || !finalAmount || finalAmount <= 0) return;

    setIsProcessing(true);
    setTimeout(() => {
      const today = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      const receiptNo = 'ACT-REC-' + Math.floor(100000 + Math.random() * 900000);
      const trx = 'TX' + Math.random().toString(36).substring(2, 8).toUpperCase();

      const rec: DonationRecord = {
        donorName: donorName.trim(),
        email: email.trim() || 'donor@charity.org',
        phone: phone.trim(),
        amount: finalAmount,
        cause: cause,
        paymentMethod: method,
        transactionId: trx,
        date: today,
        receiptNumber: receiptNo
      };

      setReceipt(rec);
      setIsProcessing(false);
      setStep('success');
    }, 1200);
  };

  const handleDownloadReceipt = () => {
    if (!receipt) return;
    const text = `AFZAL CHARITABLE TRUST\nOFFICIAL DONATION MONEY RECEIPT\nReceipt No: ${receipt.receiptNumber}\nDate: ${receipt.date}\n\nDonor Name: ${receipt.donorName}\nContact Phone: ${receipt.phone}\nDesignated Cause: ${receipt.cause}\nAmount Donated: BDT ৳${receipt.amount.toLocaleString()}\nPayment Channel: ${receipt.paymentMethod} (TrxID: ${receipt.transactionId})\n\nAfzal Charitable Trust expresses heartfelt gratitude for your compassionate contribution towards humanitarian welfare in Bangladesh.\n100% Policy: Zero administrative deductions from your donation.\n\nAuthorised by Trust Finance Directorate, Dhaka, Bangladesh.`;
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${receipt.receiptNumber}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Heart className="w-5 h-5 text-emerald-800 fill-emerald-800/20" />
              </div>
              <div>
                <h3 className="font-serif-trust text-xl sm:text-2xl font-bold text-slate-900">
                  {lang === 'en' ? 'Make a Humanitarian Donation' : 'মানবতার সেবায় অনুদান দিন'}
                </h3>
                <p className="text-xs text-stone-500">
                  100% Transparency &middot; 0% Administrative Overhead
                </p>
              </div>
            </div>

            <form onSubmit={handleDonate} className="space-y-4 mt-6">
              {/* Cause selection */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Select Cause / Focus Sector:
                </label>
                <select
                  value={cause}
                  onChange={(e) => setCause(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-emerald-700 font-medium"
                >
                  <option value="General Public Utility & Emergency Relief">General Public Utility &amp; Emergency Relief</option>
                  <option value="Education, Research and Scholarships">Education, Research and Scholarships</option>
                  <option value="Medical and Healthcare Assistance">Medical and Healthcare Assistance</option>
                  <option value="Poverty Relief & Food Baskets">Poverty Relief &amp; Food Baskets</option>
                  <option value="Old Age Home and Orphanage Initiatives">Old Age Home and Orphanage Care</option>
                  <option value="Third gender or Transgender Initiatives">Transgender &amp; Hijra Vocational Academy</option>
                  <option value="Environmental Awareness & Tree Plantation">Environmental Awareness &amp; Tree Plantation</option>
                  <option value="Winter Blankets for Northern Bangladesh">Winter Blankets for Northern Bangladesh</option>
                </select>
              </div>

              {/* Amount selection */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Select Donation Amount (BDT ৳):
                </label>
                <div className="grid grid-cols-5 gap-2 mb-2">
                  {presetAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => { setAmount(amt); setCustomAmount(''); }}
                      className={`py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                        amount === amt && !customAmount
                          ? 'border-emerald-700 bg-emerald-800 text-white shadow-2xs'
                          : 'border-stone-200 bg-stone-50 text-stone-700 hover:border-stone-300'
                      }`}
                    >
                      ৳{amt.toLocaleString()}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  placeholder="Or enter custom amount in Taka (৳)..."
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-emerald-700"
                />
              </div>

              {/* Donor particulars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="Your Name / Anonymous"
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-emerald-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="01XXXXXXXXX"
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-emerald-700"
                  />
                </div>
              </div>

              {/* Payment Channel */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Payment Channel:
                </label>
                <div className="grid grid-cols-4 gap-2 text-xs">
                  {(['bKash', 'Nagad', 'Rocket', 'Bank Transfer'] as const).map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMethod(m)}
                      className={`p-2 rounded-lg border text-center font-medium cursor-pointer transition-colors ${
                        method === m
                          ? 'border-emerald-800 bg-emerald-50 text-emerald-950 font-bold'
                          : 'border-stone-200 bg-white text-stone-600'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-[11px] text-stone-600">
                Official Trust Account Number: <strong className="font-mono text-emerald-900">01711-234567</strong> (bKash/Nagad/Rocket Merchant).
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Confirming Contribution...</span>
                    </>
                  ) : (
                    <>
                      <Heart className="w-4 h-4 text-rose-200" />
                      <span>
                        Complete Donation of ৳{(customAmount ? parseFloat(customAmount) : amount).toLocaleString()}
                      </span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Success Receipt view */
          receipt && (
            <div className="space-y-5 text-center animate-in zoom-in-95">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-emerald-800">
                  Donation Received
                </span>
                <h3 className="font-serif-trust text-2xl font-bold text-slate-900 mt-1">
                  Thank You, {receipt.donorName}!
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Your generous contribution of <strong>৳{receipt.amount.toLocaleString()}</strong> has been securely transferred to the {receipt.cause}.
                </p>
              </div>

              <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-stone-200 pb-1.5">
                  <span className="text-stone-500">Receipt Number:</span>
                  <span className="font-mono font-bold text-slate-900">{receipt.receiptNumber}</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-1.5">
                  <span className="text-stone-500">Transaction ID:</span>
                  <span className="font-mono text-slate-800">{receipt.transactionId}</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-1.5">
                  <span className="text-stone-500">Date:</span>
                  <span className="text-slate-800 font-medium">{receipt.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Payment Gateway:</span>
                  <span className="text-slate-800 font-medium">{receipt.paymentMethod}</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleDownloadReceipt}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-emerald-900 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-xl cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-amber-800" />
                  <span>Download Money Receipt</span>
                </button>
                <button
                  onClick={() => { setStep('form'); onClose(); }}
                  className="px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-100 rounded-xl cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
