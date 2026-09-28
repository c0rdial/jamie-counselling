window.AboutPage = function AboutPage({ go }) {
  const { Timeline, ScrollSpinImage } = window.JamieDS;
  const { Button, IconButton, Icon, Tag, Em, ImagePlaceholder, SectionHeading, FeatureCard, Stat, TestimonialCard, FAQItem, CTABanner, ServiceCard, OfferingRow, TimelineItem, Input } = window.JamieDS;
  const S = window.JAMIE_DATA; const Section = window.Section;
  return (<div>
    <Section y="48px">
      <div style={{ display: 'grid', gap: 48 }}>
        <div style={{ display: 'grid', gap: 24, justifyItems: 'center', textAlign: 'center' }}>
          <SectionHeading size="display" title="Hi, I’m Jamie, your wellness coach" subtitle="Personalized wellness coaching to help you find balance, clarity, and vitality in everyday life." maxWidth={900} />
          <Button size="lg" onClick={() => go('Contact')}>Book Free Consultation</Button>
        </div>
        <ImagePlaceholder label="Video — yoga class" ratio="16 / 8" radius="var(--radius-xl)" tone="sage">
          <div style={{ position: 'absolute', left: 28, bottom: 28, background: 'var(--white)', borderRadius: 'var(--radius-md)', padding: '16px 20px', display: 'grid', gap: 2 }}>
            <span style={{ fontWeight: 500, color: 'var(--fg-1)' }}>Yoga Classes</span><span style={{ fontSize: 14, color: 'var(--fg-3)' }}>The combination of my passion.</span>
          </div>
        </ImagePlaceholder>
      </div>
    </Section>

    <Section>
      <SectionHeading title="My Approach to Healing" subtitle="I believe that true wellness starts from within. My work blends modern mindfulness practices with ancient breathwork techniques to support your mental, emotional, and physical wellbeing — gently and naturally." />
    </Section>

    <div style={{ position: 'relative', height: 620, marginTop: -40, overflow: 'hidden' }}>
      <svg viewBox="0 0 1690 620" preserveAspectRatio="none" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <path d="M300 0 C 380 160, 560 190, 845 210 C 1150 250, 1300 250, 1420 360 C 1560 480, 1640 590, 1560 590 C 1530 590, 1520 575, 1525 563"
          fill="none" stroke="var(--line-decor)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      </svg>
      <div style={{ position: 'absolute', left: '50%', top: 20, transform: 'translateX(-50%)' }}>
        <ScrollSpinImage size={292} label="Portrait — eyes closed, sunlight" />
      </div>
    </div>

    <div style={{ maxWidth: 1056, margin: '0 auto', padding: '0 var(--gutter)' }}>
      <div style={{ background: 'var(--bg-inverse)', borderRadius: 'var(--radius-xl)', padding: 'clamp(48px, 7vw, 80px) clamp(28px, 8vw, 130px)',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 64 }}>
        <div style={{ display: 'grid', gap: 22, alignContent: 'start', justifyItems: 'start', position: 'sticky', top: 110, alignSelf: 'start' }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 30, lineHeight: 1.15, color: 'var(--fg-inverse)' }}>How I Got Here</h2>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: 'var(--fg-inverse)', opacity: 0.86, maxWidth: 360 }}>My own healing journey began after years of burnout and anxiety. I turned to breathwork as a last resort and it changed everything. Now I share the same tools that helped me find clarity, calm, and purpose.</p>
          <Button variant="glass" size="sm" onClick={() => go('Contact')}>Book Free Consultation</Button>
        </div>
        <Timeline items={S.timeline.map(([title, text]) => ({ title, text }))} />
      </div>
    </div>

    <Section>
      <div style={{ display: 'grid', gap: 48 }}>
        <SectionHeading title="Expertise & Offerings" subtitle="Guided programs designed to move you from stress to purpose through authentic connection and intentional living." />
        <div style={{ borderTop: '1px solid var(--border-2)' }}>
          {S.services.map((s) => <OfferingRow key={s.title} title={s.title} subtitle={s.sub} onClick={() => go('Services')} />)}
        </div>
      </div>
    </Section>
  </div>);
};
