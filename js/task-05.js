const textInputEl = document.querySelector("#name-input");

const outputEl = document.querySelector('#name-output');

textInputEl.addEventListener('input', onInputText);

function onInputText(event) {
 outputEl.textContent = event.currentTarget.value.trim();

    if (outputEl.textContent.length === 0) {
        outputEl.textContent = 'Anonymous';
    }   
}