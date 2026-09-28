import { useForm, ValidationError } from "@formspree/react";

interface Props { formId: string }

export default function ContactForm({ formId }: Props) {
  const [state, handleSubmit] = useForm(formId);
  if (state.succeeded) return <div className="ds-form"><h2 style={{ fontSize: 44, fontStyle: "italic", margin: 0 }}>Thank you.</h2><p>Your message is on its way. I’ll be in touch soon.</p><button className="ds-button ds-button--secondary" onClick={() => window.location.reload()}>Send another</button></div>;
  return <form onSubmit={handleSubmit} className="ds-form">
    <div className="ds-form__pair"><label htmlFor="name">Your Name<input id="name" name="name" placeholder="Jane Smith" required /><ValidationError prefix="Name" field="name" errors={state.errors} /></label><label htmlFor="email">Your Email<input id="email" name="email" type="email" placeholder="jane@email.com" required /><ValidationError prefix="Email" field="email" errors={state.errors} /></label></div>
    <label htmlFor="subject">Subject<input id="subject" name="subject" placeholder="Free consultation" required /><ValidationError prefix="Subject" field="subject" errors={state.errors} /></label>
    <label htmlFor="message">Message<textarea id="message" name="message" rows={6} placeholder="Tell me a little about where you are right now." required /><ValidationError prefix="Message" field="message" errors={state.errors} /></label>
    {state.errors && <p className="ds-form__status" role="alert">Please check your details and try again.</p>}
    <div><button type="submit" disabled={state.submitting || formId === "placeholder"} className="ds-button ds-button--lg"><span>{state.submitting ? "Sending..." : "Book Free Consultation"}</span><span className="ds-button__circle" aria-hidden="true">→</span></button></div>
    {formId === "placeholder" && <p className="ds-form__status">Contact form is unavailable. Please email <a href="mailto:jamiesulek008@gmail.com">jamiesulek008@gmail.com</a>.</p>}
  </form>;
}
