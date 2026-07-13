/* @ds-bundle: {"format":3,"namespace":"NomologyDesignSystem_ae9763","components":[{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"FlavorChip","sourcePath":"components/display/FlavorChip.jsx"},{"name":"FLAVOR_POINT_COLORS","sourcePath":"components/display/FlavorRadarChart.jsx"},{"name":"FlavorRadarChart","sourcePath":"components/display/FlavorRadarChart.jsx"},{"name":"FlavorWheel","sourcePath":"components/display/FlavorWheel.jsx"},{"name":"MatchBadge","sourcePath":"components/display/MatchBadge.jsx"},{"name":"SectionHeader","sourcePath":"components/display/SectionHeader.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"BottomSheet","sourcePath":"components/surfaces/BottomSheet.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"RecipeCard","sourcePath":"components/surfaces/RecipeCard.jsx"}],"sourceHashes":{"components/display/Avatar.jsx":"29d3010051db","components/display/Badge.jsx":"b88e92e3b365","components/display/FlavorChip.jsx":"e788c5312c1c","components/display/FlavorRadarChart.jsx":"3db272f4f808","components/display/FlavorWheel.jsx":"7020e2ebb2aa","components/display/MatchBadge.jsx":"d6df0ace0457","components/display/SectionHeader.jsx":"ff2686f34192","components/display/Tag.jsx":"8876faedbc41","components/feedback/EmptyState.jsx":"bc3a9ae7c953","components/feedback/Toast.jsx":"60ec97480302","components/forms/Button.jsx":"ed55d1699eaf","components/forms/IconButton.jsx":"315cf62fe1c4","components/forms/Input.jsx":"80cf7a0518ae","components/forms/SegmentedControl.jsx":"374730fb2204","components/surfaces/BottomSheet.jsx":"a34498f62f86","components/surfaces/Card.jsx":"473cabbf6696","components/surfaces/RecipeCard.jsx":"4a5625b5a4bc","ui_kits/nomology_app/data.jsx":"878c159cb5f1","ui_kits/nomology_app/ios-frame.jsx":"be3343be4b51","ui_kits/nomology_app/screens-a.jsx":"3df12e3f0171","ui_kits/nomology_app/screens-b.jsx":"04ce9862cd38","ui_kits/nomology_app/shell.jsx":"51e8f3f4a59b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NomologyDesignSystem_ae9763 = window.NomologyDesignSystem_ae9763 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Avatar.jsx
try { (() => {
const AVATAR_TINTS = [['var(--nom-red)', 'rgba(189,69,39,0.16)'], ['var(--nom-teal)', 'rgba(0,126,137,0.16)'], ['var(--nom-blue)', 'rgba(39,109,189,0.16)'], ['var(--flavor-amber)', 'rgba(217,119,6,0.16)']];

/**
 * Circular avatar — image, or initials on a tinted disc.
 * Used for circle members / assigned cook.
 */
function Avatar({
  name = '',
  src,
  size = 40,
  index = 0,
  style
}) {
  const [fg, bg] = AVATAR_TINTS[index % AVATAR_TINTS.length];
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: '50%',
      overflow: 'hidden',
      background: src ? 'var(--nom-card)' : bg,
      color: fg,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: size * 0.4,
      flexShrink: 0,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
/**
 * Small status / label badge. Tonal (tinted) by default, or solid.
 * Used for Premium pills, counts, match labels.
 */
function Badge({
  children,
  label,
  color = 'brand',
  solid = false,
  dark = false,
  icon,
  style
}) {
  const colors = {
    brand: 'var(--nom-red)',
    blue: 'var(--nom-blue)',
    teal: 'var(--nom-teal)',
    success: 'var(--nom-success)',
    warning: 'var(--nom-warning)',
    error: 'var(--nom-error)',
    neutral: dark ? 'rgba(255,255,255,0.7)' : 'var(--nom-brown)'
  };
  const c = colors[color] || colors.brand;
  const tint = {
    brand: 'rgba(189,69,39,0.15)',
    blue: 'rgba(39,109,189,0.15)',
    teal: 'rgba(0,126,137,0.15)',
    success: 'rgba(46,125,50,0.15)',
    warning: 'rgba(178,106,0,0.15)',
    error: 'rgba(179,38,30,0.15)',
    neutral: dark ? 'rgba(255,255,255,0.10)' : 'rgba(51,40,28,0.08)'
  }[color] || 'rgba(189,69,39,0.15)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: 0.2,
      padding: '4px 8px',
      borderRadius: 'var(--radius-xs)',
      color: solid ? '#fff' : c,
      background: solid ? c : tint,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 13
    }
  }, icon), label || children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/FlavorChip.jsx
