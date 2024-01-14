const nameInput = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

nameInput.addEventListener("input", (evt) => {
const inputValue = evt.currentTarget.value.trim();
spanEl.textContent = inputValue || "Anonymous";

});