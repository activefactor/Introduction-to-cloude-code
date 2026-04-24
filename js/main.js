/* ================================================
   Main JS — minimal, progressive enhancement only
   ================================================ */

document.addEventListener("DOMContentLoaded", function () {
  initMobileNav();
  initNavDropdowns();
  initFaqAccordion();
  markActiveNavLink();
});

/* ---- Dropdown navigation ---- */
function initNavDropdowns() {
  document.querySelectorAll(".nav-dropdown__trigger").forEach(function (trigger) {
    trigger.addEventListener("click", function (e) {
      e.stopPropagation();
      var dropdown = trigger.closest(".nav-dropdown");
      var isOpen = dropdown.classList.contains("is-open");

      document.querySelectorAll(".nav-dropdown.is-open").forEach(function (d) {
        d.classList.remove("is-open");
        d.querySelector(".nav-dropdown__trigger").setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        dropdown.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.addEventListener("click", function () {
    document.querySelectorAll(".nav-dropdown.is-open").forEach(function (d) {
      d.classList.remove("is-open");
      d.querySelector(".nav-dropdown__trigger").setAttribute("aria-expanded", "false");
    });
  });
}

/* ---- Mobile navigation ---- */
function initMobileNav() {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".site-nav");
  if (!hamburger || !nav) return;

  hamburger.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("is-open");
    hamburger.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
}

/* ---- FAQ accordion ---- */
function initFaqAccordion() {
  document.querySelectorAll(".faq-question").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const item = btn.closest(".faq-item");
      const isOpen = item.classList.contains("is-open");

      document.querySelectorAll(".faq-item.is-open").forEach(function (openItem) {
        openItem.classList.remove("is-open");
      });

      if (!isOpen) {
        item.classList.add("is-open");
      }
    });
  });
}

/* ---- Highlight current page in nav ---- */
function markActiveNavLink() {
  var path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === path) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
      var dropdown = link.closest(".nav-dropdown");
      if (dropdown) {
        dropdown.classList.add("has-active");
      }
    }
  });
}
