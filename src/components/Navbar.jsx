import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // npm i lucide-react
import logo from "../assets/logoo.png"; // your transparent logo here

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { id: "about", name: "About", href: "#about" },
    { id: "services", name: "Services", href: "#services" },

    { id: "contact", name: "Contact", href: "#contact" },
  ];

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight active section
  useEffect(() => {
    const sections = ["home", ...links.map((l) => l.id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-50% 0px -49% 0px", threshold: 0 }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []); // eslint-disable-line

  // Desktop link styling
  const linkClass = (id) =>
    `relative group ${
      active === id ? "text-teal-400" : "text-white/90 hover:text-white"
    }`;

  const underlineClass = (id) =>
    `absolute left-0 -bottom-1 h-[2px] transition-all duration-300 bg-teal-400 ${
      active === id ? "w-full" : "w-0 group-hover:w-full"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "bg-gradient-to-r from-[#0f2233] via-[#183247] to-[#0f2233] backdrop-blur border-b border-[#0f2233]"
          : "bg-gradient-to-r from-[#0f2233]/90 via-[#183247]/80 to-[#0f2233]/90"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Soleva"
              className="h-10 md:h-12 lg:h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium">
            {links.map((l) => (
              <a key={l.id} href={l.href} className={linkClass(l.id)}>
                {l.name}
                <span className={underlineClass(l.id)} />
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-teal-500 text-white hover:bg-teal-600 shadow-sm transition"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-md text-white hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gradient-to-r from-[#0f2233] via-[#183247] to-[#0f2233] border-t border-slate-700 shadow">
          <div className="px-4 pt-3 pb-5 space-y-2">
            {links.map((l) => (
              <a
                key={l.id}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-md ${
                  active === l.id
                    ? "text-teal-400 font-medium bg-white/10"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                {l.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-md bg-teal-500 text-white text-center hover:bg-teal-600"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
