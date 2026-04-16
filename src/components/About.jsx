import PaintStrokes from './PaintStrokes'
import './About.css'
import './PaintStrokes.css'

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l5 2.18V11c0 3.5-2.33 6.79-5 7.93-2.67-1.14-5-4.43-5-7.93V7.18L12 5z"/>
      </svg>
    ),
    title: 'Qualidade',
    text: 'Trabalhamos com equipamentos de última geração e materiais premium para garantir o melhor resultado.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
      </svg>
    ),
    title: 'Agilidade',
    text: 'Entendemos que tempo é dinheiro. Trabalhamos com prazos enxutos sem abrir mão da qualidade.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
      </svg>
    ),
    title: 'Criatividade',
    text: 'Nossa equipe de designers está pronta para criar artes exclusivas que representem a sua marca.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    ),
    title: 'Atendimento',
    text: 'Atendimento personalizado do início ao fim. Cada cliente é único e merece atenção especial.',
  },
]

export default function About() {
  return (
    <section id="sobre" className="about">
      <PaintStrokes tone="dark" />
      <div className="about-wave-top" aria-hidden="true" />
      <div className="about-wave-bottom" aria-hidden="true" />
      <div className="container about-content">
        <div className="about-image-side">
          <div className="about-img-wrap">
            <img src="/portfolio/14.jpg" alt="Impressão em alta qualidade na Design Artes Gráficas" />
            <div className="about-badge-years">
              <span className="years-number">25+</span>
              <span className="years-label">anos de<br/>experiência</span>
            </div>
          </div>
          <div className="about-img-secondary">
            <img src="/portfolio/2.jpg" alt="Cartão de visita produzido pela Design Artes Gráficas" />
          </div>
        </div>

        <div className="about-text-side">
          <div className="about-tag">Sobre Nós</div>
          <h2 className="about-title">
            Mais de <span className="highlight">25 Anos</span><br />
            Imprimindo Qualidade
          </h2>
          <p className="about-paragraph">
            A <strong>Design Artes Gráficas</strong> nasceu da paixão por transformar ideias
            em imagens. Ao longo de mais de duas décadas, conquistamos a confiança de milhares
            de clientes em toda a região, oferecendo soluções gráficas completas com criatividade
            e excelência técnica.
          </p>
          <p className="about-paragraph">
            Contamos com equipamentos modernos de impressão digital e sublimação, capazes de
            produzir desde o cartão de visita mais sofisticado até o banner de grandes dimensões,
            sempre com cores vibrantes e acabamento impecável.
          </p>

          <div className="about-values">
            {values.map((v) => (
              <div key={v.title} className="value-item">
                <div className="value-icon">{v.icon}</div>
                <div>
                  <h4 className="value-title">{v.title}</h4>
                  <p className="value-text">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
