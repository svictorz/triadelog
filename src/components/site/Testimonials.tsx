const items = [
  {
    quote:
      "A implementação da JCN Transportes mudou completamente nossa percepção de eficiência. O recurso de link exclusivo reduziu em 42% os chamados de suporte em nossa central de atendimento ao cliente final.",
    name: "Marcos Souza",
    role: "Diretor de Supply Chain",
    company: "Indústria EletroBrás",
  },
  {
    quote:
      "Conseguimos integrar nosso ERP em menos de uma semana. A previsibilidade de entrega virou um diferencial comercial real para o nosso time.",
    name: "Carolina Lima",
    role: "Head de Operações",
    company: "Mercatto Distribuição",
  },
  {
    quote:
      "Telemetria, POD digital e dashboards em um único lugar. Reduzimos avarias em 28% no primeiro trimestre de operação com a JCN.",
    name: "Rafael Andrade",
    role: "Gerente de Logística",
    company: "Grupo Norvale",
  },
];

export function Testimonials() {
  return (
    <section className="py-28 premium-fade-in">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[11px] tracking-[0.18em] uppercase text-primary mb-4 text-center">Prova social</p>
        <h2 className="text-center text-[30px] md:text-[40px] leading-[1.1] text-foreground max-w-2xl mx-auto">
          Decisores que já redesenharam sua operação com a JCN.
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {items.map((t) => (
            <figure key={t.name} className="relative rounded-2xl border border-border bg-surface p-7 overflow-hidden">
              <span className="absolute -top-6 -left-2 text-[160px] leading-none text-foreground/[0.04] font-serif select-none">"</span>
              <blockquote className="relative text-[14px] italic text-foreground/90 leading-relaxed">
                {t.quote}
              </blockquote>
              <figcaption className="relative mt-6 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary text-[12px] font-medium">
                  {t.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <div className="text-[13px] text-foreground font-medium">{t.name}</div>
                  <div className="text-[11.5px] text-muted-foreground">{t.role} · {t.company}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
