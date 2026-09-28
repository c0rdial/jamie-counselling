window.Section = function Section({ children, bg, y = 'var(--section-y)', narrow, style }) {
  return (
    <section style={{ background: bg || 'transparent', padding: y + ' 0', ...style }}>
      <div style={{ maxWidth: narrow ? 'var(--container-narrow)' : 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>{children}</div>
    </section>
  );
};
