let userInput=prompt("Please enter a word: ");
let palindrome;

let counter = 0;
let length=userInput.length;
let max=Math.floor(length/2);   //the loop will run until half of the word because


while(counter<max){
    if(userInput[counter]!==userInput[length-counter-1]){    //comparing first letter x with last y, then second letter x+1 with last y-1 etc 
        palindrome=0;      //if any of the letters compared are different then no palindrome
    }
    counter++;
}

if(palindrome==0){
    console.log(userInput+ " is not a palindrome");
}else{
    console.log(userInput+ " is a palindrome");
}
