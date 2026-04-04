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
    loanAmount: "₹50,000",
    approvalTime: "3 hours",
    quote:
      "Got ₹50,000 in my account within 3 hours of applying! The entire process was so smooth. Highly recommend Rocket.Money to everyone.",
    color: "#2563EB",
  },
  {
    name: "Rahul Mehta",
    initials: "RM",
    location: "Delhi",
    rating: 5,
    loanAmount: "₹30,000",
    approvalTime: "4 minutes",
    quote:
      "I was skeptical at first, but minimal documents and quick disbursal completely won me over. Got ₹30,000 in 4 minutes!",
    color: "#2563EB",
  },
  {
    name: "Deepika Nair",
    initials: "DN",
    location: "Bengaluru",
    rating: 5,
    loanAmount: "₹75,000",
    approvalTime: "4 hours",
    quote:
      "Needed emergency funds for a medical situation. Rocket.Money approved ₹75,000 in under 4 hours. Truly a lifesaver!",
    color: "#22C55E",
  },
  {
    name: "Arjun Patel",
    initials: "AP",
    location: "Ahmedabad",
    rating: 5,
    loanAmount: "₹40,000",
    approvalTime: "2 hours",
    quote:
      "Transparent interest rates, zero hidden charges, flexible EMIs. Got ₹40,000 in 2 hours. This is how personal loans should work.",
    color: "#059669",
  },
  {
    name: "Sunita Rao",
    initials: "SR",
    location: "Hyderabad",
    rating: 5,
    loanAmount: "₹55,000",
    approvalTime: "5 minutes",
    quote:
      "Applied in 10 minutes, got approved in 5 minutes, and ₹55,000 was in my account the same day! Incredible experience.",
    color: "#2563EB",
  },
  {
    name: "Kiran Kumar",
    initials: "KK",
    location: "Chennai",
    rating: 5,
    loanAmount: "₹1,00,000",
    approvalTime: "3 hours",
    quote:
      "Best fintech app for personal loans in India. ₹1,00,000 approved in 3 hours, customer support is excellent and the process is paperless.",
    color: "#FF6A00",
  },
  {
    name: "Pooja Gupta",
    initials: "PG",
    location: "Pune",
    rating: 5,
    loanAmount: "₹60,000",
    approvalTime: "same day",
    quote:
      "Incredible experience! ₹60,000 disbursed on the same day, repayment reminders, easy EMI tracking, and zero stress throughout.",
    color: "#0891B2",
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="flex-shrink-0 w-72 lg:w-80 bg-white rounded-2xl p-6 shadow-card mx-3 border border-gray-100 relative">
      {/* Verified badge */}
      <span
        className="absolute top-4 right-4 inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full"
        style={{
          background: "#F0FDF4",
          color: "#22C55E",
          border: "1px solid #BBF7D0",
        }}
      >
        ✅ Verified Borrower
      </span>

      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            // biome-ignore lint/suspicious/noArrayIndexKey: fixed-length 5-star rating
            key={i}
            size={14}
            fill={i < testimonial.rating ? "#FBBF24" : "#E5E7EB"}
            stroke={i < testimonial.rating ? "#FBBF24" : "#E5E7EB"}
          />
        ))}
      </div>

      {/* Loan highlight */}
      <div
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold mb-3"
        style={{ background: "#EFF6FF", color: "#2563EB" }}
      >
        <span style={{ color: "#FF6A00" }}>{testimonial.loanAmount}</span>
        <span style={{ color: "#94A3B8" }}>in {testimonial.approvalTime}</span>
      </div>

      {/* Quote */}
      <p className="text-gray-600 text-sm leading-relaxed mb-5">
        &quot;{testimonial.quote}&quot;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
          style={{ background: testimonial.color }}
        >
          {testimonial.initials}
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-900">
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
      className="py-16 md:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
            CUSTOMER STORIES
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            What Our <span style={{ color: "#2563EB" }}>Customers Say</span>
          </h2>

          {/* Satisfaction summary */}
          <div className="flex items-center justify-center gap-2 mt-5 mb-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: static 5-star display row
                <Star key={i} size={18} fill="#FBBF24" stroke="#FBBF24" />
              ))}
            </div>
            <span className="font-black text-lg" style={{ color: "#1E293B" }}>
              4.8
            </span>
            <span className="text-sm" style={{ color: "#64748B" }}>
              from 12,400+ verified reviews
            </span>
          </div>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Over 50,000 happy customers trust Rocket.Money for their financial
            needs.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, white, transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, white, transparent)" }}
        />

        <div className="testimonial-track py-4">
          {doubled.map((t, i) => {
            const key = `${t.name}-${i}`;
            return <TestimonialCard key={key} testimonial={t} />;
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-10 px-4">
        <button
          type="button"
          data-ocid="testimonials.primary_button"
          onClick={onApplyNow}
          className="inline-flex items-center gap-2 rounded-full px-10 py-4 text-white font-bold text-base transition-all duration-200 hover:brightness-110 active:scale-95"
          style={{
            background: "linear-gradient(135deg, #FF6A00, #FF8C2E)",
            boxShadow: "0 4px 20px rgba(255,106,0,0.4)",
          }}
        >
          Join 50,000+ Happy Borrowers →
        </button>
        <p className="text-xs text-slate-400 mt-3">
          🔒 Safe &amp; Secure • RBI Regulated • ✅ No credit score required to
          apply
        </p>
      </div>
    </section>
  );
}
