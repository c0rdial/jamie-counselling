import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function OfferingRow({ title, subtitle, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href="#" onClick={(e) => { e.preventDefault(); onClick && onClick(); }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, padding: '28px 0', borderBottom: '1px solid var(--border-2)', textDecoration: 'none', color: 'var(--fg-1)' }}>
      <span style={{ display: 'flex', alignItems: 'baseline', gap: 24, flexWrap: 'wrap', transform: hover ? 'translateX(8px)' : 'none', transition: 'transform var(--dur-2) var(--ease-out)' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 36, lineHeight: 1.1, letterSpacing: 'var(--tracking-display)', fontStyle: hover ? 'italic' : 'normal' }}>{title}</span>
        <span style={{ fontSize: 14, color: 'var(--fg-3)' }}>{subtitle}</span>
      </span>
      <span style={{ width: 44, height: 44, borderRadius: 'var(--radius-pill)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        border: '1px solid var(--border-2)', background: hover ? 'var(--forest-900)' : 'transparent', color: hover ? 'var(--cream-50)' : 'var(--fg-1)', transition: 'background var(--dur-2) var(--ease-out)' }}>
        <Icon name="arrow-up-right" size={18} />
      </span>
    </a>
  );
}
