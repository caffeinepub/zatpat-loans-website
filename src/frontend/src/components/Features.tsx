import {
  Clock,
  FileText,
  RotateCcw,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const features = [
  {
    icon: Zap,
    title: "Instant Approval",
    description:
      "Get your loan approved in as little as 5 minutes with our AI-powered credit assessment system.",
  },
  {
    icon: Shield,
    title: "No Collateral",
    description:
      "No need to pledge any assets. Our personal loans are completely unsecured and hassle-free.",
  },
  {
    icon: FileText,
    title: "Minimal Documents",
    description:
      "Just Aadhaar, PAN, and a selfie. We've simplified the process to just the essentials.",
  },
  {
    icon: Smartphone,
    title: "100% Digital",
    description:
      "Apply, get approved, and receive money — entirely from your smartphone, anytime, anywhere.",
  },
  {
    icon: Clock,
    title: "Quick Disbursal",
    description:
      "Once approved, funds are transferred directly to your bank account within 2–4 hours.",
  },
  {
    icon: RotateCcw,
    title: "Flexible Repayment",
    description:
      "Choose from 3 to 36 month tenure plans that fit your budget and financial goals.",
  },
];

export default function Features() {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="features"
      data-ocid="features.section"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-3 px-4 py-1.5 rounded-full"
            style={{ background: "#FFF1E8", color: "#FF5500" }}
          >
            Our Benefits
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 section-title-underline">
            Why Choose <span style={{ color: "#FF5500" }}>Zatpat.loans</span>?
          </h2>
          <p className="text-gray-500 mt-6 text-lg max-w-2xl mx-auto">
            We've reimagined personal lending to make it faster, simpler, and
            more transparent than ever before.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              data-ocid={`features.item.${index + 1}`}
              className="card-feature group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.7s ease ${index * 100}ms, transform 0.7s ease ${index * 100}ms`,
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "#FFF1E8" }}
              >
                <feature.icon size={26} style={{ color: "#FF5500" }} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
