// Constat 1
for (let i = 0; i < 10; i++) {
  console.log("Dans la boucle : ", i);
}

console.log("En dehors de la boucle : ", i);

// constat 2
console.log("Avant déclaration : ", age);
var age = 30;
console.log("Après déclaration : ", age);
const nom = "Xavier";
if (true) {
  //   let nom = "Jean-Paul";
  console.log("Dans IF : ", nom);
}

console.log("En dehors de IF : ", nom);

const fruits = ["pommes", "oranges", "ananas"];
const fruits2 = fruits; //affectation de la ref
const fruits3 = [...fruits]; //Création d'un nouveau tableau à partir de fruits
