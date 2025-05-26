let counter=document.getElementById("number");
let incrementBtn=document.getElementById("increment");
let decrementBtn=document.getElementById("decrement");
let count=0;



function increment(){
    count++;
    counter.innerText=count;
}

function decrement(){
    count--;
    counter.innerText=count;
}

incrementBtn.addEventListener("click",increment);
decrementBtn.addEventListener("click",decrement);