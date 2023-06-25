/* Dropdown Menu Mobile */

// const toggleBtn = document.querySelector(".toggle-btn");
// const dropDownMenu = document.querySelector(".dropdown-menu");

// toggleBtn.addEventListener("click", () => {
//   dropDownMenu.classList.toggle("open");
// });

// if (window.SimpleAnime) {
//   new SimpleAnime();
// }

// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("active");
//   navMenu.classList.toggle("active");
// });

// document.querySelectorAll(".nav-link").forEach((n) =>
//   n.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
//   })
// );

/* Progress Bar */

function updateProgressBar() {
  const { scrollTop, scrollHeight } = document.documentElement;
  const scrollPercent =
    (scrollTop / (scrollHeight - window.innerHeight)) * 100 + "%";
  document
    .querySelector("#progress-bar")
    .style.setProperty("--progress", scrollPercent);
}

document.addEventListener("scroll", updateProgressBar);
