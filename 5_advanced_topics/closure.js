function a() {
  let nom = "toto";
  console.log("Fonction externe");
  return function () {
    nom = "Jean";
    console.log(nom);
  };
}

// Code reuse
function makeBetween(min, max) {
  return function (valeur) {
    return valeur >= min && valeur <= max;
  };
}

const inRange = makeBetween(18, 100); //
const isNiceWeather = makeBetween(18, 23);
const isNineties = makeBetween(1900, 2000);

console.log(inRange(45));

//
function isChild(min, max) {
  return function (valeur) {
    return valeur >= min && valeur <= max;
  };
}

const inItaly = isChild(0, 25);
const inFrance = isChild(0, 17);
