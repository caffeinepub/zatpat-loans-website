const TICKER_ITEMS = [
  {
    key: "rahul-delhi",
    pre: "Rahul from ",
    city: "Delhi",
    mid: " just got ",
    amount: "₹4,500",
    post: " approved",
    time: "2 min ago",
  },
  {
    key: "priya-mumbai",
    pre: "Priya from ",
    city: "Mumbai",
    mid: " just got ",
    amount: "₹5,000",
    post: " approved",
    time: "3 min ago",
  },
  {
    key: "amit-bangalore",
    pre: "Amit from ",
    city: "Bangalore",
    mid: " just got ",
    amount: "₹3,000",
    post: " approved",
    time: "1 min ago",
  },
  {
    key: "sunita-hyderabad",
    pre: "Sunita from ",
    city: "Hyderabad",
    mid: " just got ",
    amount: "₹2,500",
    post: " approved",
    time: "4 min ago",
  },
  {
    key: "kiran-chennai",
    pre: "Kiran from ",
    city: "Chennai",
    mid: " just got ",
    amount: "₹5,000",
    post: " approved",
    time: "5 min ago",
  },
  {
    key: "deepak-pune",
    pre: "Deepak from ",
    city: "Pune",
    mid: " just got ",
    amount: "₹1,500",
    post: " approved",
    time: "2 min ago",
  },
  {
    key: "anjali-kolkata",
    pre: "Anjali from ",
    city: "Kolkata",
    mid: " just got ",
    amount: "₹4,000",
    post: " approved",
    time: "6 min ago",
  },
  {
    key: "ravi-ahmedabad",
    pre: "Ravi from ",
    city: "Ahmedabad",
    mid: " just got ",
    amount: "₹5,000",
    post: " approved",
    time: "7 min ago",
  },
];

type TickerItemData = (typeof TICKER_ITEMS)[0];

function TickerItem({ item }: { item: TickerItemData }) {
  return (
    <span className="inline-flex items-center gap-1 flex-shrink-0">
      <span style={{ color: "rgba(226,232,240,0.7)" }}>{item.pre}</span>
      <span style={{ color: "#22C55E", fontWeight: 700 }}>{item.city}</span>
      <span style={{ color: "rgba(226,232,240,0.7)" }}>{item.mid}</span>
      <span style={{ color: "#22C55E", fontWeight: 700 }}>{item.amount}</span>
      <span style={{ color: "rgba(226,232,240,0.7)" }}>{item.post}</span>
      <span
        style={{
          color: "rgba(148,163,184,0.5)",
          marginLeft: 4,
          fontSize: "0.7em",
        }}
      >
        • {item.time}
      </span>
    </span>
  );
}

const SEPARATOR = (
  <span
    style={{
      color: "rgba(37,99,235,0.4)",
      margin: "0 16px",
      flexShrink: 0,
    }}
  >
    ◆
  </span>
);

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
        @keyframes live-dot-ring {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.5); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-inner {
            animation: none !important;
          }
          .live-dot-ring {
            animation: none !important;
          }
        }
      `}</style>
      <div
        data-ocid="ticker.section"
        className="w-full overflow-hidden relative"
        style={{
          backgroundColor: "#0F172A",
          height: "38px",
          zIndex: 49,
          borderBottom: "1px solid rgba(37,99,235,0.15)",
        }}
      >
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: "80px",
            background: "linear-gradient(to right, #0F172A 40%, transparent)",
          }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: "80px",
            background: "linear-gradient(to left, #0F172A 40%, transparent)",
          }}
        />

        {/* LIVE badge — fixed left */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center gap-2">
          <span
            className="relative flex items-center justify-center"
            style={{ width: 16, height: 16 }}
          >
            <span
              className="live-dot-ring absolute rounded-full"
              style={{
                width: 16,
                height: 16,
                border: "1px solid rgba(34,197,94,0.4)",
                borderRadius: "50%",
                animation: "live-dot-ring 1.8s ease-in-out infinite",
              }}
            />
            <span
              className="absolute rounded-full"
              style={{
                width: 10,
                height: 10,
                backgroundColor: "#22C55E",
                boxShadow: "0 0 8px rgba(34,197,94,0.7)",
                animation: "pulse 1.5s ease-in-out infinite",
              }}
            />
          </span>
          <span
            className="hidden sm:inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide"
            style={{
              background: "rgba(34,197,94,0.12)",
              border: "1px solid rgba(34,197,94,0.25)",
              color: "#4ADE80",
              letterSpacing: "0.06em",
            }}
          >
            LIVE
          </span>
        </div>

        <div className="h-full flex items-center">
          <div
            className="ticker-inner text-xs sm:text-[13px] font-medium"
            style={{ paddingLeft: "100px" }}
          >
            {/* First set */}
            {TICKER_ITEMS.map((item) => (
              <span key={`a-${item.key}`} className="inline-flex items-center">
                <TickerItem item={item} />
                {SEPARATOR}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {TICKER_ITEMS.map((item) => (
              <span key={`b-${item.key}`} className="inline-flex items-center">
                <TickerItem item={item} />
                {SEPARATOR}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
