let wordInput = prompt("please enter a word: ");

console.log(replaceEverySecond(wordInput));  //second character replaced with "!"
console.log(reverseWord(wordInput));  
console.log(everySixth(wordInput));  //6th character uppercase
console.log(asciiConvert(wordInput));  //array of ascii values of each letter in the word


const everySixth = word => {
    
    let characters=word.split('');
    let newWord=[];
    let newString="";

    for(let i=1; i<characters.length; i++){
        if(i%6==0){
            newWord.push(characters[i-1].toUpperCase());
        }
        else{
            newWord.push(characters[i-1]);  
        }
    }

    newString=newWord.join('');

    return newString;
}


const replaceEverySecond = word =>{

    let characters=word.split('');
    let newWord=[];
    let newString="";

    for(let i=0; i<characters.length; i++)
    {
        if(i%2==0){
            newWord.push(characters[i]);
        }
        else{
            newWord.push('!');
        }
    }

    newString=newWord.join('');

    return newString; 
}


const reverseWord = word =>{
    var reversedWord=word.split("")
    reversedWord.reverse();
    return reversedWord.join("");
}

const asciiConvert = word =>{
    let asciiArray=[];

    for(let i=0; i<word.length; i++){
        let letterCode=word.charCodeAt(i);
        asciiArray.push(letterCode);
    }

    return asciiArray;
}
