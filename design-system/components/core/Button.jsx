import React from 'react';
import { Icon } from './Icon.jsx';

const JAMIE_BUTTON_SIZES = {
  sm: { h: 44, pl: 18, fs: 14, c: 36 },
  md: { h: 52, pl: 24, fs: 15, c: 44 },
  lg: { h: 64, pl: 28, fs: 16, c: 54 },
};
const JAMIE_BUTTON_VARIANTS = {
  primary: { bg: 'var(--forest-900)', bgH: 'var(--forest-800)', fg: 'var(--fg-inverse)', bd: 'transparent', cBg: 'var(--cream-50)', cFg: 'var(--forest-900)' },
  glass: { bg: 'rgba(248,245,234,0.14)', bgH: 'rgba(248,245,234,0.22)', fg: 'var(--fg-inverse)', bd: 'rgba(248,245,234,0.30)', cBg: 'var(--forest-900)', cFg: 'var(--cream-50)' },
  light: { bg: 'var(--cream-50)', bgH: 'var(--white)', fg: 'var(--forest-900)', bd: 'transparent', cBg: 'var(--forest-900)', cFg: 'var(--cream-50)' },
  secondary: { bg: 'transparent', bgH: 'var(--forest-900)', fg: 'var(--forest-900)', fgH: 'var(--fg-inverse)', bd: 'var(--forest-900)', cBg: 'var(--forest-900)', cFg: 'var(--cream-50)' },
};

export function Button({ variant = 'primary', size = 'md', icon, arrow, href, onClick, disabled, children, style }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const h = hover && !disabled;
  const El = href ? 'a' : 'button';
  const s = JAMIE_BUTTON_SIZES[size];
  const handlers = {
    onMouseEnter: () => setHover(true), onMouseLeave: () => { setHover(false); setPress(false); },
    onMouseDown: () => setPress(true), onMouseUp: () => setPress(false),
  };
  const base = { fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: s.fs, lineHeight: 1.2, whiteSpace: 'nowrap', textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1 };

  if (variant === 'link') {
    return (
      <El href={href} onClick={disabled ? undefined : onClick} {...handlers}
        style={{ ...base, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', padding: 0, color: 'var(--forest-900)',
          textDecoration: 'underline', textUnderlineOffset: h ? 7 : 5, textDecorationThickness: 1, transition: 'text-underline-offset var(--dur-2) var(--ease-out)', ...style }}>
        {children}{icon && <Icon name={icon} size={16} />}
      </El>
    );
  }
  const v = JAMIE_BUTTON_VARIANTS[variant];
  const circle = arrow ?? variant !== 'secondary';
  const inset = (s.h - s.c) / 2;
  return (
    <El href={href} onClick={disabled ? undefined : onClick} disabled={El === 'button' ? disabled : undefined} {...handlers}
      style={{ ...base, display: 'inline-flex', alignItems: 'center', gap: 16, height: s.h, boxSizing: 'border-box',
        padding: circle ? ('0 ' + inset + 'px 0 ' + s.pl + 'px') : ('0 ' + s.pl + 'px'),
        borderRadius: 'var(--radius-pill)', border: '1px solid ' + v.bd, background: h ? v.bgH : v.bg, color: h && v.fgH ? v.fgH : v.fg,
        transform: press && !disabled ? 'scale(0.98)' : 'none',
        transition: 'background var(--dur-2) var(--ease-out), color var(--dur-2) var(--ease-out), transform var(--dur-1) var(--ease-out)', ...style }}>
      <span>{children}</span>
      {circle ? (
        <span style={{ width: s.c, height: s.c, borderRadius: 'var(--radius-pill)', background: v.cBg, color: v.cFg, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Icon name={icon || 'arrow-right'} size={Math.round(s.c * 0.4)} style={{ transform: h ? 'translateX(3px)' : 'none', transition: 'transform var(--dur-2) var(--ease-out)' }} />
        </span>
      ) : (icon && <Icon name={icon} size={16} />)}
    </El>
  );
}
