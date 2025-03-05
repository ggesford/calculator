let num1 = 0;
let num2 = 0;
let currnum = '0';
let operator;

const add = (num1,num2) => num1 + num2;
const subtract = (num1,num2) => num1 - num2;
const multiply = (num1,num2) => num1 * num2;
const divide = (num1,num2) => num1 / num2;

const display = document.querySelector("#display");

display.textContent = num1;

const operate = (num1,operator,num2) => {
    switch(operator) {
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2);          
    };
};

const numButton = document.querySelectorAll(".number");

numButton.forEach(button => 
    button.addEventListener('click', (event) => {
        if (display.textContent === '0' || currnum === '0') {
            display.textContent = event.target.textContent;
            currnum = display.textContent;
        } else if (display.textContent.length === 10) {
            return;
        } else {
            display.textContent += event.target.textContent;  
            currnum = display.textContent;  
        };
    })
);

const opButton = document.querySelectorAll(".operator");

opButton.forEach(button =>
    button.addEventListener('click' , (event) => {
        switch(event.target.textContent) {
            case "+":
                operator = "+";
                break;
            case "-":
                operator = "-";
                break;
            case "×":
                operator = "*";
                break;
            case "÷":
                operator = "/";
                break;
        }
        num1 = parseFloat(currnum);
        currnum = '0';
    })
);

const eqButton = document.querySelector("#equals");

eqButton.addEventListener('click', () => {
    num2 = parseFloat(currnum);
    let result = operate(num1, operator,num2);
    console.log(result);
    if(result.toString().length > 10 && result > 9999999999) {
        result = result.toExponential(4);
    } else if(result.toString().length > 10) {
        result = parseFloat(result.toPrecision(9)).toFixed(8).toString();
    
    };
    console.log(result);
    display.textContent = result;
    num1 = result;
    currnum = result;
});

const clearButton = document.querySelector("#clear");

clearButton.addEventListener('click', () => {
    num1 = 0;
    num2 = 0;
    currnum = '0';
    display.textContent = '0';
});


        


