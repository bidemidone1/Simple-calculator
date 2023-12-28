const outcome = document.querySelector("#result");
let num1 = document.getElementById("num1").value;
const num2 = document.querySelector("#num2");

// let a = "5";
// let b = "2";

let a = num1;
let b = 2;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

function add() {
    let result = a + b;
    outcome.innerHTML = result
    console.log(num1);
    // return result;
    // console.log(result);
}

function subtract() {
    let result = a - b;
    console.log(result);
    // return result;
    // console.log(result);
}

function multiply() {
    let result = a * b;
    console.log(result);
    // return result;
    // console.log(result);
}

function divide() {
    let result = a / b;
    console.log(result);
    // return result;
    // console.log(result);
}

function modulus() {
    let result = a % b;
    console.log(result);
    // return result;
    // console.log(result);
}