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
import {
  useCounterAnimation,
  useIntersectionObserver,
} from "../hooks/useIntersectionObserver";

// Animated SVG arc gauge
function CreditGauge({ isVisible }: { isVisible: boolean }) {
  const scoreCount = useCounterAnimation(750, isVisible, 2200);

  // SVG arc params
  const cx = 160;
  const cy = 160;
  const r = 120;
  // Arc spans from 210° to 210+300° horseshoe shape
  const startAngleDeg = 210;
  const totalSweep = 300;

  // Circumference of a full circle
  const circumference = 2 * Math.PI * r;

  // Arc length for full 300 degrees
  const arcLength = (totalSweep / 360) * circumference;

  // Score 750 out of 900. Score range: 300–900 = 600 points
  const scoreFraction = isVisible ? (750 - 300) / 600 : 0; // 0.75
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

  // Score label position on arc
  const scoreAngle = startAngleDeg + scoreFraction * totalSweep;
  const scoreDotPos = polarToCartesian(scoreAngle);

  return (
    <div className="relative flex flex-col items-center">
      {/* Glowing backdrop */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(37,99,235,0.10) 0%, transparent 70%)",
        }}
      />

      <svg
        viewBox="0 0 320 300"
        className="w-full max-w-xs"
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

        {/* Track (background arc) */}
        <path
          d={trackPath}
          fill="none"
          stroke="#E2E8F0"
          strokeWidth="18"
          strokeLinecap="round"
        />

        {/* Filled gradient arc */}
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

        {/* Score dot */}
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

        {/* Center text */}
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

        {/* Excellent badge */}
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
          ✦ Excellent
        </text>

        {/* Score range labels */}
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
      <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
        {["CIBIL", "Experian", "Equifax", "CRIF"].map((bureau) => (
          <div
            key={bureau}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
            style={{
              background: "#EFF6FF",
              color: "#2563EB",
              border: "1px solid #BFDBFE",
            }}
          >
            <Building size={12} />
            {bureau}
          </div>
        ))}
      </div>
    </div>
  );
}

// Steps data
const steps = [
  {
    num: 1,
    icon: FileText,
    title: "Apply for a Loan",
    desc: "Get approved quickly with minimal docs. No lengthy paperwork.",
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
    desc: "We report to CIBIL, Experian & Equifax every month automatically.",
    color: "#22C55E",
    bg: "#F0FDF4",
  },
  {
    num: 4,
    icon: TrendingUp,
    title: "Watch Your Score Rise",
    desc: "Unlock better interest rates and higher loan limits over time.",
    color: "#EAB308",
    bg: "#FEFCE8",
  },
];

// Stat cards
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
    sub: "Users see score rise within 6 months",
    icon: TrendingUp,
  },
];

// Floating particles config (static to avoid recreating)
const particles = [
  { id: "p1", left: "10%", top: "20%", size: 6, color: "#2563EB", delay: "0s" },
  {
    id: "p2",
    left: "88%",
    top: "15%",
    size: 8,
    color: "#FF6A00",
    delay: "0.5s",
  },
  { id: "p3", left: "15%", top: "75%", size: 5, color: "#22C55E", delay: "1s" },
  {
    id: "p4",
    left: "85%",
    top: "70%",
    size: 7,
    color: "#2563EB",
    delay: "0.3s",
  },
  {
    id: "p5",
    left: "50%",
    top: "5%",
    size: 4,
    color: "#EAB308",
    delay: "0.8s",
  },
];

