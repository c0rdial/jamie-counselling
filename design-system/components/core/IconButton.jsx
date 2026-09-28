import React from 'react';
import { Icon } from './Icon.jsx';

export function IconButton({ icon = 'arrow-right', label, onClick, variant = 'outline', size = 52, disabled }) {
  const [hover, setHover] = React.useState(false);
  const h = hover && !disabled;
  const v = variant === 'filled'
    ? { background: h ? 'var(--forest-800)' : 'var(--forest-900)', color: 'var(--cream-50)', border: '1px solid transparent' }
    : { background: h ? 'var(--forest-900)' : 'transparent', color: h ? 'var(--cream-50)' : 'var(--forest-900)', border: '1px solid var(--border-2)' };
  return (
    <button aria-label={label} onClick={disabled ? undefined : onClick} disabled={disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ width: size, height: size, borderRadius: 'var(--radius-pill)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1, padding: 0,
        transition: 'background var(--dur-2) var(--ease-out), color var(--dur-2) var(--ease-out)', ...v }}>
      <Icon name={icon} size={Math.round(size * 0.38)} />
    </button>
  );
}
