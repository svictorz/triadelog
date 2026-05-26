import { ArrowUpRight, Check, CircleCheck } from "lucide-react";
import truck from "@/assets/hero-truck.jpg";

export function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute inset-0 hero-radial pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 text-center premium-fade-in">
        <h1 className="text-[42px] md:text-[72px] leading-[1.05] font-light text-foreground max-w-5xl mx-auto tracking-tight">
          Transporte de alta performance<br className="hidden md:block"/> para a cadeia logística brasileira.
        </h1>
        <p className="mt-7 text-[15px] md:text-[17px] text-muted-foreground max-w-2xl mx-auto leading-[1.6]">
          Monitore, gerencie e otimize suas operações de ponta a ponta — visibilidade
          em tempo real, conformidade total de frete e malha de entregas conectada
          por inteligência operacional.
        </p>
        <div className="mt-9 flex items-center justify-center gap-3">
          <a href="#contato" className="inline-flex items-center gap-1.5 bg-white text-background text-[14px] font-medium pl-5 pr-1 py-1 rounded-md hover:bg-white/90 transition">
            Agendar Demonstração
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-primary text-primary-foreground">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
          <a href="#contato" className="inline-flex items-center text-[14px] text-foreground px-5 py-2.5 rounded-md border border-border hover:bg-surface transition">
            Entrar no Sistema
          </a>
        </div>
      </div>

      {/* Truck stage — overlaps headline like the reference */}
      <div className="relative mt-10 md:-mt-24 max-w-[1400px] mx-auto px-4 pointer-events-none">
        <div className="relative aspect-[16/10] md:aspect-[16/8]">
          <img
            src={truck}
            alt="Caminhão JCN em operação noturna"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover object-center [mask-image:radial-gradient(ellipse_70%_85%_at_50%_55%,#000_55%,transparent_92%)]"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-b from-transparent to-background" />

          {/* Offer Status panel — left */}
          <div className="pointer-events-auto absolute left-4 md:left-24 bottom-[12%] md:bottom-[18%] glass rounded-xl p-4 w-[230px] text-[12px] premium-fade-in">
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

          {/* Center pill */}
          <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 top-[55%] glass rounded-full pl-2 pr-4 py-1.5 flex items-center gap-2 text-[12px]">
            <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center"><Check className="w-3 h-3 text-primary-foreground" /></span>
            <span className="text-foreground font-medium">Carga Entregue</span>
          </div>

          {/* Right value card */}
          <div className="pointer-events-auto absolute right-4 md:right-24 bottom-[14%] md:bottom-[22%] glass rounded-xl p-5 w-[240px] text-[12px] premium-fade-in">
            <div className="flex items-center gap-2 mb-4 text-foreground">
              <CircleCheck className="w-4 h-4 text-primary" />
              <span className="font-medium">Carga Faturada</span>
            </div>
            <div className="text-foreground text-[34px] font-light tracking-tight leading-none">R$ 4.500</div>
            <div className="mt-5 flex items-center justify-between text-muted-foreground">
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
