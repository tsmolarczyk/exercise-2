const createSingleBox = (size) => {
  const box = document.createElement("div");
  box.classList.add("box");
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.backgroundColor = getRandomColor();
  return box;
};

const createBoxes = (numberOfBoxes) => {
  const boxesContainer = document.getElementById("boxes");

  if (!numberOfBoxes || numberOfBoxes < 1) {
    alert("Podaj poprawną liczbę elementów.");
    return;
  }

  boxesContainer.innerHTML = "";

  let boxSize = 30;
  for (let i = 0; i < numberOfBoxes; i++) {
    const box = createSingleBox(boxSize);
    boxesContainer.appendChild(box);
    boxSize += 10;
  }
};

const removeBoxes = () => {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
};

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

document
  .querySelector('[data-action="create"]')
  .addEventListener("click", () => {
    const numberOfBoxesInput = document.querySelector(".js-input");
    const numberOfBoxes = parseInt(numberOfBoxesInput.value);
    createBoxes(numberOfBoxes);
  });

document
  .querySelector('[data-action="destroy"]')
  .addEventListener("click", removeBoxes);
