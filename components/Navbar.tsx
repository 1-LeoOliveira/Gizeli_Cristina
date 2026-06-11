'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const WA = 'https://wa.me/5537991298403?text=Olá! Gostaria de agendar uma consulta.'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Áreas de atuação', href: '#areas' },
    { label: 'Abordagem', href: '#abordagem' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? 'rgba(246,241,234,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      boxShadow: scrolled ? '0 1px 12px rgba(42,32,24,0.08)' : 'none',
      transition: 'all 0.4s',
    }}>
      <div className="container-premium">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 80 }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 500, color: 'var(--charcoal)', lineHeight: 1.1 }}>
                Gizeli Cristina
              </div>
              <div style={{ fontSize: 10, letterSpacing: '0.22em', color: 'var(--soft-brown)', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif" }}>
                Psicóloga
              </div>
            </div>
          </a>

          <div className="lg-flex" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {links.map(l => (
              <a key={l.label} href={l.href}
                style={{ color: 'var(--warm-gray)', textDecoration: 'none', fontSize: 14, transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--soft-brown)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--warm-gray)'}>
                {l.label}
              </a>
            ))}
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Agendar consulta
            </a>
          </div>

          <button className="mob-btn" onClick={() => setOpen(!open)}
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}>
            {open ? <X size={22} color="var(--charcoal)" /> : <Menu size={22} color="var(--charcoal)" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mob-menu" style={{ background: 'rgba(246,241,234,0.98)', borderTop: '1px solid rgba(214,200,184,0.5)', padding: '1.5rem 1.5rem' }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '12px 0', color: 'var(--warm-gray)', textDecoration: 'none', fontSize: 15, borderBottom: '1px solid rgba(214,200,184,0.4)' }}>
              {l.label}
            </a>
          ))}
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 20, display: 'inline-flex' }}>
            Agendar consulta
          </a>
        </div>
      )}
    </nav>
  )
}
