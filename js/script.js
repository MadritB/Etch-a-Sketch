const gridContainer = document.querySelector(".grid.container");

// Getting the side length of the container

const containerStyle = getComputedStyle(gridContainer);
const lengthString = containerStyle.height;
const length = Number(lengthString.slice(0, -2));

// Button to create grid

const createButton = document.querySelector(".create.button");
createButton.addEventListener("click", makeGrid);

// Getting grid container color
const containerColor = containerStyle.backgroundColor;

// Changes color of grid element

let random = true;

const toggleColorButton = document.querySelector(".toggle.color");
toggleColorButton.addEventListener("click",() => {random = !random} );

function changeColor()
{
    if(!random)
        this.style.backgroundColor = containerColor;
    else
    {
        let r = (Math.floor(5000*Math.random()) % 255) + 1;
        let g = (Math.floor(5000*Math.random()) % 255) + 1;
        let b = (Math.floor(5000*Math.random()) % 255) + 1;

        this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
}

// Creates a grid element and appends it to a container
function makeGrid()
{
    // Removing children
    while(gridContainer.firstChild)
    {
        gridContainer.removeChild(gridContainer.lastChild);
    }

    // Making new children
    let num = 20;
    side = ((length)/num);
    let i = 0;
    for(i = 0; i < num*num; i++)
    {
        const gridElement = document.createElement("div");
        gridElement.classList.add("grid");
        gridElement.classList.add("element");
        gridElement.style.height = `${side}px`;
        gridElement.style.width = `${side}px`;
        gridElement.addEventListener("mouseover", changeColor);
        gridContainer.appendChild(gridElement);
    }
}

makeGrid();
