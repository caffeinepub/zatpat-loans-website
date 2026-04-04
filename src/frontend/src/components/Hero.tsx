import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Play,
  Shield,
  Star,
} from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onApplyNow: () => void;
}

const SPARKLE_DOTS = [
  {
    top: "12%",
    left: "18%",
    size: 8,
    delay: "0s",
    color: "#FF6A00",
    id: "dot-orange-top",
  },
  {
    top: "25%",
    right: "10%",
    size: 6,
    delay: "0.8s",
    color: "#2563EB",
    id: "dot-blue-upper",
  },
  {
    top: "65%",
    left: "8%",
    size: 7,
    delay: "1.4s",
    color: "#22C55E",
    id: "dot-green-lower",
  },
  {
    top: "78%",
    right: "18%",
    size: 5,
    delay: "2s",
    color: "#FBBF24",
    id: "dot-yellow-bottom",
  },
  {
    top: "45%",
    right: "5%",
    size: 6,
    delay: "0.4s",
    color: "#FF6A00",
    id: "dot-orange-mid",
  },
];

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
        className="absolute top-[-80px] right-[-80px] w-[480px] h-[480px] rounded-full pointer-events-none animate-blob-pulse"
        style={{
          background: "radial-gradient(circle, #1D4ED8 0%, transparent 70%)",
          opacity: 0.25,
        }}
      />
      <div
        className="absolute bottom-[-60px] left-[-60px] w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #FF6A00 0%, transparent 70%)",
          opacity: 0.18,
          animation: "blob-pulse 8s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-56 h-56 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #2563EB 0%, transparent 70%)",
          opacity: 0.12,
          animation: "blob-pulse 5s ease-in-out infinite",
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

      {/* Sparkle / particle animation keyframes */}
      <style>{`
        @keyframes sparkle-float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.7; }
          50% { transform: translateY(-14px) scale(1.3); opacity: 1; }
        }
        @keyframes ring-pulse {
          0%, 100% { transform: scale(1); opacity: 0.35; }
          50% { transform: scale(1.06); opacity: 0.55; }
        }
        @keyframes shimmer-rotate {
          0% { transform: translate(-50%, -45%) rotate(0deg); }
          100% { transform: translate(-50%, -45%) rotate(360deg); }
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6"
              style={{
                background: "rgba(37,99,235,0.15)",
                color: "#93C5FD",
                border: "1px solid rgba(37,99,235,0.3)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              India's Fastest Loan Platform
            </motion.div>

            <h1
              className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6"
              style={{ color: "#F8FAFC" }}
            >
              Get Instant{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #FF6A00 0%, #FBBF24 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Personal Loans
              </span>{" "}
              in Minutes
            </h1>

            <p
              className="text-lg lg:text-xl mb-8 max-w-xl leading-relaxed"
              style={{ color: "rgba(148, 163, 184, 0.9)" }}
            >
              Quick approvals, minimal paperwork, 100% digital process. Get
              funds in your account within hours — not days.
            </p>

            {/* Key points */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
              {[
                "₹1K – ₹5L Loans",
                "5-Min Approval",
                "No Collateral",
                "100% Digital",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-sm font-semibold"
                  style={{ color: "rgba(203, 213, 225, 1)" }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0"
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
              className="flex flex-wrap gap-4"
            >
              <button
                type="button"
                data-ocid="hero.primary_button"
                onClick={onApplyNow}
                className="btn-brand flex items-center gap-2 text-base px-8 py-4"
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
                className="flex items-center gap-2 text-base px-8 py-4 rounded-xl font-semibold transition-all duration-200"
                style={{
                  border: "2px solid #2563EB",
                  color: "#93C5FD",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(37,99,235,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "transparent";
                }}
              >
                <Play size={16} /> Learn More
              </button>
            </motion.div>

            {/* Trust badges row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap items-center gap-5 mt-10 pt-8"
              style={{ borderTop: "1px solid rgba(37,99,235,0.25)" }}
            >
              {[
                { label: "50,000+", sub: "Happy customers" },
                { label: "4.8★", sub: "App rating" },
                { label: "₹50 Cr+", sub: "Loans disbursed" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="text-xl font-black"
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

          {/* Right: Indian model + floating cards + animated decorations */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
            className="flex justify-center lg:justify-end relative"
          >
            {/* Outer pulsing blue glow ring */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 70% 80% at 50% 55%, rgba(37,99,235,0.38) 0%, transparent 65%)",
                animation: "ring-pulse 4s ease-in-out infinite",
              }}
            />

            {/* Orange glow ring (matches model's outfit) */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 55% 65% at 55% 60%, rgba(255,106,0,0.22) 0%, transparent 65%)",
                animation: "ring-pulse 4s ease-in-out infinite 1.5s",
              }}
            />

            {/* Shimmer rotating conic ring */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: "420px",
                height: "420px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -45%) rotate(0deg)",
                background:
                  "conic-gradient(from 0deg, rgba(37,99,235,0.18) 0deg, rgba(255,106,0,0.12) 120deg, rgba(34,197,94,0.1) 240deg, rgba(37,99,235,0.18) 360deg)",
                animation: "shimmer-rotate 12s linear infinite",
                borderRadius: "50%",
              }}
            />

            {/* Sparkle particle dots */}
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

            {/* Model image with float animation */}
            <div className="animate-float relative z-10">
              <img
                src="/assets/generated/hero-indian-model-transparent.dim_500x650.png"
                alt="Zatpat.loans - Easy Personal Loans for Indians"
                className="w-64 lg:w-80 xl:w-96 object-contain drop-shadow-2xl"
                style={{
                  filter:
                    "drop-shadow(0 20px 40px rgba(37,99,235,0.3)) drop-shadow(0 0 60px rgba(255,106,0,0.2))",
                }}
              />
            </div>

            {/* Floating badge: 5 Min Approval (top-left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                delay: 1.0,
                duration: 0.5,
                type: "spring",
                bounce: 0.45,
              }}
              className="absolute top-8 left-0 z-20 flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl shadow-xl pointer-events-none"
              style={{
                background: "rgba(15,23,42,0.92)",
                border: "1px solid rgba(37,99,235,0.4)",
                boxShadow: "0 8px 32px rgba(37,99,235,0.25)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(37,99,235,0.2)" }}
              >
                <Clock size={16} style={{ color: "#60A5FA" }} />
              </div>
              <div className="flex flex-col">
                <span
                  className="text-xs font-bold"
                  style={{ color: "#F8FAFC" }}
                >
                  5 Min Approval
                </span>
                <span className="text-[10px]" style={{ color: "#93C5FD" }}>
                  Fastest in India
                </span>
              </div>
            </motion.div>

            {/* Floating badge: 100% Safe (mid-right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                delay: 1.7,
                duration: 0.5,
                type: "spring",
                bounce: 0.45,
              }}
              className="absolute z-20 flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl shadow-xl pointer-events-none"
              style={{
                background: "rgba(15,23,42,0.92)",
                border: "1px solid rgba(34,197,94,0.35)",
                boxShadow: "0 8px 32px rgba(34,197,94,0.2)",
                backdropFilter: "blur(8px)",
                top: "50%",
                right: "-8px",
                transform: "translateY(-50%)",
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(34,197,94,0.15)" }}
              >
                <Shield size={16} style={{ color: "#22C55E" }} />
              </div>
              <div className="flex flex-col">
                <span
                  className="text-xs font-bold"
                  style={{ color: "#F8FAFC" }}
                >
                  100% Safe
                </span>
                <span className="text-[10px]" style={{ color: "#86EFAC" }}>
                  RBI Compliant
                </span>
              </div>
            </motion.div>

            {/* Floating card: Loan Approved */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: 1.1,
                duration: 0.5,
                type: "spring",
                bounce: 0.4,
              }}
              className="absolute top-6 right-0 z-20 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl shadow-xl pointer-events-none"
              style={{
                background: "white",
                boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
              }}
            >
              <CheckCircle2 size={20} style={{ color: "#22C55E" }} />
              <div className="flex flex-col">
                <span
                  className="text-xs font-bold"
                  style={{ color: "#166534" }}
                >
                  ₹50,000 Approved!
                </span>
                <span className="text-[10px]" style={{ color: "#6B7280" }}>
                  Just now · Instant disbursal
                </span>
              </div>
            </motion.div>

            {/* Floating card: Rating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: 1.4,
                duration: 0.5,
                type: "spring",
                bounce: 0.35,
              }}
              className="absolute bottom-16 -left-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl pointer-events-none"
              style={{
                background: "white",
                boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
              }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "#EFF6FF" }}
              >
                <Star size={18} style={{ color: "#2563EB" }} fill="#2563EB" />
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
                  50K+ Happy Customers
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
