let num1 = 0;
let num2 = 0;
let currnum = "0";
let operator;

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const display = document.querySelector("#display");

display.textContent = num1;

const operate = (num1, operator, num2) => {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
};

const numButton = document.querySelectorAll(".number");

numButton.forEach((button) =>
  button.addEventListener("click", (event) => {
    if (display.textContent === "0" || currnum === "0") {
      display.textContent = event.target.textContent;
      currnum = display.textContent;
    } else if (display.textContent.length === 10) {
      return;
    } else {
      display.textContent += event.target.textContent;
      currnum = display.textContent;
    }
  })
);

const decButton = document.querySelector("#decimal");

decButton.addEventListener("click", () => {
  if (display.textContent === "0" || currnum === "0") {
    display.textContent = "0.";
    currnum = display.textContent;
  } else if (
    display.textContent.includes(".") ||
    display.textContent.length === 10
  ) {
    return;
  } else {
    display.textContent += decButton.textContent;
    currnum = display.textContent;
  }
});

const opButton = document.querySelectorAll(".operator");

opButton.forEach((button) =>
  button.addEventListener("click", (event) => {
    switch (event.target.textContent) {
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
    currnum = "0";
  })
);

const eqButton = document.querySelector("#equals");

eqButton.addEventListener("click", () => {
  num2 = parseFloat(currnum);
  let result = operate(num1, operator, num2);
  console.log(result);
  if (result.toString().length > 10 && result > 9999999999) {
    result = result.toExponential(3);
  } else if (result.toString().length > 10) {
    result = parseFloat(parseFloat(result.toPrecision(9)).toFixed(8));
  }
  console.log(result);
  display.textContent = result;
  num1 = result;
  currnum = result;
});

const clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", () => {
  num1 = 0;
  num2 = 0;
  currnum = "0";
  display.textContent = "0";
});

const backButton = document.querySelector("#back");

backButton.addEventListener("click", () => {
  if (display.textContent.length === 1 || display.textContent.includes("0.")) {
    display.textContent = "0";
    currnum = display.textContent;
  } else {
    currnum = String(currnum.slice(0, currnum.length - 1));
    display.textContent = currnum;
  }
});

document.addEventListener("keypress", (event) => {
  console.log(event.key);
  if ("1234567890.".includes(event.key)) {
    if (display.textContent === "0" || currnum === "0") {
      display.textContent = event.key;
      currnum = display.textContent;
    } else if (display.textContent.length === 10) {
      return;
    } else {
      display.textContent += event.key;
      currnum = display.textContent;
    }
  } else if ("/*-+".includes(event.key)) {
    operator = event.key;
    num1 = parseFloat(currnum);
    currnum = "0";
  } else if (".".includes(event.key)) {
    if (display.textContent === "0" || currnum === "0") {
      display.textContent = "0.";
      currnum = display.textContent;
    } else if (display.textContent.includes(".")) {
      return;
    } else {
      display.textContent += decButton.textContent;
      currnum = display.textContent;
    }
  } else if ("Enter".includes(event.key)) {
    num2 = parseFloat(currnum);
    let result = operate(num1, operator, num2);
    console.log(result);
    if (result.toString().length > 10 && result > 9999999999) {
      result = result.toExponential(4);
    } else if (result.toString().length > 10) {
      result = parseFloat(parseFloat(result.toPrecision(9)).toFixed(8));
    }
    console.log(result);
    display.textContent = result;
    num1 = result;
    currnum = result;
  }
});
