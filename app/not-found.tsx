import { ButtonLink } from "@/components/button-link"

export default function NotFound() {
  return (
    <section className="container-site flex flex-col gap-6 py-24 md:py-32">
      <p className="eyebrow">Page not found</p>
      <h1 className="text-balance text-[36px] font-bold leading-[1.08] tracking-[-0.025em] text-ink md:text-[56px]">
        {"We couldn't find that page."}
      </h1>
      <p className="max-w-xl text-[17px] leading-relaxed text-muted-foreground">
        The link may be out of date. Head back to the homepage or get in touch.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/">Back to homepage</ButtonLink>
        <ButtonLink href="/contact" variant="outline">
          Contact us
        </ButtonLink>
      </div>
    </section>
  )
}
