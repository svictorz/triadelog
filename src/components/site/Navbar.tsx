import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const links = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Cotações", href: "#contato" },
  { label: "Clientes", href: "#clientes" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Fecha menu ao rolar
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("scroll", close, { passive: true });
    return () => window.removeEventListener("scroll", close);
  }, []);

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav className="glass rounded-full px-5 py-3 flex items-center gap-5 w-auto max-w-[calc(100vw-2rem)]">
        {/* Logo */}
        <a href="#" className="flex items-center shrink-0">
          <img src={logo} alt="JCN Logística" className="h-8 w-auto object-contain" />
        </a>

        <div className="hidden md:block w-px h-5 bg-border shrink-0" />

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-[15px] tracking-wide text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block w-px h-5 bg-border shrink-0" />

        {/* CTA desktop */}
        <a
          href="#contato"
          className="hidden md:inline-flex items-center gap-2 text-[13px] font-semibold text-background bg-primary hover:bg-primary/90 transition-colors px-4 py-2 rounded-full whitespace-nowrap"
        >
          Fale Conosco
        </a>

        {/* Hamburger mobile */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] shrink-0"
        >
          <span className={`block h-0.5 w-5 bg-foreground rounded-full transition-all duration-200 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-0.5 w-5 bg-foreground rounded-full transition-all duration-200 ${open ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-foreground rounded-full transition-all duration-200 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {/* Menu mobile dropdown */}
      <div
        className={`md:hidden absolute top-[calc(100%+8px)] inset-x-4 glass rounded-2xl overflow-hidden transition-all duration-200 origin-top ${
          open ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-90 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col py-2">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 text-[15px] text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors border-b border-border/40 last:border-0"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="px-4 py-4">
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-[14px] font-semibold text-background bg-primary hover:bg-primary/90 transition-colors px-4 py-3 rounded-full"
            >
              Fale Conosco
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
