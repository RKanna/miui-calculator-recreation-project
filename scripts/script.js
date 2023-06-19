"use strict";
let calcInput1 = document.getElementById(`calculation`);
let calcInput2 = document.getElementById(`calculation2`);
let symbolCalc = document.getElementById(`symbol`);
let calcResult = document.getElementById(`result`);

//buttons

let buttonNumberOne = document.getElementById(`btnOne`);

let numOne = 1;
let numTwo = 2;
let numThree = 3;
let numFour = 4;
let numFive = 5;
let numSix = 6;
let numSeven = 7;
let numEight = 8;
let numNine = 9;
let numZero = 0;
let arg1;
let arg2;
let multiDigits;
let multiDigits2;
// function buttonClick(arg1) {
//   document.getElementById(`calculation`).textContent = `${arg1}`;
// }
// function buttonClick(arg1) {
//   let multiDigits = document.getElementById("calculation").textContent;
//   document.getElementById("calculation").textContent = multiDigits + arg1;
// }
function eraseEverything() {
  document.getElementById(`calculation`).textContent = `0`;
  document.getElementById(`changeAlpha`).textContent = `AC`;
}
function buttonClick(arg1) {
  document.getElementById(`changeAlpha`).textContent = `AC`;
  multiDigits = document.getElementById("calculation").textContent;
  if (multiDigits === "0") {
    document.getElementById("calculation").textContent = arg1;
  } else {
    document.getElementById("calculation").textContent = multiDigits + arg1;
  }
  console.log(multiDigits);
}
function buttonClick(arg1) {
  document.getElementById("changeAlpha").textContent = "C";
  let multiDigits = document.getElementById("calculation").textContent; // Declare multiDigits as a local variable
  if (multiDigits === "0") {
    document.getElementById("calculation").textContent = arg1;
    multiDigits = arg1; // Update multiDigits with the clicked number
  } else {
    document.getElementById("calculation").textContent = Number(
      multiDigits + arg1
    );
    multiDigits += arg1; // Update multiDigits by concatenating the clicked number
  }
  console.log(multiDigits);
}

function buttonClick(arg2) {
  document.getElementById("changeAlpha").textContent = "C";
  let multiDigits2 = document.getElementById("calculation2").textContent; // Declare multiDigits as a local variable
  if (multiDigits2 === "0") {
    document.getElementById("calculation2").textContent = arg2;
    multiDigits2 = arg2; // Update multiDigits with the clicked number
  } else {
    document.getElementById("calculation2").textContent = Number(
      multiDigits2 + arg2
    );
    multiDigits2 += arg2; // Update multiDigits by concatenating the clicked number
  }
  console.log(multiDigits2);
}

function additionValue(multiDigits, multiDigits2) {
  buttonClick(arg1);
  buttonClick(arg2);
  document.getElementById(`symbol`).textContent = `+`;
  document.getElementById(
    "calculation"
  ).textContent = `${multiDigits} + ${multiDigits2}`;
  let addValue = multiDigits + multiDigits2;
  return addValue;
}
