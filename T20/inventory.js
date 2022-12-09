class Shoes{
    constructor(Name, ProductCode, Quantity, ValuePerItem){
        this.Name=Name;
        this.ProductCode=ProductCode;
        this.Quantity=Quantity;
        this.ValuePerItem=ValuePerItem;
    }
}

const ecoShoes =[];

//objects with     Name,    Product Code,    Quantity     and    Value per item
let Nisolo = new Shoes("Nisolo", "000000000000", 100, 221);
let Veja = new Shoes("Veja", "000000000001", 81, 77);
let Cariuma = new Shoes("Cariuma", "000000000002", 500, 169);
let Allbirds = new Shoes("Allbirds", "000000000003", 20, 99);
let TOMS = new Shoes("TOMS", "000000000004", 50, 200);

ecoShoes.push(Nisolo, Veja, Cariuma, Allbirds, TOMS);


//this function searches for any shoe taking name as a input
//example input:  shoeSearch("Veja") 
function shoeSearch(name) 
{
    for(let i=0;i<ecoShoes.length;i++)
    {
        
        if(ecoShoes[i].Name==name){
            console.log("The following shoe has been found with the name: "+name);
            return(ecoShoes[i]);
        }
    }
}

//this function finds shoe with the lowest value
function lowestValueShoe() 
{
    let lowestValuedShoe=ecoShoes[0];


    for(let i=0;i<ecoShoes.length;i++)
    {

        if(ecoShoes[i].ValuePerItem<lowestValuedShoe.ValuePerItem)
        {
            lowestValuedShoe=ecoShoes[i];
        }
    }

    console.log("The following object has the lowest value per item: ");
    console.log(lowestValuedShoe)

}
//this function finds shoe with the highest value
function highestValueShoe() 
{
    let highestValuedShoe=ecoShoes[0];


    for(let i=0;i<ecoShoes.length;i++)
    {

        if(ecoShoes[i].ValuePerItem>highestValuedShoe.ValuePerItem)
        {
            highestValuedShoe=ecoShoes[i];
        }
    }

    console.log("The following object has the highest value per item: ");
    console.log(highestValuedShoe);

}

//this function allows to edit any aspect of an instance of a class
//example input:  editShoe("TOMS", "Quantity", 500)
function editShoe(name, aspectToEdit, valueToEdit) 
{
    let shoeObject=shoeSearch(name);
    shoeObject[aspectToEdit]=valueToEdit;

    console.log("The following object has been edited. Please have a look at the final effect: ");
    console.log(shoeObject);

}

//this function allows to order objects in ascending order by ther names
function orderObjects()
{
    ecoShoes.sort(function(a,b)
    {
        if(a.Name<b.Name)
        {
            return -1;
        }
        if(a.Name>b.Name)
        {
            return 1;
        }
        return 0;
    });


    console.log("The following Objects have been ordered by their names in ascending order: ");
    console.log(ecoShoes);
}

//console.log(shoeSearch("TOMS"));
//console.log(editShoe("TOMS", "Quantity", 500));
//console.log(lowestValueShoe());
