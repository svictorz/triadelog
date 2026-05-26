import operator from "@/assets/operator.jpg";

const pillars = [
  { t: "Somos Operadores Nativos Digitais", d: "Não apenas transportamos mercadorias; controlamos dados preciosos que garantem a previsibilidade total do seu estoque." },
  { t: "Infraestrutura Conectada", d: "Mais de 7.000 veículos homologados, equipados com telemetria avançada e sensores de rota que coletam e entregam com precisão cirúrgica." },
  { t: "Presença e Capilaridade Absoluta", d: "Mais de 4.000 pontos de coleta parceiros estrategicamente posicionados no território nacional para agilizar a logística reversa." },
  { t: "Logística Humana e Escalável", d: "Uma equipe unida de mais de 5.000 colaboradores diretos e indiretos focados em transformar prazos complexos em entregas simples." },
];

export function About() {
  return (
    <section id="quem-somos" className="py-28 premium-fade-in">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div
            className="relative overflow-hidden bg-surface"
            style={{ clipPath: "polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%)" }}
          >
            <img src={operator} alt="Operador logístico JCN" width={1024} height={1024} loading="lazy" className="w-full h-[520px] object-cover" />
          </div>
          <div className="absolute -inset-3 -z-10 hero-radial blur-3xl" />
        </div>
        <div>
          <p className="text-[11px] tracking-[0.18em] uppercase text-primary mb-4">Quem somos</p>
          <h2 className="text-[34px] md:text-[44px] leading-[1.08] text-foreground">
            Conectando estradas, tecnologia e pessoas de ponta a ponta.
          </h2>
          <ul className="mt-10 space-y-6">
            {pillars.map((p) => (
              <li key={p.t} className="border-t border-border pt-5">
                <h3 className="text-[15px] text-foreground font-medium tracking-tight">{p.t}</h3>
                <p className="mt-2 text-[13.5px] text-muted-foreground leading-relaxed">{p.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
