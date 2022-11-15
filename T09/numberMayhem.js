let x=20;

//This while loop counts down from 20 to 0
while(x>=0){
    console.log(x);
    x--;
}

console.log("_____________________");


//this for loop displays even numbers from 1 to 20
for(let i=0; i<=20; i++){
    if(i%2==0){
        console.log(i);
    }
}
console.log("_____________________");
/*This nester for loops display * in 5 rows, starting from 1 star * and increamenting by 1* in each row up to *****   */
let oneRow="";

for(let i=1; i<=5; i++){
    for(let j=0; j<i; j++){
        oneRow=oneRow+"*";
    }
    console.log(oneRow);
    oneRow="";
}
