const DEFAULT_VALUE = 16;
const DEFAULT_COLOR = "#000000";
const DEFAULT_MODE = "color";

let currentSize = DEFAULT_VALUE;
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;

let myGrid = document.querySelector(".grid");
let colorPicker = document.getElementById("colorPicker");
let colorMode = document.getElementById("colorMode");
let rainbowMode = document.getElementById("rainbowMode");
let eraser = document.getElementById("eraser");
let clearBtn = document.getElementById("clearBtn");

let sizeSlider = document.getElementById("sizeSlider");
let sizeValue = document.getElementById("sizeValue");

let rows = document.getElementsByClassName("rows");
let cols = document.getElementsByClassName("cols");

function setSize(newSize) {
  currentSize = newSize;
}

function setCurrentColor(newColor) {
  currentColor = newColor;
}

function setCurrentMode(newMode) {
  activateButton(newMode);
  currentMode = newMode;
}

function activateButton(newMode) {
  if ((currentMode = "rainbow")) {
    rainbowMode.classList.remove("active");
  }
  if ((currentMode = "color")) {
    colorMode.classList.remove("active");
  }
  if ((currentMode = "eraser")) {
    eraser.classList.remove("active");
  }

  if (newMode == "rainbow") {
    rainbowMode.classList.add("active");
  }
  if (newMode == "color") {
    colorMode.classList.add("active");
  }
  if (newMode == "eraser") {
    eraser.classList.add("active");
  }
}

function makeRow(rowNum) {
  for (let i = 0; i < rowNum; i++) {
    let row = document.createElement("div");
    row.classList.add("rows");
    myGrid.appendChild(row);
  }
}

function makeCol(colNum) {
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < colNum; j++) {
      let col = document.createElement("div");
      col.classList.add("cols");

      col.addEventListener("mouseover", changeColor);
      col.addEventListener("mousedown", changeColor);

      rows[j].appendChild(col);
    }
  }
}

sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);
clearBtn.onclick = () => reloadGrid();
colorPicker.oninput = (e) => setCurrentColor(e.target.value);
colorMode.onclick = () => setCurrentMode("color");
rainbowMode.onclick = () => setCurrentMode("rainbow");
eraser.onclick = () => setCurrentMode("eraser");

function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} X ${value}`;
}

function changeSize(value) {
  setSize(value);
  reloadGrid(currentSize);
}

function reloadGrid() {
  clearGrid();
  creategrid(currentSize);
}

function creategrid(value = currentSize) {
  makeRow(value);
  makeCol(value);
}

function clearGrid() {
  myGrid.innerHTML = "";
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function getRandomColor() {
  return Math.floor(Math.random() * 256);
}

function changeColor(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  if (currentMode == "color") {
    e.target.style.backgroundColor = currentColor;
  } else if (currentMode == "eraser") {
    e.target.style.backgroundColor = "#fff";
  } else if (currentMode == "rainbow") {
    e.target.style.backgroundColor = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
  }
}

window.onload = () => changeSize(DEFAULT_VALUE);

