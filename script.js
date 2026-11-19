
document.addEventListener("DOMContentLoaded", function () {

    const piece = document.getElementById("piece");
    const color = document.getElementById("color");
    const phrase = document.getElementById("phrase");
    const size = document.getElementById("size");
    const details = document.getElementById("details");

    const clothing = document.getElementById("clothing");
    const previewText = document.getElementById("preview-text");
    const sendButton = document.getElementById("send-customization");

    // Atualizar a prévia
    function updatePreview() {

        clothing.className =
            piece.value === "Camiseta" ? "shirt" : "pants";

        clothing.style.backgroundColor = color.value;

        previewText.textContent =
            phrase.value.trim() || "Mavie";
    }

    piece.addEventListener("change", updatePreview);
    color.addEventListener("change", updatePreview);
    phrase.addEventListener("input", updatePreview);

    // Enviar criação pelo WhatsApp
    sendButton.addEventListener("click", function () {

        const mensagem =
            "Olá! Quero personalizar uma peça na Mavie Ateliê! 🎀\n\n" +
            "Peça: " + piece.value + "\n" +
            "Cor: " + color.options[color.selectedIndex].text + "\n" +
            "Frase ou nome: " + (phrase.value || "Não informado") + "\n" +
            "Tamanho: " + size.value + "\n" +
            "Detalhes: " + (details.value || "Não informado");

        const numero = "5514997588643";

        const link = "https://wa.me/" + numero +
            "?text=" + encodeURIComponent(mensagem);

        window.open(link, "_blank");
    });

    updatePreview();

});
