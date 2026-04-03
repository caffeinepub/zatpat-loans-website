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
      className="py-20 lg:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FF5500 0%, #E64D00 50%, #CC4400 100%)",
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
            <span className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full bg-white/20 text-white">
              Download Now
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight">
              Download the <span className="text-white/80">Zatpat.loans</span>{" "}
              App
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
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
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-full opacity-40 blur-3xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 60%)",
              }}
            />
            <div className="animate-float relative z-10">
              <img
                src="/assets/generated/app-download-phone.dim_400x700.png"
                alt="Zatpat.loans Mobile App"
                className="w-56 lg:w-72 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
