const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav_ul"); // Use the correct ID

menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("active"); // This will show/hide the menu
});