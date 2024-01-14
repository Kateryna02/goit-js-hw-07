  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }


const inputEl = document.querySelector('input');
  const btnCreate = document.querySelector('[data-create]');
  const btnDestroy = document.querySelector('[data-destroy]');
  const containerBox = document.getElementById('boxes');



  function onCreateBox() {
    const inputValue = Number(inputEl.value);

    if (inputValue < 1 || inputValue > 100) {
      return alert("Oops, something went wrong. Please enter a valid value between 1 and 100.");
    }

    createBoxes(inputValue);
  }

  function createBoxes(amount) {
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = 30 + 10 * i + "px";
      box.style.height = 30 + 10 * i + "px";
      box.style.backgroundColor = getRandomHexColor();
      containerBox.append(box);
    }

    inputEl.value = '';
  }

  function destroyBoxes() {
    containerBox.innerHTML = '';
  }


  btnCreate.addEventListener('click', onCreateBox);
  btnDestroy.addEventListener('click', destroyBoxes);



