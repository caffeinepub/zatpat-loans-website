import {
  Banknote,
  CheckCircle,
  Clock,
  FileText,
  Percent,
  Shield,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  useCounterAnimation,
  useIntersectionObserver,
} from "../hooks/useIntersectionObserver";

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const FEATURE_CARDS = [
  {
    icon: Zap,
    title: "Instant Approval",
    description: "AI-powered decisions in under 5 minutes",
    color: "#2563EB",
    bgTint: "#EFF6FF",
  },
  {
    icon: Percent,
    title: "Low Interest",
    description: "Rates starting at just 1.5% per month",
    color: "#FF6A00",
    bgTint: "#FFF7ED",
  },
  {
    icon: Clock,
    title: "Quick Disbursal",
    description: "Funds in your account within 2–4 hours",
    color: "#22C55E",
    bgTint: "#F0FDF4",
  },
  {
    icon: Shield,
    title: "100% Secure",
    description: "RBI registered, bank-grade encryption",
    color: "#2563EB",
    bgTint: "#EFF6FF",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    icon: FileText,
    label: "Apply Online",
    desc: "Fill a quick form in 2 minutes",
  },
  {
    num: "02",
    icon: CheckCircle,
    label: "Get Verified",
    desc: "Aadhaar + PAN in seconds",
  },
  {
    num: "03",
    icon: Banknote,
    label: "Receive Money",
    desc: "Directly to your bank account",
  },
];

const STATS = [
  {
    target: 50000,
    suffix: "+",
    prefix: "",
    label: "Loans Disbursed",
    barColor: "#2563EB",
  },
  {
    target: 8,
    suffix: "★",
    prefix: "4.",
    label: "App Rating",
    barColor: "#FF6A00",
  },
  {
    target: 5,
    suffix: " Min",
    prefix: "<",
    label: "Processing Time",
    barColor: "#22C55E",
  },
];

// ─────────────────────────────────────────────
// Sub-component: Feature Card
// ─────────────────────────────────────────────

function FeatureCard({
  card,
  index,
  isVisible,
}: {
  card: (typeof FEATURE_CARDS)[0];
  index: number;
  isVisible: boolean;
}) {
  const Icon = card.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      data-ocid={`hero_band.feature.card.${index + 1}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? hovered
            ? "translateY(-4px) rotate(1deg)"
            : "translateY(0px) rotate(0deg)"
          : "translateY(28px) rotate(0deg)",
        transition: `opacity 0.7s ease-in-out ${index * 120}ms, transform 0.3s ease`,
        background: "#FFFFFF",
        borderRadius: "16px",
        boxShadow: hovered
          ? "0 12px 40px rgba(37,99,235,0.18), 0 2px 8px rgba(0,0,0,0.06)"
          : "0 4px 24px rgba(37,99,235,0.08)",
        border: "1px solid rgba(37,99,235,0.10)",
        padding: "24px",
        minWidth: "260px",
        flex: "0 0 auto",
        cursor: "default",
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: "12px",
          background: card.bgTint,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "16px",
        }}
      >
        <div
          className="hero-band-icon"
          style={{
            color: card.color,
            animation: isVisible
              ? `icon-pop 0.6s ease-out ${index * 120 + 300}ms both, icon-pulse 2.5s ease-in-out ${index * 120 + 1100}ms infinite`
              : "none",
          }}
        >
          <Icon size={24} />
        </div>
      </div>
      <h3
        style={{
          fontSize: "16px",
          fontWeight: 700,
          color: "#1E293B",
          marginBottom: "6px",
        }}
      >
        {card.title}
      </h3>
      <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.5 }}>
        {card.description}
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────
// Sub-component: Stat Item
// ─────────────────────────────────────────────

function StatItem({
  stat,
  index,
  isVisible,
}: {
  stat: (typeof STATS)[0];
  index: number;
  isVisible: boolean;
}) {
  const count = useCounterAnimation(stat.target, isVisible, 2000);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        flex: 1,
        padding: "0 24px",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.7s ease-in-out ${index * 200}ms, transform 0.7s ease-in-out ${index * 200}ms`,
      }}
    >
      <div
        style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 900,
          color: stat.barColor,
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        {stat.prefix}
        {count.toLocaleString()}
        {stat.suffix}
      </div>
      <div
        style={{
          fontSize: "13px",
          color: "#6B7280",
          marginTop: "6px",
          marginBottom: "10px",
          fontWeight: 500,
        }}
      >
        {stat.label}
      </div>
      {/* Expanding bar */}
      <div
        style={{
          width: "80px",
          height: "3px",
          background: "#F1F5F9",
          borderRadius: "99px",
          overflow: "hidden",
        }}
      >
        <div
          className="stat-bar"
          style={{
            height: "100%",
            width: isVisible ? "100%" : "0%",
            background: stat.barColor,
            opacity: 0.7,
            borderRadius: "99px",
            transition: `width 1.2s ease-in-out ${index * 300}ms`,
          }}
        />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────

