/* *****variables***** */
const formSubscribe = document.getElementById("coming-soon-form");
const inputField = document.getElementById("email");
const btnSubmit = document.getElementById("btn-submit");
const errorMsg = document.getElementById("error-msg");

/* *****functions***** */
// submit form
function submitForm(event) {
  formSubscribe.classList.add("empty");
  event.preventDefault();
}

// validate email address
function validateEmail(input) {
  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return regex.test(String(input).toLowerCase());
}

/* *****event listeners***** */
formSubscribe.addEventListener("submit", (e) => {
  // reset error message
  errorMsg.innerText = "Email Address cannot be empty";

  // show error message when email address input field is empty
  if (inputField.value.length <= 0) {
    submitForm(e);
  }

  // show error message when email address is not valid
  if (
    inputField.value.length > 0 &&
    validateEmail(inputField.value) === false
  ) {
    errorMsg.innerText = "Please provide a valid email";
    submitForm(e);
  }
});
