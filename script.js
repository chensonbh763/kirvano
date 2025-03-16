// Configuração inicial do canvas de confete
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Função para criar partículas de confete
function createConfetti() {
  const confetti = [];
  for (let i = 0; i < 100; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 5 + 2,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      speedX: Math.random() * 2 - 1,
      speedY: Math.random() * 2 + 1,
    });
  }
  return confetti;
}

let confetti = createConfetti();

// Função para animar o confete
function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((c) => {
    ctx.fillStyle = c.color;
    ctx.fillRect(c.x, c.y, c.size, c.size);
    c.x += c.speedX;
    c.y += c.speedY;

    // Reseta confetes que saem da tela
    if (c.y > canvas.height) c.y = 0;
    if (c.x > canvas.width || c.x < 0) c.x = Math.random() * canvas.width;
  });
  requestAnimationFrame(animateConfetti);
}

animateConfetti();

// Evento para ativar o confete ao clicar nos botões
document.querySelectorAll(".buyBtn").forEach((button) => {
  button.addEventListener("click", () => {
    confetti = createConfetti(); // Reinicia os confetes ao clicar
    alert(`Parabéns! Você selecionou ${button.getAttribute("data-plan")}.`);
  });
});

// Mensagem de boas-vindas dinâmica no console
console.log("✨ Bem-vindo ao site de Coprodução Digital! Explore e aproveite. 🚀");
