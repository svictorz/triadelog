import { useState, useRef } from "react";

// ID do formulário no Formspree — cadastre em https://formspree.io e coloque o ID aqui
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID ?? "YOUR_FORMSPREE_ID";

function sanitize(value: string): string {
  return value.replace(/[<>"'`]/g, "").trim().slice(0, 200);
}

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function isValidPhone(v: string) {
  return /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(v.replace(/\s/g, ""));
}

export function QuoteBar() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const honeypotRef = useRef<HTMLInputElement>(null);
  const loadTime = useRef(Date.now());

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (honeypotRef.current?.value) return;
    if (Date.now() - loadTime.current < 2000) return;

    const form = e.currentTarget;
    const data = new FormData(form);

    const cep = sanitize(data.get("cep") as string);
    const nome = sanitize(data.get("nome") as string);
    const email = sanitize(data.get("email") as string);
    const tel = sanitize(data.get("tel") as string);
    const tipo = sanitize(data.get("tipo") as string);

    const newErrors: Record<string, string> = {};
    if (!cep) newErrors.cep = "Informe o CEP";
    if (!nome || nome.length < 3) newErrors.nome = "Nome inválido";
    if (!isValidEmail(email)) newErrors.email = "E-mail inválido";
    if (!isValidPhone(tel)) newErrors.tel = "Telefone inválido";
    if (!tipo) newErrors.tipo = "Selecione o serviço";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    setSendError(false);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Nova cotação de frete — ${nome}`,
          nome,
          cep,
          tipo,
          email,
          telefone: tel,
          _replyto: email,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        // Também abre WhatsApp como canal paralelo
        const msg = encodeURIComponent(
          `Olá! Acabei de solicitar uma cotação pelo site.\n\nNome: ${nome}\nCEP: ${cep}\nServiço: ${tipo}\nE-mail: ${email}\nTelefone: ${tel}`
        );
        window.open(`https://wa.me/5519990038302?text=${msg}`, "_blank", "noopener,noreferrer");
      } else {
        setSendError(true);
      }
    } catch {
      setSendError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="relative max-w-6xl mx-auto px-4 -mt-10 md:-mt-16 z-20 premium-fade-in">
      <div className="rounded-2xl p-6 md:p-7 glass-pro">
        <div className="mb-6">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-primary mb-1">Cotação Grátis</p>
          <h2 className="text-[22px] md:text-[28px] font-bold text-foreground leading-tight tracking-tight">
            Solicite sua cotação agora<br />
            <span className="text-primary">sem custo e sem compromisso.</span>
          </h2>
        </div>

        {submitted ? (
          <div className="py-6 text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/15 mb-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 13l4 4L19 7" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-[15px] font-semibold text-foreground">Cotação enviada com sucesso!</p>
            <p className="text-[13px] text-muted-foreground mt-1">
              Recebemos sua solicitação em <span className="text-foreground font-medium">comercial@jcntransportes.com</span>.<br />
              Também abrimos o WhatsApp para contato imediato.
            </p>
            <button onClick={() => { setSubmitted(false); setSendError(false); }} className="mt-4 text-[12px] text-primary underline underline-offset-2">
              Enviar nova cotação
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-3" noValidate>
            {/* Honeypot — invisível para humanos */}
            <input
              ref={honeypotRef}
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }}
            />

            <div className="flex flex-col gap-1">
              <input
                name="cep"
                type="text"
                placeholder="CEP origem / destino"
                maxLength={20}
                className="bg-surface text-foreground text-[13px] placeholder:text-muted-foreground rounded-md px-3 py-2.5 border border-border focus:outline-none focus:border-primary transition"
              />
              {errors.cep && <span className="text-[11px] text-red-400">{errors.cep}</span>}
            </div>

            <div className="flex flex-col gap-1">
              <select
                name="tipo"
                className="bg-surface text-foreground text-[13px] rounded-md px-3 py-2.5 border border-border focus:outline-none focus:border-primary transition"
                defaultValue=""
              >
                <option value="" disabled>Tipo de serviço</option>
                <option>Lotação Completa</option>
                <option>Carga Fracionada</option>
                <option>Redespacho</option>
                <option>Expresso</option>
              </select>
              {errors.tipo && <span className="text-[11px] text-red-400">{errors.tipo}</span>}
            </div>

            <div className="flex flex-col gap-1">
              <input
                name="nome"
                type="text"
                placeholder="Nome completo"
                maxLength={100}
                className="bg-surface text-foreground text-[13px] placeholder:text-muted-foreground rounded-md px-3 py-2.5 border border-border focus:outline-none focus:border-primary transition"
              />
              {errors.nome && <span className="text-[11px] text-red-400">{errors.nome}</span>}
            </div>

            <div className="flex flex-col gap-1">
              <input
                name="email"
                type="email"
                placeholder="E-mail corporativo"
                maxLength={150}
                className="bg-surface text-foreground text-[13px] placeholder:text-muted-foreground rounded-md px-3 py-2.5 border border-border focus:outline-none focus:border-primary transition"
              />
              {errors.email && <span className="text-[11px] text-red-400">{errors.email}</span>}
            </div>

            <div className="flex flex-col gap-1">
              <input
                name="tel"
                type="tel"
                placeholder="WhatsApp (11 dígitos)"
                maxLength={20}
                className="bg-surface text-foreground text-[13px] placeholder:text-muted-foreground rounded-md px-3 py-2.5 border border-border focus:outline-none focus:border-primary transition"
              />
              {errors.tel && <span className="text-[11px] text-red-400">{errors.tel}</span>}
            </div>

            {sendError && (
              <p className="md:col-span-5 text-center text-[12px] text-red-400">
                Erro ao enviar. Tente pelo{" "}
                <a href="https://wa.me/5519990038302" target="_blank" rel="noopener noreferrer" className="underline">
                  WhatsApp
                </a>{" "}
                ou e-mail <a href="mailto:comercial@jcntransportes.com" className="underline">comercial@jcntransportes.com</a>.
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="md:col-span-5 mt-1 bg-primary text-primary-foreground rounded-full py-3 text-[13px] font-medium hover:bg-primary/90 disabled:opacity-60 transition flex items-center justify-center gap-2"
            >
              {loading ? (
                <span className="inline-block w-4 h-4 rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground animate-spin" />
              ) : null}
              {loading ? "Enviando..." : "Solicitar Cotação Agora"}
            </button>
          </form>
        )}

        <p className="mt-4 text-center text-[12px] text-muted-foreground/60">
          Respondemos em até <span className="text-foreground">2 horas úteis</span> — de segunda a sexta, das 8h às 18h.
        </p>
      </div>
    </section>
  );
}
