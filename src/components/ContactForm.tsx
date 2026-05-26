import { useForm, ValidationError } from "@formspree/react";

interface Props {
  formId: string;
}

export default function ContactForm({ formId }: Props) {
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <div className="text-center py-16">
        <div className="w-14 h-14 rounded-full bg-[--color-accent-pale] flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-[--color-accent]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        </div>
        <p className="text-[--color-accent-dark] text-xl font-medium mb-2" style={{ fontFamily: "var(--font-heading)" }}>
          Message sent!
        </p>
        <p className="text-[--color-text-body] text-[15px]">
          Thank you for reaching out. I'll be in touch within 24-48 hours.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full bg-[--color-bg] border border-[--color-border] text-[--color-text-primary] rounded-xl px-4 py-3.5 text-[15px] focus:outline-none focus:border-[--color-accent-light] focus:ring-2 focus:ring-[--color-accent-pale] transition-all duration-200 placeholder:text-[--color-text-muted]/50";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-[13px] text-[--color-text-muted] font-semibold uppercase tracking-wider mb-2">
          Name
        </label>
        <input id="name" type="text" name="name" required className={inputClasses} placeholder="Your name" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="email" className="block text-[13px] text-[--color-text-muted] font-semibold uppercase tracking-wider mb-2">
          Email
        </label>
        <input id="email" type="email" name="email" required className={inputClasses} placeholder="you@example.com" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="message" className="block text-[13px] text-[--color-text-muted] font-semibold uppercase tracking-wider mb-2">
          Message
        </label>
        <textarea id="message" name="message" rows={5} required className={inputClasses} placeholder="What brings you here? (No pressure to share details — even a simple hello works.)" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="group w-full flex items-center justify-center gap-2 bg-[--color-accent] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[--color-accent-dark] transition-all duration-300 hover:shadow-lg hover:shadow-[--color-accent]/20 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? "Sending..." : "Send Message"}
        {!state.submitting && (
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        )}
      </button>
    </form>
  );
}
