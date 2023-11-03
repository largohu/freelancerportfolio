const btnDarkMode = document.querySelector(".dark-mode-btn");

if (localStorage.getItem("darkMode") === "dark") {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
}
//Включение ночнго режима по кнопке//
btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle("dark-mode-btn--active");
  const isDark = document.body.classList.toggle("dark");

  if (isDark) {
    localStorage.setIten("darkMode", "dark");
  } else {
    localStorage.setIten("darkMode", "light");
  }
};