try { (() => {
// Canonical flavour palette (flavor_colors.dart) — chips cycle through it.
const FLAVOR_PALETTE = ['var(--flavor-red)',
// 0
'var(--flavor-orange)',
// 1
'var(--flavor-amber)',
// 2
'var(--flavor-lime)',
// 3
'var(--flavor-cyan)' // 4
];
const NAMED = {
  red: 'var(--flavor-red)',
  orange: 'var(--flavor-orange)',
  amber: 'var(--flavor-amber)',
  lime: 'var(--flavor-lime)',
  cyan: 'var(--flavor-cyan)'
};

/**
 * Flavour chip — a solid colour pill with cream text. Mirrors FlavorChip:
 * fully-rounded, 10/4 padding, NunitoSans 10 w500, letter-spacing 0.16,
 * text in nomologyLight. Colour cycles through the canonical palette.
 */
function FlavorChip({
  label,
  color,
  index = 0,
  style
}) {
  const bg = color ? NAMED[color] || color : FLAVOR_PALETTE[index % FLAVOR_PALETTE.length];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      lineHeight: 1,
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: 0.16,
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      color: 'var(--nom-light)',
      background: bg,
      ...style
    }
  }, label);
}
Object.assign(__ds_scope, { FlavorChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/FlavorChip.jsx", error: String((e && e.message) || e) }); }

// components/display/FlavorRadarChart.jsx
try { (() => {
/** Canonical default point colours (flavor_colors.dart). */
const FLAVOR_POINT_COLORS = ['#DC2626', '#EA580C', '#D97706', '#65A30D', '#0891B2'];
const CORNER_FRACTION = 0.15;

// Rounded-corner polygon path (mirrors _createRoundedPolygonPath).
function roundedPolygon(cx, cy, radius, sides, cornerRadius) {
  const verts = [];
  for (let i = 0; i < sides; i++) {
    const a = i * 2 * Math.PI / sides - Math.PI / 2;
    verts.push([cx + radius * Math.cos(a), cy + radius * Math.sin(a)]);
  }
  let d = '';
  for (let i = 0; i < sides; i++) {
    const prev = verts[(i - 1 + sides) % sides];
    const curr = verts[i];
    const next = verts[(i + 1) % sides];
    const tp = [prev[0] - curr[0], prev[1] - curr[1]];
    const tn = [next[0] - curr[0], next[1] - curr[1]];
    const lp = Math.hypot(tp[0], tp[1]) || 1;
    const ln = Math.hypot(tn[0], tn[1]) || 1;
    const start = [curr[0] + tp[0] / lp * cornerRadius, curr[1] + tp[1] / lp * cornerRadius];
    const end = [curr[0] + tn[0] / ln * cornerRadius, curr[1] + tn[1] / ln * cornerRadius];
    d += i === 0 ? `M${start[0].toFixed(2)},${start[1].toFixed(2)}` : `L${start[0].toFixed(2)},${start[1].toFixed(2)}`;
    d += `Q${curr[0].toFixed(2)},${curr[1].toFixed(2)} ${end[0].toFixed(2)},${end[1].toFixed(2)}`;
  }
  return d + 'Z';
}

/**
 * Flavour radar/spider chart. Each axis is a flavour dimension (0–1).
 * Rounded pentagon grid, colour-tinted axes, white data fill, gradient
 * connecting strokes, coloured vertex dots. Mirrors FlavorRadarChart.
 */
function FlavorRadarChart({
  flavorValues = {},
  size = 120,
  gridColor = '#B8B3B3',
  gridRings = 4,
  pointColors = FLAVOR_POINT_COLORS,
  style
}) {
  const values = Object.values(flavorValues);
  const sides = values.length;
  if (!sides) return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      ...style
    }
  });
  const c = size / 2;
  const radius = size / 2 - 4;
  const col = i => pointColors[i % pointColors.length];
  const pt = (i, rad) => {
    const a = i * 2 * Math.PI / sides - Math.PI / 2;
    return [c + rad * Math.cos(a), c + rad * Math.sin(a)];
  };
  const axisRadius = radius * (1 - CORNER_FRACTION * 0.3);
  const dataPts = values.map((v, i) => pt(i, radius * Math.max(0, Math.min(1, v))));
  const uid = React.useId().replace(/:/g, '');
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${size} ${size}`,
    width: size,
    height: size,
    style: {
      display: 'block',
      ...style
    }
  }, /*#__PURE__*/React.createElement("defs", null, dataPts.map((p, i) => {
    const n = dataPts[(i + 1) % sides];
    return /*#__PURE__*/React.createElement("linearGradient", {
      key: i,
      id: `${uid}-g${i}`,
      gradientUnits: "userSpaceOnUse",
      x1: p[0],
      y1: p[1],
      x2: n[0],
      y2: n[1]
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0",
      stopColor: col(i)
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "1",
      stopColor: col((i + 1) % sides)
    }));
  })), /*#__PURE__*/React.createElement("path", {
    d: roundedPolygon(c, c, radius, sides, radius * CORNER_FRACTION),
    fill: "rgba(255,255,255,0.2)"
  }), Array.from({
    length: gridRings
  }, (_, k) => k + 1).map(ring => {
    const rr = radius * (ring / gridRings);
    return /*#__PURE__*/React.createElement("path", {
      key: ring,
      d: roundedPolygon(c, c, rr, sides, rr * CORNER_FRACTION),
      fill: "none",
      stroke: gridColor,
      strokeWidth: "0.75"
    });
  }), values.map((_, i) => {
    const [x, y] = pt(i, axisRadius);
    return /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: c,
      y1: c,
      x2: x,
      y2: y,
      stroke: col(i),
      strokeOpacity: "0.6",
      strokeWidth: "0.75"
    });
  }), /*#__PURE__*/React.createElement("polygon", {
    points: dataPts.map(p => `${p[0].toFixed(2)},${p[1].toFixed(2)}`).join(' '),
    fill: "rgba(255,255,255,0.66)"
  }), dataPts.map((p, i) => {
    const n = dataPts[(i + 1) % sides];
    return /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: p[0],
      y1: p[1],
      x2: n[0],
      y2: n[1],
      stroke: `url(#${uid}-g${i})`,
      strokeWidth: "2",
      strokeLinecap: "round"
    });
  }), dataPts.map((p, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: p[0],
    cy: p[1],
    r: "2.5",
    fill: col(i)
  })));
}
Object.assign(__ds_scope, { FLAVOR_POINT_COLORS, FlavorRadarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/FlavorRadarChart.jsx", error: String((e && e.message) || e) }); }

// components/display/FlavorWheel.jsx
try { (() => {
/* ============================================================
   FlavorWheel — sunburst (mirrors core/widgets/flavor_wheel).
   Four proportional rings (domain → category → subcategory →
   descriptor), each descriptor getting equal angular space.
   Monochromatic intensity ramp; #E3E1E1 for zero.
   ============================================================ */

const ZERO = '#E3E1E1';
const RAMP = {
  recipe: '189,69,39',
  like: '189,69,39',
  dislike: '39,98,189',
  match: '123,45,189',
  mismatch: '217,119,6'
};

// Boosted-average aggregation (descriptor_schema.dart: aggregateIntensities).
function aggregate(arr) {
  const nz = arr.filter(v => v > 0);
  if (!nz.length) return 0;
  const avg = nz.reduce((a, b) => a + b, 0) / nz.length;
  const calc = avg * (1 + Math.log(nz.length) * 0.5);
  return Math.min(100, Math.max(1, Math.max(calc, Math.max(...nz))));
}

// A representative recipe profile (smoky / roasted / umami-led — ribs-like).
// domain → category → [subcategory descriptor-intensity arrays]
const DEFAULT_RAW = {
  Taste: {
    Umami: [[92, 80, 70], [62, 48]],
    Sweet: [[68, 52, 40], [28, 0]],
    Salty: [[66, 50]],
    Sour: [[34, 18], [0]],
    Bitter: [[24, 0], [0]]
  },
  Aroma: {
    Smoky: [[94, 86], [78, 64]],
    Roasted: [[88, 74, 60], [70, 50]],
    Spicy: [[80, 64, 48], [40, 26]],
    Nutty: [[40, 26], [0]],
    Fruity: [[20, 0], [0]]
  },
  Texture: {
    Structure: [[62, 48], [36]],
    Moisture: [[56, 42]],
    Hardness: [[38, 20]],
    Viscosity: [[30, 0]]
  },
  Mouthfeel: {
    Body: [[74, 60], [50]],
    Astringency: [[30, 16]],
    Temperature: [[46]],
    Carbonation: [[0, 0]]
  }
};
function buildData(raw) {
  const domains = Object.entries(raw).map(([dName, cats]) => {
    const categories = Object.entries(cats).map(([cName, subs]) => {
      const subcategories = subs.map((desc, si) => ({
        name: `${cName}-${si}`,
        descriptors: desc.map((v, di) => ({
          name: `${cName}-${si}-${di}`,
          intensity: v
        })),
        intensity: aggregate(desc)
      }));
      return {
        name: cName,
        intensity: aggregate(subcategories.map(s => s.intensity)),
        subcategories,
        descriptors: []
      };
    });
    // Sort categories by descriptor count desc (D3 value sort).
    categories.sort((a, b) => count(b) - count(a));
    return {
      name: dName,
      intensity: aggregate(categories.map(c => c.intensity)),
      categories
    };
  });
  return {
    domains
  };
}
function count(cat) {
  let n = cat.descriptors.length;
  for (const s of cat.subcategories) n += s.descriptors.length;
  return n;
}
function colorFor(intensity, mode, user = 0) {
  if (mode === 'user') {
    if (Math.abs(user) < 5) return ZERO;
    const c = user > 0 ? RAMP.like : RAMP.dislike;
    return `rgba(${c},${0.2 + Math.abs(user) / 100 * 0.8})`;
  }
  if (mode === 'comparison') {
    if (intensity <= 0) return ZERO;
    const c = user >= 0 ? RAMP.match : RAMP.mismatch;
    const ci = intensity * (0.5 + Math.abs(user) / 100 * 0.5);
    return `rgba(${c},${0.2 + ci / 100 * 0.8})`;
  }
  if (intensity <= 0) return ZERO;
  return `rgba(${RAMP.recipe},${0.2 + intensity / 100 * 0.8})`;
}

// Ring-segment SVG path between two radii over [a0, a0+da].
function segPath(cx, cy, ir, or, a0, da) {
  const p = (r, a) => [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  const [osx, osy] = p(or, a0),
    [oex, oey] = p(or, a0 + da);
  const [iex, iey] = p(ir, a0 + da),
    [isx, isy] = p(ir, a0);
  const large = da > Math.PI ? 1 : 0;
  return `M${osx},${osy} A${or},${or} 0 ${large} 1 ${oex},${oey} L${iex},${iey} A${ir},${ir} 0 ${large} 0 ${isx},${isy} Z`;
}

/**
 * Sunburst flavour wheel.
 */
function FlavorWheel({
  data,
  mode = 'recipe',
  userProfile,
  size = 280,
  style
}) {
  const model = React.useMemo(() => data || buildData(DEFAULT_RAW), [data]);
  const R = size / 2,
    cx = R,
    cy = R;
  const rings = {
    centerR: R * 0.14,
    dIn: R * 0.16,
    dOut: R * 0.4,
    cIn: R * 0.4,
    cOut: R * 0.64,
    sIn: R * 0.64,
    sOut: R * 0.88,
    xIn: R * 0.88,
    xOut: R * 0.98
  };
  const ui = name => userProfile && userProfile[name] != null ? userProfile[name] : 0;
  let total = 0;
  for (const d of model.domains) for (const c of d.categories) total += count(c);
  const sweep = total > 0 ? 2 * Math.PI / total : 0;
  const paths = [];
  const stroke = '#F5F1F1';
  let a = -Math.PI / 2;
  for (const d of model.domains) {
    let dCount = 0;
    for (const c of d.categories) dCount += count(c);
    if (!dCount) continue;
    const dSweep = dCount * sweep;
    paths.push({
      d: segPath(cx, cy, rings.dIn, rings.dOut, a, dSweep),
      fill: colorFor(d.intensity, mode, ui(d.name)),
      k: 'd' + d.name
    });
    let ca = a;
    for (const c of d.categories) {
      const cCount = count(c);
      if (!cCount) continue;
      const cSweep = cCount * sweep;
      paths.push({
        d: segPath(cx, cy, rings.cIn, rings.cOut, ca, cSweep),
        fill: colorFor(c.intensity, mode, ui(c.name)),
        k: 'c' + c.name
      });
      let sa = ca;
      for (const s of c.subcategories) {
        if (!s.descriptors.length) continue;
        const sSweep = s.descriptors.length * sweep;
        paths.push({
          d: segPath(cx, cy, rings.sIn, rings.sOut, sa, sSweep),
          fill: colorFor(s.intensity, mode, ui(s.name)),
          k: 's' + s.name
        });
        let xa = sa;
        for (const x of s.descriptors) {
          paths.push({
            d: segPath(cx, cy, rings.xIn, rings.xOut, xa, sweep),
            fill: colorFor(x.intensity, mode, ui(x.name)),
            k: 'x' + x.name
          });
          xa += sweep;
        }
        sa += sSweep;
      }
      for (const x of c.descriptors) {
        paths.push({
          d: segPath(cx, cy, rings.sIn, rings.sOut, sa, sweep),
          fill: colorFor(x.intensity, mode, ui(x.name)),
          k: 'x' + x.name
        });
        sa += sweep;
      }
      ca += cSweep;
    }
    a += dSweep;
  }
  const txt = rings.centerR * 0.34;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${size} ${size}`,
    width: size,
    height: size,
    style: style
  }, paths.map(p => /*#__PURE__*/React.createElement("path", {
    key: p.k,
    d: p.d,
    fill: p.fill,
    stroke: stroke,
    strokeWidth: "1",
    strokeLinejoin: "round"
  })), [rings.dOut, rings.cOut, rings.sOut].map((r, i) => /*#__PURE__*/React.createElement("circle", {
    key: 'sep' + i,
    cx: cx,
    cy: cy,
    r: r,
    fill: "none",
    stroke: "#E0E0E0",
    strokeWidth: "0.5"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: rings.centerR,
    fill: "#FAFAFA",
    stroke: "#E5E5E5",
    strokeWidth: "0.75"
  }), /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: cy,
    textAnchor: "middle",
    fontFamily: "var(--font-body)",
    fontWeight: "500",
    fontSize: txt,
    fill: "#666666",
    letterSpacing: "0.1"
  }, /*#__PURE__*/React.createElement("tspan", {
    x: cx,
    dy: -txt * 0.15
  }, "FLAVOR"), /*#__PURE__*/React.createElement("tspan", {
    x: cx,
    dy: txt * 1.05
  }, "WHEEL")));
}
Object.assign(__ds_scope, { FlavorWheel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/FlavorWheel.jsx", error: String((e && e.message) || e) }); }

// components/display/MatchBadge.jsx
try { (() => {
/**
 * Match-score badge. Shape encodes the score band (mirrors MatchBadge):
 *  perfect 90–100 → filled hexagon + 3 stars + MATCH bar
 *  great   70–89  → filled hexagon + MATCH bar
 *  good    45–69  → outline shield (filled inner) + MATCH
 *  fair    0–44   → filled octagon + MATCH
 * Personal context uses brand red; `circle` uses teal. `processing`
 * shows a rotating multicolour hexagon with a "?".
 */
function MatchBadge({
  score = 90,
  size = 60,
  circle = false,
  processing = false,
  style
}) {
  const primary = circle ? 'var(--nom-teal)' : 'var(--nom-red)';
  const c = 50,
    r = 50;
  const poly = (n, radius) => {
    const pts = [];
    for (let i = 0; i < n; i++) {
      const a = -Math.PI / 2 + i * 2 * Math.PI / n;
      pts.push(`${(c + radius * Math.cos(a)).toFixed(2)},${(c + radius * Math.sin(a)).toFixed(2)}`);
    }
    return pts.join(' ');
  };
  const shieldPath = radius => {
    const top = c - radius,
      bottom = c + radius;
    const shY = c - radius * 0.8,
      shW = radius * 0.88,
      curveY = c + radius * 0.1;
    return `M${c},${top} L${c + shW},${shY} L${c + shW},${curveY} Q${c + shW},${bottom} ${c},${bottom} Q${c - shW},${bottom} ${c - shW},${curveY} L${c - shW},${shY} Z`;
  };
  if (processing) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative',
        display: 'inline-flex',
        width: size,
        height: size,
        ...style
      }
    }, /*#__PURE__*/React.createElement("style", null, `@keyframes nomBadgeSpin{to{transform:rotate(1turn)}}`), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        inset: 0,
        clipPath: `polygon(${poly(6, r).split(' ').map(p => p.split(',').map(n => n + '%').join(' ')).join(',')})`,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        inset: '-50%',
        background: 'conic-gradient(#FEB712,#AC52FC,#F70157,#299BFE,#FB6B35,#EC4E8F,#FEB712)',
        animation: 'nomBadgeSpin 3s linear infinite'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-body)',
        fontWeight: 800,
        fontSize: size * 0.42,
        color: '#fff'
      }
    }, "?"));
  }
  const level = score >= 90 ? 'perfect' : score >= 70 ? 'great' : score >= 45 ? 'good' : 'fair';
  const isShield = level === 'good',
    isOct = level === 'fair';
  const filled = level === 'perfect' || level === 'great' || isOct;
  const hasBar = level === 'perfect' || level === 'great';
  const numTop = level === 'great' ? 0.32 : level === 'perfect' ? 0.27 : 0.28;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: size,
      height: size,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    width: size,
    height: size,
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'visible'
    }
  }, isShield ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: shieldPath(r),
    fill: "none",
    stroke: primary,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: shieldPath(r * 0.92),
    fill: primary,
    stroke: "#fff",
    strokeWidth: "1.5"
  })) : isOct ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polygon", {
    points: poly(8, r),
    fill: primary
  }), /*#__PURE__*/React.createElement("polygon", {
    points: poly(8, r * 0.88),
    fill: "none",
    stroke: "#fff",
    strokeWidth: "1.5"
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polygon", {
    points: poly(6, r),
    fill: primary
  }), /*#__PURE__*/React.createElement("polygon", {
    points: poly(6, r * 0.88),
    fill: "none",
    stroke: "#fff",
    strokeWidth: "1.5"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: size * numTop,
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 800,
      fontSize: size * 0.39,
      lineHeight: 1,
      letterSpacing: '-0.5px',
      color: '#fff'
    }
  }, score), level === 'perfect' && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: size * 0.63,
      display: 'flex',
      justifyContent: 'center',
      gap: size * 0.02
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "material-symbols-rounded fill",
    style: {
      fontSize: size * 0.16,
      color: '#fff'
    }
  }, "star"))), hasBar ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: size * 0.06,
      width: size * 0.6,
      height: size * 0.2,
      background: primary,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 800,
      fontSize: size * 0.12,
      letterSpacing: 0.3,
      color: '#fff'
    }
  }, "MATCH") : /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: size * 0.22,
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 800,
      fontSize: size * 0.12,
      letterSpacing: 0.3,
      color: '#fff'
    }
  }, "MATCH"));
}
Object.assign(__ds_scope, { MatchBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/MatchBadge.jsx", error: String((e && e.message) || e) }); }

// components/display/SectionHeader.jsx
try { (() => {
/**
 * ALL-CAPS eyebrow section header with an optional descriptor line
 * and a right-aligned count pill or action slot. The repeated cookbook
 * / AI-screen section pattern.
 */
function SectionHeader({
  title,
  descriptor,
  count,
  action,
  dark = false,
  style
}) {
  const eyebrowColor = dark ? 'var(--text-dark-muted)' : 'var(--text-muted)';
  const descColor = dark ? 'var(--text-dark-faint)' : 'var(--text-faint)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: descriptor ? 12 : 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: eyebrowColor
    }
  }, title), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 700,
      color: 'var(--nom-red)',
      background: 'rgba(189,69,39,0.18)',
      borderRadius: 'var(--radius-xs)',
      padding: '2px 7px',
      lineHeight: 1.4
    }
  }, count), action && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, action)), descriptor && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      lineHeight: 1.4,
      color: descColor
    }
  }, descriptor));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
/**
 * Filter / attribute tag chip. Rounded, optional icon, selectable.
 * Used for cuisine, equipment, difficulty filters.
 */
function Tag({
  children,
  label,
  icon,
  selected = false,
  onClick,
  dark = false,
  style
}) {
  const interactive = !!onClick;
  const baseBg = dark ? 'var(--nom-ink-raised)' : 'var(--surface-card-warm)';
  const baseBorder = dark ? 'var(--nom-ink-border)' : 'transparent';
  const baseText = dark ? 'var(--text-dark-body)' : 'var(--nom-brown)';
  return /*#__PURE__*/React.createElement("button", {
    type: interactive ? 'button' : undefined,
    onClick: onClick,
    disabled: !interactive,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      lineHeight: 1,
      padding: '8px 12px',
      borderRadius: 'var(--radius-lg)',
      color: selected ? 'var(--nom-red)' : baseText,
      background: selected ? 'rgba(189,69,39,0.12)' : baseBg,
      border: `1.5px solid ${selected ? 'var(--nom-red)' : baseBorder}`,
      cursor: interactive ? 'pointer' : 'default',
      transition: 'all var(--dur-base) var(--ease-out)',
      WebkitTapHighlightColor: 'transparent',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 16
    }
  }, icon), label || children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
/**
 * Compact empty / error state: large icon at 50% alpha, w600 title,
 * optional subtitle, optional action. Mirrors EmptyStateView.
 */
function EmptyState({
  icon = 'restaurant',
  title,
  subtitle,
  action,
  isError = false,
  dark = false,
  compact = false,
  style
}) {
  const iconColor = isError ? 'var(--nom-error)' : dark ? 'rgba(255,255,255,0.5)' : 'rgba(51,40,28,0.45)';
  const titleColor = dark ? 'var(--text-dark-strong)' : 'var(--text-strong)';
  const subColor = dark ? 'var(--text-dark-muted)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: compact ? 20 : 40,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 48,
      color: iconColor,
      marginBottom: 16
    }
  }, icon), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 16,
      color: titleColor
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      maxWidth: 280,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.45,
      color: subColor
    }
  }, subtitle), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/**
 * Toast — dark pill with primary + secondary text and an optional
 * uppercase red action. Mirrors toast_manager.dart.
 */
function Toast({
  message,
  secondary,
  action,
  onAction,
  icon,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      background: 'rgba(15,14,14,0.94)',
      color: '#fff',
      borderRadius: 'var(--radius-base)',
      boxShadow: 'var(--shadow-pop)',
      padding: '12px 16px',
      maxWidth: 420,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 20,
      color: 'var(--nom-red)'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.3
    }
  }, message), secondary && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'rgba(255,255,255,0.7)',
      marginTop: 2
    }
  }, secondary)), action && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: 'var(--nom-red)',
      padding: 0,
      flexShrink: 0
    }
  }, action));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Nomology primary button. Mirrors the app's NomologyButton:
 * brightness-aware variants, AI-shimmer mode, press-scale feedback.
 */
function Button({
  label,
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  leadingIcon,
  trailingIcon,
  isAi = false,
  dark = false,
  disabled = false,
  type = 'button',
  style,
  ...rest
}) {
  const sizes = {
    extraSmall: {
      h: 28,
      fs: 12,
      px: 12,
      icon: 16,
      radius: 'var(--radius-sm)'
    },
    small: {
      h: 40,
      fs: 14,
      px: 16,
      icon: 18,
      radius: 'var(--radius-base)'
    },
    medium: {
      h: 48,
      fs: 14,
      px: 20,
      icon: 20,
      radius: 'var(--radius-base)'
    },
    large: {
      h: 56,
      fs: 16,
      px: 24,
      icon: 22,
      radius: 'var(--radius-base)'
    }
  };
  const s = sizes[size] || sizes.medium;
  const palettes = {
    primary: {
      bg: 'var(--nom-red)',
      fg: '#fff',
      border: 'transparent'
    },
    primaryGradient: {
      bg: 'var(--brand-gradient)',
      fg: '#fff',
      border: 'transparent'
    },
    secondary: dark ? {
      bg: 'var(--secondary-fill-dark)',
      fg: '#fff',
      border: 'transparent'
    } : {
      bg: 'var(--secondary-fill-light)',
      fg: 'var(--nom-brown)',
      border: 'transparent'
    },
    outline: dark ? {
      bg: 'transparent',
      fg: '#858585',
      border: 'var(--nom-ink-border)'
    } : {
      bg: 'transparent',
      fg: 'var(--nom-brown)',
      border: 'rgba(99,60,55,0.3)'
    },
    outlinePrimary: dark ? {
      bg: 'transparent',
      fg: '#fff',
      border: 'rgba(255,255,255,0.3)'
    } : {
      bg: 'transparent',
      fg: 'var(--nom-red)',
      border: 'rgba(189,69,39,0.3)'
    },
    text: {
      bg: 'transparent',
      fg: dark ? '#fff' : 'var(--nom-red)',
      border: 'transparent'
    },
    destructive: {
      bg: 'var(--nom-error)',
      fg: '#fff',
      border: 'transparent'
    }
  };
  const p = palettes[variant] || palettes.primary;
  const inner = /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-sm)',
      height: s.h,
      padding: `0 ${s.px}px`,
      width: fullWidth ? '100%' : 'auto',
      fontFamily: 'var(--font-body)',
      fontSize: s.fs,
      fontWeight: 600,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      color: p.fg,
      background: p.bg,
      border: `1px solid ${p.border}`,
      borderRadius: s.radius,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'transform var(--dur-base) var(--ease-out), filter var(--dur-base) var(--ease-out)',
      WebkitTapHighlightColor: 'transparent',
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.98)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), leadingIcon && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: s.icon
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("span", null, label || children), trailingIcon && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: s.icon
    }
  }, trailingIcon));
  if (!isAi) return inner;

  // AI shimmer rim — rotating sweep gradient, softly blurred (glowWidth 3, blur 8).
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: fullWidth ? 'block' : 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes nomAiSpin{to{transform:rotate(1turn)}}`), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: -3,
      borderRadius: `calc(${s.radius} + 3px)`,
      overflow: 'hidden',
      filter: 'blur(7px)',
      opacity: 0.9,
      zIndex: 0,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: '-50%',
      background: 'conic-gradient(from 0deg, var(--ai-gold), var(--ai-orange), var(--ai-pink-hot), var(--ai-pink), var(--ai-purple), var(--ai-blue), var(--ai-gold))',
      animation: 'nomAiSpin 3s linear infinite'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'block'
    }
  }, inner));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Square icon-only button. The app's NomologyButton.icon() equivalent.
 * Often used as the circular close button on dark sheets.
 */
function IconButton({
  icon,
  onClick,
  variant = 'soft',
  size = 'medium',
  dark = false,
  round = false,
  disabled = false,
  ariaLabel,
  style,
  ...rest
}) {
  const sizes = {
    small: {
      box: 32,
      icon: 18
    },
    medium: {
      box: 40,
      icon: 20
    },
    large: {
      box: 48,
      icon: 22
    }
  };
  const s = sizes[size] || sizes.medium;
  const palettes = {
    solid: {
      bg: 'var(--nom-red)',
      fg: '#fff',
      border: 'transparent'
    },
    soft: dark ? {
      bg: 'rgba(255,255,255,0.10)',
      fg: 'rgba(255,255,255,0.7)',
      border: 'transparent'
    } : {
      bg: 'rgba(51,40,28,0.06)',
      fg: 'var(--nom-brown)',
      border: 'transparent'
    },
    outline: dark ? {
      bg: 'transparent',
      fg: '#fff',
      border: 'var(--nom-ink-border)'
    } : {
      bg: 'transparent',
      fg: 'var(--nom-brown)',
      border: 'var(--border)'
    },
    ghost: dark ? {
      bg: 'transparent',
      fg: 'rgba(255,255,255,0.7)',
      border: 'transparent'
    } : {
      bg: 'transparent',
      fg: 'var(--nom-brown)',
      border: 'transparent'
    }
  };
  const p = palettes[variant] || palettes.soft;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel || icon,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: s.box,
      height: s.box,
      background: p.bg,
      color: p.fg,
      border: `1.5px solid ${p.border}`,
      borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-base)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'transform var(--dur-base) var(--ease-out)',
      WebkitTapHighlightColor: 'transparent',
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.92)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: s.icon
    }
  }, icon));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input / textarea. Supports the light theme and the crafted-dark
 * surface used on AI screens. Above-field label with optional required *.
 */
