import {
  Banknote,
  CheckCircle,
  FileText,
  Percent,
  Shield,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const CAROUSEL_CARDS = [
  {
    icon: Zap,
    title: "Instant Approval",
    description: "AI-powered decisions in under 5 minutes",
    gradient: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
    glow: "rgba(37,99,235,0.55)",
    angle: 0,
  },
  {
    icon: Percent,
    title: "Low Interest",
    description: "Rates starting at just 1.5% per month",
    gradient: "linear-gradient(135deg, #FF6A00 0%, #EA580C 100%)",
    glow: "rgba(255,106,0,0.55)",
    angle: 90,
  },
  {
    icon: Banknote,
    title: "Quick Disbursal",
    description: "Funds in your account within 2–4 hours",
    gradient: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
    glow: "rgba(34,197,94,0.55)",
    angle: 180,
  },
  {
    icon: Shield,
    title: "100% Secure",
    description: "RBI registered, bank-grade encryption",
    gradient: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
    glow: "rgba(124,58,237,0.55)",
    angle: 270,
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

// ─────────────────────────────────────────────
// 3D Revolving Carousel
// ─────────────────────────────────────────────

const CARD_WIDTH = 240;
const CARD_HEIGHT = 180;
const RADIUS = 300;

function Carousel3D({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      data-ocid="hero_band.carousel.section"
      style={{
        position: "relative",
        width: "100%",
        height: 440,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Radial glow behind carousel */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.12) 0%, rgba(124,58,237,0.08) 40%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* 3D scene container */}
      <div
        className="carousel-scene"
        style={{
          perspective: "1100px",
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Rotating track */}
        <div
          className="carousel-track"
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transformStyle: "preserve-3d",
            animation: isVisible
              ? "carousel-revolve 12s linear infinite"
              : "none",
          }}
        >
          {CAROUSEL_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                data-ocid={`hero_band.carousel.item.${i + 1}`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: CARD_WIDTH,
                  height: CARD_HEIGHT,
                  transform: `rotateY(${card.angle}deg) translateZ(${RADIUS}px) rotateX(5deg)`,
                  background: card.gradient,
                  borderRadius: "20px",
                  padding: "24px 20px",
                  color: "#FFFFFF",
                  boxShadow: `0 8px 40px ${card.glow}, 0 2px 12px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.2)`,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  backfaceVisibility: "visible",
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
              >
                {/* Icon bubble */}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} color="#FFFFFF" />
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: "17px",
                      fontWeight: 800,
                      color: "#FFFFFF",
                      marginBottom: "4px",
                      lineHeight: 1.2,
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.85)",
                      lineHeight: 1.45,
                    }}
                  >
                    {card.description}
                  </p>
                </div>

                {/* Bottom shimmer line */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "12px",
                    right: "12px",
                    height: "2px",
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                    borderRadius: "0 0 20px 20px",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────

export default function HeroBand() {
  const { ref: cardsRef, isVisible: cardsVisible } = useIntersectionObserver({
    threshold: 0.15,
    triggerOnce: true,
  });
  const { ref: stepsRef, isVisible: stepsVisible } = useIntersectionObserver({
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
        paddingBottom: "48px",
      }}
    >
      {/* ── Keyframes ── */}
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
        @keyframes carousel-revolve {
          from { transform: rotateY(0deg); }
          to   { transform: rotateY(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-band * {
            animation: none !important;
            transition: none !important;
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
            SUB-SECTION 1: 3D REVOLVING CAROUSEL
        ══════════════════════════════════════ */}
        <div
          data-ocid="hero_band.features.section"
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          style={{ marginBottom: "72px" }}
        >
          {/* Section header */}
          <div style={{ textAlign: "center", marginBottom: "16px" }}>
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
              Why choose Rocket.Money
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

          {/* 3D Carousel */}
          <Carousel3D isVisible={cardsVisible} />
        </div>

        {/* ══════════════════════════════════════
            SUB-SECTION 2: PROCESS FLOW
        ══════════════════════════════════════ */}
        <div
          data-ocid="hero_band.process.section"
          ref={stepsRef as React.RefObject<HTMLDivElement>}
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
            {/* Desktop SVG dashed connector line */}
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

            {/* Steps */}
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
      </div>
    </section>
  );
}
