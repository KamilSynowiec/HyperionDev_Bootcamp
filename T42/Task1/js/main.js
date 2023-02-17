function liked(e){  //this function makes user turn like button green upon clicking it
    e.target.style.background="green";
    console.log(e.target);
}

let items=[];

function saved(e){  //this method saves item selected by user in the items array and adds it to localStorage to share between pages
    e.target.style.display="none";

    let savedItem={};
    let name=e.target.parentElement.querySelector("figure").querySelector("figcaption").innerText;
    let image=e.target.parentElement.querySelector("figure").querySelector("img");

    savedItem.name=name;
    savedItem.image=image;

    items.push(savedItem);

    localStorage.setItem("items",JSON.stringify(items));

    alert("There are "+items.length+" items saved");  //this informs user about the amount of items saved
}

function displaySaved(){   //this method displays saved items but the user on the Save for later page
    let items=JSON.parse(localStorage.getItem("items").name);

    console.log(localStorage.getItem("items").name);

    document.getElementById("displaying").innerHTML(items);

    
}

function contacting(){  //this is used for contact form
    alert("Your question has been sent succesfully!");
    location.reload();
}

let likeButtons=document.getElementsByClassName("likeButton");  //getting our like buttons

for (i = 0; i < likeButtons.length; i++) {  //adding event listeners to all like buttons 
    likeButtons[i].addEventListener("click", liked);
}

let saveButtons=document.getElementsByClassName("saveButton"); //getting out save buttons

for (i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener("click", saved);  //adding event listeners to all save buttons
}
