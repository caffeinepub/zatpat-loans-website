import {
  Clock,
  FileText,
  RotateCcw,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const CARD_CONFIGS = [
  {
    icon: Zap,
    title: "Instant Approval",
    description:
      "Get your loan approved in as little as 5 minutes with our AI-powered credit assessment system.",
    gradient: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
    glowColor: "rgba(37, 99, 235, 0.45)",
    sparkleTop: "14%",
    sparkleRight: "18%",
  },
  {
    icon: Shield,
    title: "No Collateral",
    description:
      "No need to pledge any assets. Our personal loans are completely unsecured and hassle-free.",
    gradient: "linear-gradient(135deg, #FF6A00 0%, #EA580C 100%)",
    glowColor: "rgba(255, 106, 0, 0.45)",
    sparkleTop: "18%",
    sparkleRight: "14%",
  },
  {
    icon: FileText,
    title: "Minimal Documents",
    description:
      "Just Aadhaar, PAN, and a selfie. We've simplified the process to just the essentials.",
    gradient: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
    glowColor: "rgba(34, 197, 94, 0.45)",
    sparkleTop: "12%",
    sparkleRight: "22%",
  },
  {
    icon: Smartphone,
    title: "100% Digital",
    description:
      "Apply, get approved, and receive money — entirely from your smartphone, anytime, anywhere.",
    gradient: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
    glowColor: "rgba(124, 58, 237, 0.45)",
    sparkleTop: "16%",
    sparkleRight: "16%",
  },
  {
    icon: Clock,
    title: "Quick Disbursal",
    description:
      "Once approved, funds are transferred directly to your bank account within 2–4 hours.",
    gradient: "linear-gradient(135deg, #0891B2 0%, #0E7490 100%)",
    glowColor: "rgba(8, 145, 178, 0.45)",
    sparkleTop: "20%",
    sparkleRight: "12%",
  },
  {
    icon: RotateCcw,
    title: "Flexible Repayment",
    description:
      "Choose from 1 to 6 month tenure plans that fit your budget and financial goals.",
    gradient: "linear-gradient(135deg, #E11D48 0%, #BE185D 100%)",
    glowColor: "rgba(225, 29, 72, 0.45)",
    sparkleTop: "15%",
    sparkleRight: "20%",
  },
];

interface FeatureCardProps {
  config: (typeof CARD_CONFIGS)[0];
  index: number;
  isVisible: boolean;
}

function FeatureCard({ config, index, isVisible }: FeatureCardProps) {
  const [hovered, setHovered] = useState(false);
  const Icon = config.icon;

  const cardStyle: React.CSSProperties = {
    background: config.gradient,
    borderRadius: "16px",
    padding: "30px 26px",
    position: "relative",
    overflow: "hidden",
    cursor: "default",
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? hovered
        ? "translateY(-6px) scale(1.03) rotateX(2deg)"
        : "translateY(0) scale(1)"
      : "translateY(48px)",
    transition: isVisible
      ? `opacity 0.7s ease ${index * 80}ms, transform 0.3s ease`
      : `opacity 0.7s ease ${index * 80}ms, transform 0.7s ease ${index * 80}ms`,
    boxShadow: hovered
      ? `0 20px 56px ${config.glowColor}, 0 4px 16px rgba(0,0,0,0.14)`
      : `0 6px 24px ${config.glowColor}, 0 2px 8px rgba(0,0,0,0.08)`,
  };

  const shimmerStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: hovered ? "120%" : "-60%",
    width: "60%",
    height: "100%",
    background:
      "linear-gradient(105deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0) 100%)",
    transform: "skewX(-15deg)",
    transition: hovered ? "left 0.6s ease" : "left 0s",
    pointerEvents: "none",
  };

  const iconWrapStyle: React.CSSProperties = {
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.22)",
    boxShadow:
      "0 0 0 2px rgba(255,255,255,0.25), 0 0 0 8px rgba(255,255,255,0.06), 0 4px 16px rgba(0,0,0,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px",
    transform: isVisible ? "scale(1)" : "scale(0)",
    transition: `transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 80 + 300}ms`,
  };

  return (
    <div
      data-ocid={`features.item.${index + 1}`}
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Shimmer sweep */}
      <div style={shimmerStyle} />

      {/* Top-left glow orb */}
      <div
        style={{
          position: "absolute",
          top: "-20px",
          left: "-20px",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.12)",
          filter: "blur(20px)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom-right decorative circle */}
      <div
        style={{
          position: "absolute",
          bottom: "-24px",
          right: "-24px",
          width: "96px",
          height: "96px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom gradient accent line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
          pointerEvents: "none",
        }}
      />

      {/* Icon */}
      <div style={iconWrapStyle}>
        <Icon
          size={22}
          color="white"
          style={{
            filter: hovered
              ? "drop-shadow(0 0 8px rgba(255,255,255,0.5))"
              : "none",
            transition: "filter 0.2s ease",
          }}
        />
      </div>

      <h3
        style={{
          color: "#ffffff",
          fontWeight: 800,
          fontSize: "1rem",
          marginBottom: "8px",
          letterSpacing: "-0.01em",
        }}
      >
        {config.title}
      </h3>
      <p
        style={{
          color: "rgba(255,255,255,0.88)",
          fontSize: "0.85rem",
          lineHeight: 1.6,
        }}
      >
        {config.description}
      </p>
    </div>
  );
}

interface FeaturesProps {
  onApplyNow: () => void;
}

export default function Features({ onApplyNow: _onApplyNow }: FeaturesProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="features"
      data-ocid="features.section"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 sm:py-20 md:py-28"
      style={{ background: "#F8FAFC" }}
    >
      <style>{`
        @keyframes features-badge-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.3); }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-ocid^="features.item"] {
            transition: none !important;
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div
          className="text-center mb-10 sm:mb-14"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{
              background: "linear-gradient(135deg, #EFF6FF, #DBEAFE)",
              border: "1px solid rgba(37,99,235,0.25)",
              color: "#1D4ED8",
            }}
          >
            <span
              className="w-2 h-2 rounded-full inline-block flex-shrink-0"
              style={{
                background: "#2563EB",
                animation: "features-badge-pulse 2s infinite",
              }}
            />
            WHY ROCKET.MONEY
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black"
            style={{
              color: "#1E293B",
              lineHeight: 1.2,
              marginBottom: "12px",
            }}
          >
            Why Choose <span style={{ color: "#FF6A00" }}>Rocket.Money</span>?
          </h2>
          <p
            className="text-sm sm:text-base max-w-xl mx-auto"
            style={{ color: "rgba(30,41,59,0.7)", lineHeight: 1.65 }}
          >
            We've reimagined personal lending to make it faster, simpler, and
            more transparent than ever before.
          </p>
        </div>

        {/* Cards Grid — perspective enables 3D tilt */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8"
          style={{ perspective: "1000px" }}
        >
          {CARD_CONFIGS.map((config, index) => (
            <FeatureCard
              key={config.title}
              config={config}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Secondary CTA link */}
        <div
          className="text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s",
          }}
        >
          <button
            type="button"
            data-ocid="features.secondary_button"
            onClick={() => {
              const el = document.querySelector("#how-it-works");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 min-h-[44px] px-4"
            style={{
              color: "#2563EB",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            See How It Works →
          </button>
        </div>
      </div>
    </section>
  );
}
