let printValuesOf = (jsObject, keys) => {
  for (let i = 0; i <= keys.length; i++) 
  {


    let key = keys[i];  

    console.log(jsObject[key]);    //Reference error, I replaced the k variable with key as probably it was mistyped
  }
}


let simpsonsCatchphrases = {
  lisa: 'BAAAAAART!',
  bart: 'Eat My Shorts!',
  marge: 'Mmm~mmmmm',
  homer: "d'oh!",   //Syntax error I fixed this by replacing the beginning and closing single quotes ' with double quotes "
  maggie: '(Pacifier Suck)'
};


console.log(simpsonsCatchphrases.maggie);




printValuesOf(simpsonsCatchphrases, ['lisa', 'bart', 'homer']); /*I used console.log to find out what is wrong with the keys array and I found out
that the input is not array but a single string 'lisa'. I put square brackets around the words to make them into the array*/



// Expected console output:

// BAAAAAART!
// Eat My Shorts!
// d'oh!

// Returns undefined
