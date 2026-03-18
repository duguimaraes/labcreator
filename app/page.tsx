import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CourseModulesSection } from "@/components/course-modules-section"
import { WorkflowShowcase } from "@/components/workflow-showcase"
import { InfluencerShowcase } from "@/components/influencer-showcase"
import { CourseOfferSection } from "@/components/course-offer-section"
import { Footer } from "@/components/footer"
import { CursorGlow } from "@/components/cursor-glow"
import { generateWebsiteStructuredData, generatePersonStructuredData } from "@/lib/structured-data"

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eindev.ir'
  const websiteStructuredData = generateWebsiteStructuredData(baseUrl)
  const personStructuredData = generatePersonStructuredData()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
      />
      <main className="relative min-h-screen overflow-hidden scanlines">
        <CursorGlow />
        <div className="relative z-10">
          <Header />
          <HeroSection />
          <CourseModulesSection />
          <WorkflowShowcase />
          <InfluencerShowcase />
          <CourseOfferSection />
          <Footer />
        </div>
      </main>
    </>
  )
}
