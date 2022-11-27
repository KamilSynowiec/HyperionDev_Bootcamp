function searchIndex(array, word, position)
{
    if(array[position]==word) //if the word has been found the function will return its position
    {
        return position;

    }else if(position==0)   //if the whole array has been check down to index 0 and the word has not been found it will return text
    {
        return "The word has not been found";

    }else
    {
        return searchIndex(array, word, position-1);   //at each recursion the function will decrement index of the array to check another word

    }

}

let dataArray=["java", "html", "javascript", "css"];
let wordToSearch="html";

console.log("index position of that word: "+searchIndex(dataArray, wordToSearch, dataArray.length));
