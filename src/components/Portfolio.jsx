import { useState } from 'react'
import './Portfolio.css'

const portfolioItems = [
  { src: '/portfolio/2.jpg', alt: 'Cartão de visita com leão colorido', category: 'Cartão de Visita' },
  { src: '/portfolio/3.jpg', alt: 'Crachás personalizados', category: 'Crachás' },
  { src: '/portfolio/4.jpg', alt: 'Crachá personalizado', category: 'Crachás' },
  { src: '/portfolio/5.jpg', alt: 'Tags e etiquetas para moda', category: 'Tags & Etiquetas' },
  { src: '/portfolio/6.jpg', alt: 'Marcadores de página personalizados', category: 'Impressão Digital' },
  { src: '/portfolio/7.jpg', alt: 'Sacola personalizada', category: 'Sacolas' },
  { src: '/portfolio/8.jpg', alt: 'Banner - tamanhos disponíveis', category: 'Banners' },
  { src: '/portfolio/9.jpg', alt: 'Caneca personalizada com foto', category: 'Copos Personalizados' },
  { src: '/portfolio/10.jpg', alt: 'Copo long drink personalizado', category: 'Copos Personalizados' },
  { src: '/portfolio/11.jpg', alt: 'Taça personalizada', category: 'Copos Personalizados' },
  { src: '/portfolio/12.jpg', alt: 'Copo térmico personalizado', category: 'Copos Personalizados' },
  { src: '/portfolio/13.jpg', alt: 'Adesivos personalizados', category: 'Adesivos' },
  { src: '/portfolio/14.jpg', alt: 'Impressão em alta qualidade', category: 'Impressão Digital' },
  { src: '/portfolio/Untitled.jpg', alt: 'Cartão de visita premium', category: 'Cartão de Visita' },
]

const categories = ['Todos', ...new Set(portfolioItems.map((i) => i.category))]

export default function Portfolio() {
  const [active, setActive] = useState('Todos')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'Todos' ? portfolioItems : portfolioItems.filter((i) => i.category === active)

  const openLightbox = (item) => setLightbox(item)
  const closeLightbox = () => setLightbox(null)

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">
          Nosso <span className="highlight">Portfólio</span>
        </h2>
        <p className="section-subtitle">
          Conheça alguns dos trabalhos que realizamos. Cada peça é produzida com
          atenção aos detalhes e compromisso com a qualidade.
        </p>

        <div className="portfolio-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn${active === cat ? ' active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="portfolio-item"
              onClick={() => openLightbox(item)}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className="portfolio-overlay">
                <span className="portfolio-category">{item.category}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6M7 10h6"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Fechar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="24" height="24">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
            <p className="lightbox-caption">{lightbox.alt}</p>
          </div>
        </div>
      )}
    </section>
  )
}
