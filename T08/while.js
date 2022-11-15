/* This software keeps asking user to enter new number until the user enters -1. Then the software calculates the average 
of all numbers entered and prints it to the console
*/

let numbers=0;
let counter=0;  

while(true)
{
    let number=Number(prompt("Please enter a number: "));
    if(number==-1){
        break;
    }
    else{
        numbers=numbers+number;
        counter++;
    }
}

console.log("The average of the numbers entered: "+numbers/counter);
