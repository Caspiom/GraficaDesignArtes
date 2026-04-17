import { useInView } from '../hooks/useInView'
import PaintStrokes from './PaintStrokes'
import './Services.css'
import './PaintStrokes.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-9 3h2v2h-2V7zm0 4h2v6h-2v-6zM7 7h2v8H7V7zm8 8h2V7h-2v8z" />
      </svg>
    ),
    title: 'Cartões de Visita',
    description: 'Cartões profissionais que causam impacto. Impressão em alta qualidade com acabamento fosco, verniz UV ou laminação.',
    color: '#1565c0',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    ),
    title: 'Crachás',
    description: 'Identificação visual para sua empresa ou evento. Crachás personalizados com logotipo, nome e cargo.',
    color: '#7b1fa2',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
    title: 'Banners & Lonas',
    description: 'Banners e lonas em alta resolução para divulgação do seu negócio. Tamanhos variados, do 50x40cm ao 120x90cm.',
    color: '#e65100',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z" />
      </svg>
    ),
    title: 'Tags & Etiquetas',
    description: 'Tags criativas para produtos de moda, acessórios e presentes. Vários formatos, cores e acabamentos.',
    color: '#00838f',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z" />
      </svg>
    ),
    title: 'Copos Personalizados',
    description: 'Canecas, copos long drink e taças personalizadas via sublimação. Perfeitos para lembranças e brindes corporativos.',
    color: '#c62828',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c.9 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
      </svg>
    ),
    title: 'Sacolas Personalizadas',
    description: 'Sacolas ecológicas (TNT ou algodão) com a sua marca. Impressão em silk screen ou sublimação.',
    color: '#2e7d32',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
      </svg>
    ),
    title: 'Adesivos & Stickers',
    description: 'Adesivos recortados no formato desejado para carros, embalagens, capacetes e superfícies diversas.',
    color: '#1565c0',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.72V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.72c.57-.38 1-.99 1-1.71V4c0-1.1-1-2-2-2zm-5 12H9v-2h6v2zm3-4H6V8h12v2z" />
      </svg>
    ),
    title: 'Impressão Digital',
    description: 'Impressão digital de alta resolução para panfletos, folders, cartazes, convites e muito mais.',
    color: '#4a148c',
  },
]

export default function Services() {
  const [gridRef, gridInView] = useInView(0.05)

  return (
    <section id="servicos" className="services">
      <PaintStrokes tone="light" />
      <div className="services-wave-top" aria-hidden="true" />
      <div className="container">
        <h2 className="section-title">
          Nossos <span className="highlight">Serviços</span>
        </h2>
        <p className="section-subtitle">
          Soluções gráficas completas para sua empresa, evento ou uso pessoal —
          com qualidade e agilidade que só 25 anos de experiência proporcionam.
        </p>

        <div
          ref={gridRef}
          className={`services-grid${gridInView ? ' revealed' : ''}`}
        >
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="service-card"
              style={{ '--card-color': service.color, '--card-i': idx }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a
                href="https://wa.me/557133220447?text=Olá!%20Tenho%20interesse%20em%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="service-cta"
                onClick={() => gtag('event', 'conversion', { send_to: 'AW-17417219897/1oDyCKj0gvwaELnelvFA', value: 1.0, currency: 'BRL' })}
              >
                Pedir orçamento
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
