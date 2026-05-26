import { Leaf } from "lucide-react";
import { useState } from "react";

export function QuoteBar() {
  const [loading, setLoading] = useState(false);
  return (
    <section className="relative max-w-6xl mx-auto px-4 -mt-10 md:-mt-16 z-20 premium-fade-in">
      <div className="rounded-2xl p-6 md:p-7 shadow-2xl glass border border-border">
        <div className="flex items-center gap-2 mb-5 text-primary">
          <Leaf className="w-4 h-4" />
          <span className="text-[13px] font-medium tracking-tight">Solicitar Cotação de Frete Gratuita</span>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            setTimeout(() => setLoading(false), 1400);
          }}
          className="grid grid-cols-1 md:grid-cols-5 gap-3"
        >
          {[
            { ph: "CEP origem / destino", type: "text" },
            { ph: "Tipo de serviço", type: "select", opts: ["Lotação Completa", "Carga Fracionada", "Expresso"] },
            { ph: "Nome completo", type: "text" },
            { ph: "E-mail corporativo", type: "email" },
            { ph: "WhatsApp (11 dígitos)", type: "tel" },
          ].map((f) =>
            f.type === "select" ? (
              <select
                key={f.ph}
                className="bg-surface text-foreground text-[13px] rounded-md px-3 py-2.5 border border-border focus:outline-none focus:border-primary transition"
                defaultValue=""
              >
                <option value="" disabled>{f.ph}</option>
                {f.opts!.map((o) => <option key={o}>{o}</option>)}
              </select>
            ) : (
              <input
                key={f.ph}
                type={f.type}
                placeholder={f.ph}
                className="bg-surface text-foreground text-[13px] placeholder:text-muted-foreground rounded-md px-3 py-2.5 border border-border focus:outline-none focus:border-primary transition"
              />
            )
          )}
          <button
            type="submit"
            className="md:col-span-5 mt-1 bg-primary text-primary-foreground rounded-full py-3 text-[13px] font-medium hover:bg-primary/90 transition flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="inline-block w-4 h-4 rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground animate-spin" />
            ) : null}
            {loading ? "Calculando..." : "Calcular Frete Instantâneo"}
          </button>
        </form>
      </div>
    </section>
  );
}
