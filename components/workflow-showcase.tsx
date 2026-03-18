"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { ExternalLink } from "lucide-react"
import { BeforeAfterSlider } from "@/components/before-after-slider"

interface ComparisonItem {
  before: string
  after: string
}

interface WorkflowItem {
  id: number
  title: string
  description: string
  gif?: string
  comparisons?: ComparisonItem[]
  link?: string
}

const workflows: WorkflowItem[] = [
  {
    id: 1,
    title: "IMAGE TO VIDEO",
    description: "Crie cenas profissionais a partir de uma única foto.",
    gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzVsa2pjbXp4M3VmdnpkMWx2dnppM3hra2NndzhpbnppZDQ1cWh2ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Abaae571fXEFpkqvsf/giphy.gif",
  },
  {
    id: 2,
    title: "AUDIO & LIPSYNC",
    description: "Faça sua imagem falar, com sincronização perfeita.",
    gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExODl6OWxmZXE4YTQ0ZXZnaHVpeG14cnRlZGFrenY3eDAxcjZka2xoYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EyXbfuLLWMGQyGPwUA/giphy.gif",
  },
  {
    id: 3,
    title: "MOTION CAPTURE",
    description: "Capture o movimento e troque o protagonismo.",
    gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMG00MHpuazJqejBrY2gwM3FmYWI1cWs2MzA4ZWN2YnJ4cms2NnpmaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/csLtrUO7EhzlMcIAhG/giphy.gif",
  },
  {
    id: 4,
    title: "PROMPTS PROFISSIONAIS",
    description: "Crie imagens com qualidade cinematográfica e VFX.",
    gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHZjbmtkZ3hpNTJwazYxZnc2NjFvNHdjdTZndDNvNzF4ZjJ0N2loYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bFAisixDEogd1y2WNP/giphy.gif",
  },
  {
    id: 5,
    title: "PERSONAGENS CONSISTENTES",
    description: "Gere personagens estilizados de forma rápida e fácil.",
    comparisons: [
      {
        before: "https://i.ibb.co/bf2GyNJ/01luantes.jpg",
        after: "https://i.ibb.co/20CWBwnk/01ludepois.jpg",
      },
      {
        before: "https://i.ibb.co/WNHxWbvr/01duantes.jpg",
        after: "https://i.ibb.co/MksTk6CT/01dudepois.jpg",
      },
      {
        before: "https://i.ibb.co/rR1qxD7W/02luantes.jpg",
        after: "https://i.ibb.co/GQ5qMbg2/02ludepois.jpg",
      },
    ],
  },
  {
    id: 6,
    title: "MUDANÇA DE VESTUÁRIO",
    description: "Prove looks em segundos, acelere seu e-commerce.",
    comparisons: [
      {
        before: "https://i.ibb.co/XfJt7fsc/01slantes.png",
        after: "https://i.ibb.co/nsF8zT4h/01sldepois.png",
      },
      {
        before: "https://i.ibb.co/XfJt7fsc/01slantes.png",
        after: "https://i.ibb.co/nsF8zT4h/01sldepois.png",
      },
      {
        before: "https://i.ibb.co/XfJt7fsc/01slantes.png",
        after: "https://i.ibb.co/nsF8zT4h/01sldepois.png",
      },
    ],
  },
]

function WorkflowCard({ workflow }: { workflow: WorkflowItem }) {
  const isComparison = (workflow.id === 5 || workflow.id === 6) && Boolean(workflow.comparisons?.length)
  const isVertical = workflow.id >= 4

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card/40 p-6 transition-all duration-500",
        "hover:-translate-y-1 hover:border-primary/40 hover:bg-card/60 hover:shadow-xl"
      )}
    >
      <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-emerald-400/20 to-green-500/10 blur-xl" />
      </div>

      <div className="relative z-10 mb-4 text-center">
        <h3 className="text-lg font-bold tracking-tight text-foreground uppercase sm:text-xl lg:text-2xl text-center">
          {workflow.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {workflow.description}
        </p>
      </div>

      <div
        className={cn(
          "relative mt-auto w-full overflow-visible rounded-lg border border-primary/20 bg-background/50 transition-all duration-500 group-hover:border-primary/40",
          isVertical
            ? "mx-auto aspect-[11/16] max-w-[220px] sm:max-w-[240px] lg:max-w-[250px]"
            : "aspect-[4/3] overflow-hidden"
        )}
      >
        {isComparison ? (
          <BeforeAfterSlider
            items={workflow.comparisons!}
            alt={workflow.title}
          />
        ) : (
          <div className="relative h-full w-full overflow-hidden rounded-lg">
            <Image
              src={workflow.gif!}
              alt={workflow.title}
              fill
              unoptimized
              className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />

            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-[linear-gradient(transparent,rgba(255,255,255,0.08),transparent)] animate-[scan_2.5s_linear_infinite]" />
            </div>
          </div>
        )}

        {workflow.link && (
          <a
            href={workflow.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "absolute bottom-3 right-3 z-30 flex items-center gap-2 rounded-lg border border-primary/50 bg-background/90 px-3 py-1.5 font-mono text-xs text-primary backdrop-blur-sm",
              "translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
              "hover:bg-primary hover:text-primary-foreground"
            )}
          >
            <ExternalLink className="h-3 w-3" />
            Ver mais
          </a>
        )}
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-primary/80 to-transparent transition-all duration-500 group-hover:w-full" />
    </article>
  )
}

export function WorkflowShowcase() {
  return (
    <section id="workflows" className="px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 space-y-3 text-center animate-fade-in-up sm:mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary sm:tracking-[0.35em]">
            Demonstrações
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Workflows em Ação
          </h2>

          <p className="mx-auto max-w-2xl text-muted-foreground">
            Veja como os workflows funcionam na prática.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workflows.map((workflow, index) => (
            <div
              key={workflow.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <WorkflowCard workflow={workflow} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}