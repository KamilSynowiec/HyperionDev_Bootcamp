separationString = (myString) => {
  
  let splittedString = myString.split(" ");    //splitting string into seperate words and saving each word to array
  
  let separatedString = splittedString.join("\n");  //concatenating the words from array into string and the newline character "\n" will seperate each word into new line

  return separatedString;
}


// DO NOT EDIT BELOW THIS LINE
let testStrings = [
  "Hello World",
  "Hello",
  "HELLO",
  "Software Engineering is Fun",
  "I like Javascript",
  "Line1 Line2 Line3 Line4 Line5 Line6 Line7 Line8 Line9"
];

console.log("------------------------------------------------")

testStrings.forEach((sentence) => {
  let sep = separationString(sentence);
  console.log(sep);
  console.log("------------------------------------------------")

});
