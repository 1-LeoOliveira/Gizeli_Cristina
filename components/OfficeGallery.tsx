'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const photos = ['/escritorio.png', '/escritorio2.png', '/escritorio3.png']

export default function OfficeGallery() {
  const [active, setActive] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [active])

  const lightbox = active && (
    <div
      onClick={() => setActive(null)}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(42,32,24,0.9)', backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <img
        src={active}
        alt="Consultório"
        style={{ maxWidth: '95vw', maxHeight: '85vh', borderRadius: '1rem', boxShadow: '0 24px 80px rgba(0,0,0,0.4)', objectFit: 'contain' }}
      />
      <button
        onClick={() => setActive(null)}
        style={{
          position: 'absolute', top: 16, right: 16,
          background: 'rgba(255,255,255,0.2)', border: '1.5px solid rgba(255,255,255,0.4)',
          borderRadius: '50%', width: 48, height: 48,
          cursor: 'pointer', color: '#fff', fontSize: 22, lineHeight: 1,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
        aria-label="Fechar"
      >×</button>
    </div>
  )

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {photos.map((src, i) => (
          <div
            key={i}
            onClick={() => setActive(src)}
            style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 4px 20px rgba(42,32,24,0.10)', aspectRatio: '4/3', cursor: 'pointer' }}
          >
            <img src={src} alt={`Consultório ${i + 1}`} className="office-img" />
          </div>
        ))}
      </div>
      <p style={{ textAlign: 'center', fontFamily: "'DM Sans', sans-serif", fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--warm-gray)', marginTop: 16, opacity: 0.7 }}>
        Consultório — Nova Serrana, MG
      </p>

      {mounted && lightbox && createPortal(lightbox, document.body)}
    </>
  )
}
