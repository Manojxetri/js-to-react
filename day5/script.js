//object == data structure whcih is used to store key value pair

// let newObject = {};

// let newOnbject2 = new Object;

// newObject.name="ramu";
// newObject.age=18;
// newObject.salary=123.45;

// console.log(newObject);

//unquie key

// let person = {
//     firstname : "john",
//     lastname : "doe",
//     age : 18,
// }

// //object methods : entries - returns array of key -value pair in an object
// let text = Object.entries(person);
// console.log(text);

// let key = Object.keys(person);
// console.log(key);

// let values=Object.values(person);
// console.log(values);


//accesing properties in obj
// //obj.name , obj[name]

// let myName ={
//     firstName: "manoj",
//     lastName : "khanal",
//     age : 20,
// }

// for(let i in myName){
//     console.log(`My name is ${myName.firstName} ${myName.lastName} and age is ${myName.age}`);
// }



/*  write a function areAnargrams(str1,str2) that retuens true if the two strings are anagramas
    (same letters in different orders),and false otherwise

    Hint:Use object to count frequency of letters
       
    Example: areAnargramas("listen","silent";-true)
              areAnargramas("hello","world"-false)
*/

function areAnagrams(str1, str2) {
  
  if (str1.length !== str2.length) {
    return false;
  }

  
  let count = {};

  
  for (let char of str1) {
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }


  for (let char of str2) {
    if (!count[char]) {
      return false;
    } else {
      count[char]--;
    }
  }

  
  return true;
}

// Examples
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false

