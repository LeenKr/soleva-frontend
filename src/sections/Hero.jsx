import { ArrowDown, ArrowUpRight } from "lucide-react";
import bg from "../assets/hero.jpg";
export default function Hero() {
  return (
    <section id="home" className="hero">
      <img
        className="hero-image"
        src={bg}
        width="626"
        height="313"
        alt=""
        fetchPriority="high"
        aria-hidden="true"
      />
      <div className="hero-shade" />
      <div className="shell hero-content">
        <div className="eyebrow light">
          <span />
          SOLEVA · Independent software development
        </div>
        <h1>
          Great ideas deserve
          <br />a <em>better digital life.</em>
        </h1>
        <p>
          We design and build websites, mobile apps, and SaaS platforms.
          Thoughtful design. Reliable engineering. A team invested in your
          vision.
        </p>
        <div className="hero-actions">
          <a className="button" href="#contact">
            Start Your Project <ArrowUpRight size={19} />
          </a>
          <a className="button button-outline" href="#services">
            View Services <ArrowDown size={17} />
          </a>
        </div>
        <div className="hero-bottom">
          <span>BUILT WITH PURPOSE. MADE TO GROW.</span>
          <div>
            <span>Websites</span>
            <i />
            <span>Mobile apps</span>
            <i />
            <span>SaaS platforms</span>
          </div>
        </div>
      </div>
      <a
        className="hero-scroll"
        href="#about"
        aria-label="Explore about SOLEVA"
      >
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
