import { ArrowRight, Play } from "lucide-react";
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
          "linear-gradient(135deg, #1A0A00 0%, #2D1200 40%, #3D1800 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-[-80px] right-[-80px] w-96 h-96 rounded-full opacity-20 animate-blob-pulse pointer-events-none"
        style={{
          background: "radial-gradient(circle, #FF5500 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-60px] left-[-60px] w-72 h-72 rounded-full opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #FF5500 0%, transparent 70%)",
          animation: "blob-pulse 8s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #FF8833 0%, transparent 70%)",
          animation: "blob-pulse 5s ease-in-out infinite",
        }}
      />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#FF5500 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6"
              style={{
                background: "rgba(255,85,0,0.2)",
                color: "#FF8840",
                border: "1px solid rgba(255,85,0,0.3)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              India's Fastest Loan Platform
            </motion.div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6">
              Get Instant{" "}
              <span style={{ color: "#FF5500" }}>Personal Loans</span> in
              Minutes
            </h1>

            <p className="text-lg lg:text-xl text-white/70 mb-8 max-w-xl leading-relaxed">
              Quick approvals, minimal paperwork, 100% digital process. Get
              funds in your account within hours — not days.
            </p>

            {/* Key points */}
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                "₹1K – ₹5L Loans",
                "5-Min Approval",
                "No Collateral",
                "100% Digital",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-sm font-medium text-white/80"
                >
                  <span
                    className="w-4 h-4 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                    style={{ background: "#FF5500" }}
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
                className="btn-outline-brand flex items-center gap-2 text-base px-8 py-4"
              >
                <Play size={16} /> Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
            className="flex justify-center lg:justify-end relative"
          >
            {/* Glow backdrop */}
            <div
              className="absolute inset-0 rounded-full opacity-30 blur-3xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, #FF5500 0%, transparent 60%)",
              }}
            />
            <div className="animate-float relative z-10">
              <img
                src="/assets/generated/hero-phone-mockup-transparent.dim_500x600.png"
                alt="Zatpat.loans App"
                className="w-64 lg:w-80 xl:w-96 object-contain drop-shadow-2xl"
              />
            </div>
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
