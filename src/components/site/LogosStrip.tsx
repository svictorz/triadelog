const logos = ["Ambev", "EletroBrás", "Natura", "Magalu", "JBS", "Vale", "Suzano", "Klabin", "Gerdau", "WEG"];

export function LogosStrip() {
  return (
    <section id="clientes" className="py-24 premium-fade-in">
      <p className="text-center text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
        Confiado pelas indústrias líderes do mercado
      </p>
      <div className="mt-10 overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex gap-16 marquee w-max">
          {[...logos, ...logos].map((l, i) => (
            <div key={i} className="text-2xl font-light tracking-tight text-muted-foreground/70 hover:text-foreground transition-colors whitespace-nowrap">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
