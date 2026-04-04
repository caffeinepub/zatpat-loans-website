import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

interface NavbarProps {
  onApplyNow: () => void;
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#eligibility" },
  { label: "Contact", href: "#footer" },
];

function RocketMoneyLogo({ scrolled }: { scrolled: boolean }) {
  return (
    <span className="flex items-center gap-2 select-none">
      {/* Rocket icon */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="16"
          cy="16"
          r="16"
          fill={scrolled ? "#2563EB" : "#FF6A00"}
        />
        <path
          d="M16 6C16 6 21 9 21 16C21 19.5 19.5 22.5 16 26C12.5 22.5 11 19.5 11 16C11 9 16 6 16 6Z"
          fill="white"
          opacity="0.95"
        />
        <ellipse
          cx="16"
          cy="16"
          rx="2.5"
          ry="2.5"
          fill={scrolled ? "#2563EB" : "#FF6A00"}
        />
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
      {/* Brand text */}
      <span
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          fontWeight: 800,
          fontSize: "1.25rem",
          letterSpacing: "-0.02em",
          color: scrolled ? "#1E293B" : "#FFFFFF",
          lineHeight: 1,
        }}
      >
        Rocket
        <span style={{ color: scrolled ? "#FF6A00" : "#FFB347" }}>.</span>
        <span style={{ color: scrolled ? "#2563EB" : "#93C5FD" }}>Money</span>
      </span>
    </span>
  );
}

export default function Navbar({ onApplyNow }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-ocid="navbar.section"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            data-ocid="navbar.link"
            onClick={() => handleNavClick("#home")}
            className="flex items-center bg-transparent border-none p-0 cursor-pointer"
            aria-label="Go to home"
          >
            <RocketMoneyLogo scrolled={scrolled} />
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                data-ocid="navbar.link"
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors duration-200 bg-transparent border-none cursor-pointer ${
                  scrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white/90 hover:text-blue-300"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <button
              type="button"
              data-ocid="navbar.primary_button"
              onClick={onApplyNow}
              className="btn-brand text-sm px-6 py-2.5"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            data-ocid="navbar.toggle"
            className={`lg:hidden p-2 rounded-md transition-colors ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                data-ocid="navbar.link"
                onClick={() => handleNavClick(link.href)}
                className="text-gray-700 font-medium py-2 hover:text-blue-600 transition-colors text-left bg-transparent border-none cursor-pointer w-full"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              data-ocid="navbar.primary_button"
              onClick={() => {
                setMobileOpen(false);
                onApplyNow();
              }}
              className="btn-brand mt-2 w-full"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
