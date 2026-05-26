import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Clientes", href: "#clientes" },
  { label: "Quem Somos", href: "#quem-somos" },
];

export function Navbar() {
  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav className="glass rounded-full px-5 py-2.5 flex items-center gap-8 max-w-5xl w-full">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M3 6l6 6-6 6M11 6l6 6-6 6" stroke="var(--cyan)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-foreground font-medium tracking-tight text-[15px]">JCN Transportes</span>
        </a>
        <ul className="hidden md:flex items-center gap-7 mx-auto">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-[13px] text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 shrink-0">
          <a href="#contato" className="hidden sm:inline-flex text-[13px] text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-full border border-border transition">
            Entrar no Sistema
          </a>
          <a href="#contato" className="inline-flex items-center gap-1.5 bg-white text-background text-[13px] font-medium pl-4 pr-1 py-1 rounded-full hover:bg-white/90 transition">
            Agendar Demonstração
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}
