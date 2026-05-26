import { ArrowUpRight, Check, CircleCheck } from "lucide-react";
import truck from "@/assets/hero-truck.jpg";

export function Hero() {
  return (
    <section className="relative pt-40 pb-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute inset-0 hero-radial pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 text-center premium-fade-in">
        <h1 className="text-[42px] md:text-[68px] leading-[1.05] font-light text-foreground max-w-5xl mx-auto">
          Transporte de alta performance desenhado<br className="hidden md:block"/> para a cadeia logística brasileira.
        </h1>
        <p className="mt-7 text-[15px] md:text-[16px] text-muted-foreground max-w-2xl mx-auto leading-[1.55]">
          Monitore, gerencie e otimize suas operações de ponta a ponta com visibilidade
          em tempo real, conformidade total de frete e uma malha de entregas conectada
          por inteligência operacional.
        </p>
        <div className="mt-9 flex items-center justify-center gap-3">
          <a href="#contato" className="inline-flex items-center gap-1.5 bg-white text-background text-[14px] font-medium pl-5 pr-1 py-1 rounded-full hover:bg-white/90 transition">
            Agendar Demonstração
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
          <a href="#contato" className="inline-flex items-center text-[14px] text-foreground px-5 py-2.5 rounded-full border border-border hover:bg-surface transition">
            Entrar no Sistema
          </a>
        </div>
      </div>

      <div className="relative mt-16 max-w-6xl mx-auto px-4">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
          <img
            src={truck}
            alt="Caminhão JCN em operação noturna"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

          {/* floating offer status panel */}
          <div className="absolute left-6 md:left-10 top-10 md:top-16 glass rounded-xl p-4 w-[220px] text-[12px] premium-fade-in">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2.2" strokeLinecap="round"/></svg>
              </div>
              <span className="text-foreground font-medium">Status do Envio</span>
            </div>
            <div className="h-px bg-border mb-3" />
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2 text-foreground"><CircleCheck className="w-3.5 h-3.5 text-primary" />Coleta concluída</li>
              <li className="flex items-center gap-2 text-foreground"><CircleCheck className="w-3.5 h-3.5 text-primary" />Em rota</li>
              <li className="flex items-center gap-2"><span className="w-3.5 h-3.5 rounded-full border border-muted-foreground/40 inline-block" />Triagem</li>
              <li className="flex items-center gap-2"><span className="w-3.5 h-3.5 rounded-full border border-muted-foreground/40 inline-block" />Nota fiscal emitida</li>
              <li className="flex items-center gap-2"><span className="w-3.5 h-3.5 rounded-full border border-muted-foreground/40 inline-block" />Pagamento recebido</li>
            </ul>
          </div>

          {/* center pill */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 glass rounded-full pl-3 pr-4 py-2 flex items-center gap-2 text-[12px]">
            <span className="w-4 h-4 rounded-full bg-primary flex items-center justify-center"><Check className="w-3 h-3 text-primary-foreground" /></span>
            <span className="text-foreground">Carga Entregue</span>
          </div>

          {/* right value card */}
          <div className="absolute right-6 md:right-10 bottom-10 md:bottom-16 glass rounded-xl p-4 w-[230px] text-[12px] premium-fade-in">
            <div className="flex items-center gap-2 mb-3 text-foreground">
              <CircleCheck className="w-4 h-4 text-primary" />
              <span className="font-medium">Carga Faturada</span>
            </div>
            <div className="text-foreground text-3xl font-light tracking-tight">R$ 4.500</div>
            <div className="mt-4 flex items-center justify-between text-muted-foreground">
              <span>Vencimento</span>
              <span className="text-foreground">Ontem</span>
            </div>
            <div className="mt-1 text-muted-foreground">XY-789012</div>
          </div>
        </div>
      </div>
    </section>
  );
}
