const canvas = document.querySelector(".canvas-container");

const canvasWidth = 700;
let pixelPerLine = 16;
let totalPixel = pixelPerLine ** 2;

for(let i = 1; i <= totalPixel; i++){
    const canvasPixel = document.createElement('div');
    canvasPixel.style.width = `${canvasWidth / pixelPerLine}px`;
    canvasPixel.classList.add("canvas-pixel");

    canvas.appendChild(canvasPixel);
}

canvas.addEventListener("mouseover", (e) => {
    const target = e.target;

    target.style.backgroundColor = "black"
})