function Input({
  label,
  value,
  onChange,
  placeholder,
  required = false,
  multiline = false,
  rows = 4,
  dark = false,
  leadingIcon,
  disabled = false,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const fill = dark ? 'var(--nom-ink-raised)' : '#fff';
  const border = focused ? 'var(--nom-red)' : dark ? 'var(--nom-ink-border)' : 'var(--border)';
  const textColor = dark ? 'var(--text-dark-strong)' : 'var(--text-strong)';
  const labelColor = dark ? 'var(--text-dark-body)' : 'var(--text-muted)';
  const placeholderId = React.useId().replace(/:/g, '');
  const fieldStyle = {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    lineHeight: 1.5,
    color: textColor,
    background: fill,
    border: `1.5px solid ${border}`,
    borderRadius: 'var(--radius-sm)',
    padding: leadingIcon ? '11px 12px 11px 40px' : '11px 12px',
    outline: 'none',
    resize: multiline ? 'vertical' : 'none',
    transition: 'border-color var(--dur-base) var(--ease-out)'
  };
  const Field = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, `#ph-${placeholderId}::placeholder{color:${dark ? 'rgba(255,255,255,0.3)' : 'rgba(51,40,28,0.4)'};}`), label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 600,
      color: labelColor
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--nom-red)'
    }
  }, " *")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      position: 'absolute',
      left: 12,
      top: multiline ? 12 : '50%',
      transform: multiline ? 'none' : 'translateY(-50%)',
      fontSize: 20,
      color: labelColor,
      pointerEvents: 'none'
    }
  }, leadingIcon), /*#__PURE__*/React.createElement(Field, _extends({
    id: `ph-${placeholderId}`,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    rows: multiline ? rows : undefined,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: fieldStyle
  }, rest))));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