export default function HeroBand() {
  // Intersection observers — one per sub-section for independent staggered triggers
  const { ref: cardsRef, isVisible: cardsVisible } = useIntersectionObserver({
    threshold: 0.15,
    triggerOnce: true,
  });
  const { ref: stepsRef, isVisible: stepsVisible } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: statsRef, isVisible: statsVisible } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Process step sequential lighting
  const [litSteps, setLitSteps] = useState<boolean[]>([false, false, false]);
  const litTimeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (!stepsVisible) return;
    const delays = [200, 500, 800];
    litTimeouts.current = delays.map((delay, i) =>
      setTimeout(() => {
        setLitSteps((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, delay),
    );
    return () => {
      litTimeouts.current.forEach(clearTimeout);
    };
  }, [stepsVisible]);

  return (
    <section
      data-ocid="hero_band.section"
      className="hero-band"
      style={{
        background: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
        paddingTop: "48px",
        paddingBottom: "32px",
      }}
    >
      {/* ── Keyframes + prefers-reduced-motion ── */}
      <style>{`
        @keyframes hero-blob-float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33%  { transform: translateY(-18px) translateX(10px); }
          66%  { transform: translateY(-8px) translateX(-6px); }
        }
        @keyframes hero-blob-float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          40%  { transform: translateY(-22px) translateX(-8px); }
          70%  { transform: translateY(-10px) translateX(12px); }
        }
        @keyframes hero-blob-float-3 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50%  { transform: translateY(-14px) translateX(6px); }
        }
        @keyframes hero-blob-float-4 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          45%  { transform: translateY(-20px) translateX(-10px); }
        }
        @keyframes hero-blob-float-5 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          60%  { transform: translateY(-12px) translateX(8px); }
        }
        @keyframes icon-pop {
          0%   { transform: scale(0.6); }
          60%  { transform: scale(1.12); }
          100% { transform: scale(1.0); }
        }
        @keyframes icon-pulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.08); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-band * {
            animation: none !important;
            transition: none !important;
          }
          .hero-band .stat-bar {
            width: 100% !important;
          }
        }
      `}</style>

      {/* ── Floating background blobs ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {/* blob 1 — large blue, top-left */}
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "-8%",
            width: 380,
            height: 380,
            borderRadius: "50%",
            background: "radial-gradient(circle, #EFF6FF 0%, transparent 70%)",
            opacity: 0.08,
            animation: "hero-blob-float-1 11s ease-in-out infinite",
          }}
        />
        {/* blob 2 — medium orange, top-right */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "-5%",
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: "radial-gradient(circle, #FFF7ED 0%, transparent 70%)",
            opacity: 0.09,
            animation: "hero-blob-float-2 9s ease-in-out infinite 1.5s",
          }}
        />
        {/* blob 3 — large blue, bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            right: "10%",
            width: 340,
            height: 340,
            borderRadius: "50%",
            background: "radial-gradient(circle, #EFF6FF 0%, transparent 70%)",
            opacity: 0.07,
            animation: "hero-blob-float-3 13s ease-in-out infinite 0.8s",
          }}
        />
        {/* blob 4 — small orange, bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            left: "5%",
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "radial-gradient(circle, #FFF7ED 0%, transparent 70%)",
            opacity: 0.1,
            animation: "hero-blob-float-4 10s ease-in-out infinite 2.2s",
          }}
        />
        {/* blob 5 — tiny blue, center */}
        <div
          style={{
            position: "absolute",
            top: "45%",
            left: "48%",
            width: 150,
            height: 150,
            borderRadius: "50%",
            background: "radial-gradient(circle, #EFF6FF 0%, transparent 70%)",
            opacity: 0.06,
            animation: "hero-blob-float-5 8s ease-in-out infinite 3s",
          }}
        />
        {/* Dot grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(#2563EB 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            opacity: 0.03,
          }}
        />
      </div>

      {/* ── Content container ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        {/* ══════════════════════════════════════
            SUB-SECTION 1: FEATURE CARDS
        ══════════════════════════════════════ */}
        <div
          data-ocid="hero_band.features.section"
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          style={{ marginBottom: "64px" }}
        >
          {/* Section header */}
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#2563EB",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "8px",
              }}
            >
              Why choose Zatpat.loans
            </p>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                fontWeight: 800,
                color: "#1E293B",
                lineHeight: 1.2,
              }}
            >
              Built for Speed, Designed for Trust
            </h2>
          </div>

          {/* Cards row — horizontal scroll on mobile, 4-col grid on desktop */}
          <div
            data-ocid="hero_band.features.list"
            className="lg:grid lg:grid-cols-4"
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "16px",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              paddingBottom: "8px",
              msOverflowStyle: "none",
            }}
          >
            {FEATURE_CARDS.map((card, i) => (
              <FeatureCard
                key={card.title}
                card={card}
                index={i}
                isVisible={cardsVisible}
              />
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════
            SUB-SECTION 2: PROCESS FLOW
        ══════════════════════════════════════ */}
        <div
          data-ocid="hero_band.process.section"
          ref={stepsRef as React.RefObject<HTMLDivElement>}
          style={{ marginBottom: "64px" }}
        >
          {/* Section header */}
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#FF6A00",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "8px",
              }}
            >
              How it works
            </p>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                fontWeight: 800,
                color: "#1E293B",
                lineHeight: 1.2,
              }}
            >
              Get Your Loan in 3 Simple Steps
            </h2>
          </div>

          {/* Steps layout */}
          <div style={{ position: "relative" }}>
            {/* Desktop SVG dashed connector line — decorative, hidden from AT */}
            <svg
              role="presentation"
              aria-hidden="true"
              className="hidden lg:block"
              style={{
                position: "absolute",
                top: "40px",
                left: "calc(16.66% + 40px)",
                width: "calc(66.66% - 80px)",
                height: "4px",
                overflow: "visible",
                pointerEvents: "none",
              }}
              viewBox="0 0 400 4"
              preserveAspectRatio="none"
            >
              <line
                x1="0"
                y1="2"
                x2="400"
                y2="2"
                stroke="#2563EB"
                strokeWidth="2"
                strokeDasharray="8 4"
                opacity="0.3"
                style={{
                  strokeDashoffset: stepsVisible ? 0 : 300,
                  transition: "stroke-dashoffset 1.2s ease-in-out 0.5s",
                }}
              />
            </svg>

            {/* Steps flex/grid */}
            <div
              data-ocid="hero_band.process.list"
              className="flex flex-col lg:flex-row lg:justify-center"
              style={{ gap: "32px" }}
            >
              {PROCESS_STEPS.map((step, i) => {
                const Icon = step.icon;
                const isLit = litSteps[i];
                return (
                  <div
                    key={step.num}
                    data-ocid={`hero_band.process.item.${i + 1}`}
                    className="flex flex-col items-center text-center lg:flex-1"
                    style={{
                      opacity: stepsVisible ? 1 : 0,
                      transform: stepsVisible
                        ? "translateY(0)"
                        : "translateY(20px)",
                      transition: `opacity 0.6s ease-in-out ${i * 150}ms, transform 0.6s ease-in-out ${i * 150}ms`,
                    }}
                  >
                    {/* Step number + icon circle */}
                    <div
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "16px",
                        position: "relative",
                        zIndex: 1,
                        background: isLit ? "#2563EB" : "#F1F5F9",
                        boxShadow: isLit
                          ? "0 0 0 8px rgba(37,99,235,0.15), 0 0 0 16px rgba(37,99,235,0.06)"
                          : "none",
                        transition:
                          "background 0.45s ease-in-out, box-shadow 0.45s ease-in-out",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 800,
                          color: isLit ? "rgba(255,255,255,0.7)" : "#94A3B8",
                          letterSpacing: "0.05em",
                          lineHeight: 1,
                          transition: "color 0.45s ease-in-out",
                        }}
                      >
                        {step.num}
                      </span>
                      <div
                        style={{
                          color: isLit ? "#FFFFFF" : "#94A3B8",
                          marginTop: "4px",
                          transition: "color 0.45s ease-in-out",
                        }}
                      >
                        <Icon size={22} />
                      </div>
                    </div>

                    {/* Mobile vertical connector */}
                    {i < PROCESS_STEPS.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="block lg:hidden"
                        style={{
                          width: 2,
                          height: 32,
                          background: isLit
                            ? "linear-gradient(to bottom, #2563EB, rgba(37,99,235,0.2))"
                            : "#E2E8F0",
                          borderRadius: 2,
                          margin: "0 auto 32px",
                          transition: "background 0.45s ease-in-out",
                        }}
                      />
                    )}

                    <h3
                      style={{
                        fontSize: "17px",
                        fontWeight: 700,
                        color: "#1E293B",
                        marginBottom: "6px",
                      }}
                    >
                      {step.label}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#64748B",
                        maxWidth: 180,
                        lineHeight: 1.5,
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            SUB-SECTION 3: STATS BAR
        ══════════════════════════════════════ */}
        <div
          data-ocid="hero_band.stats.section"
          ref={statsRef as React.RefObject<HTMLDivElement>}
          style={{
            borderRadius: "20px",
            background:
              "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #F8FAFC 100%)",
            border: "1px solid rgba(37,99,235,0.10)",
            boxShadow: "0 4px 32px rgba(37,99,235,0.08)",
            padding: "40px 24px",
            opacity: statsVisible ? 1 : 0,
            transform: statsVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease-in-out, transform 0.7s ease-in-out",
          }}
        >
          <div
            data-ocid="hero_band.stats.list"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "stretch",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  flex: 1,
                  minWidth: 120,
                  alignItems: "stretch",
                }}
              >
                <StatItem stat={stat} index={i} isVisible={statsVisible} />
                {i < STATS.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:block"
                    style={{
                      width: 1,
                      background: "rgba(37,99,235,0.12)",
                      margin: "8px 0",
                      flexShrink: 0,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
