// Each project gets an original abstract diagram tied to what it actually
// does — a multi-agent graph, a retrieval graph, detection frames, a drift
// curve, a chart, a heat grid — rather than an invented product screenshot.
// All strokes/fills use CSS custom properties so they inherit section theme.

const INK = "var(--visual-ink, #0e1116)";
const LINE = "var(--visual-line, rgba(14,17,22,0.16))";
const SIGNAL = "var(--visual-signal, #21a68c)";
const AMBER = "var(--visual-amber, #d99a3d)";

function AgentsMotif() {
  const satellites = Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * Math.PI * 2 - Math.PI / 2;
    const x = 150 + Math.cos(angle) * 92;
    const y = 110 + Math.sin(angle) * 78;
    return { x, y };
  });
  return (
    <svg viewBox="0 0 300 220" className="h-full w-full" aria-hidden="true">
      {satellites.map((s, i) => (
        <line key={i} x1="150" y1="110" x2={s.x} y2={s.y} stroke={LINE} strokeWidth="1" />
      ))}
      {satellites.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r={i === 3 ? 6 : 4.5} fill={i % 3 === 0 ? SIGNAL : "none"} stroke={INK} strokeWidth="1.2" />
      ))}
      <circle cx="150" cy="110" r="14" fill={INK} />
      <circle cx="150" cy="110" r="14" fill="none" stroke={SIGNAL} strokeWidth="1.5" />
    </svg>
  );
}

function RetrievalMotif() {
  const nodes = [
    [54, 46], [40, 96], [58, 150], [96, 182],
    [190, 40], [214, 92], [198, 150], [168, 184],
  ];
  return (
    <svg viewBox="0 0 300 220" className="h-full w-full" aria-hidden="true">
      {nodes.map(([x, y], i) => (
        <line key={i} x1={x} y1={y} x2="150" y2="110" stroke={LINE} strokeWidth="1" strokeDasharray="2 4" />
      ))}
      {nodes.map(([x, y], i) => (
        <rect key={i} x={x - 7} y={y - 7} width="14" height="14" rx="3" fill="none" stroke={INK} strokeWidth="1.2" />
      ))}
      <circle cx="150" cy="110" r="20" fill="none" stroke={SIGNAL} strokeWidth="1.6" />
      <circle cx="150" cy="110" r="3.5" fill={SIGNAL} />
    </svg>
  );
}

function VisionMotif() {
  const cells = [];
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 4; c++) {
      cells.push({ x: 20 + c * 66, y: 18 + r * 62, active: (r === 0 && c === 2) || (r === 1 && c === 1) });
    }
  }
  return (
    <svg viewBox="0 0 300 220" className="h-full w-full" aria-hidden="true">
      {cells.map((cell, i) => (
        <rect
          key={i}
          x={cell.x}
          y={cell.y}
          width="50"
          height="44"
          rx="3"
          fill="none"
          stroke={cell.active ? SIGNAL : LINE}
          strokeWidth={cell.active ? 1.8 : 1}
        />
      ))}
      {cells
        .filter((c) => c.active)
        .map((c, i) => (
          <g key={i}>
            <circle cx={c.x + 25} cy={c.y + 22} r="3" fill={AMBER} />
            <line x1={c.x} y1={c.y} x2={c.x + 50} y2={c.y + 44} stroke={AMBER} strokeWidth="0.75" opacity="0.5" />
          </g>
        ))}
    </svg>
  );
}

function DriftMotif() {
  const baseline = "M20,150 C60,150 70,60 110,60 C150,60 160,150 200,150 C230,150 240,110 280,110";
  const shifted = "M20,170 C60,170 90,90 130,90 C170,90 175,170 215,170 C245,170 255,130 280,130";
  return (
    <svg viewBox="0 0 300 220" className="h-full w-full" aria-hidden="true">
      <line x1="20" y1="190" x2="280" y2="190" stroke={LINE} strokeWidth="1" />
      <path d={baseline} fill="none" stroke={INK} strokeWidth="1.6" opacity="0.55" />
      <path d={shifted} fill="none" stroke={SIGNAL} strokeWidth="2" />
      <path d="M240,50 a26,26 0 1 1 -6,-16" fill="none" stroke={AMBER} strokeWidth="1.6" />
      <path d="M234,30 l6,4 l-2,-8 z" fill={AMBER} />
    </svg>
  );
}

function ChartMotif() {
  const bars = [38, 64, 48, 80, 56, 92];
  return (
    <svg viewBox="0 0 300 220" className="h-full w-full" aria-hidden="true">
      <line x1="24" y1="184" x2="276" y2="184" stroke={LINE} strokeWidth="1" />
      {bars.map((h, i) => (
        <rect key={i} x={40 + i * 38} y={184 - h} width="20" height={h} fill="none" stroke={INK} strokeWidth="1.3" />
      ))}
      <polyline
        points={bars.map((h, i) => `${50 + i * 38},${184 - h - 14}`).join(" ")}
        fill="none"
        stroke={SIGNAL}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {bars.map((h, i) => (
        <circle key={i} cx={50 + i * 38} cy={184 - h - 14} r="3" fill={SIGNAL} />
      ))}
    </svg>
  );
}

function HeatmapMotif() {
  const cols = 8;
  const rows = 4;
  const weights = [
    2, 1, 0, 3, 1, 0, 1, 0,
    1, 3, 2, 4, 2, 1, 0, 1,
    0, 2, 4, 3, 1, 0, 1, 2,
    1, 0, 1, 2, 1, 0, 2, 1,
  ];
  const tone = (w) => [LINE, "rgba(33,166,140,0.35)", "rgba(33,166,140,0.65)", SIGNAL, AMBER][w];
  return (
    <svg viewBox="0 0 300 220" className="h-full w-full" aria-hidden="true">
      {weights.map((w, i) => {
        const c = i % cols;
        const r = Math.floor(i / cols);
        return (
          <rect
            key={i}
            x={20 + c * 33}
            y={30 + r * 40}
            width="29"
            height="34"
            rx="2"
            fill={tone(w)}
            stroke={LINE}
            strokeWidth="0.5"
          />
        );
      })}
      {rows === 4 ? null : null}
    </svg>
  );
}

const motifs = {
  agents: AgentsMotif,
  retrieval: RetrievalMotif,
  vision: VisionMotif,
  drift: DriftMotif,
  chart: ChartMotif,
  heatmap: HeatmapMotif,
};

export default function ProjectVisual({ variant, className = "" }) {
  const Motif = motifs[variant] || ChartMotif;
  return (
    <div className={className}>
      <Motif />
    </div>
  );
}
