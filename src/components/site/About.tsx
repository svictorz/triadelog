import operator from "@/assets/about-team-photoroom.png";

const pillars = [
  {
    t: "Cobertura nacional.",
    d: "Coletas e entregas em todo o Brasil, com operação ajustada ao prazo, volume e destino da sua carga.",
  },
  {
    t: "Rede preparada.",
    d: "Mais de 9 mil motoristas autônomos cadastrados para atender frete dedicado, compartilhado e redespacho.",
  },
  {
    t: "Transparência e prazo são obrigação.",
    d: "Acompanhamos a operação de perto e avisamos você antes que qualquer imprevisto vire problema.",
  },
];

export function About() {
  return (
    <section id="quem-somos" className="py-20 md:py-28 premium-fade-in">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-14 items-start">

        {/* Imagem  -  desktop: hexágono com tags absolutas | mobile: retangular sem tags */}
        <div className="relative flex min-h-[360px] items-end justify-center overflow-visible md:min-h-[560px]">
          <div className="absolute inset-x-8 bottom-8 h-24 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

          <img
            src={operator}
            alt="Equipe JCN Transportes"
            width={1024}
            height={1024}
            loading="lazy"
            className="relative z-[2] h-auto w-[112%] max-w-none object-contain drop-shadow-[0_18px_55px_rgba(56,189,248,0.22)] md:w-[122%]"
          />
        </div>
        {/* Texto */}
        <div className="mt-8 md:mt-0">
          <p className="text-[11px] tracking-[0.18em] uppercase text-primary mb-4">Quem somos</p>
          <h2 className="text-[28px] md:text-[44px] leading-[1.08] text-foreground">
            Transparência e prazo<br />
            <span className="text-primary">são obrigação.</span>
          </h2>
          <ul className="mt-8 md:mt-10 space-y-5 md:space-y-6">
            {pillars.map((p) => (
              <li key={p.t} className="border-t border-border pt-4 md:pt-5">
                <h3 className="text-[14px] md:text-[15px] text-foreground font-semibold tracking-tight">{p.t}</h3>
                <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">{p.d}</p>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-border flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-[14px] font-semibold text-background bg-primary hover:bg-primary/90 transition-colors duration-200"
            >
              Solicitar cotação agora
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="https://wa.me/5519990038302?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20serviços%20da%20JCN."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 text-[14px] text-muted-foreground hover:text-foreground transition-colors rounded-xl border border-border hover:border-foreground/20"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

