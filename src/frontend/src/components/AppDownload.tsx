import type React from "react";
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
      className="py-12 sm:py-16 md:py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #163558 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <div
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
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
            <p className="text-white/70 text-sm font-semibold mb-3">
              Free Forever — No subscription, no hidden charges.
            </p>

            {/* Rating badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-5">
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

            {/* Store badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <button
                type="button"
                data-ocid="app-download.primary_button"
                className="flex items-center gap-2.5 bg-black text-white px-4 py-3 rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-200 group cursor-pointer min-h-[52px]"
              >
                <SiGoogleplay
                  size={24}
                  className="text-green-400 group-hover:text-green-300 flex-shrink-0"
                />
                <div className="text-left">
                  <div className="text-xs text-gray-400">GET IT ON</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </button>
              <button
                type="button"
                data-ocid="app-download.secondary_button"
                className="flex items-center gap-2.5 bg-black text-white px-4 py-3 rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-200 group cursor-pointer min-h-[52px]"
              >
                <SiAppstore
                  size={24}
                  className="text-blue-400 group-hover:text-blue-300 flex-shrink-0"
                />
                <div className="text-left">
                  <div className="text-xs text-gray-400">DOWNLOAD ON THE</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-6 mt-8 justify-center lg:justify-start">
              {[
                { label: "4.8★", sub: "App Rating" },
                { label: "1M+", sub: "Downloads" },
                { label: "50K+", sub: "Active Users" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center lg:items-start"
                >
                  <div className="text-xl sm:text-2xl font-black text-white">
                    {stat.label}
                  </div>
                  <div className="text-white/60 text-xs">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div
            className="flex justify-center lg:justify-end relative mt-4 lg:mt-0"
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
                alt="RocketMoney.in Mobile App"
                className="w-40 sm:w-48 lg:w-60 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
