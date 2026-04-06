import { motion, useInView } from "motion/react";
import type React from "react";
import { useRef } from "react";

/* ── Particle config ────────────────────────────────────── */
const PARTICLES = [
  {
    id: 1,
    size: 8,
    color: "#2563EB",
    opacity: 0.38,
    top: "10%",
    left: "5%",
    dur: "8s",
    delay: "0s",
    anim: "fp1",
  },
  {
    id: 2,
    size: 10,
    color: "#FF6A00",
    opacity: 0.28,
    top: "16%",
    left: "83%",
    dur: "11s",
    delay: "1.2s",
    anim: "fp2",
  },
  {
    id: 3,
    size: 6,
    color: "#22C55E",
    opacity: 0.35,
    top: "30%",
    left: "92%",
    dur: "9s",
    delay: "2s",
    anim: "fp3",
  },
  {
    id: 4,
    size: 12,
    color: "#6366F1",
    opacity: 0.2,
    top: "54%",
    left: "3%",
    dur: "13s",
    delay: "0.5s",
    anim: "fp4",
  },
  {
    id: 5,
    size: 9,
    color: "#2563EB",
    opacity: 0.28,
    top: "71%",
    left: "89%",
    dur: "7s",
    delay: "3s",
    anim: "fp1",
  },
  {
    id: 6,
    size: 6,
    color: "#0EA5E9",
    opacity: 0.33,
    top: "84%",
    left: "13%",
    dur: "10s",
    delay: "1.8s",
    anim: "fp2",
  },
  {
    id: 7,
    size: 11,
    color: "#FF6A00",
    opacity: 0.2,
    top: "7%",
    left: "47%",
    dur: "14s",
    delay: "4s",
    anim: "fp3",
  },
  {
    id: 8,
    size: 7,
    color: "#22C55E",
    opacity: 0.3,
    top: "41%",
    left: "79%",
    dur: "8s",
    delay: "2.5s",
    anim: "fp4",
  },
  {
    id: 9,
    size: 5,
    color: "#0EA5E9",
    opacity: 0.4,
    top: "59%",
    left: "61%",
    dur: "6s",
    delay: "0.8s",
    anim: "fp1",
  },
  {
    id: 10,
    size: 10,
    color: "#6366F1",
    opacity: 0.18,
    top: "24%",
    left: "24%",
    dur: "12s",
    delay: "3.5s",
    anim: "fp2",
  },
  {
    id: 11,
    size: 6,
    color: "#22C55E",
    opacity: 0.28,
    top: "77%",
    left: "43%",
    dur: "9s",
    delay: "1s",
    anim: "fp3",
  },
  {
    id: 12,
    size: 8,
    color: "#2563EB",
    opacity: 0.22,
    top: "47%",
    left: "34%",
    dur: "11s",
    delay: "2.8s",
    anim: "fp4",
  },
  {
    id: 13,
    size: 5,
    color: "#FF6A00",
    opacity: 0.32,
    top: "91%",
    left: "73%",
    dur: "7s",
    delay: "0.3s",
    anim: "fp1",
  },
  {
    id: 14,
    size: 7,
    color: "#0EA5E9",
    opacity: 0.28,
    top: "4%",
    left: "67%",
    dur: "10s",
    delay: "4.5s",
    anim: "fp2",
  },
  {
    id: 15,
    size: 6,
    color: "#2563EB",
    opacity: 0.3,
    top: "36%",
    left: "18%",
    dur: "9s",
    delay: "1.5s",
    anim: "fp3",
  },
  {
    id: 16,
    size: 8,
    color: "#22C55E",
    opacity: 0.25,
    top: "65%",
    left: "55%",
    dur: "11s",
    delay: "3.2s",
    anim: "fp4",
  },
];

