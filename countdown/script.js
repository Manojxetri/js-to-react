let timeElement=document.querySelector(".time")

let initialTime=10;

let intervalId;

function timer(){
    timeElement.innerHTML=initialTime;
    initialTime--;
    if(initialTime<0){
        clearInterval(intervalId);
        timeElement.innerHTML="Times Up";
    }
}

function setTimer(){
    intervalId=setInterval(timer,1000);
}