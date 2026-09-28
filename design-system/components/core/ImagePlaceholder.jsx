import React from 'react';

export function ImagePlaceholder({ label, ratio = '4 / 5', radius = 'var(--radius-lg)', tone = 'sand', height, style, children }) {
  const tones = {
    sand: { background: 'var(--sand-200)', color: 'var(--ink-500)' },
    cream: { background: 'var(--cream-100)', color: 'var(--ink-500)' },
    sage: { background: 'var(--sage-300)', color: 'var(--forest-800)' },
    forest: { background: 'var(--forest-800)', color: 'rgba(248,245,234,0.55)' },
    ink: { background: 'var(--forest-800)', color: 'rgba(248,245,234,0.55)' },
  };
  return (
    <div role="img" aria-label={label || 'Image placeholder'} style={{ position: 'relative', width: '100%', aspectRatio: height ? undefined : ratio, height,
      borderRadius: radius, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', ...tones[tone], ...style }}>
      {label && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', fontWeight: 500, opacity: 0.9, textAlign: 'center', padding: 12 }}>{label}</span>}
      {children}
    </div>
  );
}
