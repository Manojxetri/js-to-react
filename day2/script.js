//operators

let x=25;
let y=5;

//concatination
//console.log("4"+5); //ans is 45
//console.log(parseInt("4")+5);//convering the string to integer using parseInt


//Arithemetic Operator
//console.log("addition",x+y);
//console.log("subtaraction",x-y);
//console.log("multiplication",x*y);
//console.log("division",x/y);
// console.log("4"-1); ans =3
//console.log("modulus",x%y);
//console.log("exponential",x**y);


//Comaprison Operator
//= , == , ===(comapre with data type), !=, !== , < , >


// console.log("assign x:",x=10);
// console.log("x equal to y:",x==y);
// console.log("strongly equal to :","5"===5);
// console.log("x not equal to y:",x!=y);
// console.log(" not strongly equal to :","5"!==5);
// console.log("x is greater than y:",x>y);
// console.log("x is less than y:",x<y);


//logical operator

//&& , // ,!

// let age=17;
// let liscnece =true;
// let adult=false;

// console.log("eligible to get liscence:",(age>=18) || liscence);
// console.log("user has liscenece:", liscenece);
// console.log("user can driver",liscnece && adult);



//conditional statement
//if else

//find greatest and second greatest number among 3 number

// let a=5,b=3,c=9;

// if(a>b && a>c ){
//     console.log("a is greatest");
// }

// else if(b>a && b>c){
//     console.log("b is greatest");
// }

// else {
//     console.log("c is greatest");
// }

// // a = 5 b = 3 c = 9

//  if((a>b && a<c) || (a<b && a>c)){
//     console.log("a is second greatest");
// }
// else if((b>a && b<c) || (b<a && b>c)){
//     console.log("b is second greatest");
// }
// else{
//     console.log("c is second greatest");
// }


//switch case
//WAP to take a letter a,b,c,d,f and print the grade description using switch
//a=excellent
//b=good
//c=average
//d=poor
//f=fail
//other = invalid


//let grade = prompt("enter the case");
let grade = 'b' ;
switch(grade){
    case 'a':
        console.log("excellent");
        break;
    case 'b':
        console.log("good");
        break;
    case 'c':
        console.log("average");
        break;
    case 'd':
        console.log("poor");
        break;
    case 'f':
        console.log("fail");
        break;
    default:
        console.log("invalid grade");
        break;
}
