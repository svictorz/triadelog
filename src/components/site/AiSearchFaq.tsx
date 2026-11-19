const faqs = [
  {
    question: "Quais modalidades de frete a JCN Transportes oferece?",
    answer:
      "A JCN Transportes oferece frete dedicado, frete compartilhado, redespacho, frete aéreo e frete marítimo para cargas empresariais em todo o Brasil.",
  },
  {
    question: "Onde fica a sede da JCN Transportes?",
    answer:
      "A JCN Transportes fica na R. Alcides Modesto de Camargo, 390 - Sala C, Parque Santa Bárbara, em Campinas, SP.",
  },
  {
    question: "Como solicitar uma cotação de frete?",
    answer:
      "Você pode solicitar uma cotação pelo site, pelo WhatsApp (19) 99003-8302 ou pelo e-mail comercial@jcntransportes.com.",
  },
  {
    question: "A JCN Transportes atende todo o Brasil?",
    answer:
      "Sim. A JCN Transportes realiza coletas e entregas em todo o território nacional com rede de motoristas cadastrados e acompanhamento de ponta a ponta.",
  },
];

export function AiSearchFaq() {
  return (
    <section id="perguntas-frequentes" className="bg-surface py-16 md:py-24 premium-fade-in">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-text">
            Perguntas frequentes
          </p>
          <h2 className="text-[28px] font-bold leading-tight text-foreground md:text-[42px]">
            Respostas diretas sobre a JCN Transportes
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-md border border-border bg-white p-5">
              <h3 className="text-[15px] font-semibold leading-snug text-foreground">{faq.question}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}