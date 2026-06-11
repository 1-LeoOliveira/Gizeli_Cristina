'use client'

import { useState } from 'react'

const photos = ['/escritorio.png', '/escritorio2.png', '/escritorio3.png']

export default function OfficeGallery() {
  const [active, setActive] = useState<string | null>(null)

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

      {active && (
        <div
          onClick={() => setActive(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(42,32,24,0.85)', backdropFilter: 'blur(6px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2rem', cursor: 'zoom-out',
          }}
        >
          <img
            src={active}
            alt="Consultório"
            style={{ maxWidth: '90vw', maxHeight: '88vh', borderRadius: '1rem', boxShadow: '0 24px 80px rgba(0,0,0,0.4)', objectFit: 'contain' }}
            onClick={e => e.stopPropagation()}
          />
          <button
            onClick={() => setActive(null)}
            style={{
              position: 'absolute', top: 20, right: 24,
              background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%',
              width: 40, height: 40, cursor: 'pointer', color: '#fff', fontSize: 20, lineHeight: 1,
            }}
          >×</button>
        </div>
      )}
    </>
  )
}
