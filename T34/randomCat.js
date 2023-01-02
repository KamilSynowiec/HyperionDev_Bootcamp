randomGif();

async function randomGif(){
   let cat = await fetch("http://thecatapi.com/api/images/get?format=src&type=gif");

    console.log(cat.url);

}
