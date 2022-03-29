const fruits = ["pommes", "mangues", "bananes", "papay"];

console.log("Avant ES6\n==============");

const filtered = [];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i].startsWith("p")) {
    filtered.push(fruits[i]);
  }
}
console.log("Filtered : ", filtered);

console.log("ES6\n==============");

const filteredES6 = fruits.filter(function (fruit) {
  return fruit.startsWith("p");
});
console.log("Filtered ES6 : ", filteredES6);

// map et filter

const fruits2 = [
  { id: 1, nom: "Pomme", prixUHT: 1.5 },
  { id: 2, nom: "Mangue", prixUHT: 2.5 },
  { id: 3, nom: "Banane", prixUHT: 3.5 },
];

const fruitsFormated2 = fruits2
  .map(function (fruit) {
    return {
      numeroProduit: fruit.id,
      designation: fruit.nom,
      prixUHT: fruit.prixUHT,
    };
  })
  .filter(function (fruit) {
    return fruit.prixUHT > 1.5;
  });

console.log(fruitsFormated2);
