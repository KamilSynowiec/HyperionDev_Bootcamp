// Define arrays
const rowWin = [
    ["O", "O", "O"],
    ["", "", ""],
    ["", "", ""]
]

const colWin = [
    ["", "X", ""],
    ["", "X", ""],
    ["", "X", ""]
]

const diagonalWin = [
    ["", "", "O"],
    ["", "O", ""],
    ["O", "", ""]
]

const diagonalWinInverse = [
    ["X", "", ""],
    ["", "X", ""],
    ["", "", "X"]
]

console.log(evaluatePlay(colWin));


// this function, evaluates weather a there was a winner and displays which user has won the game and which one lost


function evaluatePlay(grid)
{

    //this method is checking if there is a winner in columns, rows or diagonal lines by using the methods to check it

    let isWinning;  

    isWinning=evaluateColumns(grid);    
    if(isWinning=="N")   //if no winner in columns then check further
    {
        isWinning=evaluateRows(grid);   

        if(isWinning=="N")  //if no winner in rows then check further
        { 
            isWinning=evaluateDiagonal(grid);
        }
    }

    if(isWinning=="N")
    {     
        return "there is no winner";
    }else if(isWinning=="O")
    {
        return "O won \n X lost";
    }else
    {
        return "X won \n O lost";
    }
    
}


function evaluateColumns(grid)
{

    let winner="N";    //if there is no winner found then the function will return this variable unchanged 

    for(let col=0; col<3; col++) //comparing each of the 3 rows with each other in each column
    {   
        if(grid[0][col]==grid[1][col]&&grid[0][col]==grid[2][col]){
            winner=grid[0][col];
            break;
        }
    }

    return winner;
}


function evaluateRows(grid){ 
    let winner="N";     
    
    for(let row=0; row<3; row++)  //comparing each of the 3 columns with each other in each row
    {  
        if(grid[row][0]==grid[row][1]&&grid[row][0]==grid[row][2]){
            winner=grid[row][0];
            break;
        }
    }

    return winner;
}


function evaluateDiagonal(grid)
{
    let winner="N";

    if(grid[0][0]==grid[1][1]&&grid[0][0]==grid[2][2])    //comparing the values in 2 diagonal lines
    {
        winner=grid[0][0];

    }else if(grid[2][0]==grid[1][1]&&grid[2][0]==grid[0][2])
    {
        winner=grid[2][0];
    }
    
    return winner;
}
