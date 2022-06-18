let timer = document.getElementById("timer");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let hours_1 = "0";
let hours_2 = "0";
let minutes_1 = "0";
let minutes_2 = "0";
let seconds_1 = "0";
let seconds_2 = "0";
let m_seconds_1 = "0";
let m_seconds_2 = "0";

let interval;

stop.disabled = true;
reset.disabled = true;

function stopWatch(){
 m_seconds_2++;
if(m_seconds_2> 9){
    m_seconds_1++;
    m_seconds_2 = 0;
}
if(m_seconds_1 > 5){
    seconds_2++; 
    m_seconds_1 = 0;
}    
if(seconds_2 > 9){
    seconds_1++; 
    seconds_2 = 0;
}    
if(seconds_1 > 5){
    minutes_2++; 
    seconds_1 = 0;
}
 if(minutes_2> 9){
    minutes_1++;
    minutes_2 = 0;
}    
if(minutes_1 > 5){
    hours_2++; 
    minutes_1 = 0;
} 
if(hours_2 > 9){
    hours_1++; 
    hours_2 = 0;
}
timer.innerHTML = hours_1 + hours_2 + ":" + minutes_1 + minutes_2 + ":" + seconds_1 + seconds_2 + ":" + m_seconds_1 + m_seconds_2;
}



start.addEventListener("click",function(){
interval = setInterval(stopWatch,15);
start.disabled = true;
stop.disabled = false;
reset.disabled = false;
})

stop.addEventListener("click",function(){
clearInterval(interval);
stop.disabled = true;
start.disabled = false;
reset.disabled = false;
})
    
reset.addEventListener("click",function(){
    clearInterval(interval);
    timer.innerHTML = "00:00:00:00";
     hours_1 = "0";
     hours_2 = "0";
     minutes_1 = "0";
     minutes_2 = "0";
     seconds_1 = "0";
     seconds_2 = "0";
     m_seconds_1 = "0";
     m_seconds_2 = "0";
    stop.disabled = true;
    start.disabled = false;
})



