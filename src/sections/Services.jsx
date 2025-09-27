// src/sections/Services.jsx
import { MonitorSmartphone, Globe, BarChart3, Smartphone } from "lucide-react";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Landing Pages",
    blurb:
      "Launch campaigns that convert. We design landing pages that capture attention, highlight your offer, and drive sign-ups or sales.",
    points: ["Conversion-focused", "Fast & responsive", "SEO-ready"],
  },
  {
    icon: Globe,
    title: "Websites",
    blurb:
      "From strategy to launch, we build fully custom websites that reflect your brand and scale with your growth - no cookie-cutter templates.",
    points: ["Tailored architecture", "Scalable design", "Mobile-first"],
  },
  {
    icon: BarChart3,
    title: "SaaS & Dashboards",
    blurb:
      "We develop secure SaaS platforms and admin dashboards that streamline operations, simplify data, and support subscription-based growth.",
    points: ["Role-based access", "Subscriptions & billing", "Analytics & reports"],
  },
{
  icon: Smartphone,
  title: "Mobile Apps",
  blurb:
    "We design and build modern mobile apps that deliver smooth performance, intuitive interfaces, and a native feel your users will love.",
  points: ["Seamless user experience", "High performance", "App Store & Play Store ready"],
}

];

export default function Services() {
  return (
    <section
      id="services"
      className="relative -mt-16 bg-gradient-to-b from-slate-50 via-white to-slate-50"
    >
      {/* sheet */}
      <div
        className="
          relative rounded-t-3xl bg-white/80 backdrop-blur py-24
          shadow-[0_24px_60px_-30px_rgba(2,6,23,0.28)]
          before:content-[''] before:absolute before:inset-x-0 before:-top-6 before:h-6
          before:bg-gradient-to-b before:from-slate-50 before:to-transparent
        "
      >
        {/* container */}
        <div className="px-6 lg:px-16">
          {/* Header */}
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-xs font-medium tracking-wide text-slate-700 shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
              Our Services
            </span>
            <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900">
              Digital solutions, built your way
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Whether it’s a landing page to boost conversions, a custom website to grow your brand, or a SaaS platform to power your business -
              <strong> Soleva designs and builds solutions that fit your vision</strong>.
            </p>
          </div>

          {/* Grid */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, blurb, points }) => (
              <article
                key={title}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Accent ring */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-teal-400/50" />

                {/* Icon */}
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#0f2233] to-[#183247] text-white shadow-sm">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>

                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{blurb}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {points.map((p) => (
                    <li
                      key={p}
                      className="text-xs px-2.5 py-1 rounded-full border border-slate-200 text-slate-700 bg-slate-50"
                    >
                      {p}
                    </li>
                  ))}
                </ul>

                {/* spacer */}
                <div className="flex-1" />

                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700"
                >
                  Start this service →
                </a>

                <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-teal-400/20 blur-3xl" />
              </article>
            ))}
          </div>

          {/* Bottom CTA banner */}
          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-[#0f2233] via-[#183247] to-[#0f2233] px-6 py-7">
            <p className="text-white/90">
              Not sure which service fits best? Share your idea and we’ll help shape it into a clear digital plan.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl bg-teal-500 px-5 py-2.5 text-white hover:bg-teal-600 transition"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
