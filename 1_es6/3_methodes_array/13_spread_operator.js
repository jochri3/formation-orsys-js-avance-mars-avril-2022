const fruits = ["pommes", "mangues", "ananas"];
const fruits2 = fruits;

const fruits3 = [...fruits]; //"pommes","mangues","ananas"
const fruit4 = ["mandarine", ...fruits];

//rest : des valeurs individuelles => tableau/objet
// spread : un objet/tableau => eclater en des valeurs individuelles

const bresilienRealMadrid = ["Ronaldo", "Roberto Carlos", "Flavio Concecao"];
const bresilienFCBarcelone = ["Ronalinho", "Silvinho", "Belleti", "Edmilson"];
const bresilienMilanAC = ["Rivaldo", "Kaka", "Cafu"];

const equipeNationaleBresil = [
  ...bresilienRealMadrid,
  ...bresilienFCBarcelone,
  ...bresilienMilanAC,
];

// Objets
const maFamille = { nom: "Lisangola", pays: "France" };

const maFamilleCopieReference = maFamille;

const maFamille2 = { ...maFamille };

const moi = { ...maFamille, prenom: "Christian", age: 78 };
const monFrere = { ...maFamille, prenom: "Emma", age: 89 };