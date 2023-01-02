//this software outputs information about pokemon Bulbasaur fetched from the website www.affirmations.dev
let pokemon=[];

fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
    .then(res => res.json())  //converting to JSON 
    .then((result)=>{
        pokemon=result;
        console.log("Name: \n"+pokemon.name+"\n");
        console.log("Weight: \n"+pokemon.weight+"\n");
        console.log("Abilities: \n");
        console.log(pokemon.abilities);
    }),
    (error)=>{  //in case error occurs eg no response from the server API
        console.log(error);
    }
