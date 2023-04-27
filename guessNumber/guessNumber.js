"use strict";
const numberInput = document.querySelector(".container input");
const guessButton = document.querySelector(".guessButton");
const restartButton = document.querySelector(".restartButton");
const guessForm = document.querySelector(".container");
const indicationText = document.querySelector(".indication");
const targetNumber = Math.floor(Math.random() * 100 + 1);
let isGameOver = false;
const onSubmit = () => {
    const currNumber = numberInput.value;
    !isGameOver && handleCalculation(+currNumber);
};
const gameRestart = () => {
    indicationText.innerHTML = "";
    numberInput.value = "";
    isGameOver = false;
    guessButton.classList.remove("disabled");
};
const handleCalculation = (number) => {
    if (number > targetNumber) {
        indicationText.innerHTML = "guess lower number";
    }
    else if (number < targetNumber) {
        indicationText.innerHTML = "guess higher number";
    }
    else {
        indicationText.innerHTML = "Current Number!";
        guessButton.classList.add("disabled");
        isGameOver = true;
    }
};
guessForm === null || guessForm === void 0 ? void 0 : guessForm.addEventListener("submit", (event) => {
    event.preventDefault();
    onSubmit();
});
restartButton.addEventListener("click", gameRestart);
