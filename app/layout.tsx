import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gizeli Cristina | Psicóloga CRP 04/55292',
  description: 'Psicoterapia com abordagem TCC, ACT e Terapia de Esquemas para adolescentes, adultos e casais. Atendimento online e presencial em Nova Serrana - MG.',
  keywords: 'psicóloga, TCC, terapia, Nova Serrana, online, ansiedade, casais, trauma, TOC',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Gizeli Cristina | Psicóloga',
    description: 'Um espaço de escuta, direcionamento e transformação emocional.',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 900,
        alt: 'Gizeli Cristina - Psicóloga Clínica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gizeli Cristina | Psicóloga',
    description: 'Um espaço de escuta, direcionamento e transformação emocional.',
    images: ['/logo.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
