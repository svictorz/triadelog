import { Camera, MapPin, ShieldCheck, Network } from "lucide-react";
import { motion } from "framer-motion";

function FeatureCard({
  icon,
  title,
  desc,
  className = "",
  children,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-surface p-7 flex flex-col ${className}`}
    >
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="relative flex-1 min-h-[170px] flex items-center justify-center">
        {children}
      </div>
      <div className="relative mt-6">
        <div className="flex items-center gap-2 text-primary mb-2">{icon}<span className="text-[11px] uppercase tracking-[0.16em]">Recurso</span></div>
        <h3 className="text-foreground text-[19px] font-medium tracking-tight">{title}</h3>
        <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

export function BentoFeatures() {
  return (
    <section id="tecnologia" className="py-28 premium-fade-in">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.18em] uppercase text-primary mb-4">Tecnologia operacional</p>
          <h2 className="text-[34px] md:text-[44px] leading-[1.08] text-foreground">
            Uma malha de recursos pensada para tirar atrito da operação.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[290px]">
          <FeatureCard
            icon={<MapPin className="w-3.5 h-3.5" />}
            title="Rastreamento Inteligente por Link Único"
            desc="Gere links exclusivos de acompanhamento em tempo real para seus clientes, com timeline viva da operação."
            className="md:col-span-2"
          >
            <svg viewBox="0 0 320 160" className="w-full h-full max-h-[180px]">
              <defs>
                <radialGradient id="pulse" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="var(--cyan)" stopOpacity="0" />
                </radialGradient>
              </defs>
              <path d="M10 120 Q 80 40 160 90 T 310 60" stroke="var(--cyan)" strokeWidth="1.5" fill="none" strokeDasharray="3 4" />
              <motion.circle initial={{ r: 4 }} animate={{ r: [4, 16, 4], opacity: [0.8, 0, 0.8] }} transition={{ duration: 2.4, repeat: Infinity }} cx="160" cy="90" fill="url(#pulse)" />
              <circle cx="160" cy="90" r="4" fill="var(--cyan)" />
              <circle cx="10" cy="120" r="3" fill="var(--cyan)" />
              <circle cx="310" cy="60" r="3" fill="var(--cyan)" />
            </svg>
          </FeatureCard>

          <FeatureCard
            icon={<Camera className="w-3.5 h-3.5" />}
            title="Comprovação por Foto (POD Digital)"
            desc="O entregador registra evidências fotográficas instantaneamente no ponto de entrega."
          >
            <motion.div
              initial={{ scale: 0.9, rotate: -8 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              className="w-24 h-24 rounded-2xl border-2 border-primary flex items-center justify-center"
            >
              <Camera className="w-10 h-10 text-primary" />
            </motion.div>
          </FeatureCard>

          <FeatureCard
            icon={<ShieldCheck className="w-3.5 h-3.5" />}
            title="Segurança de Carga Avançada"
            desc="Monitoramento ativo de temperatura, desvios de rota e paradas não programadas."
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}>
              <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="44" stroke="var(--cyan)" strokeOpacity="0.4" strokeWidth="1" fill="none" />
                <circle cx="60" cy="60" r="32" stroke="var(--cyan)" strokeOpacity="0.7" strokeWidth="1" fill="none" />
                <circle cx="60" cy="60" r="20" stroke="var(--cyan)" strokeWidth="1.2" fill="none" />
                <path d="M60 36 L78 48 V66 C78 76 60 86 60 86 C60 86 42 76 42 66 V48 Z" stroke="var(--cyan)" strokeWidth="1.5" fill="none" />
              </svg>
            </motion.div>
          </FeatureCard>

          <FeatureCard
            icon={<Network className="w-3.5 h-3.5" />}
            title='"Postar em Qualquer Lugar"  -  Omnichannel'
            desc="APIs abertas que postam ordens em qualquer ERP, CRM ou sistema proprietário, com comunicação nativa e paralela."
            className="md:col-span-2"
          >
            <svg viewBox="0 0 320 180" className="w-full h-full max-h-[180px]">
              {[0, 1, 2, 3, 4].map((i) => {
                const angle = (i / 5) * Math.PI * 2;
                const x = 160 + Math.cos(angle) * 110;
                const y = 90 + Math.sin(angle) * 65;
                return (
                  <g key={i}>
                    <line x1="160" y1="90" x2={x} y2={y} stroke="var(--cyan)" strokeOpacity="0.4" strokeDasharray="2 3" />
                    <circle cx={x} cy={y} r="10" stroke="var(--cyan)" strokeWidth="1.2" fill="var(--surface)" />
                  </g>
                );
              })}
              <motion.circle initial={{ r: 10 }} animate={{ r: [10, 16, 10] }} transition={{ duration: 2, repeat: Infinity }} cx="160" cy="90" fill="var(--cyan)" />
            </svg>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
