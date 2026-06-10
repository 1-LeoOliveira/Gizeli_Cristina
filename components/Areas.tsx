'use client'

import AnimatedSection from './AnimatedSection'
import { Brain, Heart, Users, Sparkles, Zap, MessageCircle, Lightbulb, AlertCircle } from 'lucide-react'

const areas = [
  { icon: Brain, title: 'Ansiedade', desc: 'Compreenda os sinais do seu corpo e encontre formas de lidar com a ansiedade no dia a dia.' },
  { icon: Heart, title: 'Depressão', desc: 'Um espaço acolhedor para atravessar momentos difíceis e reencontrar o sentido e a leveza.' },
  { icon: Users, title: 'Relacionamentos e casais', desc: 'Construa vínculos mais saudáveis, melhore a comunicação e supere crises conjugais.' },
  { icon: Sparkles, title: 'Autoestima', desc: 'Fortaleça a relação consigo mesma e desenvolva uma autoimagem mais positiva e segura.' },
  { icon: AlertCircle, title: 'Trauma e TOC', desc: 'Abordagem especializada para processar traumas e lidar com pensamentos obsessivos.' },
  { icon: Zap, title: 'Burnout', desc: 'Reconheça os limites do esgotamento e recupere o equilíbrio entre vida e trabalho.' },
  { icon: MessageCircle, title: 'Dependência emocional', desc: 'Compreenda padrões de ciúme, traição e dependência para construir vínculos mais saudáveis.' },
  { icon: Lightbulb, title: 'TDAH e transtornos', desc: 'Estratégias práticas para organização, foco e autocompreensão no dia a dia.' },
]

export default function Areas() {
  return (
    <section id="areas" className="section-padding" style={{ background: 'var(--cream)' }}>
      <div className="container-premium">
        <AnimatedSection style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: 14 }}>ÁREAS DE ATUAÇÃO</p>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(2rem,3vw,3rem)', color: 'var(--charcoal)', marginBottom: 16 }}>
            Posso ajudar você com
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: 'var(--warm-gray)', maxWidth: 520, margin: '0 auto', lineHeight: 1.8 }}>
            Cada jornada é única. Conheça as principais questões que trabalhamos juntos em um espaço seguro e acolhedor.
          </p>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }} className="four-col">
          {areas.map((area, i) => (
            <AnimatedSection key={i} delay={i * 60}>
              <div className="card-premium hover-lift" style={{ height: '100%' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--soft-brown)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(214,200,184,0.5)' }}>
                <div style={{ width: 44, height: 44, background: 'rgba(138,155,122,0.2)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <area.icon size={20} color="var(--sage)" />
                </div>
                <h3 className="heading-serif" style={{ fontSize: 18, color: 'var(--charcoal)', marginBottom: 8 }}>{area.title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'var(--warm-gray)', lineHeight: 1.65, fontWeight: 300 }}>{area.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
