import { useRef, useState } from "react";
import freteAereo from "@/assets/frete-aereo-card.png";
import freteCompartilhado from "@/assets/frete-compartilhado-card.png";
import freteDedicado from "@/assets/frete-dedicado-card.png";
import freteMaritimo from "@/assets/frete-maritimo-card.png";
import freteRedespacho from "@/assets/frete-redespacho-card.png";

const fretes = [
  {
    slug: "dedicado",
    label: "Frete Dedicado",
    country: "Exclusivo",
    short: "Veículo exclusivo para entregas urgentes ou sensíveis.",
    desc: "Coleta direta, rota dedicada e acompanhamento até o destino para cargas que não podem esperar.",
    image: freteDedicado,
  },
  {
    slug: "compartilhado",
    label: "Frete Compartilhado",
    country: "Econômico",
    short: "Economia para cargas que podem compartilhar rota.",
    desc: "Consolidamos volumes compatíveis para reduzir custo sem perder previsibilidade na entrega.",
    image: freteCompartilhado,
  },
  {
    slug: "redespacho",
    label: "Redespacho",
    country: "Conexão",
    short: "Alcance destinos com apoio de rotas parceiras.",
    desc: "Conectamos sua carga a parceiros estratégicos quando o destino exige cobertura local.",
    image: freteRedespacho,
  },
  {
    slug: "aereo",
    label: "Frete Aéreo",
    country: "Urgente",
    short: "Velocidade para cargas com prazo crítico.",
    desc: "Combinamos planejamento e modal aéreo para encurtar prazos em rotas de longa distância.",
    image: freteAereo,
  },
  {
    slug: "maritimo",
    label: "Frete Marítimo",
    country: "Volume",
    short: "Planejamento para grandes volumes e rotas longas.",
    desc: "Opção competitiva para cargas volumosas, com organização portuária e acompanhamento operacional.",
    image: freteMaritimo,
  },
];

export function FreightTypes() {
  const [activeSlug, setActiveSlug] = useState(fretes[0].slug);
  const railRef = useRef<HTMLDivElement>(null);

  const updateActiveFromScroll = () => {
    const rail = railRef.current;
    if (!rail) return;

    const railCenter = rail.scrollLeft + rail.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    Array.from(rail.children).forEach((child, index) => {
      const card = child as HTMLElement;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - railCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveSlug(fretes[closestIndex]?.slug ?? fretes[0].slug);
  };

  const focusCard = (slug: string, index: number) => {
    setActiveSlug(slug);
    const rail = railRef.current;
    const card = rail?.children[index] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  return (
    <section id="solucoes" className="relative overflow-hidden bg-background py-24 premium-fade-in">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute left-1/2 top-0 h-72 w-[min(900px,90vw)] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 h-[3px] w-12 bg-primary" />
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.24em] text-primary">
            Soluções logísticas
          </p>
          <h2 className="text-[32px] font-bold leading-tight text-foreground md:text-[48px]">
            Tipos de frete para cada necessidade da sua carga
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground md:text-[18px]">
            Escolha a modalidade ideal para sua operação: urgência, economia, alcance ou grandes volumes com cobertura nacional.
          </p>
        </div>

        <div
          ref={railRef}
          onScroll={updateActiveFromScroll}
          className="mx-[-24px] mt-12 flex snap-x snap-mandatory items-center gap-4 overflow-x-auto px-[24px] pb-10 pt-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:overflow-visible lg:px-0"
        >
          {fretes.map((frete, index) => {
            const isActive = frete.slug === activeSlug;

            return (
              <button
                key={frete.slug}
                type="button"
                onClick={() => focusCard(frete.slug, index)}
                onMouseEnter={() => setActiveSlug(frete.slug)}
                onFocus={() => setActiveSlug(frete.slug)}
                aria-pressed={isActive}
                className={`group relative h-[390px] w-[76vw] max-w-[310px] shrink-0 snap-center overflow-hidden rounded-[10px] text-left shadow-2xl shadow-black/25 ring-1 transition-all duration-300 ease-out lg:h-[390px] lg:w-auto lg:max-w-none lg:flex-1 ${
                  isActive
                    ? "z-10 scale-100 opacity-100 ring-primary/90 shadow-primary/20 lg:scale-[1.06]"
                    : "scale-[0.9] opacity-70 ring-white/12 hover:opacity-100 hover:ring-primary/70 lg:scale-100 lg:opacity-100 lg:hover:z-20 lg:hover:scale-[1.1]"
                }`}
              >
                <img
                  src={frete.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/22 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="mb-3 h-[2px] w-7 bg-primary" />
                  <p className="mb-2 text-[13px] font-semibold text-white/90">{frete.country}</p>
                  <h3 className="text-[22px] font-bold uppercase leading-[0.96] tracking-tight text-white">
                    {frete.label}
                  </h3>
                  <p className="mt-3 text-[12px] leading-relaxed text-white/78">{frete.short}</p>
                </div>
                <span className="absolute right-5 top-5 text-[13px] font-bold text-white/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-2 flex justify-center lg:mt-8">
          <a
            href="#contato"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-8 text-[14px] font-semibold text-background shadow-lg shadow-black/20 transition-colors hover:bg-primary/90"
          >
            Solicitar cotação
          </a>
        </div>
      </div>
    </section>
  );
}