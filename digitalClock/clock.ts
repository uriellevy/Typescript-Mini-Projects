const clock = document.querySelector(".clock") as Element;
let interval;

window.onload = () => {
    setClock();
}

const setClock = () => {//manual way
    interval = setInterval(() => {
        const date = new Date();
        const hh = date.getHours();
        const mm = date.getMinutes();
        const ss = date.getSeconds();
        const amPm = hh < 12 ? "AM" : "PM";

        clock.innerHTML = `${hh}:${mm}:${ss} ${amPm}`
    },1000)
}