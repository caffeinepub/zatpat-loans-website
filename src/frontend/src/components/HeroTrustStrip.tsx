import { useEffect, useRef, useState } from "react";

const TRUST_ITEMS = [
  { emoji: "🏛️", label: "RBI NBFC Registered", color: "#2563EB" },
  { emoji: "🔒", label: "ISO 27001 Certified", color: "#475569" },
  { emoji: "📊", label: "CIBIL Partner", color: "#475569" },
  { emoji: "🛡️", label: "256-bit SSL", color: "#16A34A" },
  { emoji: "⭐", label: "4.8★ Rating", color: "#D97706" },
  { emoji: "👥", label: "50,000+ Borrowers", color: "#475569" },
];

export default function HeroTrustStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes hts-badge-in {
          from { opacity: 0; transform: translateY(12px) scale(0.94); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .hts-badge {
          opacity: 0;
        }
        .hts-badge.hts-visible {
          animation: hts-badge-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .hts-badge { animation: none !important; opacity: 1 !important; }
        }
      `}</style>

      <div
        data-ocid="hero-trust-strip.section"
        ref={ref}
        style={{
          background: "#FFFFFF",
          borderTop: "1px solid #E2E8F0",
          borderBottom: "1px solid #E2E8F0",
          padding: "20px 16px",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
          }}
        >
          <p
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#94A3B8",
              margin: 0,
            }}
          >
            Trusted &amp; Regulated By
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            {TRUST_ITEMS.map((item, i) => (
              <div
                key={item.label}
                className={`hts-badge${visible ? " hts-visible" : ""}`}
                style={{
                  animationDelay: `${i * 60}ms`,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: 999,
                  padding: "9px 18px",
                  boxShadow:
                    "0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
                  cursor: "default",
                  transition: "box-shadow 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    `0 6px 20px rgba(0,0,0,0.10), 0 2px 8px ${item.color}22`;
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)";
                  (e.currentTarget as HTMLDivElement).style.transform = "";
                }}
              >
                <span style={{ fontSize: 15 }}>{item.emoji}</span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: item.color,
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
