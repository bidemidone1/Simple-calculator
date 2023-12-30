const outcome = document.querySelector("#result");
const num1 = document.getElementById("num1");
const num2 = document.querySelector("#num2");

// let a = "5";
// let b = "2";

// let a = 5;
// let b = 2;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

function add() {
    let result = parseInt(num1.value) + parseInt(num2.value);
    outcome.innerHTML = result;
    console.log(result);
}

function subtract() {
    let result = parseInt(num1.value) - parseInt(num2.value);
    outcome.innerHTML = result;
    console.log(result);
}

function multiply() {
    let result = parseInt(num1.value) * parseInt(num2.value);
    outcome.innerHTML = result;
    console.log(result);
}

function divide() {
    let result = parseInt(num1.value) / parseInt(num2.value);
    outcome.innerHTML = result;
    console.log(result);
}

function modulus() {
    let result = parseInt(num1.value) % parseInt(num2.value);
    outcome.innerHTML = result;
    console.log(result);
}