import { HeroSection } from "@/app/(pages)/(root)/_components/hero-section"
import { NumbersSection } from "@/app/(pages)/(root)/_components/numbers-section"
import { OurTeamSection } from "@/app/(pages)/(root)/_components/our-team-section"
import { DepartmentsSection } from "@/app/(pages)/(root)/_components/departments-section"
import { ServicesSection } from "@/app/(pages)/(root)/_components/services-section"
import { TestimonialsSection } from "@/app/(pages)/(root)/_components/testimonials-section"
import { FaqSection } from "@/app/(pages)/(root)/_components/faq-section"
import { HireSection } from "@/app/(pages)/(root)/_components/hire-section"
import { BlogSection } from "@/app/(pages)/(root)/_components/blog-section"
import { Footer } from "@/app/_components/common/footer"

const HomePage = () => {
  return (
    <main>
        <HeroSection />
        <NumbersSection />
        <DepartmentsSection />
        <OurTeamSection />
        <ServicesSection />
        <TestimonialsSection />
        <FaqSection />
        <HireSection />
        <BlogSection />
        <Footer />
    </main>
  )
}

export default HomePage