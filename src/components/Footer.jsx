import { ArrowUp, ArrowUpRight, Instagram } from "lucide-react";
import logo from "../assets/logoo.png";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" aria-label="SOLEVA home">
              <img
                src={logo}
                width="112"
                height="64"
                alt="SOLEVA"
                className="brand-logo"
              />
            </a>
            <p>
              Where ideas turn into digital reality.
              <br />
              Designed with care. Built with purpose.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <nav aria-label="Footer navigation">
              {["Home", "About", "Services", "Contact"].map((name) => (
                <a key={name} href={`#${name.toLowerCase()}`}>
                  {name}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h3>Let's connect</h3>
            <a href="mailto:soleva.dev@gmail.com">
              soleva.dev@gmail.com <ArrowUpRight size={14} />
            </a>
            <a href="tel:+96181750923">+961 81 750 923</a>
            <a
              className="instagram-link"
              href="https://www.instagram.com/soleva.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={17} />
              Follow our journey <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SOLEVA. All rights reserved.</p>
          <span>Saida, Lebanon · Working worldwide</span>
          <a href="#home" aria-label="Back to top">
            Back to top <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
