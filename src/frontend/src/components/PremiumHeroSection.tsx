import { motion, useInView } from "motion/react";
import { useRef } from "react";

/* ── Particle config ─────────────────────────────────────────────── */
const PARTICLES = [
  {
    id: 1,
    size: 6,
    color: "#2563EB",
    opacity: 0.38,
    top: "12%",
    left: "6%",
    dur: "8s",
    delay: "0s",
    anim: "fp1",
  },
  {
    id: 2,
    size: 8,
    color: "#FF6A00",
    opacity: 0.3,
    top: "18%",
    left: "82%",
    dur: "11s",
    delay: "1.2s",
    anim: "fp2",
  },
  {
    id: 3,
    size: 5,
    color: "#22C55E",
    opacity: 0.35,
    top: "32%",
    left: "91%",
    dur: "9s",
    delay: "2s",
    anim: "fp3",
  },
  {
    id: 4,
    size: 10,
    color: "#6366F1",
    opacity: 0.25,
    top: "55%",
    left: "4%",
    dur: "13s",
    delay: "0.5s",
    anim: "fp4",
  },
  {
    id: 5,
    size: 7,
    color: "#2563EB",
    opacity: 0.3,
    top: "72%",
    left: "88%",
    dur: "7s",
    delay: "3s",
    anim: "fp1",
  },
  {
    id: 6,
    size: 5,
    color: "#0EA5E9",
    opacity: 0.33,
    top: "85%",
    left: "14%",
    dur: "10s",
    delay: "1.8s",
    anim: "fp2",
  },
  {
    id: 7,
    size: 9,
    color: "#FF6A00",
    opacity: 0.22,
    top: "8%",
    left: "48%",
    dur: "14s",
    delay: "4s",
    anim: "fp3",
  },
  {
    id: 8,
    size: 6,
    color: "#22C55E",
    opacity: 0.32,
    top: "42%",
    left: "78%",
    dur: "8s",
    delay: "2.5s",
    anim: "fp4",
  },
  {
    id: 9,
    size: 4,
    color: "#0EA5E9",
    opacity: 0.4,
    top: "60%",
    left: "60%",
    dur: "6s",
    delay: "0.8s",
    anim: "fp1",
  },
  {
    id: 10,
    size: 8,
    color: "#6366F1",
    opacity: 0.2,
    top: "25%",
    left: "25%",
    dur: "12s",
    delay: "3.5s",
    anim: "fp2",
  },
  {
    id: 11,
    size: 5,
    color: "#22C55E",
    opacity: 0.28,
    top: "78%",
    left: "42%",
    dur: "9s",
    delay: "1s",
    anim: "fp3",
  },
  {
    id: 12,
    size: 7,
    color: "#2563EB",
    opacity: 0.25,
    top: "48%",
    left: "35%",
    dur: "11s",
    delay: "2.8s",
    anim: "fp4",
  },
  {
    id: 13,
    size: 4,
    color: "#FF6A00",
    opacity: 0.35,
    top: "90%",
    left: "72%",
    dur: "7s",
    delay: "0.3s",
    anim: "fp1",
  },
  {
    id: 14,
    size: 6,
    color: "#0EA5E9",
    opacity: 0.3,
    top: "5%",
    left: "68%",
    dur: "10s",
    delay: "4.5s",
    anim: "fp2",
  },
];

/* ── Rupee decorations ───────────────────────────────────────────── */
const RUPEES = [
  { size: 72, opacity: 0.055, top: "8%", left: "3%", rotate: "-15deg" },
  { size: 56, opacity: 0.045, top: "22%", left: "92%", rotate: "20deg" },
  { size: 64, opacity: 0.05, top: "65%", left: "6%", rotate: "8deg" },
  { size: 80, opacity: 0.04, top: "75%", left: "88%", rotate: "-25deg" },
  { size: 48, opacity: 0.06, top: "45%", left: "50%", rotate: "12deg" },
  { size: 60, opacity: 0.05, top: "88%", left: "28%", rotate: "-8deg" },
  { size: 52, opacity: 0.045, top: "15%", left: "72%", rotate: "30deg" },
  { size: 68, opacity: 0.04, top: "50%", left: "22%", rotate: "-20deg" },
];

