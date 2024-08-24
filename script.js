const container = document.querySelector(".container");



for (let i = 0; i < 256; i++) {
    const grid = document.createElement("div");
    grid.style.width = "30px";
    grid.style.height = "30px";
    grid.style.backgroundColor = "lightblue";
    grid.style.border = "1px solid black";
    grid.style.boxSizing = "border-box";
    container.appendChild(grid);
}


