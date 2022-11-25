disappearString = (myString, toErase) => {

  let myStringArray = myString.split(" ");     //splitting string into separate words and saving them into array
  let temporaryArray = [];

  console.log(myStringArray);

  let found = false;    //variable used to break nested loop

  for (let eraseIdx = 0; eraseIdx < toErase.length; eraseIdx++) {   //looping through letters to erase


    for (let i = 0; i < myStringArray.length; i++) { //looping though every word of the sentence

      for (let j = 0; j < myStringArray[i].length; j++) {  //looping  through every letter of each word


        /*if the character to be erased in any word is found it will move the word to temporary Array where the word is splitted into seperate characters and then
        the character to be erased is removed with function splice.
        */

        if (myStringArray[i][j] == toErase.charAt(eraseIdx)) {

          temporaryArray = myStringArray[i].split("");  //
          temporaryArray.splice(j, 1);
          temporaryArray = temporaryArray.join("");
          myStringArray[i] = temporaryArray;

          found = true;
          break;
        }

      }

      if (found == true) break;

    }
    found = false;

  }

  myStringArray = myStringArray.join(" ");  //the letters in the array are concatenated together

  return myStringArray.toString();   //the array is covnerted to String



}


// DO NOT EDIT BELOW THIS LINE
let testStrings = [
    "the quick brown fox jumps over the lazy dog",
    "hello world",
    "software engineering is fun",
    "i like javascript",
    "clown case",
    "rhythms"
]

let stringToDisappear = "aeiou"

let correctStrings = [
    "th qck brwn fox jumps over the lzy dog",
    "hll world",
    "sftwr engneering is fn",
    " lik jvascript",
    "clwn cs",
    "rhythms"
]

for (let strIdx = 0; strIdx < testStrings.length; strIdx++) {
    let test = testStrings[strIdx];
    let correct = correctStrings[strIdx];

    let got = disappearString(test, stringToDisappear);

    if (got == correct) {
        console.log(`${strIdx + 1}: Testing ${test}: Correct!`);
    } else {
        console.log(`${strIdx + 1}: Testing ${test}: Wrong, got ${got}, expected ${correct}`);
    }
}
