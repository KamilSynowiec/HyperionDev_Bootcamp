//this application allows you to save your favourite books into a bookshelf and edit them!

const bookShelf=[];

function bookObj(author, title, genre){  //book object constructor
    this.author=author;
    this.title=title;
    this.genre=genre;

}

function addBook(){  //this method is adding new book onto the shelf

   let author = document.getElementById("author").value;   //getting inputs from user
   let title = document.getElementById("title").value;
   let genre = document.getElementById("genre").value;

   document.getElementById("author").value="";    //clearing input values from the fields
   document.getElementById("title").value="";
   document.getElementById("genre").value="";


   let book = new bookObj(author, title, genre);  //creating new book object

   bookShelf.push(book);   //adding the book object into the bookShelf array

   sessionStorage.setItem("bookShelf", JSON.stringify(bookShelf));  //adding bookShelf into the sessionStorage
    displayShelf();
}

function displayShelf(){

    let books=JSON.parse(sessionStorage.getItem("bookShelf"));   //converting from array to object using JSON.parse

    let list=document.getElementById("bookShelf");  //getting our list 

    //removing all child elements from the display list (to refresh it)
    const myNode=document.getElementById("bookShelf");
    myNode.innerHTML='';


    console.log("I am running!!!");
    let indexId=0;  //index for recognizing span elements

    //looping through elements to display them
    books.forEach(function(item){   

        let newItem=document.createElement("li"); 
        newItem.textContent="author: "+item.author+"  title:   "+item.title+"  genre: "+item.genre;

        let spanElement=document.createElement("span"); //adding delete button
        spanElement.textContent=' \u00D7';
        spanElement.className="close";
        spanElement.id=indexId;  //adding index to span element then increment by 1
        
        let spanElement2=document.createElement("span");  //addin edit button
        spanElement2.textContent=' \u270E';
        spanElement2.className="edit";
        spanElement2.id=indexId;

        indexId++;

        newItem.appendChild(spanElement);
        newItem.appendChild(spanElement2);

        list.appendChild(newItem);
    });

    editBook();
    removeBook();  
}


function editBook(){  //funciton used to remove chosen book
    let editButton=document.querySelectorAll(".edit");

    for(let i=0;i<editButton.length;i++){    //adding event listeners to all elements in a list
        editButton[i].addEventListener("click", function(e){

            let changedAuthor = prompt('Please confirm same author or type new one if you would like to change it for: '+e.target.parentElement.childNodes[0].nodeValue);
            let changedTitle = prompt('Please confirm or change title of this book: '+e.target.parentElement.childNodes[0].nodeValue);
            let changedGenre = prompt('Please confirm or change genre of this book: '+e.target.parentElement.childNodes[0].nodeValue);

            let tempBooksObject=JSON.parse(sessionStorage.getItem("bookShelf"));  //removing the object from the array in sessionStorage

            tempBooksObject[e.target.id].author=changedAuthor;
            tempBooksObject[e.target.id].title=changedTitle;
            tempBooksObject[e.target.id].genre=changedGenre;

            sessionStorage.setItem("bookShelf", JSON.stringify(tempBooksObject));

            //location.reload();
            displayShelf();

        });
    }
}
 
function removeBook(){  //funciton used to remove chosen book
    let closeButton=document.querySelectorAll(".close");

    for(let i=0;i<closeButton.length;i++){
        closeButton[i].addEventListener("click", function(e){

            //console.log(e.target.id);

            let tempBooksObject=JSON.parse(sessionStorage.getItem("bookShelf"));  //removing the object from the array in sessionStorage
            tempBooksObject.splice(e.target.id, 1);
            sessionStorage.setItem("bookShelf", JSON.stringify(tempBooksObject));

            e.target.parentElement.style.display='none'; //making element disappear 
        });
    }
}

document.getElementById("adding").addEventListener("click", addBook);



