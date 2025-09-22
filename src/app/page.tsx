import { HeroSection } from "@/components/features/hero-section"
import { FeaturedVehicles } from "@/components/features/featured-vehicles"
import { ServicesSection } from "@/components/features/services-section"
import { TestimonialsSection } from "@/components/features/testimonials-section"
import { ContactCTA } from "@/components/features/contact-cta"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedVehicles />
      <ServicesSection />
      <TestimonialsSection />
      <ContactCTA />
    </>
  )
}
