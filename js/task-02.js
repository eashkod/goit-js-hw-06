const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
//console.log(ingredientsEl);

const listItemEl = [];
ingredients.forEach((element) => {
  const linkItemEl = document.createElement("li");
  linkItemEl.textContent = element;
  linkItemEl.classList.add("item");
  //console.log(linkItemEl);
  listItemEl.push(linkItemEl);
});
//console.log(listItemEl)

ingredientsEl.append(...listItemEl);
