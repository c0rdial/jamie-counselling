import React from 'react';

const JAMIE_FOOTER_COLS = [
  { title: 'Explore', links: ['Home', 'About', 'Blogs', 'Services', 'Contact'] },
  { title: 'Social Media', links: ['Facebook', 'Instagram', 'TikTok'] },
];

export function Footer({ brand = 'Jamie Sulek', tagline = 'Peace of mind.', columns = JAMIE_FOOTER_COLS, onNavigate, credit }) {
  return (
    <footer style={{ background: 'var(--bg-inverse)', color: 'var(--fg-inverse)', borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '80px var(--gutter) 32px', display: 'grid', gap: 64 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap' }}>
          <div style={{ display: 'grid', gap: 12, alignContent: 'start' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 44, lineHeight: 1 }}>{brand}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 26, color: 'var(--fg-inverse-2)' }}>{tagline}</div>
          </div>
          <div style={{ display: 'flex', gap: 72, flexWrap: 'wrap' }}>
            {columns.map((c) => (
              <div key={c.title} style={{ display: 'grid', gap: 12, alignContent: 'start' }}>
                <div style={{ fontSize: 12, letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--fg-inverse-2)', fontWeight: 500 }}>{c.title}</div>
                {c.links.map((l) => (
                  <a key={l} href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(l); }}
                    style={{ color: 'var(--fg-inverse)', textDecoration: 'none', fontSize: 15 }}>{l}</a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--border-inverse)', paddingTop: 24, fontSize: 13, color: 'var(--fg-inverse-2)', display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <span>{credit || ('\u00A9 ' + brand)}</span>
          <span>{tagline}</span>
        </div>
      </div>
    </footer>
  );
}
