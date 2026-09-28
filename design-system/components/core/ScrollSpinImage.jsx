import React from 'react';
import { ImagePlaceholder } from './ImagePlaceholder.jsx';

export function ScrollSpinImage({ size = 290, label = 'Portrait', speed = 0.12, ring = true, tone = 'sage', style }) {
  const ref = React.useRef(null);
  const [rot, setRot] = React.useState(0);
  React.useEffect(() => {
    const update = () => {
      const el = ref.current; if (!el) return;
      const r = el.getBoundingClientRect();
      setRot((window.innerHeight - r.top) * speed);
    };
    update();
    window.addEventListener('scroll', update, true);
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update, true); window.removeEventListener('resize', update); };
  }, [speed]);
  return (
    <div ref={ref} style={{ width: size, height: size, borderRadius: '50%', padding: Math.round(size * 0.05), background: 'var(--bg-page)',
      border: ring ? '1px solid var(--sand-300)' : 'none', boxSizing: 'border-box', flexShrink: 0, ...style }}>
      <div style={{ width: '100%', height: '100%', transform: 'rotate(' + rot.toFixed(2) + 'deg)', willChange: 'transform' }}>
        <ImagePlaceholder ratio="1 / 1" radius="50%" label={label} tone={tone} />
      </div>
    </div>
  );
}
