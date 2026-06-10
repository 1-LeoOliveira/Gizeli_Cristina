import AnimatedSection from './AnimatedSection'
import { WhatsAppIcon } from './icons'

const WA = 'https://wa.me/5537991298403?text=Olá! Gostaria de conversar.'

export default function About() {
  return (
    <section id="sobre" className="section-padding" style={{ background: 'var(--off-white)' }}>
      <div className="container-premium">
        <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>

          {/* Photo side with decorative elements */}
          <AnimatedSection>
            <div style={{ position: 'relative' }}>
              {/* decorative square behind */}
              <div style={{ position: 'absolute', top: -20, left: -20, right: 60, bottom: 60, background: 'var(--beige)', borderRadius: '1.5rem', zIndex: 0 }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <img
                  src="/gizeli.png"
                  alt="Gizeli Cristina"
                  style={{ width: '100%', borderRadius: '1.5rem', objectFit: 'cover', display: 'block', boxShadow: '0 12px 48px rgba(42,32,24,0.12)' }}
                />
              </div>
              {/* floating badge */}
              <div style={{
                position: 'absolute', bottom: 30, right: -20, zIndex: 2,
                background: 'var(--soft-brown)', color: '#fff',
                borderRadius: 14, padding: '18px 24px',
                boxShadow: '0 8px 24px rgba(160,104,72,0.35)'
              }}>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.8, marginBottom: 2 }}>CRP</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22 }}>04/55292</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection delay={150}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--soft-brown)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 28, height: 1.5, background: 'var(--soft-brown)', display: 'inline-block' }} />
              Sobre mim
            </p>
            <h2 className="heading-serif" style={{ fontSize: 'clamp(2rem,3vw,3rem)', color: 'var(--charcoal)', marginBottom: 28 }}>
              Olá, sou{' '}
              <em style={{ color: 'var(--soft-brown)' }}>Gizeli Cristina</em>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, color: 'var(--warm-gray)', fontSize: 15, lineHeight: 1.85, fontWeight: 300 }}>
              <p>
                Sou psicóloga clínica com ampla experiência no atendimento de adolescentes, adultos e casais. Minha atuação é orientada por uma <strong style={{ color: 'var(--charcoal)', fontWeight: 500 }}>escuta genuína e acolhedora</strong>, sem julgamentos, onde cada pessoa é tratada como única.
              </p>
              <p>
                Trabalho com as abordagens <strong style={{ color: 'var(--charcoal)', fontWeight: 500 }}>TCC (Terapia Cognitivo-Comportamental), ACT (Terapia de Aceitação e Compromisso) e Terapia de Esquemas</strong>, além da Terapia Focada nas Emoções (TFE) — integrando o que há de mais eficaz na psicologia contemporânea.
              </p>
              <p>
                Acredito que a terapia é um processo de <strong style={{ color: 'var(--charcoal)', fontWeight: 500 }}>autoconhecimento e direcionamento</strong>. Cada sessão já é uma intervenção — um espaço para compreender melhor como você funciona e encontrar novos caminhos para lidar com seus desafios.
              </p>
            </div>

            {/* Quote block */}
            <div style={{ borderLeft: '3px solid var(--soft-brown)', background: 'var(--beige)', padding: '20px 24px', marginTop: 28, borderRadius: '0 12px 12px 0' }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontStyle: 'italic', color: 'var(--charcoal)', lineHeight: 1.7, marginBottom: 10 }}>
                "Meu diferencial está na escuta — presente, sem pressa e sem julgamentos."
              </p>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--soft-brown)' }}>— Gizeli Cristina</div>
            </div>

            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 32, fontSize: 14 }}>
              <WhatsAppIcon style={{ width: 15, height: 15 }} />
              Vamos conversar?
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
