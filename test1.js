let timer = document.getElementById("timer");

let start = document.getElementById("start");

let stop = document.getElementById("stop");

let reset = document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds_1 = 0;
let seconds_2 = 0;

timer.innerHTML = hours + ":" + minutes + ":" + seconds_1 + ":" + seconds_2;

function push(){
    seconds_2++;
if(seconds_2 > 9)
    seconds_1++;
    seconds_2 = 0;
 
if(seconds_1 > 9)
    minutes++;
    seconds_1 = 0;

if(minutes > 9)
    hours++; 
    minutes = 0;
}
push();
setInterval(push,100);
