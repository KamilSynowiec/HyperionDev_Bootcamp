/* this program asks user to enter numbers. If the user wants to add 11th number, the program
asks user if he wants to replace someone on the list with this person. After replacing the list is printed*/


let addPerson = "y";
let peopleInvited = [];

while (addPerson == "y") //while condition checking if user wants to add more people
{   
  let a = prompt("Please enter the name of a person you would   like to invite: ");
  console.log(a);

  if (peopleInvited.length < 10) 
  {
    peopleInvited.push(a);
    addPerson = prompt("Do you want to add another user? Answer y/n")
  }else 
  {
    let replaceAnswer = prompt("You have already added 10 people to your guest list. Would you like to replace someone on this list with this person? y/n");

    if (replaceAnswer == "y") 
    {
      console.log(peopleInvited);
      let personToReplace = prompt("Who would you like to replace?");
      let personsIndex = peopleInvited.indexOf(personToReplace);
      peopleInvited[personsIndex] = a;

      break;
      
    }else if (replaceAnswer == "n") 
    {
      break;
    }
  }
}


console.log(peopleInvited);
