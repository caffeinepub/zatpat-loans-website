const TICKER_ITEMS = [
  "🟢 Rahul from Delhi just got ₹4,500 approved • 2 min ago",
  "🟢 Priya from Mumbai just got ₹5,000 approved • 3 min ago",
  "🟢 Amit from Bangalore just got ₹3,000 approved • 1 min ago",
  "🟢 Sunita from Hyderabad just got ₹2,500 approved • 4 min ago",
  "🟢 Kiran from Chennai just got ₹5,000 approved • 5 min ago",
  "🟢 Deepak from Pune just got ₹1,500 approved • 2 min ago",
  "🟢 Anjali from Kolkata just got ₹4,000 approved • 6 min ago",
  "🟢 Ravi from Ahmedabad just got ₹5,000 approved • 7 min ago",
];

const SEPARATOR = "  •  ";
const MARQUEE_TEXT = TICKER_ITEMS.join(SEPARATOR) + SEPARATOR;

export default function SocialProofTicker() {
  return (
    <>
      <style>{`
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .ticker-inner {
          animation: ticker-scroll 45s linear infinite;
          display: flex;
          align-items: center;
          white-space: nowrap;
          width: max-content;
        }
        .ticker-inner:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-inner {
            animation: none !important;
          }
        }
      `}</style>
      <div
        data-ocid="ticker.section"
        className="w-full overflow-hidden relative"
        style={{
          backgroundColor: "#0F172A",
          height: "32px",
          zIndex: 49,
        }}
      >
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #0F172A, transparent)",
          }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-8 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, #0F172A, transparent)",
          }}
        />

        {/* Pulsing dot */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center gap-1.5">
          <span
            className="inline-block w-2 h-2 rounded-full flex-shrink-0"
            style={{
              backgroundColor: "#22C55E",
              boxShadow: "0 0 6px #22C55E",
              animation: "pulse 1.5s ease-in-out infinite",
            }}
          />
        </div>

        <div className="h-full flex items-center">
          <div
            className="ticker-inner pl-8 text-[10px] sm:text-xs font-medium"
            style={{ color: "#22C55E" }}
          >
            <span>{MARQUEE_TEXT}</span>
            <span>{MARQUEE_TEXT}</span>
          </div>
        </div>
      </div>
    </>
  );
}
