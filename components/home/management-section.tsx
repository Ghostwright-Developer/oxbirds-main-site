import { TextLink } from "@/components/button-link"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { managementPoints } from "@/lib/site-config"

export function ManagementSection() {
  return (
    <section aria-labelledby="management-title" className="container-site py-16 md:py-24">
      <Reveal>
        <SectionHeading
          id="management-title"
          title="The work continues after the campaign launches."
          intro="Advertising needs ongoing attention. We review where your budget goes, check what the traffic becomes and make changes with your business goals in view."
        />
      </Reveal>
      <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
        {managementPoints.map((p, i) => (
          <Reveal key={p.title} delay={i * 90} className="h-full">
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-[0_18px_48px_rgba(16,38,30,0.06)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_20px_48px_rgba(96,175,109,0.14)] motion-reduce:transform-none">
              <span aria-hidden="true" className="h-1 w-10 rounded-full bg-primary" />
              <h3 className="text-xl font-semibold text-ink">{p.title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-base font-medium text-ink">Major strategy changes are discussed with you before they are made.</p>
        <TextLink href="/services">Explore our services</TextLink>
      </div>
    </section>
  )
}
