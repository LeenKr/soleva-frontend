import bg from "../assets/testttt.jpg"; // <-- use a wide, high-quality image

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* dark brand gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f2233]/90 via-[#183247]/75 to-[#0f2233]/88" />

      {/* content container */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-28 pb-16 min-h-[100svh] flex items-center">
        <div className="max-w-3xl text-white">
          <p className="text-xs tracking-[0.25em] text-white/70 uppercase">
            Web • Mobile • SaaS
          </p>

          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1]">
            Building <span className="text-teal-400">digital products</span>{" "}
            that help brands grow.
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-white/85">
            At <strong>Soleva</strong>, we design and develop high-performance
            websites, mobile apps, and SaaS platforms. From idea to launch, we
            deliver scalable solutions that turn your vision into reality.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            {/* Primary button */}
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-teal-500 text-white hover:bg-teal-600 transition shadow-sm"
            >
              Start Your Project
            </a>

            {/* Secondary button */}
            <a
              href="#services"
              className="px-6 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition"
            >
              View Services
            </a>
          </div>

          {/* trust chips */}
          <div className="mt-8 flex flex-wrap gap-2 text-[13px]">
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
              Websites & Mobile Apps
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
              SaaS & Custom Dashboards
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
