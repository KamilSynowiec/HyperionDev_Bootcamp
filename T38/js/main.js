const groceryItems =["Apple", "Eggs", "Milk", "Bread"];  


/*this function adds each item to the unordered list and displays it.
It also turns red 2 items to indicate they are sold and adds strikethrough line to them*/
function displayShopping(groceryItems){
    

    let list=document.getElementById("itemList");  //getting our list

    groceryItems.forEach(function(item){   //for each loop is used to add all items from the grocery list

        let newItem=document.createElement("li");   //creating new <li>
        newItem.textContent=item; //changing content of the <li>

        let spanElement=document.createElement("span");
        
        spanElement.textContent=' \u00D7';
        spanElement.className="close";
        
        newItem.appendChild(spanElement);

        list.appendChild(newItem);   //adding the newly created <li> to the original unordered list <ul>
    });


    //styling 2 items: Eggs and Bread to indicate they are sold
    let secondSold=document.querySelector("ul > li:nth-child(2)");
    secondSold.style.color="red";
    secondSold.style.setProperty("text-decoration", "line-through");
    let forthSold=document.querySelector("ul > li:nth-child(4)");
    forthSold.style.color="red";
    forthSold.style.setProperty("text-decoration", "line-through");


    //deleteItem();
}

function updateList(){
    let input=document.getElementById('input');
    
    if(input.value==""){
        alert("Please insert an item! ");
    }else{  
        groceryItems.push(input.value);
    }

    displayShopping(groceryItems);
}

function deleteItems(){
    let closeButtons = document.querySelectorAll(".close");
    
    for(let i=0; i<closeButtons.length; i++)
    {

        closeButtons[i].addEventListener("click", function(e){

            let targetValue=e.target.parentElement.childNodes[0].nodeValue;

            let indexOfItem=groceryItems.indexOf(targetValue);
            groceryItems.splice(indexOfItem, 1);

            console.log(groceryItems);

            e.target.parentElement.style.display='none';
        });
    }

}


let itemList=document.getElementById("itemList"); //getting out list
    itemList.addEventListener("click", function(e){
        if(e.target.tagName==="LI"){
            e.target.classList.toggle("checked");
        }
    });

let input=document.getElementById("input");
var addBtn=document.getElementById("addBtn");
    input.addEventListener("keyup", function(e){
        if(e.keyCode===13){
            addBtn.click();
        }
    });
