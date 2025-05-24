/* create a program that checks how frequent a number appears in an array
     4 times = frequent
     3 times = common
     1 time = rare

     create a function countFrequency(array) that returns a frequency array
     use loop to go through each number in the array
     check frequency and based on that print frequent , common and rare
*/


function countFrequency(arr){

for (let i = 0; i < arr.length; i++) {
    let count = 0;
    let skip = false;

    
    for (let j = 0; j < i; j++) {
        if (arr[i] === arr[j]) {
            skip = true; 
            break;
        }
    }

    if (skip === true) {
        continue; 
    }

    
    for (let k = 0; k < arr.length; k++) {
        if (arr[i] === arr[k]) {
            count++;
        }
    }


    if (count >= 4) {
        console.log(arr[i] + " = frequent");
    } else if (count === 3) {
        console.log(arr[i] + " = common");
    } else if (count === 1) {
        console.log(arr[i] + " = rare");
    }
}


}
    
    array=[10,10,11,12,11,13,10,10,11,15];
    countFrequency(array);