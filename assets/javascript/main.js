const container = document.getElementById("grid-container");

// document.querySelector('#set-size').addEventListener('click', gridDims.setSize);
makeGrid(16, 16);
// This must be below makeGrid(), otherwise no grid-items will exist for this function to work
colorGrid();

function makeGrid(rows, cols) {
    // container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }
}

function setGridDefault() {
    makeGrid(16, 16);
}

function setGridSize() {
    let size = prompt("Enter a size for the grid");

    while (isNaN(size)) {
        size = prompt("Enter a size for the grid. Please enter a number.");
    }

    location.reload();
    console.log("Initial: ", gridDims.getSize());
    gridDims.setSize(size);
    console.log("Changed: ", gridDims.getSize());
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + r + "," + g + "," + b + ")";

    return bgColor;
}

function colorGrid() {
    const gridItems = document.getElementsByClassName('grid-item');
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].addEventListener('mouseover', function() {
            gridItems[i].style.backgroundColor = randomColor();
        })
    };
}