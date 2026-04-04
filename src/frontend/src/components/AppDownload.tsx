import { SiAppstore, SiGoogleplay } from "react-icons/si";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function AppDownload() {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <section
      data-ocid="app-download.section"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 md:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #163558 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-40px)",
              transition: "opacity 0.8s ease 0ms, transform 0.8s ease 0ms",
            }}
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-white/20 text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block animate-pulse" />
              DOWNLOAD NOW
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
              Download &amp; Apply in{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #FF6A00, #FBBF24)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                5 Minutes
              </span>
            </h2>
            <p className="text-white/70 text-base font-semibold mb-2">
              Free Forever — No subscription, no hidden charges.
            </p>

            {/* Rating badges */}
            <div className="flex items-center gap-4 mb-6">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{
                  background: "rgba(34,197,94,0.15)",
                  color: "#86EFAC",
                  border: "1px solid rgba(34,197,94,0.3)",
                }}
              >
                ★ 4.8 on Google Play
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{
                  background: "rgba(96,165,250,0.15)",
                  color: "#93C5FD",
                  border: "1px solid rgba(96,165,250,0.3)",
                }}
              >
                ★ 4.7 on App Store
              </span>
            </div>

            <p className="text-white/60 text-sm mb-8 leading-relaxed">
              Experience the fastest loan application process at your
              fingertips. Available on both Android and iOS.
            </p>

            {/* Store badges */}
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                data-ocid="app-download.primary_button"
                className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-200 group cursor-pointer"
              >
                <SiGoogleplay
                  size={28}
                  className="text-green-400 group-hover:text-green-300"
                />
                <div>
                  <div className="text-xs text-gray-400">GET IT ON</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </button>
              <button
                type="button"
                data-ocid="app-download.secondary_button"
                className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-200 group cursor-pointer"
              >
                <SiAppstore
                  size={28}
                  className="text-blue-400 group-hover:text-blue-300"
                />
                <div>
                  <div className="text-xs text-gray-400">DOWNLOAD ON THE</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10">
              <div>
                <div className="text-3xl font-black text-white">4.8★</div>
                <div className="text-white/60 text-sm">App Store Rating</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">1M+</div>
                <div className="text-white/60 text-sm">Downloads</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">50K+</div>
                <div className="text-white/60 text-sm">Active Users</div>
              </div>
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div
            className="flex justify-center lg:justify-end relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.8s ease 200ms, transform 0.8s ease 200ms",
            }}
          >
            <div
              className="absolute inset-0 rounded-full opacity-40 blur-3xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(37,99,235,0.4) 0%, transparent 60%)",
              }}
            />
            <div className="animate-float relative z-10">
              <img
                src="/assets/generated/app-download-phone.dim_400x700.png"
                alt="Rocket.Money Mobile App"
                className="w-56 lg:w-72 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