/* ── Rupee decorations ────────────────────────────────────── */
const RUPEES = [
  {
    id: "r1",
    size: 88,
    opacity: 0.06,
    top: "7%",
    left: "2%",
    rotate: "-15deg",
    animDur: "8.0s",
    animDelay: "0.0s",
  },
  {
    id: "r2",
    size: 68,
    opacity: 0.052,
    top: "20%",
    left: "91%",
    rotate: "20deg",
    animDur: "9.1s",
    animDelay: "0.7s",
  },
  {
    id: "r3",
    size: 76,
    opacity: 0.055,
    top: "63%",
    left: "5%",
    rotate: "8deg",
    animDur: "10.2s",
    animDelay: "1.4s",
  },
  {
    id: "r4",
    size: 96,
    opacity: 0.045,
    top: "74%",
    left: "87%",
    rotate: "-25deg",
    animDur: "11.3s",
    animDelay: "2.1s",
  },
  {
    id: "r5",
    size: 60,
    opacity: 0.065,
    top: "44%",
    left: "49%",
    rotate: "12deg",
    animDur: "12.4s",
    animDelay: "2.8s",
  },
  {
    id: "r6",
    size: 72,
    opacity: 0.055,
    top: "87%",
    left: "27%",
    rotate: "-8deg",
    animDur: "13.5s",
    animDelay: "3.5s",
  },
  {
    id: "r7",
    size: 64,
    opacity: 0.05,
    top: "14%",
    left: "71%",
    rotate: "30deg",
    animDur: "14.6s",
    animDelay: "4.2s",
  },
  {
    id: "r8",
    size: 80,
    opacity: 0.042,
    top: "49%",
    left: "21%",
    rotate: "-20deg",
    animDur: "15.7s",
    animDelay: "4.9s",
  },
  {
    id: "r9",
    size: 52,
    opacity: 0.05,
    top: "31%",
    left: "58%",
    rotate: "15deg",
    animDur: "9.8s",
    animDelay: "5.6s",
  },
  {
    id: "r10",
    size: 70,
    opacity: 0.045,
    top: "80%",
    left: "65%",
    rotate: "-10deg",
    animDur: "10.9s",
    animDelay: "0.3s",
  },
];

/* ── Approval spark particles ────────────────────────────────── */
const APPROVAL_SPARKS = [
  {
    id: "s1",
    color: "#22C55E",
    size: 5,
    top: "38%",
    left: "12%",
    dur: "5s",
    delay: "0s",
  },
  {
    id: "s2",
    color: "#2563EB",
    size: 4,
    top: "55%",
    left: "85%",
    dur: "7s",
    delay: "1.5s",
  },
  {
    id: "s3",
    color: "#FF6A00",
    size: 6,
    top: "72%",
    left: "33%",
    dur: "6s",
    delay: "0.8s",
  },
  {
    id: "s4",
    color: "#22C55E",
    size: 3,
    top: "20%",
    left: "55%",
    dur: "8s",
    delay: "2.3s",
  },
  {
    id: "s5",
    color: "#2563EB",
    size: 5,
    top: "88%",
    left: "78%",
    dur: "5.5s",
    delay: "1.1s",
  },
  {
    id: "s6",
    color: "#FF6A00",
    size: 4,
    top: "15%",
    left: "38%",
    dur: "9s",
    delay: "3.5s",
  },
  {
    id: "s7",
    color: "#22C55E",
    size: 6,
    top: "62%",
    left: "7%",
    dur: "6.5s",
    delay: "0.5s",
  },
  {
    id: "s8",
    color: "#6366F1",
    size: 4,
    top: "43%",
    left: "96%",
    dur: "7.5s",
    delay: "2.8s",
  },
];

/* ── Persona data ──────────────────────────────────────────── */
const PERSONAS = [
  {
    img: "/assets/generated/hero-riya-student-v5.dim_520x680.jpg",
    accent: "#2563EB",
    accentBg: "rgba(37,99,235,0.09)",
    accentBorder: "rgba(37,99,235,0.28)",
    tag: "Student",
    name: "Riya \u2014 Student",
    quote: "\u20b93,000 approved in just 4 minutes. No Credit Check needed!",
    delay: 0.4,
    isCenter: false,
  },
  {
    img: "/assets/generated/hero-arjun-gigworker-v5.dim_520x680.jpg",
    accent: "#FF6A00",
    accentBg: "rgba(255,106,0,0.09)",
    accentBorder: "rgba(255,106,0,0.28)",
    tag: "Gig Worker",
    name: "Arjun \u2014 Gig Worker",
    quote: "\u20b95,000 instantly. Applied between deliveries!",
    delay: 0.5,
    isCenter: true,
  },
  {
    img: "/assets/generated/hero-priya-shopowner-v5.dim_520x680.jpg",
    accent: "#22C55E",
    accentBg: "rgba(34,197,94,0.09)",
    accentBorder: "rgba(34,197,94,0.28)",
    tag: "Shop Owner",
    name: "Priya \u2014 Shop Owner",
    quote: "\u20b95,000 for my kirana shop. No paperwork at all!",
    delay: 0.6,
    isCenter: false,
  },
];

