let dark = document.querySelector("#dark-butt");
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

dark.addEventListener("click", function () {
  let isDark = document.body.classList.toggle("dark");
  console.log(isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
  dark.textContent = "light";
  if (isDark === true) {
    dark.textContent = "light";
  } else {
    dark.textContent = "dark";
  }
});
