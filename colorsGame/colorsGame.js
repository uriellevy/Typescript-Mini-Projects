"use strict";
const colorSuccess = document.querySelector(".rgbColor");
const easyBtn = document.querySelector(".easy");
const hardBtn = document.querySelector(".hard");
const newGameBtn = document.querySelector(".newGame");
const colors = document.querySelectorAll(".color");
const lives = document.querySelector(".lives");
let liveCount = 3;
let isSuccess = false;
window.onload = () => {
    setNewGame();
};
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
function onColorGuess(color, colorRgb) {
    if (colorRgb === colorSuccess.innerHTML) {
        color.classList.add("currect");
        color.innerHTML = "Currect!";
        isSuccess = true;
    }
    else
        updateGame(isSuccess);
}
function getRandomColor() {
    const randomNumber1 = Math.floor(Math.random() * 255);
    const randomNumber2 = Math.floor(Math.random() * 255);
    const randomNumber3 = Math.floor(Math.random() * 255);
    return `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;
}
function updateGame(isSuccess) {
    if (isSuccess)
        return;
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
}
;
function hard() {
    liveCount = 1;
    lives.innerHTML = `${liveCount} attempts left`;
}
newGameBtn === null || newGameBtn === void 0 ? void 0 : newGameBtn.addEventListener("click", setNewGame);
easyBtn === null || easyBtn === void 0 ? void 0 : easyBtn.addEventListener("click", easy);
hardBtn === null || hardBtn === void 0 ? void 0 : hardBtn.addEventListener("click", hard);
colors.forEach((color) => {
    color.addEventListener("click", () => {
        onColorGuess(color, color.style.backgroundColor);
    });
});
