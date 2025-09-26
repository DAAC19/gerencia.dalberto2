// Interacciones de ejemplo
const themeBtn = document.getElementById('themeBtn');
const root = document.documentElement;
const statusMsg = document.getElementById('statusMsg');
const contactForm = document.getElementById('candidateForm');
const yearSpan = document.getElementById('year');

// Actualiza el año en el footer
yearSpan.textContent = new Date().getFullYear();

// Alternar tema claro/oscuro con una clase en <body>
themeBtn?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  root.style.setProperty('color-scheme', isDark ? 'dark' : 'light');
});

// Formulario de ejemplo (solo front, sin backend)
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault(); // esto es para demo, no envía realmente
  const data = Object.fromEntries(new FormData(contactForm).entries());
  // Simula un envío
  statusMsg.textContent = `¡Gracias, ${data.nombre}! Tu mensaje fue recibido (demo).`;
  statusMsg.className = 'text-green-700';
  contactForm.reset();
});

// Selector para respuestas FAQ
document.addEventListener("DOMContentLoaded", () => {
  const faqs = document.querySelectorAll(".toggle-faq");

  faqs.forEach(btn => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector("i");

      btn.classList.toggle("active");
      content.classList.toggle("hidden");
      icon.classList.toggle("rotate-180");
    });
  });
});

