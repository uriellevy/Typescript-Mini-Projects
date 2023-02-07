const colorSuccess = <Element>document.querySelector(".rgbColor");
const easyBtn = document.querySelector(".easy");
const hardBtn = document.querySelector(".hard");
const newGameBtn = document.querySelector(".newGame");
const colors = document.querySelectorAll<HTMLElement>(".color");
const lives = <Element>document.querySelector(".lives");
let liveCount = 3;
let isSuccess = false;

window.onload = () => {
    setNewGame();
}

function setNewGame() {
    const randomColorPosition = Math.floor(Math.random() * colors.length);
    colors.forEach((color, idx) => {
        color.id = idx.toString();
        color.style.backgroundColor = getRandomColor();
        color.classList.remove("currect");
        color.innerHTML = "";
    });

    liveCount = 3;
    isSuccess = false;
    
    colorSuccess.innerHTML = colors[randomColorPosition].style.backgroundColor;
    lives.innerHTML = `${liveCount} attempts left`;
}

function onColorGuess(color: Element, colorRgb: string) {
    if (colorRgb === colorSuccess.innerHTML) {
        color.classList.add("currect");
        color.innerHTML = "Currect!";
        isSuccess = true;
    } else updateGame(isSuccess);
}

function getRandomColor() {
    const randomNumber1 = Math.floor(Math.random() * 255);
    const randomNumber2 = Math.floor(Math.random() * 255);
    const randomNumber3 = Math.floor(Math.random() * 255);
    return `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;
}

function updateGame(isSuccess:boolean) {
    if(isSuccess) return;
    liveCount--;
    if (liveCount <= 0) {
        lives.innerHTML = 'Game is Over';
        liveCount = 0;
        return;
    }
    lives.innerHTML = `${liveCount} attempts left`;
}

function easy() {
    liveCount = 3;
    lives.innerHTML = `${liveCount} attempts left`;
};

function hard() {
    liveCount = 1;
    lives.innerHTML = `${liveCount} attempts left`;
}



newGameBtn?.addEventListener("click", setNewGame);

easyBtn?.addEventListener("click", easy);

hardBtn?.addEventListener("click", hard);

colors.forEach((color) => {
    color.addEventListener("click", () => {
        onColorGuess(color, color.style.backgroundColor);
    });
});
