let toggle = document.querySelector('.toggle');
let reset = document.querySelector(".reset");
let save = document.querySelector(".record");
let recordedTimes = document.querySelector('.save-list');
let time = document.querySelector('.text');

let timer = 0;
let isActive = false;

let interval;

function getTime(sec) {
    let min = 0;
    let hour = 0;
    if (sec >= 60) {
        min = Math.floor(sec / 60);
        sec -= 60 * min;
    }
    if (min >= 60) {
        hour = Math.floor(min / 60);
        min -= 60 * hour;
    }

    return { sec, min, hour }
}

function to2Digit(number) {
    return Number.parseInt(number) >= 10 ? number.toString() : `0${number}`;
}

function timeToString() {
    const { hour, min, sec } = getTime(timer);
    return `${to2Digit(hour)}:${to2Digit(min)}:${to2Digit(sec)}`;
}

toggle.addEventListener('click', function () {
    if (!interval) {
        interval = setInterval(function () {
            timer++;
            time.innerHTML = timeToString();
        }, 1000);
    } else {
        clearInterval(interval);
        interval = undefined;
    }
    toggle.innerHTML = interval ? 'Stop' : 'Start';
});

reset.addEventListener("click", function () {
    timer = 0;
    timeToString();
});

save.addEventListener('click', function () {
    const li = document.createElement('li');
    li.innerHTML = timeToString();
    recordedTimes.prepend(li);
});
