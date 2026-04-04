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
import HowItWorks from "./components/HowItWorks";
import LoanModal from "./components/LoanModal";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar onApplyNow={() => setModalOpen(true)} />
      <main>
        <Hero onApplyNow={() => setModalOpen(true)} />
        <Stats />
        <Features />
        <EasyLoans onApplyNow={() => setModalOpen(true)} />
        <HowItWorks />
        <Eligibility />
        <CreditScore />
        <AppDownload />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <LoanModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <Toaster />
    </div>
  );
}
