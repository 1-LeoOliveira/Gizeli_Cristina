'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const faqs = [
  { q: 'Como funciona a terapia?', a: 'A terapia é um processo de autoconhecimento e transformação guiado. Em um ambiente seguro e sigiloso, você pode falar livremente sobre suas questões. Juntos, vamos compreender seus padrões emocionais e encontrar novos direcionamentos.' },
  { q: 'A terapia online funciona bem?', a: 'Sim! Estudos comprovam que a terapia online é tão eficaz quanto a presencial. Muitos pacientes relatam inclusive maior conforto por estar em seu próprio espaço. O importante é o vínculo e o compromisso com o processo.' },
  { q: 'Quanto tempo dura a sessão?', a: 'Cada sessão tem duração de 50 minutos. A frequência ideal é semanal, mas isso pode ser ajustado conforme suas necessidades e disponibilidade.' },
  { q: 'Vocês atendem convênio?', a: 'O atendimento é particular. Após cada sessão, fornecemos o recibo para que você possa solicitar reembolso junto ao seu plano de saúde, caso ele ofereça cobertura para psicoterapia.' },
  { q: 'A primeira sessão é diferente?', a: 'Não — a primeira sessão já é uma sessão completa, com escuta, intervenção e direcionamento. Você não precisa se preparar ou saber por onde começar. Pode chegar como estiver.' },
  { q: 'Qual faixa etária é atendida?', a: 'São atendidos adolescentes a partir de 13 anos, adultos até 60 anos e casais. Para adolescentes, pode haver participação dos responsáveis no início do processo conforme necessidade.' },
  { q: 'O que é a TCC?', a: 'A TCC (Terapia Cognitivo-Comportamental) é uma abordagem baseada na relação entre pensamentos, emoções e comportamentos. É uma das mais estudadas e com maior comprovação científica para ansiedade, depressão, TOC e outros transtornos.' },
  { q: 'Qual o valor da consulta?', a: 'O Conselho Regional de Psicologia não permite a divulgação de valores como forma de promoção. Entre em contato pelo WhatsApp para saber sobre valores e disponibilidade de horários.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="section-padding" style={{ background: 'var(--cream)' }}>
      <div className="container-premium">
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <AnimatedSection style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: 14 }}>FAQ</p>
            <h2 className="heading-serif" style={{ fontSize: 'clamp(2rem,3vw,3rem)', color: 'var(--charcoal)' }}>
              Dúvidas frequentes
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: 'var(--off-white)', borderRadius: 14, border: '1px solid rgba(214,200,184,0.5)', overflow: 'hidden', transition: 'box-shadow 0.2s' }}>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, color: 'var(--charcoal)' }}>{faq.q}</span>
                    <ChevronDown size={18} color="var(--soft-brown)" style={{ flexShrink: 0, transition: 'transform 0.3s', transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  </button>
                  <div style={{ maxHeight: open === i ? 300 : 0, overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'var(--warm-gray)', lineHeight: 1.8, padding: '0 24px 20px', fontWeight: 300 }}>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
