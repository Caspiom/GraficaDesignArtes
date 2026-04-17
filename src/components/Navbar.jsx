import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#inicio" className="navbar-logo" onClick={handleLinkClick}>
          <img src="/logo/logo.jpeg" alt="Design Artes Gráficas" />
          <span className="navbar-brand">
            <strong>Design</strong> Artes Gráficas
          </span>
        </a>

        <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleLinkClick}>{link.label}</a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/557133220447?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-cta"
              onClick={() => { handleLinkClick(); gtag('event', 'conversion', { send_to: 'AW-17417219897/1oDyCKj0gvwaELnelvFA', value: 1.0, currency: 'BRL' }); }}
            >
              Solicitar Orçamento
            </a>
          </li>
        </ul>

        <button
          className={`navbar-toggle${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
