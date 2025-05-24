/*   student grade management system 
    function:addStudentName(name,grade)
    add students name and grade to respective array
    Validations: 
                 * Name must not be empty
                 * Grade must be between 0 and 100 (inclusive)
    calculateAverage(grades)
           Calculates and returns the average of grades using a loop
    determineClassPerformance(average)
          Returns class performance based on the average:
             1:"A" for >= 90
             2:"B" for 80-89
             3:"C" for 70-79
             4:"D" for 60-69
             5: "F" for <60
*/

let choice;

function addStudentName(name,grade){
    do{
         choice=parseInt(prompt(`Choose:
            1:Enter Student Name
            2:Enter Grade
            3:Exit`))
         
            switch(choice){
                
                case 1:
                   let  studentName=prompt("Student Name is");
                   console.log (name.push(studentName) +": "+ "Student Name: "+studentName);
                    break;

                    case 2:
                       let  studentGrade=parseInt(prompt("Student Grade is"));
                        
                        if(studentGrade>=0 && studentGrade<=100){
                                    console.log(grade.push(studentGrade) + ": "+"Grade: " + studentGrade);
                        }
                        else{
                            alert("Enter grade between 0 and 100")
                        }
                        break;

                        case 3:
                            console.log("exit from system");
                            break;

                            default:
                                prompt("enter between 1 -2 for student name and grade and 3 for exit");
                                break;
            }
    }while(choice!==3)
}



function calculateAverageGrades(grades){
        let sum=0;
          for(let i=0;i<grades.length;i++){    
            sum=sum+grades[i];
          }
          let average=sum/grades.length;
        console.log("Average marks of the student is: ",average);
        return average;
}

function determineClassPerformance(average){
     
    console.log("----Class Performance:-----")
     
    if(average>=90){
        console.log("------A-----");
    }
    else if(average>=80 && average <=89){
        console.log("------B------");
    }
    else if(average>=70 && average<=79){
        console.log("------C------");
    }
    else if(average >=60 && average <=69){
        console.log("------D------");
    }
    else{
        console.log("------F------");
    }
}


let stdName=[];
let stdGrade=[];

addStudentName(stdName,stdGrade);

let average = calculateAverageGrades(stdGrade);

determineClassPerformance(average);