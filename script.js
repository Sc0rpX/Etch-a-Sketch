const canvas = document.querySelector(".canvas-container");

const canvasWidth = 700;
let pixelPerLine = 16;
let colorMode = "black";

function generateCanvasGrid(pixelPerLine){
    canvas.innerHTML = "";

    const totalPixel = pixelPerLine ** 2;
    for(let i = 1; i <= totalPixel; i++){
        const canvasPixel = document.createElement('div');
        canvasPixel.style.width = `${canvasWidth / pixelPerLine}px`;
        canvasPixel.classList.add("canvas-pixel");

        canvas.appendChild(canvasPixel);
    }
}

function randomColor(){
    const min = 0;
    const max = 255;

    let r = Math.floor(Math.random() * (max - min + 1)) + min;
    let g = Math.floor(Math.random() * (max - min + 1)) + min;
    let b = Math.floor(Math.random() * (max - min + 1)) + min;

    return `rgb(${r}, ${g}, ${b})`
}

generateCanvasGrid(pixelPerLine);

canvas.addEventListener("mouseover", (e) => {
    const target = e.target;

    if(colorMode === "black"){
        target.style.backgroundColor = "black"
    }
    else{
        target.style.backgroundColor = randomColor();
    }
})

// Change Grid
const gridChangeBtn = document.querySelector("#change-grid-button");
const popup = document.querySelector(".overlay");
const popupBtn = document.querySelector("#overlay-button");

gridChangeBtn.addEventListener("click", () => {
    popup.style.display = "flex";

    popupBtn.addEventListener("click", () => {
        const inputPixelPerLine = document.querySelector("#pixelPerLine");

        if(inputPixelPerLine.value < 2 || inputPixelPerLine.value > 100){
            const warning = document.querySelector("#warning");

            warning.textContent = "Please select a value between 2-100";
            inputPixelPerLine.value = "";
        }
        else{
            pixelPerLine = inputPixelPerLine.value;
            inputPixelPerLine.value = "";
            generateCanvasGrid(pixelPerLine);
            popup.style.display = "none";
        }
    })
})

// Reset canvas
const resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", () => {
    generateCanvasGrid(pixelPerLine);
})

// Toggle color mode
const colorToggleBtn = document.querySelector("#color-toggle");

colorToggleBtn.addEventListener("click", () => {
    if(colorMode === "black"){
        colorMode = "random";
        colorToggleBtn.textContent = "Black color mode";
        generateCanvasGrid(pixelPerLine)
    }
    else{
        colorMode = "black";
        colorToggleBtn.textContent = "Random color Mode";
        generateCanvasGrid(pixelPerLine)
    }
})




