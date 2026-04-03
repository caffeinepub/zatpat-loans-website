import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    initials: "PS",
    location: "Mumbai",
    rating: 5,
    quote:
      "Got ₹50,000 in my account within 3 hours of applying! The entire process was so smooth. Highly recommend Zatpat.loans to everyone.",
    color: "#FF5500",
  },
  {
    name: "Rahul Mehta",
    initials: "RM",
    location: "Delhi",
    rating: 5,
    quote:
      "I was skeptical at first, but the minimal documents requirement and quick disbursal completely won me over. Amazing service!",
    color: "#2563EB",
  },
  {
    name: "Deepika Nair",
    initials: "DN",
    location: "Bengaluru",
    rating: 5,
    quote:
      "Needed emergency funds for a medical situation. Zatpat.loans came through in under 4 hours. Truly a lifesaver!",
    color: "#7C3AED",
  },
  {
    name: "Arjun Patel",
    initials: "AP",
    location: "Ahmedabad",
    rating: 4,
    quote:
      "Transparent interest rates, zero hidden charges, flexible EMI options. This is how personal loans should work.",
    color: "#059669",
  },
  {
    name: "Sunita Rao",
    initials: "SR",
    location: "Hyderabad",
    rating: 5,
    quote:
      "The app is super intuitive. Applied in 10 minutes, got approved in 5, and money was in my account the same day!",
    color: "#DC2626",
  },
  {
    name: "Kiran Kumar",
    initials: "KK",
    location: "Chennai",
    rating: 5,
    quote:
      "Best fintech app for personal loans in India. Customer support is responsive and the process is completely paperless.",
    color: "#D97706",
  },
  {
    name: "Pooja Gupta",
    initials: "PG",
    location: "Pune",
    rating: 5,
    quote:
      "Incredible experience! Repayment reminders, easy EMI tracking, and zero stress throughout the entire loan tenure.",
    color: "#0891B2",
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="flex-shrink-0 w-72 lg:w-80 bg-white rounded-2xl p-6 shadow-card mx-3 border border-gray-100">
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            // biome-ignore lint/suspicious/noArrayIndexKey: fixed-length star rating
            key={i}
            size={16}
            fill={i < testimonial.rating ? "#FBBF24" : "#E5E7EB"}
            stroke={i < testimonial.rating ? "#FBBF24" : "#E5E7EB"}
          />
        ))}
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

export default function Testimonials() {
  // Duplicate for seamless loop
  const doubled = [...testimonials, ...testimonials];

  return (
    <section
      data-ocid="testimonials.section"
      className="py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-3 px-4 py-1.5 rounded-full"
            style={{ background: "#FFF1E8", color: "#FF5500" }}
          >
            Customer Stories
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 section-title-underline">
            What Our <span style={{ color: "#FF5500" }}>Customers Say</span>
          </h2>
          <p className="text-gray-500 mt-6 text-lg max-w-xl mx-auto">
            Over 50,000 happy customers trust Zatpat.loans for their financial
            needs.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
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
          {doubled.map((t, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: doubled array for carousel loop
            <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
