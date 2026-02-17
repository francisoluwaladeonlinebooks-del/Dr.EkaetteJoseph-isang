import { HeroSection } from "@/components/hero-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ExpertiseSection />
      <ServicesSection />
      <ContactSection />
    </main>
  )
}
