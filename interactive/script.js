// Change Background Color
const backgroundColorDropdown = document.getElementById("background-color");
backgroundColorDropdown.addEventListener("change", function () {
  document.body.style.backgroundColor = this.value;
});

// Change Font Size
const fontSizeSlider = document.getElementById("font-size-slider");
const fontSizeDisplay = document.getElementById("font-size-display");
fontSizeSlider.addEventListener("input", function () {
  const newSize = this.value + "px";
  document.body.style.fontSize = newSize;
  fontSizeDisplay.textContent = newSize;
});

// Toggle Dark Mode
const darkModeBtn = document.getElementById("dark-mode-btn");
darkModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  this.textContent = document.body.classList.contains("dark-mode") ? "Switch to Light Mode" : "Switch to Dark Mode";
});

// Change Font Style
const fontStyleSelector = document.getElementById("font-style-selector");
fontStyleSelector.addEventListener("change", function () {
  document.body.style.fontFamily = this.value;
});

