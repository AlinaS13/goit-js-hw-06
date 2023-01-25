const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const newList = ingredients.map((ingredient) => {
  let ingredientElement = document.createElement("li");
  ingredientElement.textContent = ingredient;
  ingredientElement.classList.add("item");

  return ingredientElement;
});

ingredientsList.append(...newList);

// let listItems = "";
// for (const ingredient of ingredients) {
//   let elem = document.createElement("li");
//   elem.textContent = ingredient;
//   elem.classList.add("item");
//   listItems += elem.outerHTML;
// }
// document.querySelector("#ingredients").insertAdjacentHTML("afterbegin", listItems);
