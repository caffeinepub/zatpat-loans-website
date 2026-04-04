const TRUST_BADGES = [
  { emoji: "🏛️", label: "RBI NBFC" },
  { emoji: "🔒", label: "ISO 27001" },
  { emoji: "📊", label: "CIBIL Partner" },
  { emoji: "🛡️", label: "256-bit SSL" },
  { emoji: "📱", label: "Google Play" },
  { emoji: "🍎", label: "App Store" },
  { emoji: "🏦", label: "HDFC" },
  { emoji: "🏦", label: "ICICI" },
  { emoji: "🏦", label: "SBI" },
];

export default function TrustBar() {
  return (
    <>
      <style>{`
        @keyframes trust-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .trust-scroll-inner {
          display: flex;
          align-items: center;
          gap: 8px;
          width: max-content;
          animation: trust-scroll 28s linear infinite;
        }
        .trust-scroll-inner:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .trust-scroll-inner {
            animation: none;
          }
        }
      `}</style>

      <div
        data-ocid="trustbar.section"
        className="w-full overflow-hidden"
        style={{ background: "#F1F5F9", borderBottom: "1px solid #E2E8F0" }}
      >
        <div className="max-w-7xl mx-auto px-4 py-2">
          <p
            className="hidden md:block text-center text-xs font-bold uppercase tracking-widest mb-1.5"
            style={{ color: "#94A3B8" }}
          >
            Trusted &amp; Regulated By
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="absolute left-0 top-0 bottom-0 w-8 pointer-events-none z-10"
            style={{
              background: "linear-gradient(to right, #F1F5F9, transparent)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none z-10"
            style={{
              background: "linear-gradient(to left, #F1F5F9, transparent)",
            }}
          />

          <div className="pb-2 px-4">
            {/* Scrolling marquee for all sizes */}
            <div className="overflow-hidden">
              <div className="trust-scroll-inner">
                {[...TRUST_BADGES, ...TRUST_BADGES].map((badge, i) => {
                  const key = `${badge.label}-${i}`;
                  return (
                    <span
                      key={key}
                      className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-full flex-shrink-0"
                      style={{
                        background: "white",
                        border: "1px solid #E2E8F0",
                        color: "#1E293B",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <span>{badge.emoji}</span>
                      {badge.label}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
