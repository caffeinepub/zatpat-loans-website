import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

interface NavbarProps {
  onApplyNow: () => void;
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "About", href: "#features" },
  { label: "Contact", href: "#footer" },
];

function RocketMoneyLogo({ compact = false }: { compact?: boolean }) {
  const iconSize = compact ? 30 : 36;
  return (
    <span
      className="flex items-center select-none"
      style={{ gap: compact ? 6 : 8 }}
    >
      {/* Enhanced rocket icon with Indian tri-color accent ring */}
      <span
        style={{
          position: "relative",
          flexShrink: 0,
          width: iconSize,
          height: iconSize,
        }}
      >
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Gradient background circle */}
          <defs>
            <linearGradient
              id="bgGrad"
              x1="0"
              y1="0"
              x2="36"
              y2="36"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#1D4ED8" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
            <linearGradient
              id="flameGrad"
              x1="18"
              y1="24"
              x2="18"
              y2="34"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#FF6A00" />
              <stop offset="100%" stopColor="#FFB300" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="0.8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          {/* Circle base */}
          <circle cx="18" cy="18" r="18" fill="url(#bgGrad)" />
          {/* Indian tri-color thin ring: top saffron arc, middle white, bottom green */}
          <circle
            cx="18"
            cy="18"
            r="16.5"
            fill="none"
            stroke="#FF9933"
            strokeWidth="1"
            strokeDasharray="17.3 86.4"
            strokeDashoffset="0"
            opacity="0.9"
          />
          <circle
            cx="18"
            cy="18"
            r="16.5"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeDasharray="17.3 86.4"
            strokeDashoffset="-34.6"
            opacity="0.8"
          />
          <circle
            cx="18"
            cy="18"
            r="16.5"
            fill="none"
            stroke="#138808"
            strokeWidth="1"
            strokeDasharray="17.3 86.4"
            strokeDashoffset="-69.1"
            opacity="0.9"
          />
          {/* Rocket body */}
          <path
            d="M18 5C18 5 24 8.5 24 17C24 21.5 22 25.5 18 30C14 25.5 12 21.5 12 17C12 8.5 18 5 18 5Z"
            fill="white"
            opacity="0.96"
            filter="url(#glow)"
          />
          {/* Rocket window */}
          <circle cx="18" cy="17" r="3" fill="url(#bgGrad)" />
          <circle cx="18" cy="17" r="1.8" fill="white" opacity="0.3" />
          {/* Left fin */}
          <path
            d="M14.5 24.5C13 26.5 11.5 28 11 30C12.5 29.2 14.2 28 14.8 26.5L14.5 24.5Z"
            fill="white"
            opacity="0.75"
          />
          {/* Right fin */}
          <path
            d="M21.5 24.5C23 26.5 24.5 28 25 30C23.5 29.2 21.8 28 21.2 26.5L21.5 24.5Z"
            fill="white"
            opacity="0.75"
          />
          {/* Flame exhaust */}
          <path
            d="M15.5 28.5C16 30.5 17 32.5 18 33.5C19 32.5 20 30.5 20.5 28.5C19.5 29.5 18.5 30 18 30C17.5 30 16.5 29.5 15.5 28.5Z"
            fill="url(#flameGrad)"
            opacity="0.9"
          />
          {/* Speed lines */}
          <line
            x1="6"
            y1="15"
            x2="10"
            y2="15"
            stroke="white"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.4"
          />
          <line
            x1="5"
            y1="18"
            x2="9.5"
            y2="18"
            stroke="white"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.3"
          />
          <line
            x1="6"
            y1="21"
            x2="10"
            y2="21"
            stroke="white"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.4"
          />
        </svg>
      </span>
      {/* Logo wordmark */}
      <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif",
            fontWeight: 800,
            fontSize: compact ? "1rem" : "1.18rem",
            letterSpacing: "-0.03em",
            color: "#1E293B",
            lineHeight: 1.1,
            whiteSpace: "nowrap",
            display: "flex",
            alignItems: "baseline",
            gap: 0,
          }}
        >
          <span>Rocket</span>
          <span style={{ color: "#2563EB" }}>Money</span>
          <span
            style={{
              fontSize: compact ? "0.6rem" : "0.68rem",
              fontWeight: 700,
              color: "#FF6A00",
              letterSpacing: "0.01em",
              marginLeft: 1,
              lineHeight: 1,
              alignSelf: "flex-end",
              paddingBottom: compact ? "0.05em" : "0.08em",
            }}
          >
            .in
          </span>
        </span>
        {!compact && (
          <span
            style={{
              fontSize: "0.52rem",
              fontWeight: 600,
              color: "#64748B",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              lineHeight: 1,
              marginTop: 1,
            }}
          >
            Loans for Every Indian
          </span>
        )}
      </span>
    </span>
  );
}

