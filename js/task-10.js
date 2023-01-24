function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");

const newBoxes = document.getElementById("boxes");

createButton.addEventListener("click", function (e) {
  const boxQuantity = document.querySelector("input").value;
  createBoxes(e, boxQuantity);
});
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(e, amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.background = getRandomHexColor();

    newBoxes.append(box);

    size += 10;
  }
}

function destroyBoxes() {
  newBoxes.innerHTML = "";
}
