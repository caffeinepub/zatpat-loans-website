import { motion, useInView } from "motion/react";
import { useRef } from "react";

// Floating persona badge overlay data
const PERSONA_BADGES = [
  {
    id: "student",
    label: "Riya — Student",
    sub: "₹3,000 approved in 4 min",
    color: "#2563EB",
    bg: "rgba(37,99,235,0.1)",
    border: "rgba(37,99,235,0.35)",
    dot: "#60A5FA",
    x: "left",
    delay: 0.8,
  },
  {
    id: "gig",
    label: "Arjun — Gig Worker",
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
    label: "Priya — Shop Owner",
    sub: "₹5,000 approved, no CIBIL",
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

export default function BannerIllustration() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-14 sm:py-20"
      style={{
        background:
          "linear-gradient(160deg, #EFF6FF 0%, #F0FDF4 50%, #FFF7ED 100%)",
      }}
    >
      <style>{`
        @keyframes illustr-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes illustr-particle {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.65; }
          50% { transform: translateY(-12px) scale(1.25); opacity: 1; }
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
        @media (prefers-reduced-motion: reduce) {
          .illustr-float, .illustr-particle { animation: none !important; }
        }
      `}</style>

      {/* Soft radial background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(37,99,235,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(37,99,235,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.5,
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
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-8 sm:mb-12"
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
            Loans for Every Indian
          </span>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight"
            style={{ color: "#1E293B" }}
          >
            Whether you're a <span style={{ color: "#2563EB" }}>Student</span>,{" "}
            <span style={{ color: "#FF6A00" }}>Gig Worker</span>, or{" "}
            <span style={{ color: "#22C55E" }}>Shop Owner</span>
          </h2>
          <p
            className="mt-2 text-sm sm:text-base max-w-xl"
            style={{ color: "#64748B" }}
          >
            Rocket.Money approves your loan in minutes — No CIBIL needed, no
            paperwork.
          </p>
        </motion.div>

        {/* Main illustration container */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="relative w-full"
        >
          {/* Illustration card */}
          <div
            className="relative rounded-3xl overflow-hidden illustr-float"
            style={{
              boxShadow:
                "0 32px 80px rgba(37,99,235,0.14), 0 8px 32px rgba(0,0,0,0.08), 0 0 0 1px rgba(37,99,235,0.12)",
              animationDuration: "5s",
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
            }}
          >
            {/* Subtle shimmer overlay on image */}
            <div
              className="absolute inset-0 z-10 pointer-events-none rounded-3xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%, rgba(37,99,235,0.05) 100%)",
              }}
            />

            <img
              src="/assets/generated/hero-banner-illustration.dim_1400x700.png"
              alt="Three happy Indians — student, gig worker, and kirana shop owner — celebrating loan approvals with Rocket.Money"
              className="w-full object-cover"
              style={{ display: "block", aspectRatio: "2/1" }}
            />
          </div>

          {/* Persona approval badges — overlaid smartly */}
          <div className="hidden sm:flex absolute -bottom-5 left-0 right-0 justify-between px-6 lg:px-12 z-20">
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
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl pointer-events-none"
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
                    className="w-3 h-3 rounded-full"
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
                    className="text-xs font-bold leading-tight"
                    style={{ color: "#1E293B" }}
                  >
                    ✅ {badge.label}
                  </span>
                  <span
                    className="text-[10px] font-medium"
                    style={{ color: badge.color }}
                  >
                    {badge.sub}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: stacked badges below */}
          <div className="flex sm:hidden flex-col gap-2 mt-4">
            {PERSONA_BADGES.map((badge) => (
              <motion.div
                key={`mob-${badge.id}`}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: badge.delay, duration: 0.5 }}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl"
                style={{
                  background: badge.bg,
                  border: `1px solid ${badge.border}`,
                }}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ background: badge.color }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold" style={{ color: "#1E293B" }}>
                    ✅ {badge.label}
                  </p>
                  <p className="text-[11px]" style={{ color: badge.color }}>
                    {badge.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-12 sm:mt-16"
        >
          {[
            { value: "50,000+", label: "Loans Approved", color: "#2563EB" },
            { value: "< 5 Min", label: "Average Approval", color: "#FF6A00" },
            { value: "0 CIBIL", label: "Minimum Score", color: "#22C55E" },
            { value: "₹5,000", label: "Max Loan Amount", color: "#7C3AED" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center px-4 py-3 rounded-2xl min-w-[110px]"
              style={{
                background: "rgba(255,255,255,0.9)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <span
                className="text-lg sm:text-2xl font-black"
                style={{ color: stat.color }}
              >
                {stat.value}
              </span>
              <span
                className="text-[11px] sm:text-xs font-medium text-center"
                style={{ color: "#64748B" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