export default function Navbar({ onApplyNow }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setActiveSection(href);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .mobile-drawer-panel { transition: none !important; }
          .mobile-overlay { transition: none !important; animation: none !important; }
        }
        .nav-link-desktop {
          position: relative;
        }
        .nav-link-desktop:hover {
          background-color: #EFF6FF !important;
          color: #2563EB !important;
        }
        .nav-link-desktop .active-dot {
          position: absolute;
          bottom: 3px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #FF6A00;
          pointer-events: none;
        }
        .nav-cta-desktop:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 24px rgba(255,106,0,0.5) !important;
        }
        .mobile-nav-link {
          position: relative;
          transition: background-color 0.18s ease, color 0.18s ease;
        }
        .mobile-nav-link:hover {
          background-color: #EFF6FF !important;
          color: #2563EB !important;
        }
        .mobile-cta-btn:hover {
          filter: brightness(1.08);
        }
        .mobile-cta-btn:active {
          transform: scale(0.98) !important;
        }
        .hamburger-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 40px;
          min-width: 40px;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }
        .hamburger-btn:hover {
          background-color: #EFF6FF !important;
          border-color: #BFDBFE !important;
          color: #2563EB !important;
        }
      `}</style>

      {/* Full-page overlay backdrop — RIGHT side drawer */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="mobile-overlay lg:hidden"
          onClick={() => setMobileOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 48,
            background: "rgba(15,23,42,0.50)",
            backdropFilter: "blur(3px)",
            WebkitBackdropFilter: "blur(3px)",
            border: "none",
            cursor: "default",
            animation: "fadeIn 0.22s ease",
          }}
        />
      )}

      {/* RIGHT SIDE DRAWER — premium app-like panel */}
      <div
        className="mobile-drawer-panel lg:hidden"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(80vw, 280px)",
          zIndex: 50,
          background: "white",
          boxShadow:
            "-8px 0 40px rgba(15,23,42,0.18), -2px 0 8px rgba(0,0,0,0.08)",
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.32s cubic-bezier(0.4, 0, 0.2, 1)",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          pointerEvents: mobileOpen ? "all" : "none",
        }}
      >
        {/* Drawer header — logo + close */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 20px 14px",
            borderBottom: "1px solid #F1F5F9",
            flexShrink: 0,
          }}
        >
          <RocketMoneyLogo compact={true} />
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            data-ocid="navbar.close_button"
            style={{
              background: "#F8FAFC",
              border: "1.5px solid #E2E8F0",
              borderRadius: 10,
              width: 38,
              height: 38,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#475569",
              transition: "background 0.15s ease, border-color 0.15s ease",
            }}
          >
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>

        {/* Navigation links */}
        <nav
          style={{
            padding: "12px 14px",
            display: "flex",
            flexDirection: "column",
            gap: "3px",
            flex: 1,
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <button
                key={link.label}
                type="button"
                data-ocid="navbar.link"
                onClick={() => handleNavClick(link.href)}
                className="mobile-nav-link"
                style={{
                  background: isActive ? "rgba(37,99,235,0.09)" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "13px 16px",
                  borderRadius: "12px",
                  textAlign: "left",
                  fontSize: "0.95rem",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "#2563EB" : "#374151",
                  width: "100%",
                  minHeight: "48px",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                {/* Active pill indicator */}
                {isActive && (
                  <span
                    style={{
                      width: 4,
                      height: 20,
                      borderRadius: 4,
                      background: "#2563EB",
                      flexShrink: 0,
                      display: "block",
                    }}
                  />
                )}
                {!isActive && <span style={{ width: 4, flexShrink: 0 }} />}
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Bottom CTA area */}
        <div
          style={{
            padding: "12px 14px 28px",
            borderTop: "1px solid #F1F5F9",
            flexShrink: 0,
          }}
        >
          <button
            type="button"
            data-ocid="navbar.primary_button"
            className="mobile-cta-btn"
            onClick={() => {
              setMobileOpen(false);
              onApplyNow();
            }}
            style={{
              background: "linear-gradient(135deg, #FF6A00 0%, #FF8C38 100%)",
              color: "#ffffff",
              border: "none",
              borderRadius: 16,
              padding: "15px 24px",
              fontSize: "0.95rem",
              fontWeight: 700,
              cursor: "pointer",
              width: "100%",
              minHeight: "52px",
              boxShadow: "0 6px 24px rgba(255,106,0,0.38)",
              letterSpacing: "-0.01em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              transition:
                "transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease",
            }}
          >
            🚀 Apply Now — No Credit Check Needed
          </button>
          <p
            style={{
              textAlign: "center",
              fontSize: "0.68rem",
              color: "#94A3B8",
              marginTop: "10px",
              lineHeight: 1.6,
            }}
          >
            ✓ Free to apply &nbsp;·&nbsp; No credit score &nbsp;·&nbsp; 5 min
          </p>
        </div>
      </div>

      <header
        data-ocid="navbar.section"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled
            ? "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(248,250,252,0.98) 100%)"
            : "#ffffff",
          boxShadow: scrolled
            ? "0 1px 0 rgba(37,99,235,0.15), 0 4px 32px rgba(15,23,42,0.16)"
            : "0 1px 4px 0 rgba(30,41,59,0.07)",
          transition: "box-shadow 0.3s ease, background 0.3s ease",
          borderBottom: "1px solid rgba(226, 232, 240, 0.8)",
        }}
      >
        {/* Main navbar bar */}
        <div
          style={{
            maxWidth: "100%",
            paddingLeft: "clamp(16px, 4vw, 60px)",
            paddingRight: "clamp(16px, 4vw, 60px)",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          {/* LEFT — Logo */}
          <div style={{ flex: "0 0 auto", minWidth: 0 }}>
            <button
              type="button"
              data-ocid="navbar.link"
              onClick={() => handleNavClick("#home")}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
              aria-label="Go to home"
            >
              <span className="block lg:hidden">
                <RocketMoneyLogo compact={true} />
              </span>
              <span className="hidden lg:block">
                <RocketMoneyLogo compact={false} />
              </span>
            </button>
          </div>

          {/* CENTER — Navigation (desktop only) */}
          <nav
            className="hidden lg:flex"
            style={{
              flex: "1 1 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.label}
                  type="button"
                  data-ocid="navbar.link"
                  onClick={() => handleNavClick(link.href)}
                  className="nav-link-desktop"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: isActive ? "8px 14px 12px" : "8px 14px",
                    borderRadius: "10px",
                    fontSize: "0.875rem",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "#2563EB" : "#374151",
                    backgroundColor: isActive
                      ? "rgba(37,99,235,0.08)"
                      : "transparent",
                    transition: "color 0.2s ease, background-color 0.2s ease",
                    whiteSpace: "nowrap",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {link.label}
                  {isActive && <span className="active-dot" />}
                </button>
              );
            })}
          </nav>

          {/* RIGHT — CTA Button (desktop only) */}
          <div
            className="hidden lg:flex"
            style={{ flex: "0 0 auto", alignItems: "center" }}
          >
            <button
              type="button"
              data-ocid="navbar.primary_button"
              onClick={onApplyNow}
              className="nav-cta-desktop"
              style={{
                background: "linear-gradient(135deg, #FF6A00 0%, #FF8C38 100%)",
                color: "#ffffff",
                border: "none",
                borderRadius: "50px",
                padding: "11px 26px",
                fontSize: "0.875rem",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(255,106,0,0.35)",
                transition: "transform 0.18s ease, box-shadow 0.18s ease",
                whiteSpace: "nowrap",
                minHeight: "44px",
                letterSpacing: "-0.01em",
              }}
            >
              Apply Now
            </button>
          </div>

          {/* Mobile: Hamburger only — Apply Now lives inside the drawer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
            className="lg:hidden"
          >
            <button
              type="button"
              data-ocid="navbar.toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="hamburger-btn"
              style={{
                background: mobileOpen ? "#EFF6FF" : "#F8FAFC",
                border: mobileOpen
                  ? "2px solid #BFDBFE"
                  : "1.5px solid #E2E8F0",
                color: mobileOpen ? "#2563EB" : "#1E293B",
                padding: "9px",
              }}
            >
              {mobileOpen ? (
                <X size={20} strokeWidth={2.5} />
              ) : (
                <Menu size={20} strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
