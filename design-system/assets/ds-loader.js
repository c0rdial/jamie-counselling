(function () {
  var me = document.currentScript && document.currentScript.src;
  var ROOT = me ? me.replace(/assets\/ds-loader\.js.*$/, '') : '../../';
  var FILES = [
    'components/core/Icon.jsx', 'components/core/Button.jsx', 'components/core/IconButton.jsx',
    'components/core/Tag.jsx', 'components/core/Em.jsx', 'components/core/ImagePlaceholder.jsx', 'components/core/ScrollSpinImage.jsx',
    'components/navigation/Nav.jsx', 'components/navigation/Footer.jsx',
    'components/content/SectionHeading.jsx', 'components/content/FeatureCard.jsx', 'components/content/Stat.jsx',
    'components/content/TestimonialCard.jsx', 'components/content/FAQItem.jsx', 'components/content/CTABanner.jsx',
    'components/content/ServiceCard.jsx', 'components/content/OfferingRow.jsx', 'components/content/TimelineItem.jsx', 'components/content/Timeline.jsx',
    'components/forms/Input.jsx'
  ];
  var p;
  window.getJamieDS = function () {
    if (p) return p;
    p = (async function () {
      for (var k of Object.keys(window)) {
        try { var v = window[k]; if (v && typeof v === 'object' && v.ServiceCard && v.Button) { window.JamieDS = v; return v; } } catch (e) {}
      }
      var srcs = await Promise.all(FILES.map(function (f) { return fetch(ROOT + f).then(function (r) { return r.text(); }); }));
      var names = [];
      var body = srcs.map(function (s) {
        return s.replace(/^\s*import[^;]*;\s*$/gm, '').replace(/export\s+(function|const)\s+([A-Za-z0-9_]+)/g, function (m, kw, n) { names.push(n); return kw + ' ' + n; });
      }).join('\n');
      var wrapped = 'var __DS = (function(){\n' + body + '\nreturn {' + names.join(',') + '};\n})();';
      var code = Babel.transform(wrapped, { presets: ['react'] }).code;
      var ds = new Function('React', code + '\nreturn __DS;')(React);
      window.JamieDS = ds;
      return ds;
    })();
    return p;
  };
})();
