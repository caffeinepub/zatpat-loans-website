import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";
import AppDownload from "./components/AppDownload";
import CreditScore from "./components/CreditScore";
import EasyLoans from "./components/EasyLoans";
import Eligibility from "./components/Eligibility";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HeroBand from "./components/HeroBand";
import HowItWorks from "./components/HowItWorks";
import LoanModal from "./components/LoanModal";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import TrustBanner from "./components/TrustBanner";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar onApplyNow={() => setModalOpen(true)} />
      <main>
        {/* 1. Hero — first impression, emotional hook */}
        <Hero onApplyNow={() => setModalOpen(true)} />

        {/* 2. HeroBand — trust signals, stats, and process preview */}
        <HeroBand />

        {/* 3. Features — immediate value proposition after hero */}
        <Features />

        {/* 4. HowItWorks — process clarity, how easy it is */}
        <HowItWorks />

        {/* 5. EasyLoans — inclusivity, loan growth gamification */}
        <EasyLoans onApplyNow={() => setModalOpen(true)} />

        {/* 6. Eligibility — who qualifies */}
        <Eligibility />

        {/* 7. CreditScore — long-term benefit, retention hook */}
        <CreditScore />

        {/* 8. Testimonials — social proof before trust commitment */}
        <Testimonials />

        {/* 9. TrustBanner — emotional trust anchor */}
        <TrustBanner />

        {/* 10. AppDownload — conversion CTA */}
        <AppDownload />

        {/* 11. FAQ — objection handling */}
        <FAQ />
      </main>
      <Footer />
      <LoanModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <Toaster />
    </div>
  );
}
