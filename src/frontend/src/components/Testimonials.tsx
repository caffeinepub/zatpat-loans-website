import { Star } from "lucide-react";

interface TestimonialsProps {
  onApplyNow: () => void;
}

const testimonials = [
  {
    name: "Priya Sharma",
    initials: "PS",
    location: "Mumbai",
    rating: 5,
    loanAmount: "₹3,000",
    approvalTime: "4 minutes",
    quote:
      "Got ₹3,000 in my account in just 4 minutes of applying! Absolutely smooth experience. RocketMoney.in saved me during a tough time.",
    color: "#2563EB",
  },
  {
    name: "Rahul Mehta",
    initials: "RM",
    location: "Delhi",
    rating: 5,
    loanAmount: "₹5,000",
    approvalTime: "5 minutes",
    quote:
      "My Credit Score was low and I was rejected everywhere. RocketMoney.in approved ₹5,000 in just 5 minutes. No questions asked!",
    color: "#2563EB",
  },
  {
    name: "Deepika Nair",
    initials: "DN",
    location: "Bengaluru",
    rating: 5,
    loanAmount: "₹2,500",
    approvalTime: "3 minutes",
    quote:
      "Needed emergency funds quickly. RocketMoney.in approved ₹2,500 in under 3 minutes. Truly a lifesaver for emergency situations!",
    color: "#22C55E",
  },
  {
    name: "Arjun Patel",
    initials: "AP",
    location: "Ahmedabad",
    rating: 5,
    loanAmount: "₹4,000",
    approvalTime: "2 minutes",
    quote:
      "Transparent process, zero hidden charges. Got ₹4,000 in 2 minutes flat. This is how personal loans should work!",
    color: "#059669",
  },
  {
    name: "Sunita Rao",
    initials: "SR",
    location: "Hyderabad",
    rating: 5,
    loanAmount: "₹5,000",
    approvalTime: "same day",
    quote:
      "Applied in 10 minutes, got approved immediately, and ₹5,000 was in my account the same day! Incredible experience.",
    color: "#2563EB",
  },
  {
    name: "Kiran Kumar",
    initials: "KK",
    location: "Chennai",
    rating: 5,
    loanAmount: "₹1,500",
    approvalTime: "6 minutes",
    quote:
      "Best fintech app for quick loans. ₹1,500 approved in 6 minutes, paperless process, and excellent support throughout.",
    color: "#FF6A00",
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div
      className="flex-shrink-0 w-64 sm:w-72 lg:w-80 bg-white rounded-2xl p-4 sm:p-5 mx-2 sm:mx-3 border border-gray-100 relative"
      style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
    >
      {/* Verified badge */}
      <span
        className="absolute top-3 right-3 inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full"
        style={{
          background: "#F0FDF4",
          color: "#22C55E",
          border: "1px solid #BBF7D0",
          fontSize: "10px",
        }}
      >
        ✅ Verified
      </span>

      {/* Stars */}
      <div className="flex gap-0.5 mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            // biome-ignore lint/suspicious/noArrayIndexKey: fixed-length 5-star rating
            key={i}
            size={12}
            fill={i < testimonial.rating ? "#FBBF24" : "#E5E7EB"}
            stroke={i < testimonial.rating ? "#FBBF24" : "#E5E7EB"}
          />
        ))}
      </div>

      {/* Loan highlight */}
      <div
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold mb-2.5"
        style={{ background: "#EFF6FF", color: "#2563EB" }}
      >
        <span style={{ color: "#FF6A00" }}>{testimonial.loanAmount}</span>
        <span style={{ color: "#94A3B8" }}>in {testimonial.approvalTime}</span>
      </div>

      {/* Quote */}
      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
        &quot;{testimonial.quote}&quot;
      </p>

      {/* Author */}
      <div className="flex items-center gap-2.5">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
          style={{ background: testimonial.color }}
        >
          {testimonial.initials}
        </div>
        <div>
          <div className="text-xs sm:text-sm font-semibold text-gray-900">
            {testimonial.name}
          </div>
          <div className="text-xs text-gray-400">{testimonial.location}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials({ onApplyNow }: TestimonialsProps) {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section
      data-ocid="testimonials.section"
      className="py-16 sm:py-20 md:py-28 bg-white overflow-hidden"
    >
      <style>{`
        @keyframes testimonial-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .testimonial-track {
          display: flex;
          animation: testimonial-scroll 40s linear infinite;
          width: max-content;
        }
        .testimonial-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .testimonial-track {
            animation: none !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-10">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
            CUSTOMER STORIES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            What Our <span style={{ color: "#2563EB" }}>Customers Say</span>
          </h2>

          {/* Satisfaction summary */}
          <div className="flex items-center justify-center gap-2 mt-4 mb-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: static 5-star display row
                <Star key={i} size={16} fill="#FBBF24" stroke="#FBBF24" />
              ))}
            </div>
            <span
              className="font-black text-base sm:text-lg"
              style={{ color: "#1E293B" }}
            >
              4.8
            </span>
            <span className="text-xs sm:text-sm" style={{ color: "#64748B" }}>
              from 12,400+ reviews
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
            Over 50,000 happy customers trust RocketMoney.in for their financial
            needs.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, white, transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, white, transparent)" }}
        />

        <div className="testimonial-track py-3">
          {doubled.map((t, i) => {
            const key = `${t.name}-${i}`;
            return <TestimonialCard key={key} testimonial={t} />;
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-8 px-4">
        <button
          type="button"
          data-ocid="testimonials.primary_button"
          onClick={onApplyNow}
          className="inline-flex items-center justify-center gap-2 rounded-full px-8 sm:px-10 py-4 sm:py-5 text-white font-bold text-sm sm:text-base transition-all duration-200 hover:brightness-110 active:scale-95 w-full sm:w-auto"
          style={{
            background: "linear-gradient(135deg, #FF6A00, #FF8C2E)",
            boxShadow: "0 4px 20px rgba(255,106,0,0.4)",
            minHeight: "52px",
          }}
        >
          Join 50,000+ Happy Borrowers →
        </button>
        <p className="text-xs text-slate-400 mt-2.5">
          🔒 Safe &amp; Secure • RBI Regulated • ✅ No credit score required
        </p>
      </div>
    </section>
  );
}
