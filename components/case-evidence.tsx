"use client"

import { useEffect, useId, useRef } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

export function CaseEvidence({
  src,
  alt,
  caption,
  title = "Campaign evidence",
  aspect = "wide",
  tone = "light",
}: {
  src: string
  alt: string
  caption: string
  title?: string
  aspect?: "wide" | "report"
  tone?: "light" | "dark"
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const onCancel = () => dialog.close()
    dialog.addEventListener("cancel", onCancel)
    return () => dialog.removeEventListener("cancel", onCancel)
  }, [])

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className={cn(
          "group relative block w-full overflow-hidden rounded-xl text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
          tone === "dark" ? "border border-ink-panel-foreground/15 bg-ink-panel-foreground/[0.04]" : "border border-border bg-card",
        )}
      >
        <span className={aspect === "report" ? "relative block aspect-[4/3] w-full" : "relative block aspect-[1736/906] w-full"}>
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 70vw, 90vw"
            className="object-contain"
          />
        </span>
        <span className="pointer-events-none absolute bottom-3 right-3 rounded-md bg-ink-panel/85 px-2.5 py-1 text-xs font-semibold text-ink-panel-foreground transition-[background-color,transform] duration-200 group-hover:-translate-y-0.5 group-hover:bg-ink-panel">
          View evidence
        </span>
      </button>
      {caption && (
        <p className={cn("mt-2 text-[13px] leading-relaxed", tone === "dark" ? "text-ink-panel-muted" : "text-muted-foreground")}>
          {caption}
        </p>
      )}

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="m-auto max-h-[90vh] w-[min(92vw,1100px)] rounded-2xl border border-border bg-card p-0 backdrop:bg-ink-panel/70"
      >
        <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-3">
          <p id={titleId} className="text-sm font-semibold text-ink">
            {title}
          </p>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close"
            className="inline-flex size-9 items-center justify-center rounded-lg text-ink hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>
        <div className="max-h-[calc(90vh-7rem)] overflow-auto p-5">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={1736}
            height={906}
            sizes="92vw"
            className="h-auto w-full rounded-lg"
          />
        </div>
      </dialog>
    </>
  )
}
