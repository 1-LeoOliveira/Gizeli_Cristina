'use client'

import AnimatedSection from './AnimatedSection'
import { WhatsAppIcon } from './icons'

const WA = 'https://wa.me/5537991298403?text=Olá! Gostaria de agendar uma consulta.'

export default function FinalCTA() {
  return (
    <section style={{
      padding: '6rem 0',
      background: 'linear-gradient(135deg, var(--soft-brown) 0%, var(--soft-brown-dark) 100%)',
      color: '#fff',
      textAlign: 'center',
    }}>
      <div className="container-premium">
        <AnimatedSection>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            <span style={{ width: 28, height: 1.5, background: 'rgba(255,255,255,0.4)', display: 'inline-block' }} />
            COMEÇAR É O PRIMEIRO PASSO
            <span style={{ width: 28, height: 1.5, background: 'rgba(255,255,255,0.4)', display: 'inline-block' }} />
          </p>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', marginBottom: 20, lineHeight: 1.15 }}>
            Você não precisa<br />
            <em style={{ fontStyle: 'italic' }}>enfrentar tudo sozinho.</em>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.8)', maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.8, fontWeight: 300 }}>
            O primeiro passo pode parecer difícil, mas estou aqui para te acolher e caminhar ao seu lado nessa jornada de autoconhecimento e transformação.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: '#fff', color: 'var(--soft-brown)', padding: '16px 36px', borderRadius: 9999, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15, textDecoration: 'none', transition: 'all 0.3s', boxShadow: '0 4px 24px rgba(0,0,0,0.15)' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.15)' }}>
            <WhatsAppIcon style={{ width: 20, height: 20 }} />
            Agendar atendimento pelo WhatsApp
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
