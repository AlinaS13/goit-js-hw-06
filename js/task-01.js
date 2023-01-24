const categoriesItems = document.querySelectorAll("#categories .item");
const numberCategories = categoriesItems.length;
console.log("Number of categories: " + numberCategories);

categoriesItems.forEach(function (elem) {
  console.log("Category:" + elem.querySelector("h2").textContent);
  console.log("Elements:" + elem.querySelectorAll("li").length);
});
