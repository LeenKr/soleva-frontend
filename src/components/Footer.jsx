import { Instagram, Linkedin } from "lucide-react"; // npm i lucide-react
import logo from "../assets/logoo.png"; // replace with your logo

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Logo & Tagline */}
        <div>
          <img src={logo} alt="Soleva Logo" className="h-16 mb-4" />{" "}
          {/* was h-10 → now h-16 */}
          <p className="text-sm md:text-base leading-relaxed">
            Where ideas turn into{" "}
            <span className="text-blue-400">digital reality</span>.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm md:text-base">
            <li>
              <a href="#home" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-400">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
          <p className="text-sm md:text-base">Email: soleva.dev@gmail.com</p>
          <p className="text-sm md:text-base">Phone: +961 81 750 923</p>
          <div className="flex space-x-5 mt-5">
            <a
              href="https://www.instagram.com/soleva.dev/"
              target="_blank"
              className="hover:text-blue-400"
            >
              <Instagram size={24} /> {/* was 20 → now 24 */}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs md:text-sm text-gray-500">
        © 2025 Soleva. All rights reserved.
      </div>
    </footer>
  );
}
