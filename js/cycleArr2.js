const numbers = [46, 1, 4, 78, 9, 5, 1, 4, 5, 5];
const numTest = [1, 2, 3];
// indeksai:   0   1  2   3  4  5  6  7  8  9

// atspausdinti visu masyvo nariu suma const numTest = [1, 2, 3];
/*  
0. susikurti kitnamaji kuris saugos bendra suma
1. paimti pirma reiksme 
2. sudeti ja su antra
3. deti reikmes toliau kol yra reiksmiu 
*/

let total = 0;
// ciklas
// total += numTest[0];
// total += numTest[1];
// total += numTest[2];
for (let i = 0; i < numTest.length; i++) {
  total += numTest[i];
}
console.log('total ===', total);

let totalNumbers = 0;
for (let i = 0; i < numbers.length; i++) {
  totalNumbers += numbers[i];
}

// po ciklo
console.log('totalNumbers ===', totalNumbers);

////////// funcijos varijantas

function printTotal(array) {
  let totalNumbers = 0;
  for (let i = 0; i < array.length; i++) {
    totalNumbers += array[i];
  }
  // po ciklo
  console.log('the sum of array is ===', totalNumbers);
}

printTotal(numTest);
printTotal(numbers);
