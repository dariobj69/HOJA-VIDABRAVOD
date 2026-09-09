const menuButton = document.querySelector('.menu-toggle');
const siteMenu = document.querySelector('.site-menu');
const themeButton = document.querySelector('.theme-toggle');
const backToTop = document.querySelector('.back-to-top');
const contactForm = document.querySelector('#contact-form');
const formFeedback = document.querySelector('#form-feedback');
const printButton = document.querySelector('.print-button');

function closeMenu() {
  siteMenu.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menú');
}

menuButton.addEventListener('click', () => {
  const isOpen = siteMenu.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

document.querySelectorAll('.nav-link').forEach((link) => link.addEventListener('click', closeMenu));

themeButton.addEventListener('click', () => {
  const isDark = document.documentElement.toggleAttribute('data-theme');
  themeButton.setAttribute('aria-label', isDark ? 'Activar modo claro' : 'Activar modo oscuro');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeButton.setAttribute('aria-label', 'Activar modo claro');
}

printButton.addEventListener('click', () => window.print());

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll('.nav-link').forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55% 0px' });
document.querySelectorAll('section[id]').forEach((section) => sectionObserver.observe(section));

window.addEventListener('scroll', () => backToTop.classList.toggle('is-visible', window.scrollY > 500), { passive: true });
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formFeedback.classList.remove('is-error');
  const name = contactForm.elements.name.value.trim();
  const email = contactForm.elements.email.value.trim();
  const message = contactForm.elements.message.value.trim();
  if (!name || !email || !message) {
    formFeedback.textContent = 'Completa todos los campos para continuar.';
    formFeedback.classList.add('is-error');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    formFeedback.textContent = 'Escribe un correo electrónico válido.';
    formFeedback.classList.add('is-error');
    return;
  }
  formFeedback.textContent = 'Mensaje validado. Para enviarlo, conecta este formulario a un servicio de correo.';
  contactForm.reset();
});
