import { useEffect, useRef, useState } from "react";

interface EasyLoansProps {
  onApplyNow: () => void;
}

const personas = [
  {
    icon: "📚",
    name: "Riya – Student",
    quote: "First loan ₹1,000 approved in minutes. No CIBIL needed!",
    tag: "Student",
    color: "from-blue-600 to-blue-700",
    image: "/assets/generated/persona-student.dim_600x400.jpg",
  },
  {
    icon: "⚙️",
    name: "Arjun – Gig Worker",
    quote: "Got ₹3,000 when I needed it most. Low CIBIL, still approved!",
    tag: "Gig Worker",
    color: "from-blue-700 to-indigo-700",
    image: "/assets/generated/persona-gig-worker.dim_600x400.jpg",
  },
  {
    icon: "🏪",
    name: "Priya – Shop Owner",
    quote: "No credit score? No problem. Got ₹5,000 same day!",
    tag: "Small Business",
    color: "from-emerald-500 to-teal-600",
    image: "/assets/generated/persona-shopowner.dim_600x400.jpg",
  },
];

const cibilSteps = [
  {
    icon: "😟",
    text: "Low or No CIBIL? Don't worry",
    badge: "Any Credit Score",
    badgeColor: "#ef4444",
    badgeBg: "#fef2f2",
    id: "cibil-worried",
  },
  {
    icon: "📱",
    text: "Apply with Rocket.Money",
    badge: "Easy Apply",
    badgeColor: "#2563EB",
    badgeBg: "#EFF6FF",
    id: "cibil-apply",
  },
  {
    icon: "✅",
    text: "Instant Approval — Everyone Welcome",
    badge: "Approved!",
    badgeColor: "#22C55E",
    badgeBg: "#f0fdf4",
    id: "cibil-approved",
  },
  {
    icon: "😊",
    text: "Happy Customer!",
    badge: "Success",
    badgeColor: "#f59e0b",
    badgeBg: "#fffbeb",
    id: "cibil-happy",
  },
];

const loanSteps = [
  {
    label: "Start with ₹1,000 loan",
    level: "Level 1",
    icon: "🌱",
    amount: 1000,
    id: "step-start",
  },
  {
    label: "Repay on time",
    level: "Level 2",
    icon: "⏱️",
    amount: 2000,
    id: "step-repay",
  },
  {
    label: "Unlock ₹3,000 limit",
    level: "Level 3",
    icon: "🔓",
    amount: 3000,
    id: "step-unlock",
  },
  {
    label: "Max ₹5,000 — Yours!",
    level: "Level 4",
    icon: "🚀",
    amount: 5000,
    id: "step-grow",
  },
];

const stepColors = ["#2563EB", "#FF6A00", "#FF9500", "#22C55E"];

const trustBadges = [
  { icon: "⚡", text: "Instant Approval" },
  { icon: "📄", text: "No Paperwork" },
  { icon: "🌏", text: "Anywhere in India" },
];

function useCountUp(target: number, duration = 1000, active = false) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    const start = Date.now();
    function tick() {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(target * eased));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    }
    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, duration, active]);

  return count;
}

