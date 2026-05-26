import { Leaf } from "lucide-react";
import { useState } from "react";

export function QuoteBar() {
  const [loading, setLoading] = useState(false);
  return (
    <section className="relative max-w-6xl mx-auto px-4 -mt-10 md:-mt-16 z-20 premium-fade-in">
      <div className="rounded-2xl p-6 md:p-7 shadow-2xl" style={{ background: "#f5efe2" }}>
        <div className="flex items-center gap-2 mb-5 text-[#3b4a2b]">
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
                className="bg-white text-[#1a1a1a] text-[13px] rounded-md px-3 py-2.5 border border-[#d9d2c0] focus:outline-none focus:border-[#3b4a2b]"
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
                className="bg-white text-[#1a1a1a] text-[13px] placeholder:text-neutral-400 rounded-md px-3 py-2.5 border border-[#d9d2c0] focus:outline-none focus:border-[#3b4a2b]"
              />
            )
          )}
          <button
            type="submit"
            className="md:col-span-5 mt-1 bg-black text-white rounded-full py-3 text-[13px] font-medium hover:bg-black/85 transition flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="inline-block w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
            ) : null}
            {loading ? "Calculando..." : "Calcular Frete Instantâneo"}
          </button>
        </form>
      </div>
    </section>
  );
}
