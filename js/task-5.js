const chengeBtn = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
const bodyEl = document.body;

chengeBtn.addEventListener("click", function(){
const currentColor =  getRandomHexColor();
bodyEl.style.backgroundColor = currentColor;
spanEl.textContent = currentColor;

});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}