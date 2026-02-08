// assets/js/main.js (REEMPLAZA TODO tu archivo por esto)
document.getElementById("year").textContent = new Date().getFullYear();

const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

burger?.addEventListener("click", () => {
  const isOpen = burger.getAttribute("aria-expanded") === "true";
  burger.setAttribute("aria-expanded", String(!isOpen));
  mobileMenu.style.display = isOpen ? "none" : "block";
});

mobileMenu?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    burger.setAttribute("aria-expanded", "false");
    mobileMenu.style.display = "none";
  });
});
