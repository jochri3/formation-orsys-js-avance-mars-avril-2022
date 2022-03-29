const fruits = ["pommes", "mangues", "bananes"];

for (let fruit of fruits) {
  console.log(fruit);
}

// Tableau d'objets
const fruits2 = [
  { id: 1, nom: "Pomme", prixUHT: 1.5 },
  { id: 2, nom: "Mangue", prixUHT: 2.5 },
  { id: 3, nom: "Banane", prixUHT: 3.5 },
];

for (let fruit of fruits2) {
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
}
