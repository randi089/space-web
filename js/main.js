// Show Menu
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// Menu show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Menu hidden
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Remove Menu Mobile
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Add Blur Header
const blurHeader = () => {
  const header = document.getElementById("header");
  //   Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50 ? header.classList.add("blur-header") : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

// Swiper Planets
const swiperTravel = new Swiper(".travel__swiper", {
  loop: true,
  spaceBetween: "32",
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
  },
});

// Show Scroll Up

// Scroll Sections Active Link

// Scroll Reveal Animation
