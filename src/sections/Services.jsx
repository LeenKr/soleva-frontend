import {
  ArrowUpRight,
  Globe,
  LayoutTemplate,
  PanelsTopLeft,
  Smartphone,
} from "lucide-react";
const services = [
  {
    icon: LayoutTemplate,
    title: "Landing Pages",
    type: "Landing Page",
    text: "Give your next launch a strong first impression. Focused pages that turn interest into action.",
    tags: ["Campaign-ready", "Conversion-focused"],
  },
  {
    icon: Globe,
    title: "Websites",
    type: "Website",
    text: "A digital home that feels like your brand. Custom websites designed for clarity, speed, and growth.",
    tags: ["Custom design", "Responsive by default"],
  },
  {
    icon: PanelsTopLeft,
    title: "SaaS & Dashboards",
    type: "SaaS / Dashboard",
    text: "Make complex work feel simple. Purpose-built platforms and dashboards around the way your business runs.",
    tags: ["Intuitive workflows", "Built to scale"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    type: "Mobile App",
    text: "Put your idea in people's hands. Considered mobile experiences that make every interaction count.",
    tags: ["iOS & Android", "User-first experiences"],
  },
];
export default function Services({ onSelect }) {
  return (
    <section id="services" className="section services-section">
      <div className="shell">
        <div className="section-heading split-heading">
          <div>
            <div className="eyebrow">
              <span />
              02 / What we build
            </div>
            <h2>
              Your ambition.
              <br />
              <span className="muted">Our expertise.</span>
            </h2>
          </div>
          <p>
            One team, four ways to bring your vision to life. Every solution
            starts with your goals and is built to make a difference.
          </p>
        </div>
        <div className="services-grid">
          {services.map(({ icon: Icon, title, type, text, tags }, i) => (
            <article className="service-card" key={title}>
              <div className="card-top">
                <span className="icon-tile">
                  <Icon size={25} />
                </span>
                <span className="service-number">0{i + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <ul className="service-tags">
                {tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => onSelect(type)}
                className="service-link"
                aria-label={`Discuss ${title}`}
              >
                Let's build it <ArrowUpRight size={20} />
              </a>
            </article>
          ))}
        </div>
        <div className="services-note">
          <p>Have an idea, but not sure where to start?</p>
          <a href="#contact" className="text-link">
            Let's figure it out together <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
