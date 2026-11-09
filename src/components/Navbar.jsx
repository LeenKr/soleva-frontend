import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "../assets/logoo.png";
const links = ["About", "Services", "Contact"];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const button = useRef(null);
  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 16);
      let current = "home";
      for (const id of ["home", "about", "services", "contact"])
        if (document.getElementById(id)?.getBoundingClientRect().top <= 150)
          current = id;
      setActive(current);
    };
    update();
    const escape = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    const resize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("keydown", escape);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("keydown", escape);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="shell nav-inner">
        <a href="#home" aria-label="SOLEVA home" onClick={() => setOpen(false)}>
          <img
            className="brand-logo"
            src={logo}
            width="112"
            height="64"
            alt="SOLEVA"
          />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((name) => (
            <a
              key={name}
              href={`#${name.toLowerCase()}`}
              aria-current={
                active === name.toLowerCase() ? "location" : undefined
              }
            >
              {name}
            </a>
          ))}
          <a className="button button-small" href="#contact">
            Get a Quote <ArrowUpRight size={16} />
          </a>
        </nav>
        <button
          ref={button}
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav shell"
          aria-label="Mobile navigation"
        >
          {links.map((name) => (
            <a
              key={name}
              href={`#${name.toLowerCase()}`}
              onClick={() => setOpen(false)}
              aria-current={
                active === name.toLowerCase() ? "location" : undefined
              }
            >
              {name}
              <ArrowUpRight size={18} />
            </a>
          ))}
          <a className="button" href="#contact" onClick={() => setOpen(false)}>
            Get a Quote <ArrowUpRight size={18} />
          </a>
        </nav>
      )}
    </header>
  );
}
