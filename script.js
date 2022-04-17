const grid = document.getElementById("container");
const selectedGridSize = document.getElementById("selectedGridSize");
let isMouseDown = false;
let isRainbow = false;

function turnBlack(e) {
  e.target.style.background = "black";
}

//initialize board with 16x16
generateGrid(16);
selectedGridSize.textContent = `${16}x${16}`;

//takes number of rows and generates a square grid
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
      if (isRainbow === true) {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        e.target.style.background = "#" + randomColor;
      } else {
        turnBlack(e);
      }
    });
    cell.addEventListener("mouseup", () => {
      isMouseDown = false;
    });
    cell.addEventListener("mouseover", (e) => {
      if (isMouseDown === true) {
        if (isRainbow === true) {
          let randomColor = Math.floor(Math.random() * 16777215).toString(16);
          e.target.style.background = "#" + randomColor;
        } else {
          turnBlack(e);
        }
      }
    });

    grid.appendChild(cell);
  }
}

//button to clear board
const clear = document.getElementById("clear");
clear.addEventListener("click", clearBoard);

function clearBoard() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.background = "white";
  });
}

//slider to adjust grid size
const slider = document.getElementById("slider");
slider.addEventListener("input", getGridSize);

function getGridSize(e) {
  const gridSize = e.target.value;
  selectedGridSize.textContent = `${gridSize}x${gridSize}`;
  generateGrid(gridSize);
}

//create rainbow toggle
const rainbowButton = document.getElementById("rainbow-btn");
rainbowButton.addEventListener("click", turnRainbow);

function turnRainbow() {
  isRainbow = !isRainbow;
  isRainbow
    ? rainbowButton.classList.add("btnClicked")
    : rainbowButton.classList.remove("btnClicked");

  console.log(`rainbow is ${isRainbow}`);
}
