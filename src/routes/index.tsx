import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { QuoteBar } from "@/components/site/QuoteBar";
import { LogosStrip } from "@/components/site/LogosStrip";
import { About } from "@/components/site/About";
import { BentoFeatures } from "@/components/site/BentoFeatures";
import { Pricing } from "@/components/site/Pricing";
import { Testimonials } from "@/components/site/Testimonials";
import { ContactFooter } from "@/components/site/ContactFooter";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "JCN Transportes — Transporte de alta performance para a cadeia logística brasileira" },
      {
        name: "description",
        content:
          "Plataforma de gestão de frete da JCN Transportes: rastreio em tempo real, telemetria, POD digital e APIs abertas para operações brasileiras de alta performance.",
      },
      { property: "og:title", content: "JCN Transportes — Logística premium movida por tecnologia" },
      { property: "og:description", content: "Monitore, gerencie e otimize suas operações de ponta a ponta com a JCN Transportes." },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <QuoteBar />
      <LogosStrip />
      <About />
      <BentoFeatures />
      <Pricing />
      <Testimonials />
      <ContactFooter />
    </main>
  );
}
