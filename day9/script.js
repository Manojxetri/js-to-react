//setTimeOut

// console.log("1");
// console.log("2");
// console.log("3");
// setTimeout(()=>{
//     console.log("hello");
// },5000);
// console.log("4");

// let sum=0;
// let timeOutId=setInterval(()=>{
//     console.log(sum++);
// },1000)

// setTimeout(()=>{
//     clearInterval(timeOutId)
// },5000)

let intervalId; 

function assignColor() {
    let char = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += char[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
}

function handleInterval() {
    intervalId = setInterval(assignColor, 1000);
}

function stopInterval() {
    clearInterval(intervalId);
}