export default function EasyLoans({ onApplyNow }: EasyLoansProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [progressWidth, setProgressWidth] = useState(25);
  const [_lineWidth, setLineWidth] = useState(0);
  const stepIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentAmount = loanSteps[activeStep].amount;
  const displayCount = useCountUp(currentAmount, 800, sectionVisible);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!sectionVisible) return;
    let progress = 0;
    const id = setInterval(() => {
      progress += 4;
      setLineWidth(Math.min(progress, 100));
      if (progress >= 100) clearInterval(id);
    }, 20);
    return () => clearInterval(id);
  }, [sectionVisible]);

  useEffect(() => {
    if (!sectionVisible) return;
    if (stepIntervalRef.current) clearInterval(stepIntervalRef.current);
    stepIntervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % loanSteps.length);
    }, 1500);
    return () => {
      if (stepIntervalRef.current) clearInterval(stepIntervalRef.current);
    };
  }, [sectionVisible]);

  useEffect(() => {
    setProgressWidth(((activeStep + 1) / loanSteps.length) * 100);
  }, [activeStep]);

  const formatAmount = (n: number) => `₹${n.toLocaleString("en-IN")}`;

  return (
    <>
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes cta-glow {
          0%, 100% { box-shadow: 0 4px 20px rgba(255, 106, 0, 0.35); }
          50% { box-shadow: 0 4px 32px rgba(255, 106, 0, 0.65); }
        }
        @keyframes number-pop {
          0% { transform: scale(0.85); opacity: 0; }
          60% { transform: scale(1.06); }
          100% { transform: scale(1); opacity: 1; }
        }
        .cta-btn-easy {
          animation: cta-glow 2.5s ease-in-out infinite;
          transition: transform 0.2s ease;
        }
        .cta-btn-easy:hover {
          transform: scale(1.04);
          animation: none;
        }
        .number-count-easy {
          font-variant-numeric: tabular-nums;
          animation: number-pop 0.5s ease forwards;
        }
        .persona-card-img {
          width: 100%;
          height: 120px;
          object-fit: cover;
          object-position: top center;
          border-radius: 12px;
          display: block;
        }
      `}</style>

      <section
        id="easy-loans"
        data-ocid="easy_loans.section"
        ref={sectionRef}
        className="relative overflow-hidden py-12 sm:py-16 lg:py-24"
        style={{
          background: "linear-gradient(135deg, #f0f9ff 0%, #f0fdf4 100%)",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div
            className="text-center mb-10 sm:mb-14"
            style={{
              opacity: sectionVisible ? 1 : 0,
              transform: sectionVisible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase mb-3 px-4 py-1.5 rounded-full"
              style={{ background: "#EFF6FF", color: "#2563EB" }}
            >
              Easy Loans
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Easy Loans for Every Indian,{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #2563EB, #22C55E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Any Credit Score!
              </span>
            </h2>
            <p
              className="mt-3 text-sm sm:text-base max-w-xl mx-auto leading-relaxed px-2"
              style={{ color: "rgba(30, 41, 59, 0.7)" }}
            >
              No CIBIL? Low CIBIL? Zero credit history? We don't care. Up to
              ₹5,000 instantly for every Indian.
            </p>
            <div
              className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full text-xs font-bold"
              style={{
                background: "linear-gradient(135deg, #22C55E22, #2563EB22)",
                border: "1.5px solid #22C55E55",
                color: "#166534",
              }}
            >
              ✅ No CIBIL · Low Credit Welcome · Max ₹5,000
            </div>
          </div>

          {/* Persona Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 sm:mb-16">
            {personas.map((persona, i) => (
              <div
                key={persona.name}
                data-ocid={`easy_loans.item.${i + 1}`}
                className="bg-white rounded-2xl overflow-hidden relative group shadow-lg"
                style={{
                  opacity: sectionVisible ? 1 : 0,
                  transform: sectionVisible
                    ? "translateY(0)"
                    : "translateY(40px)",
                  transition: `opacity 0.7s ease ${i * 120}ms, transform 0.7s ease ${i * 120}ms`,
                  boxShadow: "0 4px 20px rgba(37, 99, 235, 0.08)",
                }}
              >
                {/* Top gradient accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${persona.color} z-10`}
                />

                {/* Persona Image — full width, top of card */}
                <div
                  className="w-full overflow-hidden"
                  style={{ height: "120px" }}
                >
                  <img
                    src={persona.image}
                    alt={persona.name}
                    className="persona-card-img"
                    loading="lazy"
                  />
                </div>

                {/* Card body */}
                <div className="p-4 sm:p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-0.5">
                    {persona.tag}
                  </p>
                  <h3
                    className="font-bold text-sm mb-1"
                    style={{ color: "#1E293B" }}
                  >
                    {persona.name}
                  </h3>
                  <p
                    className="text-xs leading-snug"
                    style={{ color: "rgba(30, 41, 59, 0.7)" }}
                  >
                    "{persona.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CIBIL Journey */}
          <div
            className="mb-12 sm:mb-16"
            style={{
              opacity: sectionVisible ? 1 : 0,
              transform: sectionVisible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.8s ease 200ms, transform 0.8s ease 200ms",
            }}
          >
            <h3
              className="text-center text-base sm:text-lg font-bold mb-6"
              style={{ color: "#1E293B" }}
            >
              Even with Low or Zero CIBIL Score — We Always Say Yes!
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {cibilSteps.map((step, i) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center text-center gap-2"
                  style={{
                    opacity: sectionVisible ? 1 : 0,
                    transform: sectionVisible
                      ? "translateY(0)"
                      : "translateY(20px)",
                    transition: `opacity 0.6s ease ${300 + i * 150}ms, transform 0.6s ease ${300 + i * 150}ms`,
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-sm"
                    style={{
                      background: `linear-gradient(135deg, ${step.badgeBg}, white)`,
                      border: `2px solid ${step.badgeColor}22`,
                    }}
                  >
                    {step.icon}
                  </div>
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{
                      color: step.badgeColor,
                      background: step.badgeBg,
                      border: `1px solid ${step.badgeColor}33`,
                    }}
                  >
                    {step.badge}
                  </span>
                  <p
                    className="text-xs font-medium leading-snug max-w-[120px]"
                    style={{ color: "rgba(30, 41, 59, 0.8)" }}
                  >
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Gamified Progress */}
          <div
            className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 mb-10 sm:mb-14 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0f172a 0%, #0c1f35 100%)",
              boxShadow: "0 16px 48px rgba(37, 99, 235, 0.2)",
              opacity: sectionVisible ? 1 : 0,
              transform: sectionVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.9s ease 400ms, transform 0.9s ease 400ms",
            }}
          >
            <div className="relative">
              <div className="text-center mb-6">
                <span
                  className="inline-block text-xs font-bold tracking-widest uppercase mb-2 px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(37,99,235,0.15)",
                    color: "#93C5FD",
                  }}
                >
                  🎮 Loan Growth Game
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Level Up Your Loan Limit!
                </h3>
                <p className="text-slate-400 mt-1 text-xs sm:text-sm px-2">
                  Start at ₹1,000. Repay on time and unlock up to ₹5,000.
                </p>
              </div>

              <div className="mb-6">
                <div
                  className="w-full h-2.5 rounded-full mb-1.5"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                >
                  <div
                    className="h-2.5 rounded-full"
                    style={{
                      width: `${progressWidth}%`,
                      background:
                        "linear-gradient(90deg, #2563EB 0%, #FF6A00 50%, #22C55E 100%)",
                      transition:
                        "width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      boxShadow: "0 0 12px rgba(34, 197, 94, 0.5)",
                    }}
                  />
                </div>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>₹1,000</span>
                  <span>₹5,000 (Max)</span>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-8">
                {loanSteps.map((step, i) => {
                  const isActive = i === activeStep;
                  const isDone = i < activeStep;
                  const activeColor = stepColors[i];
                  return (
                    <button
                      key={step.id}
                      type="button"
                      data-ocid={`easy_loans.item.${i + 4}`}
                      className="rounded-xl p-3 sm:p-4 text-left transition-all duration-300"
                      style={{
                        background: isActive
                          ? `rgba(${Number.parseInt(activeColor.slice(1, 3), 16)},${Number.parseInt(activeColor.slice(3, 5), 16)},${Number.parseInt(activeColor.slice(5, 7), 16)},0.22)`
                          : isDone
                            ? "rgba(34,197,94,0.1)"
                            : "rgba(255,255,255,0.04)",
                        border: isActive
                          ? `1.5px solid ${activeColor}99`
                          : isDone
                            ? "1.5px solid rgba(34,197,94,0.3)"
                            : "1.5px solid rgba(255,255,255,0.07)",
                        minHeight: "44px",
                      }}
                      onClick={() => setActiveStep(i)}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-base sm:text-lg">
                          {step.icon}
                        </span>
                        <span
                          className="text-xs font-bold uppercase tracking-wider"
                          style={{
                            color: isActive
                              ? activeColor
                              : isDone
                                ? "#34d399"
                                : "#64748b",
                          }}
                        >
                          {step.level}
                        </span>
                        {isDone && (
                          <span className="ml-auto text-emerald-400 text-xs">
                            ✓
                          </span>
                        )}
                      </div>
                      <p
                        className="text-xs font-medium leading-snug"
                        style={{
                          color: isActive
                            ? "#f0f9ff"
                            : isDone
                              ? "#94a3b8"
                              : "#475569",
                        }}
                      >
                        {step.label}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="text-center">
                <p className="text-slate-400 text-xs mb-1">
                  Current Loan Limit
                </p>
                <div
                  key={activeStep}
                  className="number-count-easy text-4xl sm:text-5xl font-black"
                  style={{
                    background: "linear-gradient(135deg, #2563EB, #22C55E)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {formatAmount(displayCount)}
                </div>
                <p className="text-slate-500 text-xs mt-1">
                  Max: ₹5,000 · Repay on time to unlock more
                </p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 sm:mb-12"
            style={{
              opacity: sectionVisible ? 1 : 0,
              transform: sectionVisible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.8s ease 600ms, transform 0.8s ease 600ms",
            }}
          >
            {trustBadges.map((badge, i) => (
              <div
                key={badge.text}
                data-ocid={`easy_loans.item.${i + 8}`}
                className="flex items-center gap-2 rounded-full px-5 py-2.5 text-white font-semibold text-sm w-full sm:w-auto justify-center"
                style={{
                  background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                  boxShadow: "0 4px 16px rgba(37, 99, 235, 0.25)",
                  minHeight: "44px",
                }}
              >
                <span className="text-lg">{badge.icon}</span>
                <span>{badge.text}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="text-center"
            style={{
              opacity: sectionVisible ? 1 : 0,
              transform: sectionVisible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.8s ease 700ms, transform 0.8s ease 700ms",
            }}
          >
            <p
              className="mb-4 text-sm"
              style={{ color: "rgba(30, 41, 59, 0.7)" }}
            >
              Join <strong style={{ color: "#1E293B" }}>2 lakh+</strong> Indians
              who already trust Rocket.Money
            </p>
            <button
              type="button"
              data-ocid="easy_loans.primary_button"
              className="cta-btn-easy inline-flex items-center justify-center gap-2 rounded-full px-8 sm:px-10 py-3.5 sm:py-4 text-white font-bold text-sm sm:text-base w-full sm:w-auto"
              style={{
                background: "linear-gradient(135deg, #FF6A00, #FF8C2E)",
                minHeight: "52px",
              }}
              onClick={onApplyNow}
            >
              Apply Now — No CIBIL Needed
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                →
              </span>
            </button>
            <p className="text-xs text-slate-400 mt-3">
              ✓ No CIBIL check &nbsp;·&nbsp; ✓ Low credit welcome &nbsp;·&nbsp;
              ✓ Max ₹5,000 loan
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
