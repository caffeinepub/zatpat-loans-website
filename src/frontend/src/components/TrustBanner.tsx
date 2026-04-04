import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

// Particle config
const PARTICLES = [
  { id: "tb-p1", left: "6%", top: "18%", size: 5, delay: "0s", dur: "3.8s" },
  { id: "tb-p2", left: "18%", top: "72%", size: 7, delay: "0.6s", dur: "4.5s" },
  { id: "tb-p3", left: "78%", top: "22%", size: 6, delay: "1.1s", dur: "3.3s" },
  { id: "tb-p4", left: "88%", top: "65%", size: 8, delay: "0.3s", dur: "5.0s" },
  { id: "tb-p5", left: "50%", top: "8%", size: 4, delay: "0.9s", dur: "4.2s" },
  { id: "tb-p6", left: "33%", top: "88%", size: 5, delay: "1.4s", dur: "3.6s" },
  { id: "tb-p7", left: "65%", top: "82%", size: 6, delay: "0.2s", dur: "4.8s" },
  { id: "tb-p8", left: "92%", top: "42%", size: 4, delay: "0.7s", dur: "3.9s" },
];

const WORDS = [
  { text: "Transparent.", delay: "0ms" },
  { text: "Reliable.", delay: "220ms" },
  { text: "Here for You.", delay: "420ms" },
];

const TRUST_STATS = [
  { value: "₹500 Cr+", label: "Disbursed", color: "#FF6A00" },
  { value: "50,000+", label: "Loans", color: "#22C55E" },
  { value: "4.8★", label: "Rating", color: "#FBBF24" },
  { value: "< 5 Min", label: "Approval", color: "#60A5FA" },
];

