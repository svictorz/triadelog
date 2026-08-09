import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/termos")({
  component: Termos,
  head: () => ({
    meta: [
      { title: "Termos de Uso  -  JCN Transportes" },
      { name: "description", content: "Termos de uso dos serviços da JCN Transportes." },
    ],
  }),
});

function Termos() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-6 py-24">
        <Link to="/" className="inline-flex items-center gap-2 text-[13px] text-muted-foreground hover:text-foreground transition-colors mb-12">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Voltar ao site
        </Link>

        <p className="text-[11px] tracking-[0.18em] uppercase text-primary mb-4">Termos de Uso</p>
        <h1 className="text-[36px] md:text-[48px] font-bold leading-tight tracking-tight text-foreground mb-4">
          Termos de Uso
        </h1>
        <p className="text-muted-foreground text-[14px] mb-12">Última atualização: maio de 2026</p>

        <div className="space-y-10 text-[15px] text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-[18px] font-semibold text-foreground mb-3">1. Aceitação dos Termos</h2>
            <p>Ao utilizar os serviços da JCN Transportes, seja por meio de nosso site, contato comercial ou contrato de frete, você concorda com os presentes Termos de Uso. Caso não concorde com alguma das condições aqui descritas, recomendamos que não prossiga com a contratação.</p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-foreground mb-3">2. Descrição dos Serviços</h2>
            <p>A JCN Transportes oferece serviços de transporte de cargas nas modalidades frete dedicado, frete fracionado e redespacho, com cobertura em todo o território nacional. A prestação de cada serviço está sujeita à disponibilidade de rota, volume e condições operacionais no momento da contratação.</p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-foreground mb-3">3. Responsabilidades do Contratante</h2>
            <p>O contratante é responsável por fornecer informações precisas sobre a carga, incluindo peso, dimensões, natureza da mercadoria e documentação fiscal. Informações incorretas podem resultar em atrasos, cobranças adicionais ou recusa do serviço.</p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-foreground mb-3">4. Prazos e Entregas</h2>
            <p>Os prazos informados no ato da cotação são estimativas baseadas nas condições normais de tráfego, clima e operação. A JCN Transportes não se responsabiliza por atrasos decorrentes de fatores externos como greves, interdições de vias, calamidades públicas ou problemas de ordem fiscal junto ao destinatário.</p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-foreground mb-3">5. Avarias e Extravio</h2>
            <p>Em caso de avaria ou extravio de carga, o contratante deverá comunicar a ocorrência em até 24 horas após a entrega. A responsabilidade da JCN Transportes fica limitada ao valor declarado da mercadoria ou ao limite previsto na legislação vigente de transporte rodoviário de cargas.</p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-foreground mb-3">6. Pagamento</h2>
            <p>Os valores de frete são definidos na cotação e confirmados no momento da contratação. O não pagamento nos prazos acordados poderá resultar na suspensão dos serviços e incidência de encargos conforme contrato.</p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-foreground mb-3">7. Alterações nos Termos</h2>
            <p>A JCN Transportes reserva-se o direito de atualizar estes Termos de Uso a qualquer momento. As alterações entram em vigor na data de publicação no site. O uso continuado dos serviços após qualquer alteração implica na aceitação dos novos termos.</p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-foreground mb-3">8. Contato</h2>
            <p>Dúvidas sobre estes Termos podem ser enviadas para <a href="mailto:ouvidoria@jcntransportes.com.br" className="text-primary hover:underline">ouvidoria@jcntransportes.com.br</a> ou pelo telefone <a href="tel:+5519990038302" className="text-primary hover:underline">(19) 99003-8302</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
