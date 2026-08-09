import { useState, useRef } from "react";

function sanitize(value: string): string {
  return value.replace(/[<>"'`]/g, "").trim().slice(0, 1200);
}

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function isValidPhone(v: string) {
  const digits = v.replace(/\D/g, "");
  return /^[1-9]{2}9\d{8}$/.test(digits);
}

function field(data: FormData, name: string) {
  return sanitize(data.get(name) as string);
}

export function QuoteBar() {
  const [step, setStep] = useState<1 | 2>(1);
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const honeypotRef = useRef<HTMLInputElement>(null);
  const loadTime = useRef(Date.now());

  const inputClass = "bg-surface text-foreground text-[13px] placeholder:text-muted-foreground rounded-md px-3 py-2.5 border border-border focus:outline-none focus:border-primary transition";
  const readOnlyClass = "bg-surface/80 text-foreground text-[13px] rounded-md px-3 py-2.5 border border-border";
  const labelClass = "text-[12px] font-semibold text-foreground";

  const handleFirstStep = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nextErrors: Record<string, string> = {};
    if (sanitize(origem).length < 3) nextErrors.origem = "Informe a cidade ou CEP de origem";
    if (sanitize(destino).length < 3) nextErrors.destino = "Informe a cidade ou CEP de destino";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setStep(2);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (honeypotRef.current?.value) return;
    if (Date.now() - loadTime.current < 2000) return;

    const data = new FormData(e.currentTarget);
    const origemSanitized = sanitize(origem);
    const destinoSanitized = sanitize(destino);
    const quantidade = field(data, "quantidade");
    const peso = field(data, "peso");
    const cubagem = field(data, "cubagem");
    const pesoCubico = field(data, "pesoCubico");
    const valorNota = field(data, "valorNota");
    const itemQuantidade = field(data, "itemQuantidade");
    const altura = field(data, "altura");
    const largura = field(data, "largura");
    const comprimento = field(data, "comprimento");
    const observacoes = field(data, "observacoes");
    const nome = field(data, "nome");
    const email = field(data, "email");
    const tel = field(data, "tel");
    const termos = data.get("termos") === "on";

    const newErrors: Record<string, string> = {};
    if (origemSanitized.length < 3) newErrors.origem = "Informe a cidade ou CEP de origem";
    if (destinoSanitized.length < 3) newErrors.destino = "Informe a cidade ou CEP de destino";
    if (!quantidade) newErrors.quantidade = "Informe a quantidade";
    if (!peso) newErrors.peso = "Informe o peso";
    if (!valorNota) newErrors.valorNota = "Informe o valor da nota";
    if (!itemQuantidade) newErrors.itemQuantidade = "Informe a quantidade do item";
    if (!altura) newErrors.altura = "Informe a altura";
    if (!largura) newErrors.largura = "Informe a largura";
    if (!comprimento) newErrors.comprimento = "Informe o comprimento";
    if (!observacoes || observacoes.length < 5) newErrors.observacoes = "Informe as observações da carga";
    if (!nome || nome.length < 3) newErrors.nome = "Nome inválido";
    if (!isValidEmail(email)) newErrors.email = "Informe um e-mail válido";
    if (!isValidPhone(tel)) newErrors.tel = "Informe um WhatsApp válido com DDD e 9 dígitos";
    if (!termos) newErrors.termos = "Aceite os termos para continuar";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const cargaLines = [
      `Quantidade: ${quantidade} Un`,
      `Peso: ${peso} Kg`,
      cubagem ? `Cubagem: ${cubagem} m3` : "",
      pesoCubico ? `Peso Cubico: ${pesoCubico} Kg` : "",
      `Valor de Nota: R$ ${valorNota}`,
    ].filter(Boolean);
    const itemCubagem = cubagem ? ` | ${cubagem} m3` : "";

    const quoteMessage = [
      `Origem: ${origemSanitized}`,
      `Destino: ${destinoSanitized}`,
      "",
      ...cargaLines,
      "Itens:",
      `- ${itemQuantidade} un | ${altura}x${largura}x${comprimento} cm${itemCubagem}`,
      `Observações: ${observacoes}`,
      "",
      "Atenciosamente,",
      `Nome: ${nome}`,
      `Whatsapp: ${tel}`,
      `E-mail: ${email}`,
    ].join("\n");

    setLoading(true);
    window.open(`https://wa.me/5511992975589?text=${encodeURIComponent(quoteMessage)}`, "_blank", "noopener,noreferrer");
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contato" className="relative max-w-6xl mx-auto px-4 -mt-10 md:-mt-16 z-20 premium-fade-in">
      <div className="rounded-2xl p-6 md:p-7 glass-pro">
        <div className="mb-6 text-center">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-primary mb-1">Cotação Grátis</p>
          <h2 className="text-[22px] md:text-[28px] font-bold text-foreground leading-tight tracking-tight">
            Solicite sua cotação agora<br />
            <span className="text-primary">sem custo e sem compromisso.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[13px] leading-relaxed text-muted-foreground md:text-[15px]">
            Receba atendimento em até <span className="text-foreground">24h úteis</span> e coleta em até <span className="text-foreground">48 horas</span>.
          </p>
        </div>

        {submitted ? (
          <div className="py-6 text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/15 mb-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 13l4 4L19 7" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-[15px] font-semibold text-foreground">Cotação pronta para envio no WhatsApp.</p>
            <p className="text-[13px] text-muted-foreground mt-1">
              Abrimos a conversa com a mensagem formatada para você revisar e enviar.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                setOrigem("");
                setDestino("");
                setErrors({});
              }}
              className="mt-4 text-[12px] text-primary underline underline-offset-2"
            >
              Enviar nova cotação
            </button>
          </div>
        ) : step === 1 ? (
          <form onSubmit={handleFirstStep} className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-3" noValidate>
            <div className="flex flex-col gap-1">
              <label htmlFor="origem" className={labelClass}>Origem</label>
              <input id="origem" name="origem" type="text" placeholder="Cidade ou CEP de origem" value={origem} onChange={(e) => setOrigem(e.target.value)} maxLength={80} className={inputClass} />
              {errors.origem && <span className="text-[11px] text-red-400">{errors.origem}</span>}
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="destino" className={labelClass}>Destino</label>
              <input id="destino" name="destino" type="text" placeholder="Cidade ou CEP de destino" value={destino} onChange={(e) => setDestino(e.target.value)} maxLength={80} className={inputClass} />
              {errors.destino && <span className="text-[11px] text-red-400">{errors.destino}</span>}
            </div>

            <button type="submit" className="self-end bg-primary text-primary-foreground rounded-full px-6 py-3 text-[13px] font-medium hover:bg-primary/90 transition">
              Continuar
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5" autoComplete="off" noValidate>
            <input ref={honeypotRef} type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }} />

            <div>
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="text-[18px] font-bold text-foreground tracking-normal">Detalhes do transporte</h3>
                <button type="button" onClick={() => setStep(1)} className="text-[12px] font-medium text-primary underline underline-offset-4">Alterar rota</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className={labelClass}>Origem</label>
                  <input type="text" value={origem} readOnly className={readOnlyClass} />
                  {errors.origem && <span className="text-[11px] text-red-400">{errors.origem}</span>}
                </div>
                <div className="flex flex-col gap-1">
                  <label className={labelClass}>Destino</label>
                  <input type="text" value={destino} readOnly className={readOnlyClass} />
                  {errors.destino && <span className="text-[11px] text-red-400">{errors.destino}</span>}
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-[18px] font-bold text-foreground tracking-normal">Dados da carga</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                <div className="flex flex-col gap-1"><label htmlFor="quantidade" className={labelClass}>Quantidade</label><input id="quantidade" name="quantidade" type="text" placeholder="Ex: 2" maxLength={20} autoComplete="off" className={inputClass} />{errors.quantidade && <span className="text-[11px] text-red-400">{errors.quantidade}</span>}</div>
                <div className="flex flex-col gap-1"><label htmlFor="peso" className={labelClass}>Peso (Kg)</label><input id="peso" name="peso" type="text" placeholder="Ex: 250,00" maxLength={20} autoComplete="off" className={inputClass} />{errors.peso && <span className="text-[11px] text-red-400">{errors.peso}</span>}</div>
                <div className="flex flex-col gap-1"><label htmlFor="cubagem" className={labelClass}>Cubagem (m3) <span className="text-muted-foreground font-normal">opcional</span></label><input id="cubagem" name="cubagem" type="text" placeholder="Ex: 1,20" maxLength={20} autoComplete="off" className={inputClass} />{errors.cubagem && <span className="text-[11px] text-red-400">{errors.cubagem}</span>}</div>
                <div className="flex flex-col gap-1"><label htmlFor="pesoCubico" className={labelClass}>Peso Cúbico (Kg) <span className="text-muted-foreground font-normal">opcional</span></label><input id="pesoCubico" name="pesoCubico" type="text" placeholder="Ex: 400,00" maxLength={20} autoComplete="off" className={inputClass} />{errors.pesoCubico && <span className="text-[11px] text-red-400">{errors.pesoCubico}</span>}</div>
                <div className="flex flex-col gap-1"><label htmlFor="valorNota" className={labelClass}>Valor de Nota</label><input id="valorNota" name="valorNota" type="text" placeholder="Ex: 3.500,00" maxLength={30} autoComplete="off" className={inputClass} />{errors.valorNota && <span className="text-[11px] text-red-400">{errors.valorNota}</span>}</div>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-[18px] font-bold text-foreground tracking-normal">Itens</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="flex flex-col gap-1"><label htmlFor="itemQuantidade" className={labelClass}>Quantidade do item</label><input id="itemQuantidade" name="itemQuantidade" type="text" placeholder="Ex: 2" maxLength={20} autoComplete="off" className={inputClass} />{errors.itemQuantidade && <span className="text-[11px] text-red-400">{errors.itemQuantidade}</span>}</div>
                <div className="flex flex-col gap-1"><label htmlFor="altura" className={labelClass}>Altura (cm)</label><input id="altura" name="altura" type="text" placeholder="Ex: 60" maxLength={20} autoComplete="off" className={inputClass} />{errors.altura && <span className="text-[11px] text-red-400">{errors.altura}</span>}</div>
                <div className="flex flex-col gap-1"><label htmlFor="largura" className={labelClass}>Largura (cm)</label><input id="largura" name="largura" type="text" placeholder="Ex: 80" maxLength={20} autoComplete="off" className={inputClass} />{errors.largura && <span className="text-[11px] text-red-400">{errors.largura}</span>}</div>
                <div className="flex flex-col gap-1"><label htmlFor="comprimento" className={labelClass}>Comprimento (cm)</label><input id="comprimento" name="comprimento" type="text" placeholder="Ex: 120" maxLength={20} autoComplete="off" className={inputClass} />{errors.comprimento && <span className="text-[11px] text-red-400">{errors.comprimento}</span>}</div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="observacoes" className={labelClass}>Observações</label>
              <textarea id="observacoes" name="observacoes" placeholder="Ex: 2 volumes embalados em madeira&#10;Carga sem empilhamento&#10;Coleta em horário comercial" maxLength={1200} rows={5} className="min-h-28 resize-y bg-surface text-foreground text-[13px] placeholder:text-muted-foreground rounded-md px-3 py-2.5 border border-border focus:outline-none focus:border-primary transition" />
              {errors.observacoes && <span className="text-[11px] text-red-400">{errors.observacoes}</span>}
            </div>

            <div>
              <h3 className="mb-3 text-[18px] font-bold text-foreground tracking-normal">Dados para contato</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="flex flex-col gap-1"><label htmlFor="nome" className={labelClass}>Nome</label><input id="nome" name="nome" type="text" placeholder="Digite o nome" maxLength={100} autoComplete="off" className={inputClass} />{errors.nome && <span className="text-[11px] text-red-400">{errors.nome}</span>}</div>
                <div className="flex flex-col gap-1"><label htmlFor="tel" className={labelClass}>WhatsApp</label><input id="tel" name="tel" type="tel" placeholder="Digite o WhatsApp" maxLength={20} autoComplete="off" className={inputClass} />{errors.tel && <span className="text-[11px] text-red-400">{errors.tel}</span>}</div>
                <div className="flex flex-col gap-1"><label htmlFor="email" className={labelClass}>E-mail</label><input id="email" name="email" type="email" placeholder="email@exemplo.com" maxLength={150} autoComplete="off" className={inputClass} />{errors.email && <span className="text-[11px] text-red-400">{errors.email}</span>}</div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="flex items-start gap-2 text-[12px] text-muted-foreground">
                <input name="termos" type="checkbox" className="mt-0.5 h-4 w-4 rounded border-border bg-surface accent-primary" />
                <span>Li e concordo com os Termos de Uso e a Política de Privacidade. <a href="/termos" className="text-primary underline underline-offset-2">Leia aqui</a></span>
              </label>
              {errors.termos && <span className="text-[11px] text-red-400">{errors.termos}</span>}
            </div>

            <button type="submit" disabled={loading} className="w-full md:w-auto min-w-72 bg-primary text-primary-foreground rounded-md px-6 py-3 text-[13px] font-semibold uppercase hover:bg-primary/90 disabled:opacity-60 transition flex items-center justify-center gap-2">
              {loading ? <span className="inline-block w-4 h-4 rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground animate-spin" /> : null}
              {loading ? "Abrindo..." : "Enviar cotação no WhatsApp"}
            </button>
          </form>
        )}

        <p className="mt-4 text-center text-[12px] text-muted-foreground/60">
          Sua cotação em até <span className="text-foreground">24h úteis</span> e seu material coletado em até <span className="text-foreground">48 horas</span>!
        </p>
      </div>
    </section>
  );
}







