"use strict";
const stopWatchDisplay = document.querySelector(".stopWatchDisplay");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
let stopWtachInterval, ss = 0, mm = 0, hh = 0;
const onStart = () => {
    stopWtachInterval = setInterval(() => {
        if (ss === 20) {
            ss = 0;
            mm++;
        }
        if (mm === 60) {
            mm = 0;
            hh++;
        }
        if (hh === 100)
            hh = 0;
        stopWatchDisplay.innerHTML = `${pad(hh)}:${pad(mm)}:${pad(ss)}`;
        ss++;
    }, 1000);
};
const onStop = () => {
    clearInterval(stopWtachInterval);
};
const onReset = () => {
    clearInterval(stopWtachInterval);
    ss = 0;
    mm = 0;
    hh = 0;
    stopWatchDisplay.innerHTML = "00:00:00";
};
function pad(num) {
    if (num < 10) {
        return `0${num}`;
    }
    else {
        return `${num}`;
    }
}
startBtn === null || startBtn === void 0 ? void 0 : startBtn.addEventListener("click", onStart);
stopBtn === null || stopBtn === void 0 ? void 0 : stopBtn.addEventListener("click", onStop);
resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener("click", onReset);
