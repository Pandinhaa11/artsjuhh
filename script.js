// Adicionar evento de clique ao botão "Saiba mais"
document.querySelector('button').addEventListener('click', function() {
    alert('Você clicou no botão!');
  });
  
  // Adicionar evento de envio ao formulário de contato
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Obrigado por entrar em contato!');
  });