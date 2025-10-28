const canvas = document.querySelector(".canvas-container");
const gridChangeBtn = document.querySelector("#change-grid-button");
const popup = document.querySelector(".overlay");
const popupBtn = document.querySelector("#overlay-button");

const canvasWidth = 700;
let pixelPerLine = 16;

function createCanvasPixel(pixelPerLine){
    canvas.innerHTML = "";


    const totalPixel = pixelPerLine ** 2;
    for(let i = 1; i <= totalPixel; i++){
        const canvasPixel = document.createElement('div');
        canvasPixel.style.width = `${canvasWidth / pixelPerLine}px`;
        canvasPixel.classList.add("canvas-pixel");

        canvas.appendChild(canvasPixel);
    }
}

createCanvasPixel(pixelPerLine);

canvas.addEventListener("mouseover", (e) => {
    const target = e.target;

    target.style.backgroundColor = "black"
})

gridChangeBtn.addEventListener("click", () => {
    popup.style.display = "flex";

    popupBtn.addEventListener("click", () => {
        const inputPixelPerLine = document.querySelector("#pixelPerLine");

        if(inputPixelPerLine.value < 2 || inputPixelPerLine.value > 100){
            const warning = document.querySelector("#warning");

            warning.textContent = "Please select a value between 2-100";
        }
        else{
            pixelPerLine = inputPixelPerLine.value;
            createCanvasPixel(pixelPerLine);
            popup.style.display = "none";
        }
    })
})




