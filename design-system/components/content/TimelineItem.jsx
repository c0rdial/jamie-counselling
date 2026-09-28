import React from 'react';

export function TimelineItem({ title, text, active, inverse, minHeight = 198 }) {
  return (
    <div style={{ position: 'relative', paddingLeft: 40, minHeight }}>
      <span style={{ position: 'absolute', left: 0, top: 9, width: 11, height: 11, borderRadius: 'var(--radius-pill)',
        background: active ? 'var(--accent-bright)' : (inverse ? 'var(--forest-700)' : 'var(--sand-300)'),
        boxShadow: active ? '0 0 0 4px rgba(212,232,106,0.18)' : 'none', transition: 'background var(--dur-2) var(--ease-out), box-shadow var(--dur-2) var(--ease-out)' }}></span>
      <div style={{ display: 'grid', gap: 8, maxWidth: 300 }}>
        <h5 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 400, lineHeight: 1.3, color: inverse ? 'var(--fg-inverse)' : 'var(--fg-1)' }}>{title}</h5>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: inverse ? 'var(--fg-inverse)' : 'var(--fg-3)', opacity: inverse ? 0.86 : 1 }}>{text}</p>
      </div>
    </div>
  );
}
