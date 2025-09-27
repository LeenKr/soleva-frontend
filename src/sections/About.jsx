export default function About() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24"
    >
      <div className="px-6 lg:px-16">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-xs font-medium tracking-wide text-slate-700 shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            About Soleva
          </span>
          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            Turning <span className="text-teal-500">ideas</span> into lasting digital experiences
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            We design and build modern websites, mobile apps, and SaaS platforms that help
            businesses scale and stand out. Our mission is to deliver solutions that are
            fast, secure, and visually engaging - bridging creativity with technology to
            bring every idea to life.
          </p>
        </div>

        {/* Content grid */}
        <div className="mt-20 grid gap-10 md:grid-cols-2">
          {/* Our Approach card */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-10 shadow-md hover:shadow-lg transition">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Our Approach</h3>
              <p className="mt-4 text-slate-600">
                Every project starts with understanding your vision. We combine clean design,
                reliable engineering, and a focus on real business goals to craft digital
                products that don’t just look good - they perform.
              </p>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-4">
              {[
                "Modern UI & UX",
                "Performance-first",
                "Secure by design",
                "Scalable & maintainable",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-2 text-sm text-slate-700"
                >
                  <span className="inline-block h-2 w-2 rounded-full bg-teal-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Who We Are card */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-10 shadow-md hover:shadow-lg transition">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Who We Are</h3>
              <p className="mt-4 text-slate-600">
                Soleva was founded by <span className="font-medium">Souad</span> and{" "}
                <span className="font-medium">Leen</span> - two creators who believe
                technology should be both powerful and human-centered.
              </p>
              <p className="mt-4 text-slate-600">
                With a balance of creativity and engineering, we approach every project as
                partners - not just developers. For us, it’s about building long-term trust
                and creating digital solutions that leave an impact.
              </p>
            </div>

            {/* Mini-values */}
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              {[
                { k: "Focus", v: "Web • Mobile • SaaS" },
                { k: "Values", v: "Quality • Innovation" },
              ].map((item) => (
                <div key={item.k} className="rounded-xl bg-slate-50 p-4">
                  <div className="text-xs text-slate-500">{item.k}</div>
                  <div className="mt-1 font-medium text-slate-900">{item.v}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-transparent bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Let’s bring your idea to life
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
