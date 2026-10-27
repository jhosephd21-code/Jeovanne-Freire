const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const note = document.getElementById("formNote");

  if (!name || !email || !message) {
    note.textContent = "Preencha todos os campos antes de continuar.";
    return;
  }

  const subject = encodeURIComponent("Contato pelo portfólio");
  const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`);
  note.innerHTML = "";
  const link = document.createElement("a");
  link.href = `mailto:SEU-EMAIL-AQUI?subject=${subject}&body=${body}`;
  link.textContent = "Clique aqui para abrir sua mensagem no aplicativo de e-mail.";
  link.className = "email-action";
  link.style.color = "var(--accent-2)";
  link.style.textDecoration = "underline";
  note.appendChild(link);
  const warning = document.createElement("span");
  warning.textContent = " Substitua SEU-EMAIL-AQUI no arquivo script.js pelo e-mail de contato correto.";
  note.appendChild(warning);
});
