"use strict";
const numberInput = document.querySelector(".container input");
const guessButton = document.querySelector(".guessButton");
const restartButton = document.querySelector(".restartButton");
const guessForm = document.querySelector(".container");
const indicationText = document.querySelector(".indication");
const guesses = document.querySelector(".guessRemain");
const targetNumber = Math.floor(Math.random() * 100 + 1);
let isGameOver = false;
let numberOfGuesses = 10;
const onSubmit = () => {
    const currNumber = numberInput.value;
    !isGameOver && handleCalculation(+currNumber);
};
const gameRestart = () => {
    indicationText.innerHTML = "";
    numberInput.value = "";
    isGameOver = false;
    numberOfGuesses = 10;
    guessButton.removeAttribute("disabled");
};
const gameOverHandler = () => {
    guessButton.setAttribute("disabled", "");
    indicationText.innerHTML = "Game Is Over";
    numberOfGuesses--;
    guesses.innerHTML = `${numberOfGuesses} guesses left`;
};
const handleCalculation = (number) => {
    if (numberOfGuesses === 1 && number !== targetNumber) {
        gameOverHandler();
    }
    else if (number > targetNumber) {
        numberOfGuesses--;
        indicationText.innerHTML = "guess lower number";
        guesses.innerHTML = `${numberOfGuesses} guesses left`;
    }
    else if (number < targetNumber) {
        numberOfGuesses--;
        indicationText.innerHTML = "guess higher number";
        guesses.innerHTML = `${numberOfGuesses} guesses left`;
    }
    else {
        indicationText.innerHTML = "Current Number!";
        guessButton.setAttribute("disabled", "");
        isGameOver = true;
    }
};
guessForm === null || guessForm === void 0 ? void 0 : guessForm.addEventListener("submit", (event) => {
    event.preventDefault();
    onSubmit();
});
restartButton.addEventListener("click", gameRestart);