export default function TrustBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const { ref: statsRef, isVisible: statsVisible } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [visible, setVisible] = useState(false);
  const [ovalDrawn, setOvalDrawn] = useState(false);
  const [lineVisible, setLineVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setOvalDrawn(true), 600);
          setTimeout(() => setLineVisible(true), 1900);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const rx = 130;
  const ry = 38;
  const cx = 140;
  const cy = 42;
  const circumference = 2 * Math.PI * Math.sqrt((rx * rx + ry * ry) / 2);

  return (
    <>
      <style>{`
        @keyframes tb-breathe {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50%       { opacity: 0.18; transform: scale(1.12); }
        }
        @keyframes tb-float {
          0%, 100% { opacity: 0.18; transform: translateY(0px) scale(1); }
          50%       { opacity: 0.45; transform: translateY(-12px) scale(1.2); }
        }
        @keyframes tb-word-in {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0px); }
        }
        @keyframes tb-line-in {
          from { opacity: 0; width: 0px; }
          to   { opacity: 1; width: 80px; }
        }
        @keyframes tb-oval-draw {
          from { stroke-dashoffset: ${circumference}; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes tb-stat-in {
          from { opacity: 0; transform: translateY(20px) scale(0.92); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .tb-word {
          display: inline-block;
          opacity: 0;
        }
        .tb-word.tb-visible {
          animation: tb-word-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .tb-oval-path {
          stroke-dasharray: ${circumference};
          stroke-dashoffset: ${circumference};
        }
        .tb-oval-path.tb-drawn {
          animation: tb-oval-draw 1.25s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .tb-underline {
          opacity: 0;
          width: 0;
        }
        .tb-underline.tb-visible {
          animation: tb-line-in 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .tb-glow {
          animation: tb-breathe 5s ease-in-out infinite;
        }
        .tb-particle {
          animation: tb-float var(--tb-dur) ease-in-out infinite;
          animation-delay: var(--tb-delay);
        }
      `}</style>

      <section
        id="trust-banner"
        data-ocid="trust.section"
        ref={sectionRef}
        className="relative w-full overflow-hidden"
        style={{
          minHeight: "60vh",
          backgroundColor: "#0F172A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Breathing radial glow */}
        <div
          className="tb-glow absolute pointer-events-none"
          style={{
            width: "70%",
            height: "70%",
            left: "15%",
            top: "15%",
            background:
              "radial-gradient(ellipse at center, rgba(37,99,235,0.35) 0%, transparent 68%)",
            borderRadius: "50%",
          }}
        />

        {/* Secondary warm glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "40%",
            height: "40%",
            left: "30%",
            top: "30%",
            background:
              "radial-gradient(ellipse at center, rgba(234,179,8,0.06) 0%, transparent 70%)",
            borderRadius: "50%",
            animation: "tb-breathe 7s ease-in-out infinite reverse",
          }}
        />

        {/* Floating particles */}
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="tb-particle absolute rounded-full pointer-events-none"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              background: "#EAB308",
              opacity: visible ? undefined : 0,
              transition: visible ? "opacity 0.6s ease" : "none",
              ["--tb-dur" as string]: p.dur,
              ["--tb-delay" as string]: p.delay,
              animationPlayState: visible ? "running" : "paused",
            }}
          />
        ))}

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-20 text-center w-full max-w-6xl mx-auto">
          {/* Headline */}
          <h2
            className="leading-tight tracking-tight"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 5.5rem)",
              fontWeight: 900,
              color: "#F1F5F9",
              fontFamily: '"Plus Jakarta Sans", "Inter", system-ui, sans-serif',
              letterSpacing: "-0.02em",
              lineHeight: 1.12,
            }}
          >
            {WORDS.map((word, idx) => (
              <span key={word.text} style={{ display: "inline" }}>
                {idx > 0 && " "}
                {word.text === "Reliable." ? (
                  <span
                    className={`tb-word${visible ? " tb-visible" : ""}`}
                    style={{
                      animationDelay: word.delay,
                      position: "relative",
                      display: "inline-block",
                    }}
                  >
                    <span style={{ position: "relative", zIndex: 2 }}>
                      Reliable.
                    </span>

                    {/* SVG hand-drawn oval */}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 280 84"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "108%",
                        height: "140%",
                        overflow: "visible",
                        pointerEvents: "none",
                        zIndex: 3,
                      }}
                    >
                      <ellipse
                        className={`tb-oval-path${ovalDrawn ? " tb-drawn" : ""}`}
                        cx={cx}
                        cy={cy}
                        rx={rx}
                        ry={ry}
                        fill="none"
                        stroke="#EAB308"
                        strokeWidth="5"
                        strokeLinecap="round"
                        transform="rotate(-2, 140, 42)"
                        style={{
                          filter: "drop-shadow(0 0 8px rgba(234,179,8,0.6))",
                          animationDuration: "1.25s",
                        }}
                      />
                      <ellipse
                        cx={cx + 3}
                        cy={cy + 1}
                        rx={rx - 8}
                        ry={ry - 6}
                        fill="none"
                        stroke="rgba(234,179,8,0.3)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        transform="rotate(1.5, 140, 42)"
                        style={{
                          opacity: ovalDrawn ? 1 : 0,
                          transition: "opacity 0.4s ease 1.4s",
                          strokeDasharray: "4 6",
                        }}
                      />
                    </svg>
                  </span>
                ) : (
                  <span
                    className={`tb-word${visible ? " tb-visible" : ""}`}
                    style={{ animationDelay: word.delay }}
                  >
                    {word.text}
                  </span>
                )}
              </span>
            ))}
          </h2>

          {/* Golden underline */}
          <div
            className={`tb-underline${lineVisible ? " tb-visible" : ""}`}
            style={{
              height: "3px",
              marginTop: "clamp(1.5rem, 3vw, 2rem)",
              background:
                "linear-gradient(90deg, #EAB308 0%, #FDE68A 50%, #EAB308 100%)",
              borderRadius: "2px",
              boxShadow: "0 0 12px rgba(234,179,8,0.5)",
            }}
          />

          {/* Trust stat pills — staggered fade-in */}
          <div
            ref={statsRef as React.RefObject<HTMLDivElement>}
            className="flex flex-wrap items-center justify-center gap-3 mt-10"
          >
            {TRUST_STATS.map((stat, i) => (
              <div
                key={stat.label}
                data-ocid={`trust.item.${i + 1}`}
                className="flex flex-col items-center px-5 py-3 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: `1px solid ${stat.color}44`,
                  boxShadow: `0 0 16px ${stat.color}22`,
                  opacity: statsVisible ? 1 : 0,
                  transform: statsVisible
                    ? "translateY(0) scale(1)"
                    : "translateY(20px) scale(0.92)",
                  transition: `opacity 0.6s ease ${i * 120}ms, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) ${i * 120}ms`,
                }}
              >
                <span
                  className="font-black text-lg"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs font-medium"
                  style={{ color: "rgba(241,245,249,0.6)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Tagline */}
          <p
            className="mt-6"
            style={{
              color: "rgba(241,245,249,0.45)",
              fontSize: "clamp(0.85rem, 1.5vw, 1.05rem)",
              letterSpacing: "0.18em",
              fontWeight: 500,
              textTransform: "uppercase",
              opacity: lineVisible ? 1 : 0,
              transform: lineVisible ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            Rocket.Money — Your Trusted Financial Partner
          </p>
        </div>

        {/* Decorative corners */}
        <div
          className="absolute top-0 left-0 pointer-events-none"
          style={{
            width: "180px",
            height: "180px",
            borderTop: "1px solid rgba(234,179,8,0.12)",
            borderLeft: "1px solid rgba(234,179,8,0.12)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 pointer-events-none"
          style={{
            width: "180px",
            height: "180px",
            borderBottom: "1px solid rgba(234,179,8,0.12)",
            borderRight: "1px solid rgba(234,179,8,0.12)",
          }}
        />
      </section>
    </>
  );
}
