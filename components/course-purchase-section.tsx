"use client"

import { cn } from "@/lib/utils"
import { Check, ArrowRight, Sparkles } from "lucide-react"

const features = [
  "Acesso completo a todos os módulos do curso",
  "Tutoriais passo a passo de workflows de IA",
  "Workflows prontos para uso no ComfyUI",
  "Arquivos de projeto e assets inclusos",
  "Atualizações vitalícias",
  "Acesso à comunidade privada",
  "Templates de automação como bônus",
]

export function CoursePurchaseSection() {
  return (
    <section id="purchase" className="px-4 sm:px-6 py-12 sm:py-16 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
            Acesso ao Curso
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Comece a Criar com Workflows de IA
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
            Tenha acesso completo ao curso e todos os workflows prontos para usar.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <div
            className={cn(
              "relative w-full max-w-lg overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-8 sm:p-10 transition-all duration-500",
              "hover:border-primary/50 hover:bg-card/60 hover:-translate-y-1 hover:shadow-2xl",
              "glass"
            )}
          >
            {/* Glow effect */}
            <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 z-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-emerald-400/10 to-transparent blur-2xl" />
            </div>

            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-primary/50 via-emerald-400/30 to-primary/50 blur-sm" />
            </div>

            <div className="relative z-10">
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-1.5 font-mono text-xs text-primary">
                  <Sparkles className="h-3 w-3" />
                  Desconto de Lançamento
                </span>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <p className="text-muted-foreground text-sm line-through mb-1">R$ 997</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl sm:text-6xl font-bold text-gradient">R$ 297</span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">Pagamento único, acesso vitalício</p>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="flex-shrink-0 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={cn(
                  "group relative w-full flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold text-primary-foreground transition-all duration-300",
                  "bg-gradient-to-r from-primary via-emerald-500 to-primary bg-[length:200%_100%] bg-left hover:bg-right",
                  "shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40",
                  "hover:-translate-y-0.5 active:translate-y-0"
                )}
              >
                <span>Garantir Meu Acesso</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                
                {/* Button glow */}
                <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </button>

              {/* Trust text */}
              <p className="text-center text-xs text-muted-foreground mt-4">
                Garantia de 7 dias ou seu dinheiro de volta
              </p>
            </div>

            {/* Bottom animated line */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-emerald-400 to-transparent transition-all duration-500 group-hover:w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
