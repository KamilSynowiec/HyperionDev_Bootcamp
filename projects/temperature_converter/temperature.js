//This program takes temperature from the user in previously given metric and converts it to another metric chosen by the user

let metricChoice=prompt("In which metric is the temperature you are converting? \n C - Celsius \n F  - Fahrenheit \n K- Kelvin");
let numberToConvert=Number(prompt("Please enter the temperature in "+metricChoice+ " that you want to convert"));
let metricTarget=prompt("To which metric would you like to convert the temperature? \n C - Celsius \n F  - Fahrenheit \n K- Kelvin");


switch(metricChoice){
    case "C":
        if(metricTarget=="C")
            console.log(numberToConvert+metricChoice+" is "+numberToConvert+metricTarget);
        if(metricTarget=="F")
            console.log(numberToConvert+metricChoice+" is "+(numberToConvert*(9/5)+32)+metricTarget);
        if(metricTarget=="K")
            console.log(numberToConvert+metricChoice+" is "+(numberToConvert+273.15)+metricTarget);

        break;
    case "K":
        if(metricTarget=="C")
            console.log(numberToConvert+metricChoice+" is "+(numberToConvert-273.15)+metricTarget);
        if(metricTarget=="F")
            console.log(numberToConvert+metricChoice+" is "+(((numberToConvert-273.15)*(9/5)+32)+metricTarget));
        if(metricTarget=="K")
            console.log(numberToConvert+metricChoice+" is "+(numberToConvert+metricTarget));

        break;
    case "F":
        if(metricTarget=="C")
            console.log(numberToConvert+metricChoice+" is "+(((numberToConvert-32)*5/9)+metricTarget));
        if(metricTarget=="F")
            console.log(numberToConvert+metricChoice+" is "+(numberToConvert+metricTarget));
        if(metricTarget=="K")
            console.log(numberToConvert+metricChoice+" is "+(((numberToConvert-32)*5/9)+273.15)+metricTarget);

        break;
    default:
        console.log("The data entered is incorrect. Please try again");
        break;
}
