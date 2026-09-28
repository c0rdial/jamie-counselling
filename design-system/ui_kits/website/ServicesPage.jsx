window.ServicesPage = function ServicesPage({ go }) {
  const { Button, IconButton, Icon, Tag, Em, ImagePlaceholder, SectionHeading, FeatureCard, Stat, TestimonialCard, FAQItem, CTABanner, ServiceCard, OfferingRow, TimelineItem, Input } = window.JamieDS;
  const S = window.JAMIE_DATA; const Section = window.Section;
  return (<div>
    <Section y="48px">
      <SectionHeading size="h1" title="Pathways to clarity and balance." subtitle="My sessions are designed to help you peel back the layers of burnout and reconnect with your core purpose through a blend of somatic tools" />
    </Section>
    <Section y="40px">
      <div style={{ display: 'grid', gap: 24 }}>
        {S.services.map((s) => (
          <ServiceCard key={s.title} title={s.title} description={s.description} duration={s.duration} price={s.price}
            includes={S.includes} audience={S.audience} onExplore={() => go('Contact')} imageLabel={s.title} />
        ))}
      </div>
    </Section>
  </div>);
};
