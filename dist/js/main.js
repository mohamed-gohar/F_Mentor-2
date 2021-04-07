let modeButton = document.querySelector(".toggle-theme__btn");

function htmlSetAtrr(theme) {
  document.documentElement.setAttribute("color-mode", theme);
}

// theme from local or the user preference on his device
if (
  localStorage.getItem("theme") === "dark" ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches &&
    !localStorage.getItem("theme"))
) {
  htmlSetAtrr("dark");
  modeButton.classList.add("active");
}

// onchange browser theme
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      if (e.matches) {
        htmlSetAtrr("dark");
        modeButton.classList.add("active");
      } else {
        htmlSetAtrr("light");
        modeButton.classList.remove("active");
      }
    }
  });

//change theme toggle onclick
modeButton.addEventListener("click", (e) => {
  const target = e.currentTarget;
  target.classList.toggle("active");

  if (target.classList.contains("active")) {
    htmlSetAtrr("dark");
    localStorage.setItem("theme", "dark");
  } else {
    htmlSetAtrr("light");
    localStorage.setItem("theme", "light");
  }
});