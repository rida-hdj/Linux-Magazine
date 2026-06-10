const body = document.body;
// Hamburger Menu
const menu = document.querySelector(".links");
const list = document.querySelector(".header .links ul");

menu.addEventListener("click", () => {
  list.classList.toggle("open");
});

// Light/Dark Mode Switcher
const button = document.querySelector(".switch-mode");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  body.classList.add("light");
  button.innerHTML = 'الوضع المظلم <i class="fa-solid fa-moon"></i>';
} else {
  body.classList.remove("light");
  button.innerHTML = 'الوضع الفاتح <i class="fa-solid fa-sun"></i>';
}
button.addEventListener("click", () => {
  body.classList.toggle("light");
  const isLight = body.classList.contains("light");

  if (isLight) {
    localStorage.setItem("theme", "light");
    button.innerHTML = 'الوضع المظلم <i class="fa-solid fa-moon"></i>';
  } else {
    localStorage.setItem("theme", "dark");
    button.innerHTML = 'الوضع الفاتح <i class="fa-solid fa-sun"></i>';
  }
});
