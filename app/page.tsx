import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ValueProposition from '@/components/ValueProposition'
import TechStack from '@/components/TechStack'
import CTASection from '@/components/CTASection'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <Services />
      <TechStack />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  )
}
