"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Check, ArrowRight, Sparkles, ChevronDown } from "lucide-react"

const features = [
  "Acesso completo a todos os módulos",
  "Tutoriais passo a passo de workflows de IA",
  "Workflows prontos para uso no ComfyUI",
  "Arquivos de projeto para download",
  "Atualizações vitalícias",
  "Templates de automação como bônus",
  "Acesso à comunidade privada",
]

const faqItems = [
  {
    question: "Preciso de experiência prévia com ferramentas de IA?",
    answer: "Não. O curso foi desenvolvido para iniciantes e guia você passo a passo por cada processo.",
  },
  {
    question: "Vou receber atualizações vitalícias?",
    answer: "Sim. Todas as atualizações futuras estão incluídas no seu acesso, sem custos adicionais.",
  },
  {
    question: "Quais ferramentas serão usadas no curso?",
    answer: "Você aprenderá workflows práticos usando ferramentas modernas de IA como ComfyUI, Stable Diffusion e sistemas de automação.",
  },
  {
    question: "Existe suporte da comunidade?",
    answer: "Sim. Os alunos têm acesso a uma comunidade privada onde podem tirar dúvidas e trocar experiências.",
  },
  {
    question: "Como funciona a garantia?",
    answer: "Oferecemos garantia de 7 dias. Se não ficar satisfeito, devolvemos 100% do seu investimento.",
  },
]

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-4 text-left text-sm font-medium text-white hover:text-primary transition-colors duration-200"
      >
        <span>{question}</span>
        <ChevronDown className={cn("h-4 w-4 text-white/70 transition-transform duration-300", isOpen && "rotate-180")} />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-40 opacity-100 pb-4" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-sm text-white/70 leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export function CourseOfferSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  return (
    <section id="purchase" className="px-4 sm:px-6 py-8 sm:py-12 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
            Acesso ao Curso
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-white">
            Comece a Criar Workflows de IA Hoje
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/70 leading-relaxed">
            Tenha acesso completo ao curso e todos os workflows prontos para usar.
          </p>
        </div>

        {/* Two Column Layout - Equal Height Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 animate-fade-in-up items-stretch" style={{ animationDelay: "200ms" }}>
          {/* LEFT - Pricing Card */}
          <div
            className={cn(
              "relative overflow-hidden rounded-2xl border border-primary/30 transition-all duration-500 flex flex-col",
              "hover:border-primary/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20",
              "group"
            )}
            style={{
              background: "linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(16, 185, 129, 0.05) 100%)",
              backdropFilter: "blur(16px)",
            }}
          >
            {/* Background radial glow behind price */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50 pointer-events-none" />

            {/* Glowing border effect on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-primary/40 via-emerald-400/20 to-primary/40 blur-sm" />
            </div>

            <div className="relative z-10 p-6 sm:p-8 flex flex-col flex-1">
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/60 bg-primary/15 px-4 py-2 font-mono text-xs text-primary font-semibold uppercase tracking-wider">
                  <Sparkles className="h-3.5 w-3.5" />
                  Oferta de Lançamento
                </span>
              </div>

              {/* Price Block */}
              <div className="text-center mb-8">
                <p className="text-white/70 text-sm font-medium mb-2 uppercase tracking-wide">Acesso Completo ao Curso</p>
                <p className="text-white/50 text-lg line-through mb-2">R$ 299</p>
                <div className="relative inline-block">
                  <span
                    className="text-5xl sm:text-6xl font-bold text-white"
                    style={{
                      textShadow: "0 0 40px rgba(16, 185, 129, 0.5), 0 0 80px rgba(16, 185, 129, 0.3)"
                    }}
                  >
                    R$ 129
                  </span>
                </div>
                <p className="text-white/70 text-sm mt-3">Pagamento único, acesso vitalício</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-white/90"
                  >
                    <span className="flex-shrink-0 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/25 text-primary">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={cn(
                  "group/btn relative w-full flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold text-white transition-all duration-300",
                  "bg-gradient-to-r from-primary via-emerald-500 to-primary bg-[length:200%_100%] bg-left hover:bg-right",
                  "shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50",
                  "hover:-translate-y-0.5 active:translate-y-0"
                )}
              >
                <span>Garantir Meu Acesso</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />

                {/* Button glow */}
                <div className="absolute inset-0 rounded-xl bg-primary/30 blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 -z-10" />
              </button>

              {/* Trust text */}
              <p className="text-center text-xs text-white/50 mt-4">
                Garantia de 7 dias ou seu dinheiro de volta
              </p>
            </div>

            {/* Bottom animated line */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-emerald-400 to-transparent transition-all duration-500 group-hover:w-full" />
          </div>

          {/* RIGHT - FAQ Card */}
          <div
            className={cn(
              "relative overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 flex flex-col",
              "hover:border-white/20"
            )}
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(0, 0, 0, 0.4) 100%)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div className="relative z-10 p-6 sm:p-8 flex flex-col flex-1">
              {/* FAQ Header */}
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">Perguntas Frequentes</h3>

              {/* FAQ Items */}
              <div className="space-y-0 flex-1">
                {faqItems.map((item, index) => (
                  <FAQItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openFAQ === index}
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
