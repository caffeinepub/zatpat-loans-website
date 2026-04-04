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
      "Choose from 3 to 36 month tenure plans that fit your budget and financial goals.",
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
    borderRadius: "20px",
    padding: "32px 28px",
    position: "relative",
    overflow: "hidden",
    cursor: "default",
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? hovered
        ? "perspective(600px) rotateX(-6deg) rotateY(6deg) translateY(-6px) scale(1.03)"
        : "perspective(600px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)"
      : "translateY(48px)",
    transition: isVisible
      ? `opacity 0.7s ease ${index * 80}ms, transform 0.3s ease`
      : `opacity 0.7s ease ${index * 80}ms, transform 0.7s ease ${index * 80}ms`,
    boxShadow: hovered
      ? `0 24px 60px ${config.glowColor}, 0 8px 24px rgba(0,0,0,0.18)`
      : `0 8px 32px ${config.glowColor}, 0 2px 8px rgba(0,0,0,0.1)`,
    borderBottom: "2px solid rgba(255,255,255,0.25)",
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
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.18)",
    boxShadow: `0 0 0 8px rgba(255,255,255,0.08), 0 0 20px ${config.glowColor}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
    transform: isVisible ? "scale(1)" : "scale(0)",
    transition: `transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 80 + 300}ms`,
  };

  const sparkleStyle: React.CSSProperties = {
    position: "absolute",
    top: config.sparkleTop,
    right: config.sparkleRight,
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.15)",
    animation: "sparkleFloat 3s ease-in-out infinite",
    animationDelay: `${index * 0.4}s`,
  };

  return (
    <div
      data-ocid={`features.item.${index + 1}`}
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={shimmerStyle} />
      <div style={sparkleStyle} />
      <div
        style={{
          position: "absolute",
          bottom: "-30px",
          right: "-30px",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-20px",
          left: "-20px",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.04)",
          pointerEvents: "none",
        }}
      />
      <div style={iconWrapStyle}>
        <Icon size={26} color="white" />
      </div>
      <h3
        style={{
          color: "#ffffff",
          fontWeight: 800,
          fontSize: "1.15rem",
          marginBottom: "10px",
          letterSpacing: "-0.01em",
        }}
      >
        {config.title}
      </h3>
      <p
        style={{
          color: "rgba(255,255,255,0.88)",
          fontSize: "0.9rem",
          lineHeight: 1.65,
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
      style={{ padding: "80px 0 96px", background: "#F8FAFC" }}
    >
      <style>{`
        @keyframes sparkleFloat {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.15; }
          50% { transform: translateY(-8px) scale(1.4); opacity: 0.3; }
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

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "56px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
            WHY ROCKET.MONEY
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 900,
              color: "#1E293B",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          >
            Why Choose <span style={{ color: "#FF6A00" }}>Rocket.Money</span>?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(30,41,59,0.7)",
              maxWidth: "540px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            We’ve reimagined personal lending to make it faster, simpler, and
            more transparent than ever before.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
            marginBottom: "40px",
          }}
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
          style={{
            textAlign: "center",
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
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
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
