import { Download, IndianRupee, UserCheck } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Download App",
    description:
      "Download the Zatpat.loans app from Google Play Store or Apple App Store on your smartphone.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Register & Apply",
    description:
      "Complete your KYC in minutes. Fill in your details, upload documents, and submit your loan application.",
  },
  {
    number: "03",
    icon: IndianRupee,
    title: "Get Money",
    description:
      "Upon approval, the loan amount is instantly disbursed to your linked bank account. It's that simple!",
  },
];

export default function HowItWorks() {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <section
      id="how-it-works"
      data-ocid="how-it-works.section"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 lg:py-28 section-alt"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-3 px-4 py-1.5 rounded-full"
            style={{ background: "#FFF1E8", color: "#FF5500" }}
          >
            Simple Process
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 section-title-underline">
            How It <span style={{ color: "#FF5500" }}>Works</span>
          </h2>
          <p className="text-gray-500 mt-6 text-lg max-w-xl mx-auto">
            Getting a loan has never been this straightforward. Just 3 easy
            steps and you're done.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden md:block absolute top-10 left-1/6 right-1/6 h-0.5 pointer-events-none"
            style={{
              background: "linear-gradient(90deg, #FF5500, #FFB380, #FF5500)",
              zIndex: 0,
            }}
          />

          {steps.map((step, index) => (
            <div
              key={step.title}
              data-ocid={`how-it-works.item.${index + 1}`}
              className="relative flex flex-col items-center text-center z-10"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.7s ease ${index * 200}ms, transform 0.7s ease ${index * 200}ms`,
              }}
            >
              {/* Number badge */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-orange relative"
                style={{ background: "#FF5500" }}
              >
                <step.icon size={32} className="text-white" />
                <span
                  className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-white border-2 flex items-center justify-center text-xs font-black"
                  style={{ borderColor: "#FF5500", color: "#FF5500" }}
                >
                  {index + 1}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>

              {/* Arrow (mobile) */}
              {index < steps.length - 1 && (
                <div
                  className="md:hidden mt-6 text-2xl font-bold"
                  style={{ color: "#FF5500" }}
                >
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
