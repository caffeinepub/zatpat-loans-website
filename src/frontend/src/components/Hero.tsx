import { ArrowRight, CheckCircle2, Play, Star } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onApplyNow: () => void;
}

export default function Hero({ onApplyNow }: HeroProps) {
  return (
    <section
      id="home"
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FFF9F5 0%, #FFE8D0 40%, #FFDAB0 70%, #FFC880 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-[-80px] right-[-80px] w-[480px] h-[480px] rounded-full pointer-events-none animate-blob-pulse"
        style={{
          background: "radial-gradient(circle, #FFB870 0%, transparent 70%)",
          opacity: 0.28,
        }}
      />
      <div
        className="absolute bottom-[-60px] left-[-60px] w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #FFD49A 0%, transparent 70%)",
          opacity: 0.22,
          animation: "blob-pulse 8s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-56 h-56 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #FFAA55 0%, transparent 70%)",
          opacity: 0.15,
          animation: "blob-pulse 5s ease-in-out infinite",
        }}
      />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#FFB347 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.08,
        }}
      />

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
                background: "rgba(255,140,0,0.12)",
                color: "#C45000",
                border: "1px solid rgba(255,140,0,0.25)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              India's Fastest Loan Platform
            </motion.div>

            <h1
              className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6"
              style={{ color: "#1A0A00" }}
            >
              Get Instant{" "}
              <span
                style={{
                  color: "#E04800",
                  background:
                    "linear-gradient(135deg, #FF5500 0%, #FF8C00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Personal Loans
              </span>{" "}
              in Minutes
            </h1>

            <p
              className="text-lg lg:text-xl mb-8 max-w-xl leading-relaxed"
              style={{ color: "rgba(120,40,0,0.65)" }}
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
                  style={{ color: "#7A2800" }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0"
                    style={{ background: "#FF6B1A" }}
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
                  border: "2px solid #FFA04D",
                  color: "#B84500",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(255,160,77,0.15)";
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
              style={{ borderTop: "1px solid rgba(255,140,0,0.2)" }}
            >
              {[
                { label: "50,000+", sub: "Happy customers" },
                { label: "4.8★", sub: "App rating" },
                { label: "₹50 Cr+", sub: "Loans disbursed" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="text-xl font-black"
                    style={{ color: "#E04800" }}
                  >
                    {stat.label}
                  </span>
                  <span
                    className="text-xs font-medium"
                    style={{ color: "rgba(120,40,0,0.6)" }}
                  >
                    {stat.sub}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Phone mockup + floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
            className="flex justify-center lg:justify-end relative"
          >
            {/* Warm glow backdrop */}
            <div
              className="absolute inset-0 rounded-full blur-3xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, #FFB347 0%, transparent 60%)",
                opacity: 0.4,
              }}
            />

            <div className="animate-float relative z-10">
              <img
                src="/assets/generated/hero-phone-mockup-transparent.dim_500x600.png"
                alt="Zatpat.loans App"
                className="w-64 lg:w-80 xl:w-96 object-contain drop-shadow-2xl"
              />
            </div>

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
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
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
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "#FFF3E0" }}
              >
                <Star size={18} style={{ color: "#FF8C00" }} fill="#FF8C00" />
              </div>
              <div className="flex flex-col">
                <span
                  className="text-sm font-black"
                  style={{ color: "#1A0A00" }}
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
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