/* ── Approval badge config ────────────────────────────────────────── */
const BADGES = [
  {
    label: "Riya \u2014 Student",
    sub: "\u20b93,000 approved in 4 min",
    bg: "rgba(37,99,235,0.08)",
    border: "rgba(37,99,235,0.25)",
    dot: "#2563EB",
    cls: "hero-badge-tl",
    floatAnim: "badge-float-1",
    style: { top: -32, left: 16 } as React.CSSProperties,
    delay: 0.9,
  },
  {
    label: "Arjun \u2014 Gig Worker",
    sub: "\u20b95,000 approved instantly",
    bg: "rgba(255,106,0,0.08)",
    border: "rgba(255,106,0,0.25)",
    dot: "#FF6A00",
    cls: "hero-badge-bc",
    floatAnim: "badge-float-2",
    style: {
      bottom: 110,
      left: "50%",
      transform: "translateX(-50%)",
    } as React.CSSProperties,
    delay: 1.2,
  },
  {
    label: "Priya \u2014 Shop Owner",
    sub: "\u20b95,000 approved, no Credit Check",
    bg: "rgba(34,197,94,0.08)",
    border: "rgba(34,197,94,0.25)",
    dot: "#22C55E",
    cls: "hero-badge-tr",
    floatAnim: "badge-float-3",
    style: { top: -32, right: 16 } as React.CSSProperties,
    delay: 1.5,
  },
];

/* ── Stat card config ─────────────────────────────────────────── */
const STATS = [
  {
    value: "50,000+",
    label: "Loans Approved",
    color: "#2563EB",
    icon: "\ud83c\udfe6",
    delay: 1.7,
  },
  {
    value: "< 5 Min",
    label: "Average Approval",
    color: "#FF6A00",
    icon: "\u26a1",
    delay: 1.8,
  },
  {
    value: "0 Credit Score",
    label: "Minimum Score",
    color: "#22C55E",
    icon: "\u2705",
    delay: 1.9,
  },
  {
    value: "\u20b95,000",
    label: "Max Loan Amount",
    color: "#2563EB",
    icon: "\ud83d\udcb0",
    delay: 2.0,
  },
];

