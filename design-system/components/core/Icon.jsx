import React from 'react';

// Lucide icon paths (lucide.dev, ISC). Stroke 1.5 to match Jamie Sulek's light line weight.
const JAMIE_ICON_PATHS = {
  'arrow-left': [['path', { d: 'm12 19-7-7 7-7' }], ['path', { d: 'M19 12H5' }]],
  'arrow-right': [['path', { d: 'M5 12h14' }], ['path', { d: 'm12 5 7 7-7 7' }]],
  'arrow-up-right': [['path', { d: 'M7 7h10v10' }], ['path', { d: 'M7 17 17 7' }]],
  'plus': [['path', { d: 'M5 12h14' }], ['path', { d: 'M12 5v14' }]],
  'minus': [['path', { d: 'M5 12h14' }]],
  'check': [['path', { d: 'M20 6 9 17l-5-5' }]],
  'mail': [['rect', { width: 20, height: 16, x: 2, y: 4, rx: 2 }], ['path', { d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' }]],
  'map-pin': [['path', { d: 'M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0' }], ['circle', { cx: 12, cy: 10, r: 3 }]],
  'clock': [['circle', { cx: 12, cy: 12, r: 10 }], ['polyline', { points: '12 6 12 12 16 14' }]],
  'menu': [['path', { d: 'M4 8h16' }], ['path', { d: 'M4 16h16' }]],
  'circle-plus': [['circle', { cx: 12, cy: 12, r: 10 }], ['path', { d: 'M8 12h8' }], ['path', { d: 'M12 8v8' }]],
  'circle-minus': [['circle', { cx: 12, cy: 12, r: 10 }], ['path', { d: 'M8 12h8' }]],
  'flower': [['path', { d: 'M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1' }], ['circle', { cx: 12, cy: 8, r: 2 }], ['path', { d: 'M12 10v12' }], ['path', { d: 'M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z' }], ['path', { d: 'M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z' }]],
  'person-standing': [['circle', { cx: 12, cy: 5, r: 1 }], ['path', { d: 'm9 20 3-6 3 6' }], ['path', { d: 'm6 8 6 2 6-2' }], ['path', { d: 'M12 10v4' }]],
  'heart': [['path', { d: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' }]],
  'sprout': [['path', { d: 'M7 20h10' }], ['path', { d: 'M10 20c5.5-2.5.8-6.4 3-10' }], ['path', { d: 'M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z' }], ['path', { d: 'M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z' }]],
  'hand-heart': [['path', { d: 'M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16' }], ['path', { d: 'm7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9' }], ['path', { d: 'm2 15 6 6' }], ['path', { d: 'M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z' }]],
  'infinity': [['path', { d: 'M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z' }]],
};

export function Icon({ name, size = 20, strokeWidth = 1.5, color = 'currentColor', style }) {
  const parts = JAMIE_ICON_PATHS[name] || [];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0, display: 'block', ...style }}>
      {parts.map(([tag, attrs], i) => React.createElement(tag, { key: i, ...attrs }))}
    </svg>
  );
}
