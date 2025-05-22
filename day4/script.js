let arr=[];
arr.push(1);
arr.push("hello world");
console.log(arr);

arr.pop();
console.log(arr);


//removes first element form the array
arr.shift();
console.log(arr);

//add elements to the start
arr.unshift("hi");
console.log(arr);

//check if elements exit
console.log(arr.includes("hi"));


//get index of the element
console.log(arr.indexOf(3));


//get length of the array
console.log(arr.length);


//loop through element of an array
for(let i of arr){
    console.log(i);
}