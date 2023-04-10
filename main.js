// global variables

const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const reset_btn = document.getElementById('reset');
const stop_btn = document.getElementById('stop');

let seconds = 0;
let interval = null;

// event listeners
start_btn.addEventListener('click',start);
stop_btn.addEventListener('click',st);
reset_btn.addEventListener('click',reset);

// functions of updating timer

function timer (){
    seconds++;

    // format our time
    let hours = Math.floor(seconds / 3600);
     let mins = Math.floor((seconds-(hours*3600))/60);
    let secs = seconds % 60;

    if(secs < 10) secs = '0'+secs;
    if(mins < 10) mins = '0'+mins;
    if(hours < 10) hours = '0'+hours;

    time_el.innerText = `${hours}:${mins}:${secs}`
}

function start(){

    if(interval) {
        return ;
    }

    interval = setInterval(timer,1000);// starts our timer

}

function st(){
    clearInterval(interval);
    interval = null;
}

function reset(){
    st();
    seconds = 0;
    time_el.innerText = '00:00:00';
}