/**
 * Segmented control — the unified tab switcher (NomologySegmentedControl).
 * A tinted track (brown-10% light / black-50% dark) holding 2–4 equal
 * segments; the selected segment lifts to a white (light) / black-70% (dark)
 * inset pill. Icon (16px) sits left of the label.
 */
function SegmentedControl({
  options = [],
  selectedIndex = 0,
  onChange,
  dark = false,
  style
}) {
  const trackBg = dark ? 'rgba(0,0,0,0.5)' : 'rgba(99,60,55,0.1)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      padding: 4,
      borderRadius: 'var(--radius-sm)',
      background: trackBg,
      ...style
    }
  }, options.map((opt, i) => {
    const label = typeof opt === 'string' ? opt : opt.label;
    const icon = typeof opt === 'string' ? null : opt.icon;
    const disabled = typeof opt === 'string' ? false : !!opt.disabled;
    const selected = i === selectedIndex;
    const bg = selected ? dark ? 'rgba(0,0,0,0.7)' : '#fff' : 'transparent';
    const text = disabled ? dark ? 'rgba(255,255,255,0.4)' : 'rgba(99,60,55,0.4)' : selected ? dark ? '#fff' : 'var(--nom-brown)' : dark ? 'rgba(255,255,255,0.9)' : 'rgba(99,60,55,0.8)';
    return /*#__PURE__*/React.createElement("button", {
      key: label + i,
      type: "button",
      onClick: () => {
        if (!disabled && onChange) onChange(i);
      },
      style: {
        flex: 1,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        padding: '8px 6px',
        border: 'none',
        borderRadius: 6,
        background: bg,
        cursor: disabled ? 'default' : 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        fontWeight: selected ? 600 : 500,
        color: text,
        lineHeight: 1,
        boxShadow: selected && !dark ? '0 1px 2px rgba(51,40,28,0.12)' : 'none',
        transition: 'background var(--dur-base) var(--ease-out)',
        WebkitTapHighlightColor: 'transparent'
      }
    }, icon && /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-rounded",
      style: {
        fontSize: 16
      }
    }, icon), label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/BottomSheet.jsx
try { (() => {
/**
 * Bottom sheet — the dark modal pattern (AddRecipeSheet). Slides up,
 * 20px top radius, 4×40 handle bar, crafted-dark or light surface.
 * Render inline (static) or controlled via `open`.
 */
function BottomSheet({
  open = true,
  onClose,
  title,
  subtitle,
  children,
  dark = true,
  maxWidth = 420,
  style
}) {
  if (!open) return null;
  const bg = dark ? 'var(--nom-ink)' : '#fff';
  const titleColor = dark ? 'var(--text-dark-strong)' : 'var(--text-strong)';
  const subColor = dark ? 'var(--text-dark-body)' : 'var(--text-muted)';
  const handle = dark ? 'rgba(255,255,255,0.3)' : 'rgba(51,40,28,0.2)';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      background: 'rgba(0,0,0,0.45)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth,
      background: bg,
      borderTopLeftRadius: 'var(--radius-xl)',
      borderTopRightRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-sheet)',
      padding: '12px 20px 30px',
      animation: 'nomSheetUp var(--dur-slow) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes nomSheetUp{from{transform:translateY(16px);opacity:.6}to{transform:translateY(0);opacity:1}}`), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 4,
      borderRadius: 2,
      background: handle,
      margin: '0 auto 16px'
    }
  }), (title || onClose) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      marginBottom: subtitle ? 4 : 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      color: titleColor
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: subColor
    }
  }, subtitle)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Close",
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      border: 'none',
      background: dark ? 'rgba(255,255,255,0.1)' : 'rgba(51,40,28,0.08)',
      color: dark ? 'rgba(255,255,255,0.7)' : 'var(--nom-brown)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 20
    }
  }, "close"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: subtitle ? 16 : 0
    }
  }, children)));
}
Object.assign(__ds_scope, { BottomSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/BottomSheet.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Generic surface card. Flat by default (the app uses elevation:0),
 * with white or warm-grey fill and a 12px radius. Optional outline.
 */
function Card({
  children,
  fill = 'white',
  padding = 16,
  radius = 'var(--radius-base)',
  outlined = false,
  shadow = false,
  dark = false,
  style,
  ...rest
}) {
  const fills = {
    white: '#fff',
    warm: 'var(--surface-card-warm)',
    cream: 'var(--nom-light)',
    dark: 'var(--nom-ink-raised)',
    darkCard: 'var(--nom-ink-black)'
  };
  const bg = dark ? fills[fill] && fill !== 'white' ? fills[fill] : 'var(--nom-ink-raised)' : fills[fill] || fill;
  const border = dark ? 'var(--nom-ink-border)' : 'var(--border-subtle)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: bg,
      borderRadius: radius,
      padding,
      border: outlined ? `1px solid ${border}` : 'none',
      boxShadow: shadow ? 'var(--shadow-card)' : 'none',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/RecipeCard.jsx
try { (() => {
/**
 * High-craft recommendation card: clipped food image with a gradient
 * fade to the card fill, an overhanging bookmark button (top-left),
 * an overhanging match badge (top-right), the dish name in Judson,
 * meta row, and inline flavour chips. The app's polish ceiling.
 */
function RecipeCard({
  name = 'Untitled recipe',
  image,
  time = '35 min',
  difficulty = 'Easy',
  match = 92,
  flavors = [],
  bookmarked = false,
  onBookmark,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      position: 'relative',
      width: '100%',
      background: 'var(--surface-card-warm)',
      borderRadius: 'var(--radius-base)',
      overflow: 'visible',
      cursor: onClick ? 'pointer' : 'default',
      boxShadow: 'var(--shadow-card)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 160,
      borderTopLeftRadius: 'var(--radius-base)',
      borderTopRightRadius: 'var(--radius-base)',
      overflow: 'hidden',
      background: image ? `center/cover no-repeat url("${image}")` : 'linear-gradient(135deg, #E8C9A0, #C98A5A 60%, #9A5A38)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, transparent 55%, var(--surface-card-warm))'
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => {
      e.stopPropagation();
      onBookmark && onBookmark();
    },
    "aria-label": "Bookmark",
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      width: 34,
      height: 34,
      borderRadius: '50%',
      border: 'none',
      background: '#fff',
      boxShadow: 'var(--shadow-pop)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 19,
      color: 'var(--nom-red)',
      fontVariationSettings: bookmarked ? "'FILL' 1" : "'FILL' 0"
    }
  }, "bookmark")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 138,
      right: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MatchBadge, {
    score: match,
    size: 48
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 14px 16px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 56px 6px 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 20,
      lineHeight: 1.2,
      letterSpacing: '-0.75px',
      color: 'var(--text-strong)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 12,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 15
    }
  }, "schedule"), time), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 15
    }
  }, "signal_cellular_alt"), difficulty)), flavors.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, flavors.map((f, i) => /*#__PURE__*/React.createElement(__ds_scope.FlavorChip, {
    key: f,
    label: f,
    index: i
  })))));
}
Object.assign(__ds_scope, { RecipeCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/RecipeCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nomology_app/data.jsx
try { (() => {
// Nomology app — shared data + helpers. Loaded as a Babel script (no exports).
// Warm gradient placeholders stand in for food photography (no images generated).

const NOM_GRADIENTS = {
  paprika: 'linear-gradient(135deg,#E8C9A0,#C98A5A 55%,#9A3F25)',
  greens: 'linear-gradient(135deg,#D7E0A8,#8FAE52 60%,#4E7034)',
  curry: 'linear-gradient(135deg,#F0CE86,#D79A3C 55%,#A85D1B)',
  berry: 'linear-gradient(135deg,#E7B9C4,#C16A86 55%,#7E2E4E)',
  ocean: 'linear-gradient(135deg,#Bcdcdf,#5FA6B0 55%,#2C6E78)',
  choc: 'linear-gradient(135deg,#D6B89A,#9A6A45 55%,#4F2E1E)',
  citrus: 'linear-gradient(135deg,#F4DE9A,#E0A93E 55%,#B86A12)',
  tomato: 'linear-gradient(135deg,#EEBfa0,#CE6F4A 55%,#9A3320)'
};
const NOM_RECIPES = [{
  id: 'r1',
  name: 'Smoky paprika chicken traybake',
  grad: 'paprika',
  time: '35 min',
  difficulty: 'Easy',
  match: 94,
  flavors: ['Smoky', 'Herby', 'Umami'],
  cuisine: 'Spanish'
}, {
  id: 'r2',
  name: 'Charred broccoli & lemon orzo',
  grad: 'greens',
  time: '25 min',
  difficulty: 'Easy',
  match: 88,
  flavors: ['Citrus', 'Herby', 'Nutty'],
  cuisine: 'Italian'
}, {
  id: 'r3',
  name: 'Goan-style fish curry',
  grad: 'curry',
  time: '45 min',
  difficulty: 'Medium',
  match: 82,
  flavors: ['Spicy', 'Sour', 'Coconut'],
  cuisine: 'Indian'
}, {
  id: 'r4',
  name: 'Miso-glazed aubergine donburi',
  grad: 'ocean',
  time: '30 min',
  difficulty: 'Easy',
  match: 79,
  flavors: ['Umami', 'Sweet', 'Savoury'],
  cuisine: 'Japanese'
}, {
  id: 'r5',
  name: 'Dark chocolate & olive oil cake',
  grad: 'choc',
  time: '50 min',
  difficulty: 'Medium',
  match: 91,
  flavors: ['Sweet', 'Bitter', 'Rich'],
  cuisine: 'Bakes'
}, {
  id: 'r6',
  name: 'Blood orange & fennel salad',
  grad: 'citrus',
  time: '15 min',
  difficulty: 'Easy',
  match: 76,
  flavors: ['Citrus', 'Fresh', 'Anise'],
  cuisine: 'Sides'
}];
function nomGrad(key) {
  return NOM_GRADIENTS[key] || NOM_GRADIENTS.paprika;
}

// A food "photo" placeholder: warm gradient + subtle vignette.
function NomPhoto({
  grad,
  height = 160,
  radius = 0,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      width: '100%',
      background: nomGrad(grad),
      borderRadius: radius,
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 90% at 50% 0%, rgba(255,255,255,0.18), transparent 60%)'
    }
  }), children);
}
Object.assign(window, {
  NOM_GRADIENTS,
  NOM_RECIPES,
  nomGrad,
  NomPhoto
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nomology_app/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nomology_app/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nomology_app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nomology_app/screens-a.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Nomology app — screens. Babel script (no exports). Composes DS primitives.
const NDS = () => window.NomologyDesignSystem_ae9763;

// ── Shared bits ───────────────────────────────────────────────
function ScreenTitle({
  children,
  dark = false,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26,
      letterSpacing: '-0.5px',
      color: dark ? 'var(--text-dark-strong)' : 'var(--text-strong)'
    }
  }, children), right);
}

