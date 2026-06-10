import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Areas from '@/components/Areas'
import Approach from '@/components/Approach'
import HowItWorks from '@/components/HowItWorks'
import FAQ from '@/components/FAQ'
import Reviews from '@/components/Reviews'
import FinalCTA from '@/components/FinalCTA'
import { Footer, FloatingWhatsApp } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Areas />
        <Approach />
        <HowItWorks />
        <FAQ />
        <Reviews />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
