import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/lgpd")({
  component: LGPD,
  head: () => ({
    meta: [
      { title: "LGPD — JCN Transportes" },
      { name: "description", content: "Como a JCN Transportes aplica a Lei Geral de Proteção de Dados (LGPD) em suas operações." },
    ],
  }),
});

function LGPD() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-6 py-24">
        <Link to="/" className="inline-flex items-center gap-2 text-[13px] text-muted-foreground hover:text-foreground transition-colors mb-12">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Voltar ao site
        </Link>

        <p className="text-[11px] tracking-[0.18em] uppercase text-primary mb-4">Conformidade</p>
        <h1 className="text-[36px] md:text-[48px] font-bold leading-tight tracking-tight text-foreground mb-4">
          LGPD
        </h1>
        <p className="text-muted-foreground text-[14px] mb-2">Lei Geral de Proteção de Dados — Lei nº 13.709/2018</p>
        <p className="text-muted-foreground text-[14px] mb-12">Última atualização: maio de 2026</p>

        <div className="space-y-10 text-[15px] text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-[18px] font-semibold text-foreground mb-3">1. Nosso compromisso com a LGPD</h2>
            <p>A JCN Transportes está comprometida com a conformidade à Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Tratamos os dados pessoais de nossos clientes, parceiros e visitantes com transparência, segurança e responsabilidade.</p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-foreground mb-3">2. Base legal para tratamento de dados</h2>
            <p>O tratamento de dados pessoais pela JCN Transportes é realizado com base nas seguintes hipóteses legais previstas na LGPD:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Consentimento do titular, quando solicitado expressamente",
                "Execução de contrato, quando necessário para prestação do serviço contratado",
                "Cumprimento de obrigação legal ou regulatória",
                "Legítimo interesse, para fins de contato comercial e melhoria dos serviços",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-foreground mb-3">3. Direitos dos titulares</h2>
            <p>Conforme previsto na LGPD, você possui os seguintes direitos em relação aos seus dados pessoais:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Confirmação da existência de tratamento",
                "Acesso aos dados",
                "Correção de dados incompletos, inexatos ou desatualizados",
                "Anonimização, bloqueio ou eliminação de dados desnecessários",
                "Portabilidade dos dados a outro fornecedor",
                "Eliminação dos dados tratados com consentimento",
                "Informação sobre compartilhamento com terceiros",
                "Revogação do consentimento",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-foreground mb-3">4. Encarregado de dados (DPO)</h2>
            <p>Caso queira exercer qualquer dos direitos acima ou tirar dúvidas sobre o tratamento dos seus dados, entre em contato com nosso canal de atendimento:</p>
            <div className="mt-4 glass-pro rounded-xl p-5 space-y-2">
              <p><span className="text-foreground font-medium">E-mail:</span> <a href="mailto:ouvidoria@jcntransportes.com.br" className="text-primary hover:underline">ouvidoria@jcntransportes.com.br</a></p>
              <p><span className="text-foreground font-medium">Telefone:</span> <a href="tel:+5519990038302" className="text-primary hover:underline">(19) 99003-8302</a></p>
              <p><span className="text-foreground font-medium">Endereço:</span> R. Alcides Modesto de Camargo, 390 — Sala C, Parque Santa Bárbara, Campinas/SP</p>
            </div>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-foreground mb-3">5. Incidentes de segurança</h2>
            <p>Em caso de incidente de segurança que possa acarretar risco ou dano relevante aos titulares, a JCN Transportes comunicará o fato à Autoridade Nacional de Proteção de Dados (ANPD) e aos titulares afetados, conforme previsto na LGPD.</p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-foreground mb-3">6. Atualizações desta política</h2>
            <p>Esta política pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou na legislação vigente. Recomendamos a consulta periódica a esta página.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
