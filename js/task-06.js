const validationInput = document.getElementById("validation-input");

const validLength = validationInput.dataset.length;

validationInput.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length == validLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