// ── Cookbook (light) ──────────────────────────────────────────
function CookbookScreen({
  onAdd,
  onOpenRecipe,
  saved
}) {
  const {
    RecipeCard,
    SectionHeader,
    MatchBadge,
    Button
  } = NDS();
  const [featured, ...rest] = NOM_RECIPES;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 58,
      paddingBottom: 100,
      minHeight: '100%',
      background: 'var(--surface-app)'
    }
  }, /*#__PURE__*/React.createElement(ScreenTitle, {
    right: /*#__PURE__*/React.createElement("button", {
      onClick: onAdd,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        border: 'none',
        cursor: 'pointer',
        background: 'var(--nom-red)',
        color: '#fff',
        borderRadius: 'var(--radius-sm)',
        padding: '8px 12px',
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-rounded",
      style: {
        fontSize: 18
      }
    }, "add"), "Add Recipe")
  }, "My Cookbook"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Top match for you"
  }), /*#__PURE__*/React.createElement(RecipeCard, _extends({}, featured, {
    bookmarked: true,
    image: undefined,
    onBookmark: () => {},
    onClick: () => onOpenRecipe(featured),
    style: {
      background: 'var(--surface-card-warm)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Saved",
    count: rest.length
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, rest.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    onClick: () => onOpenRecipe(r),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: '#fff',
      borderRadius: 'var(--radius-base)',
      padding: 10,
      boxShadow: 'var(--shadow-card)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(NomPhoto, {
    grad: r.grad,
    height: 64,
    radius: 10,
    style: {
      width: 64,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      lineHeight: 1.15,
      letterSpacing: '-0.4px',
      color: 'var(--text-strong)'
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 4,
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, r.time), /*#__PURE__*/React.createElement("span", null, r.cuisine))), /*#__PURE__*/React.createElement(MatchBadge, {
    score: r.match,
    size: 46
  })))))));
}

