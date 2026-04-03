import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

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

export default function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer
      data-ocid="footer.section"
      className="pt-16 pb-0"
      style={{ background: "#F8FAFC" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-200">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-0.5 mb-4">
              <span className="text-2xl font-black text-gray-900">Zatpat</span>
              <span
                className="text-2xl font-black"
                style={{ color: "#FF5500" }}
              >
                .
              </span>
              <span className="text-2xl font-black text-gray-900">loans</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              India's fastest and most trusted instant personal loan platform.
              Get funds in your account within hours, not days.
            </p>
            <div className="flex gap-3">
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
                  className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:border-orange-500 transition-all duration-200"
                  style={{ "--hover-bg": "#FF5500" } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "#FF5500";
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
          <div>
            <h4 className="font-bold text-gray-900 mb-5 text-sm uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-ocid="footer.link"
                    className="text-sm text-gray-500 hover:text-orange-500 transition-colors flex items-center gap-2 group"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-orange-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-gray-900 mb-5 text-sm uppercase tracking-widest">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((svc) => (
                <li key={svc.label}>
                  <a
                    href={svc.href}
                    data-ocid="footer.link"
                    className="text-sm text-gray-500 hover:text-orange-500 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-orange-400 transition-colors" />
                    {svc.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-900 mb-5 text-sm uppercase tracking-widest">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="text-sm text-gray-500">
                <div className="font-semibold text-gray-700 mb-1">Email</div>
                <a
                  href="mailto:support@zatpat.loans"
                  className="hover:text-orange-500 transition-colors"
                >
                  support@zatpat.loans
                </a>
              </div>
              <div className="text-sm text-gray-500">
                <div className="font-semibold text-gray-700 mb-1">Phone</div>
                <a
                  href="tel:+918001234567"
                  className="hover:text-orange-500 transition-colors"
                >
                  +91 800 123 4567
                </a>
              </div>
              <div className="text-sm text-gray-500">
                <div className="font-semibold text-gray-700 mb-1">Address</div>
                <span>
                  Level 12, One BKC, Bandra Kurla Complex, Mumbai – 400051
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            © {year} Zatpat.loans. All rights reserved. | RBI Registered NBFC
            Partner
          </p>
          <p className="text-xs text-gray-400">
            Built with ❤️ using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
