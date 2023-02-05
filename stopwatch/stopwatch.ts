const stopWatchDisplay = document.querySelector(".stopWatchDisplay") as Element;
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
let stopWtachInterval:any, ss:number= 0, mm:number = 0, hh:number = 0;

const onStart = () => {
    stopWtachInterval = setInterval(() => {
        if(ss === 20) {
            ss = 0;
            mm++;
        }
        if(mm === 60) {
            mm = 0;
            hh++;
        }
        if(hh === 100) hh = 0;
        
        stopWatchDisplay.innerHTML = `${pad(hh)}:${pad(mm)}:${pad(ss)}`;
        ss++;
    },1000)
}

const onStop = () => {
    clearInterval(stopWtachInterval);
}

const onReset = () => {
    clearInterval(stopWtachInterval);
    ss = 0;
    mm = 0;
    hh = 0;
    stopWatchDisplay.innerHTML = "00:00:00";
}

function pad(num:number) {
    if(num < 10) {
        return `0${num}`;
    } else {
        return `${num}`;
    }
}
startBtn?.addEventListener("click", onStart);
stopBtn?.addEventListener("click", onStop);
resetBtn?.addEventListener("click", onReset);