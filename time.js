let date = new Date(new Date().setTime(0));
let curr_time = date.getTime();
let sec = Math.floor((curr_time % (1000 * 60)) / 1000);
let min = Math.floor((curr_time % (1000 * 60 * 60)) / (1000 * 60));
let u_time = setInterval(function () {
    if (sec < 59) {
        sec++;
    }
    else {
        min++;
        sec = 0;
    }

    document.querySelector("span.time").innerHTML = `${min} : ${sec}`;
}, 1000);

