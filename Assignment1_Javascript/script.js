'use strict';

/*------------------------------------------------------------------------------------------------------------------------------*/
// Selecting Elements with DOM

const btnCalc = document.querySelector('#calc');

const containerCalc = document.querySelector('#calc');
const containerResult = document.querySelector('#result');

/*------------------------------------------------------------------------------------------------------------------------------*/
// Functions

const displayAns = (res) => { 
    containerResult.textContent = res; 
}

const clearFields = () => {
    document.querySelector('#num1').value = '';
    document.querySelector('#num2').value = '';
}

const addition = (a, b) => `${a} + ${b} = ${a + b}`;    

const subtraction = (a, b) => `${a} - ${b} = ${a - b}`;

const multiplication = (a, b) => `${a} * ${b} = ${a * b}`;    

const division = (a, b) => `${a} / ${b} = ${a / b}`;
    
/*------------------------------------------------------------------------------------------------------------------------------*/
// Calculate Function

const calculate = () => {
    try {
        let inputFirst = document.querySelector('#num1').value;
        let inputSecond = document.querySelector('#num2').value;
        const inputOperator = document.querySelector('#operator').value;

        if(!inputFirst || isNaN(inputFirst)) throw new Error("Invalid First Input!");
        if(!inputSecond || isNaN(inputSecond)) throw new Error("Invalid Second Input!");
        
        inputFirst= Number(inputFirst);
        inputSecond= Number(inputSecond);

        let res;

        switch (inputOperator) {
            case "+":
                res = addition(inputFirst, inputSecond);
                break;
            case "-":
                res = subtraction(inputFirst, inputSecond);
                break;
            case "*":
                res = multiplication(inputFirst, inputSecond);
                break;
            case "/":
                
                if(inputSecond===0){
                    throw new Error("Cannot divide by ZERO!");
                }
                else{
                    res = division(inputFirst, inputSecond);
                }
                break;
            default:
                displayAns("Select one operator");
        }
    
        displayAns(res);
        clearFields();

    } catch (err) {
        console.log(`${err}`);
        displayAns(`${err.message}`);
    }
    
};

/*------------------------------------------------------------------------------------------------------------------------------*/
// Event Listeners

// Click event
btnCalc.addEventListener('click', calculate);

// Enter key event
document.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        calculate();
    }
});