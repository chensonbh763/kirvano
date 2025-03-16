// Configuração inicial do canvas (se ainda precisar de um canvas, mantive o básico)
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Evento para clicar nos botões
document.querySelectorAll(".buyBtn").forEach((button) => {
  button.addEventListener("click", () => {
    alert(`Parabéns! Você selecionou ${button.getAttribute("data-plan")}.`);
  });
});

// Mensagem de boas-vindas dinâmica no console
console.log("✨ Bem-vindo ao site de Coprodução Digital! Explore e aproveite. 🚀");
