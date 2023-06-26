/* Dropdown Menu Mobile */

const toggleBtn = document.querySelector(".toggle-btn");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.addEventListener("click", () => {
  dropDownMenu.classList.toggle("open");
});

if (window.SimpleAnime) {
  new SimpleAnime();
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  // navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

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

/* Scroll to Top Progress */

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background =
    "conic-gradient(#374bff 0% " +
    scrollValue +
    "%, #bbc4fe " +
    scrollValue +
    "% 100%)";
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

/* Animation Menu Mobile */

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
