let u = sessionStorage.getItem("user");
let s = sessionStorage.getItem("score");
let t = sessionStorage.getItem("time");

document.querySelector("span.time").innerHTML = t;

document.querySelector("span.user").innerHTML = u;
document.querySelector("span.score").innerHTML = s;
