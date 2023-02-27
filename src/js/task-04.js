const decrement = document.querySelector('button[data-action="decrement"]');

const increment = document.querySelector('button[data-action="increment"]');

const Value = document.querySelector("#value");

let counterValue = 0;

decrement.addEventListener("click", onDecrementBtnClick, () => {});

increment.addEventListener("click", onIncrementBtnClick, () => {});

function onDecrementBtnClick(event) {
  counterValue -= 1;
  Value.textContent = counterValue;
}

function onIncrementBtnClick(event) {
  counterValue += 1;
  Value.textContent = counterValue;
}
