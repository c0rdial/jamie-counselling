import React from 'react';

export function Stat({ value, unit, label, minHeight = 460 }) {
  return (
    <div style={{ background: 'var(--bg-inverse)', color: 'var(--fg-inverse)', borderRadius: 'var(--radius-md)', padding: 40, minHeight,
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 40 }}>
      <div style={{ fontSize: 20, lineHeight: 1.3 }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, lineHeight: 0.9 }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: 'clamp(88px, 9vw, 132px)', letterSpacing: '-0.04em' }}>{value}</span>
        {unit && <span style={{ fontFamily: 'var(--font-display)', fontSize: 46, color: 'var(--accent-bright)' }}>{unit}</span>}
      </div>
    </div>
  );
}
