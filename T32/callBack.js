// Code here for Compulsory Task 1

// setting variables to hold the intervalID
// and also a counter
let intervalID;
let counter = 0;

let startCounter = function() {
    intervalID = setInterval(
        //create the logic needed in the setInterval() function for
        //incrementing the counter and outputting to the console
        ()=>{
            counter++;  
            console.log(counter);
        },
        1000  //every 1000ms it will be repeated
    );
};

function stopCounter() {
    // add the logic required to stop the counter
    // using clearInterval()
    clearInterval(intervalID);
}

let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');

// the event listener is missing a callback function argument
// this button should start the outputting of the counter to the console
startButton.addEventListener("click", startCounter);

// the event listener is missing a callback function argument
// this button should the counter from outputting to the console
stopButton.addEventListener("click", stopCounter);