// ── Discover (crafted dark, swipe) ────────────────────────────
function DiscoverScreen() {
  const {
    MatchBadge,
    FlavorChip,
    IconButton,
    Badge
  } = NDS();
  const [idx, setIdx] = React.useState(0);
  const [flash, setFlash] = React.useState(null);
  const r = NOM_RECIPES[idx % NOM_RECIPES.length];
  const advance = dir => {
    setFlash(dir);
    setTimeout(() => {
      setFlash(null);
      setIdx(i => i + 1);
    }, 180);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 58,
      paddingBottom: 100,
      minHeight: '100%',
      background: 'var(--nom-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26,
      color: '#fff'
    }
  }, "Discover"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "tune",
    variant: "soft",
    dark: true,
    round: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--nom-ink-black)',
      boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
      transform: flash === 'like' ? 'translateX(40px) rotate(4deg)' : flash === 'nope' ? 'translateX(-40px) rotate(-4deg)' : 'none',
      opacity: flash ? 0 : 1,
      transition: 'all 180ms var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(NomPhoto, {
    grad: r.grad,
    height: 360
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, transparent 45%, rgba(15,14,14,0.95))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      right: 14
    }
  }, /*#__PURE__*/React.createElement(MatchBadge, {
    score: r.match,
    size: 52
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    label: r.cuisine,
    solid: true,
    color: "brand"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      bottom: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 10px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26,
      lineHeight: 1.1,
      color: '#fff'
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, r.flavors.map((f, i) => /*#__PURE__*/React.createElement(FlavorChip, {
    key: f,
    label: f,
    index: i,
    dark: true
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 22,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => advance('nope'),
    "aria-label": "Pass",
    style: swipeBtn('rgba(255,255,255,0.10)', 60)
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 28,
      color: 'rgba(255,255,255,0.8)'
    }
  }, "close")), /*#__PURE__*/React.createElement("button", {
    onClick: () => advance('save'),
    "aria-label": "Save",
    style: swipeBtn('rgba(255,255,255,0.10)', 48)
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 22,
      color: 'rgba(255,255,255,0.8)'
    }
  }, "bookmark")), /*#__PURE__*/React.createElement("button", {
    onClick: () => advance('like'),
    "aria-label": "Love",
    style: swipeBtn('var(--nom-red)', 60)
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded fill",
    style: {
      fontSize: 28,
      color: '#fff'
    }
  }, "favorite"))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-dark-muted)',
      marginTop: 16
    }
  }, "The more you rate, the sharper your matches get.")));
}
function swipeBtn(bg, size) {
  return {
    width: size,
    height: size,
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    background: bg,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: bg.includes('red') ? '0 8px 20px rgba(189,69,39,0.4)' : 'none'
  };
}
Object.assign(window, {
  CookbookScreen,
  DiscoverScreen,
  ScreenTitle
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nomology_app/screens-a.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nomology_app/screens-b.jsx
try { (() => {
// Nomology app — screens part B (AI build, meal plan, circle). Babel script.
const NDS2 = () => window.NomologyDesignSystem_ae9763;

// ── Build with AI (crafted dark) ──────────────────────────────
function BuildScreen({
  onBack,
  onGenerate
}) {
  const {
    SegmentedControl,
    Input,
    Button,
    SectionHeader,
    IconButton
  } = NDS2();
  const [time, setTime] = React.useState(1);
  const [text, setText] = React.useState('');
  const TIMES = ['quick', 'standard', 'project'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 58,
      paddingBottom: 110,
      minHeight: '100%',
      background: 'var(--nom-ink)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      padding: '0 20px',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      color: '#fff'
    }
  }, "Describe with AI"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-dark-body)'
    }
  }, "Tell Nom what you fancy. It cooks to the specifics.")), /*#__PURE__*/React.createElement(IconButton, {
    icon: "close",
    variant: "ghost",
    dark: true,
    round: true,
    onClick: onBack
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    dark: true,
    title: "Time to cook"
  }), /*#__PURE__*/React.createElement(SegmentedControl, {
    dark: true,
    selectedIndex: time,
    onChange: setTime,
    options: [{
      label: 'Quick',
      icon: 'bolt'
    }, {
      label: 'Standard',
      icon: 'schedule'
    }, {
      label: 'Project',
      icon: 'outdoor_grill'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24
    }
  }), /*#__PURE__*/React.createElement(SectionHeader, {
    dark: true,
    title: "What would you like?"
  }), /*#__PURE__*/React.createElement(Input, {
    dark: true,
    multiline: true,
    rows: 5,
    value: text,
    onChange: e => setText(e.target.value),
    placeholder: "e.g. Something with the chicken thighs in my fridge — quick, one pan, a bit spicy. No coriander."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 16,
      color: 'var(--text-dark-muted)'
    }
  }, "info"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-dark-muted)'
    }
  }, "Mention your kit, who's eating, or a craving."))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    isAi: true,
    dark: true,
    fullWidth: true,
    size: "large",
    leadingIcon: "auto_awesome",
    label: "Generate Recipe",
    onClick: onGenerate
  })));
}

