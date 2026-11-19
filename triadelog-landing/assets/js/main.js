/* =========================================================
   TriadeLog Brasil — comportamento da landing page
   ========================================================= */

/* ------------------------------------------------------------------
   CONTATO — dados da Triade Log Brasil Ltda.
   O número precisa existir: até lá, os formulários não abrem o WhatsApp.
   ------------------------------------------------------------------ */
var CONTATO = {
  whatsapp: "5519995099261",              // só dígitos, com DDI
  email: "comercial@triadelog.com.br",
};

/* Formata 5519995099261 como (19) 99509-9261 */
function formatPhone(raw) {
  var d = String(raw || "").replace(/\D/g, "").replace(/^55/, "");
  if (d.length === 11) return "(" + d.slice(0, 2) + ") " + d.slice(2, 7) + "-" + d.slice(7);
  if (d.length === 10) return "(" + d.slice(0, 2) + ") " + d.slice(2, 6) + "-" + d.slice(6);
  return raw;
}

(function () {
  "use strict";

  var header = document.getElementById("header");
  var nav = document.getElementById("nav");
  var navToggle = document.getElementById("nav-toggle");
  var whatsappFab = document.getElementById("whatsapp-fab");

  /* ---------- Contato: preenchendo o site ---------- */
  var telefone = document.getElementById("footer-phone");
  var emailFooter = document.getElementById("footer-email");
  if (telefone && CONTATO.whatsapp.indexOf("TODO") !== 0) {
    telefone.textContent = formatPhone(CONTATO.whatsapp);
    telefone.setAttribute("href", "tel:+" + CONTATO.whatsapp);
  } else if (telefone) {
    telefone.removeAttribute("href");
  }
  if (emailFooter && CONTATO.email.indexOf("TODO") !== 0) {
    emailFooter.textContent = CONTATO.email;
    emailFooter.setAttribute("href", "mailto:" + CONTATO.email);
  } else if (emailFooter) {
    emailFooter.removeAttribute("href");
  }
  if (whatsappFab && CONTATO.whatsapp.indexOf("TODO") !== 0) {
    whatsappFab.setAttribute(
      "href",
      "https://wa.me/" + CONTATO.whatsapp + "?text=" +
        encodeURIComponent("Olá! Gostaria de solicitar uma cotação de frete.")
    );
  } else if (whatsappFab) {
    whatsappFab.removeAttribute("href");
    whatsappFab.setAttribute("aria-disabled", "true");
    whatsappFab.title = "Configure o número do WhatsApp em assets/js/main.js";
  }

  /* ---------- Cabeçalho ao rolar ---------- */
  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 24);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Menu mobile ---------- */
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    Array.prototype.forEach.call(reveals, function (el, i) {
      el.style.transitionDelay = Math.min(i % 4, 3) * 70 + "ms";
      io.observe(el);
    });
  } else {
    Array.prototype.forEach.call(reveals, function (el) {
      el.classList.add("is-in");
    });
  }

  /* ---------- Formulários ---------- */
  function digits(value) {
    return (value || "").replace(/\D/g, "");
  }

  function isEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value || "");
  }

  function status(el, message, isError) {
    if (!el) return;
    el.textContent = message;
    el.classList.toggle("is-error", !!isError);
  }

  function openWhatsApp(message, statusEl) {
    if (CONTATO.whatsapp.indexOf("TODO") === 0) {
      status(
        statusEl,
        "Falta configurar o número do WhatsApp em assets/js/main.js (CONTATO.whatsapp).",
        true
      );
      return;
    }
    status(statusEl, "Abrindo o WhatsApp com a sua mensagem…");
    window.open(
      "https://wa.me/" + CONTATO.whatsapp + "?text=" + encodeURIComponent(message),
      "_blank",
      "noopener,noreferrer"
    );
  }

  var calcForm = document.getElementById("calc-form");
  if (calcForm) {
    calcForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = new FormData(calcForm);
      var distancia = (d.get("distancia") || "").toString().trim();
      var peso = (d.get("peso") || "").toString().trim();
      var nota = (d.get("nota") || "").toString().trim();
      var s = document.getElementById("form-status");

      if (!distancia || !peso || !nota) {
        status(s, "Preencha distância, peso e valor da nota para estimar.", true);
        return;
      }
      var linhas = [
        "Olá! Quero um orçamento de frete.",
        "",
        "Modalidade: " + d.get("modalidade"),
        "Distância: " + distancia + " km",
        "Peso: " + peso + " kg",
        "Valor da nota: R$ " + nota,
        "Tipo de carga: " + d.get("carga"),
        "Embarque prioritário: " + (d.get("urgente") ? "sim" : "não"),
      ];
      openWhatsApp(linhas.join("\n"), s);
    });
  }

  var ctaForm = document.getElementById("cta-form");
  if (ctaForm) {
    ctaForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = new FormData(ctaForm);
      var nome = (d.get("nome") || "").toString().trim();
      var empresa = (d.get("empresa") || "").toString().trim();
      var fone = digits(d.get("whatsapp"));
      var mail = (d.get("email") || "").toString().trim();
      var origem = (d.get("origem") || "").toString().trim();
      var destino = (d.get("destino") || "").toString().trim();
      var s = document.getElementById("form-status");

      if (nome.length < 3) return status(s, "Informe seu nome.", true), undefined;
      if (fone.length < 10) return status(s, "Informe um WhatsApp válido com DDD.", true), undefined;
      if (!isEmail(mail)) return status(s, "Informe um e-mail válido.", true), undefined;
      if (origem.length < 3 || destino.length < 3)
        return status(s, "Informe origem e destino.", true), undefined;

      var linhas = [
        "Olá! Quero solicitar uma cotação de frete.",
        "",
        "Nome: " + nome,
        empresa ? "Empresa: " + empresa : "",
        "WhatsApp: " + fone,
        "E-mail: " + mail,
        "Origem: " + origem,
        "Destino: " + destino,
      ];
      openWhatsApp(linhas.filter(Boolean).join("\n"), s);
      return undefined;
    });
  }
})();
