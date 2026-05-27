import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { QuoteBar } from "@/components/site/QuoteBar";
import { LogosStrip } from "@/components/site/LogosStrip";
import { FreightTypes } from "@/components/site/FreightTypes";
import { About } from "@/components/site/About";
import { ContactFooter } from "@/components/site/ContactFooter";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { useReveal } from "@/hooks/use-reveal";
import { useContentProtection } from "@/hooks/use-content-protection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "JCN Transportes | Frete Dedicado e Fracionado — Campinas/SP" },
      { name: "description", content: "JCN Transportes: frete dedicado, fracionado e redespacho para todo o Brasil. Sede em Campinas/SP, rede com mais de 9 mil motoristas. Solicite sua cotação grátis." },
      { name: "robots", content: "index, follow" },
      { name: "keywords", content: "frete dedicado campinas, transportadora campinas, frete fracionado sp, redespacho campinas, cotação de frete, transportadora brasil, JCN transportes" },
      { name: "author", content: "JCN Transportes" },
      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jcnstats.lovable.app/" },
      { property: "og:site_name", content: "JCN Transportes" },
      { property: "og:title", content: "JCN Transportes | Frete Dedicado e Fracionado — Campinas/SP" },
      { property: "og:description", content: "Frete dedicado, fracionado e redespacho para todo o Brasil. Cotação rápida, prazo real e equipe que responde. Campinas/SP." },
      { property: "og:image", content: "https://jcnstats.lovable.app/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "pt_BR" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "JCN Transportes | Frete Dedicado e Fracionado — Campinas/SP" },
      { name: "twitter:description", content: "Frete dedicado, fracionado e redespacho para todo o Brasil. Cotação rápida, prazo real." },
      { name: "twitter:image", content: "https://jcnstats.lovable.app/og-image.jpg" },
      // Geo tags (local SEO)
      { name: "geo.region", content: "BR-SP" },
      { name: "geo.placename", content: "Campinas" },
      { name: "geo.position", content: "-22.9071;-47.0633" },
      { name: "ICBM", content: "-22.9071, -47.0633" },
      // Canonical
      { rel: "canonical", href: "https://jcnstats.lovable.app/" },
    ],
  }),
});

function Index() {
  useReveal();
  useContentProtection();
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <QuoteBar />
      <LogosStrip />
      <FreightTypes />
      <About />
      <ContactFooter />
      <WhatsAppButton />
    </main>
  );
}
