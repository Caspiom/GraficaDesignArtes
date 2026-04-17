import { useState, useEffect } from 'react'
import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'
import PaintStrokes from './PaintStrokes'
import './Hero.css'
import './PaintStrokes.css'

const products = [
  'Cartões de Visita',
  'Banners & Lonas',
  'Copos Personalizados',
  'Crachás',
  'Adesivos & Stickers',
  'Sacolas Personalizadas',
  'Impressão Digital',
  'Tags & Etiquetas',
]

const paletteColors = [
  { hex: '#0d1b6e', label: 'C:100 M:86 Y:0 K:57' },
  { hex: '#1a2980', label: 'C:100 M:72 Y:0 K:50' },
  { hex: '#1565c0', label: 'C:89 M:47 Y:0 K:25' },
  { hex: '#00bcd4', label: 'C:100 M:12 Y:0 K:17' },
  { hex: '#4dd0e1', label: 'C:66 M:0 Y:12 K:12' },
  { hex: '#ffc107', label: 'C:0 M:25 Y:96 K:0' },
  { hex: '#ff6f00', label: 'C:0 M:56 Y:100 K:0' },
  { hex: '#7c4dff', label: 'C:51 M:70 Y:0 K:0' },
]

export default function Hero() {
  const [statsRef, statsInView] = useInView(0.3)

  const [prodIdx, setProdIdx] = useState(0)
  const [text, setText] = useState('')
  const [charIdx, setCharIdx] = useState(0)
  const [erasing, setErasing] = useState(false)

  useEffect(() => {
    const word = products[prodIdx]
    let timer

    if (!erasing) {
      if (charIdx < word.length) {
        timer = setTimeout(() => {
          setText(word.slice(0, charIdx + 1))
          setCharIdx((c) => c + 1)
        }, 65)
      } else {
        timer = setTimeout(() => setErasing(true), 1800)
      }
    } else {
      if (charIdx > 0) {
        timer = setTimeout(() => {
          setText(word.slice(0, charIdx - 1))
          setCharIdx((c) => c - 1)
        }, 38)
      } else {
        setErasing(false)
        setProdIdx((i) => (i + 1) % products.length)
      }
    }

    return () => clearTimeout(timer)
  }, [erasing, charIdx, prodIdx])

  const count25 = useCountUp(25, 1800, statsInView)
  const count10 = useCountUp(10, 1800, statsInView)

  return (
    <section id="inicio" className="hero">
      <PaintStrokes tone="dark" />
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
        <div className="hero-particles">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="particle" style={{ '--i': i }} />
          ))}
        </div>

        {/* CMYK palette strip — graphic design accent */}
        <div className="hero-palette-strip">
          {paletteColors.map((chip, i) => (
            <div
              key={chip.hex}
              className="hero-palette-chip"
              style={{ '--chip-i': i, '--chip-color': chip.hex }}
            >
              <div
                className="hero-palette-color"
                style={{ background: chip.hex }}
              />
              <div className="hero-palette-label">{chip.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot" />
            Mais de 25 Anos de Experiência
          </div>

          <h1 className="hero-title">
            Sua Ideia<br />
            <span className="hero-title-highlight">Impressa</span><br />
            com Qualidade
          </h1>

          <div className="hero-typewriter" aria-live="polite">
            <span className="hero-typewriter-label">Especialistas em</span>
            <span className="hero-typewriter-text">
              {text}
              <span className="hero-cursor" aria-hidden="true">|</span>
            </span>
          </div>

          <p className="hero-description">
            Da criação ao produto final, a <strong>Design Artes Gráficas</strong> transforma
            sua visão em peças que encantam e comunicam. Cartões, banners, crachás,
            copos personalizados e muito mais.
          </p>

          <div className="hero-actions">
            <a
              href="https://wa.me/557133220447?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              onClick={() => gtag('event', 'conversion', { send_to: 'AW-17417219897/1oDyCKj0gvwaELnelvFA', value: 1.0, currency: 'BRL' })}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Falar no WhatsApp
            </a>
            <a href="#portfolio" className="btn btn-outline">
              Ver Portfólio
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="hero-stats" ref={statsRef}>
            <div className="stat">
              <span className="stat-number">{count25}+</span>
              <span className="stat-label">Anos de Experiência</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">{count10}K+</span>
              <span className="stat-label">Clientes Atendidos</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Satisfação Garantida</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <div className="hero-ring hero-ring-1" />
            <div className="hero-ring hero-ring-2" />
            <div className="hero-ring hero-ring-3" />
            <img
              src="/logo/logo.jpeg"
              alt="Design Artes Gráficas - Leão colorido"
              className="hero-logo-img"
            />
          </div>

          <div className="hero-float hero-float-1">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6V6h12v13z" />
            </svg>
            <span>Impressão Digital</span>
          </div>
          <div className="hero-float hero-float-2">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
            </svg>
            <span>Personalização</span>
          </div>
          <div className="hero-float hero-float-3">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l5 2.18V11c0 3.5-2.33 6.79-5 7.93-2.67-1.14-5-4.43-5-7.93V7.18L12 5z" />
            </svg>
            <span>Qualidade Garantida</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>Role para baixo</span>
        <div className="scroll-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
