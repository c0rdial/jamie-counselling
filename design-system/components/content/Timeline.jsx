import React from 'react';
import { TimelineItem } from './TimelineItem.jsx';

export function Timeline({ items = [], inverse = true, anchor = 0.6, itemHeight = 198 }) {
  const ref = React.useRef(null);
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    const update = () => {
      const el = ref.current; if (!el) return;
      const r = el.getBoundingClientRect();
      const prog = (window.innerHeight * anchor - r.top) / Math.max(1, r.height - itemHeight * 0.5);
      setP(Math.max(0, Math.min(1, prog)));
    };
    update();
    window.addEventListener('scroll', update, true);
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update, true); window.removeEventListener('resize', update); };
  }, [anchor, itemHeight]);
  const n = items.length;
  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', left: 5, top: 14, bottom: 0, width: 1, background: inverse ? 'rgba(248,245,234,0.12)' : 'var(--border-2)' }}></div>
      <div style={{ position: 'absolute', left: 5, top: 14, width: 1, height: 'calc((100% - 14px) * ' + p.toFixed(4) + ')', background: 'var(--accent-bright)' }}></div>
      {items.map((it, i) => (
        <TimelineItem key={i} title={it.title} text={it.text} inverse={inverse} minHeight={itemHeight}
          active={n <= 1 ? p > 0 : p >= (i / n) - 0.001} />
      ))}
    </div>
  );
}
