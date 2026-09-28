import React from 'react';

export function Tag({ children, tone = 'outline', style }) {
  const tones = {
    outline: { background: 'transparent', color: 'var(--fg-2)', border: '1px solid var(--border-2)' },
    soft: { background: 'var(--cream-100)', color: 'var(--fg-2)', border: '1px solid transparent' },
    sage: { background: 'rgba(27,49,41,0.08)', color: 'var(--forest-900)', border: '1px solid transparent' },
    inverse: { background: 'rgba(251,249,245,0.14)', color: 'var(--cream-50)', border: '1px solid var(--border-inverse)' },
  };
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 14px', borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500, lineHeight: 1.2, whiteSpace: 'nowrap', ...tones[tone], ...style }}>
      {children}
    </span>
  );
}
