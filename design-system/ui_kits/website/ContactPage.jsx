window.ContactPage = function ContactPage({ go }) {
  const { Button, IconButton, Icon, Tag, Em, ImagePlaceholder, SectionHeading, FeatureCard, Stat, TestimonialCard, FAQItem, CTABanner, ServiceCard, OfferingRow, TimelineItem, Input } = window.JamieDS;
  const Section = window.Section;
  const [sent, setSent] = React.useState(false);
  const Info = ({ icon, label, value }) => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '22px 0', borderBottom: '1px solid var(--border-2)' }}>
      <span style={{ width: 44, height: 44, borderRadius: 'var(--radius-pill)', background: 'var(--white)', border: '1px solid var(--border-1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name={icon} size={18} color="var(--accent-strong)" /></span>
      <div style={{ display: 'grid', gap: 4 }}>
        <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 'var(--tracking-eyebrow)', color: 'var(--fg-3)' }}>{label}</span>
        <a href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: 17, color: 'var(--fg-1)' }}>{value}</a>
      </div>
    </div>
  );
  return (
    <Section y="48px">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 64, alignItems: 'start' }}>
        <div style={{ display: 'grid', gap: 32 }}>
          <SectionHeading align="left" size="display" title="Contact me." />
          <div style={{ borderTop: '1px solid var(--border-2)' }}>
            <Info icon="mail" label="EMAIL" value="jamiesulek008@gmail.com" />
            <Info icon="map-pin" label="LOCATION" value="Victoria, British Columbia, Canada" />
          </div>
          <ImagePlaceholder label="Studio exterior" ratio="16 / 10" />
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          style={{ background: 'var(--surface-card)', border: '1px solid var(--border-1)', borderRadius: 'var(--radius-lg)', padding: 36, display: 'grid', gap: 20 }}>
          {sent ? (
            <div style={{ display: 'grid', gap: 16, padding: '40px 0', justifyItems: 'start' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 44, lineHeight: 1.05 }}>Thank you.</div>
              <p style={{ margin: 0, color: 'var(--fg-3)' }}>Your message is on its way. I’ll be in touch soon.</p>
              <Button variant="secondary" onClick={() => setSent(false)}>Send another</Button>
            </div>
          ) : (<>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
              <Input label="Your Name" placeholder="Jane Smith" />
              <Input label="Your Email" type="email" placeholder="jane@email.com" />
            </div>
            <Input label="Subject" placeholder="Free consultation" />
            <Input label="Message" multiline placeholder="Tell me a little about where you are right now." />
            <div><Button size="lg">Book Free Consultation</Button></div>
          </>)}
        </form>
      </div>
    </Section>
  );
};
