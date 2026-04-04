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
        @media (prefers-reduced-motion: reduce) {
          .mobile-drawer { transition: none !important; }
          .mobile-overlay { transition: none !important; }
        }
        .nav-link-desktop:hover {
          background-color: #EFF6FF !important;
          color: #2563EB !important;
        }
        .nav-cta-desktop:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 24px rgba(255,106,0,0.5) !important;
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
          min-height: 44px;
          min-width: 44px;
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

      {/* Full-page overlay backdrop for mobile menu — premium UX */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="mobile-overlay lg:hidden"
          onClick={() => setMobileOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
            background: "rgba(15,23,42,0.45)",
            backdropFilter: "blur(3px)",
            WebkitBackdropFilter: "blur(3px)",
            border: "none",
            cursor: "default",
            animation: "fadeIn 0.2s ease",
          }}
        />
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

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
            height: "68px",
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
                padding: "9px 18px",
                fontSize: "0.8rem",
                fontWeight: 700,
                cursor: "pointer",
                whiteSpace: "nowrap",
                minHeight: "40px",
                boxShadow: "0 2px 10px rgba(255,106,0,0.3)",
              }}
            >
              Apply
            </button>
            {/* Hamburger button — clearly visible on mobile */}
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
                padding: "10px",
              }}
            >
              {mobileOpen ? (
                <X size={22} strokeWidth={2.5} />
              ) : (
                <Menu size={22} strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer — premium slide-in panel */}
        <div
          className="mobile-drawer lg:hidden"
          style={{
            maxHeight: mobileOpen ? "520px" : "0",
            overflow: "hidden",
            transition: "max-height 0.38s cubic-bezier(0.4, 0, 0.2, 1)",
            background: "white",
            borderTop: mobileOpen ? "2px solid rgba(37,99,235,0.12)" : "none",
            boxShadow: mobileOpen
              ? "0 20px 60px rgba(30,41,59,0.20), 0 8px 24px rgba(30,41,59,0.10)"
              : "none",
          }}
        >
          <nav
            style={{
              padding: "12px 20px 0",
              display: "flex",
              flexDirection: "column",
              gap: "2px",
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
                    background: isActive
                      ? "rgba(37,99,235,0.07)"
                      : "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: "14px 20px",
                    borderRadius: "12px",
                    textAlign: "center",
                    fontSize: "1rem",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "#2563EB" : "#374151",
                    width: "100%",
                    minHeight: "50px",
                    transition: "background-color 0.2s ease, color 0.2s ease",
                    borderLeft: isActive
                      ? "3px solid #2563EB"
                      : "3px solid transparent",
                    letterSpacing: "-0.01em",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {link.label}
                </button>
              );
            })}

            {/* Divider above CTA */}
            <div
              style={{
                height: "1px",
                background: "#F1F5F9",
                margin: "12px 0 8px",
              }}
            />

            {/* Full-width CTA */}
            <div style={{ paddingBottom: "24px", paddingTop: "4px" }}>
              <button
                type="button"
                data-ocid="navbar.primary_button"
                className="mobile-cta-btn"
                onClick={() => {
                  setMobileOpen(false);
                  onApplyNow();
                }}
                style={{
                  background:
                    "linear-gradient(135deg, #FF6A00 0%, #FF8C38 100%)",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "16px",
                  padding: "16px 28px",
                  fontSize: "1rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  width: "100%",
                  minHeight: "56px",
                  boxShadow: "0 6px 24px rgba(255,106,0,0.40)",
                  letterSpacing: "-0.01em",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  transition:
                    "transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease",
                }}
              >
                🚀 Apply Now — No CIBIL Needed
              </button>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "0.7rem",
                  color: "#94A3B8",
                  marginTop: "10px",
                  lineHeight: 1.5,
                }}
              >
                ✓ Free to apply &nbsp;·&nbsp; No credit score required
                &nbsp;·&nbsp; Results in 5 min
              </p>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
