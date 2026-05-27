import operator from "@/assets/team.png";

const pillars = [
  {
    t: "Somos de Campinas. Entregamos o Brasil.",
    d: "A JCN nasceu em Campinas, SP, e atende todo o território nacional. Sabemos que transporte no Brasil não é simples — estradas, burocracia fiscal, janelas de entrega apertadas. Conhecemos cada obstáculo e montamos nossa operação pra lidar com eles no dia a dia.",
  },
  {
    t: "Nossa maior entrega é a confiança.",
    d: "Trabalhamos com uma rede de mais de 9 mil motoristas autônomos cadastrados, frete dedicado e fracionado, e atendimento de quem responde de verdade. Entendemos que cada carga representa o negócio de alguém.",
  },
  {
    t: "Compromisso não é slogan, é postura.",
    d: "Quando você fecha com a JCN, tem um parceiro que acompanha a operação com você. Se algo sair do previsto, você vai saber antes de precisar ligar. Porque acreditamos que transparência e prazo não são diferenciais — são obrigação.",
  },
];

export function About() {
  return (
    <section id="quem-somos" className="py-20 md:py-28 premium-fade-in">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-14 items-start">

        {/* Imagem — desktop: hexágono com tags absolutas | mobile: retangular sem tags */}
        <div className="relative flex items-center justify-center">
          {/* Fundo decorativo — oculto em mobile para evitar overflow */}
          <div
            className="hidden md:block absolute w-[92%] h-[92%] bg-surface-elevated opacity-40"
            style={{
              clipPath: "polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%)",
              transform: "translate(18px, 18px) rotate(6deg)",
            }}
          />

          {/* Imagem: hexágono no desktop, arredondada no mobile */}
          <div
            className="relative overflow-hidden bg-surface w-full"
            style={{
              clipPath: "polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%)",
            }}
          >
            <img
              src={operator}
              alt="Equipe JCN Transportes"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-[320px] md:h-[520px] object-cover object-top"
            />
          </div>
          <div className="absolute -inset-3 -z-10 hero-radial blur-3xl" />

          {/* Tags de valor — visíveis só em desktop */}
          <div className="hidden md:flex absolute top-6 left-2 glass rounded-xl px-6 py-4 items-center gap-3 shadow-xl">
            <div className="w-3 h-3 rounded-full bg-primary shrink-0" />
            <span className="text-[15px] font-bold tracking-widest text-foreground uppercase">Prático</span>
          </div>

          <div className="hidden md:flex absolute top-1/2 right-2 glass rounded-xl px-6 py-4 items-center gap-3 shadow-xl">
            <div className="w-3 h-3 rounded-full bg-primary shrink-0" />
            <span className="text-[15px] font-bold tracking-widest text-foreground uppercase">Ágil</span>
          </div>

          <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 glass rounded-xl px-6 py-4 items-center gap-3 shadow-xl">
            <div className="w-3 h-3 rounded-full bg-primary shrink-0" />
            <span className="text-[15px] font-bold tracking-widest text-foreground uppercase">Seguro</span>
          </div>

          {/* Tags de valor — versão mobile: linha de pills abaixo da imagem */}
          <div className="md:hidden absolute bottom-0 inset-x-0 flex justify-center gap-2 translate-y-1/2">
            {["Prático", "Ágil", "Seguro"].map((v) => (
              <div key={v} className="glass rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-[12px] font-bold tracking-widest text-foreground uppercase">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Texto */}
        <div className="mt-8 md:mt-0">
          <p className="text-[11px] tracking-[0.18em] uppercase text-primary mb-4">Quem somos</p>
          <h2 className="text-[28px] md:text-[44px] leading-[1.08] text-foreground">
            De Campinas<br /> para qualquer lugar<br />
            <span className="text-primary">do Brasil.</span>
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
