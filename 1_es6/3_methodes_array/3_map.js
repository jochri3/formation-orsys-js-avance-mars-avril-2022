// 1er cas
const fruits = ["pomme", "mangue", "banane"];

console.log("Avant ES6\n==============");
const fruitsMaj = [];

for (let i = 0; i < fruits.length; i++) {
  fruitsMaj.push(fruits[i].toUpperCase());
}
console.log("Fruit maj : ", fruitsMaj);

const fruitsPluriel = [];
for (let i = 0; i < fruits.length; i++) {
  fruitsPluriel.push(fruits[i] + "s");
}

console.log("Fruits Plur : ", fruitsPluriel);

// 2eme cas
const fruits2 = [
  { id: 1, nom: "Pomme", prixUHT: 1.5 },
  { id: 2, nom: "Mangue", prixUHT: 2.5 },
  { id: 3, nom: "Banane", prixUHT: 3.5 },
];

const fruitsFormatted = [];

for (let i = 0; i < fruits.length; i++) {
  const objFormate = {
    numeroProduit: fruits2[i].id,
    designation: fruits2[i].nom,
  };

  fruitsFormatted.push(objFormate);
}

console.log("Formatted : ", fruitsFormatted);
console.log("\n============================");

console.log("ES6\n==============");

// Utilisation de MAP
// 1 - Créer un tableau en mémoire tab=[]
// 2 - Parcourir le tableau fourni : fruits
// 3 - Retourner une valeur qui sera ensuite ajoutée au tableau crée en mémoire.=>tab.push(fruit.toUpperCase)
const fruitsMaj2 = fruits.map(function (fruit) {
  return fruit.toUpperCase();
});

console.log(fruitsMaj2);

const fruitsPluriel2 = fruits.map(function (fruit) {
  return fruit + "s";
});

console.log(fruitsPluriel2);

const fruitsFormated2 = fruits2.map(function (fruit) {
  return {
    numeroProduit: fruit.id,
    designation: fruit.nom,
  };
});

console.log(fruitsFormated2);

console.log("=======================");
