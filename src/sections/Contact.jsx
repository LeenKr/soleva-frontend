// src/sections/Contact.jsx
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

const API = import.meta.env.VITE_API_BASE_URL || "";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
    agree: false,
    website: "", // honeypot
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ sending: false, ok: false, fail: "" });

  function onChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.projectType) e.projectType = "Select a project type.";
    if (!form.message.trim()) e.message = "Tell us a bit about your project.";
    if (!form.agree) e.agree = "You must agree before submitting.";
    return e;
  }

  async function onSubmit(ev) {
    ev.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    try {
      setStatus({ sending: true, ok: false, fail: "" });
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus({ sending: false, ok: true, fail: "" });
      setForm({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        message: "",
        agree: false,
        website: "",
      });
    } catch {
      setStatus({
        sending: false,
        ok: false,
        fail: "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <section
      id="contact"
      className="
        relative bg-gradient-to-b from-slate-50 via-white to-slate-50
        py-24
      "
    >
      {/* soft fade from previous section */}
      <div className="pointer-events-none absolute inset-x-0 -top-6 h-6 bg-gradient-to-b from-slate-50 to-transparent" />

      {/* FULL-WIDTH container */}
      <div className="px-6 lg:px-16">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-xs font-medium tracking-wide text-slate-700 shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            Contact
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900">
            Let’s build something <span className="text-teal-500">great</span>{" "}
            together
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Tell us about your idea, timeline, and goals. We’ll get back within
            24–48 hours with next steps.
          </p>
        </div>

        {/* Grid: Info + Form */}
        <div className="mt-16 grid gap-8 md:grid-cols-5">
          {/* Info card */}
          <aside className="md:col-span-2 rounded-2xl border border-slate-200 bg-white p-7 shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-slate-900">
              Ways to reach us
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                  <Mail className="h-4 w-4 text-slate-700" />
                </span>
                <div>
                  <p className="font-medium text-slate-900">Email</p>
                  <a
                    href="mailto:hello@soleva.studio"
                    className="text-slate-600 hover:text-slate-900"
                  >
                    leenkkrayem@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                  <Phone className="h-4 w-4 text-slate-700" />
                </span>
                <div>
                  <p className="font-medium text-slate-900">Phone / WhatsApp</p>
                  <a
                    href="https://wa.me/96181750923"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-600 hover:text-slate-900"
                  >
                    +961 81 750 923
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                  <MapPin className="h-4 w-4 text-slate-700" />
                </span>
                <div>
                  <p className="font-medium text-slate-900">Location</p>
                  <p className="text-slate-600">
                    Saida, Lebanon · Remote worldwide
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                  <Clock className="h-4 w-4 text-slate-700" />
                </span>
                <div>
                  <p className="font-medium text-slate-900">Response time</p>
                  <p className="text-slate-600">Typically within 24–48 hours</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs text-slate-500">Focus</p>
                <p className="mt-1 font-medium text-slate-900">
                  Web • Mobile • SaaS
                </p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs text-slate-500">Approach</p>
                <p className="mt-1 font-medium text-slate-900">
                  Quality • Clarity
                </p>
              </div>
            </div>
          </aside>

          {/* Form card */}
          <div className="md:col-span-3 rounded-2xl border border-slate-200 bg-white p-7 shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-slate-900">
              Tell us about your project
            </h3>

            {status.ok && (
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-teal-200 bg-teal-50 px-4 py-3 text-teal-800">
                <CheckCircle2 className="h-5 w-5" />
                <p className="text-sm">
                  Thanks! Your message has been sent. We’ll reply soon.
                </p>
              </div>
            )}
            {status.fail && (
              <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-800 text-sm">
                {status.fail}
              </div>
            )}

            <form onSubmit={onSubmit} noValidate className="mt-6 space-y-5">
              {/* hidden honeypot */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={onChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Full name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={onChange}
                    aria-invalid={!!errors.name}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-teal-500 focus:ring-teal-500"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    aria-invalid={!!errors.email}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-teal-500 focus:ring-teal-500"
                    placeholder="name@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={onChange}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-teal-500 focus:ring-teal-500"
                    placeholder="+961 …"
                  />
                </div>
                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Project type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={form.projectType}
                    onChange={onChange}
                    aria-invalid={!!errors.projectType}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  >
                    <option value="">Select…</option>
                    <option>Landing Page</option>
                    <option>Website</option>
                    <option>Mobile app</option>
                    <option>SaaS / Dashboard</option>
                    <option>Other</option>
                  </select>
                  {errors.projectType && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.projectType}
                    </p>
                  )}
                </div>
              </div>

              {/* Budget (optional text input) */}
              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-slate-700"
                >
                  Estimated budget (optional)
                </label>
                <input
                  id="budget"
                  name="budget"
                  type="text"
                  value={form.budget}
                  onChange={onChange}
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-teal-500 focus:ring-teal-500"
                  placeholder="$2,000 — $5,000 or 'Not sure yet'"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700"
                >
                  Project details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  aria-invalid={!!errors.message}
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-teal-500 focus:ring-teal-500"
                  placeholder="Tell us about goals, features, and timeline…"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-600">{errors.message}</p>
                )}
              </div>

              <label className="flex items-start gap-3 text-sm text-slate-700">
                <input
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={onChange}
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                />
                <span>
                  I agree to be contacted about my inquiry. I understand my info
                  will be handled securely.
                </span>
              </label>
              {errors.agree && (
                <p className="text-xs text-red-600">{errors.agree}</p>
              )}

              <button
                type="submit"
                disabled={status.sending}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {status.sending ? "Sending…" : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* no extra bottom block -> footer sits snugly */}
    </section>
  );
}
