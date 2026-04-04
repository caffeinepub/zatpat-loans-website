import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Floating persona badge overlay data
const PERSONA_BADGES = [
  {
    id: "student",
    label: "Savita — Student",
    sub: "₹2,500 approved in 4 min",
    color: "#2563EB",
    bg: "rgba(37,99,235,0.1)",
    border: "rgba(37,99,235,0.35)",
    dot: "#60A5FA",
    x: "left",
    delay: 0.8,
  },
  {
    id: "gig",
    label: "Ramesh — Delivery Worker",
    sub: "₹5,000 approved instantly",
    color: "#FF6A00",
    bg: "rgba(255,106,0,0.1)",
    border: "rgba(255,106,0,0.35)",
    dot: "#FBBF24",
    x: "center",
    delay: 1.1,
  },
  {
    id: "shop",
    label: "Kamla — Kirana Owner",
    sub: "₹4,000 approved, no CIBIL",
    color: "#22C55E",
    bg: "rgba(34,197,94,0.1)",
    border: "rgba(34,197,94,0.35)",
    dot: "#86EFAC",
    x: "right",
    delay: 1.4,
  },
];

const FLOAT_PARTICLES = [
  {
    top: "8%",
    left: "6%",
    size: 7,
    color: "#2563EB",
    delay: "0s",
    dur: "3.4s",
  },
  {
    top: "15%",
    left: "82%",
    size: 5,
    color: "#FF6A00",
    delay: "0.7s",
    dur: "4s",
  },
  {
    top: "72%",
    left: "4%",
    size: 5,
    color: "#22C55E",
    delay: "1.2s",
    dur: "3.8s",
  },
  {
    top: "80%",
    left: "88%",
    size: 6,
    color: "#FBBF24",
    delay: "0.4s",
    dur: "5s",
  },
  {
    top: "40%",
    left: "92%",
    size: 4,
    color: "#2563EB",
    delay: "1.8s",
    dur: "4.2s",
  },
  {
    top: "55%",
    left: "2%",
    size: 4,
    color: "#FF6A00",
    delay: "2.3s",
    dur: "3.6s",
  },
];

const STATS = [
  {
    value: 50000,
    display: "50,000+",
    label: "Loans Approved",
    color: "#2563EB",
    suffix: "+",
  },
  {
    value: 5,
    display: "< 5 Min",
    label: "Average Approval",
    color: "#FF6A00",
    prefix: "< ",
    suffix: " Min",
  },
  {
    value: 0,
    display: "0 CIBIL",
    label: "Minimum Score",
    color: "#22C55E",
    suffix: " CIBIL",
  },
  {
    value: 5000,
    display: "₹5,000",
    label: "Max Loan Amount",
    color: "#2563EB",
    prefix: "₹",
    suffix: ",000",
  },
];

const PERSONA_CONFIGS = [
  {
    id: "student",
    name: "Savita",
    role: "Student",
    emoji: "📚",
    circleColor: "#2563EB",
    circleBg: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
    glowColor: "rgba(37,99,235,0.35)",
    approvalText: "✅ Approved ₹2,500",
    approvalColor: "#2563EB",
    floatDelay: "0s",
    entranceDelay: 0.4,
  },
  {
    id: "gig",
    name: "Ramesh",
    role: "Gig Worker",
    emoji: "🛵",
    circleColor: "#FF6A00",
    circleBg: "linear-gradient(135deg, #FF6A00 0%, #EA580C 100%)",
    glowColor: "rgba(255,106,0,0.35)",
    approvalText: "✅ Approved ₹5,000",
    approvalColor: "#FF6A00",
    floatDelay: "1.4s",
    entranceDelay: 0.55,
  },
  {
    id: "shop",
    name: "Kamla",
    role: "Shop Owner",
    emoji: "🏪",
    circleColor: "#22C55E",
    circleBg: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
    glowColor: "rgba(34,197,94,0.35)",
    approvalText: "✅ Approved ₹4,000",
    approvalColor: "#22C55E",
    floatDelay: "2.8s",
    entranceDelay: 0.7,
  },
];

function useCountUp(target: number, inView: boolean, delay = 0) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => {
      const steps = 40;
      const increment = target / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, 35);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [inView, target, delay]);
  return count;
}

