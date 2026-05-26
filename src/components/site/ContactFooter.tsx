export function ContactFooter() {
  return (
    <section id="contato" className="relative pt-24 pb-12 mt-8" style={{ background: "oklch(0.18 0.05 250)" }}>
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 premium-fade-in">
        <div>
          <p className="text-[11px] tracking-[0.18em] uppercase text-primary mb-4">Diagnóstico de frota</p>
          <h2 className="text-[34px] md:text-[44px] leading-[1.08] text-foreground max-w-md">
            Pronto para redefinir sua eficiência operacional?
          </h2>
          <p className="mt-5 text-[14px] text-muted-foreground max-w-md leading-relaxed">
            Conte para nosso comitê comercial os gargalos da sua operação. Em 48h enviamos
            um diagnóstico completo com cenários de otimização de frete.
          </p>
          <dl className="mt-10 space-y-4 text-[13px]">
            <div>
              <dt className="text-muted-foreground">Sede operacional</dt>
              <dd className="text-foreground">Av. das Nações Unidas, 12.901 — São Paulo / SP</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Ouvidoria de cargas</dt>
              <dd className="text-foreground">ouvidoria@jcntransportes.com.br</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Central comercial</dt>
              <dd className="text-foreground">+55 11 4002-8922</dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-8"
        >
          {[
            { label: "Nome do contato", type: "text" },
            { label: "Cargo na empresa", type: "text" },
          ].map((f) => (
            <div key={f.label}>
              <label className="block text-[11px] uppercase tracking-[0.16em] text-muted-foreground mb-2">{f.label}</label>
              <input
                type={f.type}
                className="w-full bg-transparent border-0 border-b border-border focus:border-primary focus:outline-none py-2 text-[14px] text-foreground transition-colors"
              />
            </div>
          ))}
          <div>
            <label className="block text-[11px] uppercase tracking-[0.16em] text-muted-foreground mb-2">
              Volume mensal estimado de cargas
            </label>
            <select className="w-full bg-transparent border-0 border-b border-border focus:border-primary focus:outline-none py-2 text-[14px] text-foreground">
              <option className="bg-surface">Até 500 entregas</option>
              <option className="bg-surface">500 a 2.000 entregas</option>
              <option className="bg-surface">2.000 a 10.000 entregas</option>
              <option className="bg-surface">Acima de 10.000 entregas</option>
            </select>
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-[0.16em] text-muted-foreground mb-2">
              Mensagem / desafio logístico
            </label>
            <textarea
              rows={3}
              className="w-full bg-transparent border-0 border-b border-border focus:border-primary focus:outline-none py-2 text-[14px] text-foreground resize-none transition-colors"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-semibold tracking-tight text-[14px] py-4 rounded-md hover:brightness-110 transition"
          >
            Iniciar Diagnóstico de Frota
          </button>
        </form>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 mt-20 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-muted-foreground">
        <div className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M3 6l6 6-6 6M11 6l6 6-6 6" stroke="var(--cyan)" strokeWidth="2.2" strokeLinecap="round"/>
          </svg>
          <span>© {new Date().getFullYear()} JCN Transportes. Todos os direitos reservados.</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition">Termos</a>
          <a href="#" className="hover:text-foreground transition">Privacidade</a>
          <a href="#" className="hover:text-foreground transition">LGPD</a>
        </div>
      </div>
    </section>
  );
}
