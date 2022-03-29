
// Big O / O
// Taille n
//O(n)
const fruits = ["pommes", "mangues", "bananes"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// forEach

fruits.forEach(function (fruit /*, index, arr*/) {
  console.log(fruit);
  // console.log(`${index} => ${fruit}`);
  //   console.log(arr);
});

// Tableau d'objets
const fruits2 = [
  { id: 1, nom: "Pomme", prixUHT: 1.5 },
  { id: 2, nom: "Mangue", prixUHT: 2.5 },
  { id: 3, nom: "Banane", prixUHT: 3.5 },
];

fruits2.forEach(function (fruit) {
  /**
   *  id : 1
   *  nom : "Jean"
   * prixUHT : 3.5€
   */
  //   console.log(fruit); Afficher tout l'objet
  console.log(`Id : ${fruit.id}`);
  console.log(`Nom : ${fruit.nom}`);
  console.log(`Prix UHT : ${fruit.prixUHT}€`);
  console.log("\n");
});
