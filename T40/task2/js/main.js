function Income(name, amount, recurring){ //this is constructor of income objects
    this.name=name;
    this.amount=amount;
    this.recurring=recurring;

};

function Expense(name, amount, recurring){ //this is constructor of expense objects
    this.name=name;
    this.amount=amount;
    this.recurring=recurring;
}

let incomeArray=[];  //arrays holding income and expense objects
let expensesArray=[];

let salary=new Income("salary", 2000, 1);  //creating income objects
let streaming=new Income("streaming", 400, 0);
let investment=new Income("investment", 500, 0);
let flatRent=new Income("flat rent", 1300, 1);
let eventWork=new Income("event work", 200, 0);

incomeArray.push(salary);  //pushing objects to array
incomeArray.push(streaming);
incomeArray.push(investment);
incomeArray.push(flatRent);
incomeArray.push(eventWork);

let mortgage=new Expense("mortgage", 1400, 1);  //creating expense objects
let bills=new Expense("bills", 200, 1);
let fuel=new Expense("fuel", 150, 1);
let food=new Expense("food", 100, 1);
let gifts=new Expense("gifts", 50, 0);

expensesArray.push(mortgage); //pushing objects to array
expensesArray.push(bills);
expensesArray.push(fuel);
expensesArray.push(food);
expensesArray.push(gifts);

//asking user for additional income
let inputIncomeSource=prompt("Please see your incomes in the console."+ " Please add another income by telling me first source: ");
let inputIncomeAmount=parseInt(prompt("Please tell me the amount received: "));
let inputIncomeRecurring=prompt("Please tell me if the income is recurring by typing 1 is yes and 0 if no");

//creating another object from the user inputs and pushing it to the income array
let anotherIncome=new Income(inputIncomeSource, inputIncomeAmount, inputIncomeRecurring);
incomeArray.push(anotherIncome);   

//adding the array into sessionStorage
sessionStorage.setItem("incomeArray",JSON.stringify(incomeArray));


//asking user for additional expense
let inputExpenseSource=prompt("Please see your expenses in the console."+" Please add another expense by telling me the name: ");
let inputExpenseAmount=parseInt(prompt("Please tell me the amount spend: "));
let inputExpenseRecurring=prompt("Please tell me if the expense is recurring by typing 1 is yes and 0 if no");

//creating another object from the user inputs and pushing it to the income array
let anotherExpense=new Expense(inputExpenseSource, inputExpenseAmount, inputExpenseRecurring);
expensesArray.push(anotherExpense);

//adding the array into sessionStorage
sessionStorage.setItem("expensesArray", JSON.stringify(expensesArray));

//getting arrays from sessionStorage
let incomes=JSON.parse(sessionStorage.getItem("incomeArray"));
let expenses=JSON.parse(sessionStorage.getItem("expensesArray"));

let totalIncome=0;
let totalExpenses=0;

//adding up total incomes
for(let i=0;i<incomes.length;i++){
    totalIncome=totalIncome+incomes[i].amount;
}

//adding up total expenses
for(let j=0;j<expenses.length;j++){
    totalExpenses=totalExpenses+expenses[j].amount;
}

let disposableIncome=totalIncome-totalExpenses; 

console.log("your disposable income is: "+disposableIncome);  

//asking user how much of his disposable income he wants to save
let amountToSavings=parseInt(prompt("how much of your disposable income would you like to put into savings? "));

let disposableLeft=disposableIncome-amountToSavings;

alert("The amount of disposable income left is: "+disposableLeft);  //displaying alert


