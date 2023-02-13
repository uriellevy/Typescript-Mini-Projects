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
let timerInterval:any;

function onSetTimer() {
    if(+minutes.value < 0 || +seconds.value < 0) return;
    timerDisplayUpdate(minutes.value, seconds.value);
    sec = +seconds.value;
    min = +minutes.value;
};

function timerFormatting(num:string) {
    return +num >= 10 ? num : `0${num}`;
};

function onPlayHandler() {

    remainTime = sec * 1000 + min * 60 * 1000;
    timerInterval = setInterval(() => {
        handleTimer();
    },1000);
    
}

function handleTimer() {
    if(sec <= 0 && min <= 0) {
        clearInterval(timerInterval);
        return;
    };
    console.log(remainTime)
    const totalSeconds = Math.floor(remainTime / 1000);
    min = Math.floor(totalSeconds / 60);
    sec = totalSeconds % 60;
    remainTime -= 1000;
    timerDisplayUpdate(min.toString(), sec.toString());
}

function timerDisplayUpdate(minutes:string, seconds:string) {
    timerDisplay.innerHTML = `${timerFormatting(minutes)}:${timerFormatting(seconds)}`;
}

function resetHandler() {
    sec = 0;
    min = 0;
    timerDisplayUpdate("0", "0");
    clearInterval(timerInterval);
}

function pauseHandler() {
    clearInterval(timerInterval)
    console.log(remainTime);
}



form?.addEventListener("submit", (e:Event) => {
    e.preventDefault();
    onSetTimer();
});

play?.addEventListener("click", () => {
    onPlayHandler();
});

reset?.addEventListener("click", () => {
    resetHandler();
})

pause?.addEventListener("click", () => {
    pauseHandler();
})