import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "JCN Transportes | Frete Dedicado e Fracionado — Campinas/SP" },
      { name: "description", content: "JCN Transportes: frete dedicado, fracionado e redespacho para todo o Brasil. Sede em Campinas/SP, rede com mais de 9 mil motoristas." },
      { name: "author", content: "JCN Transportes" },
      { property: "og:site_name", content: "JCN Transportes" },
      { property: "og:title", content: "JCN Transportes | Frete Dedicado e Fracionado — Campinas/SP" },
      { property: "og:description", content: "Frete dedicado, fracionado e redespacho para todo o Brasil. Cotação rápida, prazo real e equipe que responde. Campinas/SP." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:image", content: "https://jcnstats.lovable.app/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "JCN Transportes | Frete Dedicado e Fracionado — Campinas/SP" },
      { name: "twitter:description", content: "Frete dedicado, fracionado e redespacho para todo o Brasil. Campinas/SP." },
      { name: "twitter:image", content: "https://jcnstats.lovable.app/og-image.jpg" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://jcnstats.lovable.app/#organization",
      "name": "JCN Transportes",
      "url": "https://jcnstats.lovable.app",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jcnstats.lovable.app/logo.png",
        "width": 200,
        "height": 80
      },
      "description": "Transportadora com sede em Campinas/SP, especializada em frete dedicado, fracionado e redespacho para todo o Brasil.",
      "foundingDate": "2023",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "R. Alcides Modesto de Camargo, 390 — Sala C",
        "addressLocality": "Campinas",
        "addressRegion": "SP",
        "postalCode": "13064-030",
        "addressCountry": "BR"
      },
      "telephone": "+55-19-99003-8302",
      "email": "ouvidoria@jcntransportes.com.br",
      "areaServed": {
        "@type": "Country",
        "name": "Brasil"
      },
      "serviceType": ["Frete Dedicado", "Frete Fracionado", "Redespacho", "Frete Aéreo", "Frete Marítimo"],
      "sameAs": [
        "https://wa.me/5519990038302"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://jcnstats.lovable.app/#website",
      "url": "https://jcnstats.lovable.app",
      "name": "JCN Transportes",
      "description": "Frete dedicado, fracionado e redespacho para todo o Brasil. Sede em Campinas/SP.",
      "inLanguage": "pt-BR",
      "publisher": { "@id": "https://jcnstats.lovable.app/#organization" }
    },
    {
      "@type": "FAQPage",
      "@id": "https://jcnstats.lovable.app/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quais modalidades de frete a JCN Transportes oferece?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A JCN Transportes oferece frete dedicado, frete fracionado, redespacho, frete aéreo e frete marítimo, atendendo todo o território nacional."
          }
        },
        {
          "@type": "Question",
          "name": "Onde fica a sede da JCN Transportes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nossa sede está localizada em Campinas, SP — R. Alcides Modesto de Camargo, 390, Sala C, Parque Santa Bárbara, CEP 13.064-030."
          }
        },
        {
          "@type": "Question",
          "name": "Como solicitar uma cotação de frete?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Você pode solicitar uma cotação gratuita pelo site, pelo WhatsApp (19) 99003-8302 ou pelo e-mail ouvidoria@jcntransportes.com.br. Respondemos em até 2 horas úteis."
          }
        },
        {
          "@type": "Question",
          "name": "A JCN Transportes atende todo o Brasil?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. Com uma rede de mais de 9 mil motoristas autônomos cadastrados, a JCN Transportes realiza coletas e entregas em todo o território nacional."
          }
        }
      ]
    }
  ]
};

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
