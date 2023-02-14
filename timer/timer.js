"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const form = document.getElementById("timerInputWrapper");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
const timerDisplay = document.querySelector(".timerDisplay");
let sec = 0;
let min = 0;
let remainTime = 0;
let timerInterval;
const audioCtx = new AudioContext();
const generateNote = (frequency) => {
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = frequency;
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.start(0); // immediately starts when triggered
    gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 3);
    oscillator.stop(audioCtx.currentTime + 3);
};
const playTimerAlarmSound = () => __awaiter(void 0, void 0, void 0, function* () {
    const c = 523.25;
    const e = 659.26;
    const g = 783.99;
    const notesGap = 200;
    const sequenceGap = 1000;
    for (let i = 0; i < 6; i++) {
        yield Promise.resolve()
            .then(() => generateNote(c))
            .then(() => delay(notesGap))
            .then(() => generateNote(e))
            .then(() => delay(notesGap))
            .then(() => generateNote(g))
            .then(() => delay(sequenceGap));
    }
});
const delay = (duration) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), duration);
    });
};
function onSetTimer(minutes, seconds) {
    if (minutes < 0 || seconds < 0)
        return;
    clearInterval(timerInterval);
    timerDisplayUpdate(minutes, seconds);
    sec = seconds;
    min = minutes;
}
;
function timerFormatting(num) {
    return num >= 10 ? num.toString() : `0${num}`;
}
;
function onPlayHandler() {
    remainTime = sec * 1000 + min * 60 * 1000;
    timerInterval = setInterval(() => {
        handleTimer();
    }, 1000);
}
function handleTimer() {
    if (sec <= 0 && min <= 0) {
        clearInterval(timerInterval);
        playTimerAlarmSound();
        return;
    }
    ;
    const totalSeconds = Math.floor(remainTime / 1000);
    min = Math.floor(totalSeconds / 60);
    sec = totalSeconds % 60;
    remainTime -= 1000;
    timerDisplayUpdate(min, sec);
}
function timerDisplayUpdate(minutes, seconds) {
    timerDisplay.innerHTML = `${timerFormatting(minutes)}:${timerFormatting(seconds)}`;
}
function resetHandler() {
    sec = 0;
    min = 0;
    remainTime = 0;
    timerDisplayUpdate(0, 0);
    clearInterval(timerInterval);
}
function pauseHandler() {
    clearInterval(timerInterval);
}
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    onSetTimer(+minutes.value, +seconds.value);
});
play === null || play === void 0 ? void 0 : play.addEventListener("click", () => onPlayHandler());
reset === null || reset === void 0 ? void 0 : reset.addEventListener("click", () => resetHandler());
pause === null || pause === void 0 ? void 0 : pause.addEventListener("click", () => clearInterval(timerInterval));