export default function PremiumHeroSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <style>{`
        @keyframes fp1 {
          0%,100%{transform:translateY(0px) rotate(0deg)}
          50%{transform:translateY(-20px) rotate(6deg)}
        }
        @keyframes fp2 {
          0%,100%{transform:translateY(0px) rotate(0deg)}
          40%{transform:translateY(-14px) rotate(-5deg)}
          80%{transform:translateY(-7px) rotate(4deg)}
        }
        @keyframes fp3 {
          0%,100%{transform:translateY(0px) scale(1)}
          50%{transform:translateY(-24px) scale(1.18)}
        }
        @keyframes fp4 {
          0%,100%{transform:translateY(0px) translateX(0px)}
          33%{transform:translateY(-12px) translateX(7px)}
          66%{transform:translateY(-22px) translateX(-5px)}
        }
        @keyframes spark-float {
          0%{transform:translateY(0) scale(1); opacity:0.8}
          50%{transform:translateY(-28px) scale(1.3); opacity:0.5}
          100%{transform:translateY(-52px) scale(0.8); opacity:0}
        }
        @keyframes badge-pulse-dot {
          0%,100%{opacity:1; transform:scale(1)}
          50%{opacity:0.45; transform:scale(0.6)}
        }
        @keyframes rupee-drift {
          0%,100%{transform:translateY(0px)}
          50%{transform:translateY(-12px)}
        }
        @keyframes hero-card-float {
          0%,100%{transform:translateY(0px)}
          50%{transform:translateY(-10px)}
        }
        @keyframes badge-float-1 {
          0%,100%{transform:translateY(0px)}
          50%{transform:translateY(-7px)}
        }
        @keyframes badge-float-2 {
          0%,100%{transform:translateY(0px) translateX(-50%)}
          50%{transform:translateY(-9px) translateX(-50%)}
        }
        @keyframes badge-float-3 {
          0%,100%{transform:translateY(0px)}
          50%{transform:translateY(-6px)}
        }
        .hero-particle { will-change: transform; }
        .hero-spark    { will-change: transform, opacity; }
        .hero-rupee    { will-change: transform; }
        .hero-card-float-anim { animation: hero-card-float 7s ease-in-out infinite; will-change: transform; }
        .persona-center-img { height: clamp(340px, 44vw, 500px) !important; }
        @media (prefers-reduced-motion: reduce) {
          .hero-particle, .hero-spark, .hero-rupee { animation: none !important; }
          .hero-card-float-anim { animation: none !important; }
          .hero-badge-floating { animation: none !important; }
        }
        @media (max-width: 767px) {
          .persona-grid { grid-template-columns: 1fr !important; }
          .persona-grid > div { border-right: none !important; border-bottom: 1px solid rgba(37,99,235,0.07); }
          .persona-grid > div:last-child { border-bottom: none; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .hero-badge-tl { top: auto !important; bottom: 8px !important; left: 8px !important; }
          .hero-badge-tr { top: auto !important; bottom: 8px !important; right: 8px !important; left: auto !important; }
          .hero-badge-bc { display: none !important; }
          .hero-card-float-anim { animation: none !important; }
        }
      `}</style>

      <section
        ref={ref}
        data-ocid="premium-hero.section"
        style={{
          background:
            "linear-gradient(160deg, #E8F2FF 0%, #EFF6FF 35%, #F0F4FF 65%, #EDFFF5 100%)",
          position: "relative",
          overflow: "hidden",
          paddingTop: "100px",
          paddingBottom: "120px",
        }}
      >
        {/* Rupee decorations */}
        {RUPEES.map((r) => (
          <div
            key={r.id}
            aria-hidden="true"
            className="hero-rupee"
            style={{
              position: "absolute",
              top: r.top,
              left: r.left,
              fontSize: r.size,
              opacity: r.opacity,
              color: "#1E40AF",
              fontWeight: 800,
              userSelect: "none",
              pointerEvents: "none",
              zIndex: 0,
              transform: `rotate(${r.rotate})`,
              animation: `rupee-drift ${r.animDur} ease-in-out infinite`,
              animationDelay: r.animDelay,
            }}
          >
            &#8377;
          </div>
        ))}

        {/* Approval spark particles */}
        {APPROVAL_SPARKS.map((s) => (
          <div
            key={s.id}
            aria-hidden="true"
            className="hero-spark"
            style={{
              position: "absolute",
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              borderRadius: "50%",
              background: s.color,
              opacity: 0,
              pointerEvents: "none",
              zIndex: 0,
              animation: `spark-float ${s.dur} ease-out infinite`,
              animationDelay: s.delay,
            }}
          />
        ))}

        {/* Floating colored particles */}
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            aria-hidden="true"
            className="hero-particle"
            style={{
              position: "absolute",
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              background: p.color,
              opacity: p.opacity,
              top: p.top,
              left: p.left,
              animationName: p.anim,
              animationDuration: p.dur,
              animationDelay: p.delay,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              zIndex: 0,
              pointerEvents: "none",
            }}
          />
        ))}

        {/* Content wrapper */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 32px",
          }}
        >
          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ textAlign: "center", marginBottom: 36 }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                color: "#2563EB",
                background: "rgba(37,99,235,0.08)",
                border: "1.5px solid rgba(37,99,235,0.22)",
                borderRadius: 999,
                padding: "10px 28px",
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: "0.07em",
                boxShadow: "0 4px 20px rgba(37,99,235,0.16)",
              }}
            >
              <span
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  background: "#2563EB",
                  display: "inline-block",
                  animation: "badge-pulse-dot 1.8s ease-in-out infinite",
                  flexShrink: 0,
                }}
              />
              LOANS FOR EVERY INDIAN
            </span>
          </motion.div>

          {/* Headline — 20% bigger */}
          <motion.h1
            data-ocid="premium-hero.section"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            style={{
              textAlign: "center",
              fontSize: "clamp(2.6rem, 5.8vw, 4.4rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#0F172A",
              marginBottom: 28,
              textShadow: "0 2px 16px rgba(15,23,42,0.08)",
            }}
          >
            Whether you&apos;re a{" "}
            <span
              style={{
                color: "#2563EB",
                background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Student
            </span>{" "}
            ,{" "}
            <span
              style={{
                color: "#FF6A00",
                background: "linear-gradient(135deg, #FF6A00, #EA580C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Gig Worker
            </span>{" "}
            , or{" "}
            <span
              style={{
                color: "#22C55E",
                background: "linear-gradient(135deg, #22C55E, #16A34A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Shop Owner
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.22, ease: "easeOut" }}
            style={{
              textAlign: "center",
              color: "#475569",
              fontSize: "clamp(1.15rem, 2.1vw, 1.45rem)",
              fontWeight: 500,
              maxWidth: 620,
              margin: "0 auto 72px",
              lineHeight: 1.72,
              letterSpacing: "0.008em",
            }}
          >
            RocketMoney.in approves your loan in minutes &mdash;{" "}
            <strong style={{ color: "#1E293B", fontWeight: 700 }}>
              No Credit Check needed
            </strong>
            , no paperwork.
          </motion.p>

          {/* Hero Card wrapper */}
          <div style={{ position: "relative", marginTop: 8 }}>
            {/* Floating approval badges — glassmorphism */}
            {BADGES.map((badge) => (
              <motion.div
                key={badge.label}
                data-ocid="premium-hero.card"
                className={`${badge.cls} hero-badge-floating`}
                initial={{ opacity: 0, scale: 0.7, y: 12 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 18,
                  delay: badge.delay,
                }}
                whileHover={{ scale: 1.06, y: -4 }}
                style={{
                  position: "absolute",
                  zIndex: 20,
                  background: "rgba(255,255,255,0.75)",
                  backdropFilter: "blur(24px) saturate(180%)",
                  WebkitBackdropFilter: "blur(24px) saturate(180%)",
                  border: `1px solid ${badge.border}`,
                  borderRadius: 18,
                  padding: "13px 20px",
                  minWidth: 220,
                  boxShadow: `0 16px 48px rgba(0,0,0,0.12), 0 4px 16px ${badge.border}, inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(255,255,255,0.4)`,
                  animation: `${badge.floatAnim} ${badge.floatAnim === "badge-float-1" ? "4s" : badge.floatAnim === "badge-float-2" ? "5s" : "4.5s"} ease-in-out infinite`,
                  animationDelay: `${badge.delay * 0.5}s`,
                  ...badge.style,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: badge.dot,
                      display: "inline-block",
                      animation: "badge-pulse-dot 1.6s ease-in-out infinite",
                      flexShrink: 0,
                      boxShadow: `0 0 0 3px ${badge.bg}`,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 13.5,
                      fontWeight: 700,
                      color: "#0F172A",
                      whiteSpace: "nowrap",
                    }}
                  >
                    &#x2705; {badge.label}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#64748B",
                    marginTop: 4,
                    paddingLeft: 19,
                    fontWeight: 500,
                  }}
                >
                  {badge.sub}
                </div>
              </motion.div>
            ))}

            {/* Hero Card — with float animation */}
            <motion.div
              data-ocid="premium-hero.card"
              initial={{ opacity: 0, y: 36, scale: 0.97 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="hero-card-float-anim"
              style={{
                background:
                  "linear-gradient(145deg, #FFFFFF 0%, #F6F9FF 45%, #F0FFF6 100%)",
                borderRadius: 32,
                boxShadow:
                  "0 60px 160px rgba(37,99,235,0.18)," +
                  "0 24px 64px rgba(0,0,0,0.10)," +
                  "0 6px 20px rgba(37,99,235,0.08)," +
                  "inset 0 1px 0 rgba(255,255,255,0.95)",
                border: "1px solid rgba(37,99,235,0.12)",
                overflow: "hidden",
                marginTop: 44,
                padding: "12px 12px 0",
              }}
            >
              <div
                className="persona-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1.14fr 1fr",
                  gap: 0,
                  alignItems: "end",
                }}
              >
                {PERSONAS.map((persona, idx) => (
                  <motion.div
                    key={persona.name}
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: persona.delay,
                      ease: "easeOut",
                    }}
                    style={{
                      borderRight:
                        idx < 2 ? "1px solid rgba(37,99,235,0.07)" : "none",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: persona.isCenter
                        ? "18px 18px 0 0"
                        : "14px 14px 0 0",
                      overflow: "hidden",
                      background: persona.isCenter
                        ? "linear-gradient(180deg, rgba(255,106,0,0.03) 0%, transparent 40%)"
                        : "transparent",
                    }}
                  >
                    <div
                      className={persona.isCenter ? "persona-center-img" : ""}
                      style={{
                        width: "100%",
                        height: "clamp(300px, 38vw, 440px)",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <img
                        src={persona.img}
                        alt={persona.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "top center",
                          display: "block",
                          transition: "transform 0.5s ease",
                        }}
                        loading="lazy"
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: 90,
                          background:
                            "linear-gradient(transparent, rgba(248,250,255,0.96))",
                          pointerEvents: "none",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: 4,
                          background: `linear-gradient(90deg, ${persona.accent}44, ${persona.accent}, ${persona.accent}44)`,
                          pointerEvents: "none",
                        }}
                      />
                    </div>

                    <div
                      style={{
                        padding: persona.isCenter
                          ? "22px 26px 32px"
                          : "20px 22px 28px",
                        background: "#FFFFFF",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 5,
                          background: persona.accentBg,
                          border: `1px solid ${persona.accentBorder}`,
                          color: persona.accent,
                          borderRadius: 999,
                          fontSize: 12,
                          fontWeight: 700,
                          padding: "4px 13px",
                          marginBottom: 11,
                          letterSpacing: "0.04em",
                        }}
                      >
                        {persona.tag}
                      </span>

                      <div
                        style={{
                          fontSize: persona.isCenter ? 18 : 16,
                          fontWeight: 800,
                          color: "#0F172A",
                          marginBottom: 8,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {persona.name}
                      </div>

                      <p
                        style={{
                          fontSize: 14,
                          color: "#64748B",
                          lineHeight: 1.6,
                          margin: 0,
                          fontWeight: 500,
                        }}
                      >
                        &ldquo;{persona.quote}&rdquo;
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stat cards — bigger numbers, stronger hierarchy */}
          <div
            data-ocid="premium-hero.card"
            className="stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
              marginTop: 48,
            }}
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 22 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: stat.delay,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.06, y: -6 }}
                style={{
                  background: "#FFFFFF",
                  borderRadius: 20,
                  boxShadow:
                    "0 12px 40px rgba(0,0,0,0.10)," +
                    "0 4px 12px rgba(37,99,235,0.07)," +
                    "inset 0 1px 0 rgba(255,255,255,0.95)",
                  border: "1px solid rgba(0,0,0,0.055)",
                  borderLeft: `3px solid ${stat.color}`,
                  padding: "28px 24px",
                  textAlign: "center",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                  transition: "box-shadow 0.25s ease, transform 0.25s ease",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "20%",
                    right: "20%",
                    height: 3,
                    borderRadius: "0 0 4px 4px",
                    background: `linear-gradient(90deg, transparent, ${stat.color}88, transparent)`,
                  }}
                />
                <div style={{ fontSize: 28, marginBottom: 10, lineHeight: 1 }}>
                  {stat.icon}
                </div>
                <div
                  style={{
                    fontSize: "clamp(1.9rem, 3.2vw, 2.6rem)",
                    fontWeight: 900,
                    lineHeight: 1.05,
                    marginBottom: 10,
                    letterSpacing: "-0.025em",
                    background: `linear-gradient(135deg, ${stat.color}, ${stat.color}cc)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "#64748B",
                    fontWeight: 600,
                    letterSpacing: "0.01em",
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
