const add = (num1,num2) => num1 + num2;
const subtract = (num1,num2) => num1 - num2;
const multiply = (num1,num2) => num1 * num2;
const divide = (num1,num2) => num1 / num2;
const operate = (num1,operator,num2) => 
    {switch(operator) {
        case "+":
            display.textContent = add(num1,num2);
            num1 = display.textContent;
            break;
        case "-":
            display.textContent = subtract(num1,num2);
            num1 = display.textContent;
            break;

            break;
        case "*":
            display.textContent = multiply(num1,num2);
            num1 = display.textContent;
            break;
        case "/":
            display.textContent = divide(num1,num2);
            num1 = display.textContent;
            break;          
    }};


let num1 = '0';
let num2 = '0';
let operator;
const display = document.querySelector("#display");

display.textContent = num1;

const numButton = document.querySelectorAll(".number");

numButton.forEach(button => 
    button.addEventListener('click', (event) => 
        {if (display.textContent === '0') {
            display.textContent = event.target.textContent;
        } else if (display.textContent.length === 10) {
            display.textContent;
        } else {
            display.textContent += event.target.textContent    
        }}));
        


