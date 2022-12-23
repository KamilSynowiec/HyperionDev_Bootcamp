//this is a higher-order function simulating how filter built-in method works

let myFilterFunction = array => fun => {    //closure function taking fun( callback function) as argument
    const filteredArray=[];

    

    for(let i=0;i<array.length; i++){

        let temp=fun(array[i]);  

        if(temp==true){  //if the word has 6 letters it will be passed into the filteredArray
            filteredArray.push(array[i]);
        }
    }

    return filteredArray;
}

//array of words to be passed
const wordsArray = ['Number', 'one', 'person', 'in', 'this', 'word'];


//2 arguments are passed: array of words and callback function that returns true if word has 6 letters otherwise false
const result = myFilterFunction(wordsArray)(item => {
if(item.length==6){
    return true;
}else{
    return false;
}
});

console.log("Filtered Array: "+result);
