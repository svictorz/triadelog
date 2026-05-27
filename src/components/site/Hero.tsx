import { ArrowUpRight, Check, CircleCheck } from "lucide-react";
import truck from "@/assets/hero-truck.png";

export function Hero() {
  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute inset-0 hero-radial-left pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Coluna esquerda: copy + CTA */}
          <div className="premium-fade-in">
            <h1
              className="text-[38px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.05] font-bold text-foreground tracking-[-0.03em]"
              style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
            >
              Frete não é o seu <span className="text-primary">problema.</span><br />
              É a nossa <span className="text-primary">especialidade.</span>
            </h1>
            <p className="mt-5 text-[15px] md:text-[18px] text-muted-foreground leading-[1.6] max-w-md">
              Você cuida do seu negócio. A gente garante que a carga chega. Afinal, prazo é compromisso.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contato"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-semibold text-background bg-primary hover:bg-primary/90 transition-colors duration-200"
              >
                Solicitar Cotação
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Coluna direita: caminhão + cards — desktop */}
          <div
            className="hidden md:block relative premium-fade-in py-16"
            style={{ animationDelay: "150ms" }}
          >
            {/* Status do Envio — topo esquerdo, atrás do caminhão */}
            <div className="absolute left-0 top-0 z-[1] glass rounded-xl p-4 w-[200px] text-[12px] shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-foreground font-medium">Status do Envio</span>
              </div>
              <div className="h-px bg-border mb-3" />
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-foreground">
                  <CircleCheck className="w-3.5 h-3.5 text-primary shrink-0" />Coleta concluída
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CircleCheck className="w-3.5 h-3.5 text-primary shrink-0" />Em rota
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-3.5 h-3.5 rounded-full border border-muted-foreground/40 shrink-0 inline-block" />NF emitida
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-3.5 h-3.5 rounded-full border border-muted-foreground/40 shrink-0 inline-block" />Entregue
                </li>
              </ul>
            </div>

            {/* Caminhão — centro */}
            <div className="relative z-[2] flex items-center justify-center">
              <img
                src={truck}
                alt="Caminhão JCN Logística"
                loading="eager"
                fetchPriority="high"
                className="w-[170%] object-contain"
                style={{ filter: "drop-shadow(0 12px 48px rgba(56,189,248,0.2))" }}
              />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-8 bg-primary/15 blur-2xl rounded-full" />
            </div>

            {/* Carga Faturada — bottom-left */}
            <div className="absolute left-0 bottom-0 z-[1] glass rounded-xl p-4 w-[190px] text-[12px] shadow-xl">
              <div className="flex items-center gap-2 mb-3 text-foreground">
                <CircleCheck className="w-4 h-4 text-primary shrink-0" />
                <span className="font-medium">Carga Faturada</span>
              </div>
              <div className="text-foreground text-[28px] font-light tracking-tight leading-none">R$ 4.500</div>
              <div className="mt-4 flex items-center justify-between text-muted-foreground">
                <span>Vencimento</span>
                <span className="text-foreground">Ontem</span>
              </div>
              <div className="mt-1 text-muted-foreground">XY-789012</div>
            </div>

            {/* Carga Entregue — pill bottom-right */}
            <div className="absolute right-0 bottom-[30%] z-[3] glass rounded-full pl-2 pr-4 py-1.5 flex items-center gap-2 text-[12px] shadow-lg">
              <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-primary-foreground" />
              </span>
              <span className="text-foreground font-medium whitespace-nowrap">Carga Entregue</span>
            </div>
          </div>

          {/* Coluna direita — versão mobile simplificada */}
          <div className="md:hidden flex flex-col items-center gap-6 premium-fade-in" style={{ animationDelay: "150ms" }}>
            {/* Caminhão menor sem overflow */}
            <div className="relative w-full flex justify-center">
              <img
                src={truck}
                alt="Caminhão JCN Logística"
                loading="eager"
                fetchPriority="high"
                className="w-full max-w-[340px] object-contain"
                style={{ filter: "drop-shadow(0 8px 32px rgba(56,189,248,0.2))" }}
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-primary/15 blur-2xl rounded-full" />
            </div>

            {/* Cards lado a lado (mini) */}
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="glass rounded-xl p-3 text-[11px]">
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-5 h-5 rounded bg-primary flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-foreground font-medium">Status do Envio</span>
                </div>
                <ul className="space-y-1">
                  <li className="flex items-center gap-1.5 text-foreground">
                    <CircleCheck className="w-3 h-3 text-primary shrink-0" />Coleta concluída
                  </li>
                  <li className="flex items-center gap-1.5 text-foreground">
                    <CircleCheck className="w-3 h-3 text-primary shrink-0" />Em rota
                  </li>
                  <li className="flex items-center gap-1.5 text-muted-foreground">
                    <span className="w-3 h-3 rounded-full border border-muted-foreground/40 shrink-0 inline-block" />NF emitida
                  </li>
                </ul>
              </div>

              <div className="glass rounded-xl p-3 text-[11px]">
                <div className="flex items-center gap-1.5 mb-2 text-foreground">
                  <CircleCheck className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="font-medium">Carga Faturada</span>
                </div>
                <div className="text-foreground text-[22px] font-light tracking-tight leading-none">R$ 4.500</div>
                <div className="mt-3 flex items-center justify-between text-muted-foreground text-[10px]">
                  <span>Vencimento</span>
                  <span className="text-foreground">Ontem</span>
                </div>
                <div className="mt-1 flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-primary-foreground" />
                  </span>
                  <span className="text-foreground font-medium">Carga Entregue</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
