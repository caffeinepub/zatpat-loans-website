import { motion, useInView } from "motion/react";
import { useRef } from "react";

const PERSONA_BADGES = [
  {
    id: "student",
    label: "✅ Riya — ₹2,500",
    sub: "College student · 4 min approval",
    color: "#2563EB",
    bg: "rgba(37,99,235,0.08)",
    border: "rgba(37,99,235,0.3)",
    dot: "#2563EB",
    position: "topLeft" as const,
    delay: 0.9,
  },
  {
    id: "gig",
    label: "✅ Arjun — ₹5,000",
    sub: "Delivery worker · Instant",
    color: "#FF6A00",
    bg: "rgba(255,106,0,0.08)",
    border: "rgba(255,106,0,0.3)",
    dot: "#FF6A00",
    position: "bottomCenter" as const,
    delay: 1.2,
  },
  {
    id: "shop",
    label: "✅ Priya — ₹4,000",
    sub: "Kirana owner · No CIBIL",
    color: "#22C55E",
    bg: "rgba(34,197,94,0.08)",
    border: "rgba(34,197,94,0.3)",
    dot: "#22C55E",
    position: "topRight" as const,
    delay: 1.5,
  },
];

const STATS = [
  {
    display: "50,000+",
    label: "Loans Approved",
    color: "#2563EB",
  },
  {
    display: "< 5 Min",
    label: "Average Approval",
    color: "#FF6A00",
  },
  {
    display: "0 CIBIL",
    label: "Minimum Score",
    color: "#22C55E",
  },
  {
    display: "₹5,000",
    label: "Max Loan Amount",
    color: "#2563EB",
  },
];

function getBadgeStyle(position: "topLeft" | "topRight" | "bottomCenter") {
  const base = {
    position: "absolute" as const,
    zIndex: 20,
  };
  if (position === "topLeft") return { ...base, top: "10%", left: "3%" };
  if (position === "topRight") return { ...base, top: "10%", right: "3%" };
  return { ...base, bottom: "10%", left: "50%", transform: "translateX(-50%)" };
}

