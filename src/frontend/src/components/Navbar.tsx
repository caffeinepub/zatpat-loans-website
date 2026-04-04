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

function RocketMoneyLogo() {
  return (
    <span className="flex items-center gap-2 select-none">
      <svg
        width="34"
        height="34"
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
          fontFamily: "Inter, system-ui, sans-serif",
          fontWeight: 800,
          fontSize: "1.2rem",
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

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setActiveSection(href);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
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
          ? "0 2px 16px 0 rgba(30,41,59,0.10)"
          : "0 1px 4px 0 rgba(30,41,59,0.07)",
        transition: "box-shadow 0.3s ease",
      }}
    >
      {/* Desktop navbar — 3-part flex layout */}
      <div
        style={{
          maxWidth: "100%",
          paddingLeft: "clamp(24px, 5vw, 60px)",
          paddingRight: "clamp(24px, 5vw, 60px)",
          height: "84px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
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
            <RocketMoneyLogo />
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
            gap: "8px",
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
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px 14px",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "#2563EB" : "#374151",
                  backgroundColor: isActive
                    ? "rgba(37,99,235,0.08)"
                    : "transparent",
                  transition:
                    "color 0.2s ease, background-color 0.2s ease, transform 0.15s ease",
                  whiteSpace: "nowrap",
                  letterSpacing: "-0.01em",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#2563EB";
                    (
                      e.currentTarget as HTMLButtonElement
                    ).style.backgroundColor = "rgba(37,99,235,0.06)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#374151";
                    (
                      e.currentTarget as HTMLButtonElement
                    ).style.backgroundColor = "transparent";
                  }
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
            style={{
              background: "linear-gradient(135deg, #FF6A00 0%, #FF8C38 100%)",
              color: "#ffffff",
              border: "none",
              borderRadius: "50px",
              padding: "11px 28px",
              fontSize: "0.9rem",
              fontWeight: 700,
              cursor: "pointer",
              letterSpacing: "0.01em",
              boxShadow: "0 4px 14px rgba(255,106,0,0.35)",
              transition: "transform 0.18s ease, box-shadow 0.18s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(-2px)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 8px 22px rgba(255,106,0,0.45)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(0)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 4px 14px rgba(255,106,0,0.35)";
            }}
          >
            Apply Now
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          data-ocid="navbar.toggle"
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#374151",
            padding: "8px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu drawer */}
      <div
        className="lg:hidden"
        style={{
          maxHeight: mobileOpen ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
          backgroundColor: "#ffffff",
          borderTop: mobileOpen ? "1px solid #f1f5f9" : "none",
          boxShadow: mobileOpen ? "0 8px 24px rgba(30,41,59,0.10)" : "none",
        }}
      >
        <div
          style={{
            padding: "16px clamp(20px, 5vw, 60px) 24px",
            display: "flex",
            flexDirection: "column",
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
                style={{
                  background: isActive ? "rgba(37,99,235,0.07)" : "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "12px 16px",
                  borderRadius: "10px",
                  textAlign: "left",
                  fontSize: "1rem",
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "#2563EB" : "#374151",
                  width: "100%",
                  transition: "background-color 0.2s ease, color 0.2s ease",
                }}
              >
                {link.label}
              </button>
            );
          })}
          <button
            type="button"
            data-ocid="navbar.primary_button"
            onClick={() => {
              setMobileOpen(false);
              onApplyNow();
            }}
            style={{
              marginTop: "12px",
              background: "linear-gradient(135deg, #FF6A00 0%, #FF8C38 100%)",
              color: "#ffffff",
              border: "none",
              borderRadius: "50px",
              padding: "14px 28px",
              fontSize: "1rem",
              fontWeight: 700,
              cursor: "pointer",
              width: "100%",
              boxShadow: "0 4px 14px rgba(255,106,0,0.30)",
            }}
          >
            Apply Now
          </button>
        </div>
      </div>
    </header>
  );
}
