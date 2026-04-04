import { ArrowRight, Info } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface EMICalculatorProps {
  openModal: () => void;
}

const TENURE_OPTIONS = [1, 2, 3, 6];
const ANNUAL_RATE = 18;

function formatINR(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

function calculateEMI(
  principal: number,
  months: number,
  annualRate: number,
): number {
  const r = annualRate / 12 / 100;
  if (r === 0) return Math.round(principal / months);
  const emi = (principal * r * (1 + r) ** months) / ((1 + r) ** months - 1);
  return Math.round(emi);
}

function useAnimatedNumber(target: number, duration = 300) {
  const [displayed, setDisplayed] = useState(target);
  const frameRef = useRef<number>(0);
  const prevRef = useRef<number>(target);

  useEffect(() => {
    const start = prevRef.current;
    const startTime = performance.now();
    cancelAnimationFrame(frameRef.current);

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplayed(Math.round(start + (target - start) * eased));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        prevRef.current = target;
      }
    }

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, duration]);

  return displayed;
}

export default function EMICalculator({ openModal }: EMICalculatorProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [loanAmount, setLoanAmount] = useState(3000);
  const [tenure, setTenure] = useState(3);

  const emi = calculateEMI(loanAmount, tenure, ANNUAL_RATE);
  const totalAmount = emi * tenure;
  const totalInterest = totalAmount - loanAmount;

  const animatedEMI = useAnimatedNumber(emi);
  const animatedInterest = useAnimatedNumber(totalInterest);
  const animatedTotal = useAnimatedNumber(totalAmount);

  const MIN = 1000;
  const MAX = 5000;
  const fillPercent = ((loanAmount - MIN) / (MAX - MIN)) * 100;

  return (
    <section
      id="emi-calculator"
      data-ocid="emi_calculator.section"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden"
    >
      {/* Top gradient border */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: "linear-gradient(90deg, #2563EB, #FF6A00, #22C55E)",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          className="text-center mb-8 sm:mb-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
            CALCULATE YOUR EMI
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            style={{ color: "#1E293B" }}
          >
            Know Your Monthly Payment{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2563EB, #FF6A00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Before You Apply
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto mt-3">
            Borrow ₹1,000 to ₹5,000 — no CIBIL check required.
          </p>
        </div>

        {/* Calculator card */}
        <div
          className="rounded-2xl sm:rounded-3xl overflow-hidden"
          style={{
            boxShadow:
              "0 16px 48px rgba(37,99,235,0.08), 0 4px 16px rgba(0,0,0,0.04)",
            border: "1px solid #E2E8F0",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}
        >
          {/* Stacked on mobile, side-by-side on lg */}
          <div className="flex flex-col lg:grid lg:grid-cols-2">
            {/* Left: Controls */}
            <div className="p-5 sm:p-7 lg:p-10 bg-white">
              {/* Loan Amount Slider */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2.5">
                  <label
                    htmlFor="loan-amount-slider"
                    className="text-sm font-semibold"
                    style={{ color: "#1E293B" }}
                  >
                    Loan Amount
                  </label>
                  <span
                    className="text-sm font-black px-3 py-1 rounded-lg"
                    style={{ background: "#EFF6FF", color: "#2563EB" }}
                  >
                    {formatINR(loanAmount)}
                  </span>
                </div>
                <input
                  id="loan-amount-slider"
                  type="range"
                  data-ocid="emi_calculator.input"
                  min={MIN}
                  max={MAX}
                  step={500}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #2563EB ${fillPercent}%, #E2E8F0 ${fillPercent}%)`,
                    accentColor: "#FF6A00",
                  }}
                />
                <div
                  className="flex justify-between text-xs mt-1.5"
                  style={{ color: "#94A3B8" }}
                >
                  <span>₹1,000</span>
                  <span>₹5,000</span>
                </div>
              </div>

              {/* Tenure Tabs */}
              <div className="mb-6">
                <p
                  className="block text-sm font-semibold mb-2.5"
                  style={{ color: "#1E293B" }}
                >
                  Loan Tenure
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {TENURE_OPTIONS.map((months) => (
                    <button
                      key={months}
                      type="button"
                      data-ocid="emi_calculator.toggle"
                      onClick={() => setTenure(months)}
                      className="py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                      style={{
                        background: tenure === months ? "#2563EB" : "#F1F5F9",
                        color: tenure === months ? "white" : "#64748B",
                        boxShadow:
                          tenure === months
                            ? "0 4px 12px rgba(37,99,235,0.3)"
                            : "none",
                        transform:
                          tenure === months ? "scale(1.04)" : "scale(1)",
                        minHeight: "44px",
                      }}
                    >
                      {months}m
                    </button>
                  ))}
                </div>
              </div>

              {/* Rate info */}
              <div
                className="flex items-start gap-2 px-3 py-2.5 rounded-xl"
                style={{ background: "#FFF7ED", border: "1px solid #FED7AA" }}
              >
                <Info
                  size={14}
                  style={{ color: "#FF6A00", flexShrink: 0, marginTop: "1px" }}
                />
                <p className="text-xs" style={{ color: "#92400E" }}>
                  Interest Rate: <strong>{ANNUAL_RATE}% p.a.</strong> (fixed) —
                  No CIBIL. No hidden fees.
                </p>
              </div>
            </div>

            {/* Right: Result */}
            <div
              className="p-5 sm:p-7 lg:p-10 flex flex-col justify-between"
              style={{
                background: "linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)",
              }}
            >
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-1.5"
                  style={{ color: "rgba(148,163,184,0.8)" }}
                >
                  Monthly EMI
                </p>
                <div
                  className="font-black mb-1"
                  style={{
                    fontSize: "clamp(2rem, 8vw, 3rem)",
                    background: "linear-gradient(135deg, #FF6A00, #FBBF24)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {formatINR(animatedEMI)}
                </div>
                <p
                  className="text-xs"
                  style={{ color: "rgba(148,163,184,0.7)" }}
                >
                  per month for {tenure} month{tenure > 1 ? "s" : ""}
                </p>
              </div>

              <div className="my-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs sm:text-sm"
                    style={{ color: "rgba(148,163,184,0.8)" }}
                  >
                    Principal Amount
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white">
                    {formatINR(loanAmount)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs sm:text-sm"
                    style={{ color: "rgba(148,163,184,0.8)" }}
                  >
                    Total Interest
                  </span>
                  <span
                    className="text-xs sm:text-sm font-bold"
                    style={{ color: "#FF6A00" }}
                  >
                    {formatINR(animatedInterest)}
                  </span>
                </div>
                <div
                  className="flex items-center justify-between pt-3"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <span
                    className="text-xs sm:text-sm font-semibold"
                    style={{ color: "rgba(241,245,249,0.9)" }}
                  >
                    Total Amount
                  </span>
                  <span className="text-xs sm:text-sm font-black text-white">
                    {formatINR(animatedTotal)}
                  </span>
                </div>
              </div>

              <button
                type="button"
                data-ocid="emi_calculator.primary_button"
                onClick={openModal}
                className="w-full flex items-center justify-center gap-2 rounded-full py-3.5 font-bold text-white transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #FF6A00, #FF8C2E)",
                  boxShadow: "0 4px 20px rgba(255,106,0,0.4)",
                  minHeight: "52px",
                  fontSize: "0.9rem",
                }}
              >
                Apply for {formatINR(loanAmount)} Loan <ArrowRight size={16} />
              </button>

              <p
                className="text-xs text-center mt-2"
                style={{ color: "rgba(148,163,184,0.5)" }}
              >
                ⚡ No CIBIL check — Approved for everyone
              </p>
            </div>
          </div>
        </div>

        {/* Trust micro-copy */}
        <div
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-4 mt-6 text-xs"
          style={{ color: "#64748B" }}
        >
          <span>🔒 Safe &amp; Secure • RBI Regulated</span>
          <span>✅ No CIBIL score required</span>
          <span>⚡ Same-day disbursal</span>
        </div>
      </div>
    </section>
  );
}
