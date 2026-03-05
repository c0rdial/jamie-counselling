import { useForm, ValidationError } from "@formspree/react";

interface Props {
  formId: string;
}

export default function ContactForm({ formId }: Props) {
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <div className="text-center py-12">
        <p className="text-[--color-success] text-lg font-medium mb-2">
          Message sent!
        </p>
        <p className="text-[--color-text-body]">
          I'll be in touch within 24-48 hours.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full bg-white border border-[--color-border] text-[--color-text-primary] rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[--color-accent] transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm text-[--color-text-muted] mb-2">
          Name
        </label>
        <input id="name" type="text" name="name" required className={inputClasses} />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-[--color-text-muted] mb-2">
          Email
        </label>
        <input id="email" type="email" name="email" required className={inputClasses} />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-[--color-text-muted] mb-2">
          Message
        </label>
        <textarea id="message" name="message" rows={5} required className={inputClasses} />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-[--color-accent] text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-[--color-accent-dark] transition-colors duration-200 disabled:opacity-50"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