// ── Meal plan (light) ─────────────────────────────────────────
function PlanScreen() {
  const {
    Button,
    SectionHeader,
    MatchBadge
  } = NDS2();
  const days = [{
    d: 'Mon',
    meal: NOM_RECIPES[0]
  }, {
    d: 'Tue',
    meal: NOM_RECIPES[3]
  }, {
    d: 'Wed',
    meal: null
  }, {
    d: 'Thu',
    meal: NOM_RECIPES[1]
  }, {
    d: 'Fri',
    meal: null
  }, {
    d: 'Sat',
    meal: NOM_RECIPES[2]
  }, {
    d: 'Sun',
    meal: null
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 58,
      paddingBottom: 100,
      minHeight: '100%',
      background: 'var(--surface-app)'
    }
  }, /*#__PURE__*/React.createElement(ScreenTitle, {
    right: /*#__PURE__*/React.createElement(Button, {
      size: "small",
      variant: "primaryGradient",
      leadingIcon: "auto_awesome",
      label: "Surprise Me",
      isAi: true
    })
  }, "This Week"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Dinners",
    descriptor: "3 slots empty \u2014 Surprise Me fills them for everyone in your circle."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, days.map(({
    d,
    meal
  }) => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: 0.5
    }
  }, d), meal ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: '#fff',
      borderRadius: 'var(--radius-base)',
      padding: 8,
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement(NomPhoto, {
    grad: meal.grad,
    height: 48,
    radius: 8,
    style: {
      width: 48,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      lineHeight: 1.15,
      letterSpacing: '-0.3px',
      color: 'var(--text-strong)'
    }
  }, meal.name), /*#__PURE__*/React.createElement(MatchBadge, {
    score: meal.match,
    size: 46
  })) : /*#__PURE__*/React.createElement("button", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      height: 64,
      border: '1.5px dashed var(--border)',
      background: 'transparent',
      borderRadius: 'var(--radius-base)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--nom-brown)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 18
    }
  }, "add"), "Add a meal")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    fullWidth: true,
    leadingIcon: "shopping_cart",
    label: "Generate shopping list"
  }))));
}

// ── Circle (light) ────────────────────────────────────────────
function CircleScreen() {
  const {
    Avatar,
    Badge,
    SectionHeader,
    Button,
    Card
  } = NDS2();
  const members = [{
    name: 'Dave Maude',
    role: 'You · Owner',
    diet: ['No coriander']
  }, {
    name: 'Priya Rao',
    role: 'Partner',
    diet: ['Pescatarian']
  }, {
    name: 'Sam Khan',
    role: 'Flatmate',
    diet: ['Nut allergy', 'No pork']
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 58,
      paddingBottom: 100,
      minHeight: '100%',
      background: 'var(--surface-app)'
    }
  }, /*#__PURE__*/React.createElement(ScreenTitle, {
    right: /*#__PURE__*/React.createElement(Button, {
      size: "small",
      variant: "secondary",
      leadingIcon: "person_add",
      label: "Invite"
    })
  }, "Your Circle"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Members",
    descriptor: "Everyone's flavour profile and dietary needs feed into Surprise Me.",
    count: members.length
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, members.map((m, i) => /*#__PURE__*/React.createElement(Card, {
    key: m.name,
    outlined: true,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: m.name,
    index: i,
    size: 48
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      color: 'var(--text-strong)'
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 1
    }
  }, m.role), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      marginTop: 8
    }
  }, m.diet.map(d => /*#__PURE__*/React.createElement(Badge, {
    key: d,
    label: d,
    color: "teal"
  })))))))));
}
Object.assign(window, {
  BuildScreen,
  PlanScreen,
  CircleScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nomology_app/screens-b.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nomology_app/shell.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Nomology app — shell: bottom nav, add-recipe sheet, recipe detail, app state.
const NDS3 = () => window.NomologyDesignSystem_ae9763;

// ── Bottom navigation ─────────────────────────────────────────
function BottomNav({
  tab,
  onTab,
  dark
}) {
  const items = [{
    id: 'discover',
    icon: 'explore',
    label: 'Discover'
  }, {
    id: 'cookbook',
    icon: 'menu_book',
    label: 'Cookbook'
  }, {
    id: 'plan',
    icon: 'calendar_month',
    label: 'Plan'
  }, {
    id: 'circle',
    icon: 'group',
    label: 'Circle'
  }];
  const bg = dark ? 'rgba(24,24,24,0.92)' : 'rgba(255,255,255,0.94)';
  const border = dark ? 'var(--nom-ink-border)' : 'var(--border-subtle)';
  const muted = dark ? 'var(--text-dark-muted)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingTop: 8,
      paddingBottom: 30,
      background: bg,
      borderTop: `1px solid ${border}`,
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      boxShadow: dark ? 'none' : 'var(--shadow-nav)'
    }
  }, items.map(it => {
    const active = tab === it.id;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onTab(it.id),
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: 'material-symbols-rounded' + (active ? ' fill' : ''),
      style: {
        fontSize: 26,
        color: active ? 'var(--nom-red)' : muted
      }
    }, it.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 10,
        fontWeight: 600,
        color: active ? 'var(--nom-red)' : muted
      }
    }, it.label));
  }));
}

