/*This program translates words from english to polish by taking user input and 
checking if this word exists in dictionary*/

let dictionary = new Map();
let tryAgain = "y";

dictionary.set("Hello", "Czec");
dictionary.set("Bye", "Pa pa");
dictionary.set("Add", "Dodac");
dictionary.set("letter", "list");
dictionary.set("Jump", "Skok");
dictionary.set("Selection", "Wybor");
dictionary.set("Protection", "Ochrona");
dictionary.set("Run", "Bieg");
dictionary.set("Visit", "Odwiedziny");
dictionary.set("Base", "Podstawa");

//printing all words from dictionary
console.log("Vocabulary list: ");
for (let translation of dictionary) {
  console.log(translation);
}


while (tryAgain == "y") {
  let wordInput = prompt("Please enter word in English that you would like me to translate to Polish: ");

  //checking if given word exists in dictionary then printing translation
  if (dictionary.has(wordInput)) {
    console.log(dictionary.get(wordInput));
  }

  tryAgain = prompt("Would you like to translate something else? y/n:");
}


