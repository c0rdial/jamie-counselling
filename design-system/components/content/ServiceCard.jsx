import React from 'react';
import { Button } from '../core/Button.jsx';
import { Tag } from '../core/Tag.jsx';
import { Icon } from '../core/Icon.jsx';
import { ImagePlaceholder } from '../core/ImagePlaceholder.jsx';

function ServiceList({ heading, items }) {
  return (
    <div style={{ display: 'grid', gap: 14 }}>
      <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--accent-strong)' }}>{heading}</div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 12 }}>
        {items.map((it, i) => (
          <li key={i} style={{ display: 'flex', gap: 12, fontSize: 15, lineHeight: 1.55, color: 'var(--fg-2)' }}>
            <Icon name="check" size={16} color="var(--accent)" style={{ marginTop: 4 }} />
            <span><strong style={{ fontWeight: 600, color: 'var(--fg-1)' }}>{it.label}:</strong> {it.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServiceCard({ title, description, duration, price, includes = [], audience = [], cta = 'Explore Session', onExplore, imageLabel, compact }) {
  return (
    <article style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: 48, background: 'var(--surface-card)',
      border: '1px solid var(--border-1)', borderRadius: 'var(--radius-xl)', padding: 20 }}>
      <ImagePlaceholder label={imageLabel || title} ratio="4 / 5" style={{ alignSelf: 'start', position: 'sticky', top: 100 }} />
      <div style={{ display: 'grid', gap: 28, alignContent: 'start', padding: '20px 20px 20px 0' }}>
        <div style={{ display: 'grid', gap: 14 }}>
          <div style={{ display: 'flex', gap: 8 }}><Tag>{duration}</Tag></div>
          <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 44, lineHeight: 1.05, letterSpacing: 'var(--tracking-display)', color: 'var(--fg-1)' }}>{title}</h3>
          <p style={{ margin: 0, fontSize: 'var(--text-body-lg)', lineHeight: 1.6, color: 'var(--fg-3)' }}>{description}</p>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, lineHeight: 1, color: 'var(--fg-1)' }}>{price}</div>
        </div>
        {!compact && includes.length > 0 && <ServiceList heading="Includes" items={includes} />}
        {!compact && audience.length > 0 && <ServiceList heading="Who is it for" items={audience} />}
        <div><Button onClick={onExplore} icon="arrow-right">{cta}</Button></div>
      </div>
    </article>
  );
}
