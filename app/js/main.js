const header = document.querySelector(".header");
const burger = document.querySelector(".logo__burger");

burger.addEventListener("click", () => {
  header.classList.toggle("header--active");
});

if (header.classList.contains("header-no-js")) {
  header.classList.remove("header-no-js");
}
