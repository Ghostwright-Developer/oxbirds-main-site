import { ChevronDown } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function FaqList({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="flex flex-col border-t-2 border-ink">
      {items.map((item, i) => (
        <Reveal key={item.q} delay={i * 60}>
          <details className="group border-b border-border">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
              {item.q}
              <ChevronDown
                className="size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="max-w-2xl pb-6 text-base leading-relaxed text-muted-foreground">{item.a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  )
}
