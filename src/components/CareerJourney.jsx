import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { experiences } from "../data/experiences";
import { useTheme } from "../context/ThemeContext";
import yogyaLogo  from "../images/Yogya.png";
import segariLogo from "../images/Segari.png";
import nabatiLogo from "../images/Nabati.png";
import dpvLogo    from "../images/dpv.png";
import spriteLight from "../images/sprite-light.png";
import spriteDark  from "../images/sprite-dark.png";

// Canvas cursor: each sprite sheet has 8 frames at ~195px wide × ~138px tall.
// We draw each frame into a 96×68 canvas (≈50% scale, light aspect ratio).
const SPRITE_FRAMES  = 8;
const CANVAS_W       = 96;
const CANVAS_H       = 68;

const W = 1100, H = 380, R = 46;

const STOPS = [
  { expId: 4, shortName: "Yogya Group",         logo: yogyaLogo,  color: "#dc2626", cx: 140, cy: 90  },
  { expId: 3, shortName: "Segari.id",            logo: segariLogo, color: "#16a34a", cx: 380, cy: 270 },
  { expId: 2, shortName: "Nabati Group",         logo: nabatiLogo, color: "#ea580c", cx: 640, cy: 90  },
  { expId: 1, shortName: "Digital Place Vision", logo: dpvLogo,    color: "#4d79c7", cx: 880, cy: 270 },
];

const FUTURE = { cx: 1020, cy: 90 };

const allPts = [...STOPS, FUTURE];
let roadPath = `M ${allPts[0].cx},${allPts[0].cy}`;
for (let i = 1; i < allPts.length; i++) {
  const prev = allPts[i - 1];
  const curr = allPts[i];
  const mx = (prev.cx + curr.cx) / 2;
  roadPath += ` C ${mx},${prev.cy} ${mx},${curr.cy} ${curr.cx},${curr.cy}`;
}

