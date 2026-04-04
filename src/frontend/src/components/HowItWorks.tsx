import { Check, Download, IndianRupee, UserCheck } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface HowItWorksProps {
  onApplyNow: () => void;
}

const STEP_COLORS = [
  {
    bg: "#2563EB",
    glow: "rgba(37, 99, 235, 0.4)",
    ring: "rgba(37, 99, 235, 0.2)",
    shadow: "0 8px 32px rgba(37, 99, 235, 0.35)",
    time: "2 min",
  },
  {
    bg: "#FF6A00",
    glow: "rgba(255, 106, 0, 0.4)",
    ring: "rgba(255, 106, 0, 0.2)",
    shadow: "0 8px 32px rgba(255, 106, 0, 0.35)",
    time: "1 min",
  },
  {
    bg: "#22C55E",
    glow: "rgba(34, 197, 94, 0.4)",
    ring: "rgba(34, 197, 94, 0.2)",
    shadow: "0 8px 32px rgba(34, 197, 94, 0.35)",
    time: "Same day",
  },
];

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Download App",
    description:
      "Download the Rocket.Money app from Google Play Store or Apple App Store on your smartphone.",
    tag: "2 minutes",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Register & Apply",
    description:
      "Complete your KYC in minutes. Fill in your details, upload documents, and submit your loan application.",
    tag: "5 minutes",
  },
  {
    number: "03",
    icon: IndianRupee,
    title: "Get Money",
    description:
      "Upon approval, the loan amount is instantly disbursed to your linked bank account. It's that simple!",
    tag: "Instant",
  },
];

const KEYFRAMES = `
@keyframes pulseRing {
  0%   { transform: scale(1);   opacity: 0.7; }
  70%  { transform: scale(1.55); opacity: 0; }
  100% { transform: scale(1.55); opacity: 0; }
}
@keyframes checkPop {
  0%   { transform: scale(0) rotate(-15deg); opacity: 0; }
  60%  { transform: scale(1.25) rotate(4deg); opacity: 1; }
  100% { transform: scale(1) rotate(0deg);   opacity: 1; }
}
@keyframes tagSlide {
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes progressFill {
  from { width: 0%; }
  to   { width: 100%; }
}
`;

