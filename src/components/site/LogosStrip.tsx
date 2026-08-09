type Logo = {
  src: string;
  alt: string;
};

const logos: Logo[] = [
  { src: "/empresas/empresa-01.png", alt: "Cliente JCN 01" },
  { src: "/empresas/empresa-02.png", alt: "Cliente JCN 02" },
  { src: "/empresas/empresa-04.png", alt: "Cliente JCN 04" },
  { src: "/empresas/empresa-05.png", alt: "Cliente JCN 05" },
  { src: "/empresas/empresa-06.png", alt: "Cliente JCN 06" },
  { src: "/empresas/empresa-07.png", alt: "Cliente JCN 07" },
  { src: "/empresas/empresa-08.png", alt: "Cliente JCN 08" },
  { src: "/empresas/empresa-09.png", alt: "Cliente JCN 09" },
  { src: "/empresas/empresa-10.png", alt: "Cliente JCN 10" },
  { src: "/empresas/empresa-11.png", alt: "Cliente JCN 11" },
  { src: "/empresas/empresa-12.png", alt: "Cliente JCN 12" },
  { src: "/empresas/empresa-13.png", alt: "Cliente JCN 13" },
  { src: "/empresas/empresa-14.png", alt: "Cliente JCN 14" },
  { src: "/empresas/empresa-15.png", alt: "Cliente JCN 15" },
  { src: "/empresas/empresa-16.png", alt: "Cliente JCN 16" },
  { src: "/empresas/empresa-17.png", alt: "Cliente JCN 17" },
  { src: "/empresas/empresa-18.png", alt: "Cliente JCN 18" },
  { src: "/empresas/empresa-20.png", alt: "Inglesa" },
  { src: "/empresas/empresa-21.png", alt: "Petrobras" },
];

export function LogosStrip() {
  return (
    <section id="clientes" className="py-24 premium-fade-in">
      <p className="px-4 text-center text-lg font-semibold uppercase tracking-[0.14em] text-foreground sm:text-xl md:text-2xl">
        Empresas que confiam na JCN
      </p>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-3 px-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {logos.map((logo) => (
          <div
            key={logo.src}
            className="flex h-20 items-center justify-center rounded-md border border-border/50 bg-white px-4 py-3 shadow-sm transition hover:border-primary/50 md:h-24"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="max-h-full max-w-full object-contain opacity-80"
              style={{ filter: "grayscale(1) contrast(1.15) brightness(0.42)" }}
            />
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl items-center justify-center px-4">
        <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-primary/25 bg-primary/5 px-7 py-4 text-center text-base font-medium text-foreground shadow-sm">
          <span className="h-3 w-3 rounded-full bg-primary shadow-[0_0_18px_hsl(var(--primary)/0.7)] animate-pulse" />
          <span className="text-2xl font-bold text-primary md:text-3xl">+2.000</span>
          <span className="text-muted-foreground">parceiros atendidos em todo o Brasil</span>
        </div>
      </div>
    </section>
  );
}

