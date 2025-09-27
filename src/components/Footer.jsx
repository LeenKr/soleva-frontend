import { Instagram, ArrowUp } from "lucide-react"; // added ArrowUp
import logo from "../assets/logoo.png";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Logo & Tagline */}
        <div>
          <img src={logo} alt="Soleva Logo" className="h-16 mb-4" />
          <p className="text-sm md:text-base leading-relaxed">
            Where ideas turn into{" "}
            <span className="text-blue-400">digital reality</span>.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm md:text-base">
            {[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
          <p className="text-sm md:text-base">
            <a
              href="mailto:soleva.dev@gmail.com"
              className="hover:text-blue-400 transition-colors"
            >
              soleva.dev@gmail.com
            </a>
          </p>
          <p className="text-sm md:text-base mt-1">
            <a
              href="tel:+96181750923"
              className="hover:text-blue-400 transition-colors"
            >
              +961 81 750 923
            </a>
          </p>
          <div className="flex space-x-5 mt-5">
            <a
              href="https://www.instagram.com/soleva.dev/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-blue-400 transition-colors"
            >
              <Instagram size={24} />
            </a>
           
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs md:text-sm text-gray-500">
        © {new Date().getFullYear()} Soleva. All rights reserved.
      </div>

      {/* Floating Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed right-6 bottom-6 z-50 inline-flex items-center justify-center p-3 rounded-full bg-teal-500 text-white shadow-lg hover:bg-teal-600 transition"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
