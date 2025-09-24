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
            Turning <span className="text-teal-500">ideas</span> into digital reality
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            We craft modern websites, mobile apps, and custom software designed to empower
            brands and businesses in today’s digital landscape. Our focus is on building
            solutions that are reliable, scalable, and beautifully designed.
          </p>
        </div>

        {/* Content grid */}
        <div className="mt-20 grid gap-10 md:grid-cols-2">
          {/* Our Approach card */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-10 shadow-md hover:shadow-lg transition">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Our Approach</h3>
              <p className="mt-4 text-slate-600">
                We blend creativity and technical expertise to deliver products that go
                beyond expectations. Every project is built with clean design, solid
                engineering, and a focus on real-world impact.
              </p>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-4">
              {["Modern UI & UX", "Performance-first", "Secure by design", "Scalable & maintainable"].map((item) => (
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
                <span className="font-medium">Leen</span> — two passionate creators who
                share a vision of making technology more accessible, innovative, and impactful.
              </p>
              <p className="mt-4 text-slate-600">
                Together, we bring a balance of creativity and engineering to every project.
                Soleva is not just a digital studio — it’s a partnership built on trust,
                collaboration, and the belief that every idea deserves a chance to grow in the
                digital world.
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
                Let’s build something great
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
