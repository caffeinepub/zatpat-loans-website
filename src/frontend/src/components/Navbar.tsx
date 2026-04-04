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
  return (
    <span className="flex items-center gap-1.5 select-none">
      <svg
        width={compact ? 28 : 34}
        height={compact ? 28 : 34}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <circle cx="16" cy="16" r="16" fill="#2563EB" />
        <path
          d="M16 6C16 6 21 9 21 16C21 19.5 19.5 22.5 16 26C12.5 22.5 11 19.5 11 16C11 9 16 6 16 6Z"
          fill="white"
          opacity="0.95"
        />
        <ellipse cx="16" cy="16" rx="2.5" ry="2.5" fill="#2563EB" />
        <path
          d="M13 22.5C12 24 11 25.5 10.5 27C11.5 26.5 13 25.5 13.5 24L13 22.5Z"
          fill="white"
          opacity="0.7"
        />
        <path
          d="M19 22.5C20 24 21 25.5 21.5 27C20.5 26.5 19 25.5 18.5 24L19 22.5Z"
          fill="white"
          opacity="0.7"
        />
      </svg>
      <span
        style={{
          fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif",
          fontWeight: 800,
          fontSize: compact ? "1rem" : "1.2rem",
          letterSpacing: "-0.02em",
          color: "#1E293B",
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        Rocket
        <span style={{ color: "#FF6A00" }}>.</span>
        <span style={{ color: "#2563EB" }}>Money</span>
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
        .nav-link-desktop:hover {
          background-color: #EFF6FF !important;
          color: #2563EB !important;
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
            🚀 Apply Now — No CIBIL Needed
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
          backgroundColor: "#ffffff",
          boxShadow: scrolled
            ? "0 2px 20px 0 rgba(30,41,59,0.12)"
            : "0 1px 4px 0 rgba(30,41,59,0.07)",
          transition: "box-shadow 0.3s ease",
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
                    padding: "8px 14px",
                    borderRadius: "10px",
                    fontSize: "0.875rem",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "#2563EB" : "#374151",
                    backgroundColor: isActive
                      ? "rgba(37,99,235,0.08)"
                      : "transparent",
                    transition: "color 0.2s ease, background-color 0.2s ease",
                    whiteSpace: "nowrap",
                    borderLeft: isActive
                      ? "3px solid #2563EB"
                      : "3px solid transparent",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {link.label}
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

          {/* Mobile: Apply Now + Hamburger */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            className="lg:hidden"
          >
            <button
              type="button"
              data-ocid="navbar.primary_button"
              onClick={onApplyNow}
              style={{
                background: "linear-gradient(135deg, #FF6A00 0%, #FF8C38 100%)",
                color: "#ffffff",
                border: "none",
                borderRadius: "50px",
                padding: "9px 16px",
                fontSize: "0.78rem",
                fontWeight: 700,
                cursor: "pointer",
                whiteSpace: "nowrap",
                minHeight: "38px",
                boxShadow: "0 2px 10px rgba(255,106,0,0.3)",
                letterSpacing: "-0.01em",
              }}
            >
              Apply Now
            </button>
            {/* Hamburger button — always visible on mobile */}
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
                  ? "1.5px solid #BFDBFE"
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
