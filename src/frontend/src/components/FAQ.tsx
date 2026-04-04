import type React from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const faqs = [
  {
    q: "What is the maximum loan amount I can borrow?",
    a: "You can borrow up to \u20b95,000 through Rocket.Money. First-time borrowers typically receive between \u20b91,000 and \u20b95,000, and the limit can increase over time.",
  },
  {
    q: "Do I need a good CIBIL score to get a loan?",
    a: "Absolutely not! Rocket.Money accepts all CIBIL scores \u2014 even as low as 300. No CIBIL check means no rejection based on credit score.",
  },
  {
    q: "How quickly will I receive the loan amount?",
    a: "Once approved, funds are disbursed directly to your bank account in as little as 5 minutes. In most cases, you\u2019ll receive the money within the same day.",
  },
  {
    q: "What documents are required to apply?",
    a: "We require minimal documentation: a valid Aadhaar card, PAN card, and a selfie for video KYC. No physical document submission needed.",
  },
  {
    q: "What is the interest rate?",
    a: "Our interest rates are transparent and competitive. No hidden charges or surprise fees, ever.",
  },
  {
    q: "Can I prepay my loan without penalties?",
    a: "Yes! Rocket.Money offers zero prepayment charges. You can pay off your loan early at any time without any additional fees.",
  },
  {
    q: "Is my personal data secure with Rocket.Money?",
    a: "Absolutely. We use 256-bit bank-grade encryption for all data storage and transmission. Your personal information is never sold to third parties.",
  },
];

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface FAQProps {
  onApplyNow: () => void;
}

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
      className="border rounded-xl sm:rounded-2xl overflow-hidden bg-white transition-all duration-200"
      style={{
        borderColor: open ? "#BFDBFE" : "#E2E8F0",
        boxShadow: open ? "0 4px 16px rgba(37,99,235,0.07)" : "none",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${index * 70}ms, transform 0.6s ease ${index * 70}ms, border-color 0.2s, box-shadow 0.2s`,
      }}
    >
      <button
        type="button"
        data-ocid={`faq.toggle.${index + 1}`}
        className="w-full flex items-center justify-between px-4 sm:px-6 py-4 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{ minHeight: "56px" }}
      >
        <span className="font-semibold text-gray-900 text-sm pr-4 group-hover:text-blue-600 transition-colors leading-snug">
          {faq.q}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: open ? "#2563EB" : "#EFF6FF",
            color: open ? "white" : "#2563EB",
          }}
        >
          {open ? <Minus size={13} /> : <Plus size={13} />}
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="px-4 sm:px-6 pb-4">
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
            {faq.a}
          </p>
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
      className="py-12 sm:py-16 md:py-20"
      style={{ background: "#F8FAFC" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
            GOT QUESTIONS?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked <span style={{ color: "#2563EB" }}>Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto mt-3">
            Everything you need to know about Rocket.Money.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-2.5 mb-8 sm:mb-10">
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
          className="rounded-xl sm:rounded-2xl px-5 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            background: "#EFF6FF",
            border: "1px solid #BFDBFE",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.7s, transform 0.7s ease 0.7s",
          }}
        >
          <div className="text-center sm:text-left">
            <p
              className="font-bold text-sm sm:text-base"
              style={{ color: "#1E293B" }}
            >
              Still have questions?
            </p>
            <p
              className="text-xs sm:text-sm mt-0.5"
              style={{ color: "#64748B" }}
            >
              Our team is available 9 AM \u2013 9 PM, 7 days a week
            </p>
          </div>
          <button
            type="button"
            data-ocid="faq.primary_button"
            onClick={onApplyNow}
            className="flex-shrink-0 flex items-center gap-2 rounded-full px-6 py-2.5 font-bold text-white text-sm transition-all duration-200 hover:brightness-110 active:scale-95 w-full sm:w-auto justify-center"
            style={{
              background: "linear-gradient(135deg, #FF6A00, #FF8C2E)",
              boxShadow: "0 4px 16px rgba(255,106,0,0.35)",
              minHeight: "44px",
            }}
          >
            Apply Anyway →
          </button>
        </div>
      </div>
    </section>
  );
}
