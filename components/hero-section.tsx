"use client"

import { useEffect, useState, useRef } from "react"

const roles = [
  "explorar modelos",
  "criar workflows",
  "ter qualidade",
  "criar personagens",
  "criar influencers",
]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const targetText = roles[currentRole]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < targetText.length) {
          setDisplayText(targetText.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section className="relative overflow-x-hidden px-4 pt-20 pb-12 sm:px-6 sm:pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:min-h-[72vh] lg:grid-cols-[1fr_1fr] lg:items-center">
          {/* LEFT */}
          <div className="space-y-10">
            <div className="space-y-4 animate-fade-in-up">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
                Busque a sua liberdade
              </p>

              <h1 className="max-w-3xl text-3xl font-bold leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
                <span className="block text-foreground">Descubra como</span>
                <span className="typing-cursor mt-2 block bg-gradient-to-l from-primary/50 to-accent bg-clip-text text-transparent">
                  {displayText}
                </span>
              </h1>
            </div>

            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground animate-fade-in-up stagger-2 sm:text-lg">
              <span className="font-medium text-foreground">
                A inteligência artificial mudou a forma como conteúdos são criados
              </span>
              . Aqui você vai aprender a configurar ambientes, desenvolver
              workflows capazes de aprimorar e gerar imagens e vídeos, criar seu
              próprio influenciador digital e transformar modelos generativos em
              verdadeiras
              <span className="font-medium text-foreground">
                {" "}máquinas de produção de conteúdo
              </span>
              .
            </p>

            <div className="flex flex-col gap-4 animate-fade-in-up stagger-3 sm:flex-row">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-lg border border-primary bg-primary/10 px-7 py-4 font-mono text-sm text-primary transition-all duration-500 hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
              >
                <span className="relative z-10">Explore as seções</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
                <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" />
              </a>
            </div>
          </div>

          {/* RIGHT - desktop only */}
          <div className="relative hidden lg:block animate-scale-in stagger-4">
            <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/50 p-4 shadow-2xl backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
                <div className="h-[70%] w-[70%] rounded-full bg-primary/10 blur-3xl" />
              </div>

              {/* top bar */}
              <div className="mb-4 flex items-center justify-between rounded-xl border border-border/60 bg-background/40 px-4 py-2">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                </div>

                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  workflow://stable-pipeline
                </div>
              </div>

              {/* terminal canvas */}
              <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-black/40 p-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_20%,transparent_80%,rgba(255,255,255,0.02))]" />

                <div className="relative overflow-hidden rounded-xl border border-primary/10 bg-black/35 p-4">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100%_24px] opacity-30" />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_100%] opacity-20" />

                  {/* SVG Connections Layer - behind nodes */}
                  <div className="absolute inset-0 z-0">
                    <NodeConnections />
                  </div>

                  <div className="relative z-10 grid min-h-[300px] grid-cols-4 grid-rows-2 gap-2">
                    <div className="self-start" data-node="checkpoint">
                      <WorkflowNode
                        header="model"
                        title="Checkpoint Loader"
                        subtitle="model.safetensors"
                        tone="emerald"
                      />
                    </div>

                    <div className="row-span-2 self-center" data-node="lora">
                      <WorkflowNode
                        header="adapter"
                        title="Load LoRA"
                        subtitle="character_style_v2"
                        tone="amber"
                      />
                    </div>

                    <div className="self-start -translate-x-21" data-node="ksampler">
                      <WorkflowNode
                        header="sampling"
                        title="KSampler"
                        subtitle="steps: 26 · cfg: 4.5"
                        tone="primary"
                      />
                    </div>

                    <div className="self-start -ml-9" data-node="save">
                      <WorkflowNode
                        header="output"
                        title="Save Image"
                        subtitle="final_image.png"
                        tone="rose"
                        preview
                      />
                    </div>

                    <div className="self-end" data-node="clip">
                      <WorkflowNode
                        header="conditioning"
                        title="CLIP Text Encode"
                        subtitle="positive/negative"
                        tone="violet"
                      />
                    </div>

                    <div className="col-start-3 self-end" data-node="vae">
                      <WorkflowNode
                        header="decode"
                        title="VAE Decode"
                        subtitle="latent → image"
                        tone="cyan"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function NodeConnections() {
  // Single curved path passing THROUGH all 6 nodes:
  // Order: Model (Checkpoint) -> Adapter (LoRA) -> Conditioning (CLIP) -> Sampling (KSampler) -> Decode (VAE) -> Output (Save)
  // Node positions in grid:
  // - Checkpoint (col1, row1): ~75, ~55
  // - LoRA (col2, row1-2 center): ~190, ~150
  // - CLIP (col1, row2): ~75, ~250
  // - KSampler (col3, row1): ~310, ~55
  // - VAE (col3, row2): ~340, ~250
  // - Save (col4, row1): ~500, ~70
  
  // Path: Model -> Adapter -> Conditioning -> Sampling -> Decode -> Output
  const mainPath = `
    M 75 55
    C 120 55, 150 100, 190 150
    C 230 200, 150 220, 75 250
    C 0 280, 200 300, 310 55
    C 350 -50, 400 200, 340 250
    C 300 280, 450 200, 500 70
  `

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
      viewBox="0 0 580 300"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.2" />
          <stop offset="15%" stopColor="#fbbf24" stopOpacity="0.2" />
          <stop offset="30%" stopColor="#a78bfa" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#22c55e" stopOpacity="0.2" />
          <stop offset="70%" stopColor="#22d3ee" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#fb7185" stopOpacity="0.2" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Glow layer */}
      <path
        d={mainPath}
        fill="none"
        stroke="url(#connectionGradient)"
        strokeWidth="8"
        strokeLinecap="round"
        opacity="0.15"
        filter="url(#glow)"
      />
      
      {/* Main path */}
      <path
        d={mainPath}
        fill="none"
        stroke="url(#connectionGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Animated dot */}
      <circle r="3" fill="#22c55e" opacity="0.7" filter="url(#glow)">
        <animateMotion
          dur="10s"
          repeatCount="indefinite"
          path={mainPath}
        />
      </circle>
    </svg>
  )
}