/* ── Persona data ────────────────────────────────────────────────── */
const PERSONAS = [
  {
    img: "/assets/generated/persona-student-riya-hq.dim_400x520.jpg",
    accent: "#2563EB",
    accentBg: "rgba(37,99,235,0.1)",
    accentBorder: "rgba(37,99,235,0.25)",
    tag: "Student",
    name: "Riya — Student",
    quote: "₹3,000 approved in just 4 minutes. No CIBIL needed!",
    delay: 0.4,
  },
  {
    img: "/assets/generated/persona-gig-arjun-hq.dim_400x520.jpg",
    accent: "#FF6A00",
    accentBg: "rgba(255,106,0,0.1)",
    accentBorder: "rgba(255,106,0,0.25)",
    tag: "Gig Worker",
    name: "Arjun — Gig Worker",
    quote: "₹5,000 instantly. Applied between deliveries!",
    delay: 0.5,
  },
  {
    img: "/assets/generated/persona-shopowner-priya-hq.dim_400x520.jpg",
    accent: "#22C55E",
    accentBg: "rgba(34,197,94,0.1)",
    accentBorder: "rgba(34,197,94,0.25)",
    tag: "Shop Owner",
    name: "Priya — Shop Owner",
    quote: "₹5,000 for my kirana shop. No paperwork at all!",
    delay: 0.6,
  },
];

/* ── Approval badge config ───────────────────────────────────────── */
const BADGES = [
  {
    emoji: "✅",
    label: "Riya — Student",
    sub: "₹3,000 approved in 4 min",
    accent: "#2563EB",
    bg: "rgba(37,99,235,0.07)",
    border: "rgba(37,99,235,0.22)",
    dot: "#2563EB",
    // top-left over card
    style: { top: -20, left: 20 },
    delay: 0.9,
  },
  {
    emoji: "✅",
    label: "Arjun — Gig Worker",
    sub: "₹5,000 approved instantly",
    accent: "#FF6A00",
    bg: "rgba(255,106,0,0.07)",
    border: "rgba(255,106,0,0.22)",
    dot: "#FF6A00",
    // bottom-center
    style: { bottom: 80, left: "50%", transform: "translateX(-50%)" },
    delay: 1.2,
  },
  {
    emoji: "✅",
    label: "Priya — Shop Owner",
    sub: "₹5,000 approved, no CIBIL",
    accent: "#22C55E",
    bg: "rgba(34,197,94,0.07)",
    border: "rgba(34,197,94,0.22)",
    dot: "#22C55E",
    // top-right
    style: { top: -20, right: 20 },
    delay: 1.5,
  },
];

/* ── Stat card config ────────────────────────────────────────────── */
const STATS = [
  { value: "50,000+", label: "Loans Approved", color: "#2563EB", delay: 1.7 },
  { value: "< 5 Min", label: "Average Approval", color: "#FF6A00", delay: 1.8 },
  { value: "0 CIBIL", label: "Minimum Score", color: "#22C55E", delay: 1.9 },
  { value: "₹5,000", label: "Max Loan Amount", color: "#2563EB", delay: 2.0 },
];

