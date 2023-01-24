const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let listItems = "";
for (const ingredient of ingredients) {
  let elem = document.createElement("li");
  elem.textContent = ingredient;
  elem.classList.add("item");
  listItems += elem.outerHTML;
}
document
  .querySelector("#ingredients")
  .insertAdjacentHTML("afterbegin", listItems);
