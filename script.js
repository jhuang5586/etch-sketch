const grid = document.getElementById("container");

function turnBlack(e) {
  // console.log(e.target);
  e.target.style.background = "black";
}
generateGrid(16);

function generateGrid(gridSize) {
  grid.innerHTML = "";
  grid.style["grid-template-columns"] = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = `${480 / gridSize}px`;
    cell.style.height = `${480 / gridSize}px`;

    cell.addEventListener("mouseenter", turnBlack);
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
slider.addEventListener("change", getGridSize);

function getGridSize(e) {
  console.log(e.target.value);
  const gridSize = e.target.value;
  generateGrid(gridSize);
}
