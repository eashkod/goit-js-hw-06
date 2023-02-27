const categoriesEl = document.querySelectorAll(".item");

console.log("Number of categories:", categoriesEl.length);

categoriesEl.forEach((element) => {
  const titelEl = element.firstElementChild;
  const elementsEl = element.lastElementChild.children; 
  
  console.log(`Category:`, titelEl.textContent);
  console.log(`Elements:`, elementsEl.length);
});

