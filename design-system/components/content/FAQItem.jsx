import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function FAQItem({ question, answer, open, onToggle }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ background: 'var(--surface-card)', border: '1px solid ' + (hover || open ? 'var(--border-2)' : 'var(--border-1)'), borderRadius: 'var(--radius-xs)', transition: 'border-color var(--dur-2) var(--ease-out)' }}>
      <button onClick={onToggle} aria-expanded={!!open}
        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, padding: '20px 20px', background: 'none', border: 'none',
          cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 400, color: 'var(--fg-1)' }}>
        <span>{question}</span>
        <Icon name={open ? 'circle-minus' : 'circle-plus'} size={22} color="var(--fg-1)" />
      </button>
      <div style={{ display: 'grid', gridTemplateRows: open ? '1fr' : '0fr', transition: 'grid-template-rows var(--dur-3) var(--ease-out)' }}>
        <div style={{ overflow: 'hidden' }}>
          <p style={{ margin: 0, padding: '0 64px 22px 20px', fontSize: 15, lineHeight: 1.65, color: 'var(--fg-3)' }}>{answer}</p>
        </div>
      </div>
    </div>
  );
}
