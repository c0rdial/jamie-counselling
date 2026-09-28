import React from 'react';

export function Input({ label, placeholder, type = 'text', multiline, rows = 5, value, onChange, name }) {
  const [focus, setFocus] = React.useState(false);
  const El = multiline ? 'textarea' : 'input';
  return (
    <label style={{ display: 'grid', gap: 8 }}>
      {label && <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg-1)' }}>{label}</span>}
      <El name={name} type={multiline ? undefined : type} rows={multiline ? rows : undefined} placeholder={placeholder} value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ width: '100%', padding: '15px 18px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-page)', outline: 'none',
          border: '1px solid ' + (focus ? 'var(--forest-900)' : 'var(--border-2)'), boxShadow: focus ? '0 0 0 4px rgba(27,49,41,0.10)' : 'none',
          fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--fg-1)', resize: 'vertical',
          transition: 'border-color var(--dur-2) var(--ease-out), box-shadow var(--dur-2) var(--ease-out)' }} />
    </label>
  );
}
