import React from 'react';

export function SectionHeading({ title, subtitle, eyebrow, align = 'center', italic = true, size = 'h2', inverse, maxWidth = 720 }) {
  const sizes = { display: ['var(--text-display)', 'var(--lh-display)'], h1: ['var(--text-h1)', 'var(--lh-h1)'], h2: ['var(--text-h2)', 'var(--lh-h2)'], h3: ['var(--text-h3)', 'var(--lh-h3)'] };
  const [fs, lh] = sizes[size];
  return (
    <div style={{ display: 'grid', gap: 18, textAlign: align, justifyItems: align === 'center' ? 'center' : 'start', maxWidth, margin: align === 'center' ? '0 auto' : 0 }}>
      {eyebrow && <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500, letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: inverse ? 'var(--fg-inverse-2)' : 'var(--accent-strong)' }}>{eyebrow}</div>}
      <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 400, fontStyle: italic ? 'italic' : 'normal', fontSize: fs, lineHeight: lh,
        letterSpacing: 'var(--tracking-display)', color: inverse ? 'var(--fg-inverse)' : 'var(--fg-1)', textWrap: 'balance' }}>{title}</h2>
      {subtitle && <p style={{ margin: 0, fontSize: 'var(--text-body-lg)', lineHeight: 'var(--lh-body-lg)', color: inverse ? 'var(--fg-inverse-2)' : 'var(--fg-3)', maxWidth: 560, textWrap: 'pretty' }}>{subtitle}</p>}
    </div>
  );
}
