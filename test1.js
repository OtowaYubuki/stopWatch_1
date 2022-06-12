let timer = document.getElementById("timer");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds_1 = 0;
let seconds_2 = 0;

let interval;

function stopWatch(){
 seconds_2++;
if(seconds_2 > 9){
    seconds_1++;
    seconds_2 = 0;
}
if(seconds_1 > 9){
    minutes++;
    seconds_1 = 0;
}
if(minutes > 9){
    hours++; 
    minutes = 0;
}    
timer.innerHTML = hours + ":" + minutes + ":" + seconds_1 + ":" + seconds_2;
}
 
start.addEventListener("click",function(){
interval = setInterval(stopWatch,100);
start.disabled = true;
})

stop.addEventListener("click",function(){
clearInterval(interval);
stop.disabled = true;
start.disabled = false;
})
    
reset.addEventListener("click",function(){
    clearInterval(interval);
    timer.innerHTML = "0:0:0:0";
    stop.disabled = false;
    start.disabled = false;
})



