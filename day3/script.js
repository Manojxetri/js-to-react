// let grade=prompt("enter something");
// console.log(grade);

// let a=parseInt(prompt("enter 1st number"));
// let b=parseInt(prompt("enter 2nd number"));
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(a+b);

// let day=parseInt(prompt("enter the no for day"));
// let time=parseInt(prompt("enter the time"));

// switch(day){
//     case 1:
//         console.log(" today is sunday"); 
//         break;
        
//         case 2:
//             console.log("today is monday");
//             break;

//             case 3:
//              console.log("today is tuesday");
//              break;

//              case 4:
//              console.log("today is wednesday");
//              break;

//              case 5:
//              console.log("today is thursday");
//              break;

//              case 6:
//              console.log("today is friday");
//              break;

//              case 7:
//              console.log("today is saturday");
//              break;

//              default:
//                 console.log("enter btn 1 to 7");
//                 break;
// }

// if(day>=1 && day<=7){
// if(time>=0 && time <=12){
//         console.log("good morning");
//        }
//        else if(time>=12 && time <=16){
//         console.log("good evening");
//        }
//        else{
//         console.log("good night");
//        }
//     }



//pyramid

let i,j;
for( i=0;i<5;i++){
    let result=" ";
    for(j=5;j>i-1;j--){
        result=result+" "
    }
    for(k=0;k<2*i+1;k++){
        result=result+"*"
    }

    console.log(result);
}


