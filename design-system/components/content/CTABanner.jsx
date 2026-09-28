import React from 'react';
import { Button } from '../core/Button.jsx';
import { ImagePlaceholder } from '../core/ImagePlaceholder.jsx';

export function CTABanner({ title = 'Start Your Healing Journey Today', text = 'Let\u2019s take the first step together toward clarity, calm, and personal growth.', cta = 'Book A Meeting With Me', onCta, imageLabel = 'Full-bleed landscape' }) {
  return (
    <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', minHeight: 520, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <ImagePlaceholder tone="forest" radius={0} height="100%" style={{ position: 'absolute', inset: 0, alignItems: 'flex-end', justifyContent: 'flex-end' }} label={imageLabel} />
      <div style={{ position: 'relative', display: 'grid', gap: 22, justifyItems: 'center', textAlign: 'center', padding: '80px 32px', maxWidth: 720 }}>
        <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-h1)', lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--tracking-display)', color: 'var(--fg-inverse)', textWrap: 'balance' }}>{title}</h2>
        <p style={{ margin: 0, fontSize: 'var(--text-body-lg)', lineHeight: 1.6, color: 'var(--fg-inverse)', opacity: 0.88, maxWidth: 480 }}>{text}</p>
        <Button variant="light" size="lg" onClick={onCta} style={{ marginTop: 8 }}>{cta}</Button>
      </div>
    </div>
  );
}
