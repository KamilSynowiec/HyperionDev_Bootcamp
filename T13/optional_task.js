/* this progam checks if the given word is palindrome or  not and returns true or false

there are 2 indexes i and j. Index i checks characters from left to right side of the sentence and index j from right to left, that's why j decrements after each loop and i increments until they meet in the half length of the sentence (myString.length/2)

*/

isPalindrome = (myString) => {

  let palindrome = true;   //variable that will change to false if 
  let j = myString.length - 1;

  for (let i = 0; i < myString.length / 2; i++) {

    if (myString.charAt(i) != myString.charAt(j)) {     //comparing characters
      palindrome = false;  //if compared characters are not the same then it is not a palindrome
      break;
    }

    j--;
  }
  return palindrome;

}



// DO NOT EDIT BELOW THIS LINE
let testStrings = [
    "The Quick Brown Fox Jumps Over The Lazy Dog",
    "helloworld",
    "tacocat",
    "anna",
    "racecar",
    "dad",
    "level",
    "noon",
    "rotator",
    "tenet",
    "saippuakivikauppias",
    "hyperiondev",
    "rhythms"
]


let correctStrings = [
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false
]

for (let strIdx = 0; strIdx < testStrings.length; strIdx++) {
    let test = testStrings[strIdx];
    let correct = correctStrings[strIdx];

    let got = isPalindrome(test);

    if (got == correct) {
        console.log(`${strIdx + 1}: Testing ${test}: Correct!`);
    } else {
        console.log(`${strIdx + 1}: Testing ${test}: Wrong, got ${got}, expected ${correct}`);
    }
}
