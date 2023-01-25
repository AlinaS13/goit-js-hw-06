let counterValue = 0;
let couner = document.querySelector("#value");

const handleClick = (event) => {
  if (event.target.dataset.action === "decrement") {
    counterValue -= 1;
    couner.innerText = counterValue;
  } else if (event.target.dataset.action === "increment") {
    counterValue += 1;
    couner.innerText = counterValue;
  }
};

const removeButton = document.querySelector('[data-action="decrement"]');
const addButton = document.querySelector('[data-action="increment"]');

removeButton.addEventListener("click", handleClick);
addButton.addEventListener("click", handleClick);
