import { Instagram, Mail, MapPin, Phone } from "lucide-react";

import logo from "@/assets/logo.png";

const legalLinks = [
  { href: "/termos", label: "Termos de Uso" },
  { href: "/privacidade", label: "Política de Privacidade" },
  { href: "/lgpd", label: "LGPD" },
];

export function ContactFooter() {
  return (
    <footer id="contato" className="relative mt-8 overflow-hidden pt-20 pb-10" style={{ background: "oklch(0.18 0.05 250)" }}>
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 premium-fade-in md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="max-w-md">
          <img src={logo} alt="JCN Transportes" loading="lazy" className="h-10 w-auto object-contain" />
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Transporte rodoviário, aéreo, marítimo e redespacho com atendimento nacional para cargas empresariais.
          </p>
          <p className="mt-5 text-xs leading-relaxed text-muted-foreground/70">
            CNPJ 61.800.528/0001-30
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Contato</h3>
          <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>R. Alcides Modesto de Camargo, 390 - Sala C<br />Parque Santa Bárbara - SP - CEP 13.064-030</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a href="mailto:ouvidoria@jcntransportes.com.br" className="transition hover:text-foreground">
                ouvidoria@jcntransportes.com.br
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a href="tel:+5519990038302" className="transition hover:text-foreground">
                +55 19 99003-8302
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Institucional</h3>
          <nav className="mt-5 flex flex-col gap-3 text-sm text-muted-foreground" aria-label="Links institucionais">
            {legalLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-foreground">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Redes sociais</h3>
            <a
              href="https://www.instagram.com/jcnlogistica/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da JCN Logística"
              className="mt-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-white/5 text-foreground transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-12 flex max-w-6xl flex-col gap-3 border-t border-border px-6 pt-6 text-xs text-muted-foreground/70 md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} JCN Transportes. Todos os direitos reservados.</span>
        <span>Atendimento e cotações pelos canais oficiais da empresa.</span>
      </div>
    </footer>
  );
}
