// Calculation Variables
let number1 = '';
let operator = '';
let number2 = '';
updateScreen(number1, operator, number2);

// Operator Functions
function add (num1, num2) {
  return (num1 + num2);
};

function subtract (num1, num2) {
  return (num1 - num2);
};

function multiply (num1, num2) {
  return (num1 * num2);
};

function divide (num1, num2) {
  return (num1 / num2);
};

// Display Functions
function updateScreen (num1, oper, num2) {
  document.querySelector('.screen').textContent = `${num1} ${oper} ${num2}`;
};

// Button Event Functions
let buttonOne = document.querySelector('.button');
buttonOne.addEventListener("mousedown", buttonDown);
buttonOne.addEventListener("mouseup", buttonUp);

function buttonDown (event) {
  event.target.style.backgroundColor = 'red';
};
function buttonUp (event) {
  event.target.style.backgroundColor = 'rgb(100 100 100)';
};