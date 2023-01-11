const groceryItems =["Apple", "Eggs", "Milk", "Bread"];  


/*this function adds each item to the unordered list and displays it.
It also turns red 2 items to indicate they are sold and adds strikethrough line to them*/
function displayShopping(groceryItems){
    

    let list=document.getElementById("itemList");  //getting our list

    groceryItems.forEach(function(item){   //for each loop is used to add all items from the grocery list

        let newItem=document.createElement("li");   //creating new <li>
        newItem.textContent=item; //changing content of the <li>

        list.appendChild(newItem);   //adding the newly created <li> to the original unordered list <ul>
    });


    //styling 2 items: Eggs and Bread to indicate they are sold
    let secondSold=document.querySelector("ul > li:nth-child(2)");
    secondSold.style.color="red";
    secondSold.style.setProperty("text-decoration", "line-through");
    let forthSold=document.querySelector("ul > li:nth-child(4)");
    forthSold.style.color="red";
    forthSold.style.setProperty("text-decoration", "line-through");
}


displayShopping(groceryItems);
