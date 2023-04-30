const numberInput = document.querySelector(".container input") as HTMLInputElement;
const guessButton = document.querySelector(".guessButton") as HTMLButtonElement;
const restartButton = document.querySelector(".restartButton") as HTMLButtonElement;
const guessForm = document.querySelector(".container") as HTMLFormElement;
const indicationText = document.querySelector(".indication") as Element;
const guesses = document.querySelector(".guessRemain") as Element;
const targetNumber = Math.floor(Math.random() * 100 + 1);
let isGameOver = false;
let numberOfGuesses = 10;


const onSubmit = () => {
    const currNumber = numberInput.value;
    !isGameOver && handleCalculation(+currNumber);
}

const gameRestart = () => {
    indicationText.innerHTML = "";
    numberInput.value = "";
    isGameOver = false;
    numberOfGuesses = 10;
    guessButton.removeAttribute("disabled")
}

const gameOverHandler = () => {
    guessButton.setAttribute("disabled", "")
    
    
    indicationText.innerHTML = "Game Is Over";
    numberOfGuesses--;
    guesses.innerHTML = `${numberOfGuesses} guesses left`;
}

const handleCalculation = (number: number) => {
    if (numberOfGuesses === 1 && number !== targetNumber) {
        gameOverHandler();
    } else if (number > targetNumber) {
        numberOfGuesses--;
        indicationText.innerHTML = "guess lower number";
        guesses.innerHTML = `${numberOfGuesses} guesses left`;
    } else if (number < targetNumber) {
        numberOfGuesses--;
        indicationText.innerHTML = "guess higher number";
        guesses.innerHTML = `${numberOfGuesses} guesses left`;
    } else {
        indicationText.innerHTML = "Current Number!";
        guessButton.setAttribute("disabled", "")
        isGameOver = true;
    }
}

guessForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    onSubmit();
})

restartButton.addEventListener("click", gameRestart)
