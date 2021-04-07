function htmlSetAtrr(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

// theme from local or the user preference on his device
if (
  localStorage.getItem("theme") === "dark" ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches &&
    !localStorage.getItem("theme"))
) {
  htmlSetAtrr("dark");
}

// onchange browser theme
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (e.matches) {
      htmlSetAtrr("dark");
    } else {
      htmlSetAtrr("light");
    }
  });

// =====================
// + after html loaded +
// =====================
window.addEventListener("DOMContentLoaded", () => {
  let modeButton = document.querySelector(".toggle-theme__btn");

  if (
    localStorage.getItem("theme") === "dark" ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches &&
      !localStorage.getItem("theme"))
  ) {
    modeButton.classList.add("active");
  }

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (e.matches) {
        modeButton.classList.add("active");
        localStorage.setItem("theme", "dark");
      } else {
        modeButton.classList.remove("active");
        localStorage.setItem("theme", "light");
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
});
