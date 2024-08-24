const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    const grid = document.createElement("div");
    grid.style.width = "30px";
    grid.style.height = "30px";
    grid.style.border = "1px solid black";
    grid.style.boxSizing = "border-box";
    grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = "blue";
    });
    container.appendChild(grid);
}

const button = document.querySelector(".btn");
button.addEventListener("click", () => {
    let numGrid = prompt("Enter the number of squares per side (max 100): ");
    numGrid = parseInt(numGrid);
    container.innerHTML = "";
    let squareSize = 480 / numGrid;
    for (let i = 0; i < (numGrid * numGrid); i++) {
        const grid = document.createElement("div");
        grid.style.width = `${squareSize}px`;
        grid.style.height = `${squareSize}px`;
        grid.style.border = "1px solid black";
        grid.style.boxSizing = "border-box";
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = "blue";
        });
        container.appendChild(grid);
    }
});

