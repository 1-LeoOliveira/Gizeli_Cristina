import Image from 'next/image'
import { WhatsAppIcon } from './icons'
import { MapPin, Monitor, Users } from 'lucide-react'

const WA = 'https://wa.me/5537991298403?text=Olá! Quero iniciar minha terapia.'

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 80,
      background: 'linear-gradient(135deg, var(--cream) 0%, var(--cream-warm) 60%, rgba(234,224,212,0.4) 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* blobs */}
      <div style={{ position: 'absolute', top: '10%', right: '5%', width: 400, height: 400, background: 'rgba(138,155,122,0.12)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', left: '0%', width: 360, height: 360, background: 'rgba(214,200,184,0.25)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div className="container-premium" style={{ width: '100%' }}>
        <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', padding: '4rem 0' }}>

          {/* Text */}
          <div style={{ order: 1 }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 28, height: 1.5, background: 'var(--sage)', display: 'inline-block' }} />
              PSICÓLOGA CLÍNICA · CRP 04/55292
            </p>

            <h1 className="animate-fade-in-up heading-serif" style={{ fontSize: 'clamp(2.6rem, 4.5vw, 5rem)', color: 'var(--charcoal)', marginBottom: 24, animationDelay: '0.1s' }}>
              Cuidar da sua{' '}
              <em style={{ color: 'var(--soft-brown)', fontStyle: 'italic' }}>mente</em>
              <br />é o maior ato de<br />
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>amor-próprio</em>
            </h1>

            <p className="animate-fade-in-up" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: 'var(--warm-gray)', maxWidth: 460, marginBottom: 36, fontWeight: 300, animationDelay: '0.2s' }}>
              Atendimento psicológico para adolescentes, adultos e casais, com uma escuta acolhedora e sem julgamentos.
              Juntos, encontramos novos caminhos para você viver com mais equilíbrio e qualidade de vida.
            </p>

            <div className="animate-fade-in-up" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 36, animationDelay: '0.3s' }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 14, padding: '14px 28px' }}>
                <WhatsAppIcon style={{ width: 16, height: 16 }} />
                Quero iniciar minha terapia
              </a>
              <a href="#sobre" className="btn-secondary" style={{ fontSize: 14, padding: '14px 28px' }}>
                Saiba mais
              </a>
            </div>

            <div className="animate-fade-in-up" style={{ display: 'flex', flexWrap: 'wrap', gap: 24, animationDelay: '0.4s' }}>
              {[
                { icon: Monitor, label: 'Online e Presencial' },
                { icon: MapPin, label: 'Nova Serrana - MG' },
                { icon: Users, label: 'Adolescentes, adultos e casais' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'var(--warm-gray)', fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>
                  <Icon size={14} color="var(--sage)" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div style={{ order: 2, display: 'flex', justifyContent: 'flex-end', position: 'relative' }}>
            <div style={{ position: 'relative', maxWidth: 480, width: '100%' }}>
              {/* decorative bg */}
              <div style={{ position: 'absolute', inset: -16, background: 'linear-gradient(135deg, rgba(138,155,122,0.2), rgba(214,200,184,0.4))', borderRadius: '2rem', filter: 'blur(20px)', zIndex: 0 }} />
              <div className="animate-scale-in" style={{ position: 'relative', zIndex: 1, animationDelay: '0.2s' }}>
                <Image
                  src="/gizeli%20hero.png"
                  alt="Gizeli Cristina - Psicóloga"
                  width={480}
                  height={560}
                  style={{ width: '100%', height: 'auto', borderRadius: '2rem', objectFit: 'cover', display: 'block' }}
                  priority
                />
              </div>
              {/* badge */}
              <div style={{
                position: 'absolute', bottom: -20, left: -20, zIndex: 2,
                background: 'var(--cream)', borderRadius: 16,
                padding: '16px 22px', boxShadow: '0 8px 32px rgba(42,32,24,0.12)',
                border: '1px solid rgba(214,200,184,0.6)'
              }}>
                <div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: 2, fontFamily: "'DM Sans', sans-serif" }}>Abordagem</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 17, color: 'var(--charcoal)', fontWeight: 500 }}>TCC · ACT · Esquemas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
