export default function Stats() {
  const items = [
    ['10+', 'Anos de experiência'],
    ['Adolescentes', 'Adultos e casais'],
    ['100%', 'Sigilo garantido'],
    ['Online', 'e presencial'],
  ]
  return (
    <section style={{ background: 'var(--verde-musgo)', padding: '3.5rem 0' }}>
      <div className="container-premium">
        <div className="four-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, textAlign: 'center' }}>
          {items.map(([val, label]) => (
            <div key={label}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem,3.5vw,3rem)', color: 'var(--beige)', fontWeight: 300, lineHeight: 1 }}>{val}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(234,224,212,0.6)', marginTop: 6 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
