import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface FAQProps {
  onApplyNow: () => void;
}

const faqs = [
  {
    q: "What is the maximum loan amount I can borrow?",
    a: "You can borrow up to ₹5,00,000 through Rocket.Money. The exact amount depends on your credit profile, income, and repayment history. First-time borrowers may have a lower starting limit which increases over time.",
  },
  {
    q: "How quickly will I receive the loan amount?",
    a: "Once your application is approved, funds are disbursed directly to your bank account within 2–4 hours. In most cases, you'll receive the money on the same day of application.",
  },
  {
    q: "What documents are required to apply?",
    a: "We require minimal documentation: a valid Aadhaar card, PAN card, and the last 3 months' bank statement. A selfie for video KYC may also be required. No physical document submission needed.",
  },
  {
    q: "What is the interest rate?",
    a: "Our interest rates start from 12% per annum. The final rate depends on your credit score, loan amount, and tenure. We believe in complete transparency — no hidden charges or surprise fees.",
  },
  {
    q: "Can I prepay my loan without penalties?",
    a: "Yes! Rocket.Money offers zero prepayment charges. You can pay off your loan early at any time without any additional fees. Early repayment also helps improve your credit score.",
  },
  {
    q: "Is my personal data secure with Rocket.Money?",
    a: "Absolutely. We use 256-bit bank-grade encryption for all data storage and transmission. Your personal information is never sold to third parties. We comply with all RBI guidelines and data protection regulations.",
  },
  {
    q: "Can self-employed individuals apply for a loan?",
    a: "Yes! Both salaried and self-employed individuals can apply. Self-employed applicants need to show a minimum monthly income of ₹20,000 and may need to submit additional income proof.",
  },
];

function FAQItem({
  faq,
  index,
  isVisible,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isVisible: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      data-ocid={`faq.item.${index + 1}`}
      className="border border-gray-200 rounded-2xl overflow-hidden bg-white transition-all duration-200 hover:border-blue-200"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${
          index * 80
        }ms, border-color 0.2s`,
      }}
    >
      <button
        type="button"
        data-ocid={`faq.toggle.${index + 1}`}
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 text-sm lg:text-base pr-4 group-hover:text-blue-600 transition-colors">
          {faq.q}
        </span>
        <span
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: open ? "#2563EB" : "#EFF6FF",
            color: open ? "white" : "#2563EB",
          }}
        >
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="px-6 pb-5">
          <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ({ onApplyNow }: FAQProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="contact"
      data-ocid="faq.section"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 md:py-24 section-alt"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
            GOT QUESTIONS?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Frequently Asked <span style={{ color: "#2563EB" }}>Questions</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4">
            Everything you need to know about Rocket.Money.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-3 mb-12">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.q}
              faq={faq}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Still have questions card */}
        <div
          data-ocid="faq.card"
          className="rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            background: "#EFF6FF",
            border: "1px solid #BFDBFE",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.7s, transform 0.7s ease 0.7s",
          }}
        >
          <div>
            <p className="font-bold text-base" style={{ color: "#1E293B" }}>
              Still have questions?
            </p>
            <p className="text-sm mt-1" style={{ color: "#64748B" }}>
              Our team is available 9 AM – 9 PM, 7 days a week
            </p>
          </div>
          <button
            type="button"
            data-ocid="faq.primary_button"
            onClick={onApplyNow}
            className="flex-shrink-0 flex items-center gap-2 rounded-full px-7 py-3 font-bold text-white text-sm transition-all duration-200 hover:brightness-110 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #FF6A00, #FF8C2E)",
              boxShadow: "0 4px 16px rgba(255,106,0,0.35)",
            }}
          >
            Apply Anyway →
          </button>
        </div>
      </div>
    </section>
  );
}