// ── Add-recipe sheet content ──────────────────────────────────
function AddRecipeSheet({
  onClose,
  onAI
}) {
  const {
    BottomSheet,
    Badge,
    Button
  } = NDS3();
  const opt = (icon, title, sub, badge, onClick) => /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      width: '100%',
      textAlign: 'left',
      background: 'var(--fill-dark-subtle)',
      border: '1px solid var(--border-dark-subtle)',
      borderRadius: 'var(--radius-base)',
      padding: 16,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: 'rgba(189,69,39,0.15)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 24,
      color: 'var(--nom-red)'
    }
  }, icon)), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      fontWeight: 600,
      color: '#fff'
    }
  }, title), badge && /*#__PURE__*/React.createElement(Badge, {
    label: badge,
    dark: true,
    color: "brand"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-dark-muted)',
      marginTop: 2
    }
  }, sub)), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 22,
      color: 'var(--text-dark-faint)'
    }
  }, "chevron_right"));
  return /*#__PURE__*/React.createElement(BottomSheet, {
    title: "Add a recipe",
    subtitle: "Build it, import it, or browse.",
    onClose: onClose
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, opt('auto_awesome', 'Describe with AI', 'Tell Nom what you fancy', 'Creator', onAI), opt('link', 'Import from a URL', 'Paste any recipe link', null, onClose), opt('photo_camera', 'Scan a recipe', 'From a photo or screenshot', 'Creator', onClose)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'flex-start',
      marginTop: 16,
      padding: 12,
      background: 'rgba(189,69,39,0.10)',
      border: '1px solid rgba(189,69,39,0.2)',
      borderRadius: 'var(--radius-base)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 18,
      color: 'var(--nom-red)'
    }
  }, "lightbulb"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-dark-body)'
    }
  }, "Tip: Nom knows that miso goes in off the heat and that doubling a recipe doesn't double the salt.")));
}

// ── Recipe detail (light, pushed) ─────────────────────────────
function RecipeDetail({
  recipe,
  onBack
}) {
  const {
    MatchBadge,
    FlavorChip,
    FlavorWheel,
    Button,
    IconButton,
    SegmentedControl
  } = NDS3();
  const [tab, setTab] = React.useState(0); // Recipe | Match | You
  const prefs = {
    Umami: 82,
    Smoky: 74,
    Roasted: 60,
    Sweet: -30,
    Sour: -15,
    Bitter: -55,
    Spicy: 35,
    Body: 48
  };
  const mode = tab === 0 ? 'recipe' : tab === 1 ? 'comparison' : 'user';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: 'var(--surface-app)',
      paddingBottom: 100
    }
  }, /*#__PURE__*/React.createElement(NomPhoto, {
    grad: recipe.grad,
    height: 300
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), transparent 28%, transparent 52%, var(--surface-app))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 54,
      left: 16,
      right: 16,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "close",
    variant: "solid",
    onClick: onBack
  }), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Bookmark",
    style: {
      width: 40,
      height: 44,
      border: 'none',
      cursor: 'pointer',
      background: 'var(--nom-red)',
      color: '#fff',
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6,
      borderBottomLeftRadius: 14,
      borderBottomRightRadius: 14,
      display: 'inline-flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingTop: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded fill",
    style: {
      fontSize: 22
    }
  }, "bookmark"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 18,
      bottom: 16
    }
  }, /*#__PURE__*/React.createElement(MatchBadge, {
    score: recipe.match,
    size: 66
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 18,
      bottom: 16,
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "thumb_up",
    variant: "solid"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "thumb_down",
    variant: "ghost",
    style: {
      color: 'var(--nom-red)'
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "ios_share",
    variant: "ghost",
    style: {
      color: 'var(--nom-red)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--nom-red)'
    }
  }, recipe.cuisine === 'Bakes' || recipe.cuisine === 'Sides' ? recipe.cuisine : 'Main Courses'), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '2px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26,
      lineHeight: 1.1,
      letterSpacing: '-0.5px',
      color: 'var(--text-strong)'
    }
  }, recipe.name)), /*#__PURE__*/React.createElement(Button, {
    size: "small",
    trailingIcon: "chevron_right",
    label: "Rate now",
    style: {
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '18px 0'
    }
  }, /*#__PURE__*/React.createElement(SegmentedControl, {
    selectedIndex: tab,
    onChange: setTab,
    options: ['Recipe', 'Match', 'You']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(FlavorWheel, {
    size: 300,
    mode: mode,
    userProfile: mode === 'recipe' ? undefined : prefs
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, recipe.flavors.map((f, i) => /*#__PURE__*/React.createElement(FlavorChip, {
    key: f,
    label: f,
    index: i
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '22px 0',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, tab === 2 ? /*#__PURE__*/React.createElement(React.Fragment, null, "This is ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-strong)'
    }
  }, "your"), " palette \u2014 likes in red, dislikes in blue. You lean smoky and umami, and steer clear of bitter.") : tab === 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, "Purple shows where this recipe ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-strong)'
    }
  }, "matches"), " what you love; amber flags the few notes you tend to avoid.") : /*#__PURE__*/React.createElement(React.Fragment, null, "You rate ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-strong)'
    }
  }, "smoky"), " and ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-strong)'
    }
  }, "umami"), " highly on weeknights, and this leans into both without the coriander you've excluded.")), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "large",
    leadingIcon: "restaurant",
    label: "Start cooking"
  })));
}

// ── App shell ─────────────────────────────────────────────────
function AppShell() {
  const {
    Toast
  } = NDS3();
  const [tab, setTab] = React.useState('cookbook');
  const [sheet, setSheet] = React.useState(false);
  const [mode, setMode] = React.useState(null); // 'build' | {detail}
  const [toast, setToast] = React.useState(null);
  const dark = tab === 'discover';
  const showToast = t => {
    setToast(t);
    setTimeout(() => setToast(null), 2600);
  };
  let screen;
  if (mode === 'build') {
    screen = /*#__PURE__*/React.createElement(BuildScreen, {
      onBack: () => setMode(null),
      onGenerate: () => {
        setMode(null);
        setTab('cookbook');
        showToast({
          message: 'Recipe ready',
          secondary: 'Saved to your cookbook',
          action: 'View'
        });
      }
    });
  } else if (mode && mode.detail) {
    screen = /*#__PURE__*/React.createElement(RecipeDetail, {
      recipe: mode.detail,
      onBack: () => setMode(null)
    });
  } else if (tab === 'cookbook') {
    screen = /*#__PURE__*/React.createElement(CookbookScreen, {
      onAdd: () => setSheet(true),
      onOpenRecipe: r => setMode({
        detail: r
      })
    });
  } else if (tab === 'discover') {
    screen = /*#__PURE__*/React.createElement(DiscoverScreen, null);
  } else if (tab === 'plan') {
    screen = /*#__PURE__*/React.createElement(PlanScreen, null);
  } else {
    screen = /*#__PURE__*/React.createElement(CircleScreen, null);
  }
  const fullscreen = mode === 'build' || mode && mode.detail;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      background: dark ? 'var(--nom-ink)' : 'var(--surface-app)'
    }
  }, screen), !fullscreen && /*#__PURE__*/React.createElement(BottomNav, {
    tab: tab,
    onTab: setTab,
    dark: dark
  }), sheet && /*#__PURE__*/React.createElement(AddRecipeSheet, {
    onClose: () => setSheet(false),
    onAI: () => {
      setSheet(false);
      setMode('build');
    }
  }), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      bottom: 96,
      display: 'flex',
      justifyContent: 'center',
      zIndex: 80
    }
  }, /*#__PURE__*/React.createElement(Toast, _extends({}, toast, {
    icon: "bookmark_added",
    onAction: () => setToast(null),
    style: {
      width: '100%'
    }
  }))));
}
Object.assign(window, {
  BottomNav,
  AddRecipeSheet,
  RecipeDetail,
  AppShell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nomology_app/shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.FlavorChip = __ds_scope.FlavorChip;

__ds_ns.FLAVOR_POINT_COLORS = __ds_scope.FLAVOR_POINT_COLORS;

__ds_ns.FlavorRadarChart = __ds_scope.FlavorRadarChart;

__ds_ns.FlavorWheel = __ds_scope.FlavorWheel;

__ds_ns.MatchBadge = __ds_scope.MatchBadge;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.BottomSheet = __ds_scope.BottomSheet;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.RecipeCard = __ds_scope.RecipeCard;

})();
