const grid = document.getElementById("container");

function turnBlack(e) {
  console.log(e.target);
  e.target.style.background = "black";
}

for (let i = 0; i < 256; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.addEventListener("mouseenter", turnBlack);
  grid.appendChild(cell);
}

const clear = document.getElementById("clear");
clear.addEventListener("click", clearBoard);

function clearBoard() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.background = "white";
  });
}
