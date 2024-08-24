const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    const grid = document.createElement("div");
    grid.style.width = "32px";
    grid.style.height = "32px";
    grid.style.border = "1px solid black";
    grid.style.boxSizing = "border-box";
    grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = generateNewColor();
    });
    container.appendChild(grid);
}

const button = document.querySelector(".btn");
button.addEventListener("click", () => {
    let numGrid = prompt("Enter the number of squares per side (max 100): ");
    numGrid = parseInt(numGrid);
    container.innerHTML = "";
    let squareSize = 520 / numGrid;
    for (let i = 0; i < (numGrid * numGrid); i++) {
        const grid = document.createElement("div");
        grid.style.width = `${squareSize}px`;
        grid.style.height = `${squareSize}px`;
        grid.style.border = "1px solid black";
        grid.style.boxSizing = "border-box";
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = generateNewColor();
        });
        container.appendChild(grid);
    }
});

const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];



function getCharacter(index) {
    return hexCharacters[index];
}

function generateNewColor() {
    let hexColorRep = "#";

    for (let index = 0; index < 6; index++){
        const randomPosition = Math.floor ( Math.random() * hexCharacters.length );
        hexColorRep += getCharacter( randomPosition );
    }

    return hexColorRep;
}