export default function PremiumHeroSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      {/* ── Particle & rupee keyframe styles ─────────────────────── */}
      <style>{`
        @keyframes fp1 {
          0%,100%{transform:translateY(0px) rotate(0deg)}
          50%{transform:translateY(-18px) rotate(5deg)}
        }
        @keyframes fp2 {
          0%,100%{transform:translateY(0px) rotate(0deg)}
          40%{transform:translateY(-12px) rotate(-4deg)}
          80%{transform:translateY(-6px) rotate(3deg)}
        }
        @keyframes fp3 {
          0%,100%{transform:translateY(0px) scale(1)}
          50%{transform:translateY(-22px) scale(1.15)}
        }
        @keyframes fp4 {
          0%,100%{transform:translateY(0px) translateX(0px)}
          33%{transform:translateY(-10px) translateX(6px)}
          66%{transform:translateY(-20px) translateX(-4px)}
        }
        @keyframes badge-pulse-dot {
          0%,100%{opacity:1; transform:scale(1)}
          50%{opacity:0.5; transform:scale(0.7)}
        }
        @keyframes pill-pulse {
          0%,100%{box-shadow:0 0 0 0 rgba(37,99,235,0.4)}
          70%{box-shadow:0 0 0 8px rgba(37,99,235,0)}
        }
        .hero-particle { will-change: transform; }
        @media (prefers-reduced-motion: reduce) {
          .hero-particle { animation: none !important; }
          .pill-dot { animation: none !important; }
        }
      `}</style>

      <section
        ref={ref}
        data-ocid="premium-hero.section"
        style={{
          background:
            "linear-gradient(160deg, #EFF6FF 0%, #F0F7FF 40%, #EEF2FF 70%, #F0FDF4 100%)",
          position: "relative",
          overflow: "hidden",
          paddingTop: "72px",
          paddingBottom: "80px",
        }}
      >
        {/* ── Rupee decorations ──────────────────────────────────── */}
        {RUPEES.map((r) => (
          <div
            key={r.top}
            aria-hidden="true"
            style={{
              position: "absolute",
              top: r.top,
              left: r.left,
              fontSize: r.size,
              opacity: r.opacity,
              transform: `rotate(${r.rotate})`,
              color: "#1E293B",
              fontWeight: 700,
              userSelect: "none",
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            ₹
          </div>
        ))}

        {/* ── Floating particles ─────────────────────────────────── */}
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

        {/* ── Content wrapper ────────────────────────────────────── */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ textAlign: "center", marginBottom: 28 }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "#2563EB",
                background: "rgba(37,99,235,0.07)",
                border: "1px solid rgba(37,99,235,0.2)",
                borderRadius: 999,
                padding: "7px 20px",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.06em",
                boxShadow: "0 2px 8px rgba(37,99,235,0.12)",
              }}
            >
              <span
                className="pill-dot"
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#2563EB",
                  display: "inline-block",
                  animation: "badge-pulse-dot 1.8s ease-in-out infinite",
                }}
              />
              LOANS FOR EVERY INDIAN
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            data-ocid="premium-hero.section"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            style={{
              textAlign: "center",
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              color: "#1E293B",
              marginBottom: 20,
            }}
          >
            Whether you&apos;re a{" "}
            <span style={{ color: "#2563EB" }}>Student</span> ,{" "}
            <span style={{ color: "#FF6A00" }}>Gig Worker</span> , or{" "}
            <span style={{ color: "#22C55E" }}>Shop Owner</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
            style={{
              textAlign: "center",
              color: "#64748B",
              fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
              maxWidth: 560,
              margin: "0 auto 48px",
              lineHeight: 1.65,
            }}
          >
            Rocket.Money approves your loan in minutes — No CIBIL needed, no
            paperwork.
          </motion.p>

          {/* ── Hero Card wrapper (relative, overflow visible for badges) ── */}
          <div style={{ position: "relative" }}>
            {/* Floating approval badges — positioned over the card */}
            {BADGES.map((badge) => (
              <motion.div
                key={badge.label}
                data-ocid="premium-hero.card"
                initial={{ opacity: 0, scale: 0.75, y: 10 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                  delay: badge.delay,
                }}
                whileHover={{ scale: 1.04, y: -2 }}
                style={{
                  position: "absolute",
                  zIndex: 20,
                  background: "rgba(255,255,255,0.96)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: `1.5px solid ${badge.border}`,
                  borderRadius: 14,
                  padding: "10px 16px",
                  minWidth: 200,
                  boxShadow: `0 8px 32px rgba(0,0,0,0.10), 0 2px 8px ${badge.border}`,
                  ...badge.style,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span
                    style={{
                      width: 9,
                      height: 9,
                      borderRadius: "50%",
                      background: badge.dot,
                      display: "inline-block",
                      animation: "badge-pulse-dot 1.6s ease-in-out infinite",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#1E293B",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {badge.emoji} {badge.label}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 11.5,
                    color: "#64748B",
                    marginTop: 2,
                    paddingLeft: 17,
                  }}
                >
                  {badge.sub}
                </div>
              </motion.div>
            ))}

            {/* Hero Card */}
            <motion.div
              data-ocid="premium-hero.card"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.65,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                background:
                  "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 50%, #F0FFF4 100%)",
                borderRadius: 24,
                boxShadow:
                  "0 24px 80px rgba(37,99,235,0.12), 0 8px 32px rgba(0,0,0,0.08)",
                border: "1px solid rgba(37,99,235,0.1)",
                overflow: "hidden",
                marginTop: 30,
              }}
            >
              {/* 3-column persona grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 0,
                }}
                className="persona-grid"
              >
                {PERSONAS.map((persona, idx) => (
                  <motion.div
                    key={persona.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.55,
                      delay: persona.delay,
                      ease: "easeOut",
                    }}
                    style={{
                      borderRight:
                        idx < 2 ? "1px solid rgba(37,99,235,0.07)" : "none",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Portrait image — face at top */}
                    <div
                      style={{
                        width: "100%",
                        height: "clamp(220px, 30vw, 320px)",
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
                        }}
                        loading="lazy"
                      />
                      {/* Gradient fade at bottom of image */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: 60,
                          background:
                            "linear-gradient(transparent, rgba(255,255,255,0.9))",
                          pointerEvents: "none",
                        }}
                      />
                    </div>

                    {/* Persona info */}
                    <div style={{ padding: "20px 24px 24px" }}>
                      {/* Tag badge */}
                      <span
                        style={{
                          display: "inline-block",
                          background: persona.accentBg,
                          border: `1px solid ${persona.accentBorder}`,
                          color: persona.accent,
                          borderRadius: 999,
                          fontSize: 11,
                          fontWeight: 700,
                          padding: "3px 10px",
                          marginBottom: 8,
                          letterSpacing: "0.04em",
                        }}
                      >
                        {persona.tag}
                      </span>

                      {/* Name */}
                      <div
                        style={{
                          fontSize: 16,
                          fontWeight: 700,
                          color: "#1E293B",
                          marginBottom: 6,
                        }}
                      >
                        {persona.name}
                      </div>

                      {/* Quote */}
                      <p
                        style={{
                          fontSize: 13.5,
                          color: "#64748B",
                          lineHeight: 1.55,
                          margin: 0,
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

          {/* ── Stat cards ──────────────────────────────────────────── */}
          <div
            data-ocid="premium-hero.card"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 16,
              marginTop: 40,
            }}
            className="stats-grid"
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: stat.delay,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.04, y: -2 }}
                style={{
                  background: "#FFFFFF",
                  borderRadius: 16,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  padding: "20px 16px",
                  textAlign: "center",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(1.35rem, 2.5vw, 1.85rem)",
                    fontWeight: 800,
                    color: stat.color,
                    lineHeight: 1.1,
                    marginBottom: 6,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "#94A3B8",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Responsive styles */}
        <style>{`
          @media (max-width: 767px) {
            .persona-grid {
              grid-template-columns: 1fr !important;
            }
            .persona-grid > div {
              border-right: none !important;
              border-bottom: 1px solid rgba(37,99,235,0.07);
            }
            .persona-grid > div:last-child {
              border-bottom: none;
            }
            .stats-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}
