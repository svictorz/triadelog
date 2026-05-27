import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidade")({
  component: Privacidade,
  head: () => ({
    meta: [
      { title: "Política de Privacidade — JCN Transportes" },
      { name: "description", content: "Como a JCN Transportes coleta, usa e protege seus dados pessoais." },
    ],
  }),
});

function Privacidade() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-6 py-24">
        <Link to="/" className="inline-flex items-center gap-2 text-[13px] text-muted-foreground hover:text-foreground transition-colors mb-12">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Voltar ao site
        </Link>

        <p className="text-[11px] tracking-[0.18em] uppercase text-primary mb-4">Privacidade</p>
        <h1 className="text-[36px] md:text-[48px] font-bold leading-tight tracking-tight text-foreground mb-4">
          Política de Privacidade
        </h1>
        <p className="text-muted-foreground text-[14px] mb-12">Última atualização: maio de 2026</p>

        <div className="space-y-10 text-[15px] text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-[18px] font-semibold text-foreground mb-3">1. Quem somos</h2>
            <p>A JCN Transportes, com sede na R. Alcides Modesto de Camargo, 390 — Sala C, Parque Santa Bárbara, Campinas/SP, CEP 13.064-030, é responsável pelo tratamento dos dados pessoais coletados em nosso site e em nossas operações comerciais.</p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-foreground mb-3">2. Dados que coletamos</h2>
            <p>Coletamos dados fornecidos diretamente por você, como nome, cargo, e-mail, telefone e informações sobre volume de carga, quando você preenche nossos formulários de cotação ou contato. Também coletamos dados de navegação de forma automática (IP, navegador, páginas visitadas) para fins de análise e melhoria do site.</p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-foreground mb-3">3. Como usamos seus dados</h2>
            <p>Seus dados são utilizados exclusivamente para: responder solicitações de cotação e contato; enviar informações sobre nossos serviços quando solicitado; cumprir obrigações contratuais e legais; e melhorar a experiência de navegação em nosso site.</p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-foreground mb-3">4. Compartilhamento de dados</h2>
            <p>Não vendemos, alugamos nem compartilhamos seus dados pessoais com terceiros para fins comerciais. Dados podem ser compartilhados apenas com parceiros operacionais necessários para a execução do serviço contratado, ou quando exigido por lei ou autoridade competente.</p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-foreground mb-3">5. Armazenamento e segurança</h2>
            <p>Seus dados são armazenados em ambiente seguro e ficam retidos pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido pela legislação vigente. Adotamos medidas técnicas e organizacionais para proteger suas informações contra acesso não autorizado.</p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-foreground mb-3">6. Seus direitos</h2>
            <p>Você tem direito a acessar, corrigir, excluir ou solicitar a portabilidade dos seus dados pessoais a qualquer momento. Para exercer esses direitos, entre em contato pelo e-mail <a href="mailto:ouvidoria@jcntransportes.com.br" className="text-primary hover:underline">ouvidoria@jcntransportes.com.br</a>.</p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-foreground mb-3">7. Cookies</h2>
            <p>Nosso site pode utilizar cookies para melhorar a experiência de navegação. Você pode configurar seu navegador para recusar cookies, mas isso pode limitar algumas funcionalidades do site.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
