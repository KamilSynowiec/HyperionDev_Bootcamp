//user inputs
let sideOne=prompt("Please tell me first side: ");
let angleOne=prompt("Please tell me first angle: ");
let sideTwo=prompt("Please tell me second side: ");
let angleTwo=prompt("Please tell me second angle: ");
let sideThree=prompt("Please tell me third side: ");
let angleThree=prompt("Please tell me third angle: ");
let sideFour=prompt("Please tell me fourth side: ");
let angleFour=prompt("Please tell me fourth angle: ");

//These are different conditions that when combined can describe desired quadrilateral 
let equalSides=((sideOne==sideTwo)&&(sideOne==sideThree)&&(sideOne==sideFour));
let equalAngles=(angleOne==90&&angleThree==90&&angleTwo==90&&angleFour==90);
let oppositeSidesEqual=((sideOne==sideThree)&&(sideTwo==sideFour));
let oppositeAnglesEqual=((angleOne==angleThree)&&(angleTwo==angleFour));


/*there are 2 variables to check for correect angles for parralelogram because there are 2 different ways in which opposite 
angles have the same values */
let parallelogramAngles=(((angleOne<90)&&(angleThree<90))&&((angleTwo>90)&&(angleFour>90)));
let parallelogramAnglesOpposite=(((angleOne>90)&&(angleThree>90))&&((angleTwo<90)&&(angleFour<90)));

switch(true){    //I am matching "true" boolean to the conditions specified in the variables so the process looks clearer 
    case equalSides&&equalAngles:
        console.log("square");
        break;
    case oppositeSidesEqual&&equalAngles:
        console.log("Rectangle");
        break;
    case equalSides&&oppositeAnglesEqual:
        console.log("Rhombus");
        break;
    case oppositeSidesEqual&&(oppositeAnglesEqual&&(parralelogramAngles||parallelogramAnglesOpposite)):
        console.log("Parallelogram");
        break;
    default:
        console.log("Based on this input you cannot create any of these quadrilaterals");
        break;
}
