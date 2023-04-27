const numberInput = document.querySelector(".container input") as HTMLInputElement;
const guessButton = document.querySelector(".guessButton") as HTMLButtonElement;
const restartButton = document.querySelector(".restartButton") as HTMLButtonElement;
const guessForm = document.querySelector(".container") as HTMLFormElement;
const indicationText = document.querySelector(".indication") as Element;
const targetNumber = Math.floor(Math.random() * 100 + 1);
let isGameOver = false;


const onSubmit = () => {
    const currNumber = numberInput.value;
    !isGameOver && handleCalculation(+currNumber);
}

const gameRestart = () => {
    indicationText.innerHTML = "";
    numberInput.value = "";
    isGameOver = false;
    guessButton.classList.remove("disabled");
}

const handleCalculation = (number: number) => {
    if (number > targetNumber) {
        indicationText.innerHTML = "guess lower number";
    } else if (number < targetNumber) {
        indicationText.innerHTML = "guess higher number";
    } else {
        indicationText.innerHTML = "Current Number!";
        guessButton.classList.add("disabled");
        isGameOver = true;
    }
}

guessForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    onSubmit();
})

restartButton.addEventListener("click", gameRestart)
