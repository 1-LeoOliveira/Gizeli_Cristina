'use client'

import AnimatedSection from './AnimatedSection'

const reviews = [
  {
    name: 'Letícia Costa',
    text: 'Amo o atendimento da Gisele, fiz poucas seções e já me sinto bem melhor. Com certeza irei indicar ela. 💕',
    color: '#C4845A',
  },
  {
    name: 'Guilherme Santos',
    text: 'Adorei o atendimento, muito atenciosa, uma excelente profissional, recomendo sempre!',
    color: '#6A8FC4',
  },
  {
    name: 'Maria de Fátima Melo',
    text: 'Eu tive uma experiência incrível com a Gizeli! Ela é muito empática e compreensiva, e suas estratégias me ajudaram a lidar com meus problemas de ansiedade. Recomendo muito!',
    color: '#8A7BC4',
  },
  {
    name: 'Ingrid Neves',
    text: 'Ela é muito maravilhosa, atenciosa, me consulto com ela a pouco tempo e já tenho melhoras a cada consulta. Ela é tipo a minha melhor amiga, minha confidente! ❤️✨',
    color: '#4E9B8F',
  },
  {
    name: 'Eder Rezende',
    text: 'Ótima profissional! Muito atenciosa e dedicada no que faz!',
    color: '#C4845A',
  },
  {
    name: 'Kayo Lira',
    text: 'Gizele é simplesmente 10, fantástica, tenho acompanhamento a quase 4 anos e melhorei muito. Excelente profissional!',
    color: '#4E7B9B',
  },
  {
    name: 'Weula Sousa',
    text: 'Fui até ela fora do horário, e mesmo assim não foi um problema me responder, foi super atenciosa comigo, profissionalmente muito competente, atenta e delicada.. agradeço muito pelo seu tempo.',
    color: '#B46A8A',
  },
  {
    name: 'Leonardo Santiago',
    text: 'Ótimo atendimento, muito atenciosa e comunicativa, ótima profissional. Recomendo.',
    color: '#5A8AC4',
  },
  {
    name: 'Mariane Rodrigues',
    text: 'Ótima profissional! Recomendo.',
    color: '#9B6AC4',
  },
  {
    name: 'Lucianodejesus Teixeira',
    text: 'Ótimo atendimento, uma ótima pessoa, e um profissionalismo impecável, recomendo muito!',
    color: '#5A9B6A',
  },
]

function StarRating() {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F5A623">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

export default function Reviews() {
  return (
    <section style={{ background: 'var(--off-white)', padding: '5rem 0' }}>
      <div className="container-premium">
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{
              fontSize: '0.75rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--soft-brown)',
              fontWeight: 600,
              marginBottom: '0.75rem',
            }}>
              Avaliações do Google
            </p>
            <h2 className="heading-serif" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--charcoal)', marginBottom: '1rem' }}>
              O que dizem sobre o atendimento
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <div style={{ display: 'flex', gap: '3px' }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="#F5A623">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--charcoal)' }}>5.0</span>
            </div>
            <a
              href="https://share.google/lMDcoca0lAtrXxqDC"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.85rem',
                color: 'var(--warm-gray)',
                textDecoration: 'none',
              }}
            >
              <GoogleIcon />
              Ver todas as avaliações no Google
            </a>
          </div>
        </AnimatedSection>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}>
          {reviews.map((review, i) => (
            <AnimatedSection key={review.name} delay={i * 60}>
              <div style={{
                background: '#fff',
                borderRadius: '16px',
                padding: '1.5rem',
                boxShadow: '0 2px 16px rgba(42,32,24,0.07)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: review.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1rem',
                    flexShrink: 0,
                  }}>
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--charcoal)' }}>{review.name}</p>
                    <StarRating />
                  </div>
                </div>
                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--warm-gray)',
                  lineHeight: 1.65,
                  fontStyle: 'italic',
                }}>
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
