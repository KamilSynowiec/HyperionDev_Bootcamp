//This software finds the greatest common divisor for 2 numbers x and y by using recursion

function calculateGCD(x, y)
{
    if(y==0) //because we can divide 0 by any number which gives us 0 then any number can be divisor. So the highest common divisor will be the other number
    {
        return x;
    }
    else
    {
        return calculateGCD(y, x%y);  //modulo will find us reminders of x/y and return the reminder that is one of the common divisors
    }
}

let x=5, y=10;

console.log("The greatest common divisor of "+x+" and "+y+" is "+calculateGCD(x, y));
