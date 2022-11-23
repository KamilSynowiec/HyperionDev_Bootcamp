//this application is a simple calculator asking user to enter 2 numbers or one of the 4 operations "+", "-", "x", "/"

let number1=Number(prompt("Please enter first number: "));
let number2=Number(prompt("Please enter second number: "));
let operation=prompt("Please enter operation that you would like to perform('+','-', 'x' or '/'): ");

let result=0;

switch(operation){
    case "+":
        result=add(number1,number2);
        break;
    case "-":
        result=substract(number1,number2);
        break;
    case "x":
        result=multiply(number1,number2);
        break;
    case "/":
        result=divide(number1,number2);
        break;
    default:
        result="error";
}

console.log(number1+" "+operation+" "+number2+" = "+result);


function add(number1, number2){
    return number1+number2;
}
function substract(number1, number2){
    return number1-number2;
}
function multiply(number1, number2){
    return number1*number2;
}
function divide(number1, number2){
    return number1/number2;
}
