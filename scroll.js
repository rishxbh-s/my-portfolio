window.onscroll = () => {
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};
