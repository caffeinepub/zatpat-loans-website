import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface StickyCTAProps {
  openModal: () => void;
}

export default function StickyCTA({ openModal }: StickyCTAProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const wasDismissed =
      sessionStorage.getItem("sticky-cta-dismissed") === "true";
    if (wasDismissed) {
      setDismissed(true);
      return;
    }

    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    const t = setTimeout(() => setMounted(true), 100);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(t);
    };
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("sticky-cta-dismissed", "true");
  };

  if (dismissed || !mounted) return null;

  return (
    <>
      <style>{`
        @keyframes sticky-slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        .sticky-cta-bar {
          animation: sticky-slide-up 0.3s ease forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .sticky-cta-bar { animation: none; }
        }
      `}</style>

      <div
        data-ocid="sticky_cta.section"
        className="sticky-cta-bar fixed bottom-0 left-0 right-0 z-50"
        style={{
          background: "#0F172A",
          borderTop: "2px solid rgba(37,99,235,0.6)",
          boxShadow: "0 -4px 24px rgba(37,99,235,0.2)",
          display: visible ? "block" : "none",
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-2.5 sm:py-3.5">
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Left text — truncated on mobile */}
            <p
              className="text-xs sm:text-sm font-semibold flex-1 min-w-0"
              style={{ color: "rgba(241,245,249,0.95)" }}
            >
              🚀{" "}
              <span className="text-white font-bold hidden sm:inline">
                Get up to ₹5,000 in 5 Minutes
              </span>
              <span className="text-white font-bold sm:hidden">
                Get ₹5,000 in 5 Min
              </span>
              <span className="hidden sm:inline"> — 100% Online</span>
            </p>

            {/* CTA */}
            <button
              type="button"
              data-ocid="sticky_cta.primary_button"
              onClick={openModal}
              className="flex-shrink-0 flex items-center gap-1.5 rounded-full px-4 sm:px-6 py-2 font-bold text-white text-xs sm:text-sm transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #FF6A00, #FF8C2E)",
                boxShadow: "0 4px 16px rgba(255,106,0,0.4)",
                minHeight: "40px",
                whiteSpace: "nowrap",
              }}
            >
              Apply Now →
            </button>

            {/* Dismiss */}
            <button
              type="button"
              data-ocid="sticky_cta.close_button"
              onClick={handleDismiss}
              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
              style={{ color: "rgba(148,163,184,0.7)", minWidth: "32px" }}
              aria-label="Dismiss"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
