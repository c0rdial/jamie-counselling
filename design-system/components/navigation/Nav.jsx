import React from 'react';

const JAMIE_NAV_DEFAULT = ['Home', 'About', 'Services', 'Blog', 'Contact'];

export function Nav({ links = JAMIE_NAV_DEFAULT, active, onNavigate, brand = 'Jamie Sulek' }) {
  const [hov, setHov] = React.useState(null);
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 20, background: 'rgba(248,245,234,0.82)', backdropFilter: 'blur(var(--blur-nav))', WebkitBackdropFilter: 'blur(var(--blur-nav))' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '20px var(--gutter)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(links[0]); }}
          style={{ fontFamily: 'var(--font-sans)', fontSize: 22, fontWeight: 500, lineHeight: 1, color: 'var(--fg-1)', textDecoration: 'none', letterSpacing: '-0.01em' }}>{brand}</a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 'clamp(20px, 4vw, 64px)', flexWrap: 'wrap' }}>
          {links.map((l) => {
            const on = l === active;
            return (
              <a key={l} href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(l); }}
                onMouseEnter={() => setHov(l)} onMouseLeave={() => setHov(null)}
                style={{ fontFamily: 'var(--font-sans)', fontSize: 17, fontWeight: 400, textDecoration: 'none',
                  color: on || hov === l ? 'var(--fg-1)' : 'var(--fg-3)', transition: 'color var(--dur-2) var(--ease-out)' }}>{l}</a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
