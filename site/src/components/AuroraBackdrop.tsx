// Decorative animated background for dark / solid-color sections.
// Pure CSS + SVG, no client JS. Respects prefers-reduced-motion via globals.css.
export function AuroraBackdrop({
  network = false,
  blobs = true,
  className = "",
}: {
  network?: boolean;
  blobs?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {blobs && (
        <>
          <div
            className="aurora-blob animate-drift-a"
            style={{ top: "-8%", left: "-6%", width: "42%", height: "70%", background: "#2563eb" }}
          />
          <div
            className="aurora-blob animate-drift-b"
            style={{ bottom: "-18%", right: "-4%", width: "40%", height: "75%", background: "#4f46e5", opacity: 0.45 }}
          />
          <div
            className="aurora-blob animate-drift-c"
            style={{ top: "20%", left: "45%", width: "30%", height: "55%", background: "#7c3aed", opacity: 0.35 }}
          />
        </>
      )}

      {/* subtle dot texture */}
      <div className="dot-grid absolute inset-0 opacity-[0.06]" />

      {network && <NetworkSvg />}
    </div>
  );
}

// Animated SVG: a light network of nodes and flowing connector lines.
function NetworkSvg() {
  const nodes = [
    { x: 80, y: 80 },
    { x: 320, y: 60 },
    { x: 620, y: 120 },
    { x: 900, y: 70 },
    { x: 1120, y: 160 },
    { x: 200, y: 300 },
    { x: 520, y: 340 },
    { x: 820, y: 300 },
    { x: 1060, y: 360 },
  ];
  const links: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 4],
    [0, 5], [1, 6], [2, 6], [3, 7], [4, 8],
    [5, 6], [6, 7], [7, 8],
  ];
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.5]"
      viewBox="0 0 1200 420"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <g stroke="#60a5fa" strokeWidth="1" strokeOpacity="0.35">
        {links.map(([a, c], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[c].x}
            y2={nodes[c].y}
            strokeDasharray="6 10"
            className="animate-dash"
            style={{ animationDelay: `${(i % 4) * 0.6}s` }}
          />
        ))}
      </g>
      <g fill="#93c5fd">
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={3}
            style={{ animation: "node-pulse 4s ease-in-out infinite", animationDelay: `${(i % 5) * 0.5}s` }}
          />
        ))}
      </g>
    </svg>
  );
}
