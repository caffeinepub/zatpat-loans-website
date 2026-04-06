import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";
import AppDownload from "./components/AppDownload";
import BadCIBILBanner from "./components/BadCIBILBanner";
import CreditScore from "./components/CreditScore";
import EMICalculator from "./components/EMICalculator";
import EasyLoans from "./components/EasyLoans";
import Eligibility from "./components/Eligibility";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HeroBand from "./components/HeroBand";
import HeroTrustStrip from "./components/HeroTrustStrip";
import HowItWorks from "./components/HowItWorks";
import LoanModal from "./components/LoanModal";
import Navbar from "./components/Navbar";
import PremiumHeroSection from "./components/PremiumHeroSection";
import SocialProofTicker from "./components/SocialProofTicker";
import StickyCTA from "./components/StickyCTA";
import Testimonials from "./components/Testimonials";
import TrustBanner from "./components/TrustBanner";
import TrustBar from "./components/TrustBar";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar onApplyNow={openModal} />

      {/* Social proof ticker — immediately below Navbar */}
      <div className="pt-[84px]">
        <SocialProofTicker />
      </div>

      <main>
        {/* 1. Hero — first impression, emotional hook */}
        <Hero onApplyNow={openModal} />

        {/* 1b. Hero Trust Strip — RBI, ISO, CIBIL, SSL, Rating, Borrowers — directly below hero */}
        <HeroTrustStrip />

        {/* Gradient bridge: dark → light */}
        <div className="h-10 bg-gradient-to-b from-[#0F172A] to-[#F8FAFC]" />

        {/* 2. HeroBand — trust signals, stats, and process preview */}
        <HeroBand />

        {/* 3. TrustBar — compliance / partner logos */}
        <TrustBar />

        {/* 4. Features — immediate value proposition after hero */}
        <Features onApplyNow={openModal} />

        {/* 5. BadCIBILBanner — unmissable USP: low CIBIL still approved */}
        <BadCIBILBanner onApplyNow={openModal} />

        {/* 6. HowItWorks — process clarity, how easy it is */}
        <HowItWorks onApplyNow={openModal} />

        {/* 6b. PremiumHeroSection — tri-color headline, Indian personas, glassmorphic badges, stat cards */}
        <PremiumHeroSection />

        {/* 7. EasyLoans — inclusivity, loan growth gamification */}
        <EasyLoans onApplyNow={openModal} />

        {/* 8. Eligibility — who qualifies */}
        <Eligibility />

        {/* 9. EMI Calculator — interactive engagement */}
        <EMICalculator openModal={openModal} />

        {/* 10. CreditScore — long-term benefit, retention hook */}
        <CreditScore onApplyNow={openModal} />

        {/* 11. Testimonials — social proof before trust commitment */}
        <Testimonials onApplyNow={openModal} />

        {/* 12. TrustBanner — emotional trust anchor */}
        <TrustBanner />

        {/* Gradient bridge: dark → light */}
        <div className="h-10 bg-gradient-to-b from-[#0F172A] to-[#F8FAFC]" />

        {/* 13. AppDownload — conversion CTA */}
        <AppDownload />

        {/* 14. FAQ — objection handling */}
        <FAQ onApplyNow={openModal} />
      </main>

      <Footer onApplyNow={openModal} />

      <LoanModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <Toaster />

      {/* Sticky CTA — fixed overlay */}
      <StickyCTA openModal={openModal} />
    </div>
  );
}
