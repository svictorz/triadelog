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
      { title: "JCN Transportes | Frete Dedicado e Fracionado" },
      { name: "description", content: "JCN Transportes: frete dedicado, fracionado e redespacho para todo o Brasil. Rede com mais de 9 mil motoristas." },
      { name: "author", content: "JCN Transportes" },
      { property: "og:site_name", content: "JCN Transportes" },
      { property: "og:title", content: "JCN Transportes | Frete Dedicado e Fracionado" },
      { property: "og:description", content: "Frete dedicado, compartilhado e redespacho para todo o Brasil. Atendimento em até 24h úteis e coleta em até 48 horas." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:image", content: "https://jcntransportes.com/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "JCN Transportes | Frete Dedicado e Fracionado" },
      { name: "twitter:description", content: "Frete dedicado, compartilhado e redespacho para todo o Brasil." },
      { name: "twitter:image", content: "https://jcntransportes.com/logo.png" },
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
      "@id": "https://jcntransportes.com/#organization",
      "name": "JCN Transportes",
      "url": "https://jcntransportes.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jcntransportes.com/logo.png",
        "width": 200,
        "height": 80
      },
      "description": "Transportadora com sede em SP, especializada em frete dedicado, fracionado e redespacho para todo o Brasil.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "R. Alcides Modesto de Camargo, 390  -  Sala C",
        "addressRegion": "SP",
        "postalCode": "13064-030",
        "addressCountry": "BR"
      },
      "telephone": "+55-19-99003-8302",
      "email": "comercial@jcntransportes.com",
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
      "@id": "https://jcntransportes.com/#website",
      "url": "https://jcntransportes.com",
      "name": "JCN Transportes",
      "description": "Frete dedicado, compartilhado e redespacho para todo o Brasil. Cobertura nacional.",
      "inLanguage": "pt-BR",
      "publisher": { "@id": "https://jcntransportes.com/#organization" }
    },
    {
      "@type": "FAQPage",
      "@id": "https://jcntransportes.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quais modalidades de frete a JCN Transportes oferece?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A JCN Transportes oferece frete dedicado, frete compartilhado, redespacho, frete aéreo e frete marítimo para cargas empresariais em todo o Brasil."
          }
        },
        {
          "@type": "Question",
          "name": "Onde fica a sede da JCN Transportes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A JCN Transportes fica na R. Alcides Modesto de Camargo, 390 - Sala C, Parque Santa Bárbara, em Campinas, SP."
          }
        },
        {
          "@type": "Question",
          "name": "Como solicitar uma cotação de frete?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Você pode solicitar uma cotação pelo site, pelo WhatsApp (19) 99003-8302 ou pelo e-mail comercial@jcntransportes.com."
          }
        },
        {
          "@type": "Question",
          "name": "A JCN Transportes atende todo o Brasil?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. A JCN Transportes realiza coletas e entregas em todo o território nacional com rede de motoristas cadastrados e acompanhamento de ponta a ponta."
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



