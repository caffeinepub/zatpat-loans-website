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
    // Check sessionStorage for dismissed state
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
    // Set mounted after brief delay to allow CSS transitions
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
          boxShadow: "0 -4px 32px rgba(37,99,235,0.2)",
          display: visible ? "block" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 relative">
            {/* Left text */}
            <p
              className="text-sm sm:text-base font-semibold text-center sm:text-left pr-6"
              style={{ color: "rgba(241,245,249,0.95)" }}
            >
              🚀{" "}
              <span className="text-white font-bold">
                Get up to ₹5 Lakhs in 5 Minutes
              </span>{" "}
              — 100% Online
            </p>

            {/* Right CTA */}
            <button
              type="button"
              data-ocid="sticky_cta.primary_button"
              onClick={openModal}
              className="flex-shrink-0 flex items-center gap-2 rounded-full px-6 py-2.5 font-bold text-white text-sm transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #FF6A00, #FF8C2E)",
                boxShadow: "0 4px 16px rgba(255,106,0,0.4)",
              }}
            >
              Apply Now →
            </button>

            {/* Dismiss button */}
            <button
              type="button"
              data-ocid="sticky_cta.close_button"
              onClick={handleDismiss}
              className="absolute top-1/2 -translate-y-1/2 right-0 sm:relative sm:top-auto sm:translate-y-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200"
              style={{ color: "rgba(148,163,184,0.7)" }}
              aria-label="Dismiss"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "white";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color =
                  "rgba(148,163,184,0.7)";
              }}
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
