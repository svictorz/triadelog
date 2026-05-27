const row1 = ["Artline", "Norflow", "Naturalis Pedras", "Diaymes", "IKIGAI", "PainelBrass", "Pontarolo GYM", "Mosyla"];
const row2 = ["Ital", "Ritz", "Spchiller", "Tampec", "Move Engenharia", "Fludmac", "Multifix", "Stametal"];

export function LogosStrip() {
  return (
    <section id="clientes" className="py-24 premium-fade-in">
      <p className="text-center text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
        Empresas que confiam na JCN
      </p>

      <div className="mt-10 space-y-5">
        {/* Linha 1 — esquerda para direita */}
        <div className="overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-0 marquee w-max">
            {[...row1, ...row1].map((l, i) => (
              <div key={i} className="flex items-center">
                <span className="text-[22px] md:text-[26px] font-bold tracking-tight text-muted-foreground/60 hover:text-foreground transition-colors whitespace-nowrap px-8">
                  {l}
                </span>
                <div className="w-px h-5 bg-border shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Linha 2 — direita para esquerda */}
        <div className="overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-0 w-max" style={{ animation: "marquee 35s linear infinite reverse" }}>
            {[...row2, ...row2].map((l, i) => (
              <div key={i} className="flex items-center">
                <span className="text-[22px] md:text-[26px] font-bold tracking-tight text-muted-foreground/60 hover:text-foreground transition-colors whitespace-nowrap px-8">
                  {l}
                </span>
                <div className="w-px h-5 bg-border shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
