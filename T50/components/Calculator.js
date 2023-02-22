//calculator for interests loan for shopping
function Calculator(){
    let input=0;
    let months=0;
    let result=0;


function calculate(){
    input=parseInt(prompt("Enter total shopping value: "));
    months=parseInt(prompt("Enter number of months to calculate: "));
    result=input+(input*0.2*months/12);

    return (result/months);
}

    return(
        <div>
            <h2>Interest calculator</h2>
            <h3>Current interest rate is 20%</h3>
            <p>"your monthly repayment:</p>  {/*assumes 20% interest rate */}
            {calculate()}
            
        </div>
    );
}

export default Calculator;