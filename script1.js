// Calculation Variables
let number1 = '';
let operator = '';
let number2 = '';
let currentTarget = 1;
let decimal = true;
updateScreen(number1, operator, number2);

// Operator Functions
function add (num1, num2) {
  let x = Number(`${num1}`);
  console.log(`x is ${x}`);
  let y = Number(`${num2}`);
  console.log(`y is ${y}`);
  let res1 = x + y;
  console.log(res1);
  return res1;
};

function subtract (num1, num2) {
  let x = Number(num1);
  let y = Number(num2);
  return (x - y);
};

function multiply (num1, num2) {
  let x = Number(num1);
  let y = Number(num2);
  return (x * y);
};

function divide (num1, num2) {
  let x = Number(num1);
  let y = Number(num2);
  if (y === 0) {
    return "Nice Try";
  };
  return (x / y);
};

// Display Functions
function updateScreen (num1, oper, num2) {
  document.querySelector('.screen').textContent = `${num1} ${oper} ${num2}`;
};
function printResult (res) {
  document.querySelector('.screen').textContent = `${res}`;
};

// Button Event Functions
//let buttonOne = document.querySelector('.button');
//buttonOne.addEventListener("mousedown", buttonDown);
//buttonOne.addEventListener("mouseup", buttonReset);
//buttonOne.addEventListener("click", variableUpdate);
//buttonOne.addEventListener("mouseover", buttonHover);
//buttonOne.addEventListener("mouseout", buttonReset);
function buttonDown (event) {
  event.target.style.backgroundColor = 'red';
};
function buttonReset (event) {
  event.target.style.backgroundColor = 'rgb(100 100 100)';
};
function buttonHover (event) {
  event.target.style.backgroundColor = 'rgb(150 150 150)';
};
function variableUpdate (event) {
  if (currentTarget === 1) {
    number1 += event.target.textContent;
    updateScreen(number1, operator, number2);
  } else {
    number2 += event.target.textContent;
    updateScreen(number1, operator, number2);
  };
};
function addDec () {
  decimal = false;
  decimalButton = document.querySelector(".decimal")
  decimalButton.style.color = 'rgb(100 100 100)';
  if (currentTarget === 1) {
    number1 += '.';
    updateScreen(number1, operator, number2);
  } else {
    number2 += '.';
    updateScreen(number1, operator, number2);
  };
};
function subDec () {
  decimal = true;
  decimalButton = document.querySelector(".decimal")
  decimalButton.style.color = '';
};
function selectOperator (event) {
  currentTarget = 2;
  subDec();
  operator = `${event.target.textContent}`;
  updateScreen(number1, operator, number2);
};
function reset () {
  number1 = '';
  number2 = '';
  operator = '';
  currentTarget = 1;
  subDec();
  updateScreen(number1, operator, number2);
};
function operate () {
  if (number2 === '') {
    console.log('Error: second number missing');
  };
  let result;
  switch (operator) {
    case '+':
      result = add(number1, number2);
      console.log("Add");
      break;
    case '-':
      result = subtract(number1, number2);
      break;
    case '*':
      result = multiply(number1, number2);
      break;
    case '/':
      result = divide(number1, number2);
      break;
    default:
      console.log("Error: Switch Operator");
  };
  reset();
  printResult(result);
};

for (let button of document.querySelectorAll('.button')) {
  button.addEventListener("mousedown", buttonDown);
  button.addEventListener("mouseup", buttonReset);
  button.addEventListener("mouseover", buttonHover);
  button.addEventListener("mouseout", buttonReset);
};
for (let button of document.querySelectorAll('.number')) {
  button.addEventListener("click", variableUpdate);
};
for (let button of document.querySelectorAll('.operator')) {
  button.addEventListener("click", selectOperator);
};
document.querySelector(".decimal").addEventListener("click", addDec);
let resetButton = document.querySelector(".clr")
resetButton.addEventListener("click", reset);
resetButton.addEventListener("mousedown", (event) => {event.target.style.backgroundColor = "rgb(250 150 150)";});
resetButton.addEventListener("mouseup", (event) => {event.target.style.backgroundColor = '';});
document.querySelector(".operate").addEventListener("click", operate);