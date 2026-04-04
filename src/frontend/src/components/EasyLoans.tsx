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
  },
  {
    icon: "⚙️",
    name: "Ramesh – Worker",
    quote: "Got ₹3,000 when I needed it most. Bad CIBIL, still approved!",
    tag: "Factory Worker",
    color: "from-blue-700 to-indigo-700",
  },
  {
    icon: "🏪",
    name: "Priya – Business Owner",
    quote: "No credit score? No problem. Got ₹5,000 same day!",
    tag: "Small Business",
    color: "from-emerald-500 to-teal-600",
  },
];

const cibilSteps = [
  {
    icon: "😟",
    text: "Low or No CIBIL Score? Don't worry",
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

// Per-step active colors: blue → orange → orange-warm → green
const stepColors = ["#2563EB", "#FF6A00", "#FF9500", "#22C55E"];

const trustBadges = [
  { icon: "⚡", text: "Instant Approval" },
  { icon: "📄", text: "No Paperwork" },
  { icon: "🌏", text: "Anywhere in India" },
];

const floatingIcons = [
  {
    icon: "📱",
    id: "fi-phone",
    style: { top: "8%", left: "5%", animationDelay: "0s" },
  },
  {
    icon: "💰",
    id: "fi-money",
    style: { top: "15%", right: "7%", animationDelay: "1.2s" },
  },
  {
    icon: "✓",
    id: "fi-check",
    style: { bottom: "20%", left: "3%", animationDelay: "0.7s" },
  },
  {
    icon: "🏆",
    id: "fi-trophy",
    style: { bottom: "10%", right: "4%", animationDelay: "1.8s" },
  },
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
  const [lineWidth, setLineWidth] = useState(0);
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
      { threshold: 0.15 },
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
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(6deg); }
        }
        @keyframes float-badge {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes cta-glow {
          0%, 100% { box-shadow: 0 4px 20px rgba(255, 106, 0, 0.35); }
          50% { box-shadow: 0 4px 36px rgba(255, 106, 0, 0.7), 0 0 0 6px rgba(37, 99, 235, 0.15); }
        }
        @keyframes number-pop {
          0% { transform: scale(0.85); opacity: 0; }
          60% { transform: scale(1.06); }
          100% { transform: scale(1); opacity: 1; }
        }
        .trust-badge-anim {
          animation: float-badge 3s ease-in-out infinite;
        }
        .trust-badge-anim:nth-child(2) { animation-delay: 0.6s; }
        .trust-badge-anim:nth-child(3) { animation-delay: 1.2s; }
        .float-icon {
          animation: float-slow 5s ease-in-out infinite;
          user-select: none;
          pointer-events: none;
        }
        .cta-btn-easy {
          animation: cta-glow 2.5s ease-in-out infinite;
          transition: transform 0.2s ease;
        }
        .cta-btn-easy:hover {
          transform: scale(1.06);
          box-shadow: 0 8px 36px rgba(255, 106, 0, 0.55);
          animation: none;
        }
        .number-count-easy {
          font-variant-numeric: tabular-nums;
          animation: number-pop 0.5s ease forwards;
        }
      `}</style>

      <section
        id="easy-loans"
        data-ocid="easy_loans.section"
        ref={sectionRef}
        className="relative overflow-hidden py-24 lg:py-32"
        style={{
          background: "linear-gradient(135deg, #f0f9ff 0%, #f0fdf4 100%)",
        }}
      >
        {floatingIcons.map(({ icon, id, style }) => (
          <span
            key={id}
            className="float-icon absolute text-4xl select-none"
            style={{ ...style, opacity: 0.08 } as React.CSSProperties}
          >
            {icon}
          </span>
        ))}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div
            className="text-center mb-16"
            style={{
              opacity: sectionVisible ? 1 : 0,
              transform: sectionVisible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
              style={{ background: "#EFF6FF", color: "#2563EB" }}
            >
              Easy Loans
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight"
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
              className="mt-5 text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: "rgba(30, 41, 59, 0.7)" }}
            >
              No CIBIL? Bad CIBIL? Zero credit history? We don't care. Up to
              ₹5,000 instantly for every Indian.
            </p>
            {/* USP pill */}
            <div
              className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full text-sm font-bold"
              style={{
                background: "linear-gradient(135deg, #22C55E22, #2563EB22)",
                border: "1.5px solid #22C55E55",
                color: "#166534",
              }}
            >
              ✅ No CIBIL Required  ·  Bad Credit Welcome  ·  Max ₹5,000
            </div>
          </div>

          {/* Persona Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {personas.map((persona, i) => (
              <div
                key={persona.name}
                data-ocid={`easy_loans.item.${i + 1}`}
                className="bg-white rounded-2xl p-6 shadow-lg overflow-hidden relative group"
                style={{
                  opacity: sectionVisible ? 1 : 0,
                  transform: sectionVisible
                    ? "translateY(0)"
                    : "translateY(40px)",
                  transition: `opacity 0.7s ease ${i * 120}ms, transform 0.7s ease ${i * 120}ms`,
                  boxShadow:
                    "0 4px 24px rgba(37, 99, 235, 0.1), 0 1px 4px rgba(0,0,0,0.06)",
                }}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${persona.color}`}
                />
                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: "linear-gradient(135deg, #EFF6FF, #f0fdf4)",
                    }}
                  >
                    {persona.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-0.5">
                      {persona.tag}
                    </p>
                    <h3
                      className="font-bold text-base"
                      style={{ color: "#1E293B" }}
                    >
                      {persona.name}
                    </h3>
                    <p
                      className="text-sm mt-1 leading-snug"
                      style={{ color: "rgba(30, 41, 59, 0.7)" }}
                    >
                      "{persona.quote}"
                    </p>
                  </div>
                </div>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, #2563EB, #22C55E)",
                  }}
                />
              </div>
            ))}
          </div>

          {/* CIBIL Journey */}
          <div
            className="mb-20"
            style={{
              opacity: sectionVisible ? 1 : 0,
              transform: sectionVisible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.8s ease 200ms, transform 0.8s ease 200ms",
            }}
          >
            <h3
              className="text-center text-xl font-bold mb-8"
              style={{ color: "#1E293B" }}
            >
              Even with Low or Zero CIBIL Score — We Always Say Yes!
            </h3>
            <div className="relative">
              <div
                className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5"
                style={{
                  background:
                    "linear-gradient(90deg, #ef4444, #2563EB, #22C55E, #f59e0b)",
                  clipPath: `inset(0 ${100 - lineWidth}% 0 0)`,
                  transition: "clip-path 1.5s ease",
                }}
              />
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {cibilSteps.map((step, i) => (
                  <div
                    key={step.id}
                    className="flex flex-col items-center text-center gap-3"
                    style={{
                      opacity: sectionVisible ? 1 : 0,
                      transform: sectionVisible
                        ? "translateY(0)"
                        : "translateY(20px)",
                      transition: `opacity 0.6s ease ${300 + i * 180}ms, transform 0.6s ease ${300 + i * 180}ms`,
                    }}
                  >
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-md"
                      style={{
                        background: `linear-gradient(135deg, ${step.badgeBg}, white)`,
                        border: `2px solid ${step.badgeColor}22`,
                      }}
                    >
                      {step.icon}
                    </div>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{
                        color: step.badgeColor,
                        background: step.badgeBg,
                        border: `1px solid ${step.badgeColor}33`,
                      }}
                    >
                      {step.badge}
                    </span>
                    <p
                      className="text-sm font-medium leading-snug max-w-[140px]"
                      style={{ color: "rgba(30, 41, 59, 0.8)" }}
                    >
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gamified Progress */}
          <div
            className="rounded-3xl p-8 lg:p-10 mb-20 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0f172a 0%, #0c1f35 100%)",
              boxShadow: "0 20px 60px rgba(37, 99, 235, 0.2)",
              opacity: sectionVisible ? 1 : 0,
              transform: sectionVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.9s ease 400ms, transform 0.9s ease 400ms",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.15) 0%, transparent 70%)",
              }}
            />
            <div className="relative">
              <div className="text-center mb-8">
                <span
                  className="inline-block text-xs font-bold tracking-widest uppercase mb-3 px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(37,99,235,0.15)",
                    color: "#93C5FD",
                  }}
                >
                  🎮 Loan Growth Game
                </span>
                <h3 className="text-2xl lg:text-3xl font-black text-white">
                  Level Up Your Loan Limit!
                </h3>
                <p className="text-slate-400 mt-2 text-sm">
                  Start at ₹1,000. Repay on time and unlock up to ₹5,000. No
                  CIBIL required at any level.
                </p>
              </div>

              <div className="mb-8">
                <div
                  className="w-full h-3 rounded-full mb-2"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                >
                  <div
                    className="h-3 rounded-full"
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

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {loanSteps.map((step, i) => {
                  const isActive = i === activeStep;
                  const isDone = i < activeStep;
                  const activeColor = stepColors[i];
                  return (
                    <button
                      key={step.id}
                      type="button"
                      data-ocid={`easy_loans.item.${i + 4}`}
                      className="rounded-2xl p-4 text-left transition-all duration-300 cursor-pointer"
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
                      }}
                      onClick={() => setActiveStep(i)}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">{step.icon}</span>
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
                        className="text-sm font-medium leading-snug"
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
                <p className="text-slate-400 text-sm mb-1">
                  Current Loan Limit
                </p>
                <div
                  key={activeStep}
                  className="number-count-easy text-5xl lg:text-6xl font-black"
                  style={{
                    background: "linear-gradient(135deg, #2563EB, #22C55E)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {formatAmount(displayCount)}
                </div>
                <p className="text-slate-500 text-xs mt-2">
                  Max limit: ₹5,000 · Keep repaying on time to unlock more
                </p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
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
                className="trust-badge-anim flex items-center gap-3 rounded-full px-6 py-3 text-white font-semibold text-sm"
                style={{
                  background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                  boxShadow:
                    "0 4px 20px rgba(37, 99, 235, 0.3), 0 0 0 1px rgba(37,99,235,0.2)",
                }}
              >
                <span className="text-xl">{badge.icon}</span>
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
              className="mb-6 text-base"
              style={{ color: "rgba(30, 41, 59, 0.7)" }}
            >
              Join <strong style={{ color: "#1E293B" }}>2 lakh+</strong> Indians
              who already trust Rocket.Money
            </p>
            <button
              type="button"
              data-ocid="easy_loans.primary_button"
              className="cta-btn-easy inline-flex items-center gap-3 rounded-full px-10 py-4 text-white font-bold text-lg"
              style={{
                background: "linear-gradient(135deg, #FF6A00, #FF8C2E)",
              }}
              onClick={onApplyNow}
            >
              <span>Apply Now — No CIBIL Needed</span>
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center text-sm"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                →
              </span>
            </button>
            <p className="text-xs text-slate-400 mt-4">
              ✓ No CIBIL check &nbsp;·&nbsp; ✓ Bad credit welcome &nbsp;·&nbsp;
              ✓ Max ₹5,000 loan
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
