import { CaseEvidence } from "@/components/case-evidence"
import { CtaSection } from "@/components/cta-section"
import { Reveal } from "@/components/reveal"
import { PageIntro } from "@/components/section-heading"
import { TestimonialsSection } from "@/components/testimonials-section"
import { pageMetadata } from "@/lib/page-metadata"
import { results } from "@/lib/site-config"

export const metadata = pageMetadata(
  "Results",
  "Reported outcomes from Google Ads and Meta accounts managed by oxbird, across engraving, barbering, dental and legal businesses.",
  "/results",
)

export default function ResultsPage() {
  return (
    <>
      <section className="container-site pb-12 pt-12 md:pb-16 md:pt-20">
        <PageIntro
          eyebrow="Our work"
          title="What changed in the accounts we managed."
          intro="A closer look at campaign results across different businesses."
        />
      </section>

      <section aria-label="Account results" className="container-site pb-16 md:pb-24">
        <div className="flex flex-col">
          {results.map((r) => (
            <Reveal key={r.id}>
              <article
                id={`case-${r.id}`}
                className="grid scroll-mt-24 gap-8 border-b border-border py-12 first:border-t-2 first:border-t-ink md:grid-cols-12 md:gap-8 md:py-16"
              >
                <div className="flex flex-col gap-4 md:col-span-5">
                  <p className="text-sm font-semibold text-accent-foreground">
                    {r.platform} · {r.descriptor}
                  </p>
                  <h2 className="text-balance text-[24px] font-bold leading-tight tracking-[-0.02em] text-ink md:text-[28px]">
                    {r.heading}
                  </h2>
                  <p className="max-w-xl text-pretty text-[17px] leading-relaxed text-muted-foreground">
                    {r.narrative}
                  </p>
                </div>
                <div className="md:col-span-7">
                  <CaseEvidence src={r.image.src} alt={r.image.alt} caption={r.sourceCaption} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
          Results vary with the account, business, competition, budget and starting point.
        </p>
      </section>

      <TestimonialsSection />

      <CtaSection
        title="Let's discuss your starting point."
        body="We'll review your goals and current advertising before recommending the work."
        showCall={false}
      />
    </>
  )
}
