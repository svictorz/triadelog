type Logo = {
  src: string;
  alt: string;
  imageClassName?: string;
};

const logos: Logo[] = [
  { src: "/empresas/empresa-01.png", alt: "Tilibra" },
  { src: "/empresas/empresa-02.png", alt: "Ageo" },
  { src: "/empresas/empresa-04.png", alt: "Dismobile" },
  { src: "/empresas/empresa-05.png", alt: "Stampmetal" },
  { src: "/empresas/empresa-06.png", alt: "SM Suporte Maquinas" },
  { src: "/empresas/empresa-07.png", alt: "Multifix" },
  { src: "/empresas/empresa-08.png", alt: "RF Equipamentos" },
  { src: "/empresas/empresa-09.png", alt: "PCM Distribuidora" },
  { src: "/empresas/empresa-10.png", alt: "Louro", imageClassName: "scale-[1.55]" },
  { src: "/empresas/empresa-11.png", alt: "JW" },
  { src: "/empresas/empresa-12.png", alt: "Aljava" },
  { src: "/empresas/empresa-13.png", alt: "Spchiller do Brasil" },
  { src: "/empresas/empresa-14.png", alt: "Steel Metalurgica" },
  { src: "/empresas/empresa-15.png", alt: "Artline" },
  { src: "/empresas/empresa-16.png", alt: "Neobambu" },
  { src: "/empresas/empresa-17.png", alt: "Ambev", imageClassName: "scale-[1.75]" },
  { src: "/empresas/empresa-18.png", alt: "Ecopol" },
  { src: "/empresas/empresa-20.png", alt: "Inglesa" },
  { src: "/empresas/empresa-21.png", alt: "Petrobras" },
  { src: "/empresas/mercosul.png", alt: "Mercosul" },
];

const featuredMobileOrder = ["Ambev", "Tilibra", "Petrobras", "Ageo", "Mercosul", "Louro"];

const mobileLogos = [
  ...featuredMobileOrder.map((alt) => logos.find((logo) => logo.alt === alt)).filter(Boolean),
  ...logos.filter((logo) => !featuredMobileOrder.includes(logo.alt)),
] as Logo[];

const mobileSlides = Array.from({ length: Math.ceil(mobileLogos.length / 6) }, (_, index) =>
  mobileLogos.slice(index * 6, index * 6 + 6),
);

function LogoCard({ logo, className = "" }: { logo: Logo; className?: string }) {
  return (
    <div
      className={`flex h-20 items-center justify-center rounded-md border border-border/50 bg-white px-4 py-3 shadow-sm transition hover:border-primary/50 md:h-24 ${className}`}
    >
      <img
        src={logo.src}
        alt={logo.alt}
        loading="lazy"
        className={`max-h-full max-w-full object-contain opacity-80 ${logo.imageClassName ?? ""}`}
        style={{ filter: "grayscale(1) contrast(1.15) brightness(0.42)" }}
      />
    </div>
  );
}

export function LogosStrip() {
  return (
    <section id="clientes" className="py-16 md:py-24 premium-fade-in">
      <p className="px-4 text-center text-lg font-semibold uppercase tracking-[0.14em] text-foreground sm:text-xl md:text-2xl">
        Empresas que confiam na JCN
      </p>

      <div className="mt-8 sm:hidden">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {mobileSlides.map((slide, index) => (
            <div key={index} className="grid min-w-full snap-center grid-cols-2 gap-3">
              {slide.map((logo) => (
                <LogoCard key={logo.src} logo={logo} className="h-[84px]" />
              ))}
            </div>
          ))}
        </div>
        <div className="mt-1 flex justify-center gap-2" aria-hidden="true">
          {mobileSlides.map((_, index) => (
            <span key={index} className="h-1.5 w-6 rounded-full bg-primary/35 first:bg-primary" />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 hidden max-w-6xl grid-cols-3 gap-3 px-4 sm:grid md:grid-cols-4 lg:grid-cols-5">
        {logos.map((logo) => (
          <LogoCard key={logo.src} logo={logo} />
        ))}
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl items-center justify-center px-4 md:mt-10">
        <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-primary/25 bg-primary/5 px-6 py-4 text-center text-sm font-medium text-foreground shadow-sm sm:px-7 sm:text-base">
          <span className="h-3 w-3 rounded-full bg-primary shadow-[0_0_18px_rgba(255,118,0,0.45)] animate-pulse" />
          <span className="text-2xl font-bold text-primary-text md:text-3xl">+2.000</span>
          <span className="text-muted-foreground">parceiros atendidos em todo o Brasil</span>
        </div>
      </div>
    </section>
  );
}