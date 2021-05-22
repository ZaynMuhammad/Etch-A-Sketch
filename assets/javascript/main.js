const container = document.getElementById("grid-container");
const sizeButton = document.querySelector('#set-size');

window.addEventListener('load', setGridDefault);
sizeButton.addEventListener('click', setGridSize);

function makeGrid(cols) {
    // container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (let i = 0; i < (cols * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }
}

function setGridDefault() {
    makeGrid(16);
    colorGrid();
}

function setGridSize() {
    let newSize = prompt("Enter a size for the grid");

    if (newSize !== null) {
        newSize = parseInt(newSize);

        if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
            alert("Enter a number from 1-64 range");
            setGridSize();
        } else {

            clearGrid();
            makeGrid(newSize);
            colorGrid();
        }
    }
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + r + "," + g + "," + b + ")";

    return bgColor;
}

function clearGrid() {
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
        container.removeChild(element);
    });
}

function colorGrid() {
    const gridItems = document.getElementsByClassName('grid-item');
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].addEventListener('mouseover', function() {
            gridItems[i].style.backgroundColor = randomColor();
        })
    };
}

function addColorToGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const gridItems = document.getElementsByClassName('grid-item');
        gridItems.addEventListener('mouseover', colorGrid);
        container.appendChild(gridItems);
    }
}