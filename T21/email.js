// An Email Simulation

class Email{
	constructor(emailContents, fromAddress){
		this.emailContents=emailContents;
		this.fromAddress=fromAddress;
		this.hasBeenRead=false
		this.isSpam=false;
	}

	markAsRead(){
		this.hasBeenRead=true;
	}

	markAsSpam(){
		this.isSpam=true;
	}
}

const inbox=[];


//email object for testing purposes
let email=new Email("content blablablabla","kamilsynowiec2@gmail.com");
inbox.push(email);


//this function creates email object based on content and given email address and adds into inbox array 
function addEmail(content, receivedEmail){
	let email = new Email(content, receivedEmail);
	inbox.push(email);
}

//this function counts the number of emails in inbox
function getCount(){
	return inbox.length;
}

//this function returns email selected by user based on index
function getEmail(index){
	inbox[index].hasBeenRead=true;
	return inbox[index];
}

//this function returns all unread emails
function getUnreadEmails(){
	let unread=[];

	for(let i=0;i<inbox.length;i++){
		if(inbox[i].hasBeenRead==false){
			unread.push(inbox[i]);
		}
	}
	return unread;
}

//this function returns all emails marked as spam
function getSpamEmails(){
	let spam=[];

	for(let i=0;i<inbox.length;i++){
		if(inbox[i].isSpam==true){
			spam.push(inbox[i]);
		}
	}
	return spam;
}

//this function deletes email at selected position
function deleteEmail(index){
	inbox.splice(index,1);
}



//interaction with user
userChoice = "";
while(userChoice != "7")
{
	userChoice = prompt("What would you like to do:\n 1. Read email\n 2. Mark spam\n3. Add email\n4. Delete email\n5. View spam emails\n6. View unread emails\n7. quit?");
	if(userChoice == "1")
	{
		indexInput=prompt("Please enter the index of the Email you would like to read: ");
		console.log("Here is your email address that you looked for: ");
		console.log(getEmail(indexInput));
		console.log("\n");
	}else if(userChoice == "2")
	{
		indexInput=prompt("Please enter the index of the Email you would like to mark as spam: ");
		inbox[indexInput].markAsSpam();
		console.log("The Email at index "+indexInput+" has been marked as spam\n");

	}else if(userChoice == "3")
	{
		emailContent=prompt("Please enter the content of the Email you would like to add: ");
		sender=prompt("Please enter email address of the sender");
		console.log(addEmail(emailContent,sender));
		console.log("The email has been added succesfully\n");

	}else if(userChoice == "4")
	{
		indexInput=prompt("Please enter the index of the Email you would like to delete: ");
		deleteEmail(indexInput);
		console.log("The Email at index "+indexInput+" has been deleted\n");

	}else if(userChoice == "5")
	{
		console.log("Here is a list of all spam emails: ");
		console.log(getSpamEmails());
		console.log("\n");


	}else if(userChoice == "6")
	{
		console.log("Here is a list of unread emails: ");
		console.log(getUnreadEmails());
		console.log("\n");

	}else if(userChoice == "7")
	{
		console.log("Goodbye");
	}else{
		console.log("Oops - incorrect input");
		
	}
}
