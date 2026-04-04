import {
  BarChart3,
  Building,
  CheckCircle,
  CreditCard,
  FileText,
  RefreshCcw,
  Star,
  TrendingUp,
} from "lucide-react";
import type React from "react";
import {
  useCounterAnimation,
  useIntersectionObserver,
} from "../hooks/useIntersectionObserver";

interface CreditScoreProps {
  onApplyNow: () => void;
}

// Animated SVG arc gauge
function CreditGauge({ isVisible }: { isVisible: boolean }) {
  const scoreCount = useCounterAnimation(750, isVisible, 2200);

  const cx = 160;
  const cy = 160;
  const r = 120;
  const startAngleDeg = 210;
  const totalSweep = 300;
  const circumference = 2 * Math.PI * r;
  const arcLength = (totalSweep / 360) * circumference;
  const scoreFraction = isVisible ? (750 - 300) / 600 : 0;
  const filledArcLength = scoreFraction * arcLength;
  const dashOffset = arcLength - filledArcLength;

  function polarToCartesian(angle: number) {
    const rad = ((angle - 90) * Math.PI) / 180;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    };
  }

  function describeArc(startDeg: number, endDeg: number) {
    const s = polarToCartesian(startDeg);
    const e = polarToCartesian(endDeg);
    const largeArc = endDeg - startDeg > 180 ? 1 : 0;
    return `M ${s.x} ${s.y} A ${r} ${r} 0 ${largeArc} 1 ${e.x} ${e.y}`;
  }

  const trackPath = describeArc(startAngleDeg, startAngleDeg + totalSweep);
  const scoreAngle = startAngleDeg + scoreFraction * totalSweep;
  const scoreDotPos = polarToCartesian(scoreAngle);

  return (
    <div className="relative flex flex-col items-center">
      <svg
        viewBox="0 0 320 300"
        className="w-full max-w-[240px] sm:max-w-xs"
        role="img"
        aria-label="Credit score gauge showing 750 out of 900 — Excellent"
        style={{ filter: "drop-shadow(0 8px 32px rgba(37,99,235,0.15))" }}
      >
        <title>Credit Score Gauge</title>
        <defs>
          <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6A00" />
            <stop offset="40%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#22C55E" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d={trackPath}
          fill="none"
          stroke="#E2E8F0"
          strokeWidth="18"
          strokeLinecap="round"
        />

        <path
          d={trackPath}
          fill="none"
          stroke="url(#arcGradient)"
          strokeWidth="18"
          strokeLinecap="round"
          strokeDasharray={`${arcLength}`}
          strokeDashoffset={dashOffset}
          style={{
            transition: isVisible
              ? "stroke-dashoffset 2s cubic-bezier(0.4,0,0.2,1) 0.3s"
              : "none",
          }}
          filter="url(#glow)"
        />

        {isVisible && (
          <circle
            cx={scoreDotPos.x}
            cy={scoreDotPos.y}
            r="10"
            fill="#22C55E"
            stroke="white"
            strokeWidth="3"
            style={{ transition: "all 2s cubic-bezier(0.4,0,0.2,1) 0.3s" }}
            filter="url(#glow)"
          />
        )}

        <text
          x={cx}
          y={cy - 18}
          textAnchor="middle"
          fontSize="14"
          fill="#64748B"
          fontWeight="500"
        >
          YOUR SCORE
        </text>
        <text
          x={cx}
          y={cy + 32}
          textAnchor="middle"
          fontSize="56"
          fontWeight="900"
          fill="#1E293B"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {scoreCount}
        </text>

        <rect
          x={cx - 46}
          y={cy + 48}
          width="92"
          height="26"
          rx="13"
          fill="#22C55E"
        />
        <text
          x={cx}
          y={cy + 66}
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill="white"
        >
          ❆ Excellent
        </text>

        <text
          x="30"
          y="270"
          fontSize="10"
          fill="#EF4444"
          textAnchor="middle"
          fontWeight="600"
        >
          Poor
        </text>
        <text
          x="100"
          y="285"
          fontSize="10"
          fill="#F97316"
          textAnchor="middle"
          fontWeight="600"
        >
          Fair
        </text>
        <text
          x="160"
          y="292"
          fontSize="10"
          fill="#3B82F6"
          textAnchor="middle"
          fontWeight="600"
        >
          Good
        </text>
        <text
          x="222"
          y="285"
          fontSize="10"
          fill="#22C55E"
          textAnchor="middle"
          fontWeight="600"
        >
          Excellent
        </text>
      </svg>

      {/* Bureau badges */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2 max-w-[240px] sm:max-w-full">
        {["CIBIL", "Experian", "Equifax", "CRIF"].map((bureau) => (
          <div
            key={bureau}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold"
            style={{
              background: "#EFF6FF",
              color: "#2563EB",
              border: "1px solid #BFDBFE",
            }}
          >
            <Building size={10} />
            {bureau}
          </div>
        ))}
      </div>
    </div>
  );
}

