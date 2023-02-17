//this is a website that displays current time that is updated every second


function displayTime(){

  //getting current time by using the Date() object

  var today = new Date();  
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  document.getElementById("display").innerHTML=time;  //displaying time on the page
}

setInterval(displayTime, 1000);  //calling the displayTime function with 1s intervals (1000ms)

