let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("restart");

let msec = 0;
let sec = 0;
let min = 0;

let timerid = null;

start.addEventListener('click', function () {
    if (timerid != null) {
        clearInterval(timerid);
    }
    timerid = setInterval(startTimer, 10); // it will work as an infinite loop
});

stop.addEventListener('click', function () {
    clearInterval(timerid);
});

reset.addEventListener('click', function () {
    clearInterval(timerid);
    document.getElementById("s").innerHTML = '00';
    document.getElementById("m").innerHTML = '00';
    document.getElementById("h").innerHTML = '00';
    msec=sec=min=0;
});

function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
        }
    }

    let formattedMsec = msec < 10 ? `0${msec}` : msec;
    let formattedSec = sec < 10 ? `0${sec}` : sec;
    let formattedMin = min < 10 ? `0${min}` : min;

    document.getElementById("s").innerHTML = formattedMsec;
    document.getElementById("m").innerHTML = formattedSec;
    document.getElementById("h").innerHTML = formattedMin;
}