const steps = [
  {
    num: 1,
    icon: FileText,
    title: "Apply for a Loan",
    desc: "Get approved quickly with minimal docs.",
    color: "#2563EB",
    bg: "#EFF6FF",
  },
  {
    num: 2,
    icon: RefreshCcw,
    title: "Make Timely Payments",
    desc: "Each EMI paid on time directly boosts your CIBIL score.",
    color: "#FF6A00",
    bg: "#FFF7ED",
  },
  {
    num: 3,
    icon: BarChart3,
    title: "Score Gets Reported",
    desc: "We report to CIBIL, Experian & Equifax every month.",
    color: "#22C55E",
    bg: "#F0FDF4",
  },
  {
    num: 4,
    icon: TrendingUp,
    title: "Watch Your Score Rise",
    desc: "Unlock better rates and higher loan limits over time.",
    color: "#EAB308",
    bg: "#FEFCE8",
  },
];

const statCards = [
  {
    value: "₹0",
    label: "Hidden Fees",
    sub: "Transparent repayment schedule",
    icon: CreditCard,
  },
  {
    value: "4",
    label: "Bureaus Reported",
    sub: "CIBIL, Experian, Equifax & CRIF",
    icon: Building,
  },
  {
    value: "750+",
    label: "Average Score Gain",
    sub: "Users see improvement in 6 months",
    icon: TrendingUp,
  },
];

