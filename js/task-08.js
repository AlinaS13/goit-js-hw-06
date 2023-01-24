const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.target;
  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
    return;
  }
  const userData = {
    [email.name]: email.value,
    [password.name]: password.value,
  };
  console.log(userData);
  event.target.reset();
}
