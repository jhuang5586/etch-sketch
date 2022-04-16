const grid = document.getElementById("container");

function turnBlack(e) {
  console.log(e.target);
  e.target.style.background = "black";
}

for (let i = 0; i < 256; i++) {
  const cell = document.createElement("div");
  cell.style.width = "30px";
  cell.style.height = "30px";
  cell.style.background = "white";
  cell.style.border = "1px solid black";
  cell.addEventListener("mouseenter", turnBlack);

  grid.appendChild(cell);
}
