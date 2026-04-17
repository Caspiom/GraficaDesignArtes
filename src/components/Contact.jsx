import './Contact.css'

export default function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="container">
        <h2 className="section-title">
          Entre em <span className="highlight">Contato</span>
        </h2>
        <p className="section-subtitle">
          Solicite seu orçamento agora mesmo. Respondemos rapidamente e oferecemos
          a melhor solução para o seu projeto gráfico.
        </p>

        <div className="contact-grid">
          {/* Coluna esquerda: informações */}
          <div className="contact-info">
            <h3 className="contact-info-title">Fale Conosco</h3>

            <div className="contact-items">
              <a
                href="https://wa.me/557133220447?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item contact-item--whatsapp"
                onClick={() => gtag('event', 'conversion', { send_to: 'AW-17417219897/1oDyCKj0gvwaELnelvFA', value: 1.0, currency: 'BRL' })}
              >
                <div className="contact-item-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <span className="contact-item-label">WhatsApp</span>
                  <span className="contact-item-value">(71) 3322-0447</span>
                </div>
              </a>

              <a
                href="tel:+557133220447"
                className="contact-item"
              >
                <div className="contact-item-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <span className="contact-item-label">Telefone</span>
                  <span className="contact-item-value">(71) 3322-0447</span>
                </div>
              </a>

              <a
                href="https://instagram.com/graficadesignartes"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item contact-item--instagram"
              >
                <div className="contact-item-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <span className="contact-item-label">Instagram</span>
                  <span className="contact-item-value">@graficadesignartes</span>
                </div>
              </a>

              <div className="contact-item contact-item--address">
                <div className="contact-item-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <span className="contact-item-label">Endereço</span>
                  <span className="contact-item-value">Av. Joana Angélica, 36 - loja 02</span>
                  <span className="contact-item-sub">Nazaré, Salvador - BA, 40050-000</span>
                </div>
              </div>
            </div>

            <div className="contact-hours">
              <h4 className="hours-title">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z"/>
                </svg>
                Horário de Atendimento
              </h4>
              <p>Segunda a Sexta: <strong>9h às 18h</strong></p>
              <p>Sábado: <strong>9h às 15h</strong></p>
            </div>
          </div>

          {/* Coluna direita: CTA + mapa */}
          <div className="contact-right">
            <div className="contact-cta-card">
              <div className="cta-card-icon">
                <img src="/logo/logo.jpeg" alt="Design Artes Gráficas" />
              </div>
              <h3 className="cta-card-title">Solicite seu Orçamento</h3>
              <p className="cta-card-text">
                Descreva seu projeto e receba uma proposta personalizada. Atendemos
                empresas de todos os tamanhos e pessoas físicas.
              </p>

              <a
                href="https://wa.me/557133220447?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20meu%20projeto%20gráfico."
                target="_blank"
                rel="noopener noreferrer"
                className="cta-card-btn"
                onClick={() => gtag('event', 'conversion', { send_to: 'AW-17417219897/1oDyCKj0gvwaELnelvFA', value: 1.0, currency: 'BRL' })}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chamar no WhatsApp
              </a>

              <p className="cta-response-time">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z"/>
                </svg>
                Resposta em até 1 hora no horário comercial
              </p>
            </div>

            <div className="contact-map-card">
              <div className="contact-map-header">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Como nos Encontrar
              </div>
              <iframe
                title="Localização Gráfica Design Artes"
                src="https://maps.google.com/maps?q=Av.+Joana+Ang%C3%A9lica,+36,+Nazar%C3%A9,+Salvador,+BA,+40050-000&output=embed&z=16"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
