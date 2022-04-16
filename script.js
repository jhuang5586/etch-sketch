const grid = document.getElementById("container");
const selectedGridSize = document.getElementById("selectedGridSize");
let isMouseDown = false;

function turnBlack(e) {
  e.target.style.background = "black";
}
generateGrid(16);
selectedGridSize.textContent = `${16}x${16}`;

function generateGrid(gridSize) {
  grid.innerHTML = "";
  grid.style["grid-template-columns"] = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = `${480 / gridSize}px`;
    cell.style.height = `${480 / gridSize}px`;
    cell.addEventListener("mousedown", (e) => {
      isMouseDown = true;
      turnBlack(e);
    });
    cell.addEventListener("mouseup", () => {
      isMouseDown = false;
    });
    cell.addEventListener("mouseover", (e) => {
      if (isMouseDown === true) {
        turnBlack(e);
      }
    });

    grid.appendChild(cell);
  }
}

const clear = document.getElementById("clear");
clear.addEventListener("click", clearBoard);

function clearBoard() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.background = "white";
  });
}

const slider = document.getElementById("slider");
slider.addEventListener("input", getGridSize);

function getGridSize(e) {
  const gridSize = e.target.value;
  selectedGridSize.textContent = `${gridSize}x${gridSize}`;
  generateGrid(gridSize);
}
