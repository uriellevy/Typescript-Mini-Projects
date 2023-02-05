"use strict";
const clock = document.querySelector(".clock");
let interval;
window.onload = () => {
    setClock();
};
// const setClock = () => {//easy way
//     interval = setInterval(() => {
//         const date = new Date().toLocaleTimeString()
//         clock.innerHTML = date;
//     },1000)
// }
const setClock = () => {
    interval = setInterval(() => {
        const date = new Date();
        const hh = date.getHours();
        const mm = date.getMinutes();
        const ss = date.getSeconds();
        const amPm = hh < 12 ? "AM" : "PM";
        clock.innerHTML = `${hh}:${mm}:${ss} ${amPm}`;
    }, 1000);
};
