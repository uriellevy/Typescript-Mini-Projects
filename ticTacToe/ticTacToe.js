"use strict";
const gameContainer = document.querySelector(".gameContainer");
const tileElement = document.querySelector(".tileElement");
const tileElements = document.querySelectorAll(".tileElement");
const winner = document.querySelector(".winner");
const playerOne = "x";
const playerTwo = "o";
let currentPlayer = playerOne;
let gameIsOver = false;
const rows = 3;
const columns = 3;
let matrix = [];
window.onload = () => {
    setInitialGame();
};
function setInitialGame() {
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            const tileElement = document.createElement("div");
            tileElement.id = `${r}-${c}`;
            tileElement.classList.add("tileElement");
            tileElement.innerHTML = " ";
            row.push("");
            tileElement.addEventListener("click", () => onChooseTile(tileElement));
            gameContainer === null || gameContainer === void 0 ? void 0 : gameContainer.appendChild(tileElement);
        }
        matrix.push(row);
    }
}
function onChooseTile(tileElement) {
    if (gameIsOver)
        return;
    const coords = tileElement.id.split("-");
    const r = coords[0];
    const c = coords[1];
    if (currentPlayer === playerOne) {
        currentPlayer = playerTwo;
        tileElement.classList.add("playerOne");
        matrix[r][c] = "x";
    }
    else {
        currentPlayer = playerOne;
        tileElement.classList.add("playerTwo");
        matrix[r][c] = "o";
    }
    checkWinner();
}
function checkWinner() {
    //row check
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 1; c++) {
            if (matrix[r][c] !== "") {
                const threeSequence = matrix[r][c] === matrix[r][c + 1] && matrix[r][c + 1] === matrix[r][c + 2];
                if (threeSequence) {
                    declareWinner(r, c);
                    return;
                }
            }
        }
    }
    //column check
    for (let r = 0; r < 1; r++) {
        for (let c = 0; c < 3; c++) {
            if (matrix[r][c] !== "") {
                const threeSequence = matrix[r][c] === matrix[r + 1][c] && matrix[r + 1][c] === matrix[r + 2][c];
                if (threeSequence) {
                    declareWinner(r, c);
                    return;
                }
            }
        }
    }
    //diagonal check
    for (let r = 0; r < 1; r++) {
        for (let c = 0; c < 1; c++) {
            if (matrix[r][c] !== "") {
                const threeSequence = matrix[r][c] === matrix[r + 1][c + 1] && matrix[r + 1][c + 1] === matrix[r + 2][c + 2];
                if (threeSequence) {
                    declareWinner(r, c);
                    return;
                }
            }
        }
    }
    //diagonal reverse check
    for (let r = 2; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            if (matrix[r][c] !== "") {
                const threeSequence = matrix[r][c] === matrix[r - 1][c + 1] && matrix[r - 1][c + 1] === matrix[r - 2][c + 2];
                if (threeSequence) {
                    declareWinner(r, c);
                    return;
                }
            }
        }
    }
}
function declareWinner(row, column) {
    gameIsOver = true;
    winner.innerHTML = `Player ${matrix[row][column]} Won`;
}
