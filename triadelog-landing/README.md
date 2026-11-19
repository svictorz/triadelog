# TriadeLog Brasil — landing page

Site estático (HTML + CSS + JS puro, sem build) em uma pasta separada do app React.
Layout inspirado na referência enviada: hero com caminhão, 4 pilares, etapas numeradas,
galeria, calculadora de custo, tipos de frete, FAQ e formulário de cotação.

## Rodar localmente

Abra `index.html` direto no navegador ou sirva a pasta:

```bash
python3 -m http.server 8081 --directory triadelog-landing
```

## Contato configurado

| Dado | Valor | Onde |
|---|---|---|
| WhatsApp | (19) 99509-9261 | `assets/js/main.js` → `CONTATO.whatsapp` (`5519995099261`, só dígitos com DDI) |
| E-mail | comercial@triadelog.com.br | `assets/js/main.js` → `CONTATO.email` e o rodapé no `index.html` |
| Endereço | R. dos Estudantes, 375 — Jardim do Bosque, Hortolândia/SP, 13186-220 | rodapé no `index.html` |
| CNPJ | 69.405.638/0001-09 | rodapé no `index.html` |

Triade Log Brasil Ltda — CNPJ 69.405.638/0001-09, sede em Hortolândia/SP.

Para trocar o WhatsApp por outro número, edite só `CONTATO.whatsapp` em `assets/js/main.js`:
o rodapé, o botão flutuante e os dois formulários se ajustam sozinhos.

## Estrutura

```
triadelog-landing/
├── index.html
├── privacidade.html       # Política de Privacidade (LGPD)
├── termos.html            # Termos de Uso
└── assets/
    ├── css/styles.css     # tokens, seções, responsivo
    ├── js/main.js         # menu, reveal, validação e envio dos formulários
    └── img/               # logo + 10 fotos
```

## Páginas

| Página | Arquivo | Conteúdo |
|---|---|---|
| Home | `index.html` | hero, pilares, processo, galeria, calculadora, tipos de frete, FAQ e cotação |
| Política de Privacidade | `privacidade.html` | tratamento de dados, bases legais (art. 7º), cookies, direitos do titular (art. 18), encarregado |
| Termos de Uso | `termos.html` | aceitação, natureza informativa do site, estimativas, uso permitido, propriedade intelectual, foro |

> Os textos das páginas legais são um modelo redigido com base na LGPD e no CDC. **Revise com um
> advogado antes de publicar** e ajuste o canal de contato do encarregado (DPO).

## Fotos

- `frota-triadelog.jpg` — foto da frota da Triade Log (imagem própria da empresa), usada no hero
  e na imagem de compartilhamento (og:image).
- As demais fotos vêm do [Unsplash](https://unsplash.com) (licença livre para uso comercial,
  sem necessidade de atribuição). Substitua por fotos próprias quando quiser — os arquivos
  mantêm o nome, basta trocar no `assets/img/`.

## Paleta

| Token | Valor |
|---|---|
| Fundo | `#050c1c` |
| Navy da marca | `#0b1530` |
| Laranja da marca | `#ff7600` |
| Texto | `#ffffff` / `#ffffffa9` |
