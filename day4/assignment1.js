/* create a program that checks how frequent a number appears in an array
     4 times = frequent
     3 times = common
     1 time = rare

     create a function countFrequency(array) that returns a frequency array
     use loop to go through each number in the array
     check frequency and based on that print frequent , common and rare
*/


function countFrequency(array){
     let frequency=[];

     for (let i=0;i<array.length;i++){
        let num=array[i];

        if(frequency[num]===undefined){
            frequency[num]=1;
        }
        else{
            frequency[num]++;
        }
     }

    for(let i=0;i<frequency.length;i++){
          if(frequency[i]===4){
            console.log(i+" is frequent");
          }
          else if(frequency[i]===3){
            console.log(i+" is common");
          }
          else {
            console.log(i+" is rare")
          }
          
    }

}
    
    array=[10,10,11,12,11,13,10,10,11,15];
    countFrequency(array);