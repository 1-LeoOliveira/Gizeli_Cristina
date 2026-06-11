'use client'

import { MapPin, Phone, Instagram } from 'lucide-react'
import { WhatsAppIcon } from './icons'

const INSTAGRAM = 'https://www.instagram.com/gizelicristinapsicologa/'

const WA = 'https://wa.me/5537991298403?text=Olá! Gostaria de agendar uma consulta.'

export function Footer() {
  return (
    <footer style={{ background: 'var(--charcoal)', padding: '3.5rem 0 2rem', color: 'rgba(255,255,255,0.7)' }}>
      <div className="container-premium">
        <div className="three-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40, marginBottom: 40 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--soft-brown)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: "'Cormorant Garamond', serif", fontSize: 18 }}>G</div>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: '#fff', fontWeight: 400 }}>Gizeli Cristina</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>CRP 04/55292</div>
              </div>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.8, color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>
              Psicoterapia para adolescentes, adultos e casais. TCC · ACT · Terapia de Esquemas · TFE
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: '#fff', marginBottom: 16, fontSize: 14, letterSpacing: '0.05em' }}>Contato</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 13 }}>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                <Phone size={14} /> (37) 99129-8403
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                <Instagram size={14} /> @gizelicristinapsicologa
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>
                <MapPin size={14} style={{ marginTop: 2, flexShrink: 0 }} />
                <span>Rua Patrícia Lacerda, 89 — Apto 201<br />Centro · Nova Serrana — MG</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: '#fff', marginBottom: 16, fontSize: 14, letterSpacing: '0.05em' }}>Atendimento</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13 }}>
              {['Adolescentes (13+)', 'Adultos', 'Casais', 'Online', 'Presencial — Nova Serrana'].map(item => (
                <div key={item} style={{ color: 'rgba(255,255,255,0.5)' }}>{item}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Map */}
        <div style={{ borderRadius: 12, overflow: 'hidden', height: 180, marginBottom: 32 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771!2d-45.5!3d-19.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDQyJzAwLjAiUyA0NcKwMzAnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
            width="100%" height="100%"
            style={{ border: 0, filter: 'grayscale(40%) brightness(0.7)' }}
            allowFullScreen loading="lazy"
          />
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, textAlign: 'center' }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} Gizeli Cristina · Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}

export function FloatingWhatsApp() {
  return (
    <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
      style={{ position: 'fixed', bottom: 28, right: 28, width: 56, height: 56, background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(37,211,102,0.45)', zIndex: 100, fontSize: 28, transition: 'transform 0.2s' }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.12)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
      <WhatsAppIcon style={{ width: 28, height: 28, color: '#fff' }} />
    </a>
  )
}
