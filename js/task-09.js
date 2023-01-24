function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
btn.addEventListener("click", (event) => {
  const colorResult = getRandomHexColor();
  document.body.style.background = colorResult;
  document.querySelector(".color").textContent = colorResult;
});
