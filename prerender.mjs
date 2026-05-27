/**
 * Script de pre-render: executa o servidor SSR localmente,
 * faz requisição para / e salva o HTML em dist/client/index.html
 * para que a Vercel consiga servir o site como SPA estático.
 */
import { createServer } from "node:http";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distClient = join(__dirname, "dist", "client");

// Garante que dist/client existe
if (!existsSync(distClient)) {
  mkdirSync(distClient, { recursive: true });
}

// Tenta importar o server bundle gerado pelo build
const serverEntry = join(__dirname, "dist", "server", "assets");

// Monta um HTML shell mínimo que carrega os assets do client
// e deixa o React/TanStack Router hidratarem no browser
const manifestPath = join(__dirname, "dist", "server", ".vite", "manifest.json");

let entryJs = "index.js";
let entryCss = "styles.css";

if (existsSync(manifestPath)) {
  const manifest = JSON.parse(readFileSync(manifestPath, "utf-8"));
  // Encontra o entry principal
  for (const [key, val] of Object.entries(manifest)) {
    if (key.includes("routes/index") || key === "index.html") {
      entryJs = val.file || entryJs;
    }
    if (val.css) entryCss = val.css[0] || entryCss;
  }
}

// Lê manifest do client para pegar os hashes corretos
const clientManifestPath = join(__dirname, "dist", "client", ".vite", "manifest.json");
let clientEntry = "";
let clientCss = "";

if (existsSync(clientManifestPath)) {
  const m = JSON.parse(readFileSync(clientManifestPath, "utf-8"));
  for (const [key, val] of Object.entries(m)) {
    if ((key.includes("routes/index") || key.includes("main")) && val.isEntry) {
      clientEntry = `/assets/${val.file?.replace("assets/", "") || val.file}`;
    }
    if (val.css?.length) {
      clientCss = `/assets/${val.css[0].replace("assets/", "")}`;
    }
  }
  // fallback: pega o primeiro entry
  if (!clientEntry) {
    for (const [key, val] of Object.entries(m)) {
      if (val.isEntry) {
        clientEntry = `/assets/${val.file?.replace("assets/", "") || val.file}`;
        break;
      }
    }
  }
}

// Se não achou via manifest, usa os arquivos em dist/client/assets
if (!clientEntry || !clientCss) {
  const { readdirSync } = await import("node:fs");
  const assets = readdirSync(join(distClient, "assets")).filter(f => !f.endsWith(".woff") && !f.endsWith(".woff2") && !f.endsWith(".png"));
  const jsEntry = assets.find(f => f.startsWith("index-") && f.endsWith(".js") && !f.includes("privacidade") && !f.includes("termos") && !f.includes("lgpd"));
  const cssEntry = assets.find(f => f.endsWith(".css"));
  if (!clientEntry && jsEntry) clientEntry = `/assets/${jsEntry}`;
  if (!clientCss && cssEntry) clientCss = `/assets/${cssEntry}`;
}

const html = `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JCN Transportes | Frete Dedicado e Fracionado — Campinas/SP</title>
    <meta name="description" content="JCN Transportes: frete dedicado, fracionado e redespacho para todo o Brasil. Sede em Campinas/SP, rede com mais de 9 mil motoristas. Solicite sua cotação grátis." />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="JCN Transportes | Frete Dedicado e Fracionado — Campinas/SP" />
    <meta property="og:description" content="Frete dedicado, fracionado e redespacho para todo o Brasil. Campinas/SP." />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="pt_BR" />
    <link rel="icon" href="/favicon.ico" />
    ${clientCss ? `<link rel="stylesheet" href="${clientCss}" />` : ""}
    ${clientEntry ? `<script type="module" src="${clientEntry}"></script>` : ""}
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`;

writeFileSync(join(distClient, "index.html"), html, "utf-8");
console.log(`✓ index.html gerado em dist/client/index.html`);
console.log(`  CSS: ${clientCss}`);
console.log(`  JS:  ${clientEntry}`);
