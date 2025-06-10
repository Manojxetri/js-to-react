// function sum(...num) {
//     let result = 0; 
//     num.forEach((value) => {
//         result += value;
//     });
//     console.log(result); 
// }

// sum(1, 2, 3, 4, 5); 


// let arr=[1,2,3,4,5,6,7,8];

// let newarr =arr.map((value)=>{
//     return value *2;
// });

// console.log(newarr);


// let str=["ram","hari"];

// str.map((value,index)=>{
//     console.log(index,": ",value);
// });


// let arr=[1,2,3,4,5,6,7,8];

// let newarr =arr.filter((value)=>{
//      console.log(value %2==0);
// });

// let arr=[1,2,3,4,5,6,7,8];

// let newarr =arr.filter((value)=>{
//      console.log(value %2==0);
// });



//REDUCE

let arr=[1,2,3,4,5,6,7,8];


// syntax:
// Array.reduce((Accumulator,currentValue)=>{
//      return Accumulator+currentValue;
// },initialvalue of acc);

// console.log(newArr);

let total = arr.reduce((sum,num)=>{
     return sum+num;
},0)
console.log(total);
