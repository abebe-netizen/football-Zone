// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

// Close the mobile menu after choosing a section
mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => mainNav.classList.remove("open"));
});

// Filter the sample match cards
const filterButtons = document.querySelectorAll(".tab");
const matchCards = document.querySelectorAll(".match-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    matchCards.forEach(card => {
      const categories = card.dataset.category;
      card.style.display = filter === "all" || categories.includes(filter)
        ? "block"
        : "none";
    });
  });
});

// Demo newsletter form: validates the email, but does not send/store it.
const newsletterForm = document.getElementById("newsletterForm");
const formMessage = document.getElementById("formMessage");

newsletterForm.addEventListener("submit", event => {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();

  if (email) {
    formMessage.textContent = "Thanks for joining FootballZone! (Demo only)";
    newsletterForm.reset();
  }
});

// Set the current year automatically
document.getElementById("year").textContent = new Date().getFullYear();
