import React from 'react';

export function Em({ children, color }) {
  return <em style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, color: color || 'inherit' }}>{children}</em>;
}
