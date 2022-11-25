alternativeString = (myString) => {
   
    let characters=myString.split('');  //splitting string into seperate characters
    let newString=[];
    let alteredString="";
    
    for(let i=1;i<=characters.length;i++){
        if(i%2==1){
            newString.push(characters[i-1].toUpperCase());     //every second character is uppercased and added into a new array
        }else if(characters[i-1]==" "){      
            newString.push(characters[i-1]);            //every space character is added to the new array
        }else{
            newString.push(characters[i-1].toLowerCase());          //all the characters left are lowercased and added to the new array
        }
    }


    alteredString=newString.join('');     //all the charactesrs from the array are joined together and saved to a new string variable

    return alteredString;
   
    
}


// DO NOT EDIT BELOW THIS LINE
let testStrings = [
    "Hello World",
    "Hello",
    "HELLO",
    "Software Engineering is Fun",
    "I like Javascript",
    "clown case"
]

let correctStrings = [
    "HeLlO WoRlD",
    "HeLlO",
    "HeLlO",
    "SoFtWaRe eNgInEeRiNg iS FuN",
    "I LiKe jAvAsCrIpT",
    "ClOwN CaSe"
]

for (let strIdx = 0; strIdx < testStrings.length; strIdx++) {
    let test = testStrings[strIdx];
    let correct = correctStrings[strIdx];

    let got = alternativeString(test);

    if (got == correct) {
        console.log(`${strIdx + 1}: Testing ${test}: Correct!`);
    } else {
        console.log(`${strIdx + 1}: Testing ${test}: Wrong, got ${got}, expected ${correct}`);
    }
}
