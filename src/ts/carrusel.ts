import Splide from "@splidejs/splide";

let splide = new Splide(".splide", {
  type: "loop",
  padding: "5rem",
  arrows: false,
});

splide.mount();

// Maneja los clics del navbar
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Evita el comportamiento por defecto del enlace

    // Índice del slide correspondiente
    const targetIndex = parseInt(link.getAttribute("data-slide") ?? "0", 10);

    // Navega al slide correspondiente
    splide.go(targetIndex);
  });
});

export default splide;
