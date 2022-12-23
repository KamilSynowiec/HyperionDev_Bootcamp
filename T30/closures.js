/*his program takes 1 number from user as input and multiplies it by numbers from 0 to 10. 
It uses the closure function to perform the task.*/


function multiplication(number1){  //outer functin
    return function multiply(number2){   //inner function 
        console.log(number1+" * "+number2+" = "+(number1*number2)); //The result is displayed in format:  number1 * number2 = result
    }
}

let userInput=prompt("Please enter a number to perorm calculations: ");

const doTheMath = multiplication(userInput);  


//looping through numbers from 0 to 10
for(let i=0;i<10;i++){
    console.log(doTheMath(i));
}
