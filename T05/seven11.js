// TASK 1

let input=prompt("Please enter a number: ");
let result;

if(input%7==0){     //using modulo operator to get remainder. if the remindeer is equal to 0 then the number is divisible by the other number
    if(input%11==0){
        result=" both 7 and 11.";
    }else{
        result=" 7.";
    }  
}else if(input%11==0){
    result=" 11.";
}else{
    result=" neither 7 nor 11.";
}

console.log(input+" is divisible by"+result);
      