export default function CreditScore() {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="credit-score"
      data-ocid="creditscore.section"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)",
          transform: "translate(-40%, -40%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(34,197,94,0.07) 0%, transparent 70%)",
          transform: "translate(30%, 30%)",
        }}
      />
      <div
        className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,106,0,0.05) 0%, transparent 70%)",
          transform: "translateY(-50%)",
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: p.color,
            opacity: isVisible ? 0.35 : 0,
            transform: isVisible ? "scale(1)" : "scale(0)",
            transition: `opacity 1s ease ${p.delay}, transform 1s ease ${p.delay}`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className="text-center mb-14"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease 0ms, transform 0.7s ease 0ms",
          }}
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3 px-4 py-1.5 rounded-full"
            style={{ background: "#EFF6FF", color: "#2563EB" }}
          >
            <Star size={12} />
            Credit Score
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 section-title-underline">
            Build Your <span style={{ color: "#FF6A00" }}>Credit Score</span>{" "}
            While Getting Loans
          </h2>
          <p
            className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(30,41,59,0.7)" }}
          >
            Every timely repayment with Rocket.Money is reported to credit
            bureaus — turning your loan journey into a{" "}
            <span style={{ color: "#2563EB", fontWeight: 600 }}>
              credit-building engine.
            </span>
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14">
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
              className="w-full max-w-sm rounded-3xl p-8 relative"
              style={{
                background:
                  "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #F0FDF4 100%)",
                border: "1px solid #E2E8F0",
                boxShadow:
                  "0 20px 60px rgba(37,99,235,0.10), 0 4px 16px rgba(0,0,0,0.04)",
              }}
            >
              {/* Top badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: "#0F172A", color: "#22C55E" }}
                >
                  LIVE SCORE
                </span>
                <span
                  className="text-xs font-medium"
                  style={{ color: "#64748B" }}
                >
                  Scale: 300–900
                </span>
              </div>

              <CreditGauge isVisible={isVisible} />

              <p
                className="text-center text-xs mt-4"
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
                {/* Dashed connector line */}
                {index < steps.length - 1 && (
                  <div
                    className="absolute z-0"
                    style={{
                      left: "22px",
                      top: "52px",
                      width: "2px",
                      height: "40px",
                      backgroundImage: isVisible
                        ? "repeating-linear-gradient(to bottom, #BFDBFE, #BFDBFE 4px, transparent 4px, transparent 8px)"
                        : "none",
                      opacity: isVisible ? 1 : 0,
                      transition: `opacity 0.6s ease ${0.3 + index * 0.15}s`,
                    }}
                  />
                )}

                <div
                  className="flex items-start gap-4 p-4 rounded-2xl mb-2 cursor-default"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(40px)",
                    transition: `opacity 0.6s ease ${0.2 + index * 0.15}s, transform 0.6s ease ${0.2 + index * 0.15}s`,
                  }}
                >
                  {/* Number circle */}
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0 z-10"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)`,
                      boxShadow: `0 4px 12px ${step.color}40`,
                    }}
                  >
                    {step.num}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3
                        className="text-base font-bold"
                        style={{ color: "#1E293B" }}
                      >
                        {step.title}
                      </h3>
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: step.bg }}
                      >
                        <step.icon size={14} style={{ color: step.color }} />
                      </div>
                    </div>
                    <p
                      className="text-sm leading-relaxed"
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

        {/* Bottom stat cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {statCards.map((stat, index) => (
            <div
              key={stat.label}
              data-ocid={`creditscore.card.${index + 1}`}
              className="relative rounded-2xl p-6 overflow-hidden group cursor-default"
              style={{
                background: "#0F172A",
                borderLeft: "4px solid #2563EB",
                boxShadow: "0 8px 32px rgba(15,23,42,0.15)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.7s ease ${0.5 + index * 0.12}s, transform 0.7s ease ${0.5 + index * 0.12}s`,
              }}
            >
              {/* Glow decoration */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)",
                  transform: "translate(30%, -30%)",
                }}
              />

              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(37,99,235,0.15)" }}
              >
                <stat.icon size={18} style={{ color: "#FF6A00" }} />
              </div>

              <div
                className="text-3xl font-black mb-1"
                style={{ color: "#FF6A00" }}
              >
                {stat.value}
              </div>
              <div className="text-base font-bold text-white mb-1">
                {stat.label}
              </div>
              <div
                className="text-xs leading-snug"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {stat.sub}
              </div>

              {/* Hover border overlay */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ border: "1px solid rgba(37,99,235,0.4)" }}
              />
            </div>
          ))}
        </div>

        {/* Trust row */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 0.9s, transform 0.7s ease 0.9s",
          }}
        >
          {[
            { text: "RBI Registered NBFC" },
            { text: "ISO 27001 Certified" },
            { text: "Bank-Grade 256-bit Encryption" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <CheckCircle size={16} style={{ color: "#22C55E" }} />
              <span
                className="text-sm font-medium"
                style={{ color: "rgba(30,41,59,0.65)" }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
