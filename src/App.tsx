/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MissionVision } from './components/MissionVision';
import { FocusAreasSection } from './components/FocusAreasSection';
import { NoticeBoardSection } from './components/NoticeBoardSection';
import { CallToActionBanner } from './components/CallToActionBanner';
import { MembershipSection } from './components/MembershipSection';
import { VolunteerSection } from './components/VolunteerSection';
import { TrusteeGovernance } from './components/TrusteeGovernance';
import { Footer } from './components/Footer';
import { CertificateModal } from './components/CertificateModal';
import { DonationModal } from './components/DonationModal';
import { MemberRecord } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [lang, setLang] = useState<'en' | 'bn'>('en');
  const [certificateMember, setCertificateMember] = useState<MemberRecord | null>(null);
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [donateCause, setDonateCause] = useState<string | undefined>(undefined);
  const [volunteerWing, setVolunteerWing] = useState<string | null>(null);

  // Check URL query parameters for certificate verification lookup (e.g. ?verify=ACT-2026-M1042)
  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const verifyId = urlParams.get('verify');
      if (verifyId) {
        const stored = localStorage.getItem('act_members_registry');
        if (stored) {
          const parsed: MemberRecord[] = JSON.parse(stored);
          const found = parsed.find(
            (m) => m.certificateNo.toLowerCase() === verifyId.toLowerCase()
          );
          if (found) {
            setCertificateMember(found);
          }
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const handleOpenMembership = () => {
    const el = document.getElementById('membership');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveTab('membership');
  };

  const handleOpenDonate = (cause?: string) => {
    setDonateCause(cause);
    setIsDonateOpen(true);
  };

  const handleGoToNotices = () => {
    const el = document.getElementById('notice-board');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveTab('notice-board');
  };

  const handleGoToFocusAreas = () => {
    const el = document.getElementById('focus-areas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveTab('focus-areas');
  };

  const handleVolunteerForWing = (wingTitle: string) => {
    setVolunteerWing(wingTitle);
    setActiveTab('volunteer');
    const el = document.getElementById('volunteer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-slate-800">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenMembership={handleOpenMembership}
        onOpenDonate={() => handleOpenDonate()}
        lang={lang}
        setLang={setLang}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with key metrics & fast triggers */}
        <Hero
          onOpenMembership={handleOpenMembership}
          onOpenDonate={() => handleOpenDonate()}
          onGoToNotices={handleGoToNotices}
          onGoToFocusAreas={handleGoToFocusAreas}
          lang={lang}
        />

        {/* Mission and Vision Statement Showcase */}
        <MissionVision lang={lang} />

        {/* 16 Focus Wings detailed catalog */}
        <FocusAreasSection
          onOpenDonate={handleOpenDonate}
          onOpenMembership={handleOpenMembership}
          onVolunteerForWing={handleVolunteerForWing}
          lang={lang}
        />

        {/* Notice Board from Trust */}
        <NoticeBoardSection lang={lang} />

        {/* Visual Call To Action Photography Showcase */}
        <CallToActionBanner
          onOpenMembership={handleOpenMembership}
          onOpenDonate={handleOpenDonate}
          onGoToVolunteer={() => {
            const el = document.getElementById('volunteer');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            setActiveTab('volunteer');
          }}
          lang={lang}
        />

        {/* 250 Taka Membership Subscription, Certificate Issuance & Verification */}
        <MembershipSection
          onOpenCertificateModal={(member) => setCertificateMember(member)}
          lang={lang}
        />

        {/* Volunteer Signup & Mobilization Corps */}
        <VolunteerSection
          preselectedArea={volunteerWing}
          lang={lang}
        />

        {/* Board of Trustees & Governance Transparency */}
        <TrusteeGovernance lang={lang} />
      </main>

      {/* Trust Footer */}
      <Footer
        onOpenMembership={handleOpenMembership}
        onOpenDonate={() => handleOpenDonate()}
        lang={lang}
      />

      {/* Printable Verifiable Digital Certificate Modal */}
      {certificateMember && (
        <CertificateModal
          member={certificateMember}
          onClose={() => setCertificateMember(null)}
        />
      )}

      {/* Donation Modal with instant receipt generation */}
      <DonationModal
        isOpen={isDonateOpen}
        onClose={() => setIsDonateOpen(false)}
        preselectedCause={donateCause}
        lang={lang}
      />
    </div>
  );
}
