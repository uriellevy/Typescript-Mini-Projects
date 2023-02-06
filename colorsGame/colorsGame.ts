const colorSuccess = <Element>document.querySelector(".rgbColor");
const easyBtn = document.querySelector(".easy");
const hardBtn = document.querySelector(".hard");
const newGameBtn = document.querySelector(".newGame");
const colors = document.querySelectorAll<HTMLElement>(".color");

window.onload = () => {
    setNewGame();
}

function setNewGame() {
    colors.forEach((color, idx) => {
        color.id = idx.toString();
        color.style.backgroundColor = getRandomColor();
        console.log(color.style.backgroundColor)
        
    })
    colorSuccess.innerHTML = colors[Math.floor(Math.random() * colors.length)].style.backgroundColor;
    // console.log(colors[Math.floor(Math.random() * colors.length)].style.backgroundColor);
    
}

function onColorGuess(colorRgb:string) {
    colors.forEach((color,idx) => {
       if(colorRgb === colorSuccess.innerHTML) {
        console.log("first")
       }
    })
}

function getRandomColor() {
    const randomNumber1 = Math.floor(Math.random() * 255);
    const randomNumber2 = Math.floor(Math.random() * 255);
    const randomNumber3 = Math.floor(Math.random() * 255);
    return `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;
}

newGameBtn?.addEventListener("click", setNewGame);

easyBtn?.addEventListener("click", () => {

});

hardBtn?.addEventListener("click", () => {

});

colors.forEach((color, idx) => {
    color.addEventListener("click", () => {
        onColorGuess(color.style.backgroundColor);
    })
})
