/**
 * PaintStrokes — decorative animated background SVG
 * Simulates brush strokes, pen tool paths and ink drips being drawn.
 *
 * tone: 'light' | 'dark' | 'warm'
 */
export default function PaintStrokes({ tone = 'light' }) {
  return (
    <div className={`ps-wrap ps-${tone}`} aria-hidden="true">
      <svg
        className="ps-svg"
        viewBox="0 0 1280 560"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── Wide brush sweep ── */}
        <path
          className="ps-path ps-brush1"
          d="M-80,160 C120,128 320,192 580,155 C840,118 1040,178 1360,148"
          strokeWidth="52"
          strokeLinecap="round"
          fill="none"
        />

        {/* ── Secondary brush sweep (thinner, offset) ── */}
        <path
          className="ps-path ps-brush2"
          d="M-60,390 C180,355 420,415 680,372 C940,330 1140,392 1360,358"
          strokeWidth="22"
          strokeLinecap="round"
          fill="none"
        />

        {/* ── Diagonal slash stroke ── */}
        <path
          className="ps-path ps-slash"
          d="M1200,0 C1160,60 1100,120 1050,200 C1000,280 980,360 960,460"
          strokeWidth="36"
          strokeLinecap="round"
          fill="none"
        />

        {/* ── Pen tool bezier curve (thin, dashed) ── */}
        <path
          className="ps-path ps-bezier"
          d="M60,60 C160,20 280,100 400,48 C520,-4 640,80 780,36 C920,-8 1040,64 1180,22"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="8 7"
        />

        {/* ── Bezier handle lines ── */}
        <line className="ps-path ps-handle" x1="60"   y1="60"  x2="160"  y2="20"  strokeWidth="1" />
        <line className="ps-path ps-handle" x1="400"  y1="48"  x2="280"  y2="100" strokeWidth="1" />
        <line className="ps-path ps-handle" x1="780"  y1="36"  x2="640"  y2="80"  strokeWidth="1" />
        <line className="ps-path ps-handle" x1="1180" y1="22"  x2="1040" y2="64"  strokeWidth="1" />

        {/* Anchor dots */}
        <circle className="ps-dot ps-dot1" cx="60"   cy="60"  r="4" fill="none" strokeWidth="1.5" />
        <circle className="ps-dot ps-dot2" cx="400"  cy="48"  r="4" fill="none" strokeWidth="1.5" />
        <circle className="ps-dot ps-dot3" cx="780"  cy="36"  r="4" fill="none" strokeWidth="1.5" />
        <circle className="ps-dot ps-dot4" cx="1180" cy="22"  r="4" fill="none" strokeWidth="1.5" />

        {/* ── Ink drips from top ── */}
        <path
          className="ps-path ps-drip1"
          d="M320,0 C316,40 324,80 318,120 C312,155 304,162 308,198"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="ps-path ps-drip2"
          d="M820,0 C816,32 826,68 820,105 C814,138 806,145 812,182"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="ps-path ps-drip3"
          d="M1080,0 C1076,24 1084,52 1078,84 C1072,108 1064,115 1070,145"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />

        {/* ── Layout guide lines (design grid aesthetic) ── */}
        <line className="ps-path ps-grid" x1="0"    y1="280" x2="1280" y2="280" strokeWidth="0.8" strokeDasharray="4 8" />
        <line className="ps-path ps-grid" x1="640"  y1="0"   x2="640"  y2="560" strokeWidth="0.8" strokeDasharray="4 8" />
      </svg>
    </div>
  )
}
