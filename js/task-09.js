function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const nameColor = document.querySelector(".color");

btnChangeColor.addEventListener("click", onChangeColor);
function onChangeColor(event) {
  const changeColor = getRandomHexColor();
  document.body.style.backgroundColor = changeColor;
  nameColor.textContent = changeColor;
}
