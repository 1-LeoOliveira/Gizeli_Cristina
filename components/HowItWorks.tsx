import AnimatedSection from './AnimatedSection'
import { Clock, MapPin, Heart, Monitor, Check } from 'lucide-react'
import { WhatsAppIcon } from './icons'

const WA = 'https://wa.me/5537991298403?text=Olá! Gostaria de agendar minha primeira sessão.'

export default function HowItWorks() {
  return (
    <>
      {/* First session */}
      <section id="como-funciona" className="section-padding" style={{ background: 'var(--beige)' }}>
        <div className="container-premium">
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            <AnimatedSection style={{ textAlign: 'center', marginBottom: 48 }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                <span style={{ width: 28, height: 1.5, background: 'var(--sage)', display: 'inline-block' }} />
                PRIMEIRA SESSÃO
                <span style={{ width: 28, height: 1.5, background: 'var(--sage)', display: 'inline-block' }} />
              </p>
              <h2 className="heading-serif" style={{ fontSize: 'clamp(2rem,3vw,3rem)', color: 'var(--charcoal)' }}>
                Como funciona?
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div style={{ background: 'var(--off-white)', borderRadius: '1.5rem', padding: '3rem 3.5rem', boxShadow: '0 4px 24px rgba(42,32,24,0.06)', border: '1px solid rgba(214,200,184,0.4)' }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.9, color: 'var(--warm-gray)', marginBottom: 18, fontWeight: 300 }}>
                  A primeira sessão com a Gizeli <strong style={{ color: 'var(--charcoal)', fontWeight: 500 }}>já é uma sessão completa</strong> — não é apenas uma entrevista. Desde o primeiro encontro há escuta, intervenção e direcionamento.
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.9, color: 'var(--warm-gray)', marginBottom: 36, fontWeight: 300 }}>
                  Você não precisa saber por onde começar. Pode chegar com dúvidas, com ansiedade ou sem palavras — o espaço terapêutico é feito justamente para isso. O importante é dar o primeiro passo.
                </p>

                <div className="three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
                  {[
                    { icon: Clock, label: 'Duração', value: '50 minutos' },
                    { icon: Monitor, label: 'Modalidade', value: 'Online ou Presencial' },
                    { icon: Heart, label: 'Dinâmica', value: 'Intervenção desde a 1ª sessão' },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} style={{ textAlign: 'center', padding: '18px 16px', background: 'var(--cream)', borderRadius: 14, borderTop: '2.5px solid var(--soft-brown)' }}>
                      <Icon size={20} color="var(--sage)" style={{ margin: '0 auto 8px' }} />
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--warm-gray)', marginBottom: 4 }}>{label}</p>
                      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 17, color: 'var(--charcoal)' }}>{value}</p>
                    </div>
                  ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: 36 }}>
                  <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 14, padding: '14px 32px' }}>
                    <WhatsAppIcon style={{ width: 15, height: 15 }} />
                    Agendar primeira sessão
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="contato" className="section-padding" style={{ background: 'var(--off-white)' }}>
        <div className="container-premium">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: 14 }}>ATENDIMENTO</p>
            <h2 className="heading-serif" style={{ fontSize: 'clamp(2rem,3vw,3rem)', color: 'var(--charcoal)' }}>
              Onde te atendo
            </h2>
          </AnimatedSection>

          <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
            {/* Presencial */}
            <AnimatedSection>
              <div className="card-premium" style={{ height: '100%' }}>
                <div style={{ width: 52, height: 52, background: 'rgba(138,155,122,0.2)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <MapPin size={24} color="var(--sage)" />
                </div>
                <h3 className="heading-serif" style={{ fontSize: 22, color: 'var(--charcoal)', marginBottom: 12 }}>Atendimento Presencial</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'var(--warm-gray)', lineHeight: 1.8, marginBottom: 20, fontWeight: 300 }}>
                  Consultório em ambiente acolhedor e reservado, pensado para oferecer conforto e privacidade durante as sessões.
                </p>
                <div style={{ background: 'var(--cream)', borderRadius: 12, padding: '16px 20px', border: '1px solid rgba(214,200,184,0.6)' }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: 'var(--charcoal)', marginBottom: 4, fontSize: 15 }}>Rua Patrícia Lacerda, 89 — Apto 201</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--warm-gray)', fontSize: 14 }}>Centro · Nova Serrana — MG</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Online */}
            <AnimatedSection delay={150}>
              <div className="card-premium" style={{ height: '100%' }}>
                <div style={{ width: 52, height: 52, background: 'rgba(138,155,122,0.2)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <Monitor size={24} color="var(--sage)" />
                </div>
                <h3 className="heading-serif" style={{ fontSize: 22, color: 'var(--charcoal)', marginBottom: 12 }}>Atendimento Online</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'var(--warm-gray)', lineHeight: 1.8, marginBottom: 20, fontWeight: 300 }}>
                  Sessões por videochamada com a mesma qualidade e dedicação do atendimento presencial. Ideal para quem valoriza praticidade.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                  {['Mesmo acolhimento do presencial', 'Flexibilidade de horários', 'Conforto do seu espaço', 'Plataforma segura e sigilosa'].map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'var(--warm-gray)' }}>
                      <Check size={16} color="var(--sage)" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 14 }}>
                  Agendar sessão online
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
