// Dynamic text effect
const dynamicText = document.getElementById("dynamic-text");
const words = ["with Quality", "with Passion", "with Trust"];
let i = 0;
setInterval(() => {
  dynamicText.textContent = words[i];
  i = (i + 1) % words.length;
}, 2000);

// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Project filter
const filterButtons = document.querySelectorAll(".filter-buttons button");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    projects.forEach(project => {
      if (filter === "all" || project.classList.contains(filter)) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});
