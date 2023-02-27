const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const inputEmailEl = form.querySelector("input[name = email]");
  const inputPassEl = form.querySelector("input[name = password]");
  const inputPassElLength = inputPassEl.value.trim().length;
  const inputEmailElLength = inputEmailEl.value.trim().length;
  if (inputPassElLength === 0 || inputEmailElLength === 0) {
    return alert("Всі поля мають бути заповненими!");
  } else {
    const elements = {
      email: inputEmailEl.value,
      password: inputPassEl.value,
    };
    form.reset();
    console.log(elements);
  }
}
