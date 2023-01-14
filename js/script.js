const gridContainer = document.querySelector(".grid.container");

const containerStyle = getComputedStyle(gridContainer);
const lengthString = containerStyle.height;
const length = Number(lengthString.slice(0, -2));

const createButton = document.querySelector(".create.button");
createButton.addEventListener("click", makeGrid);

// Creates a grid element and appends it to a container
function makeGrid()
{
    // Removing children
    while(gridContainer.firstChild)
    {
        gridContainer.removeChild(gridContainer.lastChild);
    }

    // Making new children
    let num = 10;
    side = ((length)/num);
    let i = 0;
    for(i = 0; i < num*num; i++)
    {
        const gridElement = document.createElement("div");
        gridElement.classList.add("grid");
        gridElement.classList.add("element");
        gridElement.style.height = `${side}px`;
        gridElement.style.width = `${side}px`;
        gridContainer.appendChild(gridElement);
    }
}