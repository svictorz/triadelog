const fretes = [
  {
    slug: "dedicado",
    label: "Frete Dedicado",
    desc: "Veículo exclusivo para sua carga, do ponto de coleta até a entrega. Na JCN, você acompanha cada etapa e tem contato direto com quem está na operação.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="1" y="10" width="16" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M17 13h3l2 3v2h-5v-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <circle cx="5.5" cy="18.5" r="1.5" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="18.5" cy="18.5" r="1.5" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M1 13h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    highlight: true,
  },
  {
    slug: "fracionado",
    label: "Frete Fracionado",
    desc: "Pague só pelo volume que usar. A JCN consolida rotas com eficiência para você ter custo justo sem abrir mão do prazo.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="8" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="13" y="3" width="8" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="3" y="13" width="8" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="13" y="13" width="8" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
  },
  {
    slug: "redespacho",
    label: "Redespacho",
    desc: "Sua carga chega onde sua transportadora atual não alcança. A JCN conecta rotas e parceiros para garantir a entrega no destino certo.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 6v12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="2 3"/>
      </svg>
    ),
  },
  {
    slug: "aereo",
    label: "Frete Aéreo",
    desc: "Para quando o prazo é urgente e não tem margem para atraso. A JCN gerencia o processo do despacho à confirmação de chegada.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 16l-9-9-2 4-5-1 3 3-1 4 4-1 3 3 1-5 4 2-1-5 3 3v-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    slug: "maritimo",
    label: "Frete Marítimo",
    desc: "Grandes volumes com custo reduzido. A JCN coordena toda a logística portuária para que sua carga chegue sem surpresas no destino.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 17c3-2 6-2 9 0s6 2 9 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M5 17l2-6h10l2 6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M12 11V5M9 8l3-3 3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export function FreightTypes() {
  return (
    <section id="solucoes" className="py-24 premium-fade-in">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[11px] tracking-[0.18em] uppercase text-primary mb-3">Modalidades de Transporte</p>
          <h2 className="text-[32px] md:text-[42px] font-light leading-[1.08] text-foreground max-w-xl">
            A solução certa para<br />
            <span className="text-primary">cada tipo de carga.</span>
          </h2>
        </div>

        {/* Linha 1: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {fretes.slice(0, 3).map((f, i) => (
            <div
              key={f.slug}
              className="group relative glass-pro rounded-2xl p-6 cursor-default"
            >
              <span className="absolute top-4 right-5 text-[48px] font-bold text-primary/5 leading-none select-none">
                0{i + 1}
              </span>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors bg-surface-elevated text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                {f.icon}
              </div>
              <div className="h-px bg-border mb-4 group-hover:bg-primary/30 transition-colors" />
              <h3 className="text-[16px] font-semibold text-foreground tracking-tight mb-2">{f.label}</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Linha 2: 2 cards centralizados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 lg:w-2/3 lg:mx-auto">
          {fretes.slice(3).map((f, i) => (
            <div
              key={f.slug}
              className="group relative glass-pro rounded-2xl p-6 cursor-default"
            >
              <span className="absolute top-4 right-5 text-[48px] font-bold text-primary/5 leading-none select-none">
                0{i + 4}
              </span>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors bg-surface-elevated text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                {f.icon}
              </div>

              {/* Linha separadora */}
              <div className="h-px bg-border mb-4 group-hover:bg-primary/30 transition-colors" />

              <h3 className="text-[16px] font-semibold text-foreground tracking-tight mb-2">{f.label}</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{f.desc}</p>

              {/* Tag indicadora */}
            </div>
          ))}
        </div>

        {/* CTA após modalidades */}
        <div className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6 glass-pro rounded-2xl px-6 md:px-8 py-5 md:py-6 text-center sm:text-left">
          <div>
            <p className="text-[15px] md:text-[16px] font-semibold text-foreground">Não sabe qual modalidade é a certa para você?</p>
            <p className="text-[13px] text-muted-foreground mt-1">Nossa equipe analisa sua rota e indica a melhor opção sem custo.</p>
          </div>
          <a
            href="#contato"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-[14px] font-semibold text-background bg-primary hover:bg-primary/90 transition-colors duration-200 whitespace-nowrap"
          >
            Quero uma indicação gratuita
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
