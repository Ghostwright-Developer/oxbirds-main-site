import { Hero } from "@/components/home/hero"
import { ProofSection } from "@/components/home/proof-section"
import { ManagementSection } from "@/components/home/management-section"
import { OwnerSection } from "@/components/home/owner-section"
import { PricingPreview } from "@/components/home/pricing-preview"
import { CreativeGallery } from "@/components/creative-gallery"
import { AdCreatives } from "@/components/ad-creatives"
import { YelpFeature } from "@/components/yelp-feature"
import { ReportingDemo } from "@/components/reporting-demo"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofSection />
      <ManagementSection />

      <section aria-labelledby="creative-title" className="border-t border-border bg-card">
        <div className="container-site flex flex-col gap-10 py-16 md:py-24">
          <Reveal>
            <SectionHeading
              id="creative-title"
              title="Creative built for the campaign."
              intro="We bring copy, images, display assets and video into the work when the campaign calls for them."
            />
          </Reveal>
          <CreativeGallery />

          <div className="flex flex-col gap-6 border-t border-border pt-10">
            <Reveal>
              <SectionHeading
                title="Display ads that get noticed."
                intro="HTML5 and animated GIF display creative built to spec for the Google Display Network and remarketing placements."
              />
            </Reveal>
            <AdCreatives />
          </div>
        </div>
      </section>

      <div className="border-t border-border pt-16 md:pt-24">
        <YelpFeature />
      </div>

      <section aria-labelledby="reporting-title" className="relative isolate overflow-hidden bg-ink-panel">
        <div aria-hidden="true" className="dark-panel-radial pointer-events-none absolute inset-0" />
        <div className="container-site relative py-16 md:py-24">
          <div className="mx-auto flex max-w-5xl flex-col gap-8">
            <Reveal>
              <SectionHeading
                id="reporting-title"
                title="See what campaign reporting looks like"
                intro="A clear view of campaign performance, supported by a monthly written update explaining what changed and what happens next."
                tone="dark"
              />
            </Reveal>
            <Reveal delay={120}>
              <ReportingDemo />
            </Reveal>
          </div>
        </div>
      </section>

      <div className="border-t border-border">
        <OwnerSection />
      </div>
      <TestimonialsSection />
      <PricingPreview />
      <CtaSection
        title="Ready to discuss your advertising"
        body="Send a short note about your business, current campaigns and what you want to improve."
      />
    </>
  )
}
