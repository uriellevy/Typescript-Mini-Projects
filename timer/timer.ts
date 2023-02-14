const minutes = document.querySelector(".minutes") as HTMLInputElement;
const seconds = document.querySelector(".seconds") as HTMLInputElement;
const form = document.getElementById("timerInputWrapper");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
const timerDisplay = document.querySelector(".timerDisplay") as Element;
let sec = 0;
let min = 0;
let remainTime = 0;
let timerInterval: any;

const audioCtx = new AudioContext();

const generateNote = (frequency: number) => {
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = "sine";
    oscillator.frequency.value = frequency;
    oscillator.connect(gainNode)
    gainNode.connect(audioCtx.destination)

    oscillator.start(0); // immediately starts when triggered
    gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 3);
    oscillator.stop(audioCtx.currentTime + 3);
}

const playTimerAlarmSound = async () => {
    const c = 523.25;
    const e = 659.26;
    const g = 783.99;
    const notesGap = 200;
    const sequenceGap = 1000;

    for (let i = 0; i < 6; i++) {

        await Promise.resolve()
            .then(() => generateNote(c))
            .then(() => delay(notesGap))
            .then(() => generateNote(e))
            .then(() => delay(notesGap))
            .then(() => generateNote(g))
            .then(() => delay(sequenceGap))
    }
}

const delay = (duration: number) => {
    return new Promise((resolve: any) => {
        setTimeout(() => resolve(), duration);
    });
}





function onSetTimer(minutes: number, seconds: number) {
    if (minutes < 0 || seconds < 0) return;
    clearInterval(timerInterval);
    timerDisplayUpdate(minutes, seconds);
    sec = seconds;
    min = minutes;
};

function timerFormatting(num: number) {
    return num >= 10 ? num.toString() : `0${num}`;
};

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
    };
    const totalSeconds = Math.floor(remainTime / 1000);
    min = Math.floor(totalSeconds / 60);
    sec = totalSeconds % 60;
    remainTime -= 1000;
    timerDisplayUpdate(min, sec);
}

function timerDisplayUpdate(minutes: number, seconds: number) {
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
    clearInterval(timerInterval)
}



form?.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    onSetTimer(+minutes.value, +seconds.value);
});

play?.addEventListener("click", () => onPlayHandler());

reset?.addEventListener("click", () => resetHandler());

pause?.addEventListener("click", () => clearInterval(timerInterval));

