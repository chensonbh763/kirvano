// Formulário de Captura de Leads
const leadForm = document.getElementById('leadForm');

leadForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;

  if (nome && email && telefone) {
    alert(`Obrigado, ${nome}! Suas informações foram enviadas com sucesso. Entraremos em contato em breve.`);
    leadForm.reset();
  } else {
    alert('Por favor, preencha todos os campos antes de enviar.');
  }
});

// Botões de Compra
const buyButtons = document.querySelectorAll('.buyBtn');

buyButtons.forEach((button) => {
  button.addEventListener('click', function () {
    const plan = button.getAttribute('data-plan');
    alert(`Você selecionou o plano: ${plan}. Redirecionando para o pagamento...`);
  });
});
