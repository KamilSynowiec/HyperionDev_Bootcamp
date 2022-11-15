/*
This program asks user to quess what coulour is the sky. If users answers correctly, the program will display "That's correct"
and exit, if user fails the question it will ask if the user wants to try again if yes then repeat question, if no the 
program will exit
*/

let skyColour="";
let tryAgain="";

do{
    skyColour=prompt("What colour is the sky? \n a. Purple \n b. Pink \n c. Blue \n d. Yellow \n Enter a, b, c, or d: ");

    if(skyColour!="c"){
        tryAgain=prompt("That's incorrect! Would you like to try again? y/n: ");
    }
    else{
        console.log("That's correct answer!");
    }
    

}while(skyColour!="c"&&tryAgain!="n")
