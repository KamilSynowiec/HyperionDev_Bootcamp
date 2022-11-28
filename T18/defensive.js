try
{
    let distance, speed, time;

    let userChoice=prompt("Would you like to calculate distance, time or speed? answer: distance, time or speed: ");

    if(userChoice=="")
    {
        throw "You did not enter anything";
    }
    if(userChoice!=="distance"&&userChoice!=="time"&&userChoice!=="speed")
    {
        throw "The value entered: "+ userChoice+" is different than distance time or speed";
    }


    switch(userChoice)
    {
//____________________________________________________ if user decides to calculate distance
        case "distance":
            time=prompt("Please enter the time to calculate distance: ");
            if(isNaN(time))
            {
                throw time + " is not a number";
            }
            if(time<0){
                throw "time can not be a negative number";
            }

            speed=prompt("Please enter the speed to calculate distance: ");
            if(isNaN(speed))
            {
                throw time + " is not a number";
            }
            if(speed<0){
                throw "speed can not be a negative number";
            }
            distance=speed*time;
            console.log(distance);
            break;
//____________________________________________________ if user decides to calculate time

        case "time":
            distance=prompt("Please enter the distance to calculate time: ");
            if(isNaN(distance))
            {
                throw distance + " is not a number";
            }
            if(distance<0){
                throw "distance can not be a negative number";
            }

            speed=prompt("Please enter the speed different than 0 to calculate time: ");
            if(isNaN(speed))
            {
                throw speed + " is not a number";
            }
            if(speed==0)
            {
                throw "can not divide by 0, speed must be greater than 0 to calculate";
            }
            if(speed<0){
                throw "speed can not be a negative number";  //because later we use the speed input to calculate time by dividing distance by speed
            }

            time=distance/speed;
            console.log(time);
            break;
//____________________________________________________ if user decides to calculate speed
        case "speed":
            distance=prompt("Please enter the distance to calculate speed: ");
            if(isNaN(distance))
            {
                throw distance + " is not a number";
            }
            if(distance<0){
                throw "distance can not be a negative number";
            }

            time=prompt("Please enter the time to calculate speed: ");
            if(isNaN(time))
            {
                throw time + " is not a number";
            }
            if(time==0)
            {
                throw "can not divide by 0, time must be greater than 0 to calculate speed";

            }
            if(time<0){
                throw "time can not be a negative number";
            }

            speed=distance/time;
            console.log(speed);
    }

}catch(err)  //this will catch errorrs 
{
    console.log(err);
}
