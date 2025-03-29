const nightModeToggle = document.getElementById("nightModeToggle");

nightModeToggle.addEventListener("click", function() {
  document.body.classList.toggle("night-mode");
  document.querySelector("header").classList.toggle("night-mode");
  document.querySelector("footer").classList.toggle("night-mode");

  if (document.body.classList.contains("night-mode")) {
    nightModeToggle.textContent = "🌕 Light Mode";
  } else {
    nightModeToggle.textContent = "🌙 Night Mode";
  }
});