function StatCard({
  stat,
  inView,
  index,
}: { stat: (typeof STATS)[0]; inView: boolean; index: number }) {
  const count = useCountUp(stat.value, inView, 1800 + index * 150);

  let displayVal = stat.display;
  if (inView && stat.value > 0) {
    if (stat.value === 50000) displayVal = `${count.toLocaleString("en-IN")}+`;
    else if (stat.value === 5) displayVal = `< ${count} Min`;
    else if (stat.value === 5000)
      displayVal = `₹${count.toLocaleString("en-IN")}`;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{
        delay: 1.8 + index * 0.12,
        duration: 0.5,
        type: "spring",
        bounce: 0.35,
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="flex flex-col items-center px-4 py-3 rounded-2xl min-w-[110px] cursor-default"
      style={{
        background: "rgba(255,255,255,0.95)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        border: "1px solid rgba(0,0,0,0.07)",
      }}
    >
      <span
        className="text-lg sm:text-2xl font-black"
        style={{ color: stat.color }}
      >
        {displayVal}
      </span>
      <span
        className="text-[11px] sm:text-xs font-medium text-center"
        style={{ color: "#64748B" }}
      >
        {stat.label}
      </span>
    </motion.div>
  );
}

// Animated SVG illustration panel
function PersonaIllustration({ inView }: { inView: boolean }) {
  return (
    <div
      className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden illustr-float"
      style={{
        background:
          "linear-gradient(135deg, #F0F7FF 0%, #EEF2FF 60%, #F0FFF4 100%)",
        boxShadow:
          "0 32px 80px rgba(37,99,235,0.14), 0 8px 32px rgba(0,0,0,0.08), 0 0 0 1px rgba(37,99,235,0.12)",
        aspectRatio: "7/3",
        minHeight: 220,
      }}
    >
      {/* Decorative background elements */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(37,99,235,0.10) 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(37,99,235,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Connection line between personas (decorative) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 700 300"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        {/* Dashed connector line */}
        <line
          x1="175"
          y1="150"
          x2="350"
          y2="150"
          stroke="rgba(37,99,235,0.2)"
          strokeWidth="2"
          strokeDasharray="6 4"
          style={{
            strokeDashoffset: inView ? 0 : 200,
            transition: "stroke-dashoffset 1.4s ease 0.8s",
          }}
        />
        <line
          x1="350"
          y1="150"
          x2="525"
          y2="150"
          stroke="rgba(255,106,0,0.2)"
          strokeWidth="2"
          strokeDasharray="6 4"
          style={{
            strokeDashoffset: inView ? 0 : 200,
            transition: "stroke-dashoffset 1.4s ease 1.0s",
          }}
        />
        {/* Sparkle stars */}
        <text
          x="80"
          y="60"
          fontSize="16"
          style={{ animation: "star-twinkle 2.2s ease-in-out infinite" }}
        >
          ✦
        </text>
        <text
          x="600"
          y="80"
          fontSize="12"
          style={{ animation: "star-twinkle 3s ease-in-out infinite 0.8s" }}
        >
          ✦
        </text>
        <text
          x="320"
          y="40"
          fontSize="10"
          style={{ animation: "star-twinkle 2.6s ease-in-out infinite 1.2s" }}
        >
          ✦
        </text>
        <text
          x="140"
          y="240"
          fontSize="10"
          style={{ animation: "star-twinkle 3.4s ease-in-out infinite 0.4s" }}
        >
          ✦
        </text>
        <text
          x="520"
          y="240"
          fontSize="14"
          style={{ animation: "star-twinkle 2.8s ease-in-out infinite 1.6s" }}
        >
          ✦
        </text>
        {/* Rupee coins */}
        <text
          x="30"
          y="160"
          fontSize="20"
          opacity="0.35"
          style={{ animation: "coin-float 4s ease-in-out infinite" }}
        >
          ₹
        </text>
        <text
          x="650"
          y="140"
          fontSize="18"
          opacity="0.35"
          style={{ animation: "coin-float 5s ease-in-out infinite 1s" }}
        >
          ₹
        </text>
        <text
          x="340"
          y="270"
          fontSize="16"
          opacity="0.25"
          style={{ animation: "coin-float 3.8s ease-in-out infinite 2s" }}
        >
          ₹
        </text>
      </svg>

      {/* Three persona characters */}
      <div className="absolute inset-0 flex items-center justify-around px-4 sm:px-8 md:px-12">
        {PERSONA_CONFIGS.map((persona, i) => (
          <motion.div
            key={persona.id}
            initial={{ opacity: 0, y: 30, scale: 0.85 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              delay: persona.entranceDelay,
              duration: 0.65,
              type: "spring",
              bounce: 0.4,
            }}
            className="flex flex-col items-center gap-1 sm:gap-2"
            style={{
              animation: inView
                ? `persona-float 4.5s ease-in-out infinite ${persona.floatDelay}`
                : "none",
            }}
          >
            {/* Approval badge floating above */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.8 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                delay: persona.entranceDelay + 0.4,
                duration: 0.5,
                type: "spring",
                bounce: 0.5,
              }}
              className="flex items-center gap-1 px-2 py-1 rounded-full text-[9px] sm:text-[11px] font-bold whitespace-nowrap"
              style={{
                background: "rgba(255,255,255,0.97)",
                border: `1.5px solid ${persona.approvalColor}40`,
                boxShadow: `0 4px 16px ${persona.approvalColor}30`,
                color: persona.approvalColor,
                marginBottom: 2,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{
                  background: persona.approvalColor,
                  boxShadow: `0 0 6px ${persona.approvalColor}`,
                }}
              />
              {persona.approvalText}
            </motion.div>

            {/* Avatar circle */}
            <div
              className="relative flex items-center justify-center rounded-full"
              style={{
                width: "clamp(52px, 9vw, 88px)",
                height: "clamp(52px, 9vw, 88px)",
                background: persona.circleBg,
                boxShadow: `0 8px 28px ${persona.glowColor}, 0 0 0 4px ${persona.circleColor}20`,
                fontSize: "clamp(22px, 4vw, 38px)",
              }}
            >
              {/* Pulse ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: `2px solid ${persona.circleColor}`,
                  animation: inView
                    ? `avatar-ring-pulse 2.4s ease-out infinite ${(i * 0.6).toString()}s`
                    : "none",
                }}
              />
              <span role="img" aria-label={persona.role}>
                {persona.emoji}
              </span>
            </div>

            {/* Name + role */}
            <div className="flex flex-col items-center">
              <span
                className="font-black text-[11px] sm:text-sm leading-tight"
                style={{ color: "#1E293B" }}
              >
                {persona.name}
              </span>
              <span
                className="text-[9px] sm:text-[11px] font-semibold"
                style={{ color: persona.circleColor }}
              >
                {persona.role}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom tag line */}
      <div
        className="absolute bottom-2 sm:bottom-3 left-0 right-0 flex items-center justify-center"
        style={{ pointerEvents: "none" }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "rgba(255,255,255,0.85)",
            color: "#64748B",
            border: "1px solid rgba(37,99,235,0.15)",
          }}
        >
          🇮🇳 Real borrowers. Real approvals. No CIBIL needed.
        </motion.span>
      </div>
    </div>
  );
}

export default function BannerIllustration() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-10 sm:py-20"
      style={{
        background:
          "linear-gradient(160deg, #F0F7FF 0%, #EEF2FF 50%, #F0FDF4 100%)",
      }}
    >
      <style>{`
        @keyframes illustr-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes persona-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes avatar-ring-pulse {
          0% { transform: scale(1); opacity: 0.7; }
          70% { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }
        @keyframes illustr-particle {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.65; }
          50% { transform: translateY(-12px) scale(1.25); opacity: 1; }
        }
        @keyframes star-twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.9); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        @keyframes coin-float {
          0%, 100% { transform: translateY(0px) rotate(-5deg); }
          50% { transform: translateY(-8px) rotate(5deg); }
        }
        @keyframes badge-glow {
          0%, 100% { box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
          50% { box-shadow: 0 8px 40px rgba(37,99,235,0.18); }
        }
        @keyframes approval-ping {
          0% { transform: scale(1); opacity: 1; }
          70% { transform: scale(2.2); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }
        .illustr-float {
          animation: illustr-float 5s ease-in-out infinite;
        }
        .illustr-particle {
          animation: illustr-particle 3.4s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .illustr-float, .illustr-particle { animation: none !important; }
        }
      `}</style>

      {/* Soft radial background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(37,99,235,0.09) 0%, transparent 70%)",
        }}
      />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(37,99,235,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.7,
        }}
      />

      {/* Floating particles */}
      {FLOAT_PARTICLES.map((p) => (
        <div
          key={`${p.left}-${p.top}`}
          className="absolute rounded-full pointer-events-none illustr-particle"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 8px 2px ${p.color}55`,
            animationDelay: p.delay,
            animationDuration: p.dur,
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label + heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-4 sm:mb-8"
        >
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-3 tracking-wide uppercase"
            style={{
              background: "rgba(37,99,235,0.08)",
              color: "#2563EB",
              border: "1px solid rgba(37,99,235,0.2)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Loans for Bharat
          </span>
          <h2
            className="text-xl sm:text-3xl lg:text-4xl font-black leading-tight"
            style={{ color: "#1E293B" }}
          >
            Loans for Every Bharatvasi —{" "}
            <span className="block sm:inline">
              <span style={{ color: "#2563EB" }}>Students</span>,{" "}
              <span style={{ color: "#FF6A00" }}>Workers</span> &{" "}
              <span style={{ color: "#22C55E" }}>Shop Owners</span>
            </span>
          </h2>
          <p
            className="mt-2 text-sm sm:text-base max-w-xl"
            style={{ color: "#64748B" }}
          >
            Rocket.Money approves in minutes — Savita, Ramesh, and Kamla all got
            loans. No CIBIL, no paperwork.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 mb-8"
        >
          <motion.button
            data-ocid="banner.see_how_button"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() =>
              document
                .getElementById("how-it-works")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full sm:w-auto px-7 py-3 rounded-full font-bold text-white text-sm sm:text-base transition-all"
            style={{
              background: "linear-gradient(135deg, #FF6A00 0%, #FF8C38 100%)",
              boxShadow: "0 4px 20px rgba(255,106,0,0.35)",
            }}
          >
            See How It Works →
          </motion.button>
          <motion.a
            data-ocid="banner.apply_button"
            href="#apply"
            whileHover={{
              scale: 1.04,
              y: -2,
              backgroundColor: "#2563EB",
              color: "#ffffff",
            }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-7 py-3 rounded-full font-bold text-sm sm:text-base transition-all text-center"
            style={{
              border: "2px solid #2563EB",
              color: "#2563EB",
              background: "transparent",
            }}
          >
            Apply Now — Free
          </motion.a>
        </motion.div>

        {/* Main illustration container */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="relative w-full"
        >
          {/* SVG Illustration Panel */}
          <PersonaIllustration inView={inView} />

          {/* Persona approval badges — overlaid, visible on ALL screen sizes */}
          <div className="flex absolute -bottom-5 left-0 right-0 justify-between px-4 sm:px-6 lg:px-12 z-20">
            {PERSONA_BADGES.map((badge) => (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, y: 20, scale: 0.85 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  delay: badge.delay,
                  duration: 0.5,
                  type: "spring",
                  bounce: 0.45,
                }}
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-1.5 sm:gap-2.5 px-2 sm:px-4 py-1.5 sm:py-2.5 rounded-xl sm:rounded-2xl cursor-default"
                style={{
                  background: "rgba(255,255,255,0.97)",
                  border: `1px solid ${badge.border}`,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* Pulsing approval dot */}
                <div className="relative flex-shrink-0">
                  <div
                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full"
                    style={{ background: badge.color }}
                  />
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: badge.color,
                      animation: "approval-ping 2s ease-out infinite",
                      animationDelay: `${badge.delay}s`,
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <span
                    className="text-[9px] sm:text-xs font-bold leading-tight"
                    style={{ color: "#1E293B" }}
                  >
                    ✅ {badge.label}
                  </span>
                  <span
                    className="text-[8px] sm:text-[10px] font-medium"
                    style={{ color: badge.color }}
                  >
                    {badge.sub}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom stats row */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-8 mt-12 sm:mt-16">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} inView={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