export default function CreditScore({ onApplyNow }: CreditScoreProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="credit-score"
      data-ocid="creditscore.section"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div
        className="absolute top-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)",
          transform: "translate(-40%, -40%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div
          className="text-center mb-10 sm:mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease 0ms, transform 0.7s ease 0ms",
          }}
        >
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
            BUILD YOUR FUTURE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Build Your <span style={{ color: "#FF6A00" }}>Credit Score</span>{" "}
            While Getting Loans
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto mt-3 px-2">
            Every timely repayment with Rocket.Money is reported to credit
            bureaus — turning your loan journey into a{" "}
            <span style={{ color: "#2563EB", fontWeight: 600 }}>
              credit-building engine.
            </span>
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 sm:mb-12">
          {/* Left: Gauge */}
          <div
            className="flex flex-col items-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-32px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            <div
              className="w-full max-w-xs sm:max-w-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative"
              style={{
                background:
                  "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #F0FDF4 100%)",
                border: "1px solid #E2E8F0",
                boxShadow: "0 12px 40px rgba(37,99,235,0.08)",
              }}
            >
              <div className="flex justify-end mb-2">
                <span className="text-xs" style={{ color: "#64748B" }}>
                  Scale: 300–900
                </span>
              </div>
              <CreditGauge isVisible={isVisible} />
              <p
                className="text-center text-xs mt-3"
                style={{ color: "#94A3B8" }}
              >
                *Reported monthly to all 4 credit bureaus
              </p>
            </div>
          </div>

          {/* Right: Steps */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.num}
                data-ocid={`creditscore.item.${index + 1}`}
                className="relative"
              >
                {index < steps.length - 1 && (
                  <div
                    className="absolute z-0"
                    style={{
                      left: "19px",
                      top: "48px",
                      width: "2px",
                      height: "36px",
                      backgroundImage: isVisible
                        ? "repeating-linear-gradient(to bottom, #BFDBFE, #BFDBFE 4px, transparent 4px, transparent 8px)"
                        : "none",
                      opacity: isVisible ? 1 : 0,
                      transition: `opacity 0.6s ease ${0.3 + index * 0.15}s`,
                    }}
                  />
                )}

                <div
                  className="flex items-start gap-3 p-3 sm:p-4 rounded-2xl mb-2"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(40px)",
                    transition: `opacity 0.6s ease ${0.2 + index * 0.15}s, transform 0.6s ease ${0.2 + index * 0.15}s`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0 z-10"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)`,
                      boxShadow: `0 4px 12px ${step.color}40`,
                    }}
                  >
                    {step.num}
                  </div>

                  <div className="flex-1 pt-0.5 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3
                        className="text-sm font-bold"
                        style={{ color: "#1E293B" }}
                      >
                        {step.title}
                      </h3>
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: step.bg }}
                      >
                        <step.icon size={12} style={{ color: step.color }} />
                      </div>
                    </div>
                    <p
                      className="text-xs sm:text-sm leading-relaxed"
                      style={{ color: "rgba(30,41,59,0.65)" }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stat cards — centered on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {statCards.map((stat, index) => (
            <div
              key={stat.label}
              data-ocid={`creditscore.card.${index + 1}`}
              className="relative rounded-2xl p-4 sm:p-5 overflow-hidden text-center sm:text-left"
              style={{
                background: "#0F172A",
                borderLeft: "4px solid #2563EB",
                boxShadow: "0 8px 32px rgba(15,23,42,0.15)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.7s ease ${0.5 + index * 0.12}s, transform 0.7s ease ${0.5 + index * 0.12}s`,
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 mx-auto sm:mx-0"
                style={{ background: "rgba(37,99,235,0.15)" }}
              >
                <stat.icon size={16} style={{ color: "#FF6A00" }} />
              </div>
              <div
                className="text-2xl sm:text-3xl font-black mb-1"
                style={{ color: "#FF6A00" }}
              >
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white mb-1">
                {stat.label}
              </div>
              <div
                className="text-xs leading-snug"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Trust row */}
        <div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 0.9s, transform 0.7s ease 0.9s",
          }}
        >
          {[
            "RBI Registered NBFC",
            "ISO 27001 Certified",
            "Bank-Grade Encryption",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle size={14} style={{ color: "#22C55E" }} />
              <span
                className="text-xs sm:text-sm font-medium"
                style={{ color: "rgba(30,41,59,0.65)" }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-center mt-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 1.0s, transform 0.7s ease 1.0s",
          }}
        >
          <button
            type="button"
            data-ocid="creditscore.primary_button"
            onClick={onApplyNow}
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 sm:px-10 py-3.5 sm:py-4 text-white font-bold text-sm sm:text-base transition-all duration-200 hover:brightness-110 active:scale-95 w-full sm:w-auto"
            style={{
              background: "linear-gradient(135deg, #FF6A00, #FF8C2E)",
              boxShadow: "0 4px 20px rgba(255,106,0,0.4)",
              minHeight: "52px",
            }}
          >
            Apply &amp; Build Credit →
          </button>
          <p className="text-xs text-slate-400 mt-3">
            Most applicants see score improvement within 3 months
          </p>
          <Star size={0} className="hidden" />
        </div>
      </div>
    </section>
  );
}
