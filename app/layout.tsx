import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gizeli Cristina | Psicóloga CRP 04/55292',
  description: 'Psicoterapia com abordagem TCC, ACT e Terapia de Esquemas para adolescentes, adultos e casais. Atendimento online e presencial em Nova Serrana - MG.',
  keywords: 'psicóloga, TCC, terapia, Nova Serrana, online, ansiedade, casais, trauma, TOC',
  openGraph: {
    title: 'Gizeli Cristina | Psicóloga',
    description: 'Um espaço de escuta, direcionamento e transformação emocional.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
