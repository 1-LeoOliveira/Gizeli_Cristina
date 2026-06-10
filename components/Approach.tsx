import AnimatedSection from './AnimatedSection'
import { Check } from 'lucide-react'

const approaches = [
  {
    name: 'TCC',
    full: 'Terapia Cognitivo-Comportamental',
    desc: 'Identifica pensamentos disfuncionais e transforma padrões de comportamento que causam sofrimento.',
    color: 'var(--soft-brown)',
  },
  {
    name: 'ACT',
    full: 'Terapia de Aceitação e Compromisso',
    desc: 'Desenvolve flexibilidade psicológica e ajuda a agir de acordo com seus valores mesmo diante das dificuldades.',
    color: 'var(--sage)',
  },
  {
    name: 'T. Esquemas',
    full: 'Terapia de Esquemas',
    desc: 'Trabalha padrões profundos da personalidade originados na infância que influenciam relacionamentos e comportamentos.',
    color: 'var(--verde-musgo)',
  },
  {
    name: 'TFE',
    full: 'Terapia Focada nas Emoções',
    desc: 'Explora e transforma emoções centrais para uma vida mais plena e vínculos mais saudáveis.',
    color: 'var(--accent)',
  },
]

export default function Approach() {
  return (
    <section id="abordagem" className="section-padding" style={{ background: 'var(--off-white)' }}>
      <div className="container-premium">
        <AnimatedSection style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: 14 }}>ABORDAGEM TERAPÊUTICA</p>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(2rem,3vw,3rem)', color: 'var(--charcoal)', marginBottom: 16 }}>
            Como trabalho com você
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: 'var(--warm-gray)', maxWidth: 540, margin: '0 auto', lineHeight: 1.8 }}>
            Utilizo uma abordagem integrativa, combinando as técnicas mais eficazes da psicologia contemporânea de acordo com as necessidades de cada pessoa.
          </p>
        </AnimatedSection>

        <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {approaches.map((a, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="card-premium" style={{ display: 'flex', gap: 20, alignItems: 'flex-start', border: `1px solid rgba(214,200,184,0.5)` }}>
                <div style={{
                  minWidth: 56, height: 56, borderRadius: 14,
                  background: a.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontFamily: "'Cormorant Garamond', serif", fontSize: 13, fontWeight: 500,
                  textAlign: 'center', lineHeight: 1.2, padding: '0 6px'
                }}>
                  {a.name}
                </div>
                <div>
                  <h3 className="heading-serif" style={{ fontSize: 19, color: 'var(--charcoal)', marginBottom: 6 }}>{a.full}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'var(--warm-gray)', lineHeight: 1.7, fontWeight: 300 }}>{a.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Benefits strip */}
        <AnimatedSection delay={200}>
          <div style={{ marginTop: 40, background: 'var(--soft-brown)', borderRadius: '1.5rem', padding: '2.5rem 3rem', color: '#fff' }}>
            <h3 className="heading-serif" style={{ fontSize: 24, marginBottom: 20, textAlign: 'center' }}>Como a terapia pode ajudar você</h3>
            <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {[
                'Entender melhor como você funciona',
                'Reduzir a ansiedade e o estresse',
                'Melhorar relacionamentos e comunicação',
                'Superar traumas e padrões repetitivos',
                'Desenvolver autoestima e autoconfiança',
                'Lidar com luto, perdas e mudanças',
                'Encontrar novos direcionamentos na vida',
                'Equilibrar emoções no dia a dia',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.1)', borderRadius: 10, padding: '10px 14px' }}>
                  <Check size={15} color="rgba(255,255,255,0.8)" />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.9)', fontWeight: 300 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
