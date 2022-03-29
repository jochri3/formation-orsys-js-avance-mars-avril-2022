//1er cas
const numbers = [1, 2, 3, 4, 5, 6, 7];

let somme = 0;

numbers.forEach(function (number) {
  somme += number;
});

console.log("Somme sans reduce : ", somme);

const sommeAvecReduce = numbers.reduce(function (accumulateur, number) {
  return accumulateur + number;
}, 0);

console.log("Somme avec reduce : ", sommeAvecReduce);

// 2eme cas

const fruits = ["pomme", "mangue", "orange", "goyave", "mandarine"];

const fruitsAuPluriel = fruits.reduce(function (accumulateur, fruit) {
  accumulateur.push(fruit + "s");
  return accumulateur;
}, []);

console.log("Fruit pluriel : ", fruitsAuPluriel);

const fruitsAvecM = fruits.reduce(function (accumulateur, fruit) {
  if (fruit.includes("m")) {
    accumulateur.push(fruit);
  }
  return accumulateur;
}, []);

console.log("Fruit avec M : ", fruitsAvecM);
