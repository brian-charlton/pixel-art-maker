// Pick the size of the canvas to be created.
const gridSize = document.getElementById("sizePicker");
gridSize.addEventListener("submit", makeGrid, true);

function makeGrid(gridEvent) {

    gridEvent.preventDefault();
    
    // Get height and width of the canvas
    const rows = document.getElementById("inputHeight").value;
    const cells = document.getElementById("inputWidth").value;
    const canvas = document.getElementById("pixelCanvas");

    // Build canvas
    for (let y = 0; y < rows; y++) {

        const row = canvas.insertRow(y);
        for (let x = 0; x < cells; x++) {

            const cell = row.insertCell(x);

        }

    }
 
    // Pick the current color to be use on the canvas
    canvas.addEventListener("click", function (canvasEvent) {

        canvasEvent.target.style.backgroundColor = document.getElementById("colorPicker").value;
        
    })

    // Clear canvas
    gridSize.removeEventListener("submit", makeGrid, true);
    
    gridSize.addEventListener("submit", function(gridEvent) {

        gridEvent.preventDefault();

        for (let y = 0; y < rows; y++) {

            for (let x = 0; x < cells; x++) {

                canvas.rows[y].cells[x].style.backgroundColor = "white";

            }

        }

    })

}

    