export default function CareerJourney() {
  const [hovered, setHovered] = useState(null);
  const [particles, setParticles] = useState([]);
  const lastEmitRef = useRef(0);
  const idRef = useRef(0);
  const cursorCanvasRef = useRef(null);
  const darkModeRef    = useRef(false);
  const lightImgRef    = useRef(new Image());
  const darkImgRef     = useRef(new Image());
  const { darkMode } = useTheme();

  // Keep a ref in sync so the interval closure can read the latest mode
  useEffect(() => { darkModeRef.current = darkMode; }, [darkMode]);

  // Preload both sprites once
  useEffect(() => {
    lightImgRef.current.src = spriteLight;
    darkImgRef.current.src  = spriteDark;
  }, []);

  // Ping-pong frame animation via canvas drawImage — exact pixel control, no CSS quirks
  useEffect(() => {
    const SEQ = [0, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1];
    let idx = 0;
    const id = setInterval(() => {
      const canvas = cursorCanvasRef.current;
      if (!canvas) return;
      const img = darkModeRef.current ? darkImgRef.current : lightImgRef.current;
      if (!img.complete || !img.naturalWidth) return;

      const srcFrameW = img.naturalWidth / SPRITE_FRAMES; // 192px
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
      ctx.drawImage(
        img,
        SEQ[idx] * srcFrameW, 0, srcFrameW, img.naturalHeight, // source rect
        0, 0, CANVAS_W, CANVAS_H                                // dest rect
      );
      idx = (idx + 1) % SEQ.length;
    }, 80);
    return () => clearInterval(id);
  }, []);

  const showCursor = () => { if (cursorCanvasRef.current) cursorCanvasRef.current.style.display = "block"; };
  const hideCursor = () => { if (cursorCanvasRef.current) cursorCanvasRef.current.style.display = "none";  };

  const handleMouseMove = (e) => {
    if (cursorCanvasRef.current) {
      cursorCanvasRef.current.style.transform =
        `translate(${e.clientX - CANVAS_W / 2}px, ${e.clientY - CANVAS_H / 2}px)`;
    }

    const now = Date.now();
    if (now - lastEmitRef.current < 60) return;
    lastEmitRef.current = now;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const id = ++idRef.current;
    const drift = Math.random() * 18 - 9;
    // Spawn smoke behind the truck — cursor is centered, exhaust is ~34px to the left
    const spawnX = x - 34 + (Math.random() * 10 - 5);
    const spawnY = y + 8  + (Math.random() * 8  - 4);

    setParticles(prev => [...prev.slice(-18), { id, x: spawnX, y: spawnY, drift }]);
    setTimeout(() => setParticles(prev => prev.filter(p => p.id !== id)), 1000);
  };
  const expMap = Object.fromEntries(experiences.map((e) => [e.id, e]));

  const hoveredStop = STOPS.find((s) => s.expId === hovered);
  const hoveredExp  = hovered ? expMap[hovered] : null;

  const labelColor       = darkMode ? "#f9fafb" : "#111827";
  const mutedColor       = darkMode ? "#9ca3af" : "#6b7280";
  const roadColor        = darkMode ? "#4b5563" : "#374151";
  const logoBg           = darkMode ? "#1f2937" : "white";
  const futureCircleFill = darkMode ? "#1f2937" : "#f3f4f6";
  const futureMarkColor  = darkMode ? "#6b7280" : "#9ca3af";

  return (
    <>
    {createPortal(
      <canvas
        ref={cursorCanvasRef}
        className="truck-sprite-cursor"
        width={CANVAS_W}
        height={CANVAS_H}
        style={{
          display: "none",
          left: 0,
          top: 0,
          width: CANVAS_W,
          height: CANVAS_H,
          transform: "translate(0px, 0px)",
          willChange: "transform",
        }}
      />,
      document.body
    )}
    <section
      id="experience"
      className="px-8 py-12 border-t border-gray-100 dark:border-gray-800 max-w-5xl mx-auto"
      style={{ cursor: "none", position: "relative", overflow: "hidden" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={showCursor}
      onMouseLeave={() => { hideCursor(); setParticles([]); }}
    >
      {/* Smoke particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="smoke-puff"
          style={{
            left: p.x,
            top: p.y,
            "--smoke-drift": `${p.drift}px`,
            background: `radial-gradient(circle, ${
              darkMode ? "rgba(210,210,210,0.75)" : "rgba(90,90,90,0.55)"
            } 0%, transparent 70%)`,
          }}
        />
      ))}

      <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-2">Experience</p>
      <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-1">Career Journey</h2>
      <p className="text-sm text-gray-400 dark:text-gray-500 mb-8">
        A timeline of professional growth, experiences, and impact made along the way.
      </p>

      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ minWidth: 560, height: "auto" }}>
          {/* Road surface */}
          <path d={roadPath} stroke={roadColor} strokeWidth={36} fill="none" strokeLinecap="round" />
          {/* Center lane dashes */}
          <path
            d={roadPath}
            stroke="white"
            strokeWidth={4}
            fill="none"
            strokeLinecap="round"
            strokeDasharray="22 14"
            opacity={0.5}
          />

          {STOPS.map((stop) => {
            const exp   = expMap[stop.expId];
            const isTop = stop.cy < H / 2;
            const scale = hovered === stop.expId ? 1.28 : 1;
            const isHovered = hovered === stop.expId;

            const ry = isTop
              ? [stop.cy + R + 20, stop.cy + R + 42, stop.cy + R + 64]
              : [stop.cy - R - 64, stop.cy - R - 42, stop.cy - R - 20];

            return (
              <g
                key={stop.expId}
                onMouseEnter={() => setHovered(stop.expId)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: "none" }}
              >
                <g transform={`translate(${stop.cx}, ${stop.cy})`}>
                  <g
                    style={{
                      transform: `scale(${scale})`,
                      transformBox: "fill-box",
                      transformOrigin: "center",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    <foreignObject x={-R} y={-R} width={R * 2} height={R * 2}>
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                          overflow: "hidden",
                          border: `3px solid ${stop.color}`,
                          background: logoBg,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxSizing: "border-box",
                        }}
                      >
                        <img
                          src={stop.logo}
                          alt={stop.shortName}
                          style={{ width: "82%", height: "82%", objectFit: "contain" }}
                        />
                      </div>
                    </foreignObject>
                  </g>
                </g>

                <text
                  x={stop.cx} y={ry[0]} textAnchor="middle" fontSize={17} fontWeight="700"
                  fill={isHovered ? stop.color : labelColor}
                  style={{ transition: "fill 0.2s ease" }}
                >
                  {exp.role}
                </text>
                <text
                  x={stop.cx} y={ry[1]} textAnchor="middle" fontSize={16}
                  fill={isHovered ? stop.color : mutedColor}
                  style={{ transition: "fill 0.2s ease" }}
                >
                  {stop.shortName}
                </text>
                <text
                  x={stop.cx} y={ry[2]} textAnchor="middle" fontSize={16} fontWeight="500"
                  fill={isHovered ? stop.color : "#2563eb"}
                  style={{ transition: "fill 0.2s ease" }}
                >
                  {exp.period}
                </text>
              </g>
            );
          })}

          {/* Future / unknown stop */}
          <g opacity={0.45}>
            <circle
              cx={FUTURE.cx} cy={FUTURE.cy} r={R}
              fill={futureCircleFill} stroke={futureMarkColor} strokeWidth={2.5} strokeDasharray="5 4"
            />
            <text
              x={FUTURE.cx} y={FUTURE.cy}
              textAnchor="middle" dominantBaseline="central"
              fontSize={26} fontWeight="700" fill={futureMarkColor}
            >
              ?
            </text>
          </g>
        </svg>
      </div>

      {/* Detail card — appears on hover */}
      <div style={{ minHeight: "1px" }}>
        {hoveredExp && hoveredStop && (
          <div
            className="mt-4 border rounded-xl p-5 dark:bg-gray-800 transition-colors duration-200"
            style={{ borderColor: hoveredStop.color + "55" }}
          >
            <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">{hoveredExp.role}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{hoveredExp.company}</p>
              </div>
              <span className="text-xs font-medium" style={{ color: hoveredStop.color }}>
                {hoveredExp.period}
              </span>
            </div>
            <ul className="space-y-1 mb-3">
              {hoveredExp.highlights.map((h, i) => (
                <li key={i} className="text-xs text-gray-500 dark:text-gray-400 flex gap-2">
                  <span style={{ color: hoveredStop.color }}>–</span>
                  {h}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {hoveredExp.tools.map((t) => (
                <span key={t} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-full">{t}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
    </>
  );
}
