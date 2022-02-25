'use strict';
// index        0        1         2        3
const pav = ['apple', 'sister', 'hammer', 'sun', 'moon', 'stars'];
console.log('pav orginalas ===', pav);

// atspausdinti visus pav elementus
// console.log(pav[0]);
// console.log(pav[1]);
// console.log(pav[2]);
// console.log(pav[3]);

// parasom for cikla kuris atspausdina consolej skaicius nuo 0 iki 3 imtinai
const pavMasyvoIlgis = pav.length;
for (let i = 0; i < pavMasyvoIlgis; i++) {
  console.log(pav[i]);
}

// perrasyti reiksme
// pav[1] = 'brother';
// console.log('pav after ===', pav);

//
// let ketvirtas = pav[1 + 2];
// let idx = 3;
// ketvirtas = pav[idx];
// console.log('ketvirtas ===', ketvirtas);

// kiek yra masyvo ilgis
// const pavMasyvoIlgis = pav.length;
// console.log('pavMasyvoIlgis ===', pavMasyvoIlgis);

// atspausdinti paskutini nari bet kokio ilgio masyve?
// const lastPavNarys = pav[pavMasyvoIlgis - 1];
// console.log('lastPavNarys ===', lastPavNarys);
