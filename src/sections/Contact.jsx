import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  LoaderCircle,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
const API = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/+$/, "");
const types = [
  "Landing Page",
  "Website",
  "Mobile App",
  "SaaS / Dashboard",
  "Other",
];
const empty = () => ({
  name: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  message: "",
  agree: false,
  website: "",
});
function validate(form) {
  const errors = {};
  if (form.name.trim().length < 2 || form.name.trim().length > 100)
    errors.name = "Enter your name (2–100 characters).";
  if (!/^\S+@\S+\.\S+$/.test(form.email.trim()) || form.email.length > 254)
    errors.email = "Enter a valid email address.";
  if (form.phone.length > 50)
    errors.phone = "Keep your phone number under 50 characters.";
  if (!types.includes(form.projectType))
    errors.projectType = "Choose a project type.";
  if (form.budget.length > 200)
    errors.budget = "Keep your budget under 200 characters.";
  if (form.message.trim().length < 10 || form.message.length > 2000)
    errors.message = "Tell us a little more (10–2,000 characters).";
  if (!form.agree)
    errors.agree = "Please agree to be contacted about this inquiry.";
  return errors;
}
export default function Contact({ selection }) {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ sending: false, ok: false, fail: "" });
  const [slow, setSlow] = useState(false);
  const lock = useRef(false);
  const request = useRef(null);
  const attempt = useRef(null);
  const formRef = useRef(null);
  useEffect(() => {
    if (selection) setForm((f) => ({ ...f, projectType: selection.type }));
  }, [selection]);
  useEffect(() => () => request.current?.abort(), []);
  function onChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
    setErrors((old) => ({ ...old, [name]: undefined }));
    setStatus((s) => ({ ...s, ok: false, fail: "" }));
  }
  async function onSubmit(event) {
    event.preventDefault();
    if (lock.current) return;
    const invalid = validate(form);
    setErrors(invalid);
    if (Object.keys(invalid).length) {
      formRef.current?.elements.namedItem(Object.keys(invalid)[0])?.focus();
      return;
    }
    lock.current = true;
    const payload = JSON.stringify({
      ...form,
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    });
    if (attempt.current?.payload !== payload)
      attempt.current = { payload, key: crypto.randomUUID() };
    const controller = new AbortController();
    request.current = controller;
    const timeout = setTimeout(() => controller.abort(), 65000);
    const slowTimer = setTimeout(() => setSlow(true), 10000);
    setStatus({ sending: true, ok: false, fail: "" });
    try {
      const response = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Idempotency-Key": attempt.current.key,
        },
        body: payload,
        signal: controller.signal,
      });
      const data = await response.json().catch(() => null);
      if (!response.ok || data?.ok !== true || !data?.messageId) {
        if (data?.fields) setErrors(data.fields);
        throw new Error(
          typeof data?.error === "string"
            ? data.error
            : response.status === 429
              ? "Too many requests. Please wait a minute and try again."
              : "We couldn't confirm your message. Please try again or email us directly.",
        );
      }
      setStatus({ sending: false, ok: true, fail: "" });
      setForm(empty());
      attempt.current = null;
    } catch (error) {
      setStatus({
        sending: false,
        ok: false,
        fail:
          error.name === "AbortError"
            ? "The request timed out. Delivery couldn't be confirmed. Retry the same message, or email us directly."
            : error instanceof TypeError
              ? "We couldn't reach the server. Check your connection and try again, or email us directly."
              : error.message,
      });
    } finally {
      clearTimeout(timeout);
      clearTimeout(slowTimer);
      setSlow(false);
      lock.current = false;
      request.current = null;
    }
  }
  const field = (name, label, props = {}) => (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        value={form[name]}
        onChange={onChange}
        aria-invalid={!!errors[name]}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
        {...props}
      />
      {errors[name] && (
        <p className="field-error" id={`${name}-error`}>
          {errors[name]}
        </p>
      )}
    </div>
  );
  return (
    <section id="contact" className="section contact-section">
      <div className="shell">
        <div className="eyebrow">
          <span />
          03 / Start a conversation
        </div>
        <div className="contact-grid">
          <div className="contact-copy">
            <h2>
              Big idea?
              <br />
              <span className="muted">Let's build it.</span>
            </h2>
            <p>
              Tell us what you have in mind. We'll help you find the right next
              step, from an early idea to a project ready to go.
            </p>
            <div className="contact-details">
              <div>
                <Mail size={20} />
                <div>
                  <span>Email us</span>
                  <a href="mailto:soleva.dev@gmail.com">
                    soleva.dev@gmail.com <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
              <div>
                <Phone size={20} />
                <div>
                  <span>Give us a call</span>
                  <a href="tel:+96181750923">+961 81 750 923</a>
                </div>
              </div>
              <div>
                <MapPin size={20} />
                <div>
                  <span>Based in Saida, Lebanon</span>
                  <p>Working with you, worldwide.</p>
                </div>
              </div>
            </div>
            <a
              className="whatsapp-link"
              href="https://wa.me/96181750923"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              Prefer WhatsApp? Say hello <ArrowUpRight size={16} />
            </a>
            <div className="response-note">
              <Clock size={17} />
              <span>A thoughtful reply within 24–48 hours.</span>
            </div>
          </div>
          <div className="contact-form-card">
            <div className="form-heading">
              <h3>Tell us about your project</h3>
              <p>A few details are all we need to get started.</p>
            </div>
            <form ref={formRef} onSubmit={onSubmit} noValidate>
              <div className="honeypot" aria-hidden="true">
                <label htmlFor="website">Leave this field empty</label>
                <input
                  id="website"
                  name="website"
                  value={form.website}
                  onChange={onChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <fieldset disabled={status.sending}>
                <legend className="sr-only">Project inquiry</legend>
                <div className="form-row">
                  {field("name", "Full name *", {
                    required: true,
                    autoComplete: "name",
                    placeholder: "Your full name",
                    maxLength: 100,
                  })}
                  {field("email", "Email address *", {
                    type: "email",
                    required: true,
                    autoComplete: "email",
                    placeholder: "you@company.com",
                    maxLength: 254,
                  })}
                </div>
                <div className="form-row">
                  {field("phone", "Phone (optional)", {
                    type: "tel",
                    autoComplete: "tel",
                    placeholder: "+961 …",
                    maxLength: 50,
                  })}
                  <div className="form-field">
                    <label htmlFor="projectType">Project type *</label>
                    <select
                      required
                      id="projectType"
                      name="projectType"
                      value={form.projectType}
                      onChange={onChange}
                      aria-invalid={!!errors.projectType}
                      aria-describedby={
                        errors.projectType ? "projectType-error" : undefined
                      }
                    >
                      <option value="">What are we building?</option>
                      {types.map((type) => (
                        <option key={type}>{type}</option>
                      ))}
                    </select>
                    {errors.projectType && (
                      <p id="projectType-error" className="field-error">
                        {errors.projectType}
                      </p>
                    )}
                  </div>
                </div>
                {field("budget", "Estimated budget (optional)", {
                  placeholder: "A range, a rough idea, or ‘not sure yet’",
                  maxLength: 200,
                })}
                <div className="form-field">
                  <label htmlFor="message">Project details *</label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={5}
                    minLength={10}
                    maxLength={2000}
                    placeholder="What would you like to create? Tell us about your goals, features, or timeline."
                    aria-invalid={!!errors.message}
                    aria-describedby={`message-hint${errors.message ? " message-error" : ""}`}
                  />
                  <div id="message-hint" className="input-hint">
                    A little context goes a long way.
                    <span>{form.message.length}/2000</span>
                  </div>
                  {errors.message && (
                    <p id="message-error" className="field-error">
                      {errors.message}
                    </p>
                  )}
                </div>
                <label className="consent">
                  <input
                    required
                    id="agree"
                    type="checkbox"
                    name="agree"
                    checked={form.agree}
                    onChange={onChange}
                    aria-invalid={!!errors.agree}
                    aria-describedby={errors.agree ? "agree-error" : undefined}
                  />
                  <span>
                    I agree to be contacted by SOLEVA about my inquiry.
                  </span>
                </label>
                {errors.agree && (
                  <p id="agree-error" className="field-error">
                    {errors.agree}
                  </p>
                )}
                <button
                  className="button submit-button"
                  type="submit"
                  disabled={status.sending}
                  aria-busy={status.sending}
                >
                  {status.sending ? (
                    <>
                      <LoaderCircle size={18} className="spinner" />
                      Sending your message…
                    </>
                  ) : (
                    <>
                      Send Your Inquiry <Send size={17} />
                    </>
                  )}
                </button>
              </fieldset>
              {slow && (
                <p role="status" className="input-hint">
                  Connecting to SOLEVA. This can take a moment; please keep
                  this page open.
                </p>
              )}
              {status.ok && (
                <div className="feedback success" role="status">
                  <CheckCircle2 size={20} />
                  <p>
                    Your inquiry has been accepted for delivery. We'll get back
                    to you within 24–48 hours.
                  </p>
                </div>
              )}
              {status.fail && (
                <div className="feedback failure" role="alert">
                  <p>{status.fail}</p>
                </div>
              )}
              <p className="form-footnote">
                Prefer your inbox?{" "}
                <a href="mailto:soleva.dev@gmail.com">Email us directly.</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
