let menuLinks = document.querySelectorAll(".header__link");
for (let menuLink of menuLinks) {
  menuLink.addEventListener("click", (e) => {
    e.preventDefault();
    let scrollToElem = menuLink.getAttribute("href");
    let coordinates = document.querySelector(scrollToElem).offsetTop;
    window.scrollTo({
      top: coordinates - 100,
      behavior: "smooth",
    });
    mainMenu.classList.toggle("header__list--active");
    mainHamburger.classList.toggle("hamburger--active");
  });
}