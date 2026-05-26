import { Check } from "lucide-react";

const plans = [
  {
    name: "Logística Expressa",
    audience: "E-commerce em tração e pequenas indústrias regionais.",
    price: "Mensal mín. R$ 2.500",
    priceSub: "em fretes liquidados",
    feats: ["Painel web padrão", "Rastreio por link básico", "Comprovante digital via app", "Suporte em horário comercial"],
    cta: "Começar Agora",
    highlight: false,
  },
  {
    name: "JCN Corporate",
    audience: "Distribuidores médios, indústrias nacionais e operações complexas.",
    price: "Sob Consulta",
    priceSub: "descontos progressivos por volume",
    feats: ['API "Postar em Qualquer Lugar"', "Bento dashboard com telemetria viva", "Gerente de conta exclusivo", "Suporte 24h em rotas críticas", "Relatórios analíticos automatizados"],
    cta: "Falar com Especialista",
    highlight: true,
  },
  {
    name: "Enterprise / Custom",
    audience: "Multinacionais com supply chain global e modais múltiplos.",
    price: "Contrato Dedicado",
    priceSub: "faturamento consolidado",
    feats: ["App do motorista white-label", "Servidores dedicados", "Inteligência preditiva de demanda", "SLA de 15 min", "Comitê técnico mensal"],
    cta: "Desenhar Contrato",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="solucoes" className="py-28 premium-fade-in">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[11px] tracking-[0.18em] uppercase text-primary mb-4">Planos corporativos</p>
          <h2 className="text-[34px] md:text-[44px] leading-[1.08] text-foreground">
            Tarifação transparente para cada estágio de operação.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                p.highlight ? "border-primary/50 bg-surface-elevated" : "border-border bg-surface"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-2.5 left-8 text-[10px] uppercase tracking-[0.18em] bg-primary text-primary-foreground px-2.5 py-1 rounded-full">
                  Mais Escolhido
                </span>
              )}
              <h3 className="text-foreground text-[20px] font-medium tracking-tight">{p.name}</h3>
              <p className="mt-2 text-[12.5px] text-muted-foreground leading-relaxed min-h-[48px]">{p.audience}</p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="text-foreground text-[26px] font-light tracking-tight">{p.price}</div>
                <div className="text-[12px] text-muted-foreground">{p.priceSub}</div>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {p.feats.map((f) => (
                  <li key={f} className="flex gap-2.5 text-[13px] text-foreground/90">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contato"
                className={`mt-8 text-center text-[13px] py-3 rounded-full transition ${
                  p.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border text-foreground hover:bg-surface-elevated"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
