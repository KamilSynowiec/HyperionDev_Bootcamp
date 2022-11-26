/*this program is a ceasar cypher. It enocodes message by converting all 
letters to ascii value and incrementing them by 15 */



let userInput=prompt("Please enter message to encode: ");

let encodedMessage=encodeMsg(userInput);
displayEncodedMsg(encodedMessage);



function encodeMsg(message){

    let encodedMessage=[];
    let letterCode=0;   //ascii code of a letter temporary variable


    for(let i=0;i<message.length;i++)
    {
        letterCode=message.toUpperCase().charCodeAt(i);   

        if(letterCode+15<=90&&letterCode+15>=65)
        {   //ascii values for capital letters bewteen 65 and 90

            letterCode=letterCode+15;  

        }else if(letterCode<=90&&letterCode>=65)
        {
            letterCode=(letterCode+15)%90+64;   //cyclicality implemented by using modulo rest
        }

        encodedMessage.push(String.fromCharCode(letterCode)) //converting ascii code back to string and adding to array

    }
    return encodedMessage.join("").toString();  //concatenate characters and convert array to string before returning
   
}

function displayEncodedMsg(message){
    console.log(message);
}
