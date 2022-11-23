let wordInput = prompt("please enter a word: ");

console.log(wordInput.replace(wordInput.charAt(1), '!'));  //second character replaced with "!"
console.log(reverseWord(wordInput));  
console.log(wordInput.replace(wordInput.charAt(5), wordInput.charAt(5).toUpperCase()));  //6th character uppercase
console.log(asciiConvert(wordInput));  //array of ascii values of each letter in the word

function reverseWord(word){
    var reversedWord=word.split("")
    reversedWord.reverse();
    return reversedWord.join("");
}

function asciiConvert(word){
    let asciiArray=[];

    for(let i=0; i<word.length; i++){
        let letterCode=word.charCodeAt(i);
        asciiArray.push(letterCode);
    }

    return asciiArray;
}