export default function BannerIllustration() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-12 sm:py-20"
      style={{
        background:
          "linear-gradient(160deg, #F0F7FF 0%, #EEF2FF 50%, #F0FDF4 100%)",
      }}
    >
      <style>{`
        @keyframes banner-image-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes approval-ping {
          0% { transform: scale(1); opacity: 0.8; }
          70% { transform: scale(2.4); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }
        @keyframes badge-glow {
          0%, 100% { box-shadow: 0 4px 20px rgba(0,0,0,0.10); }
          50% { box-shadow: 0 8px 36px rgba(37,99,235,0.18); }
        }
        .banner-image-float {
          animation: banner-image-float 4s ease-in-out infinite;
        }
        .banner-badge {
          animation: badge-glow 3s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .banner-image-float { animation: none !important; }
          .banner-badge { animation: none !important; }
        }
      `}</style>

      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(37,99,235,0.09) 0%, transparent 70%)",
        }}
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(37,99,235,0.10) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.6,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column layout: LEFT text, RIGHT image */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* LEFT — Copy + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Eyebrow badge */}
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4 tracking-wide uppercase"
              style={{
                background: "rgba(37,99,235,0.08)",
                color: "#2563EB",
                border: "1px solid rgba(37,99,235,0.2)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Loans for Every Bharatvasi 🇮🇳
            </span>

            {/* Headline */}
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight mb-4"
              style={{ color: "#1E293B", letterSpacing: "-0.02em" }}
            >
              From Campus to Counter —{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #2563EB 0%, #22C55E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                We've Got Every Indian Covered
              </span>
            </h2>

            {/* Sub copy */}
            <p
              className="text-sm sm:text-base leading-relaxed mb-5"
              style={{ color: "rgba(30, 41, 59, 0.7)", maxWidth: 420 }}
            >
              Students, workers, shop owners — anyone can get a loan up to
              ₹5,000 in under 5 minutes. No CIBIL required.
            </p>

            {/* Mini stats row */}
            <div className="flex flex-wrap items-center gap-2 mb-6 justify-center lg:justify-start">
              {["50K+ Loans", "₹5,000 Max", "Any CIBIL"].map((stat) => (
                <span
                  key={stat}
                  className="text-xs font-bold px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(37,99,235,0.07)",
                    color: "#2563EB",
                    border: "1px solid rgba(37,99,235,0.18)",
                  }}
                >
                  {stat}
                </span>
              ))}
            </div>

            {/* CTA button */}
            <motion.button
              type="button"
              data-ocid="banner_illustration.primary_button"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full font-bold text-white text-sm"
              style={{
                background: "linear-gradient(135deg, #FF6A00 0%, #FF8C38 100%)",
                padding: "14px 28px",
                minHeight: "50px",
                boxShadow: "0 8px 28px rgba(255,106,0,0.40)",
                border: "none",
                cursor: "pointer",
              }}
            >
              Apply Now — Free
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.2)", fontSize: 11 }}
              >
                →
              </span>
            </motion.button>

            <p className="text-xs text-slate-400 mt-3">
              ✓ No credit check · ✓ 100% online · ✓ Results in 5 min
            </p>
          </motion.div>

          {/* RIGHT — AI Photo with floating badges */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-none w-full lg:w-[58%] order-1 lg:order-2"
          >
            {/* Outer relative container — badges positioned relative to this */}
            <div className="relative banner-image-float">
              {/* Image wrapper with overflow hidden to clip without cutting faces */}
              <div
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow:
                    "0 24px 64px rgba(37,99,235,0.16), 0 8px 24px rgba(0,0,0,0.10)",
                }}
              >
                <img
                  src="/assets/generated/banner-trio-v2.dim_1200x500.jpg"
                  alt="Three happy Indian people — student, gig worker, and kirana shop owner — each with approved loan notifications"
                  style={{
                    width: "100%",
                    height: "auto",
                    minHeight: "220px",
                    maxHeight: "380px",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                  loading="lazy"
                />
              </div>

              {/* Floating approval badge chips — positioned over the image */}
              {PERSONA_BADGES.map((badge) => (
                <motion.div
                  key={badge.id}
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                    y:
                      badge.position === "topLeft" ||
                      badge.position === "topRight"
                        ? -12
                        : 12,
                  }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{
                    delay: badge.delay,
                    duration: 0.5,
                    type: "spring",
                    bounce: 0.45,
                  }}
                  className="banner-badge"
                  style={{
                    ...getBadgeStyle(badge.position),
                    background: "rgba(255,255,255,0.97)",
                    border: `1.5px solid ${badge.border}`,
                    borderRadius: 14,
                    padding: "7px 12px",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                  }}
                >
                  {/* Pulsing dot */}
                  <div className="relative flex-shrink-0">
                    <div
                      style={{
                        width: 9,
                        height: 9,
                        borderRadius: "50%",
                        background: badge.dot,
                        flexShrink: 0,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50%",
                        background: badge.dot,
                        animation: `approval-ping 2s ease-out infinite ${badge.delay}s`,
                      }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: badge.color,
                        lineHeight: 1.2,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {badge.label}
                    </span>
                    <span
                      style={{
                        fontSize: 9,
                        color: "#64748B",
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {badge.sub}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-6 mt-12 sm:mt-16"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8, y: 16 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                delay: 1.7 + i * 0.1,
                duration: 0.45,
                type: "spring",
                bounce: 0.35,
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex flex-col items-center px-5 py-3.5 rounded-2xl min-w-[110px] cursor-default"
              style={{
                background: "rgba(255,255,255,0.95)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <span
                className="text-xl sm:text-2xl font-black"
                style={{ color: stat.color }}
              >
                {stat.display}
              </span>
              <span
                className="text-[11px] font-medium text-center mt-0.5"
                style={{ color: "#64748B" }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
