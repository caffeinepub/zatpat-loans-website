import { ArrowRight, CheckCircle2 } from "lucide-react";
import type React from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface BadCIBILBannerProps {
  onApplyNow: () => void;
}

const SCORE_CARDS = [
  {
    range: "0 or No Credit Score",
    label: "No Credit History",
    barColor: "#EF4444",
    barWidth: "28%",
    bgGlow: "rgba(239,68,68,0.12)",
    borderColor: "rgba(239,68,68,0.3)",
  },
  {
    range: "580 – 699",
    label: "Fair Credit",
    barColor: "#F59E0B",
    barWidth: "45%",
    bgGlow: "rgba(245,158,11,0.12)",
    borderColor: "rgba(245,158,11,0.3)",
  },
  {
    range: "700+",
    label: "Good Credit",
    barColor: "#22C55E",
    barWidth: "75%",
    bgGlow: "rgba(34,197,94,0.12)",
    borderColor: "rgba(34,197,94,0.3)",
  },
];

export default function BadCIBILBanner({ onApplyNow }: BadCIBILBannerProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: cardsRef, isVisible: cardsVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <style>{`
        @keyframes credit-orb-pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.15); opacity: 1; }
        }
        @keyframes credit-check-bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.18); }
        }
        @keyframes credit-stat-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,106,0,0.4); }
          50% { box-shadow: 0 0 0 10px rgba(255,106,0,0); }
        }
        .credit-check-bounce {
          animation: credit-check-bounce 2s ease-in-out infinite;
        }
        .credit-stat-pulse {
          animation: credit-stat-pulse 2.5s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .credit-check-bounce, .credit-stat-pulse {
            animation: none !important;
          }
        }
      `}</style>

      <section
        id="low-credit"
        data-ocid="credit.section"
        ref={ref as React.RefObject<HTMLElement>}
        className="relative w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0F172A 0%, #0D1F3C 50%, #0F172A 100%)",
          padding: "64px 0 80px",
        }}
      >
        {/* Background orbs — visible on all screens */}
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            width: "280px",
            height: "280px",
            top: "-10%",
            left: "-8%",
            background:
              "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)",
            animation: "credit-orb-pulse 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            width: "240px",
            height: "240px",
            top: "40%",
            right: "-5%",
            background:
              "radial-gradient(circle, rgba(255,106,0,0.14) 0%, transparent 70%)",
            animation: "credit-orb-pulse 8s ease-in-out infinite",
          }}
        />
        {/* Third orb — bottom center green */}
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            width: "320px",
            height: "200px",
            bottom: "-10%",
            left: "50%",
            transform: "translateX(-50%)",
            background:
              "radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%)",
            animation: "credit-orb-pulse 10s ease-in-out infinite",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          {/* Eyebrow badge */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black tracking-widest uppercase"
              style={{
                background: "rgba(255,106,0,0.15)",
                border: "1px solid rgba(255,106,0,0.4)",
                color: "#FF8C2E",
              }}
            >
              <span
                className="w-2 h-2 rounded-full inline-block flex-shrink-0"
                style={{ background: "#FF6A00", boxShadow: "0 0 8px #FF6A00" }}
              />
              NO CREDIT CHECK REQUIRED
            </span>
          </div>

          {/* Main headline */}
          <div
            className="mt-5 mb-3"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            <h2
              className="text-5xl sm:text-6xl md:text-7xl font-black"
              style={{
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                fontFamily:
                  '"Plus Jakarta Sans", "Inter", system-ui, sans-serif',
              }}
            >
              <span
                style={{
                  color: "#F1F5F9",
                  display: "block",
                  textShadow: "0 2px 20px rgba(255,255,255,0.1)",
                }}
              >
                Low Credit Score?
              </span>
              <span
                style={{
                  display: "block",
                  background:
                    "linear-gradient(135deg, #FF6A00 0%, #FFCA60 60%, #FF8C2E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginTop: "4px",
                }}
              >
                Still Approved!
              </span>
            </h2>
          </div>

          {/* Subheadline */}
          <p
            className="max-w-lg text-sm sm:text-base leading-relaxed px-2"
            style={{
              color: "rgba(226,232,240,0.7)",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            We approve loans for{" "}
            <strong style={{ color: "#F1F5F9" }}>
              every credit score — even 0 or No Credit Score
            </strong>
            . No judgment, just fast cash in your account.
          </p>

          {/* Score cards grid */}
          <div
            ref={cardsRef as React.RefObject<HTMLDivElement>}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full mt-8 mb-8"
          >
            {SCORE_CARDS.map((card, i) => (
              <div
                key={card.range}
                data-ocid={`credit.item.${i + 1}`}
                style={{
                  position: "relative",
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid ${card.borderColor}`,
                  borderRadius: "20px",
                  padding: "20px 18px",
                  backdropFilter: "blur(8px)",
                  boxShadow: `0 0 24px ${card.bgGlow}`,
                  opacity: cardsVisible ? 1 : 0,
                  transform: cardsVisible
                    ? "translateY(0) scale(1)"
                    : "translateY(32px) scale(0.95)",
                  transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) ${i * 100}ms`,
                }}
              >
                {/* Top accent line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, transparent, ${card.barColor}, transparent)`,
                    borderRadius: "3px 3px 0 0",
                  }}
                />

                {/* Micro-sparkle top-right */}
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: card.barColor,
                    opacity: 0.6,
                    boxShadow: `0 0 8px ${card.barColor}`,
                  }}
                />

                {/* Score range */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "rgba(148,163,184,0.8)",
                        marginBottom: "3px",
                      }}
                    >
                      Credit Score
                    </div>
                    <div
                      style={{
                        fontSize: i === 0 ? "0.85rem" : "1rem",
                        fontWeight: 800,
                        color: card.barColor,
                        lineHeight: 1.2,
                      }}
                    >
                      {card.range}
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "rgba(226,232,240,0.55)",
                        marginTop: "2px",
                      }}
                    >
                      {card.label}
                    </div>
                  </div>

                  {/* Pulsing check */}
                  <div
                    className="credit-check-bounce"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  >
                    <CheckCircle2
                      size={24}
                      style={{
                        color: "#22C55E",
                        filter: "drop-shadow(0 0 6px rgba(34,197,94,0.6))",
                      }}
                    />
                  </div>
                </div>

                {/* Score bar */}
                <div
                  style={{
                    height: "5px",
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: "3px",
                    overflow: "hidden",
                    marginBottom: "12px",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      background: `linear-gradient(90deg, ${card.barColor}99, ${card.barColor})`,
                      borderRadius: "3px",
                      width: cardsVisible ? card.barWidth : "0%",
                      transition: cardsVisible
                        ? `width 1s cubic-bezier(0.4,0,0.2,1) ${i * 100 + 300}ms`
                        : "none",
                    }}
                  />
                </div>

                {/* Approved badge */}
                <div
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(34,197,94,0.15)",
                    border: "1px solid rgba(34,197,94,0.35)",
                  }}
                >
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "#22C55E",
                      display: "inline-block",
                      boxShadow: "0 0 6px #22C55E",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 900,
                      color: "#4ADE80",
                      letterSpacing: "0.08em",
                    }}
                  >
                    APPROVED
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Big stat */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s",
            }}
          >
            <div
              className="credit-stat-pulse inline-flex items-center gap-3 px-5 sm:px-8 py-3 sm:py-4 rounded-full"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,106,0,0.4)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              <span style={{ fontSize: "1.4rem" }}>🎉</span>
              <div className="text-left">
                <div
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 900,
                    color: "#FF8C2E",
                    letterSpacing: "-0.02em",
                  }}
                >
                  50,000+ People
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(226,232,240,0.6)",
                    fontWeight: 500,
                  }}
                >
                  with Low Credit Score — Approved &amp; Funded
                </div>
              </div>
            </div>
          </div>

          {/* CTA button */}
          <div
            className="mt-6 w-full sm:w-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s",
            }}
          >
            <button
              type="button"
              data-ocid="credit.primary_button"
              onClick={onApplyNow}
              className="inline-flex items-center justify-center gap-3 rounded-full font-black text-white transition-all duration-200 hover:brightness-110 active:scale-95 w-full sm:w-auto"
              style={{
                background: "linear-gradient(135deg, #FF6A00 0%, #FF9500 100%)",
                padding: "16px 32px",
                fontSize: "1rem",
                letterSpacing: "-0.01em",
                boxShadow:
                  "0 8px 32px rgba(255,106,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2)",
                minHeight: "56px",
              }}
            >
              Apply Now — No Credit Check Needed
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>

            <p
              className="mt-3 text-xs"
              style={{ color: "rgba(226,232,240,0.45)" }}
            >
              🔒 Secure • Any credit score accepted • Results in 5 minutes
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
