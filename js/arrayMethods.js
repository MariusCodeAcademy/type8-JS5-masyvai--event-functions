'use strict';
// masyvu metodai

const colors = ['green', 'blue', 'red'];
console.log('colors ===', colors);

// array.push() - prideti reiksme i masyvo gala (modifikuojantis orginala)

colors.push('yellow');
// colors.push('yellow', 'brown');
// colors.push('brown');

console.log('colors po push ===', colors);

// array.unshift('nauja reiksme') - pridti reiksme i masyvo pradzia (modifikuojantis orginala)

colors.unshift('violet');
console.log('colors po unshift ===', colors);

// array.shift() - nutrinam pirma el (modifikuojantis orginala)
// attay.pop() - nutrinam paskutini elementa

const firstColor = colors.shift(); // paimam violet
console.log('firstColor ===', firstColor);
console.log('colors po shift ===', colors);

// array.slice(start, finish)
// const redYelloArr = colors.slice(2, 4);
const redYelloArr = colors.slice(-1);
console.log('redYelloArr ===', redYelloArr);
console.log('colors po slice ===', colors);
