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
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the
  this.scrollY >= 350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// Scroll Sections Active Link
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]");

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: "top",
  distance: "88px",
  duration: 2500,
  delay: 300,
  // reset: true, // Animations repeat
});

sr.reveal(".home__data, .travel__swiper, .contact__container");
sr.reveal(".home__img");
sr.reveal(".home__ovni", { delay: 800 });
sr.reveal(".explore__img");
sr.reveal(".explore__data", { origin: "right" });
sr.reveal(".explore__planet", { origin: "right", delay: 800 });
sr.reveal(".history__card", { interval: 100 });
sr.reveal(".history__planet-1", { delay: 1000 });
sr.reveal(".history__planet-2", { delay: 1200 });
sr.reveal(".footer__planet-1", { delay: 600 });
sr.reveal(".footer__planet-2", { delay: 800 });
