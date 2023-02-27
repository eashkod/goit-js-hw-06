const textInput = document.querySelector('#validation-input');

textInput.addEventListener("blur", () => {
    textInput.classList.toggle("valid", textInput.length = 6 );
    textInput.classList.toggle("invalid", textInput.value.length != 6)
})



