/* Preferências de acessibilidade guardadas localmente no navegador. */
(() => {
  const root = document.documentElement;
  const body = document.body;
  const fontDown = document.getElementById("font-down");
  const fontUp = document.getElementById("font-up");
  const contrast = document.getElementById("contrast-toggle");
  const min = 0.875, max = 1.5, step = 0.125;
  let font = Number(localStorage.getItem("a11y-font-size")) || 1;
  let high = localStorage.getItem("a11y-high-contrast") === "true";

  function applyFont() {
    font = Math.min(max, Math.max(min, font));
    root.style.setProperty("--base-font", `${font}rem`);
    localStorage.setItem("a11y-font-size", String(font));
  }
  function applyContrast() {
    body.classList.toggle("high-contrast", high);
    contrast.setAttribute("aria-pressed", String(high));
    localStorage.setItem("a11y-high-contrast", String(high));
  }
  fontDown.addEventListener("click", () => { font -= step; applyFont(); });
  fontUp.addEventListener("click", () => { font += step; applyFont(); });
  contrast.addEventListener("click", () => { high = !high; applyContrast(); });
  applyFont();
  applyContrast();
})();