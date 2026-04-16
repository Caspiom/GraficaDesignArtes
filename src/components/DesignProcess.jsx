import { useInView } from '../hooks/useInView'
import './DesignProcess.css'

const palette = [
  { hex: '#0d1b6e', code: 'PANTONE 281 C', name: 'Azul Profundo' },
  { hex: '#1a2980', code: 'PANTONE 286 C', name: 'Azul Marinho' },
  { hex: '#1565c0', code: 'PANTONE 285 C', name: 'Azul Vivo' },
  { hex: '#00bcd4', code: 'PANTONE 3125 C', name: 'Ciano' },
  { hex: '#4dd0e1', code: 'PANTONE 305 C', name: 'Ciano Claro' },
  { hex: '#ffc107', code: 'PANTONE 116 C', name: 'Dourado' },
  { hex: '#ff6f00', code: 'PANTONE 151 C', name: 'Laranja' },
  { hex: '#7c4dff', code: 'PANTONE 2655 C', name: 'Violeta' },
]

const steps = [
  {
    num: '01',
    color: '#4dd0e1',
    title: 'Briefing',
    desc: 'Você compartilha sua ideia, marca e objetivos do projeto.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
      </svg>
    ),
  },
  {
    num: '02',
    color: '#ffc107',
    title: 'Design',
    desc: 'Nossa equipe cria artes exclusivas alinhadas à sua identidade visual.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
      </svg>
    ),
  },
  {
    num: '03',
    color: '#66bb6a',
    title: 'Aprovação',
    desc: 'Você revisa e aprova o layout antes de irmos para produção.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
    ),
  },
  {
    num: '04',
    color: '#ff7043',
    title: 'Impressão',
    desc: 'Produzimos com qualidade e entregamos no prazo combinado.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
        <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z" />
      </svg>
    ),
  },
]

export default function DesignProcess() {
  const [sectionRef, sectionInView] = useInView(0.08)

  return (
    <section className={`dp-section${sectionInView ? ' dp-visible' : ''}`} ref={sectionRef}>

      {/* Print registration marks — decorative */}
      <span className="dp-reg dp-reg-tl" aria-hidden="true" />
      <span className="dp-reg dp-reg-tr" aria-hidden="true" />
      <span className="dp-reg dp-reg-bl" aria-hidden="true" />
      <span className="dp-reg dp-reg-br" aria-hidden="true" />

      <div className="container">

        {/* Header */}
        <div className="dp-header">
          <div className="dp-tag">Processo Criativo</div>
          <h2 className="dp-title">
            Como <span className="dp-hl">Trabalhamos</span>
          </h2>
          <p className="dp-subtitle">
            Do briefing à entrega final — cada etapa cuidadosamente executada
            para um resultado que supera suas expectativas.
          </p>
        </div>

        {/* Pantone palette */}
        <div className="dp-palette" aria-label="Paleta de cores">
          {palette.map((chip, i) => (
            <div
              key={chip.hex}
              className="dp-chip"
              style={{ '--ci': i, '--cc': chip.hex }}
            >
              <div className="dp-chip-color" style={{ background: chip.hex }} />
              <div className="dp-chip-body">
                <span className="dp-chip-code">{chip.code}</span>
                <span className="dp-chip-name">{chip.name}</span>
                <span className="dp-chip-hex">{chip.hex.toUpperCase()}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Body: canvas + steps */}
        <div className="dp-body">

          {/* Left: animated design canvas */}
          <div className="dp-canvas">
            {/* Ruler ticks */}
            <div className="dp-ruler dp-ruler-h" aria-hidden="true">
              {Array.from({ length: 20 }).map((_, i) => (
                <span key={i} className="dp-tick" style={{ '--ti': i }} />
              ))}
            </div>
            <div className="dp-ruler dp-ruler-v" aria-hidden="true">
              {Array.from({ length: 20 }).map((_, i) => (
                <span key={i} className="dp-tick" style={{ '--ti': i }} />
              ))}
            </div>

            {/* Guide lines */}
            <div className="dp-guide dp-guide-h" aria-hidden="true" />
            <div className="dp-guide dp-guide-v" aria-hidden="true" />

            {/* SVG that draws itself */}
            <svg
              className="dp-svg"
              viewBox="0 0 240 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="dpG1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4dd0e1" />
                  <stop offset="100%" stopColor="#ffc107" />
                </linearGradient>
                <linearGradient id="dpG2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffc107" />
                  <stop offset="100%" stopColor="#ff6f00" />
                </linearGradient>
              </defs>

              {/* Outer pentagon */}
              <path
                className="dp-draw dp-draw-1"
                d="M120 24 L196 78 L168 168 L72 168 L44 78 Z"
                stroke="url(#dpG1)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Inner pentagon */}
              <path
                className="dp-draw dp-draw-2"
                d="M120 62 L154 96 L142 142 L98 142 L86 96 Z"
                stroke="url(#dpG2)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="5 3"
              />

              {/* Center circle */}
              <circle
                className="dp-draw dp-draw-3"
                cx="120"
                cy="115"
                r="22"
                stroke="#4dd0e1"
                strokeWidth="2"
              />

              {/* Crosshair center */}
              <line className="dp-guide-line" x1="120" y1="85" x2="120" y2="145" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <line className="dp-guide-line" x1="90"  y1="115" x2="150" y2="115" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

              {/* Anchor points */}
              <circle className="dp-anchor dp-anchor-1" cx="120" cy="24"  r="4" fill="#ffc107" />
              <circle className="dp-anchor dp-anchor-2" cx="196" cy="78"  r="4" fill="#4dd0e1" />
              <circle className="dp-anchor dp-anchor-3" cx="168" cy="168" r="4" fill="#ffc107" />
              <circle className="dp-anchor dp-anchor-4" cx="72"  cy="168" r="4" fill="#4dd0e1" />
              <circle className="dp-anchor dp-anchor-5" cx="44"  cy="78"  r="4" fill="#ffc107" />
            </svg>

            {/* Typography specimen */}
            <div className="dp-typo" aria-label="Espécime tipográfico">
              <span className="dp-typo-item" style={{ '--ti': 0, fontSize: '2rem', fontWeight: 900 }}>Aa</span>
              <span className="dp-typo-item" style={{ '--ti': 1, fontSize: '1.5rem', fontWeight: 700 }}>Bb</span>
              <span className="dp-typo-item" style={{ '--ti': 2, fontSize: '1.2rem', fontWeight: 500 }}>Cc</span>
              <span className="dp-typo-item" style={{ '--ti': 3, fontSize: 1 + 'rem', fontWeight: 400 }}>Dd</span>
              <span className="dp-typo-item" style={{ '--ti': 4, fontSize: '.8rem', fontWeight: 300 }}>Ee</span>
            </div>

            <div className="dp-canvas-label">Arte em processo</div>
          </div>

          {/* Right: process steps */}
          <div className="dp-steps">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="dp-step"
                style={{ '--si': i, '--sc': step.color }}
              >
                {i < steps.length - 1 && (
                  <div className="dp-connector">
                    <div className="dp-connector-fill" />
                  </div>
                )}
                <div className="dp-step-head">
                  <div className="dp-step-num">{step.num}</div>
                  <div className="dp-step-icon">{step.icon}</div>
                </div>
                <div className="dp-step-body">
                  <h4 className="dp-step-title">{step.title}</h4>
                  <p className="dp-step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
