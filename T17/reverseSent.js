/*the recursive function reverses word starting from returning character at the last position of the given word (its length)
and finishing at the first character (position 0) */


function reverseSent(sentence, position)
{
    if(position==0)     //base case if position is 0
    {
        return sentence.charAt(position);
    }else
    {
        return sentence.charAt(position) + reverseSent(sentence, position-1);    
    }

    
}


let word=prompt("Please enter word that you would want me to reverse: ");
    
console.log(reverseSent(word, (word.length-1)));  //length-1 because the first letter is at position 0 not 1 
