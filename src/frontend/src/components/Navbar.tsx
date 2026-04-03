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
            className="flex items-center gap-0.5 group bg-transparent border-none p-0 cursor-pointer"
            aria-label="Go to home"
          >
            <span
              className={`text-2xl font-black tracking-tight transition-colors ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Zatpat
            </span>
            <span className="text-2xl font-black" style={{ color: "#FF6A00" }}>
              .
            </span>
            <span
              className={`text-2xl font-black tracking-tight transition-colors ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              loans
            </span>
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
