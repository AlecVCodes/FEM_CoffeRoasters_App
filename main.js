const navToggle = document.querySelector(".mobile-nav-toggle");
const navList = document.querySelector(".nav-list");
const body = document.body;
const isOpen = navList.hasAttribute("data-visible");

console.log(body);
console.log(navToggle);

navToggle.addEventListener("click", () => {
  navList.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  navList.toggleAttribute("data-visible");
  body.classList.toggle("scroll-hidden");
});

// nav scroll behaviour adjustments
window.onresize = () => {
  window.innerWidth >= 786 && !isOpen && body.classList.remove("scroll-hidden");
  window.innerWidth >= 786 ? navList.removeAttribute("data-visible") : "";
};



