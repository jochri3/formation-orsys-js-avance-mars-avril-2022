// 1er cas
const somme = (a, b) => a + b;

const somme2 = (...nombres) => {
  return nombres.reduce((somme, nombre) => somme + nombre, 0);
};

console.log(somme2(2, 5));

// 2eme cas

const afficherMesTitresAcademiques = (nom, ...titre) => {
  console.log("Nom : ", nom);
  console.log("Titres\n========");
  titre.forEach((titre) => {
    console.log(`- ${titre}`);
  });
};

afficherMesTitresAcademiques(
  "Christian Lisangola",
  "Docteur en Blbalba",
  "Professeur en Maths",
  "Chercheur ensdhfsdhfdjk"
);

// 3eme
const afficherConfigMaterielle = (ordinateur, ...config) => {
  console.log(ordinateur);
  config.forEach((config) => console.log(`--${config}`));
};

afficherConfigMaterielle(
  "Macbook Pro 16 2021",
  "RAM : 16 GB",
  "SSD : 1Tb",
  "Couleur : Grise"
);
