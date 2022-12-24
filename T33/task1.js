//this software outputs words of affirmation fetched from the website www.affirmations.dev
let item=[];

fetch("https://www.affirmations.dev")
    .then(res => res.json())  //converting to JSON 
    .then((result)=>{
        item=result;
        console.log(item.affirmation);
    }),
    (error)=>{  //in case error occurs eg no response from the server API
        console.log(error);
    }
