// function handleClick(){
//     alert("clicked");
// }

let hide=document.getElementById("hide");
let dark=document.getElementById("dark");
let para=document.getElementById("para");
let body=document.getElementsByTagName("body");


function hideText(){
    if(hide.innerText=="Hide"){
        para.style.display="none";
        hide.innerText="show"
    }
    else if(hide.innerText=="show"){
        para.style.display="block"
        hide.innerText="Hide";
    }
}

function changeColor(){
    if(dark.innerText=="Dark"){
       document.body.style.backgroundColor="black";
        document.body.style.color="white";
        dark.innerText="white";
    }
    
 else if(dark.innerText=="white"){
       document.body.style.backgroundColor="white";
        document.body.style.color="black";
        dark.innerText="Dark";
    }
}

hide.addEventListener("click",hideText);
dark.addEventListener("click",changeColor);
