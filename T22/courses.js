//parent class courses contains display contact website method
class Courses{
    constructor(courseName, contactWebsite)
    {
        this.courseName=courseName;
        this.contactWebsite=contactWebsite;
    }

    displayContactWebsite()
    {
        return this.contactWebsite;
    }
}

//class Subjects inheriting from the Courses class
class Subjects extends Courses{

    constructor(courseName, contactWebsite, subjectName, lecturerName)
    {
        super(courseName,contactWebsite);  
        this.subjectName=subjectName;
        this.lecturerName=lecturerName;
    }

    displayInformation()   //this method displays informations about course name, subject name and lecturer name
    {
        console.log("Course Name: "+this.courseName);
        console.log("Subject name: "+this.subjectName);
        console.log("Name of the lecturer: "+this.lecturerName);

    }
}

//3 instances of the Subjects class for testing
let programming = new Subjects("Computer Science", "www.university.com","programming", "Steve");
let medievalHistory = new Subjects("History", "www.anyuniversity.com/courses/history", "medieval history", "Joanne");
let algorithms = new Subjects("Computer Science", "www.university.com", "algorithms", "Bob");


//displaying everything
console.log("Contact website: "+programming.displayContactWebsite());
console.log(programming.displayInformation());

console.log("Contact website: "+medievalHistory.displayContactWebsite());
console.log(medievalHistory.displayInformation());

console.log("Contact website: "+medievalHistory.displayContactWebsite());
console.log(medievalHistory.displayInformation());
