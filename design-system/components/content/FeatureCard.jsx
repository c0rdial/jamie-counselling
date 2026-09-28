import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function FeatureCard({ icon, title, text, style }) {
  return (
    <div style={{ display: 'grid', gap: 14, justifyItems: 'center', textAlign: 'center', padding: '8px 12px', ...style }}>
      {icon && <Icon name={icon} size={60} strokeWidth={1.25} color="var(--fg-1)" style={{ marginBottom: 22 }} />}
      <h5 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 34, lineHeight: 1.15, fontWeight: 400, color: 'var(--fg-1)' }}>{title}</h5>
      <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: 'var(--fg-3)', maxWidth: 380, textWrap: 'pretty' }}>{text}</p>
    </div>
  );
}
