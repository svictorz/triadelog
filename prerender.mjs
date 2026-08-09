/**
 * Prerender SSR: importa o bundle do servidor (CF Worker),
 * faz uma requisição fake para "/" e salva o HTML resultante
 * em dist/client/index.html - para deploy estático na Vercel.
 */
import { existsSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distClient = join(__dirname, "dist", "client");

if (!existsSync(distClient)) {
  mkdirSync(distClient, { recursive: true });
}

// Importar o worker entry (Cloudflare Worker format)
// No Windows, dynamic import precisa de URL file://
const serverEntry = new URL("dist/server/index.js", import.meta.url).href;

let html = null;

try {
  const workerModule = await import(serverEntry);
  const worker = workerModule.default;

  if (worker && typeof worker.fetch === "function") {
    // Simular ExecutionContext mínimo
    const ctx = {
      waitUntil: (p) => p,
      passThroughOnException: () => {},
    };

    // Fazer requisição para "/"
    const request = new Request("http://localhost/", {
      method: "GET",
      headers: { "Accept": "text/html", "x-prerender": "1" },
    });

    const response = await worker.fetch(request, {}, ctx);

    if (response && response.ok) {
      html = await response.text();
      console.log("SSR realizado com sucesso - HTML gerado pelo servidor.");
    } else {
      console.warn(`Server respondeu ${response?.status} - usando fallback.`);
    }
  }
} catch (err) {
  console.warn("Falha ao importar server bundle:", err.message);
}

// Fallback: se SSR falhou, gerar HTML com TanStack-compatible shell
if (!html) {
  console.log("Usando fallback HTML (hydration via CSR)...");

  // Ler manifest do client para pegar assets com hashes corretos
  const clientManifestPath = join(__dirname, "dist", "client", ".vite", "manifest.json");
  let clientEntry = "";
  let clientCss = "";

  if (existsSync(clientManifestPath)) {
    const { readFileSync } = await import("node:fs");
    const m = JSON.parse(readFileSync(clientManifestPath, "utf-8"));

    for (const [, val] of Object.entries(m)) {
      if (val.isEntry) {
        if (!clientEntry) clientEntry = `/assets/${val.file.replace("assets/", "")}`;
      }
      if (val.css?.length && !clientCss) {
        clientCss = `/assets/${val.css[0].replace("assets/", "")}`;
      }
    }
  }

  if (!clientEntry || !clientCss) {
    const { readdirSync } = await import("node:fs");
    const assets = readdirSync(join(distClient, "assets")).filter(
      (f) => !f.endsWith(".woff") && !f.endsWith(".woff2") && !f.endsWith(".png")
    );
    const jsFile = assets.find(
      (f) => f.startsWith("index-") && f.endsWith(".js") && !f.includes("privacidade") && !f.includes("termos") && !f.includes("lgpd")
    );
    const cssFile = assets.find((f) => f.endsWith(".css"));
    if (!clientEntry && jsFile) clientEntry = `/assets/${jsFile}`;
    if (!clientCss && cssFile) clientCss = `/assets/${cssFile}`;
  }

  // Gerar um HTML que o TanStack Start consegue hidratar:
  // body vazio + scripts - o router detecta ausência de SSR e faz CSR.
  html = `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JCN Transportes | Frete Dedicado e Fracionado</title>
    <meta name="description" content="JCN Transportes: frete dedicado, fracionado e redespacho para todo o Brasil. Rede com mais de 9 mil motoristas. Solicite sua cotação grátis." />
    <meta name="robots" content="index, follow" />
    <meta name="keywords" content="frete dedicado brasil, transportadora brasil, frete fracionado sp, redespacho brasil" />
    <meta property="og:title" content="JCN Transportes | Frete Dedicado e Fracionado" />
    <meta property="og:description" content="Frete dedicado, fracionado e redespacho para todo o Brasil." />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="pt_BR" />
    <link rel="icon" href="/favicon.ico" />
    ${clientCss ? `<link rel="stylesheet" href="${clientCss}" />` : ""}
    ${clientEntry ? `<script type="module" src="${clientEntry}"></script>` : ""}
  </head>
  <body>
  </body>
</html>`;
}

writeFileSync(join(distClient, "index.html"), html, "utf-8");
console.log("dist/client/index.html salvo.");

