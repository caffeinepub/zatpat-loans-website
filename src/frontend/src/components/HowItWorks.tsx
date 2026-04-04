import { Check, Download, IndianRupee, UserCheck } from "lucide-react";
import { useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const STEP_COLORS = [
  {
    bg: "#2563EB",
    glow: "rgba(37, 99, 235, 0.4)",
    ring: "rgba(37, 99, 235, 0.2)",
    shadow: "0 8px 32px rgba(37, 99, 235, 0.35)",
    label: "blue",
  },
  {
    bg: "#FF6A00",
    glow: "rgba(255, 106, 0, 0.4)",
    ring: "rgba(255, 106, 0, 0.2)",
    shadow: "0 8px 32px rgba(255, 106, 0, 0.35)",
    label: "orange",
  },
  {
    bg: "#22C55E",
    glow: "rgba(34, 197, 94, 0.4)",
    ring: "rgba(34, 197, 94, 0.2)",
    shadow: "0 8px 32px rgba(34, 197, 94, 0.35)",
    label: "green",
  },
];

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Download App",
    description:
      "Download the Zatpat.loans app from Google Play Store or Apple App Store on your smartphone.",
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
@keyframes dotPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(0.85); }
}
@keyframes tagSlide {
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
}
`;

export default function HowItWorks() {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.15,
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
        className="py-20 lg:py-32 relative"
      >
        {/* Subtle background blobs */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "-120px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            right: "-80px",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(34,197,94,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div
            className="text-center mb-16 lg:mb-20"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "#EFF6FF",
                color: "#2563EB",
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "6px 16px",
                borderRadius: "999px",
                marginBottom: "16px",
                border: "1px solid rgba(37,99,235,0.2)",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#2563EB",
                  animation: isVisible
                    ? "dotPulse 1.8s ease-in-out infinite"
                    : "none",
                }}
              />
              Simple Process
            </span>

            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 900,
                color: "#1E293B",
                lineHeight: 1.15,
                margin: 0,
              }}
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

            <div
              style={{
                width: "56px",
                height: "4px",
                background: "linear-gradient(90deg, #2563EB, #FF6A00)",
                borderRadius: "2px",
                margin: "14px auto 0",
              }}
            />

            <p
              style={{
                marginTop: "20px",
                fontSize: "1.05rem",
                color: "rgba(30, 41, 59, 0.68)",
                maxWidth: "480px",
                margin: "20px auto 0",
                lineHeight: 1.7,
              }}
            >
              Getting a loan has never been this straightforward.{" "}
              <strong style={{ color: "#1E293B" }}>3 easy steps</strong> and
              you&apos;re done.
            </p>
          </div>

          {/* Desktop Stepper */}
          <div className="hidden md:block">
            <div style={{ position: "relative", marginBottom: "0" }}>
              {/* SVG connecting path */}
              <svg
                aria-label="Step progress path from Download to Register to Get Money"
                role="img"
                style={{
                  position: "absolute",
                  top: "60px",
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
                {/* Background track */}
                <path
                  d="M 0 2 L 600 2"
                  stroke="#E2E8F0"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Animated gradient path */}
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
                      {/* Icon circle with pulse ring */}
                      <div
                        style={{
                          position: "relative",
                          width: "120px",
                          height: "120px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "24px",
                          zIndex: 2,
                        }}
                      >
                        {/* Pulse ring */}
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
                        {/* Outer ring */}
                        <div
                          style={{
                            position: "absolute",
                            inset: "8px",
                            borderRadius: "50%",
                            border: `1.5px solid ${color.ring}`,
                            transition: "border-color 0.3s",
                          }}
                        />
                        {/* Main icon circle */}
                        <div
                          style={{
                            width: "80px",
                            height: "80px",
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
                            size={30}
                            style={{
                              color: isHovered ? "#fff" : color.bg,
                              transition: "color 0.3s",
                            }}
                          />
                        </div>
                        {/* Step number badge */}
                        <div
                          style={{
                            position: "absolute",
                            bottom: "4px",
                            right: "4px",
                            width: "26px",
                            height: "26px",
                            borderRadius: "50%",
                            background: color.bg,
                            color: "#fff",
                            fontSize: "10px",
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

                      {/* Check pop-in when visible */}
                      {isVisible && (
                        <div
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            background: color.bg,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "12px",
                            animation: `checkPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay + 600}ms both`,
                          }}
                        >
                          <Check size={11} color="#fff" strokeWidth={3} />
                        </div>
                      )}

                      <h3
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 800,
                          color: "#1E293B",
                          marginBottom: "10px",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          color: "rgba(30,41,59,0.62)",
                          lineHeight: 1.65,
                          maxWidth: "220px",
                          margin: "0 auto 16px",
                        }}
                      >
                        {step.description}
                      </p>

                      {/* Time tag */}
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
                        ⏱ {step.tag}
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
                    gap: "20px",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateX(0)"
                      : "translateX(-28px)",
                    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
                  }}
                >
                  {/* Left rail */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    {/* Icon circle */}
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
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
                      <step.icon size={22} color="#fff" />
                      <div
                        style={{
                          position: "absolute",
                          top: "-4px",
                          right: "-4px",
                          width: "18px",
                          height: "18px",
                          borderRadius: "50%",
                          background: "#1E293B",
                          color: "#fff",
                          fontSize: "8px",
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
                    {/* Connector line */}
                    {!isLast && (
                      <div
                        style={{
                          width: "2px",
                          flex: 1,
                          minHeight: "32px",
                          background: isVisible
                            ? `linear-gradient(to bottom, ${color.bg}, ${STEP_COLORS[index + 1]?.bg ?? color.bg})`
                            : "#E2E8F0",
                          transition: "background 1s ease",
                          margin: "4px 0",
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    style={{
                      paddingBottom: isLast ? "0" : "28px",
                      paddingTop: "4px",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        background: `rgba(${color.bg === "#2563EB" ? "37,99,235" : color.bg === "#FF6A00" ? "255,106,0" : "34,197,94"},0.1)`,
                        color: color.bg,
                        fontSize: "10px",
                        fontWeight: 700,
                        padding: "3px 10px",
                        borderRadius: "999px",
                        marginBottom: "8px",
                      }}
                    >
                      ⏱ {step.tag}
                    </div>
                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: 800,
                        color: "#1E293B",
                        marginBottom: "6px",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "rgba(30,41,59,0.62)",
                        lineHeight: 1.65,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
