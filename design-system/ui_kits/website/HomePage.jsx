window.HomePage = function HomePage({ go }) {
  const { Button, IconButton, Icon, Tag, Em, ImagePlaceholder, SectionHeading, FeatureCard, Stat, TestimonialCard, FAQItem, CTABanner, ServiceCard, OfferingRow, TimelineItem, Input } = window.JamieDS;
  const S = window.JAMIE_DATA; const Section = window.Section;
  const [open, setOpen] = React.useState(-1);
  const [t, setT] = React.useState(0);
  const per = 2; const maxT = S.testimonials.length - per;
  return (<div>
    <Section y="48px">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 56, alignItems: 'center' }}>
        <div style={{ display: 'grid', gap: 28, justifyItems: 'start' }}>
          <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-display)', lineHeight: 'var(--lh-display)', letterSpacing: 'var(--tracking-display)', textWrap: 'balance' }}>
            <Em>Embrace</Em> Your Journey to <Em>Inner Peace</Em>
          </h1>
          <p style={{ margin: 0, fontSize: 'var(--text-body-lg)', lineHeight: 1.6, color: 'var(--fg-3)', maxWidth: 440 }}>Personalized wellness coaching to help you find balance, clarity, and vitality in everyday life.</p>
          <Button size="lg" onClick={() => go('Contact')}>Book Free Consultation</Button>
        </div>
        <ImagePlaceholder label="Hero portrait — coach" ratio="1710 / 2070" radius="var(--radius-xl)" />
      </div>
    </Section>

    <Section y="var(--section-y-sm)">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', rowGap: 110, columnGap: 32 }}>
        {S.features.map(([title, text], i) => <FeatureCard key={title} icon={S.featureIcons[i]} title={title} text={text} />)}
      </div>
    </Section>

    <Section y="var(--section-y-sm)">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 40 }}>
        {S.stats.map(([l, v, u]) => <Stat key={l} label={l} value={v} unit={u} />)}
      </div>
    </Section>

    <Section bg="var(--bg-subtle)">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 64, alignItems: 'center' }}>
        <div style={{ display: 'grid', gap: 28, justifyItems: 'start' }}>
          <SectionHeading align="left" title="Your Safe Space for Calm & Clarity" subtitle="We believe that true healing starts with presence. Whether you're new to mindfulness or looking to deepen your journey, our space is open to you — online or in person." />
          <div style={{ display: 'grid', gap: 10, fontSize: 15, color: 'var(--fg-2)' }}>
            <span style={{ display: 'flex', gap: 10, alignItems: 'center' }}><Icon name="clock" size={18} color="var(--accent)" />Open daily from <strong>7:00 AM</strong> to <strong>6:00 PM</strong></span>
            <span style={{ display: 'flex', gap: 10, alignItems: 'center' }}><Icon name="check" size={18} color="var(--accent)" />Available during all open hours</span>
          </div>
          <Button variant="secondary" icon="arrow-right" onClick={() => go('Services')}>Explore Services</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, alignItems: 'end' }}>
          <ImagePlaceholder label="Studio interior" ratio="1604 / 1830" />
          <ImagePlaceholder label="Breathwork session" ratio="1638 / 1868" tone="sage" style={{ marginBottom: 48 }} />
        </div>
      </div>
    </Section>

    <Section>
      <div style={{ display: 'grid', gap: 40, justifyItems: 'center' }}>
        <SectionHeading title="Your Journey, Your Moments" subtitle="Every path to wellness is unique. Use this space to showcase the experiences, environments, and rituals that have shaped your story." />
        <Button onClick={() => go('Contact')}>Book Free Consultation</Button>
      </div>
    </Section>
    <div style={{ overflow: 'hidden', marginTop: -40, paddingBottom: 'var(--section-y-sm)' }}>
      <div className="sr-marquee" style={{ display: 'flex', gap: 16, width: 'max-content' }}>
        {[0,1].flatMap(k => ['Ritual','Retreat','Morning','Tea','Nature','Stillness','Circle','Journal'].map((l, i) => (
          <div key={k + '-' + i} style={{ width: 260, flexShrink: 0 }}><ImagePlaceholder label={l} ratio="1100 / 1546" tone={i % 3 === 1 ? 'sage' : 'sand'} /></div>
        )))}
      </div>
    </div>

    <Section bg="var(--bg-subtle)">
      <div style={{ display: 'grid', gap: 48 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, flexWrap: 'wrap' }}>
          <SectionHeading align="left" title="Words from the Heart" subtitle="Every story shared here is a reflection of connection, trust, and transformation. These kind words remind us that healing is real, and it’s happening." />
          <div style={{ display: 'flex', gap: 10 }}>
            <IconButton icon="arrow-left" label="Previous" disabled={t === 0} onClick={() => setT(Math.max(0, t - 1))} />
            <IconButton icon="arrow-right" label="Next" variant="filled" disabled={t >= maxT} onClick={() => setT(Math.min(maxT, t + 1))} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: 20 }}>
          {S.testimonials.slice(t, t + per).map((q) => <TestimonialCard key={q.name} {...q} />)}
        </div>
      </div>
    </Section>

    <Section>
      <div style={{ maxWidth: 1150, margin: '0 auto', display: 'grid', gap: 36 }}>
        <SectionHeading align="left" title="Questions? We’re Here to Help." subtitle="Whether you’re new to wellness or exploring deeper support, we know you may have questions. Here are a few answers to help guide your next step." maxWidth={900} />
        <div style={{ display: 'grid', gap: 12 }}>
          {S.faqs.map(([q, a], i) => <FAQItem key={i} question={q} answer={a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />)}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap', marginTop: 8 }}>
          <span style={{ fontSize: 16, color: 'var(--fg-3)' }}>Still have questions? I’m just a message away.</span>
          <Button size="lg" onClick={() => go('Contact')}>Get in touch with me</Button>
        </div>
      </div>
    </Section>
  </div>);
};