function WorkflowNode({
  header,
  title,
  subtitle,
  tone,
  preview = false,
}: {
  header: string
  title: string
  subtitle: string
  tone: "emerald" | "violet" | "amber" | "primary" | "cyan" | "rose"
  preview?: boolean
}) {
  const toneMap = {
    emerald: {
      border: "border-emerald-400/30",
      bg: "bg-emerald-500/10",
      glow: "shadow-[0_0_18px_rgba(16,185,129,0.08)]",
      text: "text-emerald-300",
    },
    violet: {
      border: "border-violet-400/30",
      bg: "bg-violet-500/10",
      glow: "shadow-[0_0_18px_rgba(168,85,247,0.08)]",
      text: "text-violet-300",
    },
    amber: {
      border: "border-amber-400/30",
      bg: "bg-amber-500/10",
      glow: "shadow-[0_0_18px_rgba(251,191,36,0.08)]",
      text: "text-amber-300",
    },
    primary: {
      border: "border-primary/30",
      bg: "bg-primary/10",
      glow: "shadow-[0_0_18px_rgba(34,197,94,0.08)]",
      text: "text-primary",
    },
    cyan: {
      border: "border-cyan-400/30",
      bg: "bg-cyan-500/10",
      glow: "shadow-[0_0_18px_rgba(34,211,238,0.08)]",
      text: "text-cyan-300",
    },
    rose: {
      border: "border-rose-400/30",
      bg: "bg-rose-500/10",
      glow: "shadow-[0_0_18px_rgba(244,63,94,0.08)]",
      text: "text-rose-300",
    },
  }

  const t = toneMap[tone]

  return (
    <div className={`relative w-full min-w-[150px] rounded-xl border ${t.border} ${t.bg} ${t.glow} p-3`}>
      <div className="mb-2 flex items-start justify-between gap-2">
        <div className={`min-w-0 font-mono text-[8px] uppercase tracking-[0.18em] ${t.text}`}>
          {header}
        </div>

        <div className="shrink-0 rounded border border-white/10 bg-black/20 px-1.5 py-0.5 font-mono text-[7px] uppercase tracking-[0.14em] text-white/60">
          node
        </div>
      </div>

      <div className="text-[11px] font-semibold leading-snug text-foreground sm:text-xs">
        {title}
      </div>

      <div className="mt-1 text-[10px] leading-snug text-muted-foreground">
        {subtitle}
      </div>

      {preview && (
        <div className="mt-3 rounded-lg border border-white/10 bg-black/25 p-2">
          <div className="mx-auto aspect-square w-full max-w-[56px] overflow-hidden rounded-md border border-white/10 bg-black">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=120&q=80"
              alt="Preview"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  )
}
