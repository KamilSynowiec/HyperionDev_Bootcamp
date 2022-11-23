let numbersList=[];
let sum=0;

for(let i=0;i<10;i++){
    numbersList[i]=Number(prompt("Please enter number "+(i+1)));
}

//calculates sum of the numbers in the list
for(const item of numbersList){
    sum+=item;
}

console.log("Total of all the numbers entered: "+sum)
console.log("Index of maximum: "+numbersList.indexOf(Math.max(...numbersList)));  //using spread syntax note the index of last number will be 9 and the first 0
console.log("Index of minimum: "+numbersList.indexOf(Math.min(...numbersList)));
console.log("Average of the numbers rounded to 2 dec places: "+(sum/10).toFixed(2));
numbersList.sort();
console.log("median number: "+(numbersList[5]+numbersList[6])/2);  //takes 2 medium numbers of sorter list and prints their average
