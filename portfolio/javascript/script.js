const head = document.querySelector("header");
const nav = document.querySelector(".nav-icon");
const body = document.querySelector("body");
const theme = document.querySelector(".col-theme");
const lTheme = document.getElementById("light");
const dTheme = document.getElementById("dark");
const changeTile = document.querySelector(".change-tile");

nav.addEventListener("click", () => {
  head.classList.toggle("nav-bar");
  body.classList.toggle("push-down");
});

theme.addEventListener("click", () => {
  body.classList.toggle("change-theme");
  if (body.classList.contains("change-theme")) {
    dTheme.style.opacity = 1;
    lTheme.style.opacity = 0;
  } else {
    dTheme.style.opacity = 0;
    lTheme.style.opacity = 1;
  }
});

changeTile.addEventListener("click", () => {
  body.classList.toggle("tile-change");
});
