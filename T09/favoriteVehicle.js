/*this program loops trough the vehicles array and determines which of the vehicles is my favourite */
let vehicles=["Bugatti", "Pagani", "Lamborghini","Bentley", "Ferrari"];
let favouriteVehicle="Bugatti";

for(let i=0; i<5; i++){
    if(vehicles[i]==favouriteVehicle){
        console.log("The "+vehicles[i]+" is my favourite vehicle");
    }else{
        console.log("The "+vehicles[i]+" is not my favourite vehicle");
    }
    
}
