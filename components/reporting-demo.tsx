import { CaseEvidence } from "@/components/case-evidence"
import { dashboardExample } from "@/lib/site-config"

export function ReportingDemo() {
  return (
    <figure className="overflow-hidden rounded-2xl border border-ink-panel-foreground/15 bg-ink-panel-foreground/[0.04]">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink-panel-foreground/15 px-5 py-4 md:px-8">
        <p className="text-sm font-semibold text-ink-panel-foreground">An example client dashboard</p>
        <p className="text-sm text-ink-panel-muted">Google Ads · Looker Studio</p>
      </div>
      <div className="p-4 md:p-6">
        <CaseEvidence
          src={dashboardExample.image.src}
          alt={dashboardExample.image.alt}
          caption=""
          title="Reporting example"
          aspect="report"
          tone="dark"
        />
      </div>
    </figure>
  )
}
