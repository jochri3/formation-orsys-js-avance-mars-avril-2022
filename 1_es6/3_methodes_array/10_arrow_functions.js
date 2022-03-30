function somme(nombre1, nombre2) {
  return nombre1 + nombre2;
}

const somme2 = function (nombre1, nombre2) {
  return nombre1 + nombre2;
};

console.log("somme(3,4) : ", somme(3, 4));
console.log("somme2(5,7) : ", somme2(5, 7));

// IIFE : Immediatly Invoked Function Expression
(function (a, b) {
  return a + b;
})(8, 9);

// Arrow functions
const somme3 = (nombre1, nombre2) => {
  const somme = nombre1 + nombre2;
  return somme;
};

const somme4 = (nombre1, nombre2) => nombre1 + nombre2;

((a, b) => a + b)(6, 7);
