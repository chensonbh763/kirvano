// Configuração inicial do canvas (se ainda precisar de um canvas, mantive o básico)
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Evento para clicar nos botões
document.querySelectorAll(".buyBtn").forEach((button) => {
  button.addEventListener("click", () => {
    alert(`Parabéns! Você selecionou ${button.getAttribute("data-plan")}.`);

    // Rastrear clique nos botões de oferta no Google Analytics
    gtag('event', 'offer_click', {
      'event_category': 'conversion',
      'event_label': button.getAttribute("data-plan"),
      'value': parseFloat(button.closest('.price-box').querySelector('p').textContent.replace('Por apenas R$', ''))
    });
  });
});

// Mensagem de boas-vindas dinâmica no console
console.log("✨ Bem-vindo ao site de Coprodução Digital! Explore e aproveite. 🚀");

// Notifica a visualização da página no Google Analytics
gtag('event', 'page_view', {
  'event_category': 'page_interaction',
  'event_label': 'Página Inicial Visitada'
});

// Rastreamento de evento para o vídeo (carregamento do iframe)
const video = document.querySelector('iframe');
video.addEventListener('load', function () {
  gtag('event', 'video_view', {
    'event_category': 'engagement',
    'event_label': 'Vídeo Assistido'
  });
});

// Rastreamento de cliques no botão de WhatsApp
const whatsappBtn = document.querySelector('.whatsapp-btn');
whatsappBtn.addEventListener('click', function () {
  gtag('event', 'contact_click', {
    'event_category': 'engagement',
    'event_label': 'Contato pelo WhatsApp'
  });
});

// Rastreamento de interação adicional no checkout (opcional)
const checkoutLinks = document.querySelectorAll('a[target="_blank"]');
checkoutLinks.forEach(function(link) {
  link.addEventListener('click', function () {
    gtag('event', 'checkout_initiated', {
      'event_category': 'conversion',
      'event_label': link.href
    });
  });
});
