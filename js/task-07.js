const inputFontSizeControlEl = document.querySelector("#font-size-control");
const textSizeEl = document.querySelector("#text");

inputFontSizeControlEl.addEventListener("input", onLicenceChange);

function onLicenceChange(event) {
  textSizeEl.style.fontSize = event.target.value + "px";
}
