import { ArrowUpRight, Check, Code2, Sparkles } from "lucide-react";
export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="shell">
        <div className="section-heading split-heading">
          <div>
            <div className="eyebrow">
              <span />
              01 / About SOLEVA
            </div>
            <h2>
              Creative thinking.
              <br />
              <span className="muted">Solid engineering.</span>
            </h2>
          </div>
          <p>
            We turn your ideas into digital experiences that feel right and work
            beautifully. From the first conversation to launch, we build around
            your business and the people who use it.
          </p>
        </div>
        <div className="about-grid">
          <article className="about-card">
            <div className="card-top">
              <span className="icon-tile">
                <Code2 size={23} />
              </span>
              <span className="card-kicker">HOW WE WORK</span>
            </div>
            <h3>Our Approach</h3>
            <p>
              Understand the challenge. Design with intention. Build for the
              long run. We pair a clear process with careful execution, keeping
              you involved at every step.
            </p>
            <ul className="approach-list">
              {[
                "Thoughtful UI & UX",
                "Performance from day one",
                "Security at the core",
                "Room to scale",
              ].map((x) => (
                <li key={x}>
                  <Check size={16} />
                  {x}
                </li>
              ))}
            </ul>
          </article>
          <article className="about-card founder-card">
            <div className="card-top">
              <span className="icon-tile">
                <Sparkles size={23} />
              </span>
              <span className="card-kicker">THE PEOPLE BEHIND THE CODE</span>
            </div>
            <h3>Who We Are</h3>
            <p>
              Founded by Souad and Leen, SOLEVA brings creativity and
              engineering together. We work as your partners, turning a shared
              vision into something useful, considered, and built to last.
            </p>
            <div className="values-grid">
              <div>
                <span>Our focus</span>
                <strong>Web · Mobile · SaaS</strong>
              </div>
              <div>
                <span>Our values</span>
                <strong>Quality · Innovation</strong>
              </div>
            </div>
            <a className="text-link" href="#contact">
              Meet your next development partner <ArrowUpRight size={17} />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
