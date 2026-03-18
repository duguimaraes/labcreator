"use client"

import { cn } from "@/lib/utils"
import { BookOpen, Video, Wand2, Users, Layers, Sparkles, Rocket } from "lucide-react"

interface Module {
  number: string
  title: string
  description: string
  icon: React.ReactNode
}

const modules: Module[] = [
  {
    number: "01",
    title: "Fundamentos da IA Generativa",
    description: "Entenda os conceitos essenciais por trás das ferramentas de IA, como funcionam os modelos de difusão e os principais componentes.",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    number: "02",
    title: "Criação de Personagens Consistentes",
    description: "Aprenda a criar influencers virtuais e personagens com identidade visual consistente que podem ser usados em múltiplos cenários.",
    icon: <Users className="h-5 w-5" />,
  },
  {
    number: "03",
    title: "Image to Video Avançado",
    description: "Domine as técnicas de transformar imagens estáticas em vídeos cinematográficos com movimentos naturais e expressivos.",
    icon: <Video className="h-5 w-5" />,
  },
  {
    number: "04",
    title: "Lipsync e Dublagem com IA",
    description: "Faça seus personagens falarem com sincronização labial perfeita, usando vozes clonadas ou geradas por inteligência artificial.",
    icon: <Wand2 className="h-5 w-5" />,
  },
  {
    number: "05",
    title: "Workflows de Produção",
    description: "Monte pipelines completos de criação de conteúdo, integrando múltiplas ferramentas de IA em um fluxo de trabalho eficiente.",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    number: "06",
    title: "Efeitos Especiais e Pós-Produção",
    description: "Aprenda técnicas avançadas de composição, correção de cor e efeitos visuais para elevar a qualidade das suas criações.",
    icon: <Sparkles className="h-5 w-5" />,
  },
]

function ModuleCard({ module, index }: { module: Module; index: number }) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card/40 p-6 transition-all duration-500",
        "hover:border-primary/40 hover:bg-card/60 hover:-translate-y-1 hover:shadow-xl"
      )}
    >
      {/* Glow tecnológico */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-emerald-400/20 to-green-500/10 blur-xl" />
      </div>

      {/* Module number badge */}
      <div className="relative z-10 mb-4 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
          Módulo {module.number}
        </span>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-background/50 text-muted-foreground transition-colors duration-300 group-hover:border-primary/40 group-hover:text-primary">
          {module.icon}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col">
        <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground sm:text-xl">
          {module.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {module.description}
        </p>
      </div>

      {/* Linha inferior animada */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-primary/80 to-transparent transition-all duration-500 group-hover:w-full" />
    </article>
  )
}

export function CourseModulesSection() {
  return (
    <section id="modules" className="px-4 sm:px-6 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
            Conteúdo do Curso
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            O que você vai aprender
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Uma jornada completa do zero ao avançado em criação de conteúdo com inteligência artificial. Confira os módulos que vão transformar suas habilidades.
          </p>
        </div>

        {/* Grid de módulos */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => (
            <div
              key={module.number}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <ModuleCard module={module} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
