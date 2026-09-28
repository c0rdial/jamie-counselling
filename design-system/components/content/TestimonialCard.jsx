import React from 'react';
import { ImagePlaceholder } from '../core/ImagePlaceholder.jsx';

export function TestimonialCard({ quote, name, role, style }) {
  return (
    <figure style={{ margin: 0, background: 'var(--surface-card)', border: '1px solid var(--border-1)', borderRadius: 'var(--radius-lg)', padding: 36,
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 32, minHeight: 320, ...style }}>
      <blockquote style={{ margin: 0, display: 'grid', gap: 14 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 64, lineHeight: 0.6, color: 'var(--accent)', height: 28 }}>{'\u201C'}</span>
        <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 25, lineHeight: 1.3, color: 'var(--fg-1)', textWrap: 'pretty' }}>{quote}</p>
      </blockquote>
      <figcaption style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ width: 48, height: 48, flexShrink: 0 }}><ImagePlaceholder ratio="1 / 1" radius="var(--radius-pill)" /></div>
        <div style={{ display: 'grid', gap: 2 }}>
          <span style={{ fontSize: 15, fontWeight: 500, color: 'var(--fg-1)' }}>{name}</span>
          <span style={{ fontSize: 14, color: 'var(--fg-3)' }}>{role}</span>
        </div>
      </figcaption>
    </figure>
  );
}
