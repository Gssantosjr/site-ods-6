const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

if (contactForm && formResponse) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formResponse.textContent = 'Obrigado! Sua mensagem foi enviada com sucesso.';
    contactForm.reset();
  });
}
