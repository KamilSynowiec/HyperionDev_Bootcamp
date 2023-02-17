//this is a website that displays random Chuck norries joke when the button is clicked


const requestJoke = async ()=>{
  const response = await fetch("https://api.chucknorris.io/jokes/random");  //it fetches the jokes from chucknorris.io API
  const result = await response.json();  

  document.getElementById("display").innerHTML=result.value;  //displaying joke on the page
}

