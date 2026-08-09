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
      { title: "JCN Transportes | Frete Dedicado e Fracionado" },
      { name: "description", content: "JCN Transportes: frete dedicado, compartilhado e redespacho com cobertura nacional. Atendimento em até 24h úteis e coleta em até 48 horas." },
      { name: "robots", content: "index, follow" },
      { name: "keywords", content: "frete dedicado, transportadora, frete fracionado, redespacho, cotação de frete, transportadora brasil, JCN transportes" },
      { name: "author", content: "JCN Transportes" },
      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jcnstats.lovable.app/" },
      { property: "og:site_name", content: "JCN Transportes" },
      { property: "og:title", content: "JCN Transportes | Frete Dedicado e Fracionado" },
      { property: "og:description", content: "Frete dedicado, compartilhado e redespacho para todo o Brasil. Atendimento em até 24h úteis e coleta em até 48 horas." },
      { property: "og:image", content: "https://jcnstats.lovable.app/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "pt_BR" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "JCN Transportes | Frete Dedicado e Fracionado" },
      { name: "twitter:description", content: "Frete dedicado, compartilhado e redespacho para todo o Brasil. Atendimento em até 24h úteis." },
      { name: "twitter:image", content: "https://jcnstats.lovable.app/og-image.jpg" },
      // Geo tags (local SEO)
      { name: "geo.region", content: "BR-SP" },      // Canonical
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

