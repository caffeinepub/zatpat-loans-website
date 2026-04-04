import { Banknote, Briefcase, CreditCard, FileCheck, User } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const criteria = [
  { icon: User, label: "Age", detail: "21 – 55 years" },
  { icon: Briefcase, label: "Employment", detail: "Salaried or Self-employed" },
  { icon: Banknote, label: "Monthly Income", detail: "₹15,000+ per month" },
  { icon: CreditCard, label: "Credit Score", detail: "650 or above" },
  {
    icon: FileCheck,
    label: "Documents",
    detail: "Aadhaar, PAN, Bank Statement",
  },
];

export default function Eligibility() {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="eligibility"
      data-ocid="eligibility.section"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-3 px-4 py-1.5 rounded-full"
            style={{ background: "#EFF6FF", color: "#2563EB" }}
          >
            Loan Details
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 section-title-underline">
            Loan Amount &amp;{" "}
            <span style={{ color: "#FF6A00" }}>Eligibility</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Loan range */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-32px)",
              transition: "opacity 0.7s ease 0ms, transform 0.7s ease 0ms",
            }}
          >
            <div
              className="rounded-3xl p-10 text-center relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)",
              }}
            >
              {/* Decorative circles */}
              <div
                className="absolute top-[-40px] right-[-40px] w-40 h-40 rounded-full opacity-20 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, #2563EB 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute bottom-[-30px] left-[-30px] w-32 h-32 rounded-full opacity-15 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, #2563EB 0%, transparent 70%)",
                }}
              />

              <p className="text-white/60 text-sm font-medium uppercase tracking-widest mb-4">
                Loan Range
              </p>
              <div
                className="text-5xl lg:text-6xl font-black mb-2"
                style={{ color: "#FF6A00" }}
              >
                ₹1,000
              </div>
              <div className="text-white/40 text-2xl font-bold mb-2">to</div>
              <div
                className="text-5xl lg:text-6xl font-black"
                style={{ color: "#FF6A00" }}
              >
                ₹5,00,000
              </div>
              <p className="text-white/50 text-sm mt-6">
                Flexible tenures from 3 to 36 months
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div
                  className="rounded-2xl p-4"
                  style={{ background: "rgba(37,99,235,0.15)" }}
                >
                  <div
                    className="text-2xl font-black"
                    style={{ color: "#FF6A00" }}
                  >
                    12%
                  </div>
                  <div className="text-white/60 text-xs mt-1">
                    Interest p.a.*
                  </div>
                </div>
                <div
                  className="rounded-2xl p-4"
                  style={{ background: "rgba(37,99,235,0.15)" }}
                >
                  <div
                    className="text-2xl font-black"
                    style={{ color: "#FF6A00" }}
                  >
                    0
                  </div>
                  <div className="text-white/60 text-xs mt-1">
                    Prepayment Charges
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Eligibility criteria */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(32px)",
              transition: "opacity 0.7s ease 200ms, transform 0.7s ease 200ms",
            }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Eligibility Criteria
            </h3>
            <div className="space-y-4">
              {criteria.map((item, index) => (
                <div
                  key={item.label}
                  data-ocid={`eligibility.item.${index + 1}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(20px)",
                    transition: `opacity 0.6s ease ${200 + index * 100}ms, transform 0.6s ease ${200 + index * 100}ms`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "#EFF6FF" }}
                  >
                    <item.icon size={18} style={{ color: "#2563EB" }} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                      {item.label}
                    </div>
                    <div className="text-sm font-semibold text-gray-800 mt-0.5">
                      {item.detail}
                    </div>
                  </div>
                  <div className="ml-auto">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs"
                      style={{ background: "#22C55E", color: "white" }}
                    >
                      ✓
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
