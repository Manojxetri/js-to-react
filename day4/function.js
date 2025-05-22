// function : reusable block of codes which is used to perform specific task

//basic function with no parameter and  no return value


// function greet(){
//     console.log("hello");
// }

// greet();


//function with parameter

// function greet_user(username,lastname){
//     console.log("hello "+username+" "+lastname);
// }

// greet_user("manoj","khanal");//if any parameter is not given then it shows undefined


//function with return value

// function return_result(a,b){
//        return a+b;
// }

// let result = return_result("hi ","hello");
// console.log(result);


// function basicCalculator(num1,num2,opr){
//     switch(opr){
//         case '+':
//             return num1+num2;
//             break;

//             case '-':
//                 return num1=num2;
//                 break;

//                 case '*':
//                     return num1*num2;
//                     break;

//                     case '/':
//                         if(num2==0){
//                             console.log("invalid");
//                      }
//                      else{
//                         return num1/num2;
//                      }
//     }
// }

// let result=basicCalculator(1,0,'/');
// console.log(result);



//anonymous function

let result=(a,b)=>{return a+b};
console.log(result(2,3));


hello();

function hello(){
    console.log("hello");
}






