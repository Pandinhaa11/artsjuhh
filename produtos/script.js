document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll(".fade-in");

    // Função para lidar com o scroll e aplicar o efeito fade-in
    const handleScroll = () => {
        fadeInElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", handleScroll);

    // Trigger the scroll event on page load to show elements already in view
    handleScroll();

    // Adiciona eventos de mouseover e mouseout para mover a imagem para cima
    fadeInElements.forEach((img) => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "translateY(-10px)";
            img.style.transition = "transform 0.3s ease";
        });

        img.addEventListener("mouseout", () => {
            img.style.transform = "translateY(0)";
        });
    });
});