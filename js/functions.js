'use strict';
let a = 10;
let b = 5;
let x = 11;
let y = 7;

// let sum = a + b;
// let daug = a * 2 + b * 2;
// let visasuma = sum + daug;
// console.log('visasuma ===', visasuma);

// sum = x + y;
// daug = x * 2 + y * 2;
// visasuma = sum + daug;
// console.log('visasuma ===', visasuma);

// sukuriam funkcija

// function pavadinimas(argumetai) {
function sumDaug(num1, num2) {
  // function body
  let sum = num1 + num2;
  let daug = num1 * 2 + num2 * 2;
  let visasuma = sum + daug;
  console.log('visasuma ===', visasuma);
}

// funkcijos iskvietimas vygdomas su ()
sumDaug(a, b);
sumDaug(x, y);
sumDaug(20, 30);
sumDaug(2, 3);
