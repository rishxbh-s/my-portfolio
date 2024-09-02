document.addEventListener("DOMContentLoaded", function () {
  let menuIcon = document.querySelector("#menu-icon");
  let navBar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navBar.classList.toggle("active");
  });

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header navbar a");
  const menu = document.querySelector(".menu");
  const navbar = document.querySelector(".navbar");
});
