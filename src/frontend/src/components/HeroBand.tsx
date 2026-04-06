import {
  Banknote,
  CheckCircle,
  FileText,
  Percent,
  Shield,
  Zap,
} from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

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

const CARD_WIDTH = 200;
const CARD_HEIGHT = 160;
const RADIUS_DESKTOP = 260;
const RADIUS_MOBILE = 140;

// Shared 3D Carousel — works on both desktop and mobile
function Carousel3D({
  isVisible,
  isMobile,
}: { isVisible: boolean; isMobile: boolean }) {
  const radius = isMobile ? RADIUS_MOBILE : RADIUS_DESKTOP;
  const containerHeight = isMobile ? 280 : 400;
  const cardW = isMobile ? 150 : CARD_WIDTH;
  const cardH = isMobile ? 120 : CARD_HEIGHT;

  return (
    <div
      data-ocid="hero_band.carousel.section"
      style={{
        position: "relative",
        width: "100%",
        height: containerHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: isMobile ? 280 : 420,
          height: isMobile ? 280 : 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.12) 0%, rgba(124,58,237,0.08) 40%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        className="carousel-scene"
        style={{
          perspective: isMobile ? "700px" : "1100px",
          width: cardW,
          height: cardH,
          position: "relative",
          zIndex: 1,
        }}
      >
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
                  width: cardW,
                  height: cardH,
                  transform: `rotateY(${card.angle}deg) translateZ(${radius}px) rotateX(5deg)`,
                  background: card.gradient,
                  borderRadius: "16px",
                  padding: isMobile ? "14px 12px" : "20px 18px",
                  color: "#FFFFFF",
                  boxShadow: `0 8px 32px ${card.glow}, 0 2px 8px rgba(0,0,0,0.2)`,
                  display: "flex",
                  flexDirection: "column",
                  gap: isMobile ? "6px" : "8px",
                  backfaceVisibility: "visible",
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
              >
                <div
                  style={{
                    width: isMobile ? 32 : 40,
                    height: isMobile ? 32 : 40,
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={isMobile ? 16 : 20} color="#FFFFFF" />
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: isMobile ? "13px" : "15px",
                      fontWeight: 800,
                      color: "#FFFFFF",
                      marginBottom: "3px",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontSize: isMobile ? "10px" : "12px",
                      color: "rgba(255,255,255,0.85)",
                      lineHeight: 1.45,
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function HeroBand() {
  const { ref: cardsRef, isVisible: cardsVisible } = useIntersectionObserver({
    threshold: 0.15,
    triggerOnce: true,
  });
  const { ref: stepsRef, isVisible: stepsVisible } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [litSteps, setLitSteps] = useState<boolean[]>([false, false, false]);
  const litTimeouts = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 640 : false,
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <style>{`
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

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        {/* SUB-SECTION 1: CAROUSEL */}
        <div
          data-ocid="hero_band.features.section"
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          style={{ marginBottom: "48px" }}
        >
          {/* Section header */}
          <div style={{ textAlign: "center", marginBottom: "16px" }}>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                color: "#2563EB",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "6px",
              }}
            >
              Why choose RocketMoney.in
            </p>
            <h2
              style={{
                fontSize: "clamp(1.35rem, 4vw, 2.1rem)",
                fontWeight: 800,
                color: "#1E293B",
                lineHeight: 1.25,
              }}
            >
              Built for Speed, Designed for Trust
            </h2>
          </div>

          {/* 3D Carousel — visible on ALL screen sizes */}
          <Carousel3D isVisible={cardsVisible} isMobile={isMobile} />
        </div>

        {/* SUB-SECTION 2: PROCESS FLOW */}
        <div
          data-ocid="hero_band.process.section"
          ref={stepsRef as React.RefObject<HTMLDivElement>}
        >
          {/* Section header */}
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                color: "#FF6A00",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "6px",
              }}
            >
              How it works
            </p>
            <h2
              style={{
                fontSize: "clamp(1.35rem, 4vw, 2.1rem)",
                fontWeight: 800,
                color: "#1E293B",
                lineHeight: 1.25,
              }}
            >
              Get Your Loan in 3 Simple Steps
            </h2>
          </div>

          {/* Steps layout */}
          <div style={{ position: "relative" }}>
            {/* Desktop SVG connector */}
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
              className="flex flex-col sm:flex-row sm:justify-center"
              style={{ gap: "24px" }}
            >
              {PROCESS_STEPS.map((step, i) => {
                const Icon = step.icon;
                const isLit = litSteps[i];
                return (
                  <div
                    key={step.num}
                    data-ocid={`hero_band.process.item.${i + 1}`}
                    className="flex sm:flex-col sm:items-center sm:text-center sm:flex-1"
                    style={{
                      gap: "16px",
                      opacity: stepsVisible ? 1 : 0,
                      transform: stepsVisible
                        ? "translateY(0)"
                        : "translateY(20px)",
                      transition: `opacity 0.6s ease-in-out ${i * 150}ms, transform 0.6s ease-in-out ${i * 150}ms`,
                    }}
                  >
                    {/* Mobile: horizontal layout */}
                    <div
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        position: "relative",
                        background: isLit ? "#2563EB" : "#F1F5F9",
                        boxShadow: isLit
                          ? "0 0 0 6px rgba(37,99,235,0.15)"
                          : "none",
                        transition:
                          "background 0.45s ease-in-out, box-shadow 0.45s ease-in-out",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "9px",
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
                          marginTop: "3px",
                          transition: "color 0.45s ease-in-out",
                        }}
                      >
                        <Icon size={18} />
                      </div>
                    </div>

                    <div className="flex-1 sm:flex-none">
                      {/* Mobile vertical connector */}
                      {i < PROCESS_STEPS.length - 1 && (
                        <div
                          aria-hidden="true"
                          className="hidden sm:block"
                          style={{
                            width: 2,
                            height: 24,
                            background: isLit
                              ? "linear-gradient(to bottom, #2563EB, rgba(37,99,235,0.2))"
                              : "#E2E8F0",
                            borderRadius: 2,
                            margin: "0 auto 24px",
                            transition: "background 0.45s ease-in-out",
                          }}
                        />
                      )}
                      <h3
                        style={{
                          fontSize: "15px",
                          fontWeight: 700,
                          color: "#1E293B",
                          marginBottom: "4px",
                        }}
                      >
                        {step.label}
                      </h3>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "#64748B",
                          lineHeight: 1.5,
                        }}
                      >
                        {step.desc}
                      </p>
                    </div>
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
