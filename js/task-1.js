const Categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${Categories.length}`);

Categories.forEach((item) => {
const categoryName = item.querySelector(".name-categories").textContent;
const elements = item.querySelectorAll(".name-list li").length;
console.log(`Category: ${categoryName}`);
console.log(`Elements: ${elements}`);

});