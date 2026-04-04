import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Play,
  Shield,
  Star,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface HeroProps {
  onApplyNow: () => void;
}

const SPARKLE_DOTS = [
  {
    top: "12%",
    left: "18%",
    size: 6,
    delay: "0s",
    color: "#FF6A00",
    id: "dot-orange-top",
  },
  {
    top: "25%",
    right: "10%",
    size: 5,
    delay: "0.8s",
    color: "#2563EB",
    id: "dot-blue-upper",
  },
  {
    top: "65%",
    left: "8%",
    size: 5,
    delay: "1.4s",
    color: "#22C55E",
    id: "dot-green-lower",
  },
  {
    top: "78%",
    right: "18%",
    size: 4,
    delay: "2s",
    color: "#FBBF24",
    id: "dot-yellow-bottom",
  },
];

function LiveLoanCounter() {
  const [count, setCount] = useState(243);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="flex justify-center sm:justify-start"
      style={{ marginTop: "16px" }}
    >
      <div
        className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold"
        style={{
          background: "rgba(34,197,94,0.12)",
          border: "1px solid rgba(34,197,94,0.3)",
          color: "#86EFAC",
        }}
      >
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{
            background: "#22C55E",
            boxShadow: "0 0 6px #22C55E",
            animation: "pulse 1.5s ease-in-out infinite",
          }}
        />
        <span style={{ fontVariantNumeric: "tabular-nums" }}>
          ✅ {count} loans approved today
        </span>
      </div>
    </motion.div>
  );
}