export default function HowItWorks({ onApplyNow }: HowItWorksProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <>
      <style>{KEYFRAMES}</style>
      <section
        id="how-it-works"
        data-ocid="how-it-works.section"
        ref={ref as React.RefObject<HTMLElement>}
        style={{ background: "#F8FAFC", overflow: "hidden" }}
        className="py-12 sm:py-16 md:py-24 relative"
      >
        {/* Background blobs */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "-120px",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div
            className="text-center mb-10 sm:mb-14"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
              SIMPLE PROCESS
            </span>

            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold"
              style={{ color: "#1E293B" }}
            >
              How It{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #FF6A00 0%, #FF9A3C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Works
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto mt-3">
              Getting a loan has never been this straightforward.{" "}
              <strong style={{ color: "#1E293B" }}>3 easy steps</strong> and
              you&apos;re done.
            </p>
          </div>

          {/* Animated progress bar — desktop only */}
          <div
            className="block mb-4 mx-auto max-w-lg"
            style={{
              height: "4px",
              borderRadius: "2px",
              background: "#E2E8F0",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                borderRadius: "2px",
                background: "linear-gradient(90deg, #2563EB, #FF6A00, #22C55E)",
                width: isVisible ? "100%" : "0%",
                transition: isVisible
                  ? "width 1.6s cubic-bezier(0.4,0,0.2,1) 0.4s"
                  : "none",
              }}
            />
          </div>

          {/* Desktop Stepper */}
          <div className="block">
            <div style={{ position: "relative", marginBottom: "0" }}>
              {/* SVG connecting path */}
              <svg
                aria-label="Step progress path"
                role="img"
                style={{
                  position: "absolute",
                  top: "56px",
                  left: "16.67%",
                  width: "66.66%",
                  height: "4px",
                  overflow: "visible",
                  zIndex: 1,
                  pointerEvents: "none",
                }}
                viewBox="0 0 600 4"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="pathGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="50%" stopColor="#FF6A00" />
                    <stop offset="100%" stopColor="#22C55E" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 2 L 600 2"
                  stroke="#E2E8F0"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 0 2 L 600 2"
                  stroke="url(#pathGrad)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: "600",
                    strokeDashoffset: isVisible ? "0" : "600",
                    transition: isVisible
                      ? "stroke-dashoffset 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.3s"
                      : "none",
                  }}
                />
              </svg>

              <div className="grid grid-cols-3 gap-8">
                {steps.map((step, index) => {
                  const color = STEP_COLORS[index];
                  const delay = index * 220;
                  const isHovered = hoveredStep === index;

                  return (
                    <div
                      key={step.title}
                      data-ocid={`how-it-works.item.${index + 1}`}
                      className="flex flex-col items-center text-center cursor-default"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateY(0)"
                          : "translateY(36px)",
                        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
                      }}
                      onMouseEnter={() => setHoveredStep(index)}
                      onMouseLeave={() => setHoveredStep(null)}
                    >
                      {/* Icon circle */}
                      <div
                        style={{
                          position: "relative",
                          width: "112px",
                          height: "112px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "20px",
                          zIndex: 2,
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            borderRadius: "50%",
                            border: `2px solid ${color.glow}`,
                            animation:
                              isVisible && isHovered
                                ? "pulseRing 1.2s ease-out infinite"
                                : "none",
                          }}
                        />
                        <div
                          style={{
                            width: "72px",
                            height: "72px",
                            borderRadius: "50%",
                            background: isHovered ? color.bg : "#fff",
                            border: `2.5px solid ${color.bg}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: isHovered
                              ? color.shadow
                              : `0 4px 16px ${color.ring}`,
                            transition: "background 0.3s, box-shadow 0.3s",
                            position: "relative",
                            zIndex: 2,
                          }}
                        >
                          <step.icon
                            size={26}
                            style={{
                              color: isHovered ? "#fff" : color.bg,
                              transition: "color 0.3s",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            bottom: "4px",
                            right: "4px",
                            width: "22px",
                            height: "22px",
                            borderRadius: "50%",
                            background: color.bg,
                            color: "#fff",
                            fontSize: "9px",
                            fontWeight: 900,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "2px solid #F8FAFC",
                            zIndex: 3,
                          }}
                        >
                          {step.number}
                        </div>
                      </div>

                      {isVisible && (
                        <div
                          style={{
                            width: "18px",
                            height: "18px",
                            borderRadius: "50%",
                            background: color.bg,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "10px",
                            animation: `checkPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay + 600}ms both`,
                          }}
                        >
                          <Check size={10} color="#fff" strokeWidth={3} />
                        </div>
                      )}

                      <h3
                        style={{
                          fontSize: "1rem",
                          fontWeight: 800,
                          color: "#1E293B",
                          marginBottom: "4px",
                        }}
                      >
                        {step.title}
                      </h3>

                      <span
                        style={{
                          display: "inline-block",
                          fontSize: "10px",
                          fontWeight: 700,
                          color: color.bg,
                          background: `rgba(${color.bg === "#2563EB" ? "37,99,235" : color.bg === "#FF6A00" ? "255,106,0" : "34,197,94"},0.1)`,
                          padding: "2px 10px",
                          borderRadius: "999px",
                          marginBottom: "8px",
                        }}
                      >
                        ⏱ {color.time}
                      </span>

                      <p
                        style={{
                          fontSize: "0.85rem",
                          color: "rgba(30,41,59,0.62)",
                          lineHeight: 1.6,
                          maxWidth: "200px",
                          margin: "0 auto 12px",
                        }}
                      >
                        {step.description}
                      </p>

                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                          background: isHovered
                            ? color.bg
                            : `rgba(${color.bg === "#2563EB" ? "37,99,235" : color.bg === "#FF6A00" ? "255,106,0" : "34,197,94"},0.1)`,
                          color: isHovered ? "#fff" : color.bg,
                          fontSize: "11px",
                          fontWeight: 700,
                          padding: "5px 14px",
                          borderRadius: "999px",
                          transition: "background 0.3s, color 0.3s",
                          animation: isVisible
                            ? `tagSlide 0.4s ease ${delay + 400}ms both`
                            : "none",
                        }}
                      >
                        {step.tag}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Vertical Stepper */}
          <div className="md:hidden flex flex-col gap-0">
            {steps.map((step, index) => {
              const color = STEP_COLORS[index];
              const delay = index * 220;
              const isLast = index === steps.length - 1;

              return (
                <div
                  key={step.title}
                  data-ocid={`how-it-works.mobile.item.${index + 1}`}
                  style={{
                    display: "flex",
                    gap: "16px",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateX(0)"
                      : "translateX(-28px)",
                    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        background: color.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: color.shadow,
                        flexShrink: 0,
                        position: "relative",
                      }}
                    >
                      <step.icon size={20} color="#fff" />
                      <div
                        style={{
                          position: "absolute",
                          top: "-3px",
                          right: "-3px",
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          background: "#1E293B",
                          color: "#fff",
                          fontSize: "7px",
                          fontWeight: 900,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "1.5px solid #F8FAFC",
                        }}
                      >
                        {step.number}
                      </div>
                    </div>
                    {!isLast && (
                      <div
                        style={{
                          width: "2px",
                          flex: 1,
                          minHeight: "28px",
                          background: isVisible
                            ? `linear-gradient(to bottom, ${color.bg}, ${STEP_COLORS[index + 1]?.bg ?? color.bg})`
                            : "#E2E8F0",
                          transition: "background 1s ease",
                          margin: "4px 0",
                        }}
                      />
                    )}
                  </div>

                  <div
                    style={{
                      paddingBottom: isLast ? "0" : "24px",
                      paddingTop: "2px",
                      flex: 1,
                      minWidth: 0,
                    }}
                  >
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px",
                        background: `rgba(${color.bg === "#2563EB" ? "37,99,235" : color.bg === "#FF6A00" ? "255,106,0" : "34,197,94"},0.1)`,
                        color: color.bg,
                        fontSize: "9px",
                        fontWeight: 700,
                        padding: "2px 8px",
                        borderRadius: "999px",
                        marginBottom: "6px",
                      }}
                    >
                      ⏱ {step.tag}
                    </div>
                    <h3
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 800,
                        color: "#1E293B",
                        marginBottom: "4px",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: "rgba(30,41,59,0.62)",
                        lineHeight: 1.6,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div
            className="text-center mt-10 sm:mt-14"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease 0.9s, transform 0.7s ease 0.9s",
            }}
          >
            <p className="text-xs sm:text-sm mb-3" style={{ color: "#64748B" }}>
              ⚡ Processing under 4 minutes for most applicants
            </p>
            <button
              type="button"
              data-ocid="how-it-works.primary_button"
              onClick={onApplyNow}
              className="inline-flex items-center gap-2 rounded-full px-8 sm:px-10 py-3.5 sm:py-4 text-white font-bold text-sm sm:text-base transition-all duration-200 hover:brightness-110 active:scale-95 w-full sm:w-auto justify-center"
              style={{
                background: "linear-gradient(135deg, #FF6A00, #FF8C2E)",
                boxShadow: "0 4px 20px rgba(255,106,0,0.4)",
                minHeight: "52px",
              }}
            >
              Start My Application →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
