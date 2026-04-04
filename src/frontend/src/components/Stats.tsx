import {
  useCounterAnimation,
  useIntersectionObserver,
} from "../hooks/useIntersectionObserver";

const stats = [
  { value: 50000, suffix: "+", label: "Happy Customers", prefix: "" },
  { value: 100, suffix: "Cr+", label: "Disbursed Amount", prefix: "₹" },
  { value: 5, suffix: " Min", label: "Approval Time", prefix: "" },
  {
    value: 48,
    suffix: "/5",
    label: "Average Rating",
    prefix: "4.",
    raw: "4.8/5",
  },
];

function StatItem({
  value,
  suffix,
  label,
  prefix,
  index,
  isVisible,
}: {
  value: number;
  suffix: string;
  label: string;
  prefix: string;
  index: number;
  isVisible: boolean;
  raw?: string;
}) {
  const count = useCounterAnimation(value, isVisible, 2000);

  return (
    <div
      className="flex flex-col items-center text-center px-6 py-4 animate-in-view"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${index * 150}ms, transform 0.7s ease ${
          index * 150
        }ms`,
      }}
    >
      <div
        className="text-4xl lg:text-5xl font-black number-stat"
        style={{ color: "#2563EB" }}
      >
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm font-medium text-gray-500 mt-1">{label}</div>
    </div>
  );
}

export default function Stats() {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      data-ocid="stats.section"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-white py-12 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              prefix={stat.prefix}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
