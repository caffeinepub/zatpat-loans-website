import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

interface FooterProps {
  onApplyNow: () => void;
}

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { label: "Personal Loans", href: "#" },
  { label: "Business Loans", href: "#" },
  { label: "Emergency Loans", href: "#" },
  { label: "Medical Loans", href: "#" },
  { label: "Education Loans", href: "#" },
];

export default function Footer({ onApplyNow }: FooterProps) {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer
      data-ocid="footer.section"
      id="footer"
      className="pt-0 pb-0"
      style={{ background: "#F8FAFC" }}
    >
      {/* Trust logos strip */}
      <div
        className="w-full py-2.5 px-4"
        style={{ background: "#E2E8F0", borderBottom: "1px solid #CBD5E1" }}
      >
        <div
          className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-semibold"
          style={{ color: "#475569" }}
        >
          <span>🏗️ RBI Registered NBFC</span>
          <span className="text-slate-300 hidden sm:inline">|</span>
          <span>🔒 ISO 27001</span>
          <span className="text-slate-300 hidden sm:inline">|</span>
          <span>🛡️ 256-bit SSL</span>
          <span className="text-slate-300 hidden sm:inline">|</span>
          <span>📊 CIBIL Partner</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main footer grid — 1-col mobile, 2-col sm, 4-col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-b border-gray-200">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-0.5 mb-3">
              <span className="text-xl font-black text-gray-900">Rocket</span>
              <span className="text-xl font-black" style={{ color: "#FF6A00" }}>
                .
              </span>
              <span className="text-xl font-black text-gray-900">Money</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              India's fastest and most trusted instant personal loan platform.
              Get funds in your account within hours, not days.
            </p>
            <div className="flex gap-2.5 justify-center sm:justify-start">
              {[
                { Icon: SiFacebook, href: "#", label: "Facebook" },
                { Icon: SiX, href: "#", label: "X / Twitter" },
                { Icon: SiInstagram, href: "#", label: "Instagram" },
                { Icon: SiLinkedin, href: "#", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  data-ocid="footer.link"
                  className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:border-blue-600 transition-all duration-200"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "#2563EB";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "white";
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-bold text-gray-900 mb-4 text-xs uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2.5 w-full">
              {quickLinks.map((link) => (
                <li key={link.label} className="text-center sm:text-left">
                  <a
                    href={link.href}
                    data-ocid="footer.link"
                    className="text-sm text-gray-500 hover:text-blue-600 transition-colors inline-flex items-center gap-2 group justify-center sm:justify-start"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-bold text-gray-900 mb-4 text-xs uppercase tracking-widest">
              Our Services
            </h4>
            <ul className="space-y-2.5 w-full">
              {services.map((svc) => (
                <li key={svc.label} className="text-center sm:text-left">
                  <a
                    href={svc.href}
                    data-ocid="footer.link"
                    className="text-sm text-gray-500 hover:text-blue-600 transition-colors inline-flex items-center gap-2 group justify-center sm:justify-start"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors flex-shrink-0" />
                    {svc.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-bold text-gray-900 mb-4 text-xs uppercase tracking-widest">
              Contact Us
            </h4>
            <div className="space-y-3 text-center sm:text-left">
              <div className="text-sm text-gray-500">
                <div className="font-semibold text-gray-700 mb-0.5 text-xs">
                  Email
                </div>
                <a
                  href="mailto:support@rocket.money"
                  className="hover:text-blue-600 transition-colors text-xs sm:text-sm"
                >
                  support@rocket.money
                </a>
              </div>
              <div className="text-sm text-gray-500">
                <div className="font-semibold text-gray-700 mb-0.5 text-xs">
                  Phone
                </div>
                <a
                  href="tel:+918001234567"
                  className="hover:text-blue-600 transition-colors text-xs sm:text-sm"
                >
                  +91 800 123 4567
                </a>
              </div>
              <div className="text-sm text-gray-500">
                <div className="font-semibold text-gray-700 mb-0.5 text-xs">
                  Address
                </div>
                <span className="text-xs sm:text-sm">
                  Level 12, One BKC, Bandra Kurla Complex, Mumbai – 400051
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pre-copyright CTA row */}
        <div
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderBottom: "1px solid #E2E8F0" }}
        >
          <p
            className="text-sm font-bold text-center sm:text-left"
            style={{ color: "#1E293B" }}
          >
            Ready to get your loan?
          </p>
          <button
            type="button"
            data-ocid="footer.primary_button"
            onClick={onApplyNow}
            className="flex items-center gap-2 rounded-full px-6 py-2.5 font-bold text-white text-sm transition-all duration-200 hover:brightness-110 active:scale-95 w-full sm:w-auto justify-center"
            style={{
              background: "linear-gradient(135deg, #FF6A00, #FF8C2E)",
              boxShadow: "0 4px 16px rgba(255,106,0,0.35)",
              minHeight: "44px",
            }}
          >
            Apply Now →
          </button>
        </div>

        {/* Bottom bar */}
        <div className="py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-400 text-center sm:text-left">
            © {year} Rocket.Money. All rights reserved. | RBI Registered NBFC
            Partner
          </p>
          <p className="text-xs text-gray-400 text-center">
            Built with ❤️ using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
