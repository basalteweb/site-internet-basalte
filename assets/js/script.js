document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");

  if (burger && menu) {
    burger.addEventListener("click", () => {
      menu.classList.toggle("open");

      const isOpen = menu.classList.contains("open");
      burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      burger.textContent = isOpen ? "✕" : "☰";
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
        burger.textContent = "☰";
      });
    });
  }

  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
