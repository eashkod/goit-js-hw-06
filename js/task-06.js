const textInputEl = document.querySelector('#validation-input');
const inputLength = Number(textInputEl.dataset.length);

textInputEl.addEventListener("blur", () => {
textInputEl.classList.toggle("valid", textInputEl.value.length === inputLength);
textInputEl.classList.toggle("invalid", textInputEl.value.length !== inputLength);
})




