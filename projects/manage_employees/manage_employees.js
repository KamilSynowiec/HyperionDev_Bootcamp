class Employees{
    constructor(name, salesTarget, salesAchieved)
    {
        this.name=name;
        this.salesTarget=salesTarget;
        this.salesAchieved=salesAchieved;
    }
}

class SalariedEmployee extends Employees{
    constructor(name, salesTarget, salesAchieved)
    {
        super(name, salesTarget, salesAchieved);
        this.employeeType="Salaried Employee";
    }

    calculateSalary()
    {
        if(this.salesAchieved>this.salesTarget)
        {
            return "$"+(2000*1.1);
        }else{
            return "$"+2000;
        }
    }
}

class HourlyEmployee extends Employees{
    constructor(name, salesTarget, salesAchieved, hoursWorked)
    {
        super(name, salesTarget, salesAchieved);
        this.hoursWorked=hoursWorked;
        this.employeeType="HourlyEmployee";
    }

    calculateSalary()
    {
        if(this.salesAchieved>this.salesTarget)
        {
            return "$"+(this.hoursWorked*1.5*12);  //12 is hourly rate
        }else{
            return "$"+(this.hoursWorked*12);
        }
    }
}

class HybridEmployee extends Employees{
    constructor(name, salesTarget, salesAchieved, extraHours)
    {
        super(name, salesTarget, salesAchieved);
        this.extraHours=extraHours;
        this.employeeType="HybridEmployee";
    }

    calculateSalary()
    {
        if(this.salesAchieved>this.salesTarget){
            return "$"+(1800+(this.extraHours*1.2*15));  //15 is hourly rate
        }else{
            return "$"+1800+(this.extraHours*15);
        }
    }
}

let Kevin = new SalariedEmployee("Kevin", 400, 400);
let Patrick = new SalariedEmployee("Patrick", 400, 450);

let Ann = new HourlyEmployee("Ann", 400,700, 160);
let Nick = new HourlyEmployee("Nick", 400, 100, 100);

let Bob = new HybridEmployee("Bob", 400, 500, 10);
let Matthew = new HybridEmployee("Matthew", 400, 420, 0);


console.log("name: "+Kevin.name);
console.log("employee type: "+Kevin.employeeType);
console.log("The payout for Kevin is: "+Kevin.calculateSalary());
console.log("name: "+Patrick.name);
console.log("employee type: "+Patrick.employeeType);
console.log("The payout for Patrick is: "+Patrick.calculateSalary());

console.log("name: "+Ann.name);
console.log("employee type: "+Ann.employeeType);
console.log("The payout for Ann is: "+Ann.calculateSalary());
console.log("name: "+Nick.name);
console.log("employee type: "+Nick.employeeType);
console.log("The payout for Nick is: "+Nick.calculateSalary());

console.log("name: "+Bob.name);
console.log("employee type: "+Bob.employeeType);
console.log("The payout for Bob is: "+Bob.calculateSalary());
console.log("name: "+Matthew.name);
console.log("employee type: "+Matthew.employeeType);
console.log("The payout for Matthew is: "+Matthew.calculateSalary());