export default function Hero({ onApplyNow }: HeroProps) {
  return (
    <section
      id="home"
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0F172A 0%, #0D1F3C 50%, #0F172A 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-[-40px] right-[-40px] sm:top-[-80px] sm:right-[-80px] w-[240px] h-[240px] sm:w-[480px] sm:h-[480px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #1D4ED8 0%, transparent 70%)",
          opacity: 0.25,
          animation: "blob-pulse 6s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[-30px] left-[-30px] sm:bottom-[-60px] sm:left-[-60px] w-48 h-48 sm:w-80 sm:h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #FF6A00 0%, transparent 70%)",
          opacity: 0.18,
          animation: "blob-pulse 8s ease-in-out infinite reverse",
        }}
      />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#3B82F6 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.06,
        }}
      />

      {/* Keyframes */}
      <style>{`
        @keyframes sparkle-float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.7; }
          50% { transform: translateY(-10px) scale(1.2); opacity: 1; }
        }
        @keyframes ring-pulse {
          0%, 100% { transform: scale(1); opacity: 0.35; }
          50% { transform: scale(1.06); opacity: 0.55; }
        }
        @keyframes shimmer-rotate {
          0% { transform: translate(-50%, -45%) rotate(0deg); }
          100% { transform: translate(-50%, -45%) rotate(360deg); }
        }
        @keyframes cta-bounce-once {
          0%   { transform: scale(1); }
          40%  { transform: scale(1.05); }
          70%  { transform: scale(0.98); }
          100% { transform: scale(1); }
        }
        .cta-bounce {
          animation: cta-bounce-once 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 1.2s both;
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Text + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center sm:items-start text-center sm:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold mb-4 sm:mb-6"
              style={{
                background: "rgba(37,99,235,0.15)",
                color: "#93C5FD",
                border: "1px solid rgba(37,99,235,0.3)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse flex-shrink-0" />
              India's Fastest Loan Platform — No CIBIL Required
            </motion.div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-3 sm:mb-4"
              style={{ color: "#F8FAFC" }}
            >
              Loans for{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #FF6A00 0%, #FBBF24 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Every Indian
              </span>{" "}
              — Any CIBIL Score
            </h1>

            {/* Live counter */}
            <LiveLoanCounter />

            <p
              className="text-sm sm:text-base lg:text-lg mt-4 sm:mt-6 mb-4 sm:mb-6 max-w-xl leading-relaxed"
              style={{ color: "rgba(148, 163, 184, 0.9)" }}
            >
              Low CIBIL? No CIBIL? No problem. Get up to ₹5,000 instantly — 100%
              digital, zero paperwork, same day disbursal.
            </p>

            {/* Key points */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2 sm:gap-x-6 sm:gap-y-3 mb-6 sm:mb-8 w-full">
              {[
                "Up to ₹5,000 Loans",
                "5-Min Approval",
                "No CIBIL Check",
                "100% Digital",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold"
                  style={{ color: "rgba(203, 213, 225, 1)" }}
                >
                  <span
                    className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0"
                    style={{ background: "#2563EB" }}
                  >
                    ✓
                  </span>
                  {item}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 items-center w-full sm:w-auto"
            >
              <button
                type="button"
                data-ocid="hero.primary_button"
                onClick={onApplyNow}
                className="cta-bounce btn-brand flex items-center justify-center gap-2 text-sm sm:text-base px-6 py-4 w-full sm:w-auto min-h-[48px]"
              >
                Apply Now <ArrowRight size={18} />
              </button>
              <button
                type="button"
                data-ocid="hero.secondary_button"
                onClick={() => {
                  const el = document.querySelector("#how-it-works");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center justify-center gap-2 text-sm sm:text-base px-6 py-4 rounded-xl font-semibold transition-all duration-200 w-full sm:w-auto min-h-[48px]"
                style={{
                  border: "2px solid #2563EB",
                  color: "#93C5FD",
                  background: "transparent",
                }}
              >
                <Play size={16} /> Learn More
              </button>
            </motion.div>

            {/* Trust micro-copy */}
            <p
              className="mt-3 text-xs text-center sm:text-left"
              style={{ color: "rgba(148,163,184,0.7)" }}
            >
              No CIBIL check • Low credit welcome • Same day disbursal
            </p>

            {/* Trust badges row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center justify-center sm:justify-start gap-4 sm:gap-5 mt-6 pt-6 w-full"
              style={{ borderTop: "1px solid rgba(37,99,235,0.25)" }}
            >
              {[
                { label: "50,000+", sub: "Happy customers" },
                { label: "4.8★", sub: "App rating" },
                { label: "₹50 Cr+", sub: "Disbursed" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center sm:items-start"
                >
                  <span
                    className="text-base sm:text-xl font-black"
                    style={{ color: "#FF6A00" }}
                  >
                    {stat.label}
                  </span>
                  <span
                    className="text-xs font-medium"
                    style={{ color: "rgba(148,163,184,1)" }}
                  >
                    {stat.sub}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Family banner + floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
            className="flex justify-center lg:justify-end relative mt-4 lg:mt-0"
          >
            {/* Glow rings — hidden on mobile to reduce clutter */}
            <div
              className="hidden sm:block absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(37,99,235,0.28) 0%, transparent 70%)",
                animation: "ring-pulse 4s ease-in-out infinite",
              }}
            />

            {/* Sparkle dots — hidden on mobile */}
            <div className="hidden sm:block">
              {SPARKLE_DOTS.map((dot) => (
                <div
                  key={dot.id}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: dot.size,
                    height: dot.size,
                    top: dot.top,
                    left: (dot as { left?: string }).left,
                    right: (dot as { right?: string }).right,
                    background: dot.color,
                    boxShadow: `0 0 8px 2px ${dot.color}88`,
                    animation: `sparkle-float 3s ease-in-out infinite ${dot.delay}`,
                  }}
                />
              ))}
            </div>

            {/* Family banner image */}
            <div className="animate-float relative z-10 w-full">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(37,99,235,0.35), 0 0 40px rgba(37,99,235,0.25), 0 0 80px rgba(255,106,0,0.12)",
                }}
              >
                <img
                  src="/assets/generated/rocket-money-hero-banner.dim_1920x1080.jpg"
                  alt="Rocket.Money - Premium fintech hero banner"
                  className="w-full object-cover rounded-2xl"
                  style={{ aspectRatio: "16/9" }}
                />
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(15,23,42,0.45) 0%, transparent 50%)",
                  }}
                />
              </div>
            </div>

            {/* Floating badges — simplified on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                delay: 1.0,
                duration: 0.5,
                type: "spring",
                bounce: 0.45,
              }}
              className="absolute top-2 left-2 sm:top-4 sm:left-4 z-20 flex items-center gap-2 px-2.5 py-2 sm:px-3.5 sm:py-2.5 rounded-xl shadow-xl pointer-events-none"
              style={{
                background: "rgba(15,23,42,0.92)",
                border: "1px solid rgba(37,99,235,0.4)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Clock size={14} style={{ color: "#60A5FA", flexShrink: 0 }} />
              <div className="flex flex-col">
                <span
                  className="text-xs font-bold"
                  style={{ color: "#F8FAFC" }}
                >
                  5 Min
                </span>
                <span
                  className="text-[9px] sm:text-[10px]"
                  style={{ color: "#93C5FD" }}
                >
                  No CIBIL
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.7, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                delay: 1.7,
                duration: 0.5,
                type: "spring",
                bounce: 0.45,
              }}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 flex items-center gap-2 px-2.5 py-2 sm:px-3.5 sm:py-2.5 rounded-xl shadow-xl pointer-events-none"
              style={{
                background: "rgba(15,23,42,0.92)",
                border: "1px solid rgba(34,197,94,0.35)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Shield size={14} style={{ color: "#22C55E", flexShrink: 0 }} />
              <div className="flex flex-col">
                <span
                  className="text-xs font-bold"
                  style={{ color: "#F8FAFC" }}
                >
                  100% Safe
                </span>
                <span
                  className="text-[9px] sm:text-[10px]"
                  style={{ color: "#86EFAC" }}
                >
                  All CIBIL
                </span>
              </div>
            </motion.div>

            {/* Bottom floating cards — only show on sm+ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: 1.1,
                duration: 0.5,
                type: "spring",
                bounce: 0.4,
              }}
              className="hidden sm:flex absolute bottom-4 right-4 z-20 items-center gap-2.5 px-4 py-2.5 rounded-2xl shadow-xl pointer-events-none"
              style={{
                background: "white",
                boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
              }}
            >
              <CheckCircle2 size={18} style={{ color: "#22C55E" }} />
              <div className="flex flex-col">
                <span
                  className="text-xs font-bold"
                  style={{ color: "#166534" }}
                >
                  ₹5,000 Approved!
                </span>
                <span className="text-[10px]" style={{ color: "#6B7280" }}>
                  Just now · Instant
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: 1.4,
                duration: 0.5,
                type: "spring",
                bounce: 0.35,
              }}
              className="hidden sm:flex absolute bottom-4 left-4 z-20 items-center gap-3 px-4 py-3 rounded-2xl shadow-xl pointer-events-none"
              style={{
                background: "white",
                boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "#EFF6FF" }}
              >
                <Star size={16} style={{ color: "#2563EB" }} fill="#2563EB" />
              </div>
              <div className="flex flex-col">
                <span
                  className="text-sm font-black"
                  style={{ color: "#1E293B" }}
                >
                  4.8 Rating
                </span>
                <span
                  className="text-[10px] font-medium"
                  style={{ color: "#6B7280" }}
                >
                  50K+ Customers
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Wave decoration"
        >
          <title>Wave decoration</title>
          <path
            d="M0 80L1440 80L1440 20C1200 70 800 0 440 40C200 65 80 15 0 20L0 80Z"
            fill="#F8FAFC"
          />
        </svg>
      </div>
    </section>
  );
}
